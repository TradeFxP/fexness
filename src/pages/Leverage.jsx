import React, { useState } from 'react'
import { AlertCircle, TrendingUp, Calculator } from 'lucide-react'
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

const LEVERAGE_TABLE = [
  { instrument: 'Forex Major Pairs', max: '1:2000', retail: '1:30' },
  { instrument: 'Forex Minor Pairs', max: '1:1000', retail: '1:20' },
  { instrument: 'Gold (XAUUSD)', max: '1:500', retail: '1:20' },
  { instrument: 'Silver (XAGUSD)', max: '1:200', retail: '1:10' },
  { instrument: 'Crude Oil', max: '1:200', retail: '1:10' },
  { instrument: 'Equity Indices', max: '1:500', retail: '1:20' },
  { instrument: 'Stocks / Shares', max: '1:100', retail: '1:5' },
  { instrument: 'Cryptocurrencies', max: '1:100', retail: '1:2' },
]

export default function Leverage() {
  const [deposit, setDeposit] = useState(1000)
  const [leverage, setLeverage] = useState(100)
  const margin = deposit
  const exposure = deposit * leverage

  return (
    <div>
      <PageHero
        title="Leverage & Margin"
        subtitle="Amplify your trading power. Understand leverage before you trade."
        image="https://picsum.photos/seed/leverage/1200/600"
      />

      {/* Intro */}
      <Section title="What Is Leverage?" subtitle="Leverage allows you to control a larger position with a smaller deposit">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <img src="https://picsum.photos/seed/leverage2/600/400" alt="Leverage" className="rounded-2xl shadow-lg" />
          <div className="space-y-4">
            <p className="text-gray-600 leading-relaxed">
              Leverage is the use of borrowed capital to increase the potential return of an investment. At Fexness, we offer leverage up to <strong>1:2000</strong> on selected forex instruments for professional clients.
            </p>
            <div className="bg-gold-50 border border-gold-200 rounded-xl p-5">
              <h4 className="font-bold text-gold-800 mb-2">Example: 1:100 Leverage</h4>
              <p className="text-gold-700 text-sm">With $1,000 in your account and 1:100 leverage, you can open a position worth <strong>$100,000</strong> (1 standard lot of EUR/USD).</p>
            </div>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
              <div className="flex gap-2 items-start">
                <AlertCircle className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
                <p className="text-amber-700 text-sm">High leverage magnifies both profits <em>and</em> losses. Always use risk management tools such as Stop Loss and Take Profit.</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Margin Formula */}
      <Section title="Margin Formula" gray>
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="bg-white rounded-2xl p-6 border shadow-sm">
            <h3 className="font-bold mb-3 flex items-center gap-2"><Calculator className="w-5 h-5 text-gold-500" /> Required Margin Formula</h3>
            <div className="bg-gray-50 rounded-xl p-4 font-mono text-center text-lg font-bold text-gold-600">
              Margin = (Trade Size × Lot Size) ÷ Leverage
            </div>
            <p className="text-gray-500 text-sm mt-3">For example, 1 lot of EUR/USD (100,000 units) at 1:100 leverage requires a margin of 1,000 USD.</p>
          </div>

          {/* Interactive Calculator */}
          <div className="bg-white rounded-2xl p-6 border shadow-sm">
            <h3 className="font-bold mb-4 flex items-center gap-2"><TrendingUp className="w-5 h-5 text-gold-500" /> Margin Calculator</h3>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <label className="block text-sm font-semibold text-gray-600 mb-1">Margin Used ($)</label>
                <input
                  type="number"
                  value={deposit}
                  onChange={e => setDeposit(Number(e.target.value))}
                  className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gold-400"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-600 mb-1">Leverage</label>
                <select
                  value={leverage}
                  onChange={e => setLeverage(Number(e.target.value))}
                  className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gold-400"
                >
                  {[10, 25, 50, 100, 200, 500, 1000, 2000].map(l => (
                    <option key={l} value={l}>1:{l}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-50 rounded-xl p-4 text-center">
                <div className="text-sm text-gray-500">Margin Used</div>
                <div className="text-2xl font-bold text-gray-700">${margin.toLocaleString()}</div>
              </div>
              <div className="bg-gold-50 rounded-xl p-4 text-center">
                <div className="text-sm text-gold-600">Total Exposure</div>
                <div className="text-2xl font-bold text-gold-600">${exposure.toLocaleString()}</div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Leverage Table */}
      <Section title="Maximum Leverage by Instrument">
        <div className="overflow-x-auto">
          <table className="w-full bg-white rounded-2xl overflow-hidden shadow-sm">
            <thead>
              <tr className="bg-gold-500 text-white">
                <th className="text-left py-4 px-6">Instrument</th>
                <th className="text-center py-4 px-6">Pro Client (Max)</th>
                <th className="text-center py-4 px-6">Retail Client</th>
              </tr>
            </thead>
            <tbody>
              {LEVERAGE_TABLE.map((row, i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="py-3 px-6 font-medium text-gray-700">{row.instrument}</td>
                  <td className="py-3 px-6 text-center font-bold text-gold-600">{row.max}</td>
                  <td className="py-3 px-6 text-center text-gray-500">{row.retail}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-gray-400 text-xs mt-3">* Leverage levels may vary based on account type and regulatory jurisdiction. Please verify in your trading platform.</p>
      </Section>
    </div>
  )
}
