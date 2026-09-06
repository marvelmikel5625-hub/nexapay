import { Outlet } from 'react-router-dom'
import { Sidebar } from './Sidebar'
import { BottomNavigation } from './BottomNavigation'
import { Header } from './Header'
import { OfflineBanner } from '../ui/OfflineBanner'
import { useNetwork } from '../../hooks/useNetwork'

export function DashboardLayout() {
  const { isOnline } = useNetwork()

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <Sidebar />
      
      <div className="lg:pl-72">
        <Header />
        
        <main className="pb-24 lg:pb-8">
          {!isOnline && <OfflineBanner />}
          <div className="max-w-7xl mx-auto px-4 py-6 lg:px-6">
            <Outlet />
          </div>
        </main>
        
        <BottomNavigation />
      </div>
    </div>
  )
}
