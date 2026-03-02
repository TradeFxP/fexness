import React from 'react'
import { BookOpen, Video, FileText, TrendingUp, ArrowRight } from 'lucide-react'
import PageHero from '../components/PageHero'
import Section from '../components/Section'
import useScrollReveal from '../hooks/useScrollReveal'

const COURSES = [
  { icon: BookOpen, title: 'Beginner Track', lessons: 12, desc: 'What is forex? How to read charts? Place your first trade.', img: 'https://picsum.photos/seed/edu1/800/500' },
  { icon: TrendingUp, title: 'Technical Analysis', lessons: 18, desc: 'Support & resistance, indicators, candlestick patterns.', img: 'https://picsum.photos/seed/edu2/800/500' },
  { icon: FileText, title: 'Risk Management', lessons: 8, desc: 'Position sizing, stop losses, risk-to-reward ratios.', img: 'https://picsum.photos/seed/edu3/800/500' },
  { icon: Video, title: 'Live Webinars', lessons: 4, desc: 'Monthly live sessions with experienced market analysts.', img: 'https://picsum.photos/seed/edu4/800/500' },
]

function RevealCard({ children, delay = 0 }) {
  const ref = useScrollReveal()
  return (
    <div ref={ref} className="reveal" style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  )
}

export default function Education() {
  return (
    <div>
      <PageHero
        title="Learn Trading Step-by-Step"
        subtitle="Free courses, webinars, and guides — built for all skill levels."
        image="https://picsum.photos/seed/education/1200/600"
      />
      <Section title="Education Hub" subtitle="Structured learning paths to take you from beginner to confident trader.">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {COURSES.map((c, i) => {
            const Icon = c.icon
            return (
              <RevealCard key={i} delay={i * 80}>
                <div className="rounded-2xl overflow-hidden border card-hover bg-white">
                  <img src={c.img} alt={c.title} className="w-full h-40 object-cover" />
                  <div className="p-5">
                    <div className="flex items-center gap-2 mb-2">
                      <Icon className="w-5 h-5 text-primary" />
                      <span className="text-xs text-muted">{c.lessons} Lessons</span>
                    </div>
                    <h3 className="font-extrabold">{c.title}</h3>
                    <p className="text-muted text-sm mt-1">{c.desc}</p>
                    <button className="mt-4 flex items-center gap-1 text-primary text-sm font-semibold hover:underline">
                      Start Course <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </RevealCard>
            )
          })}
        </div>
      </Section>

      {/* CTA */}
      <div className="bg-primary py-12 text-white text-center">
        <h3 className="text-2xl font-extrabold">Start the Beginner Track — It's Free</h3>
        <p className="text-white/80 mt-2">No sign-up required for basic lessons.</p>
        <button className="mt-4 bg-white text-primary px-8 py-3 rounded-xl font-bold">Start Learning</button>
      </div>
    </div>
  )
}
