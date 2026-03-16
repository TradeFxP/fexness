import React from 'react'
import { Briefcase, Globe, TrendingUp, Users, Heart, Award, MapPin, ArrowRight, Shield, Laptop, DollarSign, GraduationCap, Target, Plane, Calendar, PartyPopper } from 'lucide-react'
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

const POSITIONS = [
  {
    title: 'Forex Trading Analyst',
    department: 'Market Research',
    location: 'London, UK / Remote',
    type: 'Full-Time',
    icon: TrendingUp,
    description: 'Analyze currency pairs, provide market insights, and create daily/weekly trading signals for our client base.',
  },
  {
    title: 'Risk Management Specialist',
    department: 'Risk & Compliance',
    location: 'New York, USA',
    type: 'Full-Time',
    icon: Award,
    description: 'Monitor trading activities, manage exposure limits, and ensure adherence to risk management protocols.',
  },
  {
    title: 'MetaTrader Platform Developer',
    department: 'Technology',
    location: 'Remote',
    type: 'Full-Time',
    icon: Briefcase,
    description: 'Develop and maintain MT5 platform integrations, custom indicators, and Expert Advisors (EAs).',
  },
  {
    title: 'Account Manager - Forex Sales',
    department: 'Sales & Client Relations',
    location: 'London, UK',
    type: 'Full-Time',
    icon: Users,
    description: 'Build relationships with high-value traders, provide personalized support, and drive account growth.',
  },
  {
    title: 'Trading Operations Manager',
    department: 'Operations',
    location: 'Anguilla / Remote',
    type: 'Full-Time',
    icon: Globe,
    description: 'Oversee daily trading operations, manage liquidity providers, and ensure seamless execution.',
  },
  {
    title: 'KYC/AML Compliance Officer',
    department: 'Compliance',
    location: 'Remote',
    type: 'Full-Time',
    icon: Award,
    description: 'Conduct client verification, monitor suspicious activities, and ensure regulatory compliance.',
  },
  {
    title: 'Forex Educator / Content Creator',
    department: 'Education & Marketing',
    location: 'Remote',
    type: 'Full-Time / Contract',
    icon: Briefcase,
    description: 'Create educational content, webinars, and trading courses for beginner to advanced traders.',
  },
  {
    title: 'Payment Processing Specialist',
    department: 'Finance',
    location: 'Remote',
    type: 'Full-Time',
    icon: Users,
    description: 'Manage deposits/withdrawals, payment gateway integrations, and resolve transaction issues.',
  },
  {
    title: 'Social Trading Product Manager',
    department: 'Product Development',
    location: 'London, UK / Remote',
    type: 'Full-Time',
    icon: TrendingUp,
    description: 'Lead copy trading and social trading feature development, analyze user behavior and market trends.',
  },
  {
    title: 'Customer Support Representative',
    department: 'Client Support',
    location: 'Remote (Multiple Time Zones)',
    type: 'Full-Time / Shift-Based',
    icon: Heart,
    description: 'Provide 24/7 multilingual support to traders via live chat, email, and phone across all time zones.',
  },
  {
    title: 'Liquidity Manager',
    department: 'Trading Operations',
    location: 'London, UK',
    type: 'Full-Time',
    icon: Globe,
    description: 'Manage relationships with liquidity providers, optimize pricing spreads, and ensure best execution.',
  },
  {
    title: 'Financial Compliance Analyst',
    department: 'Legal & Regulatory',
    location: 'Anguilla',
    type: 'Full-Time',
    icon: Award,
    description: 'Ensure compliance with international financial regulations, prepare regulatory reports and audits.',
  },
]

const VALUES = [
  {
    icon: TrendingUp,
    title: 'Innovation First',
    desc: 'We embrace cutting-edge technology and creative solutions to stay ahead in the fast-paced trading industry.',
  },
  {
    icon: Users,
    title: 'Team Collaboration',
    desc: 'We believe in the power of teamwork. Success is built together, not alone.',
  },
  {
    icon: Award,
    title: 'Excellence & Integrity',
    desc: 'We maintain the highest standards of professionalism and ethical conduct in everything we do.',
  },
  {
    icon: Heart,
    title: 'Work-Life Balance',
    desc: 'We value our team members\' well-being with flexible hours, remote work options, and generous time off.',
  },
]

const BENEFITS = [
  {
    icon: Shield,
    title: 'Comprehensive health insurance',
  },
  {
    icon: DollarSign,
    title: 'Competitive salary & performance bonuses',
  },
  {
    icon: Laptop,
    title: 'Remote work opportunities',
  },
  {
    icon: GraduationCap,
    title: 'Professional development & training',
  },
  {
    icon: Target,
    title: 'Career growth paths',
  },
  {
    icon: Plane,
    title: 'Generous paid time off',
  },
  {
    icon: Laptop,
    title: 'Latest tech & equipment',
  },
  {
    icon: PartyPopper,
    title: 'Team events & activities',
  },
]

export default function Careers() {
  return (
    <div>
      <PageHero
        title="Join the Fexness Team"
        subtitle="Build your career in the exciting world of forex trading. Work with talented people, cutting-edge technology, and global markets."
        image="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&h=600&fit=crop"
      />

      {/* Why Join Fexness */}
      <Section title="Why Work at Fexness?" subtitle="We're building the future of trading together">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {VALUES.map((value, i) => {
            const Icon = value.icon
            return (
              <RevealCard key={i} delay={i * 100}>
                <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all border border-gray-100 h-full flex flex-col">
                  <div className="w-12 h-12 bg-gold-100 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-gold-600" />
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-gray-800">{value.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed flex-grow">{value.desc}</p>
                </div>
              </RevealCard>
            )
          })}
        </div>
      </Section>

      {/* Benefits */}
      <Section title="Benefits & Perks" subtitle="We take care of our team" gray>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {BENEFITS.map((benefit, i) => {
            const Icon = benefit.icon
            return (
              <RevealCard key={i} delay={i * 50}>
                <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all border border-gray-100 h-full flex flex-col">
                  <div className="w-12 h-12 bg-gold-100 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-gold-600" />
                  </div>
                  <p className="text-gray-700 font-medium text-sm flex-grow">{benefit.title}</p>
                </div>
              </RevealCard>
            )
          })}
        </div>
      </Section>

      {/* Open Positions */}
      <Section title="Open Positions" subtitle="Find your perfect role in forex trading">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {POSITIONS.map((position, i) => {
            const Icon = position.icon
            return (
              <RevealCard key={i} delay={i * 100}>
                <div className="bg-white rounded-2xl p-6 border-2 border-gray-200 hover:border-gold-500 transition-all shadow-sm hover:shadow-xl flex flex-col h-full">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 bg-gold-100 rounded-xl flex-shrink-0">
                      <Icon className="w-6 h-6 text-gold-600" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-lg text-gray-800 mb-1 line-clamp-2">{position.title}</h3>
                      <div className="flex flex-wrap gap-2 text-xs text-gray-600">
                        <span className="flex items-center gap-1">
                          <Briefcase className="w-3 h-3 flex-shrink-0" /> {position.department}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed flex-grow">{position.description}</p>
                  
                  <div className="flex items-center justify-between pt-4 border-t mt-auto">
                    <span className="text-xs font-semibold text-gold-600 bg-gold-100 px-3 py-1 rounded-full">
                      {position.type}
                    </span>
                    <a 
                      href="mailto:career@fexness.com" 
                      className="flex items-center gap-2 text-gold-600 hover:text-gold-700 font-semibold text-sm transition-colors"
                    >
                      Apply Now <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </RevealCard>
            )
          })}
        </div>
      </Section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-gold-600 to-gold-800 text-white py-20">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-black mb-4">Don't See a Perfect Match?</h2>
          <p className="text-gold-100 text-lg mb-8 leading-relaxed">
            We're always looking for talented individuals. Send us your resume and let's talk about future opportunities.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a 
              href="mailto:career@fexness.com" 
              className="bg-white text-gold-600 font-bold px-8 py-4 rounded-xl hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl"
            >
              Send Your Resume
            </a>
            <a 
              href="/contact" 
              className="border-2 border-white text-white font-bold px-8 py-4 rounded-xl hover:bg-white/10 transition-all"
            >
              Contact HR Team
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
