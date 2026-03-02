import React from 'react'
import { CreditCard, Smartphone, Building2, Bitcoin, ArrowDownCircle, ArrowUpCircle, CheckCircle } from 'lucide-react'
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

const METHODS = [
  { icon: CreditCard, name: 'Visa / Mastercard', deposit: 'Instant', withdraw: '1-3 days', min: '$10', max: '$10,000', fee: '0%', img: 'https://picsum.photos/seed/visa/80/50' },
  { icon: Building2, name: 'Bank Wire Transfer', deposit: '1-3 days', withdraw: '2-5 days', min: '$100', max: 'Unlimited', fee: '0%', img: 'https://picsum.photos/seed/bank/80/50' },
  { icon: Smartphone, name: 'Skrill', deposit: 'Instant', withdraw: '24 hours', min: '$10', max: '$5,000', fee: '0%', img: 'https://picsum.photos/seed/skrill/80/50' },
  { icon: Smartphone, name: 'Neteller', deposit: 'Instant', withdraw: '24 hours', min: '$10', max: '$5,000', fee: '0%', img: 'https://picsum.photos/seed/neteller/80/50' },
  { icon: Bitcoin, name: 'Bitcoin (BTC)', deposit: 'Instant', withdraw: '1-2 hours', min: '$50', max: 'Unlimited', fee: '0%', img: 'https://picsum.photos/seed/bitcoin/80/50' },
  { icon: Bitcoin, name: 'USDT (TRC20)', deposit: 'Instant', withdraw: '1-2 hours', min: '$50', max: 'Unlimited', fee: '0%', img: 'https://picsum.photos/seed/usdt/80/50' },
  { icon: Smartphone, name: 'Perfect Money', deposit: 'Instant', withdraw: '24 hours', min: '$10', max: '$3,000', fee: '0%', img: 'https://picsum.photos/seed/pm/80/50' },
  { icon: CreditCard, name: 'Fasapay', deposit: 'Instant', withdraw: '24 hours', min: '$10', max: '$2,000', fee: '0%', img: 'https://picsum.photos/seed/fasa/80/50' },
]

const STEPS_DEPOSIT = [
  { step: '01', title: 'Log in to Client Portal', desc: 'Access your secure client area using your credentials.' },
  { step: '02', title: 'Select Deposit', desc: 'Go to Funding → Deposit and choose your preferred payment method.' },
  { step: '03', title: 'Enter Amount', desc: 'Enter the deposit amount and confirm the transaction details.' },
  { step: '04', title: 'Funds Available', desc: 'Funds appear in your trading account instantly (most methods).' },
]

export default function Deposits() {
  return (
    <div>
      <PageHero
        title="Deposits & Withdrawals"
        subtitle="Fast, secure, and fee-free funding. Multiple payment options for your convenience."
        image="https://picsum.photos/seed/payments/1200/600"
      />

      {/* Stats */}
      <Section gray>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: ArrowDownCircle, label: 'Min Deposit', value: '$10' },
            { icon: ArrowUpCircle, label: 'Min Withdrawal', value: '$10' },
            { icon: CheckCircle, label: 'Deposit Fee', value: 'FREE' },
            { icon: CheckCircle, label: 'Withdrawal Fee', value: 'FREE' },
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

      {/* Methods Table */}
      <Section title="Payment Methods" subtitle="We support 8+ deposit and withdrawal options">
        <div className="overflow-x-auto">
          <table className="w-full bg-white rounded-2xl overflow-hidden shadow-sm min-w-[640px]">
            <thead>
              <tr className="bg-gold-500 text-white text-sm">
                <th className="text-left py-4 px-5">Method</th>
                <th className="text-center py-4 px-4">Deposit Time</th>
                <th className="text-center py-4 px-4">Withdrawal Time</th>
                <th className="text-center py-4 px-4">Min</th>
                <th className="text-center py-4 px-4">Max</th>
                <th className="text-center py-4 px-4">Fee</th>
              </tr>
            </thead>
            <tbody>
              {METHODS.map((m, i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="py-3 px-5 font-medium text-gray-700 flex items-center gap-2">
                    <m.icon className="w-4 h-4 text-gold-500" /> {m.name}
                  </td>
                  <td className="py-3 px-4 text-center text-gray-600 text-sm">{m.deposit}</td>
                  <td className="py-3 px-4 text-center text-gray-600 text-sm">{m.withdraw}</td>
                  <td className="py-3 px-4 text-center font-medium">{m.min}</td>
                  <td className="py-3 px-4 text-center font-medium">{m.max}</td>
                  <td className="py-3 px-4 text-center font-bold text-gold-600">{m.fee}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      {/* How to Deposit */}
      <Section title="How to Deposit" subtitle="Fund your account in 4 easy steps" gray>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STEPS_DEPOSIT.map((s, i) => (
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

      {/* CTA */}
      <section className="bg-gold-600 text-white py-14 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Fund Your Account?</h2>
        <p className="text-gold-100 mb-8">Log in to your client portal and make your first deposit today.</p>
        <a href="/portal" className="bg-white text-gold-600 font-semibold px-8 py-3 rounded-xl hover:bg-gray-100 transition-colors">Go to Client Portal</a>
      </section>
    </div>
  )
}
