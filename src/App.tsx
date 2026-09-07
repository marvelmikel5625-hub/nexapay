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

      {/* Features */}
      <section className="section" id="features">
        <div className="wrap">
          <div className="intro reveal">
            <div>
              <div className="kicker">One place for everyday payments</div>
              <h2>Everything you need. Nothing you don't.</h2>
            </div>
            <div className="stat"><strong>01</strong><br />Focused payment flows that keep common money tasks simple and clear.</div>
          </div>

          <div className="service reveal">
            <div className="copy">
              <div className="kicker">Send money</div>
              <h3>Move money without unnecessary steps.</h3>
              <p>Send money to people and bank accounts with a straightforward flow that keeps the recipient, amount and status clear.</p>
              <ul>
                <li>Simple transfer flow</li>
                <li>Clear transaction status</li>
                <li>Designed for Nigerian payments</li>
              </ul>
            </div>
            <div className="visual">
              <div className="card">
                <b>Send money</b>
                <div className="vrow">01 &nbsp; Choose recipient <b>✓</b></div>
                <div className="vrow">02 &nbsp; Enter amount <b>✓</b></div>
                <div className="vrow">03 &nbsp; Confirm payment <b>✓</b></div>
              </div>
            </div>
          </div>

          <div className="service reverse reveal">
            <div className="copy">
              <div className="kicker">Airtime & data</div>
              <h3>Stay connected in just a few taps.</h3>
              <p>Choose your network, select an amount or bundle, confirm your details and get back online.</p>
              <ul>
                <li>Major Nigerian networks</li>
                <li>Flexible airtime and data options</li>
                <li>Fast confirmation</li>
              </ul>
            </div>
            <div className="visual">
              <div className="networks">
                <div className="network" style={{ display: 'flex', alignItems: 'center', gap: '12px', borderLeft: '4px solid #FFCD00', background: '#fff' }}>
                  <svg width="36" height="36" viewBox="0 0 36 36"><rect width="36" height="36" rx="8" fill="#FFCD00"/><text x="18" y="24" fontFamily="Arial" fontSize="14" fontWeight="900" fill="#000" textAnchor="middle">MTN</text></svg>
                  <span style={{ fontWeight: '700' }}>MTN</span>
                </div>
                <div className="network" style={{ display: 'flex', alignItems: 'center', gap: '12px', borderLeft: '4px solid #FF0000', background: '#fff' }}>
                  <svg width="36" height="36" viewBox="0 0 36 36"><rect width="36" height="36" rx="8" fill="#FF0000"/><text x="18" y="24" fontFamily="Arial" fontSize="11" fontWeight="900" fill="#FFF" textAnchor="middle">AIRTEL</text></svg>
                  <span style={{ fontWeight: '700' }}>Airtel</span>
                </div>
                <div className="network" style={{ display: 'flex', alignItems: 'center', gap: '12px', borderLeft: '4px solid #008000', background: '#fff' }}>
                  <svg width="36" height="36" viewBox="0 0 36 36"><rect width="36" height="36" rx="8" fill="#008000"/><text x="18" y="24" fontFamily="Arial" fontSize="16" fontWeight="900" fill="#FFF" textAnchor="middle">GLO</text></svg>
                  <span style={{ fontWeight: '700' }}>Glo</span>
                </div>
                <div className="network" style={{ display: 'flex', alignItems: 'center', gap: '12px', borderLeft: '4px solid #800080', background: '#fff' }}>
                  <svg width="36" height="36" viewBox="0 0 36 36"><rect width="36" height="36" rx="8" fill="#800080"/><text x="18" y="24" fontFamily="Arial" fontSize="10" fontWeight="900" fill="#FFF" textAnchor="middle">9mobile</text></svg>
                  <span style={{ fontWeight: '700' }}>9mobile</span>
                </div>
              </div>
            </div>
          </div>

          <div className="service reveal">
            <div className="copy">
              <div className="kicker">Bills</div>
              <h3>Take care of bills from one place.</h3>
              <p>Handle everyday bills with a clear experience that helps you review the service, amount and payment status before finishing.</p>
              <ul>
                <li>Electricity payments</li>
                <li>TV subscriptions</li>
                <li>Clear receipts and status</li>
              </ul>
            </div>
            <div className="visual">
              <div className="bill">
                <small>Electricity · Prepaid</small>
                <h3>₦25,000</h3>
                <small>Electricity payment</small>
                <div className="pay">Continue securely →</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Built for Nigeria */}
      <section className="section dark">
        <div className="wrap eco">
          <div className="reveal">
            <div className="kicker" style={{ color: '#72e6b5' }}>Built for Nigeria</div>
            <h2>One simple experience for the way you pay.</h2>
            <p className="lead">NexaPay brings everyday payment tasks into one focused ecosystem, so you spend less time moving between different services.</p>
          </div>
          <div className="orbit reveal">
            <div className="ring r2"></div><div className="ring r1"></div>
            <div className="core">NexaPay</div>
            <span className="tag t1">Send money</span>
            <span className="tag t2">Airtime</span>
            <span className="tag t3">Data</span>
            <span className="tag t4">Electricity</span>
            <span className="tag t5">TV & bills</span>
          </div>
        </div>
      </section>

      {/* Security */}
      <section className="section" id="security">
        <div className="wrap">
          <div className="head reveal">
            <div className="kicker">Security first</div>
            <h2>Your money deserves a careful experience.</h2>
            <p className="lead">NexaPay is designed with security-conscious account and transaction flows while keeping important actions easy to understand.</p>
          </div>
          <div className="security">
            <div className="securityMain reveal">
              <div className="shield">⌾</div>
              <div className="kicker" style={{ color: '#72e6b5' }}>Designed with protection in mind</div>
              <h2 style={{ fontSize: '38px' }}>Security should feel invisible — not complicated.</h2>
              <p>From account access to transaction confirmation, important actions are designed to be clear and deliberate.</p>
            </div>
            <div className="secCards">
              <div className="sec reveal"><div className="secIcon">⌁</div><h3>Secure access</h3><p>Verification steps can help protect sensitive account actions.</p></div>
              <div className="sec reveal"><div className="secIcon">✓</div><h3>Confirmation</h3><p>Important payments show clear details before confirmation.</p></div>
              <div className="sec reveal"><div className="secIcon">◉</div><h3>Clear status</h3><p>Know whether a payment is successful, pending or needs attention.</p></div>
              <div className="sec reveal"><div className="secIcon">↻</div><h3>Safer by design</h3><p>Critical flows are structured to reduce accidental actions.</p></div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section soft" id="how">
        <div className="wrap">
          <div className="head reveal">
            <div className="kicker">How it works</div>
            <h2>Simple from the first tap.</h2>
            <p className="lead">A focused flow means less friction when you need to make an everyday payment.</p>
          </div>
          <div className="steps">
            <div className="step reveal"><small>01 / START</small><h3>Create your account</h3><p>Set up your details and secure access to your NexaPay experience.</p></div>
            <div className="step reveal"><small>02 / CHOOSE</small><h3>Pick what you need</h3><p>Send money, buy airtime or data, pay a bill, or review activity.</p></div>
            <div className="step reveal"><small>03 / CONFIRM</small><h3>Complete with confidence</h3><p>Review important details, confirm your action and track the result.</p></div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="section">
        <div className="wrap testimonial">
          <div className="photo reveal"><img src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=900&q=85" alt="Person using a digital payment service" /></div>
          <div className="reveal">
            <div className="kicker">The NexaPay experience</div>
            <div className="quote">“Payments should not feel like work. NexaPay is built to make everyday money tasks feel simple.”</div>
            <b>NexaPay</b>
            <div style={{ color: '#667085', fontSize: '12px' }}>Payments made simple</div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section soft" id="faq">
        <div className="wrap">
          <div className="head reveal">
            <div className="kicker">Questions</div>
            <h2>Frequently asked questions.</h2>
          </div>
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
