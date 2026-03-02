import React from 'react'
import { MessageCircle, Mail, Phone, Ticket, Clock } from 'lucide-react'
import PageHero from '../components/PageHero'
import Section from '../components/Section'

const CHANNELS = [
  { icon: MessageCircle, title: 'Live Chat', desc: 'Chat with a support agent instantly — available 24/5.', action: 'Start Chat', color: 'bg-green-50 text-green-600' },
  { icon: Phone, title: 'WhatsApp', desc: 'Message us on WhatsApp for quick responses.', action: 'Open WhatsApp', color: 'bg-emerald-50 text-emerald-600' },
  { icon: Mail, title: 'Email', desc: 'Send us an email — we respond within 4 business hours.', action: 'Email Support', color: 'bg-blue-50 text-blue-600' },
  { icon: Ticket, title: 'Support Ticket', desc: 'Submit a detailed request and track its progress in your portal.', action: 'Open Ticket', color: 'bg-purple-50 text-purple-600' },
]

const MATRIX = [
  { issue: 'Account queries', channel: 'Live Chat / Email', time: '< 1 hr' },
  { issue: 'Deposit issues', channel: 'Live Chat / Ticket', time: '< 2 hrs' },
  { issue: 'Withdrawal delay', channel: 'Email / Ticket', time: '< 4 hrs' },
  { issue: 'KYC / Verification', channel: 'Email', time: '< 24 hrs' },
  { issue: 'Technical issues', channel: 'Ticket', time: '< 8 hrs' },
  { issue: 'Complaints', channel: 'Email escalation', time: '< 5 business days' },
]

export default function Support() {
  return (
    <div>
      <PageHero
        title="We're Here 24/5"
        subtitle="Multiple support channels with fast, transparent response times."
        image="https://picsum.photos/seed/support/1200/600"
      />
      <Section title="Contact Channels" subtitle="Choose the fastest way to reach us.">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CHANNELS.map((c, i) => {
            const Icon = c.icon
            return (
              <div key={i} className="p-6 bg-white rounded-2xl border card-hover text-center">
                <div className={`w-12 h-12 rounded-xl mx-auto flex items-center justify-center mb-4 ${c.color}`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-bold">{c.title}</h3>
                <p className="text-muted text-sm mt-1">{c.desc}</p>
                <button className="mt-4 btn-primary px-4 py-2 rounded-lg text-sm w-full">{c.action}</button>
              </div>
            )
          })}
        </div>
      </Section>

      <Section gray title="Escalation Matrix & Response Times">
        <div className="overflow-x-auto rounded-xl border bg-white">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 text-gray-500 uppercase text-xs">
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
                  <td className="px-4 py-3 text-muted">{m.channel}</td>
                  <td className="px-4 py-3">
                    <span className="bg-green-50 text-green-700 text-xs px-2 py-0.5 rounded-full font-semibold">{m.time}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>
    </div>
  )
}
