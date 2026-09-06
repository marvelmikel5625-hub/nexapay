import { transactionService } from './transaction.service'
import { walletService } from './wallet.service'

export interface AirtimePurchase {
  network: string
  phone: string
  amount: number
  userId: string
}

export const airtimeService = {
  async purchase(data: AirtimePurchase) {
    const { network, phone, amount, userId } = data

    // Validate
    if (amount < 50) throw new Error('Minimum airtime purchase is ₦50')
    if (amount > 50000) throw new Error('Maximum airtime purchase is ₦50,000')
    if (phone.length < 10) throw new Error('Invalid phone number')

    // Check balance
    const balance = await walletService.getBalance(userId)
    if (balance < amount) throw new Error('Insufficient balance')

    // Create transaction
    const transaction = await transactionService.createTransaction({
      user_id: userId,
      type: 'airtime',
      description: `Airtime purchase - ${network} ${phone}`,
      amount,
      fee: 0,
      discount: 0,
      total: amount,
      provider: network,
      metadata: { network, phone, amount },
    })

    // Process
    try {
      await transactionService.processTransaction(transaction.id)

      // Debit wallet
      await walletService.debitWallet(userId, amount, transaction.reference)

      // In a real system, this would call an external API
      // For demo, we'll simulate success
      await transactionService.completeTransaction(transaction.id)

      return transaction
    } catch (error) {
      await transactionService.failTransaction(transaction.id, error instanceof Error ? error.message : 'Airtime purchase failed')
      throw error
    }
  },

  async getNetworks() {
    return [
      { id: 'mtn', name: 'MTN', code: 'MTN' },
      { id: 'airtel', name: 'Airtel', code: 'AIRTEL' },
      { id: 'glo', name: 'Glo', code: 'GLO' },
      { id: '9mobile', name: '9mobile', code: '9MOBILE' },
    ]
  },

  async getPresetAmounts() {
    return [50, 100, 200, 300, 400, 500, 1000]
  },
}
