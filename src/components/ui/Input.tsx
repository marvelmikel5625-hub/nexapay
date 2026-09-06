import { forwardRef, InputHTMLAttributes, ReactNode } from 'react'
import { cn } from '../../utils/cn'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  icon?: ReactNode
  fullWidth?: boolean
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, icon, fullWidth, type = 'text', ...props }, ref) => {
    return (
      <div className={cn('space-y-1.5', fullWidth && 'w-full')}>
        {label && (
          <label className="text-sm font-medium text-[#0F172A]">
            {label}
          </label>
        )}
        <div className="relative">
          {icon && (
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
              {icon}
            </span>
          )}
          <input
            ref={ref}
            type={type}
            className={cn(
              'w-full rounded-xl border border-gray-200 bg-white px-4 py-2.5',
              'text-sm text-[#0F172A] placeholder:text-gray-400',
              'focus:border-[#2563EB] focus:outline-none focus:ring-2 focus:ring-[#2563EB]/20',
              'disabled:cursor-not-allowed disabled:bg-gray-50',
              error && 'border-[#EF4444] focus:border-[#EF4444] focus:ring-[#EF4444]/20',
              icon && 'pl-10',
              className
            )}
            {...props}
          />
        </div>
        {error && (
          <p className="text-sm text-[#EF4444]">{error}</p>
        )}
      </div>
    )
  }
)

Input.displayName = 'Input'
