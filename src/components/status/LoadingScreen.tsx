import { Loader2 } from 'lucide-react'

interface LoadingScreenProps {
  message?: string
}

export function LoadingScreen({ message = 'Loading...' }: LoadingScreenProps) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#F8FAFC]">
      <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-[#0F172A] via-[#2563EB] to-[#7C3AED] flex items-center justify-center mb-6">
        <Loader2 className="w-8 h-8 text-white animate-spin" />
      </div>
      <p className="text-gray-600 font-medium">{message}</p>
    </div>
  )
}
