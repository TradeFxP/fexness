import React from 'react'
import { ShieldCheck, FileText, AlertCircle, Lock, CheckCircle } from 'lucide-react'
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

const PILLARS = [
  { icon: ShieldCheck, title: 'ARCA Licensed', desc: 'Fexness is authorized and regulated by ARCA (Anguilla Regulatory and Compliance Authority), ensuring full compliance with international financial standards.' },
  { icon: Lock, title: 'Segregated Funds', desc: 'All client funds are held in segregated accounts at Tier-1 banks, completely separate from our operational funds.' },
  { icon: FileText, title: 'AML & KYC Policy', desc: 'We implement strict Anti-Money Laundering and Know Your Customer procedures to prevent financial crime and protect our platform.' },
  { icon: AlertCircle, title: 'Risk Disclosure', desc: 'We proactively disclose trading risks to all clients. CFDs are complex instruments and carry high risk of losing money rapidly.' },
]

const KYC_STEPS = [
  { step: '01', title: 'Create Account', desc: 'Provide your email and personal details to register.' },
  { step: '02', title: 'Verify Identity', desc: 'Upload a government-issued ID (passport, national ID or driver\'s license).' },
  { step: '03', title: 'Proof of Address', desc: 'Submit a utility bill or bank statement dated within 90 days.' },
  { step: '04', title: 'Account Approval', desc: 'Our compliance team reviews your documents within 24 hours and activates your account.' },
]

export default function Regulation() {
  return (
    <div>
      <PageHero
        title="Regulation & Security"
        subtitle="Your security is our top priority. Licensed, compliant, and transparent."
        image="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&h=600&fit=crop"
      />

      {/* Pillars */}
      <Section title="Regulatory Framework" subtitle="How we protect your funds and data">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PILLARS.map(({ icon: Icon, title, desc }, i) => (
            <RevealCard key={i} delay={i * 100}>
              <div className="bg-white rounded-2xl p-6 shadow-sm border card-hover h-full">
                <div className="inline-flex p-3 rounded-xl bg-gold-100 text-gold-600 mb-4">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-bold mb-2">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </div>
            </RevealCard>
          ))}
        </div>
      </Section>

      {/* License Info */}
      <Section title="Our License" gray>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <img src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop" alt="ARCA License" className="rounded-2xl shadow-lg" />
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">ARCA Regulation</h3>
            <p className="text-gray-500 leading-relaxed">
              Fexness operates under the regulatory oversight of ARCA (Anguilla Regulatory and Compliance Authority). 
              We adhere to strict international standards for financial services, ensuring transparency, security, and client protection.
            </p>
            {[
              'Licensed by ARCA',
              'Incorporated in Anguilla',
              'Annual independent audits',
              'Compliance officer on-staff',
              'Regular regulatory reporting',
              'International financial standards compliance',
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-gold-500 flex-shrink-0" />
                <span className="text-gray-700 text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* KYC Process */}
      <Section title="KYC Verification Process" subtitle="Simple, fast, and secure identity verification">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {KYC_STEPS.map((s, i) => (
            <RevealCard key={i} delay={i * 100}>
              <div className="text-center bg-gray-50 rounded-2xl p-6 border">
                <div className="text-5xl font-bold text-gold-600 mb-2">{s.step}</div>
                <h4 className="font-bold mb-2">{s.title}</h4>
                <p className="text-gray-500 text-sm">{s.desc}</p>
              </div>
            </RevealCard>
          ))}
        </div>
      </Section>

      {/* AML */}
      <Section title="AML Policy Highlights" gray>
        <div className="max-w-3xl mx-auto space-y-4">
          {[
            'We do not accept cash, anonymous, or third-party deposits.',
            'All transactions are monitored for suspicious activity patterns.',
            'Enhanced Due Diligence applied to high-risk client profiles.',
            'Mandatory reporting of suspicious transactions to regulatory authorities.',
            'Employees undergo regular AML/CTF training and certification.',
            'We reserve the right to freeze accounts pending AML investigations.',
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-3 bg-white rounded-xl p-4 border">
              <CheckCircle className="w-5 h-5 text-gold-500 mt-0.5 flex-shrink-0" />
              <span className="text-gray-700 text-sm">{item}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* Risk Warning */}
      <section className="bg-amber-50 border-t border-amber-200 py-8 px-4">
        <div className="max-w-4xl mx-auto flex gap-4 items-start">
          <AlertCircle className="w-6 h-6 text-amber-500 flex-shrink-0 mt-0.5" />
          <div>
            <h4 className="font-bold text-amber-800 mb-1">Risk Warning</h4>
            <p className="text-amber-700 text-sm leading-relaxed">
              Trading CFDs on forex, commodities, and indices involves a high level of risk and may not be suitable for all investors. Leverage can work against you. You could lose more than your initial deposit. Please ensure you fully understand the risks involved and seek independent advice if necessary.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
