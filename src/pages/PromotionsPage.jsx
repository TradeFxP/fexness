import React from 'react'
import { Gift, Star, Percent, Users, CheckCircle } from 'lucide-react'
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

const PROMOS = [
  {
    badge: 'Welcome',
    title: '30% Welcome Bonus',
    desc: 'Get 30% bonus on your first deposit. Boost your trading capital instantly with our generous welcome offer.',
    img: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=600&h=350&fit=crop',
    highlight: true,
    terms: ['30% bonus on first deposit', '3 lots trading required to activate', 'Complete 10 lots to withdraw', 'Bonus not withdrawable - can be lost in trading'],
  },
  {
    badge: 'Deposit',
    title: '30% Bonus on Every Deposit',
    desc: 'Enjoy 30% bonus on every deposit you make. Continuous rewards for loyal traders to maximize trading potential.',
    img: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&h=350&fit=crop',
    highlight: true,
    terms: ['30% bonus on all deposits', '3 lots trading required to activate', 'Complete 10 lots to withdraw', 'Bonus not withdrawable - can be lost in trading'],
  },
  {
    badge: 'Referral',
    title: 'Referral Program - $12 Per Lot',
    desc: 'Refer traders and earn $12 commission per lot they trade. Unlimited earning potential with our generous referral program.',
    img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=350&fit=crop',
    highlight: false,
    terms: ['$12 commission per lot traded', '2 business days processing time', 'Credited after volume conditions met', 'Unlimited referrals allowed'],
  },
  {
    badge: 'Trading',
    title: 'Ultra-Low Spreads',
    desc: 'Trade with industry-leading spreads starting from 0.00 pips on ECN accounts and 0.06 pips on Premium accounts.',
    img: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=600&h=350&fit=crop',
    highlight: false,
    terms: ['ECN spreads from 0.00 pips', 'Premium spreads from 0.06 pips', 'Competitive commissions', 'Professional execution'],
  },
]

export default function PromotionsPage() {
  return (
    <div>
      <PageHero
        title="Promotions & Bonuses"
        subtitle="Boost your trading capital with exclusive DojiFx offers."
        image="https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=1200&h=600&fit=crop"
      />

      {/* Stats */}
      <Section gray>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: Gift, label: 'Welcome Bonus', value: '30%' },
            { icon: Star, label: 'Spreads From', value: '0.00' },
            { icon: Users, label: 'Referral/Lot', value: '$12' },
            { icon: Percent, label: 'Commission', value: '$3.5' },
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

      {/* Promo Cards */}
      <Section title="Current Promotions">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROMOS.map((promo, i) => (
            <RevealCard key={i} delay={i * 100}>
              <div className={`rounded-2xl overflow-hidden border shadow-sm card-hover h-full flex flex-col ${promo.highlight ? 'ring-2 ring-gold-400' : ''}`}>
                <div className="relative">
                  <img src={promo.img} alt={promo.title} className="w-full h-48 object-cover" />
                  <span className={`absolute top-4 left-4 text-xs font-bold px-3 py-1 rounded-full ${promo.highlight ? 'bg-gold-500 text-white' : 'bg-white text-gold-600 border border-gold-300'}`}>
                    {promo.badge}
                  </span>
                </div>
                <div className="p-5 flex flex-col flex-grow">
                  <h3 className="text-lg font-bold mb-2 text-gray-800">{promo.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">{promo.desc}</p>
                  <ul className="space-y-2 mb-4 flex-grow">
                    {promo.terms.map((t, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-gray-700">
                        <CheckCircle className="w-4 h-4 text-gold-500 flex-shrink-0 mt-0.5" />
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                  <a href="https://portal.dojifx.com/signup" className={`block text-center py-3 rounded-xl font-semibold text-sm transition-colors ${promo.highlight ? 'bg-gold-500 text-white hover:bg-gold-600' : 'border border-gold-500 text-gold-600 hover:bg-gold-50'}`}>
                    Claim Offer
                  </a>
                </div>
              </div>
            </RevealCard>
          ))}
        </div>
      </Section>

      {/* Disclaimer */}
      <section className="bg-gray-50 border-t py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <h4 className="font-bold text-gray-800 mb-3 text-base">Terms & Conditions</h4>
          <p className="text-gray-700 text-sm leading-relaxed">
            All promotions are subject to DojiFx's standard Terms and Conditions. <strong>30% Bonus Policy:</strong> Requires 3 lots trading to activate conditions. Withdrawal allowed only after completing 10 lots trading volume. Bonus funds are not withdrawable and can be lost in trading. <strong>Referral Program:</strong> $12 commission per lot with 2 business days processing time. <strong>Withdrawal Conditions:</strong> May require completion of minimum trading volume (5 lots in certain promotion cases) before profit withdrawal. Some promotions may require removal of leverage conditions depending on account type. DojiFx reserves the right to modify, suspend or cancel any promotion at any time without prior notice.
          </p>
        </div>
      </section>
    </div>
  )
}