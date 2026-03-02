import React from 'react'
import PageHero from '../components/PageHero'
import Section from '../components/Section'

const POSTS = [
  { tag: 'Strategy', title: '5 Price Action Setups Every Trader Should Know', date: 'Feb 26, 2026', img: 'https://picsum.photos/seed/blog1/800/500', read: '5 min' },
  { tag: 'Platform Tips', title: 'How to Set Alerts in MT5 — Step-by-Step Guide', date: 'Feb 24, 2026', img: 'https://picsum.photos/seed/blog2/800/500', read: '3 min' },
  { tag: 'Withdrawals', title: 'Complete Guide to Withdrawing from Fexness', date: 'Feb 22, 2026', img: 'https://picsum.photos/seed/blog3/800/500', read: '4 min' },
  { tag: 'Education', title: 'Understanding Leverage: a Beginner Guide', date: 'Feb 20, 2026', img: 'https://picsum.photos/seed/blog4/800/500', read: '6 min' },
  { tag: 'Broker Updates', title: 'Fexness Adds New Islamic Account Tier', date: 'Feb 18, 2026', img: 'https://picsum.photos/seed/blog5/800/500', read: '2 min' },
  { tag: 'Psychology', title: 'Why 90% of Traders Lose — and How to Be Different', date: 'Feb 15, 2026', img: 'https://picsum.photos/seed/blog6/800/500', read: '7 min' },
]

export default function Blog() {
  return (
    <div>
      <PageHero
        title="Real Trading Insights, No Fluff"
        subtitle="Strategies, platform tips, withdrawal guides, and broker announcements."
        image="https://picsum.photos/seed/blog/1200/600"
      />
      <Section title="Latest Posts">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {POSTS.map((p, i) => (
            <div key={i} className="rounded-2xl overflow-hidden border card-hover bg-white">
              <img src={p.img} alt={p.title} className="w-full h-44 object-cover" />
              <div className="p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="bg-primary/10 text-primary text-xs font-bold px-2 py-0.5 rounded-full">{p.tag}</span>
                  <span className="text-xs text-muted">{p.read} read</span>
                </div>
                <h3 className="font-bold leading-snug">{p.title}</h3>
                <p className="text-muted text-xs mt-2">{p.date}</p>
                <button className="mt-3 text-primary text-sm font-semibold hover:underline">Read article →</button>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </div>
  )
}
