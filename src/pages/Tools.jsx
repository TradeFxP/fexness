import React, { useState } from 'react'
import { Calculator, Calendar, Clock, TrendingUp, RefreshCw, Activity, X } from 'lucide-react'
import PageHero from '../components/PageHero'
import Section from '../components/Section'

const TOOLS = [
  { id: 'pip', icon: Calculator, title: 'Pip Calculator', desc: 'Calculate pip value in your account currency for any pair and lot size.' },
  { id: 'margin', icon: Calculator, title: 'Margin Calculator', desc: 'Find out how much margin you need before placing a trade.' },
  { id: 'swap', icon: RefreshCw, title: 'Swap Calculator', desc: 'Calculate overnight swap/rollover costs for your position.' },
  { id: 'profit', icon: TrendingUp, title: 'Profit/Loss Calculator', desc: 'Estimate P&L for any trade before you open it.' },
  { id: 'hours', icon: Clock, title: 'Trading Hours', desc: 'View real-time market open/close times across all asset classes.' },
  { id: 'calendar', icon: Calendar, title: 'Economic Calendar', desc: 'Stay ahead of major data releases and central bank decisions.' },
  { id: 'signals', icon: Activity, title: 'Market Signals', desc: 'Daily buy/sell signals on major forex pairs and indices.' },
]

export default function Tools() {
  const [pip, setPip] = useState({ lot: '1.0', pair: 'EUR/USD', result: null })
  const [activeTool, setActiveTool] = useState(null)

  const calcPip = () => {
    // Simplified: 1 pip on EUR/USD with 1 lot = $10
    const val = parseFloat(pip.lot) * 10
    setPip(p => ({ ...p, result: isNaN(val) ? 'Invalid' : `$${val.toFixed(2)}` }))
  }

  const openTool = (toolId) => {
    setActiveTool(toolId)
  }

  const closeTool = () => {
    setActiveTool(null)
  }

  const renderToolContent = (toolId) => {
    switch(toolId) {
      case 'pip':
        return <PipCalculator />
      case 'margin':
        return <MarginCalculator />
      case 'swap':
        return <SwapCalculator />
      case 'profit':
        return <ProfitLossCalculator />
      case 'hours':
        return <TradingHours />
      case 'calendar':
        return <EconomicCalendar />
      case 'signals':
        return <MarketSignals />
      default:
        return null
    }
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
                  <button 
                    onClick={() => openTool(t.id)}
                    className="mt-3 text-primary text-sm font-semibold hover:underline"
                  >
                    Open Tool →
                  </button>
                </div>
              </div>
            )
          })}
        </div>
      </Section>

      {/* Modal for Tools */}
      {activeTool && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={closeTool}>
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="sticky top-0 bg-white border-b px-6 py-4 flex items-center justify-between">
              <h2 className="text-xl font-bold">
                {TOOLS.find(t => t.id === activeTool)?.title}
              </h2>
              <button 
                onClick={closeTool}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6">
              {renderToolContent(activeTool)}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

// Tool Components
function PipCalculator() {
  const [values, setValues] = useState({ pair: 'EUR/USD', lot: '1.0', accountCurrency: 'USD', result: null })
  
  const calculate = () => {
    const lotSize = parseFloat(values.lot)
    const pipValue = lotSize * 10 // Simplified for major pairs
    setValues(v => ({ ...v, result: `$${pipValue.toFixed(2)}` }))
  }

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-semibold mb-2">Currency Pair</label>
        <select 
          value={values.pair}
          onChange={e => setValues(v => ({ ...v, pair: e.target.value }))}
          className="w-full border rounded-lg px-4 py-2"
        >
          <option>EUR/USD</option>
          <option>GBP/USD</option>
          <option>USD/JPY</option>
          <option>AUD/USD</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-semibold mb-2">Lot Size</label>
        <input 
          type="number"
          step="0.01"
          value={values.lot}
          onChange={e => setValues(v => ({ ...v, lot: e.target.value }))}
          className="w-full border rounded-lg px-4 py-2"
        />
      </div>
      <div>
        <label className="block text-sm font-semibold mb-2">Account Currency</label>
        <select 
          value={values.accountCurrency}
          onChange={e => setValues(v => ({ ...v, accountCurrency: e.target.value }))}
          className="w-full border rounded-lg px-4 py-2"
        >
          <option>USD</option>
          <option>EUR</option>
          <option>GBP</option>
        </select>
      </div>
      <button onClick={calculate} className="w-full btn-primary py-3 rounded-xl font-semibold">
        Calculate
      </button>
      {values.result && (
        <div className="bg-primary/10 rounded-xl p-4 text-center">
          <div className="text-sm text-muted mb-1">Pip Value</div>
          <div className="text-2xl font-bold text-primary">{values.result}</div>
        </div>
      )}
    </div>
  )
}

function MarginCalculator() {
  const [values, setValues] = useState({ pair: 'EUR/USD', lot: '1.0', leverage: '1:1000', result: null })
  
  const calculate = () => {
    const lotSize = parseFloat(values.lot)
    const lev = parseInt(values.leverage.split(':')[1])
    const margin = (lotSize * 100000) / lev // 100,000 units per lot
    setValues(v => ({ ...v, result: `$${margin.toFixed(2)}` }))
  }

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-semibold mb-2">Currency Pair</label>
        <select 
          value={values.pair}
          onChange={e => setValues(v => ({ ...v, pair: e.target.value }))}
          className="w-full border rounded-lg px-4 py-2"
        >
          <option>EUR/USD</option>
          <option>GBP/USD</option>
          <option>USD/JPY</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-semibold mb-2">Lot Size</label>
        <input 
          type="number"
          step="0.01"
          value={values.lot}
          onChange={e => setValues(v => ({ ...v, lot: e.target.value }))}
          className="w-full border rounded-lg px-4 py-2"
        />
      </div>
      <div>
        <label className="block text-sm font-semibold mb-2">Leverage</label>
        <select 
          value={values.leverage}
          onChange={e => setValues(v => ({ ...v, leverage: e.target.value }))}
          className="w-full border rounded-lg px-4 py-2"
        >
          <option>1:100</option>
          <option>1:200</option>
          <option>1:500</option>
          <option>1:1000</option>
        </select>
      </div>
      <button onClick={calculate} className="w-full btn-primary py-3 rounded-xl font-semibold">
        Calculate
      </button>
      {values.result && (
        <div className="bg-primary/10 rounded-xl p-4 text-center">
          <div className="text-sm text-muted mb-1">Required Margin</div>
          <div className="text-2xl font-bold text-primary">{values.result}</div>
        </div>
      )}
    </div>
  )
}

function SwapCalculator() {
  return (
    <div className="text-center py-8">
      <p className="text-muted mb-4">Calculate overnight swap/rollover costs</p>
      <div className="space-y-4">
        <input type="text" placeholder="Currency Pair" className="w-full border rounded-lg px-4 py-2" />
        <input type="number" placeholder="Lot Size" className="w-full border rounded-lg px-4 py-2" />
        <select className="w-full border rounded-lg px-4 py-2">
          <option>Long Position</option>
          <option>Short Position</option>
        </select>
        <button className="w-full btn-primary py-3 rounded-xl font-semibold">Calculate Swap</button>
      </div>
    </div>
  )
}

function ProfitLossCalculator() {
  const [values, setValues] = useState({ pair: 'EUR/USD', lot: '1.0', entry: '1.1000', exit: '1.1050', result: null })
  
  const calculate = () => {
    const lotSize = parseFloat(values.lot)
    const entryPrice = parseFloat(values.entry)
    const exitPrice = parseFloat(values.exit)
    const pips = (exitPrice - entryPrice) * 10000
    const profit = pips * lotSize * 10
    setValues(v => ({ ...v, result: `$${profit.toFixed(2)}` }))
  }

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-semibold mb-2">Currency Pair</label>
        <input 
          type="text"
          value={values.pair}
          onChange={e => setValues(v => ({ ...v, pair: e.target.value }))}
          className="w-full border rounded-lg px-4 py-2"
        />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-semibold mb-2">Entry Price</label>
          <input 
            type="number"
            step="0.0001"
            value={values.entry}
            onChange={e => setValues(v => ({ ...v, entry: e.target.value }))}
            className="w-full border rounded-lg px-4 py-2"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold mb-2">Exit Price</label>
          <input 
            type="number"
            step="0.0001"
            value={values.exit}
            onChange={e => setValues(v => ({ ...v, exit: e.target.value }))}
            className="w-full border rounded-lg px-4 py-2"
          />
        </div>
      </div>
      <div>
        <label className="block text-sm font-semibold mb-2">Lot Size</label>
        <input 
          type="number"
          step="0.01"
          value={values.lot}
          onChange={e => setValues(v => ({ ...v, lot: e.target.value }))}
          className="w-full border rounded-lg px-4 py-2"
        />
      </div>
      <button onClick={calculate} className="w-full btn-primary py-3 rounded-xl font-semibold">
        Calculate P/L
      </button>
      {values.result && (
        <div className="bg-primary/10 rounded-xl p-4 text-center">
          <div className="text-sm text-muted mb-1">Profit/Loss</div>
          <div className={`text-2xl font-bold ${parseFloat(values.result.replace('$', '')) >= 0 ? 'text-green-600' : 'text-red-600'}`}>
            {values.result}
          </div>
        </div>
      )}
    </div>
  )
}

function TradingHours() {
  return (
    <div className="space-y-3">
      <div className="border rounded-lg p-4">
        <div className="font-bold mb-2">Forex Market</div>
        <div className="text-sm text-muted">Sunday 22:00 - Friday 22:00 GMT</div>
      </div>
      <div className="border rounded-lg p-4">
        <div className="font-bold mb-2">Stock Indices</div>
        <div className="text-sm text-muted">Monday 00:00 - Friday 22:00 GMT</div>
      </div>
      <div className="border rounded-lg p-4">
        <div className="font-bold mb-2">Commodities</div>
        <div className="text-sm text-muted">Monday 01:00 - Friday 23:00 GMT</div>
      </div>
      <div className="border rounded-lg p-4">
        <div className="font-bold mb-2">Crypto CFDs</div>
        <div className="text-sm text-muted">24/7 - All Week</div>
      </div>
    </div>
  )
}

function EconomicCalendar() {
  return (
    <div className="space-y-3">
      <div className="border rounded-lg p-4">
        <div className="flex justify-between items-start mb-2">
          <div>
            <div className="font-bold">US Non-Farm Payrolls</div>
            <div className="text-sm text-muted">Friday, 13:30 GMT</div>
          </div>
          <span className="bg-red-100 text-red-600 text-xs px-2 py-1 rounded font-semibold">High Impact</span>
        </div>
      </div>
      <div className="border rounded-lg p-4">
        <div className="flex justify-between items-start mb-2">
          <div>
            <div className="font-bold">Fed Interest Rate Decision</div>
            <div className="text-sm text-muted">Wednesday, 18:00 GMT</div>
          </div>
          <span className="bg-red-100 text-red-600 text-xs px-2 py-1 rounded font-semibold">High Impact</span>
        </div>
      </div>
      <div className="border rounded-lg p-4">
        <div className="flex justify-between items-start mb-2">
          <div>
            <div className="font-bold">ECB Press Conference</div>
            <div className="text-sm text-muted">Thursday, 12:30 GMT</div>
          </div>
          <span className="bg-orange-100 text-orange-600 text-xs px-2 py-1 rounded font-semibold">Medium Impact</span>
        </div>
      </div>
    </div>
  )
}

function MarketSignals() {
  return (
    <div className="space-y-3">
      <div className="border rounded-lg p-4">
        <div className="flex justify-between items-center mb-2">
          <div className="font-bold">EUR/USD</div>
          <span className="bg-green-100 text-green-600 px-3 py-1 rounded font-semibold">BUY</span>
        </div>
        <div className="text-sm text-muted">Entry: 1.1000 | TP: 1.1050 | SL: 1.0950</div>
      </div>
      <div className="border rounded-lg p-4">
        <div className="flex justify-between items-center mb-2">
          <div className="font-bold">GBP/USD</div>
          <span className="bg-red-100 text-red-600 px-3 py-1 rounded font-semibold">SELL</span>
        </div>
        <div className="text-sm text-muted">Entry: 1.2700 | TP: 1.2650 | SL: 1.2750</div>
      </div>
      <div className="border rounded-lg p-4">
        <div className="flex justify-between items-center mb-2">
          <div className="font-bold">Gold (XAU/USD)</div>
          <span className="bg-green-100 text-green-600 px-3 py-1 rounded font-semibold">BUY</span>
        </div>
        <div className="text-sm text-muted">Entry: 2050 | TP: 2070 | SL: 2030</div>
      </div>
      <div className="text-xs text-muted text-center mt-4 p-3 bg-yellow-50 rounded-lg">
        ⚠️ Signals are for educational purposes only. Not financial advice.
      </div>
    </div>
  )
}
