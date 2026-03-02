import React, { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'
import PageHero from '../components/PageHero'
import Section from '../components/Section'

const FAQS = [
  { q: 'How do I open an account?', a: 'Click "Open Account", fill in your details, complete KYC verification, and make your first deposit. The whole process takes about 5 minutes.' },
  { q: 'What documents do I need for verification?', a: 'A government-issued ID (passport or national ID) and a proof of address document (utility bill or bank statement) dated within 3 months.' },
  { q: 'What is the minimum deposit?', a: 'The minimum deposit for a Classic account is $100. For Premium it is $1,000, ECN $3,000 and Islamic $2,000.' },
  { q: 'What leverage is available?', a: 'We offer leverage up to 1:300 on forex and metals depending on your account type and regulatory jurisdiction.' },
  { q: 'What are the typical spreads?', a: 'Classic accounts start from 2.1 pips, Premium from 1.5 pips, and ECN from 0.3 pips on EUR/USD.' },
  { q: 'How long do withdrawals take?', a: 'Most withdrawals are processed within 24 hours on business days. E-wallets are typically instant; bank transfers take 2–5 business days.' },
  { q: 'Do you charge swap on overnight positions?', a: 'Standard accounts charge swap. Our Islamic account is completely swap-free for clients of Islamic faith.' },
  { q: 'How do I install MT5?', a: 'Download MT5 from our Platforms page or MetaQuotes website. Enter your account server and credentials provided in your welcome email.' },
  { q: 'What are your support hours?', a: 'We provide 24/5 live chat and email support, Monday through Friday. Our team is available in multiple languages.' },
]

function AccordionItem({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b last:border-0">
      <button
        className="w-full flex justify-between items-center py-4 text-left font-semibold hover:text-primary transition-colors"
        onClick={() => setOpen(v => !v)}
      >
        {q}
        {open ? <ChevronUp className="w-5 h-5 flex-shrink-0 text-primary" /> : <ChevronDown className="w-5 h-5 flex-shrink-0 text-muted" />}
      </button>
      {open && <p className="pb-4 text-muted text-sm leading-relaxed">{a}</p>}
    </div>
  )
}

export default function FAQ() {
  return (
    <div>
      <PageHero
        title="Quick Answers"
        subtitle="Most common questions about accounts, trading, and payments."
        image="https://picsum.photos/seed/faq/1200/600"
      />
      <Section title="Frequently Asked Questions">
        <div className="max-w-3xl mx-auto bg-white border rounded-2xl p-6 shadow-sm">
          {FAQS.map((f, i) => <AccordionItem key={i} q={f.q} a={f.a} />)}
        </div>
      </Section>
    </div>
  )
}
