export interface Tier {
  id: number
  name: string
  maxBalance: number // in kobo
  dailyLimit: number // in kobo
  features: string[]
  requirements: string[]
}

export const ACCOUNT_TIERS: Tier[] = [
  {
    id: 1,
    name: 'Basic',
    maxBalance: 50_000 * 100, // ₦50,000 in kobo
    dailyLimit: 50_000 * 100,
    features: ['Send money', 'Receive money', 'Buy airtime', 'Data purchase'],
    requirements: ['Phone verification', 'Email verification'],
  },
  {
    id: 2,
    name: 'Verified',
    maxBalance: 5_000_000 * 100, // ₦5,000,000 in kobo
    dailyLimit: 500_000 * 100,
    features: ['Higher limits', 'Bank transfers', 'Electricity payments', 'TV subscriptions'],
    requirements: ['BVN verification', 'NIN verification'],
  },
  {
    id: 3,
    name: 'Premium',
    maxBalance: Number.MAX_SAFE_INTEGER, // Unlimited
    dailyLimit: 5_000_000 * 100,
    features: ['Unlimited balance*', 'Priority support', 'Lower fees'],
    requirements: ['Face verification', 'Additional KYC'],
  },
]

export function getTier(id: number): Tier | undefined {
  return ACCOUNT_TIERS.find(t => t.id === id)
}
