import { CheckCircle } from 'lucide-react'
import { Button } from '../ui/Button'

interface SuccessScreenProps {
  title?: string
  message?: string
  action?: {
    label: string
    onClick: () => void
  }
}

export function SuccessScreen({ 
  title = 'Success!', 
  message = 'Operation completed successfully.',
  action 
}: SuccessScreenProps) {
  return (
    <div className="min-h-[400px] flex flex-col items-center justify-center p-8 text-center">
      <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mb-4">
        <CheckCircle className="w-8 h-8 text-emerald-500" />
      </div>
      <h3 className="text-lg font-semibold text-[#0F172A] mb-2">{title}</h3>
      <p className="text-gray-500 text-sm max-w-md mb-6">{message}</p>
      {action && <Button onClick={action.onClick}>{action.label}</Button>}
    </div>
  )
}
