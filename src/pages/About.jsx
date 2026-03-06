import React, { useState } from 'react'
import { Users, Globe, Award, TrendingUp, CheckCircle, ChevronDown, ChevronUp } from 'lucide-react'
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
  { icon: Users, value: '175+', label: 'Countries Served' },
  { icon: Globe, value: '100+', label: 'Trading Instruments' },
  { icon: Award, value: 'Fast', label: 'Execution Speed' },
  { icon: TrendingUp, value: '24/7', label: 'Customer Support' },
]

const MILESTONES = [
  { year: '2020', title: 'Company Founded', desc: 'Fexness was established with a vision to democratize forex trading and provide professional-grade tools to all traders.' },
  { year: '2021', title: 'Platform Launch', desc: 'Launched our advanced trading platform with lightning-fast execution and competitive spreads.' },
  { year: '2022', title: 'Global Expansion', desc: 'Expanded services to 175+ countries with multilingual support and localized payment methods.' },
  { year: '2023', title: 'Regulatory License', desc: 'Obtained regulatory authorization ensuring compliance and client protection.' },
  { year: '2024', title: 'Technology Innovation', desc: 'Introduced next-generation trading infrastructure with advanced order management and risk monitoring.' },
  { year: '2025', title: 'Market Leader', desc: 'Recognized as a leading broker offering transparent pricing and exceptional customer support.' },
]

const TEAM = [
  { 
    name: 'Chief Executive Officer', 
    role: 'CEO', 
    img: 'https://picsum.photos/seed/ceo/200/200',
    speech: `Good day everyone!!!

It is a pleasure to be here with you.

When we founded Fexness, our vision was simple yet ambitious: to create a trading environment built on transparency, technology, and trust. We believed that financial markets should be accessible, fair, and efficient for everyone — not just for a privileged few.

Over the years, the financial industry has evolved dramatically. Technology has reshaped the way people trade, invest, and manage their wealth. But while tools and platforms have changed, one thing remains constant — trust is the foundation of everything we do.

At Fexness, we have always prioritized three core principles:

First, transparency.
Clients deserve clarity — in pricing, execution, and communication. We believe long-term relationships are built when clients fully understand how and why things work.

Second, innovation.
Technology is not just a competitive advantage; it is a responsibility. We continuously invest in infrastructure, analytics, and automation to provide seamless execution and reliable performance — even in the most volatile market conditions.

Third, responsibility.
With growth comes accountability. As a global broker, we operate in multiple jurisdictions and regulatory environments. Compliance, ethical conduct, and client protection are not optional — they are central to who we are.

Our success has never been about short-term gains. It has been about building a sustainable business that empowers traders around the world — from beginners taking their first steps to professionals managing complex portfolios.

But none of this would be possible without our people.

To our employees: your dedication, expertise, and integrity drive our progress every day.
To our partners: your collaboration strengthens our global presence.
And to our clients: your trust inspires us to continuously raise the standard.

As we look to the future, we see tremendous opportunity. Financial inclusion is expanding. Technology continues to unlock new possibilities. And global markets are more interconnected than ever before.

Our commitment remains clear:
To innovate responsibly.
To grow sustainably.
And to always put our clients first.

The future of trading will not simply be about faster systems or larger volumes. It will be about smarter solutions, stronger trust, and meaningful impact.

At Fexness, we are ready for that future.

Thank you.`
  },
  { 
    name: 'Chief Operating Officer', 
    role: 'COO', 
    img: 'https://picsum.photos/seed/coo/200/200',
    speech: `Hello everyone!!!

As Chief Operating Officer, my focus is simple: execution. Vision defines where we want to go — operations determine whether we actually get there.

At Fexness, operational excellence is not just about efficiency. It is about reliability, resilience, and responsibility. In a global trading environment where milliseconds matter and trust is everything, our systems, processes, and people must perform flawlessly — every single day.

Our role in operations is to ensure three critical pillars remain strong:

1. Reliability at Scale
Our clients trade across time zones, market conditions, and asset classes. Whether markets are calm or experiencing extreme volatility, our infrastructure must remain stable, fast, and secure.
Operational strength means building systems that do not just work — but endure.

2. Risk and Compliance Discipline
We operate in a highly regulated, multi-jurisdictional environment. Compliance is not a checkbox; it is embedded into every workflow, every decision, and every process.
Strong governance protects our clients, our partners, and our long-term sustainability.

3. Continuous Improvement
Operational excellence is never finished. We constantly analyze performance data, refine processes, automate intelligently, and eliminate inefficiencies. Small improvements, executed consistently, create exponential impact over time.

But operations are not only about systems — they are about people.

Behind every seamless transaction, every resolved issue, and every successful product rollover, there is a team working with precision and dedication. Our success is built on collaboration across departments — technology, compliance, finance, support, and beyond.

As we continue to grow globally, complexity increases. New markets bring new regulatory requirements. Higher trading volumes demand stronger infrastructure. Expanding teams require stronger alignment.

Our responsibility is to ensure growth does not compromise quality.

The future of financial services will belong to organizations that combine innovation with operational discipline. Ambition must be supported by structure. Speed must be supported by control. Expansion must be supported by resilience.

At Fexness, we are committed to building operations that are scalable, secure, and sustainable — not just for today, but for the long term.

Thank you to our teams for your dedication.
Thank you to our partners for your collaboration.
And thank you to our clients for your trust.

Together, we will continue to set higher standards for operational excellence in global markets.

Thank you.`
  },
  { 
    name: 'Chief Technology Officer', 
    role: 'CTO', 
    img: 'https://picsum.photos/seed/cto/200/200',
    speech: `Hello!!!

It's an honor to speak with you.

Technology is the foundation of modern financial markets. Every trade executed, every price streamed, every risk calculation performed — it all depends on systems that must operate with speed, precision, and resilience.

As Chief Technology Officer at Fexness, my mission is clear: build technology that is fast, reliable, scalable, and secure — without compromise.

In our industry, milliseconds matter. Downtime is not an inconvenience; it is a risk. Latency is not just a metric; it is an experience. That is why our engineering philosophy is built around three principles:

1. Performance by Design
We architect systems to handle extreme market volatility and high trading volumes. Our infrastructure is designed not only for today's demand, but for tomorrow's scale. Performance is engineered — not hoped for.

2. Security and Integrity
Trust is earned through protection. Cyber security, data integrity, and infrastructure resilience are central to our strategy. As threats evolve, so must we. Security is not a layer added at the end — it is embedded from the very first line of code.

3. Continuous Innovation
Technology never stands still — and neither do we. We invest heavily in automation, advanced analytics, cloud optimization, and intelligent monitoring systems. Innovation is not about chasing trends; it is about solving real problems and improving the client experience.

But technology is not just about systems — it is about people.

Behind every deployment, every optimization, every breakthrough, there is a team of engineers, architects, analysts, and security specialists working with precision and passion. Collaboration between technology, operations, compliance, and product teams ensures that innovation is both ambitious and responsible.

As we look ahead, we see tremendous opportunity.

Artificial intelligence, distributed systems, advanced data modeling, and improved execution algorithms will continue to redefine trading. The question is not whether change will happen — it is how prepared we are to lead it.

Our goal is not simply to adopt new technologies, but to shape them in ways that deliver measurable value — faster execution, deeper transparency, stronger stability.

The future of fintech will belong to organizations that combine innovation with discipline, experimentation with governance, and ambition with accountability.

At Fexness, we are building that future — line by line, system by system, day by day.

To our technology teams: thank you for your expertise and dedication.
To our partners: thank you for your collaboration.
And to our clients: thank you for trusting our systems with your trades and your confidence.

We remain committed to building technology that empowers global markets — securely, reliably, and intelligently.

Thank you.`
  },
  { 
    name: 'Head of Compliance', 
    role: 'Compliance Officer', 
    img: 'https://picsum.photos/seed/compliance/200/200',
    speech: `Good day!!!

It is a privilege to address you.

In financial services, innovation often takes center stage. Technology advances. Markets expand. Volumes grow. But behind sustainable growth lies something far more fundamental — compliance.

Compliance is not simply about rules and regulations. It is about trust. It is about integrity. It is about ensuring that every action we take aligns with both legal standards and ethical responsibility.

At Fexness, compliance is not treated as a control function that operates in isolation. It is embedded into our culture, our processes, and our decision-making frameworks.

We focus on three key pillars:

1. Regulatory Alignment
Operating across multiple jurisdictions requires deep understanding of diverse regulatory frameworks. Our responsibility is to remain proactive — not reactive — to evolving global standards. Strong regulatory alignment protects our clients and strengthens our long-term sustainability.

2. Risk Management and Transparency
Effective compliance means identifying risks before they become issues. Through monitoring systems, internal controls, and continuous assessment, we ensure transparency in reporting, execution, and governance. Transparency is not optional; it is foundational.

3. Culture of Accountability
Compliance is not owned by one department — it is owned by everyone. From onboarding and KYC processes to transaction monitoring and internal audits, every team member plays a role in safeguarding our organization and our clients.

In a rapidly evolving financial landscape — with increasing regulatory scrutiny, digital transformation, and cross-border complexities — the importance of compliance continues to grow.

But compliance is not a barrier to innovation. On the contrary, strong governance enables confident innovation. When the foundation is solid, growth becomes sustainable.

Our goal is clear:
To protect our clients.
To uphold market integrity.
To operate transparently.
And to maintain the highest ethical standards.

To our teams: thank you for your vigilance and professionalism.
To our partners and regulators: thank you for your collaboration and guidance.
And to our clients: thank you for placing your trust in us.

At Fexness, compliance is not just a requirement — it is a commitment.

Thank you.`
  },
]

export default function About() {
  const [expandedMember, setExpandedMember] = useState(null)

  const toggleSpeech = (index) => {
    setExpandedMember(expandedMember === index ? null : index)
  }

  return (
    <div>
      <PageHero
        title="About Fexness"
        subtitle="Empowering traders worldwide with professional-grade technology and transparent pricing."
        image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=600&fit=crop"
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
      <Section title="Our Story">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=700&h=450&fit=crop" alt="Our Story" className="rounded-2xl shadow-lg w-full object-cover" />
          </div>
          <div className="space-y-4">
            <p className="text-gray-600 leading-relaxed">
              Founded with a vision to democratize forex trading, Fexness emerged from a simple belief: every trader deserves access to professional-grade tools, transparent pricing, and exceptional support.
            </p>
            <p className="text-gray-600 leading-relaxed">
              What started as a mission to provide zero-spread trading has evolved into a comprehensive trading ecosystem. Today, we serve traders across 175 countries, offering access to 100+ instruments with lightning-fast execution and industry-leading technology.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our journey is driven by innovation, integrity, and an unwavering commitment to our traders' success. We don't just facilitate trades—we empower traders to reach their full potential.
            </p>
            {['Regulated & Licensed', 'Transparent Pricing', 'Competitive spreads', 'Multi-asset trading platform', '24/7 Customer Support'].map((item, i) => (
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
      <Section title="Meet the Leadership" subtitle="Experienced professionals driving Fexness forward" gray>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TEAM.map((member, i) => (
            <RevealCard key={i} delay={i * 100}>
              <div className="bg-white rounded-2xl shadow-md border border-gray-200 overflow-hidden card-hover h-full flex flex-col">
                <div className="p-6 text-center flex-shrink-0">
                  <img 
                    src={member.img} 
                    alt={member.name} 
                    className="w-24 h-24 rounded-full mx-auto object-cover mb-4 border-4 border-gold-100" 
                  />
                  <h4 className="font-bold text-lg text-gray-900">{member.name}</h4>
                  <p className="text-gold-600 text-sm font-semibold mt-1">{member.role}</p>
                </div>
                
                <button
                  onClick={() => toggleSpeech(i)}
                  className="w-full py-3 px-6 bg-gradient-to-r from-gold-50 to-orange-50 hover:from-gold-100 hover:to-orange-100 transition-all duration-300 flex items-center justify-center gap-2 text-gold-700 font-semibold text-sm border-t border-gold-100"
                >
                  {expandedMember === i ? (
                    <>
                      <span>Hide Speech</span>
                      <ChevronUp className="w-4 h-4" />
                    </>
                  ) : (
                    <>
                      <span>Read Speech</span>
                      <ChevronDown className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            </RevealCard>
          ))}
        </div>

        {/* Expanded Speech Section */}
        {expandedMember !== null && (
          <div className="mt-8">
            <RevealCard delay={100}>
              <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-6 md:p-10">
                <div className="flex flex-col md:flex-row items-start gap-6 mb-6 pb-6 border-b border-gray-200">
                  <img 
                    src={TEAM[expandedMember].img} 
                    alt={TEAM[expandedMember].name} 
                    className="w-20 h-20 rounded-full object-cover border-4 border-gold-100 flex-shrink-0" 
                  />
                  <div className="flex-grow">
                    <h3 className="font-bold text-2xl text-gray-900 mb-1">
                      {TEAM[expandedMember].name}
                    </h3>
                    <p className="text-gold-600 font-semibold text-lg mb-3">
                      {TEAM[expandedMember].role}
                    </p>
                    <div className="inline-block bg-gradient-to-r from-gold-100 to-orange-100 text-gold-700 px-4 py-2 rounded-lg text-sm font-semibold">
                      Leadership Speech
                    </div>
                  </div>
                  <button
                    onClick={() => setExpandedMember(null)}
                    className="md:ml-auto flex-shrink-0 text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    <ChevronUp className="w-6 h-6" />
                  </button>
                </div>
                
                <div className="prose prose-lg max-w-none">
                  <div className="text-gray-700 leading-relaxed whitespace-pre-line text-base md:text-lg">
                    {TEAM[expandedMember].speech}
                  </div>
                </div>
              </div>
            </RevealCard>
          </div>
        )}
      </Section>
    </div>
  )
}
