import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Mail, Lock, Eye, EyeOff, ArrowRight, Sparkles } from 'lucide-react'

export function Login() {
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      window.location.href = '/'
    }, 1500)
  }

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <Link to="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-[#0F172A] transition-colors mb-6 text-sm">
          ← Back to home
        </Link>

        <div className="bg-white rounded-2xl shadow-soft p-8 border border-gray-100">
          <div className="text-center mb-8">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#0F172A] via-[#2563EB] to-[#7C3AED] flex items-center justify-center mx-auto mb-4 shadow-lg shadow-blue-500/20">
              <span className="text-white font-bold text-2xl">N</span>
            </div>
            <h1 className="text-2xl font-bold text-[#0F172A]">Welcome Back</h1>
            <p className="text-gray-500 text-sm mt-1">Sign in to your NexaPay account</p>
          </div>

          {error && (
            <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-xl flex items-start gap-2 text-red-600 text-sm">
              <span>⚠️ {error}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="text-sm font-medium text-[#0F172A] block mb-1.5">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-[#00a86b] focus:outline-none focus:ring-2 focus:ring-[#00a86b]/20 transition-all duration-200 bg-[#F8FAFC] text-[#0F172A] placeholder:text-gray-400"
                  required
                />
              </div>
            </div>

            <div>
              <label className="text-sm font-medium text-[#0F172A] block mb-1.5">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className="w-full pl-10 pr-12 py-3 rounded-xl border border-gray-200 focus:border-[#00a86b] focus:outline-none focus:ring-2 focus:ring-[#00a86b]/20 transition-all duration-200 bg-[#F8FAFC] text-[#0F172A] placeholder:text-gray-400"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <div className="text-right">
              <a href="#" className="text-sm text-[#00a86b] hover:underline font-medium">
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3.5 bg-[#00a86b] text-white rounded-xl font-semibold hover:bg-[#087f5b] transition-all duration-300 hover:shadow-lg hover:shadow-[#00a86b]/25 hover:-translate-y-0.5 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {loading ? (
                <span className="flex items-center gap-2">
                  <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Signing in...
                </span>
              ) : (
                <>
                  Log in
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>

          <p className="text-center text-sm text-gray-500 mt-6">
            Don't have an account?{' '}
            <Link to="/register" className="text-[#00a86b] font-semibold hover:underline">
              Create one →
            </Link>
          </p>

          <div className="flex items-center gap-4 my-6">
            <div className="flex-1 h-px bg-gray-200"></div>
            <span className="text-gray-400 text-xs uppercase tracking-wider">or</span>
            <div className="flex-1 h-px bg-gray-200"></div>
          </div>

          <Link
            to="/"
            className="w-full py-3 border-2 border-gray-200 text-[#0F172A] rounded-xl font-medium hover:border-[#00a86b] hover:bg-[#00a86b]/5 transition-all duration-200 flex items-center justify-center gap-2"
          >
            <Sparkles className="w-4 h-4 text-gray-400" />
            Continue as Guest
          </Link>

          <p className="text-center text-gray-400 text-xs mt-8">
            © 2026 NexaPay. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  )
}
