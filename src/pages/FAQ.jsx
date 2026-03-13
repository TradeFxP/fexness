import React, { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'
import PageHero from '../components/PageHero'
import Section from '../components/Section'

const FAQS = [
  { q: 'How do I open an account?', a: 'Click "Open Account", fill in your details, complete KYC verification, and make your first deposit. The whole process takes about 5 minutes.' },
  { q: 'What documents do I need for verification?', a: 'A government-issued ID (passport or national ID) and a proof of address document (utility bill or bank statement) dated within 3 months.' },
  { q: 'What is the minimum deposit?', a: 'Minimum deposits vary by account: Classic $10, Islamic $50, Standard $100, ECN $200, Premium $500, and Signature $5,000.' },
  { q: 'What leverage is available?', a: 'Leverage varies by account type: Classic 1:300, Islamic 1:500, Standard/Premium 1:1000, ECN 1:200, and Signature offers unlimited leverage.' },
  { q: 'What are the typical spreads?', a: 'Spreads vary by account: Classic from 0.2 pips, Standard/Islamic from 0.16 pips, Premium from 0.06 pips, ECN from 0.00 pips, and Signature has no spread.' },
  { q: 'What are the commission charges?', a: 'Standard and Premium accounts: $3.5 per lot. ECN account: $3.5 per lot per side. Signature: $3.5 per lot. Classic and Islamic have no commission.' },
  { q: 'How does the 50% bonus work?', a: 'Get 50% bonus on deposits. Requires 3 lots trading to activate. Must complete 10 lots trading volume before withdrawal. Bonus is not withdrawable but can be used for trading.' },
  { q: 'How long do withdrawals take?', a: 'Withdrawals are processed after completing minimum trading volume requirements. 5 lots minimum required in certain promotion cases. Processing time is typically 24 hours on business days.' },
  { q: 'What is the referral commission?', a: 'Earn $12 commission per lot traded by your referrals. Processing time is 2 business days. Commission credited once trading volume conditions are met.' },
  { q: 'Do you charge swap on overnight positions?', a: 'Islamic and Signature accounts are swap-free. Other accounts charge standard swap rates on overnight positions.' },
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
