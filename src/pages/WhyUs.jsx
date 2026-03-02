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
  { icon: ShieldCheck, title: 'Fully Regulated', desc: 'Authorized by FSRC Saint Lucia. We operate under strict international financial standards ensuring your funds are always protected.' },
  { icon: Lock, title: 'Segregated Funds', desc: 'Client funds are held in separate accounts at top-tier banks, never mixed with company operational capital.' },
  { icon: Zap, title: 'Ultra-Fast Execution', desc: 'Average execution speed of 12ms. No requotes, no delays — pure market access with the best available price.' },
  { icon: DollarSign, title: 'Competitive Pricing', desc: 'Raw spreads from 0.0 pips on major pairs. Transparent commission structure with no hidden fees.' },
  { icon: BarChart2, title: 'Advanced Platforms', desc: 'Trade on MetaTrader 5, our proprietary Web Trader, and mobile apps. All synced in real-time.' },
  { icon: Globe, title: 'Multi-Asset Portfolio', desc: 'Access Forex, Gold, Silver, Oil, Indices, Shares, and Cryptocurrency CFDs on one account.' },
  { icon: Headphones, title: '24/5 Expert Support', desc: 'Multilingual support team available via live chat, WhatsApp, and email — always ready to help.' },
  { icon: TrendingUp, title: 'Educational Resources', desc: 'Free webinars, video tutorials, market analysis, and an economic calendar to sharpen your edge.' },
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
        title="Why Choose Fexness"
        subtitle="Trusted by 200,000+ traders worldwide. Here's what sets us apart."
        image="https://picsum.photos/seed/why-us/1200/600"
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
            <a href="/register" className="bg-white text-gold-600 font-semibold px-8 py-3 rounded-xl hover:bg-gray-100 transition-colors">Open Account</a>
            <a href="/contact" className="border border-white text-white font-semibold px-8 py-3 rounded-xl hover:bg-gold-700 transition-colors">Talk to Us</a>
          </div>
        </div>
      </section>
    </div>
  )
}
