import { useState, useEffect } from 'react'
import { useAuth } from './useAuth'

interface Transaction {
  id: string
  reference: string
  type: string
  description: string
  amount: number
  fee: number
  discount: number
  total: number
  status: string
  recipient?: string
  created_at: string
}

export function useTransactions(limit: number = 5) {
  const { user } = useAuth()
  const [transactions, setTransactions] = useState<Transaction[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!user) {
      setTransactions([])
      setLoading(false)
      return
    }

    // Mock transactions for demo
    const mockTransactions: Transaction[] = [
      {
        id: '1',
        reference: 'NXP-20260906-001',
        type: 'transfer',
        description: 'Transfer to John Doe',
        amount: 2500000,
        fee: 1000,
        discount: 0,
        total: 2501000,
        status: 'successful',
        recipient: 'John Doe',
        created_at: new Date(Date.now() - 3600000).toISOString(),
      },
      {
        id: '2',
        reference: 'NXP-20260906-002',
        type: 'airtime',
        description: 'MTN Airtime Purchase',
        amount: 100000,
        fee: 0,
        discount: 0,
        total: 100000,
        status: 'successful',
        recipient: '08012345678',
        created_at: new Date(Date.now() - 7200000).toISOString(),
      },
      {
        id: '3',
        reference: 'NXP-20260905-003',
        type: 'deposit',
        description: 'Money received',
        amount: 5000000,
        fee: 0,
        discount: 0,
        total: 5000000,
        status: 'successful',
        created_at: new Date(Date.now() - 86400000).toISOString(),
      },
    ]

    setTransactions(mockTransactions.slice(0, limit))
    setLoading(false)
  }, [user, limit])

  return { transactions, loading }
}
