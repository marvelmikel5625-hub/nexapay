// ============================================
// NEXAPAY — Formatting Utilities
// ============================================

/**
 * Format a currency amount in Naira (NGN)
 * Converts from kobo to Naira and formats with ₦ symbol
 * 
 * @param amount - Amount in kobo (1 NGN = 100 kobo)
 * @returns Formatted currency string (e.g., "₦1,000.00")
 * 
 * @example
 * formatCurrency(100000) // "₦1,000.00"
 * formatCurrency(5000)   // "₦50.00"
 */
export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount / 100)
}

/**
 * Format a date to readable string
 * 
 * @param date - Date string or Date object
 * @returns Formatted date (e.g., "06 Sep 2026")
 * 
 * @example
 * formatDate('2026-09-06') // "06 Sep 2026"
 */
export function formatDate(date: string | Date): string {
  const d = new Date(date)
  return d.toLocaleDateString('en-NG', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  })
}

/**
 * Format a time to readable string
 * 
 * @param date - Date string or Date object
 * @returns Formatted time (e.g., "14:30")
 * 
 * @example
 * formatTime('2026-09-06T14:30:00') // "14:30"
 */
export function formatTime(date: string | Date): string {
  const d = new Date(date)
  return d.toLocaleTimeString('en-NG', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  })
}

/**
 * Format a date and time together
 * 
 * @param date - Date string or Date object
 * @returns Formatted date and time (e.g., "06 Sep 2026, 14:30")
 * 
 * @example
 * formatDateTime('2026-09-06T14:30:00') // "06 Sep 2026, 14:30"
 */
export function formatDateTime(date: string | Date): string {
  return `${formatDate(date)}, ${formatTime(date)}`
}

/**
 * Format a Nigerian phone number for display
 * 
 * @param phone - Phone number string (may contain non-digits)
 * @returns Formatted phone number (e.g., "0801 234 56 78")
 * 
 * @example
 * formatPhoneNumber('08012345678') // "0801 234 56 78"
 * formatPhoneNumber('+2348012345678') // "0801 234 56 78"
 */
export function formatPhoneNumber(phone: string): string {
  const cleaned = phone.replace(/\D/g, '')
  
  // Handle 11-digit Nigerian numbers
  if (cleaned.length === 11) {
    return `${cleaned.slice(0, 4)} ${cleaned.slice(4, 7)} ${cleaned.slice(7, 9)} ${cleaned.slice(9)}`
  }
  
  // Handle 10-digit numbers
  if (cleaned.length === 10) {
    return `${cleaned.slice(0, 3)} ${cleaned.slice(3, 6)} ${cleaned.slice(6, 8)} ${cleaned.slice(8)}`
  }
  
  // Return as-is if format doesn't match
  return phone
}

/**
 * Normalize a phone number to a consistent format
 * Removes country code and leading zero
 * 
 * @param phone - Phone number string (may contain non-digits)
 * @returns Normalized phone number (e.g., "8012345678")
 * 
 * @example
 * normalizePhoneNumber('08012345678') // "8012345678"
 * normalizePhoneNumber('+2348012345678') // "8012345678"
 */
export function normalizePhoneNumber(phone: string): string {
  let cleaned = phone.replace(/\D/g, '')
  
  // Remove country code
  if (cleaned.startsWith('234')) {
    cleaned = cleaned.slice(3)
  }
  
  // Remove leading zero
  if (cleaned.startsWith('0')) {
    cleaned = cleaned.slice(1)
  }
  
  return cleaned
}

/**
 * Generate a 10-digit account number from a phone number
 * 
 * @param phone - Phone number string
 * @returns 10-digit account number
 * 
 * @example
 * generateAccountNumber('08012345678') // "8012345678"
 */
export function generateAccountNumber(phone: string): string {
  const normalized = normalizePhoneNumber(phone)
  return normalized.padStart(10, '0').slice(0, 10)
}

/**
 * Generate a unique transaction reference
 * Format: NXP-YYYYMMDD-XXXXXX
 * 
 * @returns Unique transaction reference
 * 
 * @example
 * generateTransactionReference() // "NXP-20260906-839201"
 */
export function generateTransactionReference(): string {
  const date = new Date()
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')
  const random = String(Math.floor(100000 + Math.random() * 900000))
  return `NXP-${year}${month}${day}-${random}`
}

/**
 * Generate an idempotency key to prevent duplicate transactions
 * 
 * @returns Unique idempotency key
 * 
 * @example
 * generateIdempotencyKey() // "NXP-IDEMPOTENCY-1694012345678-abc123"
 */
export function generateIdempotencyKey(): string {
  const timestamp = Date.now()
  const random = Math.random().toString(36).slice(2, 8)
  return `NXP-IDEMPOTENCY-${timestamp}-${random}`
}

/**
 * Format a transaction status for display
 * 
 * @param status - Status string (e.g., "successful")
 * @returns Capitalized status (e.g., "Successful")
 * 
 * @example
 * formatTransactionStatus('successful') // "Successful"
 * formatTransactionStatus('pending') // "Pending"
 */
export function formatTransactionStatus(status: string): string {
  return status.charAt(0).toUpperCase() + status.slice(1)
}

/**
 * Get a status color for badges
 * 
 * @param status - Status string
 * @returns Color class for Tailwind
 * 
 * @example
 * getStatusColor('successful') // "text-emerald-600 bg-emerald-50"
 * getStatusColor('failed') // "text-red-600 bg-red-50"
 */
export function getStatusColor(status: string): string {
  const colors: Record<string, string> = {
    successful: 'text-emerald-600 bg-emerald-50 border-emerald-200',
    failed: 'text-red-600 bg-red-50 border-red-200',
    pending: 'text-amber-600 bg-amber-50 border-amber-200',
    processing: 'text-blue-600 bg-blue-50 border-blue-200',
    created: 'text-gray-600 bg-gray-50 border-gray-200',
    reversed: 'text-purple-600 bg-purple-50 border-purple-200',
  }
  return colors[status] || colors.created
}

/**
 * Format a transaction type for display
 * 
 * @param type - Transaction type
 * @returns Human-readable type
 * 
 * @example
 * formatTransactionType('transfer') // "Transfer"
 * formatTransactionType('airtime') // "Airtime Purchase"
 */
export function formatTransactionType(type: string): string {
  const types: Record<string, string> = {
    transfer: 'Transfer',
    deposit: 'Deposit',
    withdrawal: 'Withdrawal',
    airtime: 'Airtime Purchase',
    data: 'Data Purchase',
    electricity: 'Electricity Payment',
    tv: 'TV Subscription',
  }
  return types[type] || type
}

/**
 * Get an icon name for a transaction type
 * 
 * @param type - Transaction type
 * @returns Icon name string
 * 
 * @example
 * getTransactionIcon('transfer') // "Send"
 * getTransactionIcon('airtime') // "Phone"
 */
export function getTransactionIcon(type: string): string {
  const icons: Record<string, string> = {
    transfer: 'Send',
    deposit: 'ArrowDown',
    withdrawal: 'ArrowUp',
    airtime: 'Phone',
    data: 'Wifi',
    electricity: 'Lightbulb',
    tv: 'Tv',
  }
  return icons[type] || 'Circle'
}

/**
 * Format a transaction amount with sign
 * 
 * @param amount - Amount in kobo
 * @param type - Transaction type (to determine sign)
 * @returns Formatted amount with + or - sign
 * 
 * @example
 * formatTransactionAmount(250000, 'transfer') // "-₦2,500.00"
 * formatTransactionAmount(50000, 'deposit') // "+₦500.00"
 */
export function formatTransactionAmount(amount: number, type: string): string {
  const formatted = formatCurrency(amount)
  const debitTypes = ['transfer', 'withdrawal', 'airtime', 'data', 'electricity', 'tv']
  const isDebit = debitTypes.includes(type)
  return isDebit ? `-${formatted}` : `+${formatted}`
}

/**
 * Truncate text with ellipsis
 * 
 * @param text - Text to truncate
 * @param maxLength - Maximum length
 * @returns Truncated text
 * 
 * @example
 * truncateText('This is a long text', 10) // "This is a ..."
 */
export function truncateText(text: string, maxLength: number = 30): string {
  if (text.length <= maxLength) return text
  return `${text.slice(0, maxLength)}...`
}

/**
 * Format a number with commas
 * 
 * @param num - Number to format
 * @returns Formatted number with commas
 * 
 * @example
 * formatNumber(1000000) // "1,000,000"
 */
export function formatNumber(num: number): string {
  return new Intl.NumberFormat('en-NG').format(num)
}

/**
 * Calculate and format percentage
 * 
 * @param value - Current value
 * @param total - Total value
 * @returns Formatted percentage
 * 
 * @example
 * formatPercentage(25000, 100000) // "25%"
 */
export function formatPercentage(value: number, total: number): string {
  if (total === 0) return '0%'
  return `${Math.round((value / total) * 100)}%`
}

/**
 * Format a short date (e.g., "Today", "Yesterday", or date)
 * 
 * @param date - Date string or Date object
 * @returns Human-readable relative date
 * 
 * @example
 * formatRelativeDate(new Date()) // "Today"
 * formatRelativeDate(new Date(Date.now() - 86400000)) // "Yesterday"
 */
export function formatRelativeDate(date: string | Date): string {
  const d = new Date(date)
  const now = new Date()
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate())
  const yesterday = new Date(today)
  yesterday.setDate(yesterday.getDate() - 1)
  
  if (d >= today) return 'Today'
  if (d >= yesterday) return 'Yesterday'
  
  return formatDate(d)
}

/**
 * Mask a string (for hiding sensitive data)
 * 
 * @param str - String to mask
 * @param visibleStart - Number of characters to show at start
 * @param visibleEnd - Number of characters to show at end
 * @param maskChar - Character to use for masking
 * @returns Masked string
 * 
 * @example
 * maskString('08012345678', 4, 2) // "0801******78"
 * maskString('123456789012', 4, 4) // "1234****9012"
 */
export function maskString(
  str: string, 
  visibleStart: number = 4, 
  visibleEnd: number = 2,
  maskChar: string = '*'
): string {
  if (str.length <= visibleStart + visibleEnd) {
    return str
  }
  
  const start = str.slice(0, visibleStart)
  const end = str.slice(-visibleEnd)
  const middle = maskChar.repeat(str.length - visibleStart - visibleEnd)
  
  return `${start}${middle}${end}`
}

/**
 * Format a wallet balance with optional mask
 * 
 * @param balance - Balance in kobo
 * @param hidden - Whether to hide the balance
 * @returns Formatted balance or masked version
 * 
 * @example
 * formatBalance(12545000, false) // "₦125,450.00"
 * formatBalance(12545000, true) // "₦•••••••"
 */
export function formatBalance(balance: number, hidden: boolean = false): string {
  if (hidden) {
    return '₦•••••••'
  }
  return formatCurrency(balance)
}

/**
 * Get a friendly error message from an error object
 * 
 * @param error - Error object or string
 * @returns Friendly error message
 * 
 * @example
 * getErrorMessage('Network error') // "Unable to connect. Please check your internet."
 */
export function getErrorMessage(error: unknown): string {
  if (typeof error === 'string') {
    return error
  }
  
  if (error instanceof Error) {
    // Check for common error patterns
    const message = error.message.toLowerCase()
    
    if (message.includes('network') || message.includes('fetch')) {
      return 'Unable to connect. Please check your internet connection.'
    }
    
    if (message.includes('auth') || message.includes('unauthorized')) {
      return 'Your session has expired. Please log in again.'
    }
    
    if (message.includes('permission') || message.includes('forbidden')) {
      return 'You do not have permission to perform this action.'
    }
    
    if (message.includes('not found')) {
      return 'The requested resource was not found.'
    }
    
    if (message.includes('duplicate') || message.includes('already exists')) {
      return 'This item already exists.'
    }
    
    if (message.includes('insufficient')) {
      return 'Insufficient balance. Please add funds to continue.'
    }
    
    return error.message
  }
  
  return 'Something went wrong. Please try again.'
}
