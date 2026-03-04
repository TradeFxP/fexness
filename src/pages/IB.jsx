import React from 'react'
import { Users, DollarSign, TrendingUp, Award, CheckCircle, ArrowRight } from 'lucide-react'
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

const TIERS = [
  { name: 'Bronze IB', clients: '1–10', commission: '$5/lot', bonus: '—', color: 'bg-orange-50 border-orange-200' },
  { name: 'Silver IB', clients: '11–30', commission: '$7/lot', bonus: '+$200 bonus', color: 'bg-gray-50 border-gray-200' },
  { name: 'Gold IB', clients: '31–80', commission: '$9/lot', bonus: '+$500 bonus', color: 'bg-yellow-50 border-yellow-200' },
  { name: 'Platinum IB', clients: '81+', commission: '$12/lot', bonus: '+$1,500 bonus', color: 'bg-gold-50 border-gold-300' },
]

const STEPS = [
  { step: '01', title: 'Apply Online', desc: 'Complete the IB application form with your personal and business information.' },
  { step: '02', title: 'Get Approved', desc: 'Our partnership team reviews your application within 48 business hours.' },
  { step: '03', title: 'Receive Your Link', desc: 'Get your unique referral link and marketing materials from the IB portal.' },
  { step: '04', title: 'Earn Commissions', desc: 'Earn commissions on every lot traded by your referred clients, paid weekly.' },
]

export default function IB() {
  return (
    <div>
      <PageHero
        title="Introducing Broker Program"
        subtitle="Partner with Fexness and earn industry-leading commissions for every client you refer."
        image="https://picsum.photos/seed/ib/1200/600"
      />

      {/* Stats */}
      <Section gray>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: DollarSign, label: 'Max Commission', value: '$12/lot' },
            { icon: Users, label: 'Active IBs', value: '5,000+' },
            { icon: TrendingUp, label: 'Weekly Payouts', value: 'Every Mon' },
            { icon: Award, label: 'Top IB Earned', value: '$120K/mo' },
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

      {/* Tiers */}
      <Section title="IB Commission Tiers" subtitle="Progress through tiers to unlock higher rewards">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TIERS.map((tier, i) => (
            <RevealCard key={i} delay={i * 100}>
              <div className={`rounded-2xl p-6 border ${tier.color} card-hover h-full`}>
                <h3 className="font-bold text-lg mb-1">{tier.name}</h3>
                <div className="text-sm text-gray-500 mb-4">{tier.clients} referred clients</div>
                <div className="text-2xl font-bold text-gold-600 mb-1">{tier.commission}</div>
                <div className="text-sm text-gray-500 mb-3">per standard lot</div>
                {tier.bonus !== '—' && (
                  <span className="bg-gold-500 text-white text-xs font-bold px-3 py-1 rounded-full">{tier.bonus}</span>
                )}
              </div>
            </RevealCard>
          ))}
        </div>
      </Section>

      {/* How It Works */}
      <Section title="How to Join" subtitle="Start earning in 4 simple steps" gray>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STEPS.map((s, i) => (
            <RevealCard key={i} delay={i * 100}>
              <div className="text-center bg-white rounded-2xl p-6 border card-hover">
                <div className="text-5xl font-bold text-gold-100 mb-2">{s.step}</div>
                <h4 className="font-bold mb-2">{s.title}</h4>
                <p className="text-gray-500 text-sm">{s.desc}</p>
              </div>
            </RevealCard>
          ))}
        </div>
      </Section>

      {/* Benefits */}
      <Section title="IB Benefits">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <img src="https://picsum.photos/seed/ib2/600/400" alt="IB Benefits" className="rounded-2xl shadow-lg" />
          <div className="space-y-3">
            {[
              'Dedicated IB account manager',
              'Real-time IB dashboard and analytics',
              'Marketing tools, banners, and landing pages',
              'Sub-IB structure with 2-tier commissions',
              'Weekly commission payouts directly to your account',
              'Co-branding and white-label options available',
              'Priority customer support for your referred clients',
              'Special VIP events and IB conventions',
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-gold-500 flex-shrink-0" />
                <span className="text-gray-700 text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA */}
      <section className="bg-gold-600 text-white py-14 text-center">
        <h2 className="text-3xl font-bold mb-4">Become a Fexness IB Today</h2>
        <p className="text-gold-100 mb-8">Join 5,000+ IBs worldwide already earning with us. No cap on earnings.</p>
        <a href="https://portal.fexness.com/signup" className="inline-flex items-center gap-2 bg-white text-gold-600 font-semibold px-8 py-3 rounded-xl hover:bg-gray-100 transition-colors">
          Apply Now <ArrowRight className="w-4 h-4" />
        </a>
      </section>
    </div>
  )
}
