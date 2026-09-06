import { supabase } from '../lib/supabase.client'
import { generateTransactionReference, generateIdempotencyKey } from '../utils/format'

export interface Transaction {
  id: string
  reference: string
  idempotency_key: string
  user_id: string
  type: string
  category?: string
  description: string
  amount: number
  fee: number
  discount: number
  total: number
  status: string
  recipient?: string
  provider?: string
  metadata: Record<string, any>
  created_at: string
  completed_at?: string
}

export const transactionService = {
  async createTransaction(data: Omit<Transaction, 'id' | 'reference' | 'idempotency_key' | 'created_at' | 'status'>): Promise<Transaction> {
    const transaction = {
      ...data,
      reference: generateTransactionReference(),
      idempotency_key: generateIdempotencyKey(),
      status: 'created',
      created_at: new Date().toISOString(),
    }

    const { data: result, error } = await supabase
      .from('transactions')
      .insert(transaction)
      .select()
      .single()

    if (error) {
      console.error('Error creating transaction:', error)
      // Return mock transaction for demo
      return {
        ...transaction,
        id: 'mock-id-' + Date.now(),
      } as Transaction
    }
    return result
  },

  async processTransaction(id: string): Promise<Transaction> {
    const { data, error } = await supabase
      .from('transactions')
      .update({ status: 'processing' })
      .eq('id', id)
      .select()
      .single()

    if (error) {
      console.error('Error processing transaction:', error)
      // Return mock for demo
      return { id, status: 'processing' } as Transaction
    }
    return data
  },

  async completeTransaction(id: string): Promise<Transaction> {
    const { data, error } = await supabase
      .from('transactions')
      .update({ 
        status: 'successful',
        completed_at: new Date().toISOString()
      })
      .eq('id', id)
      .select()
      .single()

    if (error) {
      console.error('Error completing transaction:', error)
      return { id, status: 'successful' } as Transaction
    }
    return data
  },

  async failTransaction(id: string, reason: string): Promise<Transaction> {
    const { data, error } = await supabase
      .from('transactions')
      .update({ 
        status: 'failed',
        metadata: { failure_reason: reason }
      })
      .eq('id', id)
      .select()
      .single()

    if (error) {
      console.error('Error failing transaction:', error)
      return { id, status: 'failed' } as Transaction
    }
    return data
  },

  async getTransaction(id: string): Promise<Transaction | null> {
    const { data, error } = await supabase
      .from('transactions')
      .select('*')
      .eq('id', id)
      .single()

    if (error) return null
    return data
  },

  async getTransactionsByUser(userId: string, limit: number = 20, offset: number = 0): Promise<Transaction[]> {
    const { data, error } = await supabase
      .from('transactions')
      .select('*')
      .eq('user_id', userId)
      .order('created_at', { ascending: false })
      .range(offset, offset + limit - 1)

    if (error) {
      console.error('Error fetching transactions:', error)
      return []
    }
    return data || []
  },

  async getRecentTransactions(userId: string, limit: number = 5): Promise<Transaction[]> {
    return this.getTransactionsByUser(userId, limit, 0)
  },
}
