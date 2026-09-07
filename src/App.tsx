function App() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-[#0F172A] via-[#2563EB] to-[#7C3AED] flex items-center justify-center p-4">
      <div className="text-center text-white max-w-md">
        {/* Logo */}
        <div className="w-20 h-20 rounded-2xl bg-white/10 backdrop-blur flex items-center justify-center mx-auto mb-6">
          <span className="text-4xl font-bold">N</span>
        </div>
        
        {/* Title */}
        <h1 className="text-4xl font-bold mb-2">Welcome to NexaPay</h1>
        <p className="text-white/80 text-lg mb-8">Payments made simple.</p>
        
        {/* Buttons */}
        <div className="flex gap-4 justify-center flex-wrap">
          <button className="bg-white text-[#0F172A] px-8 py-3 rounded-xl font-medium hover:bg-white/90 transition-colors shadow-lg">
            Login
          </button>
          <button className="bg-white/20 text-white px-8 py-3 rounded-xl font-medium hover:bg-white/30 transition-colors border border-white/30">
            Register
          </button>
        </div>
        
        {/* Footer */}
        <p className="text-white/40 text-sm mt-12">
          © 2026 NexaPay. All rights reserved.
        </p>
      </div>
    </div>
  )
}

export default App
