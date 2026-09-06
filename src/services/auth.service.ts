import { supabase } from '../lib/supabase.client'
import { Profile } from '../types/user.types'

export const authService = {
  async getCurrentUser() {
    const { data: { user } } = await supabase.auth.getUser()
    return user
  },

  async getProfile(userId: string): Promise<Profile | null> {
    const { data, error } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', userId)
      .single()
    
    if (error) {
      console.error('Error fetching profile:', error)
      return null
    }
    return data
  },

  async updateProfile(userId: string, updates: Partial<Profile>) {
    const { data, error } = await supabase
      .from('profiles')
      .update(updates)
      .eq('id', userId)
      .select()
      .single()
    
    if (error) throw error
    return data
  },

  async createPin(userId: string, pin: string) {
    // In production: hash the PIN and store securely
    // In demo: store a hash for verification
    const { error } = await supabase
      .from('profiles')
      .update({ pin_hash: pin }) // This should be hashed in production
      .eq('id', userId)
    
    if (error) throw error
  },

  async verifyPin(userId: string, pin: string): Promise<boolean> {
    // In production: compare hashed PINs
    const { data, error } = await supabase
      .from('profiles')
      .select('pin_hash')
      .eq('id', userId)
      .single()
    
    if (error || !data) return false
    return data.pin_hash === pin // In production: compare hashed values
  },
}
