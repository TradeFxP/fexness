import React from 'react'
import { TrendingUp, TrendingDown } from 'lucide-react'

const PAIRS = [
  { symbol: 'EUR/USD', price: '1.0876', change: '+0.12%', up: true },
  { symbol: 'GBP/USD', price: '1.2721', change: '-0.05%', up: false },
  { symbol: 'USD/JPY', price: '149.32', change: '+0.28%', up: true },
  { symbol: 'XAU/USD', price: '2,045.50', change: '+0.40%', up: true },
  { symbol: 'BTC/USD', price: '67,210', change: '-1.23%', up: false },
  { symbol: 'WTI/USD', price: '82.45', change: '+0.67%', up: true },
  { symbol: 'EUR/GBP', price: '0.8542', change: '+0.09%', up: true },
  { symbol: 'USD/CHF', price: '0.8976', change: '-0.14%', up: false },
  { symbol: 'AUD/USD', price: '0.6521', change: '+0.19%', up: true },
  { symbol: 'SPX500', price: '5,234.60', change: '+0.32%', up: true },
]

export default function MarketTicker() {
  return (
    <div className="overflow-hidden w-full">
      <div className="flex gap-8 anim-ticker whitespace-nowrap">
        {[...PAIRS, ...PAIRS].map((p, i) => (
          <div key={i} className="inline-flex items-center gap-2 flex-shrink-0">
            <span className="text-gray-300 font-semibold text-sm">{p.symbol}</span>
            <span className="text-white font-mono text-sm">{p.price}</span>
            <span className={`flex items-center gap-0.5 text-xs font-semibold ${p.up ? 'text-green-400' : 'text-red-400'}`}>
              {p.up ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
              {p.change}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
