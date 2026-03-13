import React from 'react'
import { MapPin, Mail, Clock, Linkedin, Twitter, Facebook, Youtube, Send, Phone } from 'lucide-react'
import PageHero from '../components/PageHero'
import Section from '../components/Section'

export default function Contact() {
  return (
    <div>
      <PageHero title="Talk to Us" subtitle="Our team is available to assist you with any inquiries." image="https://picsum.photos/seed/contact/1200/600" />
      <Section title="Get in Touch">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="bg-white border rounded-2xl p-6 shadow-sm">
            <h3 className="font-bold text-lg mb-4">Send Us a Message</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div><label className="block text-xs font-semibold text-gray-500 mb-1">First Name</label><input type="text" placeholder="John" className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gold-400" /></div>
                <div><label className="block text-xs font-semibold text-gray-500 mb-1">Last Name</label><input type="text" placeholder="Doe" className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gold-400" /></div>
              </div>
              <div><label className="block text-xs font-semibold text-gray-500 mb-1">Email</label><input type="email" placeholder="you@example.com" className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gold-400" /></div>
              <div><label className="block text-xs font-semibold text-gray-500 mb-1">Subject</label><select className="w-full border rounded-lg px-3 py-2 text-sm"><option>Account Inquiry</option><option>Deposit / Withdrawal</option><option>Technical Support</option><option>Complaint</option><option>Other</option></select></div>
              <div><label className="block text-xs font-semibold text-gray-500 mb-1">Message</label><textarea rows={4} placeholder="Describe your query..." className="w-full border rounded-lg px-3 py-2 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-gold-400" /></div>
              <button type="submit" className="w-full bg-gold-500 text-white py-3 rounded-xl font-semibold hover:bg-gold-600 transition-colors">Send Message</button>
            </form>
          </div>
          <div className="space-y-4">
            {[
              {icon:Phone,title:'Fexness Hotline',body:'+44 7853 329918'},
              {icon:MapPin,title:'London Office',body:'123 Financial District, Canary Wharf, London E14 5AB, United Kingdom'},
              {icon:MapPin,title:'New York Office',body:'456 Wall Street, Financial District, New York, NY 10005, USA'},
              {icon:Mail,title:'General Support',body:'support@fexness.com'},
              {icon:Clock,title:'Business Hours',body:'Mon–Fri: 9 AM – 6 PM GMT | Weekends: Email only'}
            ].map(({icon:Icon,title,body},i)=>(
              <div key={i} className="bg-gray-50 rounded-2xl p-5 flex gap-4">
                <div className="p-3 rounded-xl bg-gold-100 text-gold-600 flex-shrink-0"><Icon className="w-5 h-5" /></div>
                <div>
                  <h4 className="font-bold">{title}</h4>
                  {title === 'Fexness Hotline' ? (
                    <a href="tel:+447853329918" className="text-gold-600 hover:text-gold-700 text-sm mt-0.5 block">{body}</a>
                  ) : title === 'General Support' ? (
                    <a href="mailto:support@fexness.com" className="text-gold-600 hover:text-gold-700 text-sm mt-0.5 block">{body}</a>
                  ) : (
                    <p className="text-gray-500 text-sm mt-0.5">{body}</p>
                  )}
                </div>
              </div>
            ))}
            
            {/* Department Emails */}
            <div className="bg-gradient-to-br from-gold-50 to-orange-50 rounded-2xl p-5 border-2 border-gold-200">
              <h4 className="font-bold text-lg mb-3 text-gray-900">Department Contact</h4>
              <div className="grid grid-cols-1 gap-2 text-sm">
                {[
                  {dept: 'Accounts', email: 'accounts@fexness.com'},
                  {dept: 'Admin', email: 'admin@fexness.com'},
                  {dept: 'Career', email: 'career@fexness.com'},
                  {dept: 'HR', email: 'hr@fexness.com'},
                  {dept: 'Info', email: 'info@fexness.com'},
                  {dept: 'Investor Relations', email: 'investor@fexness.com'},
                  {dept: 'Marketing', email: 'marketing@fexness.com'},
                  {dept: 'Partnerships', email: 'partner@fexness.com'},
                  {dept: 'Sales', email: 'sales@fexness.com'},
                  {dept: 'Technical Support', email: 'tech@fexness.com'},
                ].map(({dept, email}, i) => (
                  <div key={i} className="flex justify-between items-center py-2 border-b border-gold-200 last:border-0">
                    <span className="font-medium text-gray-700">{dept}:</span>
                    <a href={`mailto:${email}`} className="text-gold-600 hover:text-gold-700 font-semibold">{email}</a>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex gap-3 pt-2">
              {[
                {Icon: Linkedin, href: 'https://linkedin.com/company/fexness'},
                {Icon: Twitter, href: 'https://x.com/fexnessofficial'},
                {Icon: Facebook, href: 'https://www.facebook.com/fexnessofficial'},
                {Icon: Youtube, href: 'https://www.youtube.com/@Fexness'},
                {Icon: Send, href: 'https://t.me/fexnesstech'}
              ].map(({Icon, href},i)=>(
                <a key={i} href={href} target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl bg-gray-100 hover:bg-gold-500 hover:text-white text-gray-600 transition-all"><Icon className="w-5 h-5" /></a>
              ))}
            </div>
          </div>
        </div>
      </Section>
    </div>
  )
}
