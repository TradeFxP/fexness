import React from 'react'
import { BookOpen, Video, FileText, TrendingUp, ArrowRight, Play, Users, Target, DollarSign } from 'lucide-react'
import PageHero from '../components/PageHero'
import Section from '../components/Section'
import useScrollReveal from '../hooks/useScrollReveal'

const COURSES = [
  { icon: BookOpen, title: 'Basic Financial Trading', lessons: 11, desc: 'Learn the fundamentals of financial markets and trading basics.', img: 'https://picsum.photos/seed/edu1/800/500' },
  { icon: TrendingUp, title: 'Technical Analysis', lessons: 4, desc: 'Support & resistance, indicators, candlestick patterns.', img: 'https://picsum.photos/seed/edu2/800/500' },
  { icon: FileText, title: 'Trading Psychology', lessons: 4, desc: 'Master the mental game and emotional control in trading.', img: 'https://picsum.photos/seed/edu3/800/500' },
  { icon: Users, title: 'Copy Trading', lessons: 2, desc: 'Learn to copy successful traders and maximize profits.', img: 'https://picsum.photos/seed/edu4/800/500' },
  { icon: DollarSign, title: 'Prop Trading', lessons: 1, desc: 'Trade with firm capital and become a funded trader.', img: 'https://picsum.photos/seed/edu5/800/500' },
]

const BASIC_TRADING_VIDEOS = [
  { 
    id: 1, 
    title: 'Introduction to Financial Markets', 
    desc: 'Understanding different markets, instruments, and how trading works',
    videoSrc: '/videos/basic-trading/basic-trading-1.mp4',
    thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop',
    available: true
  },
  { 
    id: 2, 
    title: 'Understanding Market Analysis', 
    desc: 'Learn fundamental and technical analysis basics',
    videoSrc: '/videos/basic-trading/basic-trading-2.mp4',
    thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop',
    available: true
  },
  { 
    id: 3, 
    title: 'How to Read Charts & Timeframes', 
    desc: 'Master candlesticks, chart types, and timeframe analysis',
    videoSrc: '/videos/basic-trading/basic-trading-3.mp4',
    thumbnail: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=800&h=500&fit=crop',
    available: true
  },
  { 
    id: 4, 
    title: 'Trading Platform Basics', 
    desc: 'Navigate your trading platform and understand key features',
    videoSrc: '/videos/basic-trading/basic-trading-4.mp4',
    thumbnail: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&h=500&fit=crop',
    available: true
  },
  { 
    id: 5, 
    title: 'Order Types Explained', 
    desc: 'Market orders, limit orders, stop loss, and take profit',
    videoSrc: '/videos/basic-trading/basic-trading-5.mp4',
    thumbnail: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=500&fit=crop',
    available: true
  },
  { 
    id: 6, 
    title: 'Placing Your First Trade', 
    desc: 'Step-by-step guide to executing your first trade',
    videoSrc: '/videos/basic-trading/basic-trading-6.mp4',
    thumbnail: 'https://images.unsplash.com/photo-1642790106117-e829e14a795f?w=800&h=500&fit=crop',
    available: true
  },
  { 
    id: 7, 
    title: 'Risk Management Basics', 
    desc: 'Learn position sizing, stop-loss, and money management',
    videoSrc: '/videos/basic-trading/basic-trading-7.mp4',
    thumbnail: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800&h=500&fit=crop',
    available: true
  },
  { 
    id: 8, 
    title: 'Understanding Leverage & Margin', 
    desc: 'How leverage works and margin requirements',
    videoSrc: '/videos/basic-trading/basic-trading-8.mp4',
    thumbnail: 'https://images.unsplash.com/photo-1551836022-4c4c79ecde51?w=800&h=500&fit=crop',
    available: true
  },
  { 
    id: 9, 
    title: 'Trading Sessions & Market Hours', 
    desc: 'Best times to trade and market session overlaps',
    videoSrc: '/videos/basic-trading/basic-trading-9.mp4',
    thumbnail: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=500&fit=crop',
    available: true
  },
  { 
    id: 10, 
    title: 'Common Trading Mistakes', 
    desc: 'Avoid these beginner mistakes and trade smarter',
    videoSrc: '/videos/basic-trading/basic-trading-10.mp4',
    thumbnail: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=500&fit=crop',
    available: true
  },
  { 
    id: 11, 
    title: 'Building Your Trading Plan', 
    desc: 'Create a solid trading plan for consistent results',
    videoSrc: '/videos/basic-trading/basic-trading-11.mp4',
    thumbnail: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&h=500&fit=crop',
    available: true
  },
]

const TECHNICAL_ANALYSIS_VIDEOS = [
  { 
    id: 1, 
    title: 'Technical Analysis Fundamentals', 
    desc: 'Master the basics of technical analysis and chart reading',
    videoSrc: '/videos/technical-analysis-1.mp4',
    thumbnail: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=500&fit=crop'
  },
  { 
    id: 2, 
    title: 'Advanced Chart Patterns', 
    desc: 'Learn to identify and trade key chart patterns',
    videoSrc: '/videos/technical-analysis-2.mp4',
    thumbnail: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=800&h=500&fit=crop'
  },
  { 
    id: 3, 
    title: 'Indicators & Oscillators', 
    desc: 'Deep dive into technical indicators and their applications',
    videoSrc: '/videos/technical-analysis-3.mp4',
    thumbnail: 'https://images.unsplash.com/photo-1642790106117-e829e14a795f?w=800&h=500&fit=crop'
  },
  { 
    id: 4, 
    title: 'Trading Strategies', 
    desc: 'Practical strategies combining multiple technical tools',
    videoSrc: '/videos/technical-analysis-4.mp4',
    thumbnail: 'https://images.unsplash.com/photo-1642543492481-44e81e3914a7?w=800&h=500&fit=crop'
  },
]

const TRADING_PSYCHOLOGY_VIDEOS = [
  { 
    id: 1, 
    title: 'Trading Psychology Fundamentals', 
    desc: 'Understanding the mental game of trading and emotional control',
    videoSrc: '/videos/psychology/trading-psychology-1.mp4',
    thumbnail: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=500&fit=crop'
  },
  { 
    id: 2, 
    title: 'Managing Trading Emotions', 
    desc: 'Learn to control fear, greed, and other emotions in trading',
    videoSrc: '/videos/psychology/trading-psychology-2.mp4',
    thumbnail: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=500&fit=crop'
  },
  { 
    id: 3, 
    title: 'Building a Winning Mindset', 
    desc: 'Develop the psychological resilience of successful traders',
    videoSrc: '/videos/psychology/trading-psychology-3.mp4',
    thumbnail: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&h=500&fit=crop'
  },
  { 
    id: 4, 
    title: 'Discipline & Consistency', 
    desc: 'Master the art of disciplined trading and consistent execution',
    videoSrc: '/videos/psychology/trading-psychology-4.mp4',
    thumbnail: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=800&h=500&fit=crop'
  },
]

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

const PROP_TRADING_VIDEOS = [
  { 
    id: 1, 
    title: 'Proprietary Trading Explained', 
    desc: 'Learn how prop trading works and how to become a funded trader',
    videoSrc: '/videos/prop-trading/prop-trading-1.mp4',
    thumbnail: 'https://images.unsplash.com/photo-1642790106117-e829e14a795f?w=800&h=500&fit=crop'
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

export default function Education() {
  return (
    <div>
      <PageHero
        title="Learn Trading Step-by-Step"
        subtitle="Free courses, webinars, and guides — built for all skill levels."
        image="https://picsum.photos/seed/education/1200/600"
      />

      {/* Basic Financial Trading Video Section */}
      <Section 
        title="Basic Financial Trading Course" 
        subtitle="Start your trading journey with fundamental concepts and essential trading knowledge."
        className="bg-gradient-to-b from-gray-50 to-white"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {BASIC_TRADING_VIDEOS.map((video, i) => (
            <RevealCard key={video.id} delay={i * 50}>
              <div className="group rounded-xl overflow-hidden border border-gray-200 card-hover bg-white shadow-md hover:shadow-xl transition-all duration-300 flex flex-col h-full">
                <div className="relative h-48 bg-gray-900 overflow-hidden flex-shrink-0">
                  {video.available ? (
                    <video 
                      controls 
                      className="w-full h-full object-cover"
                      poster={video.thumbnail}
                    >
                      <source src={video.videoSrc} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  ) : (
                    <div className="relative w-full h-full">
                      <img src={video.thumbnail} alt={video.title} className="w-full h-full object-cover opacity-50" />
                      <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                        <span className="text-white font-bold text-sm bg-blue-600 px-4 py-2 rounded-lg">Coming Soon</span>
                      </div>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                </div>
                <div className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex items-center justify-center w-7 h-7 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 text-white text-xs font-bold">
                      {video.id}
                    </div>
                    <span className="text-xs text-blue-600 font-semibold uppercase tracking-wide">Lesson {video.id}</span>
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

      {/* Technical Analysis Video Section */}
      <Section 
        title="Technical Analysis Video Course" 
        subtitle="Watch our comprehensive video tutorials and master technical analysis step by step."
        className="bg-gradient-to-b from-white to-gray-50"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {TECHNICAL_ANALYSIS_VIDEOS.map((video, i) => (
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
                    <div className="flex items-center justify-center w-7 h-7 rounded-full bg-gradient-to-br from-green-400 to-green-600 text-white text-xs font-bold">
                      {video.id}
                    </div>
                    <span className="text-xs text-gold-600 font-semibold uppercase tracking-wide">Lesson {video.id}</span>
                  </div>
                  <h3 className="font-bold text-base text-gray-900 mb-2 group-hover:text-gold-600 transition-colors line-clamp-2">
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

      {/* Trading Psychology Video Section */}
      <Section 
        title="Trading Psychology Video Course" 
        subtitle="Master the mental game of trading and develop the mindset of successful traders."
        className="bg-gradient-to-b from-gray-50 to-white"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {TRADING_PSYCHOLOGY_VIDEOS.map((video, i) => (
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
                    <div className="flex items-center justify-center w-7 h-7 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 text-white text-xs font-bold">
                      {video.id}
                    </div>
                    <span className="text-xs text-purple-600 font-semibold uppercase tracking-wide">Lesson {video.id}</span>
                  </div>
                  <h3 className="font-bold text-base text-gray-900 mb-2 group-hover:text-purple-600 transition-colors line-clamp-2">
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

      {/* Copy Trading Video Section */}
      <Section 
        title="Copy Trading Video Course" 
        subtitle="Learn how to leverage the expertise of successful traders through copy trading."
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
                    <div className="flex items-center justify-center w-7 h-7 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 text-white text-xs font-bold">
                      {video.id}
                    </div>
                    <span className="text-xs text-cyan-600 font-semibold uppercase tracking-wide">Lesson {video.id}</span>
                  </div>
                  <h3 className="font-bold text-base text-gray-900 mb-2 group-hover:text-cyan-600 transition-colors line-clamp-2">
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

      {/* Prop Trading Video Section */}
      <Section 
        title="Prop Trading Video Course" 
        subtitle="Discover how to trade with firm capital and become a funded professional trader."
        className="bg-gradient-to-b from-gray-50 to-white"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {PROP_TRADING_VIDEOS.map((video, i) => (
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
                    <span className="text-xs text-green-600 font-semibold uppercase tracking-wide">Lesson {video.id}</span>
                  </div>
                  <h3 className="font-bold text-base text-gray-900 mb-2 group-hover:text-green-600 transition-colors line-clamp-2">
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

      {/* CTA */}
      <div className="bg-primary py-12 text-white text-center">
        <h3 className="text-2xl font-extrabold">Start the Beginner Track — It's Free</h3>
        <p className="text-white/80 mt-2">No sign-up required for basic lessons.</p>
        <button className="mt-4 bg-white text-primary px-8 py-3 rounded-xl font-bold">Start Learning</button>
      </div>
    </div>
  )
}
