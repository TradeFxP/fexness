import React, { useState } from 'react'
import { Copy, TrendingUp, Users, BarChart2, Star, CheckCircle } from 'lucide-react'
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

const TRADERS = [
  { name: 'AlphaTrader', country: 'UAE', followers: 2340, win: 78, gain: '+142%', drawdown: '8%', img: 'https://picsum.photos/seed/trader1/80/80', months: 18 },
  { name: 'FXMaster_EU', country: 'Germany', followers: 1890, win: 71, gain: '+98%', drawdown: '12%', img: 'https://picsum.photos/seed/trader2/80/80', months: 24 },
  { name: 'GoldKing', country: 'UK', followers: 3100, win: 83, gain: '+215%', drawdown: '6%', img: 'https://picsum.photos/seed/trader3/80/80', months: 30 },
  { name: 'AsiaFX_Pro', country: 'Singapore', followers: 1450, win: 69, gain: '+76%', drawdown: '15%', img: 'https://picsum.photos/seed/trader4/80/80', months: 12 },
  { name: 'SafeHands', country: 'South Africa', followers: 987, win: 91, gain: '+64%', drawdown: '4%', img: 'https://picsum.photos/seed/trader5/80/80', months: 8 },
  { name: 'TrendSniper', country: 'India', followers: 2200, win: 75, gain: '+188%', drawdown: '11%', img: 'https://picsum.photos/seed/trader6/80/80', months: 22 },
]

const HOW_STEPS = [
  { step: '01', title: 'Browse Traders', desc: 'Explore our leaderboard of verified traders with full performance history.' },
  { step: '02', title: 'Choose & Allocate', desc: 'Select a trader and allocate a portion of your balance to copy their trades.' },
  { step: '03', title: 'Copy Automatically', desc: 'All trades are replicated in your account proportionally — no manual action required.' },
  { step: '04', title: 'Manage Anytime', desc: 'Pause, stop, or switch traders at any time with full control over your money.' },
]

export default function CopyTrading() {
  const [selected, setSelected] = useState(null)

  return (
    <div>
      <PageHero
        title="Copy Trading"
        subtitle="Mirror the trades of top-performing forex traders automatically."
        image="https://picsum.photos/seed/copy/1200/600"
      />

      {/* Stats */}
      <Section gray>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: Users, label: 'Expert Traders', value: '500+' },
            { icon: TrendingUp, label: 'Avg Monthly Gain', value: '+12%' },
            { icon: Copy, label: 'Active Copiers', value: '18,000+' },
            { icon: Star, label: 'Highest Win Rate', value: '91%' },
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

      {/* How It Works */}
      <Section title="How Copy Trading Works">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {HOW_STEPS.map((s, i) => (
            <RevealCard key={i} delay={i * 100}>
              <div className="text-center bg-gray-50 rounded-2xl p-6 border card-hover">
                <div className="text-5xl font-bold text-gold-100 mb-2">{s.step}</div>
                <h4 className="font-bold mb-2">{s.title}</h4>
                <p className="text-gray-500 text-sm">{s.desc}</p>
              </div>
            </RevealCard>
          ))}
        </div>
      </Section>

      {/* Trader Leaderboard */}
      <Section title="Top Traders to Copy" subtitle="Live leaderboard of verified expert traders" gray>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {TRADERS.map((trader, i) => (
            <RevealCard key={i} delay={i * 80}>
              <div className="bg-white rounded-2xl p-5 border shadow-sm card-hover">
                <div className="flex items-center gap-3 mb-4">
                  <img src={trader.img} alt={trader.name} className="w-12 h-12 rounded-full object-cover" />
                  <div>
                    <h4 className="font-bold">{trader.name}</h4>
                    <span className="text-gray-400 text-xs">{trader.country} · {trader.months} months</span>
                  </div>
                  <span className="ml-auto text-xs bg-gold-50 text-gold-600 border border-gold-200 px-2 py-0.5 rounded-full font-semibold">{trader.gain}</span>
                </div>
                <div className="grid grid-cols-3 gap-2 text-center text-xs mb-4">
                  <div className="bg-gray-50 rounded-lg p-2">
                    <div className="font-bold text-gray-700">{trader.win}%</div>
                    <div className="text-gray-400">Win Rate</div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-2">
                    <div className="font-bold text-red-400">{trader.drawdown}</div>
                    <div className="text-gray-400">Max DD</div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-2">
                    <div className="font-bold text-gray-700">{trader.followers.toLocaleString()}</div>
                    <div className="text-gray-400">Copiers</div>
                  </div>
                </div>
                <button
                  onClick={() => setSelected(trader.name === selected ? null : trader.name)}
                  className={`w-full py-2 rounded-xl text-sm font-semibold transition-colors ${selected === trader.name ? 'bg-gold-500 text-white' : 'border border-gold-500 text-gold-600 hover:bg-gold-50'}`}
                >
                  {selected === trader.name ? '✓ Copying' : 'Copy Trader'}
                </button>
              </div>
            </RevealCard>
          ))}
        </div>
      </Section>

      {/* Benefits */}
      <Section title="Why Copy Trade with Fexness?">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-3">
            {[
              'Zero commissions on copy trading positions',
              'Proportional copying — you stay in control of risk',
              'Full transparency — see trader history, strategy, drawdown',
              'Set your own stop-loss per trader',
              'Minimum $50 to start copying',
              'Switch or stop copying at any time',
              'Copy multiple traders simultaneously',
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-gold-500 flex-shrink-0" />
                <span className="text-gray-700 text-sm">{item}</span>
              </div>
            ))}
          </div>
          <img src="https://picsum.photos/seed/copy2/600/400" alt="Copy Trading" className="rounded-2xl shadow-lg" />
        </div>
      </Section>

      {/* CTA */}
      <section className="bg-gold-600 text-white py-14 text-center">
        <h2 className="text-3xl font-bold mb-4">Start Copy Trading Today</h2>
        <p className="text-gold-100 mb-8">Join 18,000+ traders already copying the pros. No experience needed.</p>
  <a href="https://portal.fexness.com/signup" className="bg-white text-gold-600 font-semibold px-8 py-3 rounded-xl hover:bg-gray-100 transition-colors">Open Free Account</a>
      </section>
    </div>
  )
}
