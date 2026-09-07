import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Login } from './pages/Login'
import { Register } from './pages/Register'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* Catch all - redirect to home */}
        <Route path="*" element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

// ========== LANDING PAGE ==========
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

    document.querySelectorAll('.reveal').forEach((el) => {
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  const toggleFaq = (index: number) => {
    setFaqOpen(faqOpen === index ? null : index)
  }

  return (
    <div>
      {/* Top Bar */}
      <div className="bar">
        NexaPay <b>•</b> A simpler way to manage everyday payments.
      </div>

      {/* Navigation */}
      <header className={`nav ${isMenuOpen ? 'open' : ''}`} id="nav">
        <div className="wrap navin">
          <Link className="logo" to="/">
            <span className="mark">N</span>
            NexaPay
          </Link>
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
          <button className="menu" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            ☰
          </button>
        </div>
      </header>

      {/* Hero */}
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
            <div className="points">
              <span>Fast payments</span>
              <span>Secure access</span>
              <span>Built for Nigeria</span>
            </div>
          </div>
          <div className="art reveal">
            <div className="glow"></div>
            <div className="float f1">
              ↗ <b>Transfer complete</b>
              <small>Payment processed successfully</small>
            </div>
            <div className="phone">
              <div className="screen">
                <div className="top"><b>NexaPay</b><span>•••</span></div>
                <div className="balance"><small>Available balance</small><strong>₦248,500</strong></div>
                <div className="quick">
                  <div><b>↗</b>Send</div>
                  <div><b>＋</b>Add</div>
                  <div><b>▣</b>Bills</div>
                </div>
                <div className="activity">
                  <h4>Recent activity</h4>
                  <div className="row">↗ Bank transfer <strong>−₦15,000</strong></div>
                  <div className="row">◉ Airtime <strong>−₦2,000</strong></div>
                  <div className="row">＋ Money received <strong>+₦40,000</strong></div>
                </div>
              </div>
            </div>
            <div className="float f2">
              ✓ <b>Payment secured</b>
              <small>Transaction verified</small>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee */}
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

      {/* Features - shortened for brevity, keep your existing code */}
      <section className="section" id="features">
        <div className="wrap">
          <div className="intro reveal">
            <div>
              <div className="kicker">One place for everyday payments</div>
              <h2>Everything you need. Nothing you don't.</h2>
            </div>
            <div className="stat"><strong>01</strong><br />Focused payment flows that keep common money tasks simple and clear.</div>
          </div>
          {/* Keep your existing feature cards here */}
        </div>
      </section>

      {/* Keep the rest of your landing page sections here */}
      {/* CTA */}
      <section className="cta" id="start">
        <div className="wrap">
          <div className="ctaBox reveal" style={{ background: 'linear-gradient(135deg, #0d241c, #124331)', borderRadius: '34px', padding: '60px 40px', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ maxWidth: '700px', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div className="kicker" style={{ color: '#72e6b5' }}>Ready when you are</div>
              <h2 style={{ color: '#fff', fontSize: 'clamp(32px, 4vw, 48px)', margin: '10px 0 16px', textAlign: 'center' }}>Make everyday payments simpler.</h2>
              <p style={{ color: '#b8cec4', maxWidth: '600px', margin: '0 auto 30px', textAlign: 'center', fontSize: '17px', lineHeight: '1.6' }}>One focused experience for sending money, staying connected and taking care of everyday bills.</p>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '24px', flexWrap: 'wrap', marginBottom: '30px', fontSize: '14px', color: '#b8cec4' }}>
                <span>✅ Zero commitment</span>
                <span>✅ What you see is what you pay</span>
                <span>✅ Full control, always</span>
              </div>
              <div className="actions" style={{ display: 'flex', justifyContent: 'center', gap: '12px', flexWrap: 'wrap' }}>
                <Link className="btn outline" to="/login" style={{ borderColor: 'rgba(255,255,255,0.3)', color: '#fff', background: 'transparent', padding: '12px 28px' }}>Log in</Link>
                <Link className="btn primary" to="/register" style={{ background: 'var(--g)', color: '#fff', boxShadow: '0 10px 25px #00a86b2e', padding: '12px 28px' }}>Get started →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer" id="login">
        <div className="wrap">
          <div className="footGrid">
            <div className="foot footBrand">
              <Link className="logo" to="/"><span className="mark">N</span>NexaPay</Link>
              <p>Payments made simple. A modern digital payments experience designed around everyday life in Nigeria.</p>
            </div>
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
