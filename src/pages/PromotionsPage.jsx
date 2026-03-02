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
    desc: 'Deposit $100 or more and receive a 50% bonus on your first deposit, credited directly to your trading account.',
    img: 'https://picsum.photos/seed/bonus1/600/350',
    highlight: true,
    terms: ['Min deposit $100', 'Max bonus $500', 'Available once per client', 'Withdrawal after 30 lots traded'],
  },
  {
    badge: 'Loyalty',
    title: '20% Reload Bonus',
    desc: 'Already a client? Earn 20% extra on every subsequent deposit. Keep growing your capital and your bonus.',
    img: 'https://picsum.photos/seed/bonus2/600/350',
    highlight: false,
    terms: ['Min deposit $200', 'Max bonus $1,000', 'Unlimited reloads', 'No expiry on active accounts'],
  },
  {
    badge: 'Refer & Earn',
    title: 'Refer a Friend — $50',
    desc: 'Invite a friend to open and fund an account. Earn $50 for each referral once they complete their first trade.',
    img: 'https://picsum.photos/seed/referral/600/350',
    highlight: false,
    terms: ['Referee must fund $100+', 'Must complete 5 round-turn lots', 'No limit on referrals', 'Paid within 7 business days'],
  },
  {
    badge: 'Cashback',
    title: '$2 per Lot Cashback',
    desc: 'Trade more, earn more. Receive $2 cashback per standard lot traded, paid to your account weekly.',
    img: 'https://picsum.photos/seed/cashback/600/350',
    highlight: false,
    terms: ['Applies to all ECN accounts', 'Paid every Monday', 'No minimum lots required', 'Cannot be combined with other bonuses'],
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
            { icon: Star, label: 'Reload Bonus', value: '20%' },
            { icon: Users, label: 'Referral Reward', value: '$50' },
            { icon: Percent, label: 'Cashback/Lot', value: '$2' },
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
                  <a href="/register" className={`block text-center py-3 rounded-xl font-semibold text-sm transition-colors ${promo.highlight ? 'bg-gold-500 text-white hover:bg-gold-600' : 'border border-gold-500 text-gold-600 hover:bg-gold-50'}`}>
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
            All promotions are subject to Fexness's standard Terms and Conditions. Bonuses are applied at the company's discretion. Promotions cannot be combined unless stated. Bonus funds are not withdrawable; only profits derived from bonus trading are eligible for withdrawal after meeting the minimum lot requirements. Fexness reserves the right to modify, suspend or cancel any promotion at any time without prior notice.
          </p>
        </div>
      </section>
    </div>
  )
}
