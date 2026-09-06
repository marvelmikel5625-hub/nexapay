export function WelcomePage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-[#0F172A] via-[#2563EB] to-[#7C3AED] p-4">
      <div className="text-center text-white">
        <div className="w-20 h-20 rounded-2xl bg-white/10 backdrop-blur flex items-center justify-center mx-auto mb-6">
          <span className="text-4xl font-bold">N</span>
        </div>
        <h1 className="text-4xl font-bold mb-2">Welcome to NexaPay</h1>
        <p className="text-white/80 text-lg mb-8">Payments made simple.</p>
        <a href="/register" className="inline-block bg-white text-[#0F172A] px-8 py-3 rounded-xl font-medium hover:bg-white/90 transition-colors">
          Get Started
        </a>
      </div>
    </div>
  )
}
