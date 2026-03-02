import React, { useState } from 'react'
import { TrendingUp, DollarSign, BarChart2, Zap, Bitcoin } from 'lucide-react'
import PageHero from '../components/PageHero'
import Section from '../components/Section'
import useScrollReveal from '../hooks/useScrollReveal'

const TABS = ['Forex', 'Metals', 'Indices', 'Energies', 'Crypto CFDs']

const DATA = {
  Forex: [
    { pair: 'EUR/USD', spread: '0.3', leverage: '1:300', min: '0.01' },
    { pair: 'GBP/USD', spread: '0.5', leverage: '1:300', min: '0.01' },
    { pair: 'USD/JPY', spread: '0.4', leverage: '1:300', min: '0.01' },
    { pair: 'AUD/USD', spread: '0.6', leverage: '1:300', min: '0.01' },
    { pair: 'USD/CAD', spread: '0.7', leverage: '1:200', min: '0.01' },
    { pair: 'USD/CHF', spread: '0.5', leverage: '1:200', min: '0.01' },
  ],
  Metals: [
    { pair: 'XAU/USD (Gold)', spread: '0.25', leverage: '1:100', min: '0.01' },
    { pair: 'XAG/USD (Silver)', spread: '0.02', leverage: '1:100', min: '0.01' },
    { pair: 'XPT/USD (Platinum)', spread: '1.5', leverage: '1:50', min: '0.01' },
  ],
  Indices: [
    { pair: 'US30 (Dow Jones)', spread: '2.0', leverage: '1:100', min: '0.01' },
    { pair: 'SPX500', spread: '0.5', leverage: '1:100', min: '0.01' },
    { pair: 'NAS100', spread: '1.0', leverage: '1:100', min: '0.01' },
    { pair: 'GER40 (DAX)', spread: '1.5', leverage: '1:100', min: '0.01' },
  ],
  Energies: [
    { pair: 'WTI Crude Oil', spread: '0.04', leverage: '1:50', min: '0.01' },
    { pair: 'Brent Oil', spread: '0.05', leverage: '1:50', min: '0.01' },
    { pair: 'Natural Gas', spread: '0.005', leverage: '1:50', min: '0.01' },
  ],
  'Crypto CFDs': [
    { pair: 'BTC/USD', spread: '25', leverage: '1:10', min: '0.01' },
    { pair: 'ETH/USD', spread: '2', leverage: '1:10', min: '0.01' },
    { pair: 'LTC/USD', spread: '0.5', leverage: '1:10', min: '0.01' },
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
        subtitle="Forex, Metals, Indices, Energies & Crypto CFDs — all from one platform."
        image="https://picsum.photos/seed/markets/1200/600"
      />
      <Section title="Markets Overview" subtitle="Choose your asset class below.">
        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {TABS.map(t => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${tab === t ? 'bg-primary text-white shadow-md' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
            >
              {t}
            </button>
          ))}
        </div>
        {/* Table */}
        <div className="overflow-x-auto rounded-xl border">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 text-gray-600 uppercase text-xs">
              <tr>
                <th className="px-4 py-3 text-left">Instrument</th>
                <th className="px-4 py-3 text-left">Typical Spread</th>
                <th className="px-4 py-3 text-left">Max Leverage</th>
                <th className="px-4 py-3 text-left">Min Lot</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {rows.map((r, i) => (
                <RevealRow key={r.pair} delay={i * 60}>
                  <td className="px-4 py-3 font-semibold">{r.pair}</td>
                  <td className="px-4 py-3 text-primary font-bold">{r.spread}</td>
                  <td className="px-4 py-3">{r.leverage}</td>
                  <td className="px-4 py-3">{r.min}</td>
                </RevealRow>
              ))}
            </tbody>
          </table>
        </div>
      </Section>
    </div>
  )
}
