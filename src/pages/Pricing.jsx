import React, { useState } from 'react'
import { DollarSign, TrendingUp, Info } from 'lucide-react'
import PageHero from '../components/PageHero'
import Section from '../components/Section'
import useScrollReveal from '../hooks/useScrollReveal'

function RevealCard({ children, delay = 0 }) {
  const ref = useScrollReveal()
  return (
    <div ref={ref} className="reveal" style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  )
}

const ACCOUNT_SPREADS = [
  { account: 'Classic', type: 'Spread only', eurusd: '1.2', gbpusd: '1.5', usdjpy: '1.3', gold: '25', oil: '4', commission: '$0' },
  { account: 'Premium', type: 'Spread only', eurusd: '0.8', gbpusd: '1.0', usdjpy: '0.9', gold: '18', oil: '3', commission: '$0' },
  { account: 'ECN Raw', type: 'Raw + Commission', eurusd: '0.0', gbpusd: '0.1', usdjpy: '0.1', gold: '8', oil: '2', commission: '$6/lot' },
  { account: 'Islamic', type: 'Swap-free', eurusd: '1.5', gbpusd: '1.8', usdjpy: '1.5', gold: '28', oil: '5', commission: '$0' },
]

const FEES = [
  { type: 'Spreads', desc: 'Included in the price for Classic/Premium. Raw spreads from 0.0 pips on ECN accounts.' },
  { type: 'Commission', desc: 'ECN accounts: $3 per lot per side ($6 round-trip). Classic & Premium: zero commission.' },
  { type: 'Overnight Swap', desc: 'Positions held overnight incur swap fees. Rates vary by instrument and direction. Islamic accounts are swap-free.' },
  { type: 'Deposits / Withdrawals', desc: 'Fexness charges ZERO fees on deposits or withdrawals. Third-party processor fees may apply.' },
  { type: 'Inactivity Fee', desc: '$10/month after 90 days of no trading activity on funded accounts.' },
  { type: 'Currency Conversion', desc: '0.5% fee on currency conversion when depositing in a currency different from your account base currency.' },
]

export default function Pricing() {
  const [tab, setTab] = useState('spreads')
  return (
    <div>
      <PageHero
        title="Transparent Pricing"
        subtitle="No hidden fees. Competitive spreads. Clear commission structure."
        image="https://picsum.photos/seed/pricing/1200/600"
      />

      {/* Summary Cards */}
      <Section gray>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: DollarSign, label: 'Min Deposit', value: '$10' },
            { icon: TrendingUp, label: 'Spreads From', value: '0.0 pips' },
            { icon: DollarSign, label: 'Commission', value: '$6/lot ECN' },
            { icon: Info, label: 'Deposit Fee', value: 'FREE' },
          ].map(({ icon: Icon, label, value }, i) => (
            <RevealCard key={i} delay={i * 80}>
              <div className="text-center bg-white rounded-2xl p-6 shadow-sm card-hover">
                <div className="inline-flex p-3 rounded-xl bg-gold-100 text-gold-600 mb-3">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="text-2xl font-bold text-gold-600">{value}</div>
                <div className="text-gray-500 text-sm mt-1">{label}</div>
              </div>
            </RevealCard>
          ))}
        </div>
      </Section>

      {/* Tabs */}
      <Section title="Pricing Details">
        <div className="flex gap-2 mb-8 flex-wrap">
          {[
            { key: 'spreads', label: 'Spreads by Account' },
            { key: 'fees', label: 'Fee Schedule' },
          ].map(({ key, label }) => (
            <button
              key={key}
              onClick={() => setTab(key)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${tab === key ? 'bg-gold-500 text-white shadow' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
            >
              {label}
            </button>
          ))}
        </div>

        {tab === 'spreads' && (
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-2xl overflow-hidden shadow-sm min-w-[600px]">
              <thead>
                <tr className="bg-gold-500 text-white text-sm">
                  <th className="text-left py-4 px-5">Account</th>
                  <th className="text-left py-4 px-5">Type</th>
                  <th className="text-center py-4 px-4">EUR/USD</th>
                  <th className="text-center py-4 px-4">GBP/USD</th>
                  <th className="text-center py-4 px-4">USD/JPY</th>
                  <th className="text-center py-4 px-4">Gold</th>
                  <th className="text-center py-4 px-4">Oil</th>
                  <th className="text-center py-4 px-5">Commission</th>
                </tr>
              </thead>
              <tbody>
                {ACCOUNT_SPREADS.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="py-3 px-5 font-bold text-gold-600">{row.account}</td>
                    <td className="py-3 px-5 text-gray-500 text-sm">{row.type}</td>
                    <td className="py-3 px-4 text-center font-medium">{row.eurusd}</td>
                    <td className="py-3 px-4 text-center font-medium">{row.gbpusd}</td>
                    <td className="py-3 px-4 text-center font-medium">{row.usdjpy}</td>
                    <td className="py-3 px-4 text-center font-medium">{row.gold}</td>
                    <td className="py-3 px-4 text-center font-medium">{row.oil}</td>
                    <td className="py-3 px-5 text-center font-bold text-gold-600">{row.commission}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="text-gray-400 text-xs mt-3">* Spreads are indicative and may vary with market conditions. All values in pips.</p>
          </div>
        )}

        {tab === 'fees' && (
          <div className="space-y-3">
            {FEES.map((fee, i) => (
              <RevealCard key={i} delay={i * 60}>
                <div className="bg-white rounded-xl p-5 border flex gap-4">
                  <div className="w-40 font-bold text-gold-600 flex-shrink-0 text-sm">{fee.type}</div>
                  <p className="text-gray-600 text-sm">{fee.desc}</p>
                </div>
              </RevealCard>
            ))}
          </div>
        )}
      </Section>
    </div>
  )
}
