import React from 'react'
import { Monitor, Smartphone, BarChart2, Bell, Layers, Zap } from 'lucide-react'
import PageHero from '../components/PageHero'
import Section from '../components/Section'
import useScrollReveal from '../hooks/useScrollReveal'

const PLATFORMS = [
  {
    icon: Monitor,
    name: 'Web Platform',
    desc: 'Trade directly from your browser — no download needed. Full charting, one-tap execution, live news.',
    img: 'https://picsum.photos/seed/web-platform/800/500',
    badge: 'No Download',
  },
  {
    icon: Smartphone,
    name: 'Mobile Apps',
    desc: 'iOS & Android apps built for speed. Biometric login, push alerts, and full account management on-the-go.',
    img: 'https://picsum.photos/seed/mobile-app/800/500',
    badge: 'iOS & Android',
  },
  {
    icon: BarChart2,
    name: 'MetaTrader 5 (MT5)',
    desc: 'Industry-standard platform. 100+ indicators, Expert Advisors, multi-asset trading, and deep backtesting.',
    img: 'https://picsum.photos/seed/mt5/800/500',
    badge: 'Most Popular',
  },
]

const FEATURES = [
  { icon: Zap, label: 'One-tap Trading' },
  { icon: Bell, label: 'Price Alerts' },
  { icon: Layers, label: 'Advanced Charts' },
  { icon: BarChart2, label: 'Multiple Order Types' },
  { icon: Monitor, label: 'Multi-screen Support' },
  { icon: Smartphone, label: 'Cross-device Sync' },
]

export default function Platforms() {
  return (
    <div>
      <PageHero
        title="Choose How You Trade"
        subtitle="Web, mobile, or MT5 — professional tools on every device."
        image="https://picsum.photos/seed/platform/1200/600"
      />
      <Section title="Our Trading Platforms" subtitle="Pick the platform that suits your trading style.">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PLATFORMS.map((p, i) => {
            const Icon = p.icon
            return (
              <div key={i} className="rounded-2xl overflow-hidden border card-hover bg-white">
                <div className="relative">
                  <img src={p.img} alt={p.name} className="w-full h-44 object-cover" />
                  <span className="absolute top-3 right-3 bg-primary text-white text-xs px-2.5 py-1 rounded-full font-semibold">{p.badge}</span>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary"><Icon className="w-5 h-5" /></div>
                    <h3 className="font-extrabold text-lg">{p.name}</h3>
                  </div>
                  <p className="text-muted text-sm">{p.desc}</p>
                  <button className="mt-4 btn-primary px-4 py-2 rounded-lg text-sm w-full font-semibold">Download / Launch</button>
                </div>
              </div>
            )
          })}
        </div>
      </Section>

      <Section gray title="Key Platform Features">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {FEATURES.map((f, i) => {
            const Icon = f.icon
            return (
              <div key={i} className="flex flex-col items-center gap-2 p-4 bg-white rounded-xl border text-center card-hover">
                <Icon className="w-7 h-7 text-primary" />
                <span className="text-xs font-semibold">{f.label}</span>
              </div>
            )
          })}
        </div>
      </Section>
    </div>
  )
}
