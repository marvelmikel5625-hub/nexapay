import { AlertCircle } from 'lucide-react'
import { Button } from '../ui/Button'

interface ErrorScreenProps {
  title?: string
  message?: string
  onRetry?: () => void
}

export function ErrorScreen({ 
  title = 'Something went wrong', 
  message = 'We encountered an error. Please try again.',
  onRetry 
}: ErrorScreenProps) {
  return (
    <div className="min-h-[400px] flex flex-col items-center justify-center p-8 text-center">
      <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center mb-4">
        <AlertCircle className="w-8 h-8 text-red-500" />
      </div>
      <h3 className="text-lg font-semibold text-[#0F172A] mb-2">{title}</h3>
      <p className="text-gray-500 text-sm max-w-md mb-6">{message}</p>
      {onRetry && <Button onClick={onRetry}>Try Again</Button>}
    </div>
  )
}
