import React from 'react'
import { TrendingUp, DollarSign, Target, Zap, CheckCircle, Users, BarChart2, Award } from 'lucide-react'
import PageHero from '../components/PageHero'
import Section from '../components/Section'
import useScrollReveal from '../hooks/useScrollReveal'

const PROP_TRADING_VIDEO = {
  id: 1,
  title: 'Proprietary Trading Explained',
  desc: 'Learn how prop trading works and how to become a funded trader',
  videoSrc: '/videos/prop-trading/prop-trading-1.mp4',
  thumbnail: 'https://images.unsplash.com/photo-1642790106117-e829e14a795f?w=800&h=500&fit=crop'
}

const FEATURES = [
  { icon: DollarSign, title: 'Trade with Our Capital', desc: 'Access up to $200,000 in trading capital after passing our evaluation' },
  { icon: Target, title: 'Keep Up to 80% Profits', desc: 'Earn substantial profit splits from your successful trades' },
  { icon: Zap, title: 'Fast Evaluation Process', desc: 'Complete challenges and get funded in as little as 2 weeks' },
  { icon: Award, title: 'No Personal Risk', desc: 'Trade risk-free with firm capital - your personal funds stay protected' },
]

const EVALUATION_STEPS = [
  { 
    step: '01', 
    title: 'Choose Your Challenge', 
    desc: 'Select your account size from $10K to $200K and purchase the evaluation challenge',
    icon: Target
  },
  { 
    step: '02', 
    title: 'Pass Phase 1 & 2', 
    desc: 'Meet profit targets while following risk management rules in two evaluation phases',
    icon: BarChart2
  },
  { 
    step: '03', 
    title: 'Get Funded', 
    desc: 'Once you pass, receive your funded account and start earning real profits',
    icon: DollarSign
  },
  { 
    step: '04', 
    title: 'Trade & Withdraw', 
    desc: 'Execute your strategy with firm capital and withdraw profits on demand',
    icon: TrendingUp
  },
]

const BENEFITS = [
  'No monthly fees after getting funded',
  'Unlimited trading period once funded',
  'Trade multiple asset classes (Forex, Indices, Commodities)',
  'Flexible trading styles allowed (swing, day, scalping)',
  'Instant funding after passing evaluation',
  'Bi-weekly profit withdrawals',
  'Free retakes on evaluation challenges',
  'Personal trading coach support',
  '24/7 platform access',
  'Professional trading tools included',
]

function RevealCard({ children, delay = 0 }) {
  const ref = useScrollReveal()
  return (
    <div ref={ref} className="reveal" style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  )
}

export default function PropTrading() {
  return (
    <div>
      <PageHero
        title="Proprietary Trading Program"
        subtitle="Trade with our capital and keep up to 80% of the profits. No personal risk."
        image="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1200&h=600&fit=crop"
      />

      {/* Stats */}
      <Section gray>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: Users, label: 'Funded Traders', value: '2,500+' },
            { icon: DollarSign, label: 'Max Funding', value: '$200K' },
            { icon: TrendingUp, label: 'Profit Split', value: 'Up to 80%' },
            { icon: Award, label: 'Success Rate', value: '68%' },
          ].map(({ icon: Icon, label, value }, i) => (
            <RevealCard key={i} delay={i * 80}>
              <div className="text-center bg-white rounded-2xl p-6 shadow-sm card-hover">
                <div className="inline-flex p-3 rounded-xl bg-green-100 text-green-600 mb-3">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="text-2xl font-bold text-green-600">{value}</div>
                <div className="text-gray-500 text-sm mt-1">{label}</div>
              </div>
            </RevealCard>
          ))}
        </div>
      </Section>

      {/* Prop Trading Video Tutorial */}
      <Section 
        title="Understanding Prop Trading" 
        subtitle="Watch this comprehensive guide to learn how proprietary trading works and how you can get funded."
        className="bg-gradient-to-b from-white to-gray-50"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <RevealCard delay={50}>
            <div className="group rounded-xl overflow-hidden border border-gray-200 card-hover bg-white shadow-md hover:shadow-xl transition-all duration-300 flex flex-col h-full">
              <div className="relative h-48 bg-gray-900 overflow-hidden flex-shrink-0">
                <video 
                  controls 
                  className="w-full h-full object-cover"
                  poster={PROP_TRADING_VIDEO.thumbnail}
                >
                  <source src={PROP_TRADING_VIDEO.videoSrc} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              </div>
              <div className="p-4 flex flex-col flex-grow">
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex items-center justify-center w-7 h-7 rounded-full bg-gradient-to-br from-green-400 to-green-600 text-white text-xs font-bold">
                    {PROP_TRADING_VIDEO.id}
                  </div>
                  <span className="text-xs text-green-600 font-semibold uppercase tracking-wide">Featured Tutorial</span>
                </div>
                <h3 className="font-bold text-base text-gray-900 mb-2 group-hover:text-green-600 transition-colors line-clamp-2">
                  {PROP_TRADING_VIDEO.title}
                </h3>
                <p className="text-gray-600 text-xs leading-relaxed line-clamp-2">
                  {PROP_TRADING_VIDEO.desc}
                </p>
              </div>
            </div>
          </RevealCard>
        </div>
      </Section>

      {/* Why Choose Our Prop Program */}
      <Section title="Why Trade with Our Capital?" gray>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURES.map((feature, i) => {
            const Icon = feature.icon
            return (
              <RevealCard key={i} delay={i * 80}>
                <div className="bg-white rounded-2xl p-6 border card-hover h-full">
                  <div className="inline-flex p-3 rounded-xl bg-green-100 text-green-600 mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.desc}</p>
                </div>
              </RevealCard>
            )
          })}
        </div>
      </Section>

      {/* How to Get Funded */}
      <Section title="How to Get Funded" subtitle="Four simple steps to trading with our capital">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {EVALUATION_STEPS.map((step, i) => {
            const Icon = step.icon
            return (
              <RevealCard key={i} delay={i * 100}>
                <div className="text-center bg-gradient-to-br from-green-50 to-white rounded-2xl p-8 border-2 border-green-100 card-hover h-full flex flex-col">
                  <div className="text-5xl font-bold text-green-100 mb-4">{step.step}</div>
                  <div className="inline-flex p-3 rounded-xl bg-green-100 text-green-600 mb-4 mx-auto">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-lg mb-3">{step.title}</h4>
                  <p className="text-gray-600 text-sm flex-grow">{step.desc}</p>
                </div>
              </RevealCard>
            )
          })}
        </div>
      </Section>

      {/* Benefits */}
      <Section title="Program Benefits" subtitle="Everything you get as a funded trader" gray>
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-4">
            {BENEFITS.map((benefit, i) => (
              <RevealCard key={i} delay={i * 40}>
                <div className="flex items-start gap-3 bg-white rounded-xl p-4 card-hover">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm">{benefit}</span>
                </div>
              </RevealCard>
            ))}
          </div>
        </div>
      </Section>

      {/* Pricing Table */}
      <Section title="Choose Your Challenge" subtitle="Select the account size that matches your trading goals">
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            { size: '$10,000', fee: '$99', profit: '10%', drawdown: '5%', popular: false },
            { size: '$50,000', fee: '$349', profit: '10%', drawdown: '5%', popular: true },
            { size: '$200,000', fee: '$999', profit: '10%', drawdown: '5%', popular: false },
          ].map((plan, i) => (
            <RevealCard key={i} delay={i * 100}>
              <div className={`rounded-2xl p-8 border-2 card-hover ${plan.popular ? 'border-green-500 bg-gradient-to-br from-green-50 to-white shadow-xl scale-105' : 'border-gray-200 bg-white'}`}>
                {plan.popular && (
                  <div className="inline-block mb-4 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                    MOST POPULAR
                  </div>
                )}
                <div className="text-center mb-6">
                  <div className="text-4xl font-bold text-gray-900 mb-2">{plan.size}</div>
                  <div className="text-gray-500">Account Size</div>
                </div>
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">One-time Fee:</span>
                    <span className="font-bold text-green-600">{plan.fee}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Profit Target:</span>
                    <span className="font-bold">{plan.profit}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Max Drawdown:</span>
                    <span className="font-bold">{plan.drawdown}</span>
                  </div>
                </div>
                <button className={`w-full py-3 rounded-xl font-bold transition-colors ${plan.popular ? 'bg-green-600 text-white hover:bg-green-700' : 'border-2 border-green-600 text-green-600 hover:bg-green-50'}`}>
                  Start Challenge
                </button>
              </div>
            </RevealCard>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-green-600 to-green-700 text-white py-16 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Become a Funded Trader?</h2>
          <p className="text-green-100 mb-8 text-lg">Join 2,500+ traders already earning with our capital. No personal risk, maximum opportunity.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="https://portal.fexness.com/signup" className="bg-white text-green-600 font-bold px-10 py-4 rounded-xl hover:bg-gray-100 transition-colors shadow-xl">
              Start Your Challenge
            </a>
            <button className="border-2 border-white text-white font-bold px-10 py-4 rounded-xl hover:bg-white/10 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
