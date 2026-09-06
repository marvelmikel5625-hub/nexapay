export interface FeeBreakdown {
  amount: number
  fee: number
  discount: number
  total: number
}

export const feeService = {
  calculateTransferFee(amount: number): number {
    // Fee tiers in kobo
    if (amount === 0) return 0
    if (amount <= 500000) return 1000 // ₦10
    if (amount <= 2000000) return 1500 // ₦15
    if (amount <= 5000000) return 2500 // ₦25
    if (amount <= 10000000) return 5000 // ₦50
    if (amount <= 50000000) return 10000 // ₦100
    if (amount <= 100000000) return 15000 // ₦150
    return 25000 // ₦250
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
