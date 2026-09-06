import { useState, useEffect } from 'react'
import { useAuth } from './useAuth'

export function useNotifications() {
  const { user } = useAuth()
  const [unreadCount, setUnreadCount] = useState(0)

  useEffect(() => {
    if (!user) {
      setUnreadCount(0)
      return
    }
    // In a real app, fetch from Supabase
    setUnreadCount(3)
  }, [user])

  return { unreadCount }
}
