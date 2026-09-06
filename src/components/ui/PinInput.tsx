import { useState, useRef, KeyboardEvent, ChangeEvent, useEffect } from 'react'
import { cn } from '../../utils/cn'
import { Eye, EyeOff } from 'lucide-react'

interface PinInputProps {
  length?: number
  value?: string
  onChange?: (value: string) => void
  onComplete?: (value: string) => void
  autoFocus?: boolean
  disabled?: boolean
  error?: boolean
  type?: 'password' | 'text'
}

export function PinInput({ 
  length = 4, 
  value = '', 
  onChange, 
  onComplete,
  autoFocus = false,
  disabled = false,
  error = false,
  type = 'password'
}: PinInputProps) {
  const [show, setShow] = useState(type === 'text')
  const [internalValue, setInternalValue] = useState<string[]>(
    value ? value.split('').slice(0, length) : Array(length).fill('')
  )
  const [focusedIndex, setFocusedIndex] = useState<number>(autoFocus ? 0 : -1)
  const inputRefs = useRef<(HTMLInputElement | null)[]>([])

  useEffect(() => {
    if (value) {
      const chars = value.split('').slice(0, length)
      setInternalValue([...chars, ...Array(length - chars.length).fill('')])
    }
  }, [value, length])

  useEffect(() => {
    if (autoFocus && inputRefs.current[0]) {
      inputRefs.current[0].focus()
    }
  }, [autoFocus])

  const handleChange = (index: number, e: ChangeEvent<HTMLInputElement>) => {
    const char = e.target.value.slice(-1)
    if (char && !/^\d$/.test(char)) return

    const newValue = [...internalValue]
    newValue[index] = char
    setInternalValue(newValue)

    const fullValue = newValue.join('')
    onChange?.(fullValue)

    // Move to next input
    if (char && index < length - 1) {
      inputRefs.current[index + 1]?.focus()
    }

    // Check if complete
    if (fullValue.length === length) {
      onComplete?.(fullValue)
    }
  }

  const handleKeyDown = (index: number, e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && !internalValue[index] && index > 0) {
      inputRefs.current[index - 1]?.focus()
    }
    if (e.key === 'ArrowLeft' && index > 0) {
      inputRefs.current[index - 1]?.focus()
    }
    if (e.key === 'ArrowRight' && index < length - 1) {
      inputRefs.current[index + 1]?.focus()
    }
  }

  const handleFocus = (index: number) => {
    setFocusedIndex(index)
  }

  const handleBlur = () => {
    setFocusedIndex(-1)
  }

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault()
    const pasted = e.clipboardData.getData('text')
    const digits = pasted.replace(/\D/g, '').slice(0, length)
    const newValue = digits.split('')
    const newInternalValue = [...internalValue]
    newValue.forEach((char, i) => {
      if (i < length) newInternalValue[i] = char
    })
    setInternalValue(newInternalValue)

    const fullValue = newInternalValue.join('')
    onChange?.(fullValue)

    // Focus last filled or next empty
    const nextIndex = Math.min(digits.length, length - 1)
    inputRefs.current[nextIndex]?.focus()

    if (fullValue.length === length) {
      onComplete?.(fullValue)
    }
  }

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-center gap-2">
        {Array.from({ length }).map((_, index) => (
          <div key={index} className="relative">
            <input
              ref={(el) => (inputRefs.current[index] = el)}
              type={show ? 'text' : 'password'}
              maxLength={1}
              inputMode="numeric"
              autoComplete="one-time-code"
              value={internalValue[index] || ''}
              onChange={(e) => handleChange(index, e)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              onFocus={() => handleFocus(index)}
              onBlur={handleBlur}
              onPaste={handlePaste}
              disabled={disabled}
              className={cn(
                'w-12 h-14 text-center text-xl font-semibold rounded-xl border-2',
                'bg-white transition-all duration-200',
                'focus:border-[#2563EB] focus:outline-none focus:ring-2 focus:ring-[#2563EB]/20',
                error && 'border-[#EF4444] focus:border-[#EF4444] focus:ring-[#EF4444]/20',
                internalValue[index] && 'border-[#2563EB]',
                disabled && 'bg-gray-50 cursor-not-allowed',
                focusedIndex === index && 'border-[#2563EB] ring-2 ring-[#2563EB]/20'
              )}
              aria-label={`PIN digit ${index + 1}`}
            />
          </div>
        ))}
        
        {type === 'password' && (
          <button
            type="button"
            onClick={() => setShow(!show)}
            className="p-2 rounded-xl hover:bg-gray-100 transition-colors"
            aria-label={show ? 'Hide PIN' : 'Show PIN'}
          >
            {show ? <EyeOff className="w-5 h-5 text-gray-400" /> : <Eye className="w-5 h-5 text-gray-400" />}
          </button>
        )}
      </div>

      {error && (
        <p className="text-sm text-[#EF4444] text-center">
          Invalid PIN. Please try again.
        </p>
      )}
    </div>
  )
}
