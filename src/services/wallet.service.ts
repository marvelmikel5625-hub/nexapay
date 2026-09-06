import { supabase } from '../lib/supabase.client'
import { Wallet } from '../types/wallet.types'

export const walletService = {
  async getWallet(userId: string): Promise<Wallet | null> {
    const { data, error } = await supabase
      .from('wallets')
      .select('*')
      .eq('user_id', userId)
      .single()

    if (error) {
      // If wallet doesn't exist, create one
      if (error.code === 'PGRST116') {
        return this.createWallet(userId)
      }
      throw error
    }
    return data
  },

  async createWallet(userId: string): Promise<Wallet> {
    const { data, error } = await supabase
      .from('wallets')
      .insert({
        user_id: userId,
        balance: 0,
        currency: 'NGN',
        status: 'active',
      })
      .select()
      .single()

    if (error) throw error
    return data
  },

  async getBalance(userId: string): Promise<number> {
    const wallet = await this.getWallet(userId)
    return wallet?.balance || 0
  },

  async creditWallet(userId: string, amount: number, reference: string): Promise<Wallet> {
    // Get current wallet
    const wallet = await this.getWallet(userId)
    if (!wallet) throw new Error('Wallet not found')

    // Update balance
    const newBalance = wallet.balance + amount
    const { data, error } = await supabase
      .from('wallets')
      .update({ balance: newBalance })
      .eq('id', wallet.id)
      .select()
      .single()

    if (error) throw error

    // Record transaction
    await supabase
      .from('wallet_transactions')
      .insert({
        wallet_id: wallet.id,
        amount,
        type: 'credit',
        description: `Credit via ${reference}`,
        reference,
        balance_after: newBalance,
      })

    return data
  },

  async debitWallet(userId: string, amount: number, reference: string): Promise<Wallet> {
    const wallet = await this.getWallet(userId)
    if (!wallet) throw new Error('Wallet not found')
    if (wallet.balance < amount) throw new Error('Insufficient balance')

    const newBalance = wallet.balance - amount
    const { data, error } = await supabase
      .from('wallets')
      .update({ balance: newBalance })
      .eq('id', wallet.id)
      .select()
      .single()

    if (error) throw error

    await supabase
      .from('wallet_transactions')
      .insert({
        wallet_id: wallet.id,
        amount,
        type: 'debit',
        description: `Debit via ${reference}`,
        reference,
        balance_after: newBalance,
      })

    return data
  },
}
