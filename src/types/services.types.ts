export interface ServiceProvider {
  id: string
  name: string
  code: string
  category: 'airtime' | 'data' | 'electricity' | 'tv'
  logo?: string
  active: boolean
}

export interface ServicePlan {
  id: string
  provider_id: string
  name: string
  description?: string
  amount: number // in kobo
  data_amount?: string
  validity?: string
  active: boolean
}

export interface AirtimePurchase {
  network: string
  phone: string
  amount: number
}

export interface DataPurchase {
  network: string
  phone: string
  plan: string
}

export interface ElectricityPayment {
  provider: string
  meter_type: 'prepaid' | 'postpaid'
  meter_number: string
  amount: number
}

export interface TVSubscription {
  provider: string
  smartcard_number: string
  plan: string
}
