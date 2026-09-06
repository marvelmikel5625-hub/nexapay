export type TransactionType = 
  | 'transfer'
  | 'deposit'
  | 'withdrawal'
  | 'airtime'
  | 'data'
  | 'electricity'
  | 'tv'

export type TransactionStatus = 
  | 'created'
  | 'pending'
  | 'processing'
  | 'successful'
  | 'failed'
  | 'reversed'

export interface Transaction {
  id: string
  reference: string
  idempotency_key: string
  user_id: string
  type: TransactionType
  category?: string
  description: string
  amount: number // in kobo
  fee: number // in kobo
  discount: number // in kobo
  total: number // in kobo
  status: TransactionStatus
  recipient?: string
  provider?: string
  metadata: Record<string, any>
  created_at: string
  completed_at?: string
}

export interface TransactionFilters {
  type?: TransactionType
  status?: TransactionStatus
  startDate?: string
  endDate?: string
  search?: string
  page?: number
  limit?: number
}
