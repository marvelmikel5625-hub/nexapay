export type KYCStatus = 'pending' | 'submitted' | 'verified' | 'failed'
export type KYCMethod = 'bvn' | 'nin' | 'phone' | 'email' | 'face'

export interface KYCVerification {
  id: string
  user_id: string
  method: KYCMethod
  status: KYCStatus
  reference: string
  metadata: Record<string, any>
  submitted_at: string
  verified_at?: string
}

export interface BVNVerification {
  bvn: string
  first_name: string
  last_name: string
  dob: string
  phone: string
}

export interface NINVerification {
  nin: string
  first_name: string
  last_name: string
  dob: string
  phone: string
}
