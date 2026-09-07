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
  X,
  ChevronDown,
  Sparkles,
  Zap,
  Users,
  Globe
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
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-xl shadow-lg border-b border-gray-100/50' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            
            {/* Logo */}
            <a href="/" className="flex items-center gap-2.5 group">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#2563EB] to-[#7C3AED] rounded-xl blur-md opacity-60 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative w-9 h-9 rounded-xl bg-gradient-to-br from-[#0F172A] via-[#2563EB] to-[#7C3AED] flex items-center justify-center shadow-lg shadow-blue-500/20">
                  <span className="text-white font-bold text-sm">N</span>
                </div>
              </div>
              <span className="text-xl font-bold text-[#0F172A] tracking-tight">NexaPay</span>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1">
              <a href="#features" className="px-4 py-2 text-gray-600 hover:text-[#0F172A] transition-colors text-sm font-medium rounded-lg hover:bg-gray-50">
                Features
              </a>
              <a href="#" className="px-4 py-2 text-gray-600 hover:text-[#0F172A] transition-colors text-sm font-medium rounded-lg hover:bg-gray-50">
                Pricing
              </a>
              <a href="#" className="px-4 py-2 text-gray-600 hover:text-[#0F172A] transition-colors text-sm font-medium rounded-lg hover:bg-gray-50">
                Support
              </a>
              <div className="w-px h-6 bg-gray-200 mx-2"></div>
              <a 
                href="/login" 
                className="px-5 py-2 text-[#0F172A] font-medium text-sm hover:text-[#2563EB] transition-colors rounded-lg hover:bg-gray-50"
              >
                Log in
              </a>
              <a 
                href="/register" 
                className="px-6 py-2.5 bg-gradient-to-r from-[#0F172A] via-[#2563EB] to-[#7C3AED] text-white rounded-xl font-medium text-sm hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 hover:-translate-y-0.5"
              >
                Get Started
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2.5 rounded-xl hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-xl border-t border-gray-100 px-4 py-6 shadow-lg">
            <div className="flex flex-col space-y-1">
              <a href="#features" className="px-4 py-3 text-gray-600 hover:text-[#0F172A] hover:bg-gray-50 rounded-xl transition-colors" onClick={() => setIsMenuOpen(false)}>
                Features
              </a>
              <a href="#" className="px-4 py-3 text-gray-600 hover:text-[#0F172A] hover:bg-gray-50 rounded-xl transition-colors" onClick={() => setIsMenuOpen(false)}>
                Pricing
              </a>
              <a href="#" className="px-4 py-3 text-gray-600 hover:text-[#0F172A] hover:bg-gray-50 rounded-xl transition-colors" onClick={() => setIsMenuOpen(false)}>
                Support
              </a>
              <div className="border-t border-gray-100 my-2"></div>
              <a href="/login" className="px-4 py-3 text-[#0F172A] font-medium hover:bg-gray-50 rounded-xl transition-colors" onClick={() => setIsMenuOpen(false)}>
                Log in
              </a>
              <a 
                href="/register" 
                className="px-4 py-3.5 text-center bg-gradient-to-r from-[#0F172A] via-[#2563EB] to-[#7C3AED] text-white rounded-xl font-medium shadow-lg shadow-blue-500/20"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Started
              </a>
            </div>
          </div>
        )}
      </header>

      {/* ========== HERO SECTION ========== */}
      <section className="relative pt-28 md:pt-36 pb-16 md:pb-24 px-4 overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#2563EB]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#7C3AED]/5 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto relative">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Left Content */}
            <div className="space-y-6 animate-fade-in">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#2563EB]/10 rounded-full text-[#2563EB] text-sm font-medium border border-[#2563EB]/10">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2563EB] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#2563EB]"></span>
                </span>
                Trusted by 10,000+ users
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0F172A] leading-[1.1] tracking-tight">
                Modern digital{' '}
                <span className="bg-gradient-to-r from-[#2563EB] to-[#7C3AED] bg-clip-text text-transparent">
                  payments
                </span>{' '}
                for Nigeria
              </h1>

              <p className="text-lg text-gray-500 leading-relaxed max-w-lg">
                Send money, pay bills, buy airtime & data instantly — all from one app.
                Join thousands of Nigerians enjoying seamless digital payments.
              </p>

              <div className="flex flex-wrap gap-4">
                <a 
                  href="/register" 
                  className="group px-8 py-3.5 bg-gradient-to-r from-[#0F172A] via-[#2563EB] to-[#7C3AED] text-white rounded-xl font-semibold hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300 hover:-translate-y-1 flex items-center gap-2"
                >
                  Get Started
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
                <button 
                  onClick={scrollToFeatures}
                  className="px-8 py-3.5 border-2 border-gray-200 text-[#0F172A] rounded-xl font-semibold hover:border-[#2563EB] hover:bg-[#2563EB]/5 transition-all duration-300 flex items-center gap-2"
                >
                  Learn More
                  <ChevronDown className="w-4 h-4" />
                </button>
              </div>

              {/* Stats */}
              <div className="flex gap-8 pt-4">
                <div>
                  <p className="text-2xl font-bold text-[#0F172A]">10K+</p>
                  <p className="text-sm text-gray-500">Active Users</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-[#0F172A]">₦50M+</p>
                  <p className="text-sm text-gray-500">Transactions</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-[#0F172A]">4.9★</p>
                  <p className="text-sm text-gray-500">User Rating</p>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative flex justify-center">
              <div className="relative w-full max-w-md">
                <div className="absolute -inset-4 bg-gradient-to-br from-[#2563EB]/20 to-[#7C3AED]/20 rounded-3xl blur-2xl"></div>
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1543269865-cbf427effbad?w=600&h=600&fit=crop&crop=center"
                    alt="Person using NexaPay app"
                    className="w-full object-cover aspect-square"
                    loading="lazy"
                  />
                  {/* Floating Badge */}
                  <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur rounded-xl px-4 py-2 shadow-lg flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center">
                      <Sparkles className="w-4 h-4 text-emerald-500" />
                    </div>
                    <div>
                      <p className="text-xs font-medium text-[#0F172A]">Instant Transfer</p>
                      <p className="text-[10px] text-gray-500">~2 seconds</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== FEATURES SECTION ========== */}
      <section id="features" className="py-16 md:py-24 px-4 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-[#2563EB] font-semibold text-sm uppercase tracking-wider">Features</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mt-2">
              Why choose NexaPay?
            </h2>
            <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
              Everything you need to manage your money, all in one place.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Send className="w-6 h-6" />,
                title: 'Send Money',
                description: 'Transfer money instantly to anyone, anywhere in Nigeria.',
                color: 'from-blue-500 to-blue-600'
              },
              {
                icon: <CreditCard className="w-6 h-6" />,
                title: 'Pay Bills',
                description: 'Pay electricity, TV, and other bills in seconds.',
                color: 'from-purple-500 to-purple-600'
              },
              {
                icon: <div className="flex items-center gap-1"><Phone className="w-5 h-5" /><Wifi className="w-5 h-5" /></div>,
                title: 'Airtime & Data',
                description: 'Buy airtime and data bundles for all networks instantly.',
                color: 'from-cyan-500 to-cyan-600'
              },
              {
                icon: <Shield className="w-6 h-6" />,
                title: 'Secure & Safe',
                description: 'Your money is protected with bank-grade security.',
                color: 'from-emerald-500 to-emerald-600'
              }
            ].map((feature, index) => (
              <div key={index} className="group bg-white rounded-2xl p-6 shadow-soft hover:shadow-strong transition-all duration-300 hover:-translate-y-2 border border-gray-50">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} bg-opacity-10 flex items-center justify-center mb-4 text-white`}>
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
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            <div className="order-2 md:order-1">
              <span className="text-[#2563EB] font-semibold text-sm uppercase tracking-wider">Testimonial</span>
              <div className="mt-4 bg-[#F8FAFC] rounded-2xl p-8 md:p-10 relative border border-gray-100">
                <div className="absolute -top-3 -left-3 text-6xl text-[#2563EB]/10">"</div>
                <p className="text-xl md:text-2xl text-[#0F172A] font-medium leading-relaxed relative z-10">
                  NexaPay made sending money to my family so easy. 
                  I can now pay bills and buy airtime in seconds.
                </p>
                <div className="mt-6 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#2563EB] to-[#7C3AED] flex items-center justify-center text-white font-bold text-lg">
                    MA
                  </div>
                  <div>
                    <p className="font-semibold text-[#0F172A]">Michael Adebayo</p>
                    <p className="text-sm text-gray-500">Lagos, Nigeria</p>
                  </div>
                </div>
                <div className="flex mt-4">
                  {[1,2,3,4,5].map((star) => (
                    <span key={star} className="text-amber-400 text-lg">★</span>
                  ))}
                </div>
              </div>
            </div>

            <div className="order-1 md:order-2">
              <div className="relative w-full max-w-sm mx-auto">
                <div className="absolute -inset-4 bg-gradient-to-br from-[#7C3AED]/20 to-[#2563EB]/20 rounded-3xl blur-2xl"></div>
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1517433670267-08bbd4be890f?w=400&h=500&fit=crop&crop=center"
                    alt="Happy user"
                    className="w-full object-cover aspect-[4/5]"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== CTA SECTION ========== */}
      <section className="relative py-16 md:py-24 px-4 overflow-hidden">
        {/* Background with pattern */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A] via-[#1A2D4A] to-[#2563EB]"></div>
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, #2563EB 0%, transparent 50%), radial-gradient(circle at 80% 50%, #7C3AED 0%, transparent 50%)`
        }}></div>
        
        {/* Floating circles */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-white/5 rounded-full blur-2xl"></div>
        
        <div className="max-w-4xl mx-auto text-center text-white relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur rounded-full text-sm font-medium border border-white/10 mb-6">
            <Zap className="w-4 h-4" />
            Join the future of payments
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
            Start using <span className="bg-gradient-to-r from-[#06B6D4] to-[#7C3AED] bg-clip-text text-transparent">NexaPay</span> today
          </h2>
          
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of Nigerians already enjoying seamless digital payments.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center">
            <a 
              href="/register" 
              className="group inline-flex items-center gap-2 px-8 py-4 bg-white text-[#0F172A] rounded-xl font-semibold hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >
              Get Started
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="/login" 
              className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur text-white rounded-xl font-semibold hover:bg-white/20 transition-all duration-300 border border-white/20"
            >
              Log in
            </a>
          </div>
        </div>
      </section>

      {/* ========== FOOTER ========== */}
      <footer className="bg-[#0F172A] text-white/60 py-12 px-4 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8 pb-8 border-b border-white/5">
            
            {/* Brand */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#2563EB] to-[#7C3AED] flex items-center justify-center shadow-lg shadow-blue-500/20">
                  <span className="text-white font-bold text-sm">N</span>
                </div>
                <span className="text-white font-bold text-lg">NexaPay</span>
              </div>
              <p className="text-sm max-w-sm">
                Payments made simple. Send money, pay bills, and buy airtime instantly.
              </p>
              <div className="flex gap-4 mt-4">
                <a href="#" className="text-white/40 hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
                </a>
                <a href="#" className="text-white/40 hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98-3.56-.18-6.73-1.89-8.84-4.48-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/></svg>
                </a>
                <a href="#" className="text-white/40 hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>
                </a>
                <a href="#" className="text-white/40 hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M21.428 6.948c.498.331.767.737.807 1.218.04.481-.176.94-.647 1.378-.47.437-.987.776-1.55 1.016-.476.198-.915.26-1.318.184-.402-.077-.718-.228-.947-.453.047-.191.121-.476.222-.856.101-.38.153-.606.153-.68l.11-.61c.021-.108.122-.184.303-.228.181-.044.407-.086.68-.127.273-.04.48-.125.62-.253.14-.127.187-.281.139-.46-.029-.165-.1-.314-.214-.446-.114-.132-.205-.215-.274-.25-.03-.018-.075-.049-.136-.09-.061-.04-.125-.067-.193-.08-.068-.012-.153-.009-.255.012-.102.021-.172.035-.21.042l-.737.195c-.257.067-.46.124-.61.17-.488.15-.962.37-1.424.66s-.853.6-1.172.96c-.319.361-.556.745-.71 1.153a5.243 5.243 0 0 0-.237 1.095c-.036.267-.02.502.05.704.071.202.177.363.318.484.141.121.306.193.494.216.188.023.384-.01.586-.098.203-.088.382-.191.537-.31.156-.118.294-.247.416-.386.121-.14.222-.271.303-.395.08-.124.147-.256.201-.398.055-.142.1-.278.139-.408.071-.238.132-.46.184-.667.03-.112.098-.198.204-.258.105-.06.211-.056.318.012.106.069.187.155.243.26.056.105.072.209.047.313-.025.104-.088.28-.19.528-.101.249-.187.428-.258.538-.102.158-.213.329-.332.513-.12.184-.26.355-.422.512-.162.157-.344.292-.546.405-.203.113-.426.195-.669.246-.243.05-.492.056-.746.017a2.03 2.03 0 0 1-.695-.22c-.198-.102-.372-.242-.522-.42-.15-.178-.249-.407-.296-.687-.048-.28-.062-.498-.042-.655.02-.157.047-.309.08-.456.034-.147.056-.25.066-.31.011-.06.019-.159.025-.297.006-.138.024-.289.054-.454.03-.166.081-.36.153-.583.071-.224.17-.443.297-.657.127-.215.269-.4.426-.555.157-.155.307-.271.45-.348.143-.077.275-.116.396-.118.12-.002.224.027.31.087.086.06.152.148.197.264.045.116.058.242.039.378-.02.136-.064.252-.133.348-.069.096-.133.15-.192.162-.058.012-.115.033-.17.063-.055.03-.085.052-.09.066-.005.014-.001.031.01.052.011.021.021.033.03.036.009.003.024.007.045.012.021.005.043.006.066.004.023-.002.045-.006.066-.012.021-.006.04-.01.057-.012.016-.002.036.003.06.015.024.012.046.031.066.057.02.026.036.06.048.102.012.043.017.08.015.112-.002.033-.01.07-.024.111-.014.041-.036.088-.066.141-.03.053-.07.102-.12.147-.05.045-.104.074-.162.087-.058.013-.126.016-.204.009-.078-.007-.145-.026-.2-.057-.055-.031-.096-.069-.123-.114-.027-.045-.05-.108-.069-.189-.019-.081-.028-.17-.028-.267 0-.097.01-.188.028-.273.019-.085.044-.153.075-.204.03-.051.073-.105.128-.162.055-.057.119-.102.191-.135.072-.033.146-.052.223-.057.077-.005.158.005.243.03.085.025.168.07.249.135.081.065.143.143.186.234.043.091.064.182.064.273 0 .091-.012.185-.036.282-.024.097-.048.16-.073.19-.025.03-.049.054-.073.072-.024.018-.061.043-.111.075-.05.032-.108.06-.174.084-.066.024-.141.04-.225.048-.084.008-.167.01-.249.006-.082-.004-.155-.015-.219-.033-.064-.018-.119-.041-.165-.069-.046-.028-.081-.062-.105-.102-.024-.04-.04-.087-.048-.141-.008-.054-.006-.109.006-.165.012-.056.034-.11.066-.162.032-.052.074-.1.126-.144.052-.044.101-.069.147-.075.046-.006.093-.004.141.006.048.01.084.026.108.048.024.022.043.047.057.075.014.028.031.071.051.129.02.058.033.111.039.159.006.048.008.087.006.117-.002.03-.008.058-.018.084-.01.026-.024.04-.042.042-.018.002-.036-.008-.054-.03-.018-.022-.034-.052-.048-.09-.014-.038-.024-.08-.03-.126-.006-.046-.006-.09 0-.132.006-.042.016-.078.03-.108.014-.03.032-.052.054-.066.022-.014.05-.024.084-.03.034-.006.072-.004.114.006.042.01.08.026.114.048.034.022.06.05.078.084.018.034.028.073.03.117.002.044-.004.08-.018.108-.014.028-.034.048-.06.06-.026.012-.056.016-.09.012-.034-.004-.064-.012-.09-.024-.026-.012-.05-.03-.072-.054-.022-.024-.036-.05-.042-.078-.006-.028-.008-.056-.006-.084.002-.028.006-.052.012-.072.006-.02.014-.034.024-.042.01-.008.02-.01.03-.006.01.004.016.012.018.024.002.012.004.03.006.054.002.024.004.048.004.072 0 .024-.004.046-.012.066-.008.02-.02.034-.036.042-.016.008-.034.01-.054.006-.02-.004-.036-.012-.048-.024-.012-.012-.022-.028-.03-.048-.008-.02-.012-.042-.012-.066 0-.024.004-.046.012-.066.008-.02.02-.034.036-.042.016-.008.034-.01.054-.006.02.004.036.012.048.024.012.012.022.028.03.048.008.02.012.042.012.066zM12 2C6.477 2 2 6.477 2 12c0 5.523 4.477 10 10 10s10-4.477 10-10c0-5.523-4.477-10-10-10z"/></svg>
                </a>
              </div>
            </div>

            {/* Product */}
            <div>
              <h4 className="text-white font-semibold text-sm mb-4">Product</h4>
              <ul className="space-y-2.5 text-sm">
                <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Support</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Changelog</a></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-white font-semibold text-sm mb-4">Company</h4>
              <ul className="space-y-2.5 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="text-white font-semibold text-sm mb-4">Legal</h4>
              <ul className="space-y-2.5 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Security</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Cookies</a></li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8 text-sm">
            <p>© 2026 NexaPay. All rights reserved.</p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
              <a href="#" className="hover:text-white transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
