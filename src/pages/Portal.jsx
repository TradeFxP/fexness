import React from 'react'
import { LayoutDashboard, TrendingUp, CreditCard, BookOpen, Users, Bell, Settings, ArrowRight, CheckCircle } from 'lucide-react'
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

const MODULES = [
  { icon: LayoutDashboard, title: 'Dashboard', desc: 'Real-time overview of your account balance, equity, free margin, and open positions.' },
  { icon: TrendingUp, title: 'Trading History', desc: 'Full history of all trades with P&L analysis, filters by instrument, date, and account.' },
  { icon: CreditCard, title: 'Deposit & Withdraw', desc: 'Instant deposits and seamless withdrawals through 8+ payment methods.' },
  { icon: BookOpen, title: 'Documents', desc: 'Upload and manage KYC documents. Track verification status in real time.' },
  { icon: Users, title: 'IB Management', desc: 'IBs can manage referred clients, track volumes, and view commission reports.' },
  { icon: Bell, title: 'Notifications', desc: 'Get alerts for deposits, withdrawals, trade confirmations, and account updates.' },
  { icon: Settings, title: 'Account Settings', desc: 'Manage trading accounts, change leverage, update profile, and password.' },
  { icon: TrendingUp, title: 'Copy Trading', desc: 'Discover, copy, and manage signal providers directly from your portal.' },
]

export default function Portal() {
  return (
    <div>
      <PageHero
        title="Client Portal"
        subtitle="Your all-in-one hub for trading, funding, and account management."
        image="https://picsum.photos/seed/portal/1200/600"
      />

      {/* Portal Preview */}
      <Section title="Portal Overview" subtitle="Everything you need, in one secure dashboard">
        <div className="grid md:grid-cols-2 gap-10 items-center mb-12">
          <img
            src="https://picsum.photos/seed/dashboard/700/450"
            alt="Portal Dashboard"
            className="rounded-2xl shadow-xl border w-full"
          />
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Manage Everything in One Place</h3>
            <p className="text-gray-500 leading-relaxed">
              The Fexness Client Portal is your secure hub for managing your trading accounts, funds, documents, and partnerships. It's designed for simplicity without sacrificing power.
            </p>
            {[
              'Access from any device — desktop, tablet, mobile',
              'Secure login with 2-Factor Authentication',
              'Real-time balance and trade monitoring',
              'Instant deposit and withdrawal processing',
              'Complete KYC and document management',
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-gold-500 flex-shrink-0" />
                <span className="text-gray-700 text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {MODULES.map(({ icon: Icon, title, desc }, i) => (
            <RevealCard key={i} delay={i * 60}>
              <div className="bg-gray-50 rounded-2xl p-5 border card-hover h-full">
                <div className="inline-flex p-3 rounded-xl bg-gold-100 text-gold-600 mb-3">
                  <Icon className="w-5 h-5" />
                </div>
                <h4 className="font-bold mb-1">{title}</h4>
                <p className="text-gray-500 text-sm">{desc}</p>
              </div>
            </RevealCard>
          ))}
        </div>
      </Section>

      {/* CTA Banner */}
      <section className="bg-gradient-to-r from-gold-600 to-gold-800 text-white py-16">
        <div className="max-w-3xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold mb-4">Ready to Access Your Portal?</h2>
          <p className="text-gold-100 mb-8">Already a client? Log in to your secure client area. New here? Register in minutes.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="https://portal.fexness.com/login" className="flex items-center gap-2 bg-white text-gold-600 font-semibold px-8 py-3 rounded-xl hover:bg-gray-100 transition-colors">
              Sign In <ArrowRight className="w-4 h-4" />
            </a>
            <a href="https://portal.fexness.com/signup" className="flex items-center gap-2 border border-white text-white font-semibold px-8 py-3 rounded-xl hover:bg-gold-700 transition-colors">
              Create Account <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
