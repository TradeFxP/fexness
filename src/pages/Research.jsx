import React from 'react'
import { Newspaper, TrendingUp, Calendar } from 'lucide-react'
import PageHero from '../components/PageHero'
import Section from '../components/Section'

const ARTICLES = [
  { tag: 'Morning Outlook', title: 'EUR/USD eyes 1.09 as USD weakens on Fed pivot hopes', date: 'Feb 27, 2026', img: 'https://picsum.photos/seed/news1/800/500' },
  { tag: 'Weekly Wrap', title: 'Gold posts 3rd consecutive weekly gain amid risk-off flows', date: 'Feb 24, 2026', img: 'https://picsum.photos/seed/news2/800/500' },
  { tag: 'Analyst Notes', title: 'OPEC+ output cut signals higher oil through Q2 2026', date: 'Feb 23, 2026', img: 'https://picsum.photos/seed/news3/800/500' },
  { tag: 'Major Events', title: 'US NFP beats forecast — DXY jumps 0.6% on labour strength', date: 'Feb 22, 2026', img: 'https://picsum.photos/seed/news4/800/500' },
  { tag: 'Strategy', title: 'How to trade the FOMC: tips from our senior analyst', date: 'Feb 20, 2026', img: 'https://picsum.photos/seed/news5/800/500' },
  { tag: 'Technical', title: 'GBP/JPY breaks key resistance — next target 195.00?', date: 'Feb 19, 2026', img: 'https://picsum.photos/seed/news6/800/500' },
]

export default function Research() {
  return (
    <div>
      <PageHero
        title="Daily Market Updates"
        subtitle="Morning outlooks, weekly wraps, analyst notes — all in one place."
        image="https://picsum.photos/seed/research/1200/600"
      />
      <Section title="Research & News" subtitle="Stay ahead of global market movements.">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {ARTICLES.map((a, i) => (
            <div key={i} className="rounded-2xl overflow-hidden border card-hover bg-white">
              <img src={a.img} alt={a.title} className="w-full h-44 object-cover" />
              <div className="p-5">
                <span className="inline-block bg-primary/10 text-primary text-xs font-bold px-2 py-0.5 rounded-full mb-2">{a.tag}</span>
                <h3 className="font-bold leading-snug">{a.title}</h3>
                <p className="text-muted text-xs mt-2">{a.date}</p>
                <button className="mt-3 text-primary text-sm font-semibold hover:underline">Read more →</button>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </div>
  )
}
