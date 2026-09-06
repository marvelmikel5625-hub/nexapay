import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'
import { LoadingScreen } from '../status/LoadingScreen'

export function ProtectedRoute() {
  const { user, loading } = useAuth()

  if (loading) {
    return <LoadingScreen message="Loading your account..." />
  }

  if (!user) {
    return <Navigate to="/login" replace />
  }

  return <Outlet />
}
