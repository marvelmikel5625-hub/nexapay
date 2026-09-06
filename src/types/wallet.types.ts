export interface Wallet {
  id: string
  user_id: string
  balance: number // in kobo
  currency: string
  status: 'active' | 'frozen' | 'suspended' | 'closed'
  created_at: string
  updated_at: string
}

export interface WalletTransaction {
  id: string
  wallet_id: string
  amount: number
  type: 'credit' | 'debit'
  description: string
  reference: string
  balance_after: number
  created_at: string
}
