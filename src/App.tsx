import { useState, useEffect } from 'react'
import { 
  ArrowRight, 
  Send, 
  CreditCard, 
  Phone, 
  Wifi, 
  Shield, 
  ChevronRight,
  Menu,
  X
} from 'lucide-react'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToFeatures = () => {
    document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-white">
      
      {/* ========== HEADER ========== */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur shadow-sm' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#0F172A] via-[#2563EB] to-[#7C3AED] flex items-center justify-center">
                <span className="text-white font-bold text-sm">N</span>
              </div>
              <span className="text-xl font-bold text-[#0F172A]">NexaPay</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-gray-600 hover:text-[#0F172A] transition-colors text-sm font-medium">
                Features
              </a>
              <a href="#" className="text-gray-600 hover:text-[#0F172A] transition-colors text-sm font-medium">
                Pricing
              </a>
              <a href="#" className="text-gray-600 hover:text-[#0F172A] transition-colors text-sm font-medium">
                Support
              </a>
              <a href="/login" className="text-[#0F172A] font-medium text-sm hover:text-[#2563EB] transition-colors">
                Login
              </a>
              <a 
                href="/register" 
                className="px-5 py-2.5 bg-gradient-to-r from-[#0F172A] via-[#2563EB] to-[#7C3AED] text-white rounded-xl font-medium text-sm hover:shadow-lg hover:shadow-blue-500/25 transition-all hover:-translate-y-0.5"
              >
                Register
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4">
            <div className="flex flex-col space-y-3">
              <a href="#features" className="text-gray-600 hover:text-[#0F172A] transition-colors py-2" onClick={() => setIsMenuOpen(false)}>
                Features
              </a>
              <a href="#" className="text-gray-600 hover:text-[#0F172A] transition-colors py-2" onClick={() => setIsMenuOpen(false)}>
                Pricing
              </a>
              <a href="#" className="text-gray-600 hover:text-[#0F172A] transition-colors py-2" onClick={() => setIsMenuOpen(false)}>
                Support
              </a>
              <a href="/login" className="text-[#0F172A] font-medium py-2" onClick={() => setIsMenuOpen(false)}>
                Login
              </a>
              <a 
                href="/register" 
                className="text-center px-5 py-3 bg-gradient-to-r from-[#0F172A] via-[#2563EB] to-[#7C3AED] text-white rounded-xl font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Register
              </a>
            </div>
          </div>
        )}
      </header>

      {/* ========== HERO SECTION ========== */}
      <section className="pt-24 md:pt-32 pb-16 md:pb-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            
            {/* Left Content */}
            <div className="space-y-6 animate-fade-in">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#2563EB]/10 rounded-full text-[#2563EB] text-sm font-medium">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2563EB] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#2563EB]"></span>
                </span>
                Trusted by 10,000+ users
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0F172A] leading-tight">
                Modern digital{' '}
                <span className="bg-gradient-to-r from-[#2563EB] to-[#7C3AED] bg-clip-text text-transparent">
                  payments
                </span>{' '}
                for Nigeria
              </h1>

              <p className="text-lg text-gray-500 leading-relaxed">
                Send money, pay bills, buy airtime & data instantly — all from one app.
                Join thousands of Nigerians enjoying seamless digital payments.
              </p>

              <div className="flex flex-wrap gap-4">
                <a 
                  href="/register" 
                  className="group px-6 py-3 bg-gradient-to-r from-[#0F172A] via-[#2563EB] to-[#7C3AED] text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 hover:-translate-y-0.5 flex items-center gap-2"
                >
                  Get Started
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
                <button 
                  onClick={scrollToFeatures}
                  className="px-6 py-3 border-2 border-gray-200 text-[#0F172A] rounded-xl font-semibold hover:border-[#2563EB] hover:bg-[#2563EB]/5 transition-all duration-300 flex items-center gap-2"
                >
                  Learn More
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative flex justify-center">
              <div className="relative w-full max-w-md">
                <div className="absolute inset-0 bg-gradient-to-br from-[#2563EB]/20 to-[#7C3AED]/20 rounded-3xl blur-2xl"></div>
                <img 
                  src="https://images.unsplash.com/photo-1543269865-cbf427effbad?w=600&h=600&fit=crop&crop=center"
                  alt="Person using NexaPay app"
                  className="relative rounded-2xl shadow-strong w-full object-cover aspect-square"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== FEATURES SECTION ========== */}
      <section id="features" className="py-16 md:py-24 px-4 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A]">
              Why choose NexaPay?
            </h2>
            <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
              Everything you need to manage your money, all in one place.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Send className="w-6 h-6 text-[#2563EB]" />,
                title: 'Send Money',
                description: 'Transfer money instantly to anyone, anywhere in Nigeria.'
              },
              {
                icon: <CreditCard className="w-6 h-6 text-[#2563EB]" />,
                title: 'Pay Bills',
                description: 'Pay electricity, TV, and other bills in seconds.'
              },
              {
                icon: <div className="flex items-center gap-1"><Phone className="w-5 h-5 text-[#2563EB]" /><Wifi className="w-5 h-5 text-[#2563EB]" /></div>,
                title: 'Airtime & Data',
                description: 'Buy airtime and data bundles for all networks instantly.'
              },
              {
                icon: <Shield className="w-6 h-6 text-[#2563EB]" />,
                title: 'Secure & Safe',
                description: 'Your money is protected with bank-grade security.'
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-soft hover:shadow-strong transition-all duration-300 hover:-translate-y-1">
                <div className="w-12 h-12 rounded-xl bg-[#2563EB]/10 flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-[#0F172A]">{feature.title}</h3>
                <p className="text-gray-500 text-sm mt-2">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== TESTIMONIAL SECTION ========== */}
      <section className="py-16 md:py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            
            <div className="order-2 md:order-1">
              <div className="bg-[#F8FAFC] rounded-2xl p-8 relative">
                <div className="absolute -top-3 -left-3 text-6xl text-[#2563EB]/20">"</div>
                <p className="text-xl md:text-2xl text-[#0F172A] font-medium leading-relaxed relative z-10">
                  NexaPay made sending money to my family so easy. 
                  I can now pay bills and buy airtime in seconds.
                </p>
                <div className="mt-6 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#2563EB] to-[#7C3AED] flex items-center justify-center text-white font-bold text-lg">
                    M
                  </div>
                  <div>
                    <p className="font-semibold text-[#0F172A]">Michael Adebayo</p>
                    <p className="text-sm text-gray-500">Lagos, Nigeria</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 md:order-2">
              <div className="relative w-full max-w-sm mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-[#7C3AED]/20 to-[#2563EB]/20 rounded-3xl blur-2xl"></div>
                <img 
                  src="https://images.unsplash.com/photo-1517433670267-08bbd4be890f?w=400&h=500&fit=crop&crop=center"
                  alt="Happy user"
                  className="relative rounded-2xl shadow-strong w-full object-cover aspect-[4/5]"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== CTA SECTION ========== */}
      <section className="py-16 md:py-24 px-4 bg-gradient-to-r from-[#0F172A] via-[#2563EB] to-[#7C3AED]">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Start using NexaPay today
          </h2>
          <p className="text-white/80 text-lg mb-8">
            Join thousands of Nigerians already enjoying seamless digital payments.
          </p>
          <a 
            href="/register" 
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#0F172A] rounded-xl font-semibold hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
          >
            Get Started
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* ========== FOOTER ========== */}
      <footer className="bg-[#0F172A] text-white/60 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
            
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#2563EB] to-[#7C3AED] flex items-center justify-center">
                  <span className="text-white font-bold text-sm">N</span>
                </div>
                <span className="text-white font-bold text-lg">NexaPay</span>
              </div>
              <p className="text-sm">Payments made simple.</p>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Support</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Security</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 mt-8 pt-8 text-sm text-center">
            © 2026 NexaPay. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
