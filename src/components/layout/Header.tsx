import { Bell } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'

export function Header() {
  const { user, profile } = useAuth()

  const getGreeting = () => {
    const hour = new Date().getHours()
    if (hour < 12) return 'Good morning'
    if (hour < 17) return 'Good afternoon'
    return 'Good evening'
  }

  return (
    <header className="bg-white border-b border-gray-100 px-4 py-4 lg:px-6">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <div>
          <p className="text-sm text-gray-500">{getGreeting()},</p>
          <h2 className="text-lg font-semibold text-[#0F172A]">
            {profile?.first_name || user?.email?.split('@')[0] || 'User'}
          </h2>
        </div>

        <div className="flex items-center gap-3">
          <Link
            to="/notifications"
            className="relative p-2 rounded-xl hover:bg-gray-50 transition-colors"
            aria-label="Notifications"
          >
            <Bell className="w-5 h-5 text-gray-600" />
          </Link>

          <Link to="/profile" className="p-1">
            <div className="w-9 h-9 rounded-full bg-gradient-to-r from-[#2563EB] to-[#7C3AED] flex items-center justify-center text-white font-medium text-sm">
              {profile?.first_name?.charAt(0) || 'U'}
            </div>
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header
