import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ShieldCheck, Zap, TrendingUp, Globe, Award, ArrowRight, CheckCircle, BarChart2, Target, RefreshCw, Edit3, Gauge, Eye, Activity } from 'lucide-react'

const TRUST_BADGES = [
  { icon: Zap, label: 'Powered by Next-Gen Technology', desc: 'Institutional-grade trading infrastructure' },
  { icon: Activity, label: 'Ultra-Fast Execution', desc: 'Optimized low-latency environment' },
  { icon: TrendingUp, label: 'Transparent Pricing', desc: 'Competitive spreads across all instruments' },
  { icon: Award, label: 'Professional Trading Tools', desc: 'Advanced charting & risk management features' },
]

const TRADING_INSTRUMENTS = [
  { 
    icon: '💱',
    image: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=400&h=300&fit=crop',
    title: 'Forex', 
    desc: 'Trade major, minor, and select exotic currency pairs with competitive spreads and fast execution.',
    buttonText: 'Trade Forex',
    link: '/markets'
  },
  { 
    icon: '🥇',
    image: 'https://images.unsplash.com/photo-1610375461246-83df859d849d?w=400&h=300&fit=crop',
    title: 'Spot Metals', 
    desc: 'Speculate on gold and silver CFDs with transparent pricing and institutional-grade liquidity.',
    buttonText: 'Trade Metals',
    link: '/markets'
  },
  { 
    icon: '⚡',
    image: 'https://images.unsplash.com/photo-1578403881967-084f9885be74?w=400&h=300&fit=crop',
    title: 'Energies', 
    desc: 'Trade crude oil and other energy derivatives with reliable execution and real-time pricing.',
    buttonText: 'Trade Energies',
    link: '/markets'
  },
  { 
    icon: '📈',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=300&fit=crop',
    title: 'Indices', 
    desc: 'Access leading global indices and diversify your trading strategy across international markets.',
    buttonText: 'Trade Indices',
    link: '/markets'
  },
]

const ACCOUNT_TYPES = [
  {
    name: 'Classic Account',
    minDeposit: '$100',
    leverage: '1:1000',
    spreads: 'From 1.5 pips',
    commission: 'No Commission',
    minLot: '0.01',
    swapFree: 'Not Swap Free',
    markets: '7',
    maxPositions: '200',
    marginCall: '100%',
    execution: 'Market Execution',
    platforms: ['MetaTrader5', 'Mobile Application'],
    depositFees: '0',
    popular: false,
    description: 'Perfect for beginners with competitive spreads and no commission fees.'
  },
  {
    name: 'Standard Account',
    minDeposit: '$500',
    leverage: '1:1000',
    spreads: 'From 2.0 pips',
    commission: 'No Commission',
    minLot: '0.01',
    swapFree: 'Not Swap Free',
    markets: '7',
    maxPositions: '300',
    marginCall: '100%',
    execution: 'Market Execution',
    platforms: ['MetaTrader5', 'Mobile Application'],
    depositFees: '0',
    popular: true,
    description: 'Ideal for all traders with competitive spreads and no commission.'
  },
  {
    name: 'Premium Account',
    minDeposit: '$2,000',
    leverage: '1:1000',
    spreads: 'From 1.0 pips',
    commission: 'No Commission',
    minLot: '0.01',
    swapFree: 'Not Swap Free',
    markets: '7',
    maxPositions: '300',
    marginCall: '100%',
    execution: 'Market Execution',
    platforms: ['MetaTrader5', 'Mobile Application'],
    depositFees: '0',
    popular: false,
    description: 'Advanced trading with tighter spreads and premium support.'
  },
  {
    name: 'ECN Account',
    minDeposit: '$5,000',
    leverage: '1:1000',
    spreads: 'From 0.0 pips',
    commission: 'Available',
    minLot: '0.1',
    swapFree: 'Not Swap Free',
    markets: '7',
    maxPositions: '200',
    marginCall: '100%',
    execution: 'Market Execution',
    platforms: ['MetaTrader5', 'Mobile Application'],
    depositFees: '0',
    popular: false,
    description: 'Trade with raw spreads and ultra-fast ECN execution for professional-level pricing.'
  },
  {
    name: 'Islamic Account',
    minDeposit: '$10,000',
    leverage: '1:500',
    spreads: 'From 2.5 pips',
    commission: 'No Commission',
    minLot: '1',
    swapFree: 'Islamic Swap Free',
    markets: '7',
    maxPositions: '300',
    marginCall: '100%',
    execution: 'Market Execution',
    platforms: ['MetaTrader5', 'Mobile Application'],
    depositFees: '0',
    popular: false,
    description: 'Trade without overnight swap fees, designed for experienced traders.'
  },
]

const SERVICES_TOOLS = [
  {
    icon: Target,
    emoji: '🎯',
    title: 'Multi-Level Stop Loss & Take Profit',
    desc: 'Set multiple take-profit targets and manage risk with advanced stop-loss configurations. Scale out of positions strategically and lock in profits with professional order control tools.'
  },
  {
    icon: RefreshCw,
    emoji: '🔁',
    title: 'Bulk Close Positions',
    desc: 'Instantly close multiple trades at once — by symbol, direction, or entire portfolio. Designed for fast risk management during volatile market conditions.'
  },
  {
    icon: Edit3,
    emoji: '✏️',
    title: 'Bulk Edit & Mass Modification',
    desc: 'Modify stop-loss, take-profit, or trade parameters across multiple positions simultaneously. Save time and maintain consistent risk settings across your portfolio.'
  },
  {
    icon: Zap,
    emoji: '⚡',
    title: 'Advanced Order Management',
    desc: 'Access professional trading tools including one-click execution, partial close, multi-target exits, and real-time trade adjustments directly from the order panel.'
  },
  {
    icon: Eye,
    emoji: '👁️',
    title: 'Real-Time Exposure Monitoring',
    desc: 'Monitor your open positions, symbol exposure, and account risk levels in real time. Make informed decisions with complete portfolio transparency.'
  },
  {
    icon: Gauge,
    emoji: '⚙️',
    title: 'High-Performance Execution',
    desc: 'Low-latency infrastructure optimized for rapid order processing and reliable trade execution across all market conditions.'
  },
]

const PROMOTIONS = [
  {
    emoji: '🎁',
    title: 'Welcome Trading Credit - 30% Bonus',
    desc: 'Get 30% bonus on every deposit directly to your trading account.',
    features: ['30% bonus on all deposits', 'Not withdrawable - can be lost in trading', 'Instant credit on deposit', 'Boost your trading capital']
  },
  {
    emoji: '💰',
    title: 'Deposit Reward Program',
    desc: 'Earn $100 trading bonus for every $2,000 deposit.',
    features: ['$100 bonus per $2,000 deposit', 'Automatic bonus credit', 'Multiple deposits eligible', 'Use bonus for trading']
  },
  {
    emoji: '🏆',
    title: 'Loyalty & VIP Rewards',
    desc: 'Trade actively and earn $500 bonus for every 500 lots traded.',
    features: ['$500 per 500 lots traded', 'Automatic loyalty tracking', 'No maximum limit', 'Dedicated VIP support']
  },
]


export default function Home() {
  useEffect(() => {
    // Inject Tawk.to chat script
    if (typeof window === 'undefined') return
    window.Tawk_API = window.Tawk_API || {}
    window.Tawk_LoadStart = new Date()
    const s1 = document.createElement('script')
    s1.type = 'text/javascript'
    s1.async = true
    s1.src = 'https://embed.tawk.to/69a81686eb951d1c3453ded3/1jis9fvq7'
    s1.charset = 'UTF-8'
    s1.setAttribute('crossorigin', '*')
    document.body.appendChild(s1)
    return () => {
      try { document.body.removeChild(s1) } catch (e) { /* ignore */ }
    }
  }, [])
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gold-50 via-yellow-50 to-amber-50 overflow-hidden border-b-4 border-gold-200">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1920&h=1080&fit=crop)', backgroundSize: 'cover'}} />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 py-20 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <h1 className="text-5xl lg:text-6xl font-black leading-tight mb-6 text-gray-800">
                Next-Generation Trading <span className="text-gold-600">Starts Here</span>
              </h1>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Experience lightning-fast execution, advanced charting tools, and seamless multi-device access — powered by cutting-edge brokerage technology.
              </p>
              <div className="flex flex-wrap gap-4 mb-12">
                <a href="https://portal.fexness.com/signup" className="bg-gradient-to-r from-gold-500 to-gold-600 text-white font-bold px-10 py-4 rounded-xl hover:from-gold-600 hover:to-gold-700 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 flex items-center gap-2 text-lg">
                  Open Live Account <ArrowRight className="w-5 h-5" />
                </a>
                <a href="https://portal.fexness.com/signup" className="border-2 border-gold-600 text-gold-600 font-bold px-10 py-4 rounded-xl hover:bg-gold-50 transition-all text-lg">
                  Try Free Demo
                </a>
              </div>
            </div>

            {/* Right Hero Image */}
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-gold-200">
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop" 
                  alt="Trading Platform Dashboard" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>

          {/* Trust Badges - Below Hero */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            {TRUST_BADGES.map((badge, i) => {
              const Icon = badge.icon
              return (
                <div key={i} className="bg-white rounded-2xl p-6 shadow-lg border-2 border-gold-200 hover:border-gold-400 hover:shadow-xl transition-all hover:-translate-y-1">
                  <div className="inline-flex p-3 rounded-xl bg-gold-100 mb-3">
                    <Icon className="w-7 h-7 text-gold-600" />
                  </div>
                  <div className="font-bold text-base text-gray-800 mb-1">{badge.label}</div>
                  <div className="text-sm text-gray-600">{badge.desc}</div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Trading Instruments */}
      <section className="bg-white py-16 border-t-4 border-gold-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-gray-800 mb-4">Multi-Asset Trading Opportunities</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Access a diversified range of global financial markets through a single, powerful trading platform.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {TRADING_INSTRUMENTS.map((instrument, i) => (
              <div key={i} className="bg-white rounded-2xl overflow-hidden border-2 border-gold-200 hover:border-gold-400 hover:shadow-xl transition-all hover:-translate-y-2">
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={instrument.image} 
                    alt={instrument.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span className="text-4xl">{instrument.icon}</span>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-black text-gray-800 mb-3">{instrument.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">{instrument.desc}</p>
                  <Link to={instrument.link} className="inline-flex items-center gap-2 text-gold-600 font-bold hover:gap-3 transition-all">
                    {instrument.buttonText} <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Account Types */}
      <section className="bg-gradient-to-br from-gold-50 via-yellow-50 to-amber-50 py-16 border-y-4 border-gold-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-gray-800 mb-4">Choose the Account That Fits Your Strategy</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              We offer 5 flexible account types designed for traders of all experience levels.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ACCOUNT_TYPES.map((account, i) => (
              <div key={i} className={`rounded-2xl p-6 transition-all hover:-translate-y-2 ${
                account.popular 
                  ? 'bg-gradient-to-br from-gold-500 to-gold-600 text-white shadow-2xl relative border-4 border-gold-400' 
                  : 'bg-white border-2 border-gold-200 hover:border-gold-400 hover:shadow-xl'
              }`}>
                {account.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-yellow-400 text-yellow-900 text-xs font-black px-4 py-1 rounded-full shadow-md">
                    ⭐ MOST POPULAR
                  </div>
                )}
                
                <div className="text-center mb-6 pt-2">
                  <h3 className={`text-2xl font-black mb-2 ${account.popular ? 'text-white' : 'text-gray-800'}`}>
                    {account.name}
                  </h3>
                  <p className={`text-sm mb-4 ${account.popular ? 'text-gold-100' : 'text-gray-600'}`}>
                    {account.description}
                  </p>
                </div>

                <div className="space-y-3 mb-6">
                  <div className={`flex justify-between items-center pb-2 border-b ${account.popular ? 'border-gold-400' : 'border-gray-200'}`}>
                    <span className={`text-sm font-semibold ${account.popular ? 'text-gold-100' : 'text-gray-600'}`}>Spreads</span>
                    <span className={`text-sm font-bold ${account.popular ? 'text-white' : 'text-gray-800'}`}>{account.spreads}</span>
                  </div>
                  
                  <div className={`flex justify-between items-center pb-2 border-b ${account.popular ? 'border-gold-400' : 'border-gray-200'}`}>
                    <span className={`text-sm font-semibold ${account.popular ? 'text-gold-100' : 'text-gray-600'}`}>Commission</span>
                    <span className={`text-sm font-bold ${account.popular ? 'text-white' : 'text-gray-800'}`}>{account.commission}</span>
                  </div>
                  
                  <div className={`flex justify-between items-center pb-2 border-b ${account.popular ? 'border-gold-400' : 'border-gray-200'}`}>
                    <span className={`text-sm font-semibold ${account.popular ? 'text-gold-100' : 'text-gray-600'}`}>Min Deposit</span>
                    <span className={`text-sm font-bold ${account.popular ? 'text-white' : 'text-gold-600'}`}>{account.minDeposit}</span>
                  </div>
                  
                  <div className={`flex justify-between items-center pb-2 border-b ${account.popular ? 'border-gold-400' : 'border-gray-200'}`}>
                    <span className={`text-sm font-semibold ${account.popular ? 'text-gold-100' : 'text-gray-600'}`}>Min Lot Size</span>
                    <span className={`text-sm font-bold ${account.popular ? 'text-white' : 'text-gray-800'}`}>{account.minLot}</span>
                  </div>
                  
                  <div className={`flex justify-between items-center pb-2 border-b ${account.popular ? 'border-gold-400' : 'border-gray-200'}`}>
                    <span className={`text-sm font-semibold ${account.popular ? 'text-gold-100' : 'text-gray-600'}`}>Max Leverage</span>
                    <span className={`text-sm font-bold ${account.popular ? 'text-white' : 'text-gray-800'}`}>{account.leverage}</span>
                  </div>
                  
                  <div className={`flex justify-between items-center pb-2 border-b ${account.popular ? 'border-gold-400' : 'border-gray-200'}`}>
                    <span className={`text-sm font-semibold ${account.popular ? 'text-gold-100' : 'text-gray-600'}`}>Deposit Fees</span>
                    <span className={`text-sm font-bold ${account.popular ? 'text-white' : 'text-gray-800'}`}>{account.depositFees}</span>
                  </div>
                  
                  <div className={`flex justify-between items-center pb-2 border-b ${account.popular ? 'border-gold-400' : 'border-gray-200'}`}>
                    <span className={`text-sm font-semibold ${account.popular ? 'text-gold-100' : 'text-gray-600'}`}>Swap Status</span>
                    <span className={`text-sm font-bold ${account.popular ? 'text-white' : 'text-gray-800'}`}>{account.swapFree}</span>
                  </div>
                  
                  <div className={`flex justify-between items-center pb-2 border-b ${account.popular ? 'border-gold-400' : 'border-gray-200'}`}>
                    <span className={`text-sm font-semibold ${account.popular ? 'text-gold-100' : 'text-gray-600'}`}>Markets</span>
                    <span className={`text-sm font-bold ${account.popular ? 'text-white' : 'text-gray-800'}`}>{account.markets}</span>
                  </div>
                  
                  <div className={`flex justify-between items-center pb-2 border-b ${account.popular ? 'border-gold-400' : 'border-gray-200'}`}>
                    <span className={`text-sm font-semibold ${account.popular ? 'text-gold-100' : 'text-gray-600'}`}>Max Positions</span>
                    <span className={`text-sm font-bold ${account.popular ? 'text-white' : 'text-gray-800'}`}>{account.maxPositions}</span>
                  </div>
                  
                  <div className={`flex justify-between items-center pb-2 border-b ${account.popular ? 'border-gold-400' : 'border-gray-200'}`}>
                    <span className={`text-sm font-semibold ${account.popular ? 'text-gold-100' : 'text-gray-600'}`}>Margin Call</span>
                    <span className={`text-sm font-bold ${account.popular ? 'text-white' : 'text-gray-800'}`}>{account.marginCall}</span>
                  </div>
                  
                  <div className={`flex justify-between items-center pb-2 border-b ${account.popular ? 'border-gold-400' : 'border-gray-200'}`}>
                    <span className={`text-sm font-semibold ${account.popular ? 'text-gold-100' : 'text-gray-600'}`}>Execution</span>
                    <span className={`text-sm font-bold ${account.popular ? 'text-white' : 'text-gray-800'}`}>{account.execution}</span>
                  </div>
                  
                  <div className={`pt-2`}>
                    <span className={`text-sm font-semibold block mb-2 ${account.popular ? 'text-gold-100' : 'text-gray-600'}`}>Platforms:</span>
                    <div className="flex flex-wrap gap-2">
                      {account.platforms.map((platform, idx) => (
                        <span key={idx} className={`text-xs px-2 py-1 rounded-full font-semibold ${
                          account.popular 
                            ? 'bg-white text-gold-600' 
                            : 'bg-gold-100 text-gold-700'
                        }`}>
                          {platform}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <a href="https://portal.fexness.com/signup" className={`block text-center py-3 rounded-xl font-bold transition-all ${
                  account.popular 
                    ? 'bg-white text-gold-600 hover:bg-gray-100 shadow-lg' 
                    : 'bg-gold-600 text-white hover:bg-gold-700'
                }`}>
                  Open Account →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services & Tools */}
      <section className="bg-white py-16 border-t-4 border-gold-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-gray-800 mb-4">Advanced Trading Technology Built for Professionals</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Our platform is powered by next-generation multi-account infrastructure designed for speed, flexibility, and precision control.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES_TOOLS.map((tool, i) => (
              <div key={i} className="bg-gold-50 rounded-2xl p-6 border-2 border-gold-200 hover:border-gold-400 hover:shadow-xl transition-all hover:-translate-y-2">
                <div className="mb-4">
                  <div className="text-4xl mb-3">{tool.emoji}</div>
                  <h3 className="text-lg font-black text-gray-800">{tool.title}</h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{tool.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Promotions */}
      <section className="relative bg-gradient-to-br from-gold-50 via-yellow-50 to-amber-50 py-16 overflow-hidden border-y-4 border-gold-200">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?w=1920&h=600&fit=crop)', backgroundSize: 'cover'}} />
        </div>
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-gray-800 mb-4">Trading Promotions</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto mb-8">
              Enhance your trading experience with our exclusive promotional offers designed to provide additional trading flexibility. Explore our latest incentives and reward programs tailored for both new and active traders.
            </p>
            <Link to="/promotions" className="inline-flex items-center gap-2 bg-gradient-to-r from-gold-500 to-gold-600 text-white font-bold px-10 py-4 rounded-xl hover:from-gold-600 hover:to-gold-700 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 text-lg">
              View All Promotions <ArrowRight className="w-6 h-6" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {PROMOTIONS.map((promo, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 shadow-lg border-2 border-gold-200 hover:border-gold-400 hover:shadow-xl transition-all hover:-translate-y-2">
                <div className="text-center mb-6">
                  <div className="text-5xl mb-4">{promo.emoji}</div>
                  <h3 className="font-black text-xl text-gray-800 mb-3">{promo.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{promo.desc}</p>
                </div>
                <div className="space-y-2">
                  {promo.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-left">
                      <span className="text-gold-600 font-bold">•</span>
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-gradient-to-br from-orange-50 via-white to-yellow-50 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-gold-400 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-300 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-block mb-4">
                <span className="px-6 py-2 bg-gradient-to-r from-gold-400 to-orange-400 text-white rounded-full text-sm font-bold shadow-lg">
                  🌟 About Fexness
                </span>
              </div>
              <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-gold-600 to-gray-900 bg-clip-text text-transparent">
                Our Story
              </h2>
              <div className="w-32 h-1.5 bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto rounded-full"></div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {/* Stat 1 */}
              <div className="group text-center p-8 bg-white rounded-3xl border-2 border-gold-200 hover:border-gold-500 transition-all duration-300 hover:scale-105 hover:shadow-2xl shadow-lg">
                <div className="text-5xl font-black bg-gradient-to-br from-gold-500 to-orange-500 bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform">175+</div>
                <div className="text-gray-700 font-semibold">Countries Served</div>
              </div>
              {/* Stat 2 */}
              <div className="group text-center p-8 bg-white rounded-3xl border-2 border-gold-200 hover:border-gold-500 transition-all duration-300 hover:scale-105 hover:shadow-2xl shadow-lg">
                <div className="text-5xl font-black bg-gradient-to-br from-gold-500 to-orange-500 bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform">100+</div>
                <div className="text-gray-700 font-semibold">Trading Instruments</div>
              </div>
              {/* Stat 3 */}
              <div className="group text-center p-8 bg-white rounded-3xl border-2 border-gold-200 hover:border-gold-500 transition-all duration-300 hover:scale-105 hover:shadow-2xl shadow-lg">
                <div className="text-5xl font-black bg-gradient-to-br from-gold-500 to-orange-500 bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform">24/7</div>
                <div className="text-gray-700 font-semibold">Customer Support</div>
              </div>
            </div>
            
            <div className="space-y-6 leading-relaxed">
              <div className="bg-white rounded-3xl p-8 border-2 border-gold-200 hover:border-gold-500 transition-all duration-300 hover:shadow-2xl shadow-lg">
                <p className="text-lg md:text-xl text-gray-800 leading-relaxed">
                  Founded with a vision to <span className="text-gold-600 font-bold">democratize forex trading</span>, Fexness emerged from a simple belief: every trader deserves access to professional-grade tools, transparent pricing, and exceptional support.
                </p>
              </div>
              
              <div className="bg-white rounded-3xl p-8 border-2 border-gold-200 hover:border-gold-500 transition-all duration-300 hover:shadow-2xl shadow-lg">
                <p className="text-lg text-gray-700 leading-relaxed">
                  What started as a mission to provide zero-spread trading has evolved into a <span className="text-gold-600 font-bold">comprehensive trading ecosystem</span>. Today, we serve traders across 175 countries, offering access to 100+ instruments with lightning-fast execution and industry-leading technology.
                </p>
              </div>
              
              <div className="bg-white rounded-3xl p-8 border-2 border-gold-200 hover:border-gold-500 transition-all duration-300 hover:shadow-2xl shadow-lg">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Our journey is driven by <span className="text-gold-600 font-bold">innovation, integrity, and an unwavering commitment</span> to our traders' success. Fexness don't just facilitate trades—we empower traders to reach their full potential.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Fexness */}
      <section className="py-20 bg-gradient-to-b from-white via-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block mb-4 animate-bounce">
              <span className="px-4 py-2 bg-gold-500 text-white rounded-full text-sm font-semibold shadow-lg">
                ⭐ Why Fexness?
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Choose <span className="text-gold-600">Fexness</span>?
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Choosing the right broker is one of the most important decisions for any trader. Here's why many traders worldwide choose Fexness:
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Reason 1 */}
            <div className="group bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 hover:border-gold-500 hover:-translate-y-2">
              <div className="flex flex-col items-center text-center gap-4">
                <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-gold-400 to-gold-600 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-gold-600 transition-colors">Strong Regulation & Transparency</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Fexness operates under regulatory licenses across different jurisdictions, ensuring compliance, client protection, and transparent business practices.
                  </p>
                </div>
              </div>
            </div>

            {/* Reason 2 */}
            <div className="group bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 hover:border-gold-500 hover:-translate-y-2">
              <div className="flex flex-col items-center text-center gap-4">
                <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-gold-400 to-gold-600 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-gold-600 transition-colors">Fast & Reliable Deposits & Withdrawals</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Fexness is known for fast deposit & withdrawal processing, with many kinds of payment methods offering instant or near-instant transactions, subject to payment provider conditions.
                  </p>
                </div>
              </div>
            </div>

            {/* Reason 3 */}
            <div className="group bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 hover:border-gold-500 hover:-translate-y-2">
              <div className="flex flex-col items-center text-center gap-4">
                <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-gold-400 to-gold-600 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-gold-600 transition-colors">Competitive Trading Conditions</h3>
                  <ul className="text-gray-600 space-y-2 text-left inline-block">
                    <li className="flex items-center gap-2 hover:text-gold-600 transition-colors">
                      <span className="text-gold-500 text-lg">✓</span> Tight spreads
                    </li>
                    <li className="flex items-center gap-2 hover:text-gold-600 transition-colors">
                      <span className="text-gold-500 text-lg">✓</span> Flexible leverage options
                    </li>
                    <li className="flex items-center gap-2 hover:text-gold-600 transition-colors">
                      <span className="text-gold-500 text-lg">✓</span> Low minimum deposits
                    </li>
                    <li className="flex items-center gap-2 hover:text-gold-600 transition-colors">
                      <span className="text-gold-500 text-lg">✓</span> Multiple account types
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Reason 4 */}
            <div className="group bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 hover:border-gold-500 hover:-translate-y-2">
              <div className="flex flex-col items-center text-center gap-4">
                <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-gold-400 to-gold-600 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-gold-600 transition-colors">Advanced Trading Platforms</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Trade on industry-leading platforms. These platforms offer powerful charting tools, automated trading (EAs), and real-time market execution.
                  </p>
                </div>
              </div>
            </div>

            {/* Reason 5 */}
            <div className="group bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 hover:border-gold-500 hover:-translate-y-2">
              <div className="flex flex-col items-center text-center gap-4">
                <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-gold-400 to-gold-600 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                  5
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-gold-600 transition-colors">Wide Range of Instruments</h3>
                  <p className="text-gray-600 mb-3 leading-relaxed">Access a broad selection of markets including:</p>
                  <ul className="text-gray-600 space-y-1 text-sm text-left inline-block">
                    <li className="flex items-center gap-2 hover:text-gold-600 transition-colors">
                      <span className="text-gold-500 text-lg">•</span> Forex currency pairs
                    </li>
                    <li className="flex items-center gap-2 hover:text-gold-600 transition-colors">
                      <span className="text-gold-500 text-lg">•</span> Commodities
                    </li>
                    <li className="flex items-center gap-2 hover:text-gold-600 transition-colors">
                      <span className="text-gold-500 text-lg">•</span> Indices
                    </li>
                    <li className="flex items-center gap-2 hover:text-gold-600 transition-colors">
                      <span className="text-gold-500 text-lg">•</span> Stocks
                    </li>
                    <li className="flex items-center gap-2 hover:text-gold-600 transition-colors">
                      <span className="text-gold-500 text-lg">•</span> Cryptocurrencies
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Reason 6 */}
            <div className="group bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 hover:border-gold-500 hover:-translate-y-2">
              <div className="flex flex-col items-center text-center gap-4">
                <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-gold-400 to-gold-600 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                  6
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-gold-600 transition-colors">Transparent Pricing</h3>
                  <p className="text-gray-600 leading-relaxed">
                    No hidden fees, clear swap policies, and detailed contract specifications available to clients.
                  </p>
                </div>
              </div>
            </div>

            {/* Reason 7 */}
            <div className="group bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 hover:border-gold-500 hover:-translate-y-2">
              <div className="flex flex-col items-center text-center gap-4">
                <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-gold-400 to-gold-600 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                  7
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-gold-600 transition-colors">24/7 Customer Support</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Multilingual support is available to assist traders across different time zones.
                  </p>
                </div>
              </div>
            </div>

            {/* Reason 8 */}
            <div className="group bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 hover:border-gold-500 hover:-translate-y-2">
              <div className="flex flex-col items-center text-center gap-4">
                <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-gold-400 to-gold-600 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                  8
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-gold-600 transition-colors">Suitable for All Trader Levels</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Whether you are a beginner or an experienced professional, Fexness offers account types and tools designed to meet various trading strategies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Risk Disclosure & Legal Information */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Important Information & Disclosures
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Please read the following carefully before trading with Fexness Limited
            </p>
          </div>

          {/* Risk Warning - Prominent Card */}
          <div className="bg-gradient-to-br from-yellow-50 to-orange-50 border-2 border-yellow-400 rounded-3xl p-8 mb-8 shadow-lg">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center text-2xl">
                ⚠️
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Risk Warning</h3>
                <div className="text-gray-700 leading-relaxed space-y-3">
                  <p>
                    An investment in derivatives may mean investors may lose an amount even greater than their original investment. Anyone wishing to invest in any of the products mentioned in Fexness should seek their own financial or professional advice. Trading of securities, Forex, stock market, commodities, options and futures may not be suitable for everyone and involves the risk of losing part or all of your money.
                  </p>
                  <p>
                    Trading in the financial markets has large potential rewards, but also large potential risk. You must be aware of the risks and be willing to accept them in order to invest in the markets. Don't invest and trade with money which you can't afford to lose. Forex Trading are not allowed in some countries, before investing your money, make sure whether your country is allowing this or not.
                  </p>
                  <p>
                    You are strongly advised to obtain independent financial, legal and tax advice before proceeding with any currency or spot metals trade. Nothing in this site should be read or construed as constituting advice on the part of Fexness Limited or any of its affiliates, directors, officers or employees.
                  </p>
                  <div className="bg-yellow-100 border-l-4 border-yellow-600 p-4 rounded mt-4">
                    <p className="font-semibold text-gray-900">
                      <strong>Restricted Regions:</strong> Fexness Limited does not provide services for citizens/residents of USA, Venezuela, Ukraine, Iran, Cuba, Myanmar, North Korea, Sudan. The services of Fexness Limited are not intended for distribution to, or use by, any person in any country or jurisdiction where such distribution or use would be contrary to local law or regulation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Company Info & Policies Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Company Registration Card */}
            <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gold-500 rounded-full flex items-center justify-center text-white text-xl">
                  🏢
                </div>
                <h3 className="text-xl font-bold text-gray-900">Company Registration</h3>
              </div>
              <div className="text-gray-700 leading-relaxed space-y-3">
                <p>
                  <strong className="text-gray-900">Fexness Limited</strong> is Registered in ANGUILLA Registry of (ARCA).
                </p>
                <div className="bg-gray-50 rounded-lg p-4 space-y-2">
                  <p className="flex items-center gap-2">
                    <span className="font-semibold text-gray-900">Registration No:</span>
                    <span className="text-gold-600 font-bold">A000000352</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="font-semibold text-gray-900 flex-shrink-0">Address:</span>
                    <span>Anguilla, No. 5 Alloyd Building, Crocus Hill, AI-2640</span>
                  </p>
                </div>
                <p className="text-sm">
                  The objects of the Company are all subject matters not forbidden by International Business Companies (Amendment and Consolidation) Act, of the Laws of Anguilla, in particular but not exclusively all commercial, financial, lending, borrowing, trading, service activities and the participation in other enterprises as well as to provide brokerage, training and managed account services in currencies, commodities, indexes, CFDs and leveraged financial instruments.
                </p>
              </div>
            </div>

            {/* Important Policies Card */}
            <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gold-500 rounded-full flex items-center justify-center text-white text-xl">
                  📋
                </div>
                <h3 className="text-xl font-bold text-gray-900">Important Policy Updates</h3>
              </div>
              <div className="text-gray-700 leading-relaxed space-y-4">
                <div className="border-l-4 border-gold-500 pl-4">
                  <p className="font-bold text-gray-900 mb-2">Trading Policy:</p>
                  <p className="text-sm">
                    At Fexness, we allow High-Frequency Trading (HFT), arbitrage, or scalping with a duration of less than 180 seconds. However, we do permit scalping trades that last longer than 180 seconds and so, provided the client holds the position. Low spreads and zero commission depends on the product and account type. We provide an execution-only service. We do not provide investment advice or management services.
                  </p>
                </div>
                <div className="border-l-4 border-gold-500 pl-4">
                  <p className="font-bold text-gray-900 mb-2">KYC Policy:</p>
                  <p className="text-sm">
                    Users are allowed only one account per KYC. Creating multiple accounts under the same KYC is strictly prohibited. Please comply to avoid any issues!!
                  </p>
                </div>
                <div className="border-l-4 border-red-500 pl-4">
                  <p className="font-bold text-gray-900 mb-2">⚠️ Fraud Warning:</p>
                  <p className="text-sm">
                    It has come our attention that fraudulent websites are impersonating our brand using fake or lookalike domains. Please note that we do not promote any get rich quick schemes. Our official website is <strong className="text-gold-600">fexness.com</strong>. Stay vigilant & verify website URLs before engaging with any platform.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
