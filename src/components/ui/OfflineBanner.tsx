import { WifiOff, Wifi } from 'lucide-react'
import { useNetwork } from '../../hooks/useNetwork'
import { cn } from '../../utils/cn'

export function OfflineBanner() {
  const { isOnline } = useNetwork()

  return (
    <div
      className={cn(
        'fixed top-0 inset-x-0 z-50 px-4 py-2.5 text-center text-sm font-medium transition-all duration-500',
        isOnline 
          ? 'bg-emerald-50 text-emerald-700 translate-y-0' 
          : 'bg-amber-50 text-amber-700 translate-y-0'
      )}
    >
      {isOnline ? (
        <span className="flex items-center justify-center gap-2">
          <Wifi className="w-4 h-4" />
          Back online
        </span>
      ) : (
        <span className="flex items-center justify-center gap-2">
          <WifiOff className="w-4 h-4" />
          You're offline. Some features may be unavailable.
        </span>
      )}
    </div>
  )
}
