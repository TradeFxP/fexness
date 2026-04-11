import React from 'react'
import { CheckCircle, Star, Zap, Award, TrendingUp, ShieldCheck } from 'lucide-react'
import PageHero from '../components/PageHero'
import Section from '../components/Section'
import useScrollReveal from '../hooks/useScrollReveal'

const ACCOUNTS = [
  {
    name: 'Classic',
    tagline: 'Start Small, Trade Big',
    badge: 'Perfect for Beginners',
    icon: Zap,
    highlight: false,
    color: 'blue',
    deposit: '$10',
    leverage: '1:300',
    spreads: 'From 0.2 pips',
    commission: 'No Commission',
    minLot: '0.01',
    swapFree: 'Not Swap Free',
    perks: ['Ultra-tight spreads from 0.2 pips', 'No commission fees', 'MetaTrader5 platform', '24/7 Support'],
    image: 'https://picsum.photos/seed/classic/400/250',
    description: 'Perfect for beginners with ultra-tight spreads starting from 0.2 pips and no commission fees.'
  },
  {
    name: 'Standard',
    tagline: 'Most Popular Choice',
    badge: 'Most Popular',
    icon: Award,
    highlight: true,
    color: 'teal',
    deposit: '$100',
    leverage: '1:1000',
    spreads: 'From 0.16 pips',
    commission: '$3.5 per lot',
    minLot: '0.01',
    swapFree: 'Not Swap Free',
    perks: ['Competitive spreads from 0.16 pips', '1:1000 leverage', '$3.5 commission per lot', 'Ideal for all traders'],
    image: 'https://picsum.photos/seed/premium/400/250',
    description: 'Ideal for all traders with competitive spreads from 0.16 pips and commission of $3.5 per lot.'
  },
  {
    name: 'Islamic',
    tagline: 'Sharia Compliant',
    badge: 'Swap-Free Trading',
    icon: ShieldCheck,
    highlight: false,
    color: 'green',
    deposit: '$50',
    leverage: '1:500',
    spreads: 'From 0.16 pips',
    commission: 'No Commission',
    minLot: '0.01',
    swapFree: 'Islamic Swap Free',
    perks: ['No swap charges', 'Spreads from 0.16 pips', 'Halal certified', 'Sharia compliant trading'],
    image: 'https://picsum.photos/seed/islamic/400/250',
    description: 'Trade without overnight swap fees with spreads from 0.16 pips, designed for Islamic faith traders.'
  },
  {
    name: 'Premium',
    tagline: 'Enhanced Trading Power',
    badge: 'Advanced Traders',
    icon: Star,
    highlight: false,
    color: 'purple',
    deposit: '$500',
    leverage: '1:1000',
    spreads: 'From 0.06 pips',
    commission: '$3.5 per lot',
    minLot: '0.01',
    swapFree: 'Not Swap Free',
    perks: ['Ultra-tight spreads from 0.06 pips', '1:1000 leverage', '$3.5 commission per lot', 'Advanced analytics'],
    image: 'https://picsum.photos/seed/ecn/400/250',
    description: 'Advanced trading with ultra-tight spreads from 0.06 pips and commission of $3.5 per lot.'
  },
  {
    name: 'ECN',
    tagline: 'Raw Spread Trading',
    badge: 'For Professionals',
    icon: TrendingUp,
    highlight: false,
    color: 'indigo',
    deposit: '$200',
    leverage: '1:200',
    spreads: 'From 0.00 pips',
    commission: '$3.5 per lot per side',
    minLot: '0.1',
    swapFree: 'Not Swap Free',
    perks: ['Raw spreads from 0.00 pips', 'ECN execution', '$3.5 per lot per side', 'Professional trading tools'],
    image: 'https://picsum.photos/seed/signature/400/250',
    description: 'Trade with raw spreads from 0.00 pips and ultra-fast ECN execution with $3.5 commission per lot per side.'
  },
  {
    name: 'Signature',
    tagline: 'Ultimate Trading Experience',
    badge: 'VIP Elite',
    icon: Award,
    highlight: false,
    color: 'gold',
    deposit: '$5,000',
    leverage: 'Unlimited',
    spreads: 'No Spread',
    commission: '$3.5 per lot',
    minLot: '0.1',
    swapFree: 'No Swap',
    perks: ['No spread, no swap, no slippage', 'Unlimited leverage', 'Dedicated account manager', '$3.5 commission per lot'],
    image: 'https://picsum.photos/seed/vip/400/250',
    description: 'Premium tier with no spread, no swap, no slippage, unlimited leverage, and $3.5 commission per lot.'
  },
]

function RevealCard({ children, delay = 0 }) {
  const ref = useScrollReveal()
  return (
    <div ref={ref} className="reveal" style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  )
}

export default function Accounts() {
  return (
    <div>
      <PageHero
        title="Account Types"
        subtitle="Choose the account that fits your trading style. Professional execution across all tiers."
        image="https://picsum.photos/seed/accounts/1200/600"
      />

      {/* Main Accounts Grid */}
      <Section title="Choose the Account That Fits Your Strategy" subtitle="Tailored accounts for every level of trader — from beginner to professional institution">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {ACCOUNTS.map((acc, i) => {
            const Icon = acc.icon
            return (
              <RevealCard key={acc.name} delay={i * 100}>
                <div className={`rounded-3xl overflow-hidden shadow-xl border-2 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 ${acc.highlight ? 'border-gold-500 bg-gradient-to-br from-gold-50 to-white' : 'border-gray-200 bg-white'}`}>
                  {/* Header with Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img src={acc.image} alt={acc.name} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    {acc.highlight && (
                      <div className="absolute top-4 right-4">
                        <span className="bg-gold-500 text-white text-xs px-4 py-1.5 rounded-full font-bold flex items-center gap-1 shadow-lg">
                          <Star className="w-3 h-3 fill-current" /> {acc.badge}
                        </span>
                      </div>
                    )}
                    {!acc.highlight && (
                      <div className="absolute top-4 right-4">
                        <span className="bg-white/90 text-gray-700 text-xs px-4 py-1.5 rounded-full font-semibold shadow">
                          {acc.badge}
                        </span>
                      </div>
                    )}
                    <div className="absolute bottom-4 left-6 text-white">
                      <div className="flex items-center gap-3 mb-1">
                        <div className="p-2 bg-white/20 backdrop-blur-sm rounded-xl">
                          <Icon className="w-6 h-6" />
                        </div>
                        <h3 className="text-3xl font-black">{acc.name}</h3>
                      </div>
                      <p className="text-white/90 text-sm font-medium">{acc.tagline}</p>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Key Stats */}
                    <div className="grid grid-cols-3 gap-4 mb-6 pb-6 border-b">
                      <div className="text-center">
                        <div className="text-xs text-gray-500 font-semibold uppercase mb-1">Min Deposit</div>
                        <div className={`text-2xl font-black ${acc.highlight ? 'text-gold-600' : 'text-gray-800'}`}>{acc.deposit}</div>
                      </div>
                      <div className="text-center">
                        <div className="text-xs text-gray-500 font-semibold uppercase mb-1">Leverage</div>
                        <div className={`text-2xl font-black ${acc.highlight ? 'text-gold-600' : 'text-gray-800'}`}>{acc.leverage}</div>
                      </div>
                      <div className="text-center">
                        <div className="text-xs text-gray-500 font-semibold uppercase mb-1">Commission</div>
                        <div className={`text-2xl font-black ${acc.highlight ? 'text-gold-600' : 'text-gray-800'}`}>{acc.commission}</div>
                      </div>
                    </div>

                    {/* Spreads */}
                    <div className={`rounded-xl p-4 mb-6 ${acc.highlight ? 'bg-gold-100 border border-gold-200' : 'bg-gray-50'}`}>
                      <div className="text-xs text-gray-600 font-semibold mb-1">Spreads</div>
                      <div className="text-lg font-bold text-gray-800">{acc.spreads}</div>
                    </div>

                    {/* Perks List */}
                    <div className="space-y-3 mb-6">
                      {acc.perks.map((perk, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          <div className={`p-1 rounded-full ${acc.highlight ? 'bg-gold-100' : 'bg-gray-100'}`}>
                            <CheckCircle className={`w-4 h-4 ${acc.highlight ? 'text-gold-600' : 'text-gray-600'}`} />
                          </div>
                          <span className="text-sm text-gray-700 font-medium">{perk}</span>
                        </div>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <button className={`w-full py-4 rounded-xl font-bold text-sm transition-all duration-300 ${acc.highlight ? 'bg-gold-500 text-white hover:bg-gold-600 shadow-lg hover:shadow-xl' : 'bg-gray-800 text-white hover:bg-gray-900'}`}>
                      Open {acc.name} Account →
                    </button>
                  </div>
                </div>
              </RevealCard>
            )
          })}
        </div>
      </Section>

      {/* Detailed Comparison Table */}
      <Section title="Full Feature Comparison" gray>
        <div className="overflow-x-auto">
          <table className="w-full bg-white rounded-2xl overflow-hidden shadow-lg min-w-[800px]">
            <thead>
              <tr className="bg-gray-900 text-white">
                <th className="text-left py-4 px-6 font-bold">Feature</th>
                {ACCOUNTS.map(acc => (
                  <th key={acc.name} className={`text-center py-4 px-4 font-bold ${acc.highlight ? 'bg-gold-600' : ''}`}>
                    {acc.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="text-sm">
              {[
                ['Min Deposit', ACCOUNTS.map(a => a.deposit)],
                ['Max Leverage', ACCOUNTS.map(a => a.leverage)],
                ['Spreads', ACCOUNTS.map(a => a.spreads)],
                ['Commission', ACCOUNTS.map(a => a.commission)],
                ['Min Lot Size', ['0.01', '0.01', '0.01', '0.01', '0.1', '0.1']],
                ['Max Positions', ['200', '300', '300', '300', '200', '500']],
                ['Swap Free', ['No', 'No', 'Yes', 'No', 'No', 'Yes']],
                ['Margin Call', ['100%', '100%', '100%', '100%', '100%', '100%']],
                ['Execution', ['Market', 'Market', 'Market', 'Market', 'Market', 'No Slippage']],
                ['Scalping Allowed', ['✅', '✅', '✅', '✅', '✅', '✅']],
                ['EA/Bot Trading', ['✅', '✅', '✅', '✅', '✅', '✅']],
              ].map((row, i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                  <td className="py-3 px-6 font-semibold text-gray-700">{row[0]}</td>
                  {row[1].map((val, j) => (
                    <td key={j} className={`py-3 px-4 text-center font-medium ${ACCOUNTS[j].highlight ? 'bg-gold-50 text-gold-700' : 'text-gray-600'}`}>
                      {val}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-gold-600 to-gold-800 text-white py-20">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-black mb-4">Not Sure Which Account to Choose?</h2>
          <p className="text-gold-100 text-lg mb-8 leading-relaxed">
            Our team is here to help you select the perfect account for your trading goals and experience level.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="/contact" className="bg-white text-gold-600 font-bold px-8 py-4 rounded-xl hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl">
              Talk to an Expert
            </a>
            <a href="https://portal.dojifx.com/signup" className="border-2 border-white text-white font-bold px-8 py-4 rounded-xl hover:bg-white/10 transition-all">
              Open Demo Account
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
