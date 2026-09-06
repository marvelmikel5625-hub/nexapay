export function AddMoneyPage() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold text-[#0F172A]">Add Money</h1>
      <p className="text-gray-500 mt-2">Fund your wallet securely.</p>
      <div className="mt-6 grid grid-cols-3 gap-3">
        {[100, 500, 1000, 2000, 5000, 10000].map((amount) => (
          <button key={amount} className="bg-white border border-gray-200 rounded-xl p-4 hover:border-[#2563EB] transition-colors">
            <span className="font-semibold">₦{amount.toLocaleString()}</span>
          </button>
        ))}
      </div>
    </div>
  )
}
