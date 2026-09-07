import { useState } from 'react'
import { Link } from 'react-router-dom'

export function Register() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match')
      return
    }
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
          {/* Logo */}
          <div className="text-center mb-8">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#0F172A] via-[#2563EB] to-[#7C3AED] flex items-center justify-center mx-auto mb-4 shadow-lg shadow-blue-500/20">
              <span className="text-white font-bold text-2xl">N</span>
            </div>
            <h1 className="text-2xl font-bold text-[#0F172A]">Create Account</h1>
            <p className="text-gray-500 text-sm mt-1">Get started with NexaPay today</p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name Fields */}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-sm font-medium text-[#0F172A] block mb-1.5">First name</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="John"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#00a86b] focus:outline-none focus:ring-2 focus:ring-[#00a86b]/20 bg-[#F8FAFC]"
                  required
                />
              </div>
              <div>
                <label className="text-sm font-medium text-[#0F172A] block mb-1.5">Last name</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Doe"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#00a86b] focus:outline-none focus:ring-2 focus:ring-[#00a86b]/20 bg-[#F8FAFC]"
                  required
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="text-sm font-medium text-[#0F172A] block mb-1.5">Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#00a86b] focus:outline-none focus:ring-2 focus:ring-[#00a86b]/20 bg-[#F8FAFC]"
                required
              />
            </div>

            {/* Phone */}
            <div>
              <label className="text-sm font-medium text-[#0F172A] block mb-1.5">Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="080 1234 5678"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#00a86b] focus:outline-none focus:ring-2 focus:ring-[#00a86b]/20 bg-[#F8FAFC]"
                required
              />
            </div>

            {/* Password */}
            <div>
              <label className="text-sm font-medium text-[#0F172A] block mb-1.5">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Create a strong password"
                  className="w-full px-4 pr-12 py-3 rounded-xl border border-gray-200 focus:border-[#00a86b] focus:outline-none focus:ring-2 focus:ring-[#00a86b]/20 bg-[#F8FAFC]"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? '🙈' : '👁️'}
                </button>
              </div>
            </div>

            {/* Confirm Password */}
            <div>
              <label className="text-sm font-medium text-[#0F172A] block mb-1.5">Confirm Password</label>
              <div className="relative">
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Confirm your password"
                  className={`w-full px-4 pr-12 py-3 rounded-xl border ${
                    formData.confirmPassword && formData.password !== formData.confirmPassword
                      ? 'border-red-400 focus:border-red-500 focus:ring-red-500/20'
                      : formData.confirmPassword && formData.password === formData.confirmPassword
                      ? 'border-green-400 focus:border-green-500 focus:ring-green-500/20'
                      : 'border-gray-200 focus:border-[#00a86b] focus:ring-[#00a86b]/20'
                  } focus:outline-none focus:ring-2 bg-[#F8FAFC]`}
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showConfirmPassword ? '🙈' : '👁️'}
                </button>
              </div>
              {formData.confirmPassword && (
                <p className={`text-xs mt-1 ${formData.password === formData.confirmPassword ? 'text-green-500' : 'text-red-500'}`}>
                  {formData.password === formData.confirmPassword ? '✅ Passwords match' : '❌ Passwords do not match'}
                </p>
              )}
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3.5 bg-[#00a86b] text-white rounded-xl font-semibold hover:bg-[#087f5b] transition-all duration-300 hover:shadow-lg hover:shadow-[#00a86b]/25 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {loading ? 'Creating account...' : 'Create Account →'}
            </button>
          </form>

          <p className="text-center text-sm text-gray-500 mt-6">
            Already have an account?{' '}
            <Link to="/login" className="text-[#00a86b] font-semibold hover:underline">Sign in →</Link>
          </p>

          <div className="flex items-center gap-4 my-6">
            <div className="flex-1 h-px bg-gray-200"></div>
            <span className="text-gray-400 text-xs uppercase">or</span>
            <div className="flex-1 h-px bg-gray-200"></div>
          </div>

          <Link to="/" className="block w-full py-3 text-center border-2 border-gray-200 text-[#0F172A] rounded-xl font-medium hover:border-[#00a86b] hover:bg-[#00a86b]/5 transition-all duration-200">
            Continue as Guest
          </Link>

          <p className="text-center text-gray-400 text-xs mt-8">© 2026 NexaPay. All rights reserved.</p>
        </div>
      </div>
    </div>
  )
}
