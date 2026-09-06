import { createContext, useState, useEffect, ReactNode } from 'react'
import { useAuth } from '../hooks/useAuth'

interface Wallet {
  id: string
  user_id: string
  balance: number
  currency: string
  status: 'active' | 'frozen' | 'suspended' | 'closed'
  created_at: string
  updated_at: string
}

interface WalletContextType {
  wallet: Wallet | null
  loading: boolean
  refreshWallet: () => Promise<void>
  updateBalance: (amount: number) => Promise<void>
}

// Export the context
export const WalletContext = createContext<WalletContextType | undefined>(undefined)

export function WalletProvider({ children }: { children: ReactNode }) {
  const [wallet, setWallet] = useState<Wallet | null>(null)
  const [loading, setLoading] = useState(true)
  const { user } = useAuth()

  const fetchWallet = async () => {
    if (!user) {
      setWallet(null)
      setLoading(false)
      return
    }

    try {
      // Mock wallet for demo
      const mockWallet: Wallet = {
        id: 'wallet-1',
        user_id: user.id,
        balance: 12545000, // ₦125,450.00 in kobo
        currency: 'NGN',
        status: 'active',
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      }
      setWallet(mockWallet)
    } catch (error) {
      console.error('Failed to fetch wallet:', error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchWallet()
  }, [user])

  const refreshWallet = async () => {
    setLoading(true)
    await fetchWallet()
  }

  const updateBalance = async (amount: number) => {
    if (wallet) {
      setWallet({ ...wallet, balance: wallet.balance + amount })
    }
  }

  return (
    <WalletContext.Provider
      value={{ wallet, loading, refreshWallet, updateBalance }}
    >
      {children}
    </WalletContext.Provider>
  )
}
