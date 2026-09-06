import { format as dateFormat } from 'date-fns'

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount / 100) // Divide by 100 to convert from kobo
}

export function formatDate(date: string | Date): string {
  return dateFormat(new Date(date), 'dd MMM yyyy')
}

export function formatTime(date: string | Date): string {
  return dateFormat(new Date(date), 'HH:mm')
}

export function formatDateTime(date: string | Date): string {
  return dateFormat(new Date(date), 'dd MMM yyyy, HH:mm')
}

export function formatPhoneNumber(phone: string): string {
  // Simple Nigerian phone number formatting
  const cleaned = phone.replace(/\D/g, '')
  if (cleaned.length === 11) {
    return `${cleaned.slice(0, 4)} ${cleaned.slice(4, 7)} ${cleaned.slice(7, 9)} ${cleaned.slice(9)}`
  }
  return phone
}

export function normalizePhoneNumber(phone: string): string {
  let cleaned = phone.replace(/\D/g, '')
  if (cleaned.startsWith('234')) {
    cleaned = cleaned.slice(3)
  }
  if (cleaned.startsWith('0')) {
    cleaned = cleaned.slice(1)
  }
  return cleaned
}

export function generateAccountNumber(phone: string): string {
  const normalized = normalizePhoneNumber(phone)
  return normalized.padStart(10, '0').slice(0, 10)
}

export function generateTransactionReference(): string {
  const date = new Date()
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')
  const random = String(Math.floor(100000 + Math.random() * 900000))
  return `NXP-${year}${month}${day}-${random}`
}

export function generateIdempotencyKey(): string {
  return `NXP-IDEMPOTENCY-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`
}

export function formatTransactionStatus(status: string): string {
  return status.charAt(0).toUpperCase() + status.slice(1)
}
