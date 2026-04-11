import React, { useState } from 'react'
import { Copy, TrendingUp, Users, BarChart2, Star, CheckCircle, Play, Award, Zap, Bot } from 'lucide-react'
import PageHero from '../components/PageHero'
import Section from '../components/Section'
import useScrollReveal from '../hooks/useScrollReveal'

const COPY_TRADING_VIDEOS = [
  { 
    id: 1, 
    title: 'Copy Trading Basics & Getting Started', 
    desc: 'Learn how copy trading works and how to start copying top traders',
    videoSrc: '/videos/copy-trading/copy-trading-1.mp4',
    thumbnail: 'https://images.unsplash.com/photo-1551836022-4c4c79ecde51?w=800&h=500&fit=crop'
  },
  { 
    id: 2, 
    title: 'Selecting the Right Traders to Copy', 
    desc: 'Master the art of evaluating and choosing profitable traders',
    videoSrc: '/videos/copy-trading/copy-trading-2.mp4',
    thumbnail: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800&h=500&fit=crop'
  },
]

function RevealCard({ children, delay = 0 }) {
  const ref = useScrollReveal()
  return (
    <div ref={ref} className="reveal" style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  )
}

const TRADERS = [
  { name: 'AlphaTrader', country: 'UAE', followers: 2340, win: 78, gain: '+142%', drawdown: '8%', img: 'https://picsum.photos/seed/trader1/80/80', months: 18 },
  { name: 'FXMaster_EU', country: 'Germany', followers: 1890, win: 71, gain: '+98%', drawdown: '12%', img: 'https://picsum.photos/seed/trader2/80/80', months: 24 },
  { name: 'GoldKing', country: 'UK', followers: 3100, win: 83, gain: '+215%', drawdown: '6%', img: 'https://picsum.photos/seed/trader3/80/80', months: 30 },
  { name: 'AsiaFX_Pro', country: 'Singapore', followers: 1450, win: 69, gain: '+76%', drawdown: '15%', img: 'https://picsum.photos/seed/trader4/80/80', months: 12 },
  { name: 'SafeHands', country: 'South Africa', followers: 987, win: 91, gain: '+64%', drawdown: '4%', img: 'https://picsum.photos/seed/trader5/80/80', months: 8 },
  { name: 'TrendSniper', country: 'India', followers: 2200, win: 75, gain: '+188%', drawdown: '11%', img: 'https://picsum.photos/seed/trader6/80/80', months: 22 },
]

const COPY_BENEFITS = [
  'Browse and copy from 500+ verified master traders',
  'Minimum $50 to start copying traders',
  'Automatic trade replication in real-time',
  'Full transparency of trader performance history',
  'Stop or switch traders anytime with one click',
  'Risk management tools and stop-loss controls',
]

const MASTER_BENEFITS = [
  'Earn commissions from every follower copying your trades',
  'Build your reputation as a professional trader',
  'Get verified status and attract more followers',
  'Access to advanced analytics and follower insights',
  'No upfront fees - only performance-based earnings',
  'Dedicated support for master traders',
]

const EA_BENEFITS = [
  'Connect your Expert Advisors (EAs) directly to the platform',
  'Automated trading 24/7 without manual intervention',
  'Share your EA strategies and earn from followers',
  'Compatible with MetaTrader 5 platform',
  'Full control over EA settings and risk parameters',
  'Track EA performance with detailed analytics',
]

export default function CopyTrading() {
  const [selected, setSelected] = useState(null)

  return (
    <div>
      <PageHero
        title="Copy Trading"
        subtitle="Mirror the trades of top-performing forex traders automatically."
        image="https://picsum.photos/seed/copy/1200/600"
      />

      {/* Copy Trading Video Tutorials */}
      <Section 
        title="Copy Trading Video Tutorials" 
        subtitle="Watch step-by-step guides to master copy trading and maximize your success."
        className="bg-gradient-to-b from-white to-gray-50"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {COPY_TRADING_VIDEOS.map((video, i) => (
            <RevealCard key={video.id} delay={i * 50}>
              <div className="group rounded-xl overflow-hidden border border-gray-200 card-hover bg-white shadow-md hover:shadow-xl transition-all duration-300 flex flex-col h-full">
                <div className="relative h-48 bg-gray-900 overflow-hidden flex-shrink-0">
                  <video 
                    controls 
                    className="w-full h-full object-cover"
                    poster={video.thumbnail}
                  >
                    <source src={video.videoSrc} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                </div>
                <div className="p-4 flex flex-col flex-grow">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex items-center justify-center w-7 h-7 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 text-white text-xs font-bold">
                      {video.id}
                    </div>
                    <span className="text-xs text-blue-600 font-semibold uppercase tracking-wide">Video Tutorial</span>
                  </div>
                  <h3 className="font-bold text-base text-gray-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                    {video.title}
                  </h3>
                  <p className="text-gray-600 text-xs leading-relaxed line-clamp-2">
                    {video.desc}
                  </p>
                </div>
              </div>
            </RevealCard>
          ))}
        </div>
      </Section>

      {/* Stats */}
      <Section gray>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: Users, label: 'Active Masters', value: '500+' },
            { icon: Copy, label: 'Total Followers', value: '18,000+' },
            { icon: TrendingUp, label: 'Avg Monthly Gain', value: '+12%' },
            { icon: Star, label: 'Highest Win Rate', value: '91%' },
          ].map(({ icon: Icon, label, value }, i) => (
            <RevealCard key={i} delay={i * 80}>
              <div className="text-center bg-white rounded-2xl p-6 shadow-sm card-hover">
                <div className="inline-flex p-3 rounded-xl bg-gold-100 text-gold-600 mb-3">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="text-2xl font-bold text-gold-600">{value}</div>
                <div className="text-gray-500 text-sm mt-1">{label}</div>
              </div>
            </RevealCard>
          ))}
        </div>
      </Section>

      {/* Copy Trade Section */}
      <Section title="Copy Trade" subtitle="Follow and automatically copy successful traders">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-4">
            <div className="inline-flex p-3 rounded-xl bg-blue-100 text-blue-600 mb-2">
              <Copy className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800">Start Copying Professional Traders</h3>
            <p className="text-gray-600 leading-relaxed">
              Copy the trades of experienced and verified master traders automatically. No trading knowledge required - just choose a trader and let the system replicate their trades in your account.
            </p>
            <div className="space-y-3 pt-2">
              {COPY_BENEFITS.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-gold-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm">{item}</span>
                </div>
              ))}
            </div>
            <a href="/portal" className="inline-block mt-4 bg-gold-600 text-white font-semibold px-6 py-3 rounded-xl hover:bg-gold-700 transition-colors">
              Browse Traders
            </a>
          </div>
          <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop" alt="Copy Trading" className="rounded-2xl shadow-lg" />
        </div>
      </Section>

      {/* Master Section */}
      <Section title="Become a Master" subtitle="Share your trading expertise and earn commissions" gray>
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop" alt="Master Trader" className="rounded-2xl shadow-lg md:order-2" />
          <div className="space-y-4 md:order-1">
            <div className="inline-flex p-3 rounded-xl bg-purple-100 text-purple-600 mb-2">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800">Earn as a Master Trader</h3>
            <p className="text-gray-600 leading-relaxed">
              Are you a successful trader? Become a Master and earn commissions from traders who copy your strategies. Build your reputation and grow your income while trading.
            </p>
            <div className="space-y-3 pt-2">
              {MASTER_BENEFITS.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-gold-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm">{item}</span>
                </div>
              ))}
            </div>
            <a href="/portal" className="inline-block mt-4 bg-purple-600 text-white font-semibold px-6 py-3 rounded-xl hover:bg-purple-700 transition-colors">
              Apply as Master
            </a>
          </div>
        </div>
      </Section>

      {/* Trade from EA Section */}
      <Section title="Trade from EA" subtitle="Automate your trading with Expert Advisors">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-4">
            <div className="inline-flex p-3 rounded-xl bg-green-100 text-green-600 mb-2">
              <Bot className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800">Automated Trading with EAs</h3>
            <p className="text-gray-600 leading-relaxed">
              Use Expert Advisors (EAs) to automate your trading strategies. Connect your MT5 EAs and let them trade 24/7. Share your EA strategies and earn from followers.
            </p>
            <div className="space-y-3 pt-2">
              {EA_BENEFITS.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-gold-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm">{item}</span>
                </div>
              ))}
            </div>
            <a href="/portal" className="inline-block mt-4 bg-green-600 text-white font-semibold px-6 py-3 rounded-xl hover:bg-green-700 transition-colors">
              Connect Your EA
            </a>
          </div>
          <img src="https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=600&h=400&fit=crop" alt="Expert Advisors" className="rounded-2xl shadow-lg" />
        </div>
      </Section>

      {/* CTA */}
      <section className="bg-gold-600 text-white py-14 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Start Copy Trading?</h2>
        <p className="text-gold-100 mb-8">Join thousands of traders already copying successful strategies. No experience needed.</p>
        <a href="https://portal.dojifx.com/signup" className="bg-white text-gold-600 font-semibold px-8 py-3 rounded-xl hover:bg-gray-100 transition-colors">Get Started Now</a>
      </section>
    </div>
  )
}
