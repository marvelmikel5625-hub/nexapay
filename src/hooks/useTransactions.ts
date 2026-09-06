import { useState, useEffect } from 'react'
import { useAuth } from './useAuth'
import { transactionService } from '../services/transaction.service'

export function useTransactions(limit: number = 5) {
  const { user } = useAuth()
  const [transactions, setTransactions] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!user) {
      setTransactions([])
      setLoading(false)
      return
    }

    const fetchTransactions = async () => {
      try {
        const data = await transactionService.getRecentTransactions(user.id, limit)
        setTransactions(data || [])
      } catch (error) {
        console.error('Failed to fetch transactions:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchTransactions()
  }, [user, limit])

  return { transactions, loading }
}
