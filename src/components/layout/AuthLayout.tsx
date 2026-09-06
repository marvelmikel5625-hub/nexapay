import { Outlet } from 'react-router-dom'

export function AuthLayout() {
  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <div className="max-w-md mx-auto px-4 py-8">
        <Outlet />
      </div>
    </div>
  )
}
