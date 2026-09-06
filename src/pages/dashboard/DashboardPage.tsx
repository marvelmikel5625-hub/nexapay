import { useAuth } from '../../hooks/useAuth'
import { useWallet } from '../../hooks/useWallet'
import { useTransactions } from '../../hooks/useTransactions'
import { formatCurrency } from '../../utils/format'
import { Card } from '../../components/ui/Card'
import { Send, ArrowDown, ArrowUp, Phone, Wifi, Lightbulb, Tv } from 'lucide-react'

export function DashboardPage() {
  const { profile } = useAuth()
  const { wallet } = useWallet()
  const { transactions } = useTransactions(5)

  const quickServices = [
    { icon: Send, label: 'Send Money', path: '/transfers' },
    { icon: ArrowDown, label: 'Add Money', path: '/wallet/add-money' },
    { icon: Phone, label: 'Airtime', path: '/airtime' },
    { icon: Wifi, label: 'Data', path: '/data' },
    { icon: Lightbulb, label: 'Electricity', path: '/electricity' },
    { icon: Tv, label: 'TV', path: '/tv' },
  ]

  return (
    <div className="space-y-6">
      <Card className="bg-gradient-to-r from-[#0F172A] via-[#2563EB] to-[#7C3AED] text-white p-6">
        <p className="text-white/70 text-sm">Available Balance</p>
        <p className="text-3xl font-bold mt-1">{formatCurrency(wallet?.balance || 0)}</p>
        <p className="text-white/50 text-xs mt-1">Account: {profile?.account_number || 'N/A'}</p>
        <div className="flex gap-3 mt-4">
          <a href="/wallet/add-money" className="bg-white/20 text-white px-4 py-2 rounded-xl text-sm hover:bg-white/30 transition-colors">Add Money</a>
          <a href="/transfers" className="bg-white/20 text-white px-4 py-2 rounded-xl text-sm hover:bg-white/30 transition-colors">Send</a>
          <a href="/wallet" className="bg-white/20 text-white px-4 py-2 rounded-xl text-sm hover:bg-white/30 transition-colors">Receive</a>
        </div>
      </Card>

      <div className="grid grid-cols-4 gap-3">
        {quickServices.map((service, index) => {
          const Icon = service.icon
          return (
            <a key={index} href={service.path} className="flex flex-col items-center p-3 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-full bg-[#2563EB]/10 flex items-center justify-center mb-1">
                <Icon className="w-5 h-5 text-[#2563EB]" />
              </div>
              <span className="text-xs text-gray-600 text-center">{service.label}</span>
            </a>
          )
        })}
      </div>

      <div>
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-semibold text-[#0F172A]">Recent Transactions</h3>
          <a href="/transactions" className="text-sm text-[#2563EB] hover:underline">View all</a>
        </div>
        {transactions.length === 0 ? (
          <Card className="p-6 text-center text-gray-500">No transactions yet</Card>
        ) : (
          <div className="space-y-2">
            {transactions.map((tx) => (
              <Card key={tx.id} className="p-3 flex items-center justify-between">
                <div>
                  <p className="font-medium text-sm">{tx.description}</p>
                  <p className="text-xs text-gray-400">{new Date(tx.created_at).toLocaleDateString()}</p>
                </div>
                <span className={`font-semibold ${tx.type === 'deposit' ? 'text-emerald-500' : 'text-red-500'}`}>
                  {tx.type === 'deposit' ? '+' : '-'}{formatCurrency(tx.amount)}
                </span>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
