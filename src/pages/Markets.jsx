import React, { useState } from 'react'
import { TrendingUp, DollarSign, BarChart2, Zap, Bitcoin, Globe, Award, Info } from 'lucide-react'
import PageHero from '../components/PageHero'
import Section from '../components/Section'
import useScrollReveal from '../hooks/useScrollReveal'

const TABS = [
  { id: 'Forex', label: 'Forex', icon: Globe },
  { id: 'Metals', label: 'Metals', icon: Award },
  { id: 'Indices', label: 'Indices', icon: BarChart2 },
  { id: 'Energies', label: 'Energies', icon: Zap },
  { id: 'Crypto CFDs', label: 'Crypto CFDs', icon: Bitcoin },
]

const DATA = {
  Forex: [
    { pair: 'EUR/USD', spread: '0.3', leverage: '1:1000', min: '0.01' },
    { pair: 'GBP/USD', spread: '0.5', leverage: '1:1000', min: '0.01' },
    { pair: 'USD/JPY', spread: '0.4', leverage: '1:1000', min: '0.01' },
    { pair: 'AUD/USD', spread: '0.6', leverage: '1:1000', min: '0.01' },
    { pair: 'USD/CAD', spread: '0.7', leverage: '1:1000', min: '0.01' },
    { pair: 'USD/CHF', spread: '0.5', leverage: '1:1000', min: '0.01' },
  ],
  Metals: [
    { pair: 'XAU/USD (Gold)', spread: '0.25', leverage: '1:1000', min: '0.01' },
    { pair: 'XAG/USD (Silver)', spread: '0.02', leverage: '1:1000', min: '0.01' },
    { pair: 'XPT/USD (Platinum)', spread: '1.5', leverage: '1:1000', min: '0.01' },
  ],
  Indices: [
    { pair: 'US30 (Dow Jones)', spread: '2.0', leverage: '1:1000', min: '0.01' },
    { pair: 'SPX500', spread: '0.5', leverage: '1:1000', min: '0.01' },
    { pair: 'NAS100', spread: '1.0', leverage: '1:1000', min: '0.01' },
    { pair: 'GER40 (DAX)', spread: '1.5', leverage: '1:1000', min: '0.01' },
  ],
  Energies: [
    { pair: 'WTI Crude Oil', spread: '0.04', leverage: '1:1000', min: '0.01' },
    { pair: 'Brent Oil', spread: '0.05', leverage: '1:1000', min: '0.01' },
    { pair: 'Natural Gas', spread: '0.005', leverage: '1:1000', min: '0.01' },
  ],
  'Crypto CFDs': [
    { pair: 'BTC/USD', spread: '25', leverage: '1:1000', min: '0.01' },
    { pair: 'ETH/USD', spread: '2', leverage: '1:1000', min: '0.01' },
    { pair: 'LTC/USD', spread: '0.5', leverage: '1:1000', min: '0.01' },
  ],
}

function RevealRow({ children, delay = 0 }) {
  const ref = useScrollReveal()
  return <tr ref={ref} className="reveal" style={{ transitionDelay: `${delay}ms` }}>{children}</tr>
}

export default function Markets() {
  const [tab, setTab] = useState('Forex')
  const rows = DATA[tab] || []
  return (
    <div>
      <PageHero
        title="Trade Popular Instruments"
        subtitle="Access 100+ trading instruments including Forex, Metals, Indices, Energies & Crypto CFDs from one platform"
        image="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1200&h=600&fit=crop"
      />

      {/* Quick Stats */}
      <Section gray>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {[
            { icon: Globe, label: 'Forex Pairs', value: '50+' },
            { icon: Award, label: 'Precious Metals', value: '3+' },
            { icon: BarChart2, label: 'Global Indices', value: '15+' },
            { icon: Zap, label: 'Energy CFDs', value: '5+' },
          ].map(({ icon: Icon, label, value }, i) => (
            <div key={i} className="text-center bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all">
              <div className="inline-flex p-3 rounded-xl bg-gold-100 text-gold-600 mb-3">
                <Icon className="w-5 h-5" />
              </div>
              <div className="text-2xl font-bold text-gold-600">{value}</div>
              <div className="text-gray-500 text-sm mt-1">{label}</div>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Markets Overview" subtitle="Select an asset class to view trading conditions">
        {/* Tabs with Icons */}
        <div className="flex flex-wrap gap-3 mb-10 justify-center">
          {TABS.map(t => {
            const Icon = t.icon
            return (
              <button
                key={t.id}
                onClick={() => setTab(t.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold transition-all ${
                  tab === t.id 
                    ? 'bg-gold-600 text-white shadow-lg scale-105' 
                    : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200 hover:border-gold-300'
                }`}
              >
                <Icon className="w-4 h-4" />
                {t.label}
              </button>
            )
          })}
        </div>

        {/* Info Box */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-6 flex items-start gap-3">
          <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
          <div className="text-sm text-blue-800">
            <strong>Current Selection: {tab}</strong> — View spreads, leverage, and minimum lot sizes. 
            Spreads shown are typical and may vary based on market conditions.
          </div>
        </div>

        {/* Enhanced Table */}
        <div className="overflow-x-auto rounded-2xl border-2 border-gray-200 shadow-lg">
          <table className="w-full">
            <thead className="bg-gradient-to-r from-gold-600 to-gold-700 text-white">
              <tr>
                <th className="px-6 py-4 text-left font-bold">Trading Instrument</th>
                <th className="px-6 py-4 text-left font-bold">Typical Spread</th>
                <th className="px-6 py-4 text-left font-bold">Max Leverage</th>
                <th className="px-6 py-4 text-left font-bold">Min Lot Size</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              {rows.map((r, i) => (
                <RevealRow key={r.pair} delay={i * 60}>
                  <td className="px-6 py-4 font-bold text-gray-800">{r.pair}</td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center gap-1 text-gold-600 font-bold bg-gold-50 px-3 py-1 rounded-lg">
                      {r.spread} {tab === 'Forex' ? 'pips' : ''}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center gap-1 text-green-700 font-bold bg-green-50 px-3 py-1 rounded-lg">
                      {r.leverage}
                    </span>
                  </td>
                  <td className="px-6 py-4 font-semibold text-gray-700">{r.min}</td>
                </RevealRow>
              ))}
            </tbody>
          </table>
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 text-center bg-gradient-to-r from-gray-50 to-white rounded-2xl p-8 border border-gray-200">
          <h3 className="text-2xl font-bold text-gray-800 mb-3">Ready to Start Trading?</h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Open your account today and get access to all these instruments with competitive spreads and high leverage.
          </p>
          <a 
            href="/register" 
            className="inline-block bg-gold-600 text-white font-bold px-8 py-3 rounded-xl hover:bg-gold-700 transition-all shadow-lg hover:shadow-xl"
          >
            Open Trading Account
          </a>
        </div>
      </Section>
    </div>
  )
}
