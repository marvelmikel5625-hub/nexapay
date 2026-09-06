export interface FeeTier {
  min: number
  max: number
  fee: number
}

export const TRANSFER_FEES: FeeTier[] = [
  { min: 0, max: 0, fee: 0 }, // NexaPay to NexaPay is free
  { min: 100, max: 5000, fee: 10 },
  { min: 5001, max: 20000, fee: 15 },
  { min: 20001, max: 50000, fee: 25 },
  { min: 50001, max: 100000, fee: 50 },
  { min: 100001, max: 500000, fee: 100 },
  { min: 500001, max: 1000000, fee: 150 },
  { min: 1000001, max: 5000000, fee: 250 },
]

export function calculateTransferFee(amount: number): number {
  if (amount === 0) return 0
  for (const tier of TRANSFER_FEES) {
    if (amount >= tier.min && amount <= tier.max) {
      return tier.fee
    }
  }
  return 250 // Default max fee
}
