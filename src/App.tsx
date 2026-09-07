import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="*" element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

// ============================================================
// LANDING PAGE
// ============================================================
function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [faqOpen, setFaqOpen] = useState<number | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show')
          }
        })
      },
      { threshold: 0.12 }
    )
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const toggleFaq = (index: number) => {
    setFaqOpen(faqOpen === index ? null : index)
  }

  return (
    <div>
      <div className="bar">NexaPay <b>•</b> A simpler way to manage everyday payments.</div>
      
      <header className={`nav ${isMenuOpen ? 'open' : ''}`}>
        <div className="wrap navin">
          <Link className="logo" to="/"><span className="mark">N</span>NexaPay</Link>
          <nav className="links">
            <a href="#features">Features</a>
            <a href="#security">Security</a>
            <a href="#how">How it works</a>
            <a href="#faq">FAQ</a>
          </nav>
          <div className="actions">
            <Link className="btn outline" to="/login">Log in</Link>
            <Link className="btn primary" to="/register">Get started</Link>
          </div>
          <button className="menu" onClick={() => setIsMenuOpen(!isMenuOpen)}>☰</button>
        </div>
      </header>

      <section className="hero">
        <div className="wrap heroGrid">
          <div className="reveal">
            <div className="pill"><i></i>Payments made simple</div>
            <h1>The simpler way to move your money.</h1>
            <p>Send money, pay bills, buy airtime and data, and manage everyday payments through one simple experience designed around Nigeria.</p>
            <div className="heroBtns">
              <Link className="btn primary" to="/register">Get started →</Link>
              <a className="btn outline" href="#features">Explore NexaPay</a>
            </div>
            <div className="points"><span>Fast payments</span><span>Secure access</span><span>Built for Nigeria</span></div>
          </div>
          <div className="art reveal">
            <div className="glow"></div>
            <div className="float f1">↗ <b>Transfer complete</b><small>Payment processed successfully</small></div>
            <div className="phone">
              <div className="screen">
                <div className="top"><b>NexaPay</b><span>•••</span></div>
                <div className="balance"><small>Available balance</small><strong>₦248,500</strong></div>
                <div className="quick"><div><b>↗</b>Send</div><div><b>＋</b>Add</div><div><b>▣</b>Bills</div></div>
                <div className="activity">
                  <h4>Recent activity</h4>
                  <div className="row">↗ Bank transfer <strong>−₦15,000</strong></div>
                  <div className="row">◉ Airtime <strong>−₦2,000</strong></div>
                  <div className="row">＋ Money received <strong>+₦40,000</strong></div>
                </div>
              </div>
            </div>
            <div className="float f2">✓ <b>Payment secured</b><small>Transaction verified</small></div>
          </div>
        </div>
      </section>

      <section className="marqueeSec">
        <div className="marqueeTitle">Built around the services Nigerians use every day</div>
        <div className="marqueeBox">
          <div className="marquee">
            <div className="group">
              <span className="brand">MTN</span><span className="brand">AIRTEL</span>
              <span className="brand">GLO</span><span className="brand">9MOBILE</span>
              <span className="brand">DStv</span><span className="brand">GOtv</span>
              <span className="brand">STARTIMES</span><span className="brand">ELECTRICITY</span>
            </div>
            <div className="group">
              <span className="brand">MTN</span><span className="brand">AIRTEL</span>
              <span className="brand">GLO</span><span className="brand">9MOBILE</span>
              <span className="brand">DStv</span><span className="brand">GOtv</span>
              <span className="brand">STARTIMES</span><span className="brand">ELECTRICITY</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features - shortened but complete */}
      <section className="section" id="features">
        <div className="wrap">
          <div className="intro reveal">
            <div><div className="kicker">One place for everyday payments</div><h2>Everything you need. Nothing you don't.</h2></div>
            <div className="stat"><strong>01</strong><br />Focused payment flows that keep common money tasks simple and clear.</div>
          </div>
          <div className="service reveal">
            <div className="copy"><div className="kicker">Send money</div><h3>Move money without unnecessary steps.</h3><p>Send money to people and bank accounts with a straightforward flow that keeps the recipient, amount and status clear.</p><ul><li>Simple transfer flow</li><li>Clear transaction status</li><li>Designed for Nigerian payments</li></ul></div>
            <div className="visual"><div className="card"><b>Send money</b><div className="vrow">01 Choose recipient <b>✓</b></div><div className="vrow">02 Enter amount <b>✓</b></div><div className="vrow">03 Confirm payment <b>✓</b></div></div></div>
          </div>
          <div className="service reverse reveal">
            <div className="copy"><div className="kicker">Airtime & data</div><h3>Stay connected in just a few taps.</h3><p>Choose your network, select an amount or bundle, confirm your details and get back online.</p><ul><li>Major Nigerian networks</li><li>Flexible airtime and data options</li><li>Fast confirmation</li></ul></div>
            <div className="visual">
              <div className="networks">
                <div className="network" style={{display:'flex',alignItems:'center',gap:'12px',borderLeft:'4px solid #FFCD00',background:'#fff'}}>
                  <svg width="36" height="36" viewBox="0 0 36 36"><rect width="36" height="36" rx="8" fill="#FFCD00"/><text x="18" y="24" fontFamily="Arial" fontSize="14" fontWeight="900" fill="#000" textAnchor="middle">MTN</text></svg>
                  <span style={{fontWeight:'700'}}>MTN</span>
                </div>
                <div className="network" style={{display:'flex',alignItems:'center',gap:'12px',borderLeft:'4px solid #FF0000',background:'#fff'}}>
                  <svg width="36" height="36" viewBox="0 0 36 36"><rect width="36" height="36" rx="8" fill="#FF0000"/><text x="18" y="24" fontFamily="Arial" fontSize="11" fontWeight="900" fill="#FFF" textAnchor="middle">AIRTEL</text></svg>
                  <span style={{fontWeight:'700'}}>Airtel</span>
                </div>
                <div className="network" style={{display:'flex',alignItems:'center',gap:'12px',borderLeft:'4px solid #008000',background:'#fff'}}>
                  <svg width="36" height="36" viewBox="0 0 36 36"><rect width="36" height="36" rx="8" fill="#008000"/><text x="18" y="24" fontFamily="Arial" fontSize="16" fontWeight="900" fill="#FFF" textAnchor="middle">GLO</text></svg>
                  <span style={{fontWeight:'700'}}>Glo</span>
                </div>
                <div className="network" style={{display:'flex',alignItems:'center',gap:'12px',borderLeft:'4px solid #800080',background:'#fff'}}>
                  <svg width="36" height="36" viewBox="0 0 36 36"><rect width="36" height="36" rx="8" fill="#800080"/><text x="18" y="24" fontFamily="Arial" fontSize="10" fontWeight="900" fill="#FFF" textAnchor="middle">9mobile</text></svg>
                  <span style={{fontWeight:'700'}}>9mobile</span>
                </div>
              </div>
            </div>
          </div>
          <div className="service reveal">
            <div className="copy"><div className="kicker">Bills</div><h3>Take care of bills from one place.</h3><p>Handle everyday bills with a clear experience that helps you review the service, amount and payment status before finishing.</p><ul><li>Electricity payments</li><li>TV subscriptions</li><li>Clear receipts and status</li></ul></div>
            <div className="visual"><div className="bill"><small>Electricity · Prepaid</small><h3>₦25,000</h3><small>Electricity payment</small><div className="pay">Continue securely →</div></div></div>
          </div>
        </div>
      </section>

      <section className="section dark">
        <div className="wrap eco">
          <div className="reveal"><div className="kicker" style={{color:'#72e6b5'}}>Built for Nigeria</div><h2>One simple experience for the way you pay.</h2><p className="lead">NexaPay brings everyday payment tasks into one focused ecosystem, so you spend less time moving between different services.</p></div>
          <div className="orbit reveal"><div className="ring r2"></div><div className="ring r1"></div><div className="core">NexaPay</div><span className="tag t1">Send money</span><span className="tag t2">Airtime</span><span className="tag t3">Data</span><span className="tag t4">Electricity</span><span className="tag t5">TV & bills</span></div>
        </div>
      </section>

      <section className="section" id="security">
        <div className="wrap">
          <div className="head reveal"><div className="kicker">Security first</div><h2>Your money deserves a careful experience.</h2><p className="lead">NexaPay is designed with security-conscious account and transaction flows while keeping important actions easy to understand.</p></div>
          <div className="security">
            <div className="securityMain reveal"><div className="shield">⌾</div><div className="kicker" style={{color:'#72e6b5'}}>Designed with protection in mind</div><h2 style={{fontSize:'38px'}}>Security should feel invisible — not complicated.</h2><p>From account access to transaction confirmation, important actions are designed to be clear and deliberate.</p></div>
            <div className="secCards">
              <div className="sec reveal"><div className="secIcon">⌁</div><h3>Secure access</h3><p>Verification steps can help protect sensitive account actions.</p></div>
              <div className="sec reveal"><div className="secIcon">✓</div><h3>Confirmation</h3><p>Important payments show clear details before confirmation.</p></div>
              <div className="sec reveal"><div className="secIcon">◉</div><h3>Clear status</h3><p>Know whether a payment is successful, pending or needs attention.</p></div>
              <div className="sec reveal"><div className="secIcon">↻</div><h3>Safer by design</h3><p>Critical flows are structured to reduce accidental actions.</p></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section soft" id="how">
        <div className="wrap">
          <div className="head reveal"><div className="kicker">How it works</div><h2>Simple from the first tap.</h2><p className="lead">A focused flow means less friction when you need to make an everyday payment.</p></div>
          <div className="steps">
            <div className="step reveal"><small>01 / START</small><h3>Create your account</h3><p>Set up your details and secure access to your NexaPay experience.</p></div>
            <div className="step reveal"><small>02 / CHOOSE</small><h3>Pick what you need</h3><p>Send money, buy airtime or data, pay a bill, or review activity.</p></div>
            <div className="step reveal"><small>03 / CONFIRM</small><h3>Complete with confidence</h3><p>Review important details, confirm your action and track the result.</p></div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap testimonial">
          <div className="photo reveal"><img src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=900&q=85" alt="Person using a digital payment service" /></div>
          <div className="reveal"><div className="kicker">The NexaPay experience</div><div className="quote">“Payments should not feel like work. NexaPay is built to make everyday money tasks feel simple.”</div><b>NexaPay</b><div style={{color:'#667085',fontSize:'12px'}}>Payments made simple</div></div>
        </div>
      </section>

      <section className="section soft" id="faq">
        <div className="wrap">
          <div className="head reveal"><div className="kicker">Questions</div><h2>Frequently asked questions.</h2></div>
          <div className="faq">
            <div className={`faqItem reveal ${faqOpen === 0 ? 'open' : ''}`}>
              <button className="faqQ" onClick={() => toggleFaq(0)}>What is NexaPay?<span>{faqOpen === 0 ? '−' : '+'}</span></button>
              <div className="faqA"><p>NexaPay is a digital payments concept designed to bring transfers, airtime, data and bill payments into one simple experience.</p></div>
            </div>
            <div className={`faqItem reveal ${faqOpen === 1 ? 'open' : ''}`}>
              <button className="faqQ" onClick={() => toggleFaq(1)}>What can I use NexaPay for?<span>{faqOpen === 1 ? '−' : '+'}</span></button>
              <div className="faqA"><p>The product direction includes money transfers, airtime and data, electricity and TV payments, transaction history and account management.</p></div>
            </div>
            <div className={`faqItem reveal ${faqOpen === 2 ? 'open' : ''}`}>
              <button className="faqQ" onClick={() => toggleFaq(2)}>Is NexaPay available now?<span>{faqOpen === 2 ? '−' : '+'}</span></button>
              <div className="faqA"><p>This is the public-facing Phase 1 website. Live financial services depend on the production backend, integrations and required infrastructure.</p></div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta" id="start">
        <div className="wrap">
          <div className="ctaBox reveal" style={{background:'linear-gradient(135deg, #0d241c, #124331)',borderRadius:'34px',padding:'60px 40px',textAlign:'center',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
            <div style={{maxWidth:'700px',width:'100%',display:'flex',flexDirection:'column',alignItems:'center'}}>
              <div className="kicker" style={{color:'#72e6b5'}}>Ready when you are</div>
              <h2 style={{color:'#fff',fontSize:'clamp(32px, 4vw, 48px)',margin:'10px 0 16px',textAlign:'center'}}>Make everyday payments simpler.</h2>
              <p style={{color:'#b8cec4',maxWidth:'600px',margin:'0 auto 30px',textAlign:'center',fontSize:'17px',lineHeight:'1.6'}}>One focused experience for sending money, staying connected and taking care of everyday bills.</p>
              <div style={{display:'flex',justifyContent:'center',gap:'24px',flexWrap:'wrap',marginBottom:'30px',fontSize:'14px',color:'#b8cec4'}}>
                <span>✅ Zero commitment</span>
                <span>✅ What you see is what you pay</span>
                <span>✅ Full control, always</span>
              </div>
              <div className="actions" style={{display:'flex',justifyContent:'center',gap:'12px',flexWrap:'wrap'}}>
                <Link className="btn outline" to="/login" style={{borderColor:'rgba(255,255,255,0.3)',color:'#fff',background:'transparent',padding:'12px 28px'}}>Log in</Link>
                <Link className="btn primary" to="/register" style={{background:'var(--g)',color:'#fff',boxShadow:'0 10px 25px #00a86b2e',padding:'12px 28px'}}>Get started →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="wrap">
          <div className="footGrid">
            <div className="foot footBrand"><Link className="logo" to="/"><span className="mark">N</span>NexaPay</Link><p>Payments made simple. A modern digital payments experience designed around everyday life in Nigeria.</p></div>
            <div className="foot"><h4>Product</h4><a href="#features">Features</a><a href="#how">How it works</a><a href="#security">Security</a><a href="#">Pricing</a></div>
            <div className="foot"><h4>Company</h4><a href="#">About</a><a href="#">Contact</a><a href="#">Careers</a></div>
            <div className="foot"><h4>Resources</h4><a href="#faq">FAQs</a><a href="#">Help Center</a><a href="#">Privacy</a><a href="#">Terms</a></div>
          </div>
          <div className="bottom"><span>© 2026 NexaPay. All rights reserved.</span><div>X &nbsp; ◎ &nbsp; in</div></div>
        </div>
      </footer>
    </div>
  )
}

// ============================================================
// LOGIN PAGE
// ============================================================
function LoginPage() {
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
      // For demo, just go to home
      window.location.href = '/'
    }, 1000)
  }

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <Link to="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-[#0F172A] transition-colors mb-6 text-sm">← Back to home</Link>
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
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#00a86b] focus:outline-none focus:ring-2 focus:ring-[#00a86b]/20 bg-[#F8FAFC]"
                required
              />
            </div>
            <div>
              <label className="text-sm font-medium text-[#0F172A] block mb-1.5">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className="w-full px-4 pr-12 py-3 rounded-xl border border-gray-200 focus:border-[#00a86b] focus:outline-none focus:ring-2 focus:ring-[#00a86b]/20 bg-[#F8FAFC]"
                  required
                />
                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                  {showPassword ? '🙈' : '👁️'}
                </button>
              </div>
            </div>
            <div className="text-right">
              <a href="#" className="text-sm text-[#00a86b] hover:underline font-medium">Forgot password?</a>
            </div>
            <button type="submit" disabled={loading} className="w-full py-3.5 bg-[#00a86b] text-white rounded-xl font-semibold hover:bg-[#087f5b] transition-all duration-300 hover:shadow-lg hover:shadow-[#00a86b]/25 flex items-center justify-center gap-2 disabled:opacity-70">
              {loading ? 'Signing in...' : 'Log in →'}
            </button>
          </form>
          <p className="text-center text-sm text-gray-500 mt-6">
            Don't have an account? <Link to="/register" className="text-[#00a86b] font-semibold hover:underline">Create one →</Link>
          </p>
          <div className="flex items-center gap-4 my-6"><div className="flex-1 h-px bg-gray-200"></div><span className="text-gray-400 text-xs">or</span><div className="flex-1 h-px bg-gray-200"></div></div>
          <Link to="/" className="w-full py-3 border-2 border-gray-200 text-[#0F172A] rounded-xl font-medium hover:border-[#00a86b] hover:bg-[#00a86b]/5 transition-all duration-200 flex items-center justify-center gap-2">Continue as Guest</Link>
          <p className="text-center text-gray-400 text-xs mt-8">© 2026 NexaPay. All rights reserved.</p>
        </div>
      </div>
    </div>
  )
}

// ============================================================
// REGISTER PAGE
// ============================================================
function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    firstName: '', lastName: '', email: '', phone: '', password: '', confirmPassword: ''
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
    }, 1000)
  }

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <Link to="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-[#0F172A] transition-colors mb-6 text-sm">← Back to home</Link>
        <div className="bg-white rounded-2xl shadow-soft p-8 border border-gray-100">
          <div className="text-center mb-8">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#0F172A] via-[#2563EB] to-[#7C3AED] flex items-center justify-center mx-auto mb-4 shadow-lg shadow-blue-500/20">
              <span className="text-white font-bold text-2xl">N</span>
            </div>
            <h1 className="text-2xl font-bold text-[#0F172A]">Create Account</h1>
            <p className="text-gray-500 text-sm mt-1">Get started with NexaPay today</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-3">
              <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="First name" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#00a86b] focus:outline-none focus:ring-2 focus:ring-[#00a86b]/20 bg-[#F8FAFC]" required />
              <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Last name" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#00a86b] focus:outline-none focus:ring-2 focus:ring-[#00a86b]/20 bg-[#F8FAFC]" required />
            </div>
            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email address" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#00a86b] focus:outline-none focus:ring-2 focus:ring-[#00a86b]/20 bg-[#F8FAFC]" required />
            <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone number" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#00a86b] focus:outline-none focus:ring-2 focus:ring-[#00a86b]/20 bg-[#F8FAFC]" required />
            <div className="relative">
              <input type={showPassword ? 'text' : 'password'} name="password" value={formData.password} onChange={handleChange} placeholder="Password" className="w-full px-4 pr-12 py-3 rounded-xl border border-gray-200 focus:border-[#00a86b] focus:outline-none focus:ring-2 focus:ring-[#00a86b]/20 bg-[#F8FAFC]" required />
              <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">{showPassword ? '🙈' : '👁️'}</button>
            </div>
            <div className="relative">
              <input type={showConfirmPassword ? 'text' : 'password'} name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} placeholder="Confirm password" className="w-full px-4 pr-12 py-3 rounded-xl border border-gray-200 focus:border-[#00a86b] focus:outline-none focus:ring-2 focus:ring-[#00a86b]/20 bg-[#F8FAFC]" required />
              <button type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">{showConfirmPassword ? '🙈' : '👁️'}</button>
            </div>
            <button type="submit" disabled={loading} className="w-full py-3.5 bg-[#00a86b] text-white rounded-xl font-semibold hover:bg-[#087f5b] transition-all duration-300 hover:shadow-lg hover:shadow-[#00a86b]/25 flex items-center justify-center gap-2 disabled:opacity-70">
              {loading ? 'Creating account...' : 'Create Account →'}
            </button>
          </form>
          <p className="text-center text-sm text-gray-500 mt-6">
            Already have an account? <Link to="/login" className="text-[#00a86b] font-semibold hover:underline">Sign in →</Link>
          </p>
          <div className="flex items-center gap-4 my-6"><div className="flex-1 h-px bg-gray-200"></div><span className="text-gray-400 text-xs">or</span><div className="flex-1 h-px bg-gray-200"></div></div>
          <Link to="/" className="w-full py-3 border-2 border-gray-200 text-[#0F172A] rounded-xl font-medium hover:border-[#00a86b] hover:bg-[#00a86b]/5 transition-all duration-200 flex items-center justify-center gap-2">Continue as Guest</Link>
          <p className="text-center text-gray-400 text-xs mt-8">© 2026 NexaPay. All rights reserved.</p>
        </div>
      </div>
    </div>
  )
}
