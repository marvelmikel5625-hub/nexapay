import { walletService } from './wallet.service'
import { transactionService } from './transaction.service'
import { feeService } from './fee.service'

export const transferService = {
  async validateTransfer(
    senderId: string,
    recipientId: string,
    amount: number,
    pin: string
  ): Promise<{ valid: boolean; error?: string }> {
    // Validate amount
    if (amount < 100) {
      return { valid: false, error: 'Minimum transfer amount is ₦1.00' }
    }

    if (amount > 500000000) {
      return { valid: false, error: 'Maximum transfer amount is ₦5,000,000' }
    }

    // Check sender balance
    const balance = await walletService.getBalance(senderId)
    const fee = feeService.calculateTransferFee(amount)
    const total = amount + fee

    if (balance < total) {
      return { valid: false, error: 'Insufficient balance' }
    }

    // Validate PIN (demo: accept 1234)
    if (pin !== '1234') {
      return { valid: false, error: 'Invalid transaction PIN' }
    }

    return { valid: true }
  },

  async processTransfer(
    senderId: string,
    recipientId: string,
    amount: number,
    description: string
  ) {
    const fee = feeService.calculateTransferFee(amount)
    const total = amount + fee

    // Create transaction record
    const transaction = await transactionService.createTransaction({
      user_id: senderId,
      type: 'transfer',
      description,
      amount,
      fee,
      discount: 0,
      total,
      recipient: recipientId,
      metadata: { sender_id: senderId, recipient_id: recipientId },
    })

    try {
      await transactionService.processTransaction(transaction.id)

      // Debit sender
      await walletService.debitWallet(senderId, total, transaction.reference)

      // Credit recipient
      await walletService.creditWallet(recipientId, amount, transaction.reference)

      // Complete transaction
      await transactionService.completeTransaction(transaction.id)

      return transaction
    } catch (error) {
      await transactionService.failTransaction(transaction.id, error instanceof Error ? error.message : 'Transfer failed')
      throw error
    }
  },

  async getTransferFee(amount: number): Promise<number> {
    return feeService.calculateTransferFee(amount)
  },
}
