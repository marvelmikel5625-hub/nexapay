import { createContext, useContext, useEffect, useState, ReactNode } from 'react'
import { User } from '@supabase/supabase-js'
import { supabase } from '../lib/supabase.client'

interface Profile {
  id: string
  first_name: string
  last_name: string
  phone: string
  email: string
  account_number: string
  tier: number
  kyc_status: string
  avatar_url?: string
  created_at: string
  updated_at: string
}

interface RegisterData {
  first_name: string
  last_name: string
  phone: string
  email: string
  password: string
}

interface AuthContextType {
  user: User | null
  profile: Profile | null
  loading: boolean
  login: (email: string, password: string) => Promise<void>
  register: (data: RegisterData) => Promise<void>
  logout: () => Promise<void>
  verifyPhone: (phone: string, code: string) => Promise<void>
  verifyEmail: (email: string, code: string) => Promise<void>
  createPin: (pin: string) => Promise<void>
  resetPassword: (email: string) => Promise<void>
}

// Export the context
export const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [profile, setProfile] = useState<Profile | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      const currentUser = session?.user ?? null
      setUser(currentUser)
      if (currentUser) fetchProfile(currentUser.id)
      setLoading(false)
    })

    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (_event, session) => {
        const currentUser = session?.user ?? null
        setUser(currentUser)
        if (currentUser) {
          await fetchProfile(currentUser.id)
        } else {
          setProfile(null)
        }
        setLoading(false)
      }
    )

    return () => subscription.unsubscribe()
  }, [])

  const fetchProfile = async (userId: string) => {
    const { data, error } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', userId)
      .single()
    if (!error && data) setProfile(data)
  }

  const login = async (email: string, password: string) => {
    const { error } = await supabase.auth.signInWithPassword({ email, password })
    if (error) throw error
  }

  const register = async (data: RegisterData) => {
    const { error } = await supabase.auth.signUp({
      email: data.email,
      password: data.password,
      options: {
        data: {
          first_name: data.first_name,
          last_name: data.last_name,
          phone: data.phone,
        },
      },
    })
    if (error) throw error
  }

  const logout = async () => {
    const { error } = await supabase.auth.signOut()
    if (error) throw error
  }

  const verifyPhone = async (phone: string, code: string) => {
    console.log('Verifying phone:', phone, code)
  }

  const verifyEmail = async (email: string, code: string) => {
    console.log('Verifying email:', email, code)
  }

  const createPin = async (pin: string) => {
    console.log('Creating PIN:', pin)
  }

  const resetPassword = async (email: string) => {
    const { error } = await supabase.auth.resetPasswordForEmail(email)
    if (error) throw error
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        profile,
        loading,
        login,
        register,
        logout,
        verifyPhone,
        verifyEmail,
        createPin,
        resetPassword,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
