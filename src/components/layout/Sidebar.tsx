import { NavLink, useNavigate } from 'react-router-dom'
import { 
  LayoutDashboard, 
  Wallet, 
  Send, 
  Phone, 
  Wifi, 
  Lightbulb, 
  Tv, 
  History, 
  Bell, 
  User, 
  LifeBuoy,
  LogOut,
} from 'lucide-react'
import { useAuth } from '../../hooks/useAuth'

const navigationItems = [
  { path: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { path: '/wallet', label: 'Wallet', icon: Wallet },
  { path: '/transfers', label: 'Transfers', icon: Send },
  { path: '/airtime', label: 'Airtime', icon: Phone },
  { path: '/data', label: 'Data', icon: Wifi },
  { path: '/electricity', label: 'Electricity', icon: Lightbulb },
  { path: '/tv', label: 'TV', icon: Tv },
  { path: '/transactions', label: 'Transactions', icon: History },
  { path: '/notifications', label: 'Notifications', icon: Bell },
  { path: '/profile', label: 'Profile', icon: User },
  { path: '/support', label: 'Help & Support', icon: LifeBuoy },
]

export function Sidebar() {
  const { logout } = useAuth()
  const navigate = useNavigate()

  const handleLogout = async () => {
    await logout()
    navigate('/login')
  }

  return (
    <aside className="hidden lg:flex lg:flex-col lg:fixed lg:inset-y-0 lg:left-0 lg:w-72 bg-white border-r border-gray-100">
      <div className="flex items-center gap-3 px-4 py-6 border-b border-gray-100">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-[#0F172A] via-[#2563EB] to-[#7C3AED] flex items-center justify-center">
          <span className="text-white font-bold text-xl">N</span>
        </div>
        <div>
          <h1 className="text-lg font-bold text-[#0F172A]">NexaPay</h1>
          <p className="text-xs text-gray-500">Payments made simple.</p>
        </div>
      </div>

      <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
        {navigationItems.map((item) => {
          const Icon = item.icon
          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200 ${
                  isActive
                    ? 'bg-[#2563EB] text-white shadow-lg shadow-blue-500/20'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-[#0F172A]'
                }`
              }
            >
              <Icon className="w-5 h-5" />
              <span className="text-sm font-medium">{item.label}</span>
            </NavLink>
          )
        })}
      </nav>

      <div className="border-t border-gray-100 p-4">
        <button
          onClick={handleLogout}
          className="flex items-center gap-3 w-full px-3 py-2.5 rounded-xl text-gray-600 hover:bg-red-50 hover:text-red-500 transition-all duration-200"
        >
          <LogOut className="w-5 h-5" />
          <span className="text-sm font-medium">Logout</span>
        </button>
      </div>
    </aside>
  )
}
