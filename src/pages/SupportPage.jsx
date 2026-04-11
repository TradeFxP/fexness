import React from 'react'
import { MessageCircle, Mail, Phone, Clock, MessageSquare } from 'lucide-react'
import PageHero from '../components/PageHero'
import Section from '../components/Section'

const CHANNELS = [
  { 
    icon: MessageCircle, 
    title: 'Live Chat', 
    desc: 'Chat with a support agent instantly — available 24/5.', 
    action: 'Start Chat', 
    color: 'bg-gold-50 text-gold-600',
    href: '#',
    onClick: (e) => {
      e.preventDefault();
      
      // Open Tawk.to chat widget
      if (window.Tawk_API) {
        // Show the widget if it's hidden
        if (typeof window.Tawk_API.showWidget === 'function') {
          window.Tawk_API.showWidget();
        }
        // Maximize/open the chat window
        if (typeof window.Tawk_API.maximize === 'function') {
          window.Tawk_API.maximize();
        }
      }
    }
  },
  { 
    icon: MessageSquare, 
    title: 'WhatsApp', 
    desc: 'Message us on WhatsApp for quick responses.', 
    action: 'Open WhatsApp', 
    color: 'bg-green-50 text-green-600',
    href: 'https://wa.me/447853329918',
    onClick: null
  },
  { 
    icon: Phone, 
    title: 'Phone Call', 
    desc: 'Call us directly for immediate assistance — available 24/5.', 
    action: 'Call Now', 
    color: 'bg-blue-50 text-blue-600',
    href: 'tel:+447853329918',
    onClick: null
  },
  { 
    icon: Mail, 
    title: 'Email', 
    desc: 'Send us an email — we respond within 4 business hours.', 
    action: 'Email Support', 
    color: 'bg-purple-50 text-purple-600',
    href: 'mailto:support@dojifx.com',
    onClick: null
  },
]

const MATRIX = [
  { issue: 'Account queries', channel: 'Live Chat / Email', time: '< 1 hr' },
  { issue: 'Deposit issues', channel: 'Live Chat / Email', time: '< 2 hrs' },
  { issue: 'Withdrawal delay', channel: 'Email / Phone', time: '< 4 hrs' },
  { issue: 'KYC / Verification', channel: 'Email', time: '< 24 hrs' },
  { issue: 'Technical issues', channel: 'Live Chat', time: '< 2 hrs' },
  { issue: 'Complaints', channel: 'Email escalation', time: '< 5 business days' },
]

export default function Support() {
  return (
    <div>
      <PageHero
        title="We're Here 24/7"
        subtitle="Multiple support channels with fast, transparent response times."
        image="https://picsum.photos/seed/support/1200/600"
      />
      <Section title="Contact Channels" subtitle="Choose the fastest way to reach us.">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CHANNELS.map((c, i) => {
            const Icon = c.icon
            return (
              <div key={i} className="p-6 bg-white rounded-2xl border card-hover text-center h-full flex flex-col">
                <div className={`w-12 h-12 rounded-xl mx-auto flex items-center justify-center mb-4 ${c.color}`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-bold">{c.title}</h3>
                <p className="text-gray-600 text-sm mt-1 mb-4 flex-grow">{c.desc}</p>
                {c.onClick ? (
                  <button 
                    onClick={c.onClick}
                    className="mt-auto bg-gold-600 text-white hover:bg-gold-700 px-4 py-2 rounded-lg text-sm w-full font-semibold transition-colors cursor-pointer"
                  >
                    {c.action}
                  </button>
                ) : (
                  <a 
                    href={c.href}
                    target={c.href && c.href.startsWith('http') ? '_blank' : '_self'}
                    rel={c.href && c.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="mt-auto bg-gold-600 text-white hover:bg-gold-700 px-4 py-2 rounded-lg text-sm w-full font-semibold transition-colors inline-block cursor-pointer"
                  >
                    {c.action}
                  </a>
                )}
              </div>
            )
          })}
        </div>
      </Section>

      <Section gray title="Escalation Matrix & Response Times">
        <div className="overflow-x-auto rounded-xl border bg-white">
          <table className="w-full text-sm">
            <thead className="bg-gradient-to-r from-gold-600 to-gold-700 text-white text-xs">
              <tr>
                <th className="px-4 py-3 text-left">Issue</th>
                <th className="px-4 py-3 text-left">Recommended Channel</th>
                <th className="px-4 py-3 text-left">Est. Response</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {MATRIX.map((m, i) => (
                <tr key={i} className="hover:bg-gray-50">
                  <td className="px-4 py-3 font-semibold">{m.issue}</td>
                  <td className="px-4 py-3 text-gray-600">{m.channel}</td>
                  <td className="px-4 py-3">
                    <span className="bg-gold-50 text-gold-700 text-xs px-2 py-0.5 rounded-full font-semibold">{m.time}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      {/* Contact Information */}
      <Section title="Additional Contact Information">
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="text-center p-6 bg-white rounded-2xl border card-hover">
            <div className="inline-flex p-3 rounded-xl bg-gold-100 text-gold-600 mb-4">
              <Phone className="w-6 h-6" />
            </div>
            <h3 className="font-bold mb-2">Phone Support</h3>
            <p className="text-gray-600 text-sm mb-3">Available 24/5</p>
            <a href="tel:+447853329918" className="text-gold-600 font-semibold hover:text-gold-700">
              +44 7853 329918
            </a>
          </div>
          
          <div className="text-center p-6 bg-white rounded-2xl border card-hover">
            <div className="inline-flex p-3 rounded-xl bg-blue-100 text-blue-600 mb-4">
              <Mail className="w-6 h-6" />
            </div>
            <h3 className="font-bold mb-2">Email Address</h3>
            <p className="text-gray-600 text-sm mb-3">Response within 4 hours</p>
            <a href="mailto:support@dojifx.com" className="text-blue-600 font-semibold hover:text-blue-700">
              support@dojifx.com
            </a>
          </div>
          
          <div className="text-center p-6 bg-white rounded-2xl border card-hover">
            <div className="inline-flex p-3 rounded-xl bg-purple-100 text-purple-600 mb-4">
              <Clock className="w-6 h-6" />
            </div>
            <h3 className="font-bold mb-2">Business Hours</h3>
            <p className="text-gray-600 text-sm mb-1">Mon - Fri: 24 hours</p>
            <p className="text-gray-600 text-sm">Weekend: Limited support</p>
          </div>
        </div>
      </Section>
    </div>
  )
}
