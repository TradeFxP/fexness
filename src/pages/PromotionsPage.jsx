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
    title: '50% Welcome Bonus',
    desc: 'Get 50% bonus on every deposit. Boost your trading capital instantly with our generous welcome offer.',
    img: 'https://picsum.photos/seed/bonus1/600/350',
    highlight: true,
    terms: ['50% bonus on all deposits', '3 lots trading required to activate', 'Complete 10 lots to withdraw', 'Bonus not withdrawable - can be lost in trading'],
  },
  {
    badge: 'Referral',
    title: 'Referral Program - $12 Per Lot',
    desc: 'Refer traders and earn $12 commission per lot they trade. Unlimited earning potential with our generous referral program.',
    img: 'https://picsum.photos/seed/bonus2/600/350',
    highlight: false,
    terms: ['$12 commission per lot traded', '2 business days processing time', 'Credited after volume conditions met', 'Unlimited referrals allowed'],
  },
  {
    badge: 'VIP',
    title: 'Signature Account Benefits',
    desc: 'Unlock premium trading with our Signature account. No spread, no swap, no slippage, and unlimited leverage.',
    img: 'https://picsum.photos/seed/referral/600/350',
    highlight: false,
    terms: ['Minimum deposit $5,000', 'No spread, no swap, no slippage', 'Unlimited leverage', 'Commission $3.5 per lot'],
  },
  {
    badge: 'Trading',
    title: 'Ultra-Low Spreads',
    desc: 'Trade with industry-leading spreads starting from 0.00 pips on ECN accounts and 0.06 pips on Premium accounts.',
    img: 'https://picsum.photos/seed/cashback/600/350',
    highlight: false,
    terms: ['ECN spreads from 0.00 pips', 'Premium spreads from 0.06 pips', 'Competitive commissions', 'Professional execution'],
  },
]

export default function PromotionsPage() {
  return (
    <div>
      <PageHero
        title="Promotions & Bonuses"
        subtitle="Boost your trading capital with exclusive Fexness offers."
        image="https://picsum.photos/seed/bonus/1200/600"
      />

      {/* Stats */}
      <Section gray>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: Gift, label: 'Welcome Bonus', value: '50%' },
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
        <div className="grid md:grid-cols-2 gap-8">
          {PROMOS.map((promo, i) => (
            <RevealCard key={i} delay={i * 100}>
              <div className={`rounded-2xl overflow-hidden border shadow-sm card-hover ${promo.highlight ? 'ring-2 ring-gold-400' : ''}`}>
                <div className="relative">
                  <img src={promo.img} alt={promo.title} className="w-full h-48 object-cover" />
                  <span className={`absolute top-4 left-4 text-xs font-bold px-3 py-1 rounded-full ${promo.highlight ? 'bg-gold-500 text-white' : 'bg-white text-gold-600 border border-gold-300'}`}>
                    {promo.badge}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{promo.title}</h3>
                  <p className="text-gray-500 text-sm mb-4">{promo.desc}</p>
                  <ul className="space-y-1 mb-4">
                    {promo.terms.map((t, j) => (
                      <li key={j} className="flex items-center gap-2 text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-gold-400 flex-shrink-0" />
                        {t}
                      </li>
                    ))}
                  </ul>
                  <a href="https://portal.fexness.com/signup" className={`block text-center py-3 rounded-xl font-semibold text-sm transition-colors ${promo.highlight ? 'bg-gold-500 text-white hover:bg-gold-600' : 'border border-gold-500 text-gold-600 hover:bg-gold-50'}`}>
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
          <h4 className="font-bold text-gray-700 mb-2 text-sm">Terms & Conditions</h4>
          <p className="text-gray-400 text-xs leading-relaxed">
            All promotions are subject to Fexness's standard Terms and Conditions. <strong>50% Bonus Policy:</strong> Requires 3 lots trading to activate conditions. Withdrawal allowed only after completing 10 lots trading volume. Bonus funds are not withdrawable and can be lost in trading. <strong>Referral Program:</strong> $12 commission per lot with 2 business days processing time. <strong>Withdrawal Conditions:</strong> May require completion of minimum trading volume (5 lots in certain promotion cases) before profit withdrawal. Some promotions may require removal of leverage conditions depending on account type. Fexness reserves the right to modify, suspend or cancel any promotion at any time without prior notice.
          </p>
        </div>
      </section>
    </div>
  )
}