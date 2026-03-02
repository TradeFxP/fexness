import React, { useState } from 'react'
import { Calculator, Calendar, Clock, TrendingUp, RefreshCw, Activity } from 'lucide-react'
import PageHero from '../components/PageHero'
import Section from '../components/Section'

const TOOLS = [
  { icon: Calculator, title: 'Pip Calculator', desc: 'Calculate pip value in your account currency for any pair and lot size.' },
  { icon: Calculator, title: 'Margin Calculator', desc: 'Find out how much margin you need before placing a trade.' },
  { icon: RefreshCw, title: 'Swap Calculator', desc: 'Calculate overnight swap/rollover costs for your position.' },
  { icon: TrendingUp, title: 'Profit/Loss Calculator', desc: 'Estimate P&L for any trade before you open it.' },
  { icon: Clock, title: 'Trading Hours', desc: 'View real-time market open/close times across all asset classes.' },
  { icon: Calendar, title: 'Economic Calendar', desc: 'Stay ahead of major data releases and central bank decisions.' },
  { icon: Activity, title: 'Market Signals', desc: 'Daily buy/sell signals on major forex pairs and indices.' },
]

export default function Tools() {
  const [pip, setPip] = useState({ lot: '1.0', pair: 'EUR/USD', result: null })

  const calcPip = () => {
    // Simplified: 1 pip on EUR/USD with 1 lot = $10
    const val = parseFloat(pip.lot) * 10
    setPip(p => ({ ...p, result: isNaN(val) ? 'Invalid' : `$${val.toFixed(2)}` }))
  }

  return (
    <div>
      <PageHero
        title="Free Tools for Better Decisions"
        subtitle="Calculators, calendar, signals — everything a trader needs."
        image="https://picsum.photos/seed/tools/1200/600"
      />

      {/* Pip Calculator demo */}
      <Section title="Pip Calculator" subtitle="Quick demo — calculate pip value instantly.">
        <div className="max-w-lg mx-auto bg-white border rounded-2xl p-6 shadow-sm">
          <div className="flex gap-4 flex-wrap">
            <div className="flex-1">
              <label className="block text-xs font-semibold text-muted mb-1">Pair</label>
              <input
                value={pip.pair}
                onChange={e => setPip(p => ({ ...p, pair: e.target.value }))}
                className="w-full border rounded-lg px-3 py-2 text-sm"
              />
            </div>
            <div className="flex-1">
              <label className="block text-xs font-semibold text-muted mb-1">Lot Size</label>
              <input
                value={pip.lot}
                onChange={e => setPip(p => ({ ...p, lot: e.target.value }))}
                className="w-full border rounded-lg px-3 py-2 text-sm"
                type="number" step="0.01" min="0.01"
              />
            </div>
          </div>
          <button onClick={calcPip} className="mt-4 w-full btn-primary py-2.5 rounded-xl font-semibold">Calculate</button>
          {pip.result && (
            <div className="mt-4 text-center text-xl font-extrabold text-primary">
              Pip Value: {pip.result}
            </div>
          )}
        </div>
      </Section>

      <Section gray title="All Free Tools">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {TOOLS.map((t, i) => {
            const Icon = t.icon
            return (
              <div key={i} className="bg-white rounded-2xl p-6 border card-hover flex gap-4">
                <div className="p-3 rounded-xl bg-primary/10 text-primary flex-shrink-0">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold">{t.title}</h3>
                  <p className="text-muted text-sm mt-1">{t.desc}</p>
                  <button className="mt-3 text-primary text-sm font-semibold hover:underline">Open Tool →</button>
                </div>
              </div>
            )
          })}
        </div>
      </Section>
    </div>
  )
}
