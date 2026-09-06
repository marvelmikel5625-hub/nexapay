import { supabase } from '../lib/supabase.client'
import { Transaction, TransactionStatus, TransactionType } from '../types/transaction.types'
import { generateTransactionReference, generateIdempotencyKey } from '../utils/format'

export const transactionService = {
  async createTransaction(data: Omit<Transaction, 'id' | 'reference' | 'idempotency_key' | 'created_at' | 'status'>): Promise<Transaction> {
    const transaction: Partial<Transaction> = {
      ...data,
      reference: generateTransactionReference(),
      idempotency_key: generateIdempotencyKey(),
      status: 'created' as TransactionStatus,
      created_at: new Date().toISOString(),
    }

    const { data: result, error } = await supabase
      .from('transactions')
      .insert(transaction)
      .select()
      .single()

    if (error) throw error
    return result
  },

  async processTransaction(id: string): Promise<Transaction> {
    const { data, error } = await supabase
      .from('transactions')
      .update({ status: 'processing' as TransactionStatus })
      .eq('id', id)
      .select()
      .single()

    if (error) throw error
    return data
  },

  async completeTransaction(id: string): Promise<Transaction> {
    const { data, error } = await supabase
      .from('transactions')
      .update({ 
        status: 'successful' as TransactionStatus,
        completed_at: new Date().toISOString()
      })
      .eq('id', id)
      .select()
      .single()

    if (error) throw error
    return data
  },

  async failTransaction(id: string, reason: string): Promise<Transaction> {
    const { data, error } = await supabase
      .from('transactions')
      .update({ 
        status: 'failed' as TransactionStatus,
        metadata: { failure_reason: reason }
      })
      .eq('id', id)
      .select()
      .single()

    if (error) throw error
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

    if (error) throw error
    return data || []
  },

  async getRecentTransactions(userId: string, limit: number = 5): Promise<Transaction[]> {
    return this.getTransactionsByUser(userId, limit, 0)
  },

  async getTransactionByReference(reference: string): Promise<Transaction | null> {
    const { data, error } = await supabase
      .from('transactions')
      .select('*')
      .eq('reference', reference)
      .single()

    if (error) return null
    return data
  },

  async checkIdempotency(key: string): Promise<Transaction | null> {
    const { data, error } = await supabase
      .from('transactions')
      .select('*')
      .eq('idempotency_key', key)
      .single()

    if (error) return null
    return data
  },
}
