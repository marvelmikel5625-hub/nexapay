export interface Profile {
  id: string
  first_name: string
  last_name: string
  phone: string
  email: string
  account_number: string
  tier: number
  kyc_status: 'pending' | 'verified' | 'failed'
  avatar_url?: string
  created_at: string
  updated_at: string
}

export interface User {
  id: string
  email: string
  phone?: string
  profile?: Profile
}
