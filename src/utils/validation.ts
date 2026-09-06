import { z } from 'zod'

export const phoneSchema = z.string()
  .min(10, 'Phone number must be at least 10 digits')
  .max(14, 'Phone number is too long')
  .regex(/^[0-9+()\-\s]+$/, 'Invalid phone number format')

export const emailSchema = z.string()
  .email('Please enter a valid email address')

export const passwordSchema = z.string()
  .min(6, 'Password must be at least 6 characters')
  .max(100, 'Password is too long')

export const pinSchema = z.string()
  .length(4, 'PIN must be exactly 4 digits')
  .regex(/^\d{4}$/, 'PIN must contain only numbers')

export const amountSchema = z.number()
  .positive('Amount must be greater than 0')
  .min(1, 'Amount is too small')
  .max(500000000, 'Amount exceeds maximum allowed')

export const accountNumberSchema = z.string()
  .length(10, 'Account number must be 10 digits')
  .regex(/^\d{10}$/, 'Account number must contain only numbers')

export const meterNumberSchema = z.string()
  .min(10, 'Meter number must be at least 10 digits')
  .max(15, 'Meter number is too long')
  .regex(/^\d+$/, 'Meter number must contain only numbers')

export const smartcardSchema = z.string()
  .min(10, 'Smartcard number must be at least 10 digits')
  .max(15, 'Smartcard number is too long')
  .regex(/^\d+$/, 'Smartcard number must contain only numbers')

export const bvnSchema = z.string()
  .length(11, 'BVN must be 11 digits')
  .regex(/^\d{11}$/, 'BVN must contain only numbers')

export const ninSchema = z.string()
  .length(11, 'NIN must be 11 digits')
  .regex(/^\d{11}$/, 'NIN must contain only numbers')
