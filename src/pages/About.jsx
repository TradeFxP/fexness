import React from 'react'
import { Users, Globe, Award, TrendingUp, CheckCircle } from 'lucide-react'
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

const STATS = [
  { icon: Users, value: '200,000+', label: 'Active Traders' },
  { icon: Globe, value: '180+', label: 'Countries Served' },
  { icon: Award, value: '15+', label: 'Industry Awards' },
  { icon: TrendingUp, value: '$2.5B+', label: 'Monthly Volume' },
]

const MILESTONES = [
  { year: '2012', title: 'Founded in Dubai', desc: 'Fexness was established in the heart of the UAE financial hub with a vision to democratize forex trading.' },
  { year: '2015', title: 'FSRC Regulation', desc: 'Received regulatory authorization from the Financial Services Regulatory Commission of Saint Lucia.' },
  { year: '2018', title: 'Launched MT5 Platform', desc: 'Integrated MetaTrader 5 giving traders access to advanced charting and algorithmic tools.' },
  { year: '2020', title: '100K Milestone', desc: 'Celebrated 100,000 registered clients across 150 countries worldwide.' },
  { year: '2022', title: 'Copy Trading Launch', desc: 'Introduced the Copy Trading feature allowing beginners to mirror top-performing traders.' },
  { year: '2024', title: 'Global Expansion', desc: 'Opened new regional offices and onboarded over 200,000 active traders globally.' },
]

const TEAM = [
  { name: 'James Al-Farsi', role: 'Chief Executive Officer', img: 'https://picsum.photos/seed/ceo/200/200' },
  { name: 'Sarah Nkomo', role: 'Chief Operating Officer', img: 'https://picsum.photos/seed/coo/200/200' },
  { name: 'David Chen', role: 'Chief Technology Officer', img: 'https://picsum.photos/seed/cto/200/200' },
  { name: 'Priya Sharma', role: 'Head of Compliance', img: 'https://picsum.photos/seed/compliance/200/200' },
]

export default function About() {
  return (
    <div>
      <PageHero
        title="About Fexness"
        subtitle="Building trust in forex trading since 2012. Regulated, transparent, and client-first."
        image="https://picsum.photos/seed/about/1200/600"
      />

      {/* Stats */}
      <Section gray>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {STATS.map(({ icon: Icon, value, label }, i) => (
            <RevealCard key={i} delay={i * 100}>
              <div className="text-center bg-white rounded-2xl p-6 shadow-sm card-hover">
                <div className="inline-flex p-3 rounded-xl bg-gold-100 text-gold-600 mb-3">
                  <Icon className="w-6 h-6" />
                </div>
                <div className="text-3xl font-bold text-gold-600">{value}</div>
                <div className="text-gray-500 text-sm mt-1">{label}</div>
              </div>
            </RevealCard>
          ))}
        </div>
      </Section>

      {/* Mission */}
      <Section title="Our Mission & Vision">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <img src="https://picsum.photos/seed/mission/700/450" alt="Mission" className="rounded-2xl shadow-lg w-full object-cover" />
          </div>
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Empowering Every Trader</h3>
            <p className="text-gray-500 leading-relaxed">
              At Fexness, we believe that access to global financial markets should be available to everyone — from first-time investors to professional fund managers. Our mission is to provide the most transparent, cost-efficient, and technologically advanced trading environment.
            </p>
            {['Regulated by FSRC Saint Lucia', 'Segregated client funds', 'Competitive spreads from 0.0 pips', 'Multi-asset trading on one platform', 'Award-winning 24/5 customer support'].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-gold-500 flex-shrink-0" />
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Timeline */}
      <Section title="Our Journey" subtitle="From startup to global broker — key milestones" gray>
        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-1/2 -translate-x-0.5 w-0.5 bg-gold-200 h-full top-0" />
          {MILESTONES.map((m, i) => (
            <RevealCard key={i} delay={i * 80}>
              <div className={`flex items-start gap-6 mb-10 ${i % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                <div className="w-1/2 text-right pr-8">
                  {i % 2 === 0 && (
                    <div className="bg-white rounded-2xl p-5 shadow-sm">
                      <span className="text-gold-600 font-bold text-sm">{m.year}</span>
                      <h4 className="font-bold mt-1">{m.title}</h4>
                      <p className="text-gray-500 text-sm mt-1">{m.desc}</p>
                    </div>
                  )}
                </div>
                <div className="w-8 h-8 rounded-full bg-gold-500 text-white flex items-center justify-center z-10 font-bold text-xs flex-shrink-0 mt-1">
                  {i + 1}
                </div>
                <div className="w-1/2 pl-8">
                  {i % 2 !== 0 && (
                    <div className="bg-white rounded-2xl p-5 shadow-sm">
                      <span className="text-gold-600 font-bold text-sm">{m.year}</span>
                      <h4 className="font-bold mt-1">{m.title}</h4>
                      <p className="text-gray-500 text-sm mt-1">{m.desc}</p>
                    </div>
                  )}
                </div>
              </div>
            </RevealCard>
          ))}
        </div>
      </Section>

      {/* Team */}
      <Section title="Meet the Leadership" subtitle="Experienced professionals driving Fexness forward">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {TEAM.map((member, i) => (
            <RevealCard key={i} delay={i * 100}>
              <div className="text-center card-hover bg-white rounded-2xl p-5 shadow-sm border">
                <img src={member.img} alt={member.name} className="w-20 h-20 rounded-full mx-auto object-cover mb-3" />
                <h4 className="font-bold">{member.name}</h4>
                <p className="text-gold-600 text-sm mt-0.5">{member.role}</p>
              </div>
            </RevealCard>
          ))}
        </div>
      </Section>
    </div>
  )
}
