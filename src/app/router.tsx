import { createBrowserRouter, Navigate } from 'react-router-dom'
import { ProtectedRoute } from '../components/auth/ProtectedRoute'
import { DashboardLayout } from '../components/layout/DashboardLayout'

// Import all pages (make sure these files exist)
import { WelcomePage } from '../pages/auth/WelcomePage'
import { LoginPage } from '../pages/auth/LoginPage'
import { RegisterPage } from '../pages/auth/RegisterPage'
import { VerifyPhonePage } from '../pages/auth/VerifyPhonePage'
import { VerifyEmailPage } from '../pages/auth/VerifyEmailPage'
import { CreatePinPage } from '../pages/auth/CreatePinPage'
import { ForgotPasswordPage } from '../pages/auth/ForgotPasswordPage'
import { ResetPasswordPage } from '../pages/auth/ResetPasswordPage'
import { DashboardPage } from '../pages/dashboard/DashboardPage'
import { WalletPage } from '../pages/wallet/WalletPage'
import { AddMoneyPage } from '../pages/wallet/AddMoneyPage'
import { WithdrawPage } from '../pages/wallet/WithdrawPage'
import { TransfersPage } from '../pages/transfers/TransfersPage'
import { NexaPayTransferPage } from '../pages/transfers/NexaPayTransferPage'
import { BankTransferPage } from '../pages/transfers/BankTransferPage'
import { TransferStatusPage } from '../pages/transfers/TransferStatusPage'
import { AirtimePage } from '../pages/services/AirtimePage'
import { DataPage } from '../pages/services/DataPage'
import { ElectricityPage } from '../pages/services/ElectricityPage'
import { TVPage } from '../pages/services/TVPage'
import { TransactionsPage } from '../pages/transactions/TransactionsPage'
import { TransactionDetailPage } from '../pages/transactions/TransactionDetailPage'
import { NotificationsPage } from '../pages/notifications/NotificationsPage'
import { ProfilePage } from '../pages/profile/ProfilePage'
import { PersonalInfoPage } from '../pages/profile/PersonalInfoPage'
import { KYCProgressPage } from '../pages/profile/KYCProgressPage'
import { SecurityPage } from '../pages/profile/SecurityPage'
import { BeneficiariesPage } from '../pages/profile/BeneficiariesPage'
import { SupportPage } from '../pages/support/SupportPage'
import { TermsPage } from '../pages/legal/TermsPage'
import { PrivacyPage } from '../pages/legal/PrivacyPage'
import { SecurityPolicyPage } from '../pages/legal/SecurityPolicyPage'

export const router = createBrowserRouter([
  // Public Routes
  { path: '/', element: <WelcomePage /> },
  { path: '/login', element: <LoginPage /> },
  { path: '/register', element: <RegisterPage /> },
  { path: '/verify-phone', element: <VerifyPhonePage /> },
  { path: '/verify-email', element: <VerifyEmailPage /> },
  { path: '/create-pin', element: <CreatePinPage /> },
  { path: '/forgot-password', element: <ForgotPasswordPage /> },
  { path: '/reset-password', element: <ResetPasswordPage /> },

  // Legal Routes
  { path: '/terms', element: <TermsPage /> },
  { path: '/privacy', element: <PrivacyPage /> },
  { path: '/security-policy', element: <SecurityPolicyPage /> },

  // Protected Routes
  {
    element: <ProtectedRoute />,
    children: [
      {
        element: <DashboardLayout />,
        children: [
          { path: '/dashboard', element: <DashboardPage /> },
          { path: '/wallet', element: <WalletPage /> },
          { path: '/wallet/add-money', element: <AddMoneyPage /> },
          { path: '/wallet/withdraw', element: <WithdrawPage /> },
          { path: '/transfers', element: <TransfersPage /> },
          { path: '/transfers/nexapay', element: <NexaPayTransferPage /> },
          { path: '/transfers/bank', element: <BankTransferPage /> },
          { path: '/transfers/status', element: <TransferStatusPage /> },
          { path: '/airtime', element: <AirtimePage /> },
          { path: '/data', element: <DataPage /> },
          { path: '/electricity', element: <ElectricityPage /> },
          { path: '/tv', element: <TVPage /> },
          { path: '/transactions', element: <TransactionsPage /> },
          { path: '/transactions/:id', element: <TransactionDetailPage /> },
          { path: '/notifications', element: <NotificationsPage /> },
          { path: '/profile', element: <ProfilePage /> },
          { path: '/profile/personal', element: <PersonalInfoPage /> },
          { path: '/profile/kyc', element: <KYCProgressPage /> },
          { path: '/profile/security', element: <SecurityPage /> },
          { path: '/profile/beneficiaries', element: <BeneficiariesPage /> },
          { path: '/support', element: <SupportPage /> },
        ],
      },
    ],
  },

  // 404 Fallback
  { path: '*', element: <Navigate to="/" replace /> },
])
