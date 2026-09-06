// All amounts are in kobo (1 NGN = 100 kobo)
export type Money = number // in kobo

export function toKobo(amount: number): number {
  return Math.round(amount * 100)
}

export function fromKobo(amount: number): number {
  return amount / 100
}

export function formatMoney(amount: number): string {
  return new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount / 100)
}

export function addMoney(a: number, b: number): number {
  return a + b
}

export function subtractMoney(a: number, b: number): number {
  return a - b
}

export function multiplyMoney(a: number, b: number): number {
  return Math.round(a * b)
}

export function divideMoney(a: number, b: number): number {
  if (b === 0) throw new Error('Division by zero')
  return Math.round(a / b)
}

export function calculatePercentage(amount: number, percentage: number): number {
  return Math.round((amount * percentage) / 100)
}

export function validateAmount(amount: number, min: number = 0, max: number = Infinity): boolean {
  return amount > 0 && amount >= min && amount <= max
}

export function isZero(amount: number): boolean {
  return amount === 0
}

export function isPositive(amount: number): boolean {
  return amount > 0
}

export function isNegative(amount: number): boolean {
  return amount < 0
}
