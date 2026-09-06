import { walletService } from './wallet.service'
import { transactionService } from './transaction.service'
import { calculateTransferFee } from '../constants/fees'
import { LIMITS } from '../constants/limits'

export const transferService = {
  async validateTransfer(
    senderId: string,
    recipientId: string,
    amount: number,
    pin: string
  ): Promise<{ valid: boolean; error?: string }> {
    // Validate amount
    if (amount < LIMITS.MIN_TRANSFER_AMOUNT) {
      return { valid: false, error: `Minimum transfer amount is ₦${LIMITS.MIN_TRANSFER_AMOUNT / 100}` }
    }

    if (amount > LIMITS.MAX_TRANSFER_AMOUNT) {
      return { valid: false, error: `Maximum transfer amount is ₦${LIMITS.MAX_TRANSFER_AMOUNT / 100}` }
    }

    // Check sender balance
    const balance = await walletService.getBalance(senderId)
    const fee = calculateTransferFee(amount)
    const total = amount + fee

    if (balance < total) {
      return { valid: false, error: 'Insufficient balance' }
    }

    // Validate PIN (in production, this would check against stored hash)
    // For demo, we'll check if PIN is "1234" (in production, use secure verification)
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
    const fee = calculateTransferFee(amount)
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

    // Process the transfer (in production, this would be more complex)
    // For demo, we'll simulate success
    try {
      await transactionService.processTransaction(transaction.id)

      // Debit sender
      await walletService.debitWallet(senderId, total, transaction.reference)

      // Credit recipient (in a real system, this would be a separate account)
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
    return calculateTransferFee(amount)
  },
}
