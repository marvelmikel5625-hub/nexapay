import { NavLink } from 'react-router-dom'
import { LayoutDashboard, Wallet, Send, History, User } from 'lucide-react'

const navItems = [
  { path: '/dashboard', label: 'Home', icon: LayoutDashboard },
  { path: '/wallet', label: 'Wallet', icon: Wallet },
  { path: '/transfers', label: 'Send', icon: Send },
  { path: '/transactions', label: 'History', icon: History },
  { path: '/profile', label: 'Profile', icon: User },
]

export function BottomNavigation() {
  return (
    <nav className="lg:hidden fixed bottom-0 inset-x-0 bg-white border-t border-gray-100 px-2 pb-2 pt-1 z-30">
      <div className="flex items-center justify-around">
        {navItems.map((item) => {
          const Icon = item.icon
          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `flex flex-col items-center gap-0.5 py-1 px-3 rounded-lg transition-all duration-200 ${
                  isActive
                    ? 'text-[#2563EB]'
                    : 'text-gray-400 hover:text-gray-600'
                }`
              }
            >
              <Icon className="w-5 h-5" />
              <span className="text-[10px] font-medium">{item.label}</span>
            </NavLink>
          )
        })}
      </div>
    </nav>
  )
}
