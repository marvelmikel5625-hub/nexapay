import { createContext, useContext, useState, useEffect } from 'react'
import { useAuth } from './AuthContext'
import { Wallet } from '../types/wallet.types'
import { walletService } from '../services/wallet.service'

interface WalletContextType {
  wallet: Wallet | null
  loading: boolean
  refreshWallet: () => Promise<void>
  updateBalance: (amount: number) => Promise<void>
}

const WalletContext = createContext<WalletContextType | undefined>(undefined)

export function WalletProvider({ children }: { children: React.ReactNode }) {
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
      const data = await walletService.getWallet(user.id)
      setWallet(data)
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

export function useWallet() {
  const context = useContext(WalletContext)
  if (!context) throw new Error('useWallet must be used within a WalletProvider')
  return context
}
