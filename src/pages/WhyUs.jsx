import React from 'react'
import { ShieldCheck, Zap, DollarSign, Headphones, BarChart2, Globe, Lock, TrendingUp, CheckCircle } from 'lucide-react'
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

const REASONS = [
  { icon: ShieldCheck, title: 'Strong Regulation & Transparency', desc: 'Fexness operates under regulatory licenses across different jurisdictions, ensuring compliance, client protection, and transparent business practices.' },
  { icon: Zap, title: 'Fast & Reliable Deposits & Withdrawals', desc: 'Fexness is known for fast deposit & withdrawal processing, with many kinds of payment methods offering instant or near-instant transactions, subject to payment provider conditions.' },
  { icon: DollarSign, title: 'Competitive Trading Conditions', desc: 'Tight spreads, flexible leverage options, low minimum deposits, and multiple account types for different trading styles.' },
  { icon: BarChart2, title: 'Advanced Trading Platforms', desc: 'Trade on industry-leading platforms with powerful charting tools, automated trading (EAs), and real-time market execution.' },
  { icon: Globe, title: 'Wide Range of Instruments', desc: 'Access a broad selection of markets including Forex currency pairs, Commodities, Indices, Stocks, and Cryptocurrencies (Where permitted by regulation).' },
  { icon: Lock, title: 'Transparent Pricing', desc: 'No hidden fees, clear swap policies, and detailed contract specifications available to clients.' },
  { icon: Headphones, title: '24/7 Customer Support', desc: 'Multilingual support is available to assist traders across different time zones.' },
  { icon: TrendingUp, title: 'Suitable for All Trader Levels', desc: 'Whether you are a beginner or an experienced professional, Fexness offers account types and tools designed to meet various trading strategies.' },
]

const COMPARE = [
  { feature: 'Min Deposit', us: '$10', others: '$500+' },
  { feature: 'Spreads From', us: '0.0 pips', others: '1.5 pips' },
  { feature: 'Commission', us: '$3/lot round trip', others: '$10+/lot' },
  { feature: 'Regulation', us: 'FSRC Licensed', others: 'Offshore only' },
  { feature: 'Execution Speed', us: '12ms avg', others: '250ms+' },
  { feature: 'Leverage (max)', us: '1:2000', others: '1:100' },
  { feature: 'MT5 Access', us: '✅ Free', others: '❌ / Paid' },
  { feature: 'Copy Trading', us: '✅ Built-in', others: '❌ Not available' },
  { feature: 'Islamic Account', us: '✅ Available', others: 'Limited' },
  { feature: '24/5 Support', us: '✅ Multilingual', others: 'Email only' },
]

export default function WhyUs() {
  return (
    <div>
      <PageHero
        title="Why Choose Fexness?"
        subtitle="Choosing the right broker is one of the most important decisions for any trader."
        image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=600&fit=crop"
      />

      {/* Reasons Grid */}
      <Section title="Our Advantages" subtitle="Everything you need for confident, profitable trading">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {REASONS.map(({ icon: Icon, title, desc }, i) => (
            <RevealCard key={i} delay={i * 80}>
              <div className="bg-white rounded-2xl p-6 shadow-sm border card-hover h-full">
                <div className="inline-flex p-3 rounded-xl bg-gold-100 text-gold-600 mb-4">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-lg mb-2">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </div>
            </RevealCard>
          ))}
        </div>
      </Section>

      {/* Comparison Table */}
      <Section title="Fexness vs Others" subtitle="See how we stack up against the competition" gray>
        <div className="overflow-x-auto">
          <table className="w-full bg-white rounded-2xl overflow-hidden shadow-sm">
            <thead>
              <tr className="bg-gold-500 text-white">
                <th className="text-left py-4 px-6">Feature</th>
                <th className="text-center py-4 px-6">Fexness</th>
                <th className="text-center py-4 px-6">Industry Average</th>
              </tr>
            </thead>
            <tbody>
              {COMPARE.map((row, i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="py-3 px-6 font-medium text-gray-700">{row.feature}</td>
                  <td className="py-3 px-6 text-center text-gold-600 font-semibold">{row.us}</td>
                  <td className="py-3 px-6 text-center text-gray-400">{row.others}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      {/* Testimonials */}
      <Section title="What Our Traders Say">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { name: 'Ahmed Al-Hassan', country: 'UAE', text: 'Best spreads I have found. Execution is lightning-fast and the support team really knows what they are talking about.' },
            { name: 'Maria Rodriguez', country: 'Spain', text: 'The education centre helped me go from zero to profitable in 6 months. Highly recommended for beginners.' },
            { name: 'John Kiprotich', country: 'Kenya', text: 'Copy trading is a game-changer. I follow two pro traders and my portfolio has grown steadily every month.' },
          ].map((t, i) => (
            <RevealCard key={i} delay={i * 100}>
              <div className="bg-gray-50 rounded-2xl p-6 border">
                <div className="flex mb-3">
                  {[...Array(5)].map((_, s) => <span key={s} className="text-yellow-400">★</span>)}
                </div>
                <p className="text-gray-600 italic mb-4">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <img src={`https://picsum.photos/seed/${t.name.replace(' ', '')}/40/40`} alt={t.name} className="w-10 h-10 rounded-full object-cover" />
                  <div>
                    <div className="font-bold text-sm">{t.name}</div>
                    <div className="text-gray-400 text-xs">{t.country}</div>
                  </div>
                </div>
              </div>
            </RevealCard>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <section className="bg-gold-600 text-white py-16">
        <div className="max-w-3xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold mb-4">Ready to Experience the Difference?</h2>
          <p className="text-gold-100 mb-8">Open a live account in minutes with just $10 minimum deposit.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="https://portal.fexness.com/signup" className="bg-white text-gold-600 font-semibold px-8 py-3 rounded-xl hover:bg-gray-100 transition-colors">Open Account</a>
            <a href="/contact" className="border border-white text-white font-semibold px-8 py-3 rounded-xl hover:bg-gold-700 transition-colors">Talk to Us</a>
          </div>
        </div>
      </section>
    </div>
  )
}
