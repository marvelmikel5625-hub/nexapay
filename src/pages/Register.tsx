import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { User, Mail, Phone, Lock, Eye, EyeOff, ArrowRight, Sparkles, Check, X } from 'lucide-react'

export function Register() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  })

  const [passwordStrength, setPasswordStrength] = useState(0)
  const [passwordChecks, setPasswordChecks] = useState({
    length: false,
    uppercase: false,
    lowercase: false,
    number: false,
    special: false
  })

  useEffect(() => {
    const pwd = formData.password
    const checks = {
      length: pwd.length >= 8,
      uppercase: /[A-Z]/.test(pwd),
      lowercase: /[a-z]/.test(pwd),
      number: /[0-9]/.test(pwd),
      special: /[^A-Za-z0-9]/.test(pwd)
    }
    setPasswordChecks(checks)
    
    let score = 0
    if (checks.length) score++
    if (checks.uppercase) score++
    if (checks.lowercase) score++
    if (checks.number) score++
    if (checks.special) score++
    setPasswordStrength(score)
  }, [formData.password])

  const getStrengthLabel = (score: number) => {
    if (score === 0) return { label: 'Enter a password', color: 'text-gray-400' }
    if (score <= 2) return { label: 'Weak', color: 'text-red-500' }
    if (score <= 3) return { label: 'Fair', color: 'text-amber-500' }
    if (score <= 4) return { label: 'Good', color: 'text-blue-500' }
    return { label: 'Strong', color: 'text-emerald-500' }
  }

  const getStrengthColor = (score: number) => {
    if (score === 0) return 'bg-gray-200'
    if (score <= 2) return 'bg-red-500'
    if (score <= 3) return 'bg-amber-500'
    if (score <= 4) return 'bg-blue-500'
    return 'bg-emerald-500'
  }

  const getStrengthWidth = (score: number) => `${(score / 5) * 100}%`

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    setError('')
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match')
      return
    }

    if (passwordStrength < 3) {
      setError('Please choose a stronger password')
      return
    }

    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      window.location.href = '/'
    }, 1500)
  }

  const strengthInfo = getStrengthLabel(passwordStrength)

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
            <h1 className="text-2xl font-bold text-[#0F172A]">Create Account</h1>
            <p className="text-gray-500 text-sm mt-1">Get started with NexaPay today</p>
          </div>

          {error && (
            <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-xl text-red-600 text-sm">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-sm font-medium text-[#0F172A] block mb-1.5">First name</label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="John"
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-[#00a86b] focus:outline-none focus:ring-2 focus:ring-[#00a86b]/20 transition-all duration-200 bg-[#F8FAFC] text-[#0F172A] placeholder:text-gray-400"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-[#0F172A] block mb-1.5">Last name</label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Doe"
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-[#00a86b] focus:outline-none focus:ring-2 focus:ring-[#00a86b]/20 transition-all duration-200 bg-[#F8FAFC] text-[#0F172A] placeholder:text-gray-400"
                    required
                  />
                </div>
              </div>
            </div>

            <div>
              <label className="text-sm font-medium text-[#0F172A] block mb-1.5">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-[#00a86b] focus:outline-none focus:ring-2 focus:ring-[#00a86b]/20 transition-all duration-200 bg-[#F8FAFC] text-[#0F172A] placeholder:text-gray-400"
                  required
                />
              </div>
            </div>

            <div>
              <label className="text-sm font-medium text-[#0F172A] block mb-1.5">Phone Number</label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="080 1234 5678"
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
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Create a strong password"
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

              {formData.password.length > 0 && (
                <div className="mt-2">
                  <div className="flex items-center justify-between mb-1">
                    <span className={`text-xs font-medium ${strengthInfo.color}`}>
                      {strengthInfo.label}
                    </span>
                    <span className="text-xs text-gray-400">{passwordStrength}/5</span>
                  </div>
                  <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className={`h-full transition-all duration-500 ${getStrengthColor(passwordStrength)}`}
                      style={{ width: getStrengthWidth(passwordStrength) }}
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-1 mt-2 text-xs">
                    <div className={`flex items-center gap-1 ${passwordChecks.length ? 'text-emerald-600' : 'text-gray-400'}`}>
                      {passwordChecks.length ? <Check className="w-3 h-3" /> : <X className="w-3 h-3" />}
                      8+ characters
                    </div>
                    <div className={`flex items-center gap-1 ${passwordChecks.uppercase ? 'text-emerald-600' : 'text-gray-400'}`}>
                      {passwordChecks.uppercase ? <Check className="w-3 h-3" /> : <X className="w-3 h-3" />}
                      Uppercase
                    </div>
                    <div className={`flex items-center gap-1 ${passwordChecks.lowercase ? 'text-emerald-600' : 'text-gray-400'}`}>
                      {passwordChecks.lowercase ? <Check className="w-3 h-3" /> : <X className="w-3 h-3" />}
                      Lowercase
                    </div>
                    <div className={`flex items-center gap-1 ${passwordChecks.number ? 'text-emerald-600' : 'text-gray-400'}`}>
                      {passwordChecks.number ? <Check className="w-3 h-3" /> : <X className="w-3 h-3" />}
                      Number
                    </div>
                    <div className={`flex items-center gap-1 col-span-2 ${passwordChecks.special ? 'text-emerald-600' : 'text-gray-400'}`}>
                      {passwordChecks.special ? <Check className="w-3 h-3" /> : <X className="w-3 h-3" />}
                      Special character
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div>
              <label className="text-sm font-medium text-[#0F172A] block mb-1.5">Confirm Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Confirm your password"
                  className={`w-full pl-10 pr-12 py-3 rounded-xl border ${
                    formData.confirmPassword && formData.password !== formData.confirmPassword
                      ? 'border-red-400 focus:border-red-500 focus:ring-red-500/20'
                      : formData.confirmPassword && formData.password === formData.confirmPassword
                      ? 'border-emerald-400 focus:border-emerald-500 focus:ring-emerald-500/20'
                      : 'border-gray-200 focus:border-[#00a86b] focus:ring-[#00a86b]/20'
                  } focus:outline-none focus:ring-2 transition-all duration-200 bg-[#F8FAFC] text-[#0F172A] placeholder:text-gray-400`}
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
              {formData.confirmPassword && (
                <p className={`text-xs mt-1 ${
                  formData.password === formData.confirmPassword ? 'text-emerald-500' : 'text-red-500'
                }`}>
                  {formData.password === formData.confirmPassword ? '✅ Passwords match' : '❌ Passwords do not match'}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3.5 bg-[#00a86b] text-white rounded-xl font-semibold hover:bg-[#087f5b] transition-all duration-300 hover:shadow-lg hover:shadow-[#00a86b]/25 hover:-translate-y-0.5 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {loading ? 'Creating account...' : 'Create Account →'}
            </button>
          </form>

          <p className="text-center text-sm text-gray-500 mt-6">
            Already have an account?{' '}
            <Link to="/login" className="text-[#00a86b] font-semibold hover:underline">
              Sign in →
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
