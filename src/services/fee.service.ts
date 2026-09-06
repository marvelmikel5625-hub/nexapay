import { TRANSFER_FEES, calculateTransferFee } from '../constants/fees'

export interface FeeBreakdown {
  amount: number
  fee: number
  discount: number
  total: number
}

export const feeService = {
  calculateTransferFee(amount: number): number {
    return calculateTransferFee(amount)
  },

  calculateDiscount(amount: number, percentage: number): number {
    if (percentage <= 0 || percentage > 100) return 0
    return Math.round((amount * percentage) / 100)
  },

  calculateTotal(amount: number, fee: number, discount: number): number {
    return amount + fee - discount
  },

  getFeeBreakdown(amount: number, discountPercentage: number = 0): FeeBreakdown {
    const fee = this.calculateTransferFee(amount)
    const discount = this.calculateDiscount(amount, discountPercentage)
    const total = this.calculateTotal(amount, fee, discount)

    return {
      amount,
      fee,
      discount,
      total,
    }
  },
}
