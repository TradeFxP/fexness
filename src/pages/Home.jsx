import React from 'react'
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
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=300&fit=crop',
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
    image: 'https://images.unsplash.com/photo-1545259742-24c4e6762850?w=400&h=300&fit=crop',
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
    leverage: 'Up to 1:300',
    features: ['Competitive spreads', 'No commission'],
    buttonText: 'Open Classic Account',
    popular: false
  },
  {
    name: 'Premium Account',
    minDeposit: '$1,000',
    leverage: 'Up to 1:300',
    features: ['Tighter spreads', 'Priority client support'],
    buttonText: 'Open Premium Account',
    popular: true
  },
  {
    name: 'ECN Account',
    minDeposit: '$3,000',
    leverage: 'Up to 1:100',
    features: ['Raw spreads from 0.0 pips', 'Commission: $7 per lot'],
    buttonText: 'Open ECN Account',
    popular: false
  },
  {
    name: 'Islamic Account (Swap-Free)',
    minDeposit: '$100',
    leverage: 'Up to 1:300',
    features: ['No overnight swap charges', 'Transparent administrative fees may apply'],
    buttonText: 'Open Islamic Account',
    popular: false
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
    title: 'Welcome Trading Credit',
    desc: 'Receive a trading credit on your first deposit to increase your initial trading capacity.',
    features: ['Available on qualifying deposits', 'Subject to trading volume requirements', 'Terms & Conditions apply']
  },
  {
    emoji: '💰',
    title: 'Deposit Reward Program',
    desc: 'Boost your trading margin with periodic deposit-based trading incentives.',
    features: ['Flexible participation', 'Transparent conditions', 'Designed to support active traders']
  },
  {
    emoji: '🏆',
    title: 'Loyalty & VIP Rewards',
    desc: 'Our loyalty program recognizes active traders with exclusive benefits and personalized trading conditions.',
    features: ['Dedicated account support', 'Customized trading conditions', 'Special promotional access']
  },
]


export default function Home() {
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
                <Link to="/register" className="bg-gradient-to-r from-gold-500 to-gold-600 text-white font-bold px-10 py-4 rounded-xl hover:from-gold-600 hover:to-gold-700 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 flex items-center gap-2 text-lg">
                  Open Live Account <ArrowRight className="w-5 h-5" />
                </Link>
                <Link to="/demo" className="border-2 border-gold-600 text-gold-600 font-bold px-10 py-4 rounded-xl hover:bg-gold-50 transition-all text-lg">
                  Try Free Demo
                </Link>
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
              We offer flexible account types designed for traders of all experience levels.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ACCOUNT_TYPES.map((account, i) => (
              <div key={i} className={`rounded-2xl p-8 transition-all hover:-translate-y-2 ${
                account.popular 
                  ? 'bg-gradient-to-br from-gold-500 to-gold-600 text-white shadow-2xl relative' 
                  : 'bg-white border-2 border-gold-200 hover:border-gold-400 hover:shadow-xl'
              }`}>
                {account.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-yellow-400 text-yellow-900 text-xs font-black px-4 py-1 rounded-full shadow-md">
                    ⭐ POPULAR
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className={`text-xl font-black mb-3 ${account.popular ? 'text-white' : 'text-gray-800'}`}>
                    {account.name}
                  </h3>
                  <div className={`text-sm font-semibold mb-3 ${account.popular ? 'text-gold-100' : 'text-gray-600'}`}>
                    Minimum Deposit:
                  </div>
                  <div className={`text-4xl font-black mb-3 ${account.popular ? 'text-white' : 'text-gold-600'}`}>
                    {account.minDeposit}
                  </div>
                  <div className={`text-sm font-semibold ${account.popular ? 'text-gold-100' : 'text-gray-600'}`}>
                    Leverage: <span className={`font-bold ${account.popular ? 'text-white' : 'text-gray-800'}`}>{account.leverage}</span>
                  </div>
                </div>

                <div className="space-y-2 mb-8">
                  {account.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <CheckCircle className={`w-4 h-4 flex-shrink-0 mt-0.5 ${account.popular ? 'text-gold-200' : 'text-gold-600'}`} />
                      <span className={`text-sm ${account.popular ? 'text-white' : 'text-gray-700'}`}>{feature}</span>
                    </div>
                  ))}
                </div>

                <Link to="/register" className={`block text-center py-3 rounded-xl font-bold transition-all ${
                  account.popular 
                    ? 'bg-white text-gold-600 hover:bg-gray-100' 
                    : 'bg-gold-600 text-white hover:bg-gold-700'
                }`}>
                  {account.buttonText}
                </Link>
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
    </div>
  )
}

