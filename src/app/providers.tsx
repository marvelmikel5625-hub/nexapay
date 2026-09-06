import { ReactNode } from 'react'
import { AuthProvider } from '../contexts/AuthContext'
import { WalletProvider } from '../contexts/WalletContext'
import { ThemeProvider } from '../contexts/ThemeContext'

interface ProvidersProps {
  children: ReactNode
}

export function Providers({ children }: ProvidersProps) {
  return (
    <ThemeProvider>
      <AuthProvider>
        <WalletProvider>
          {children}
        </WalletProvider>
      </AuthProvider>
    </ThemeProvider>
  )
}
