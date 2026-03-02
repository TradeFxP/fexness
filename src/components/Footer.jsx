import React from "react"
import { Link } from "react-router-dom"
import { BarChart2, Linkedin, Twitter, Facebook, Instagram, Youtube, Mail, MapPin } from "lucide-react"

const COLS = [
  {
    title: "Trade",
    links: [
      { label: "Markets", to: "/markets" },
      { label: "Platforms", to: "/platforms" },
      { label: "Account Types", to: "/accounts" },
      { label: "Pricing & Spreads", to: "/pricing" },
      { label: "Leverage", to: "/leverage" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", to: "/about" },
      { label: "Why Fexness", to: "/why-us" },
      { label: "Regulation", to: "/regulation" },
      { label: "IB Program", to: "/ib" },
      { label: "Promotions", to: "/promotions" },
    ],
  },
  {
    title: "Funding",
    links: [
      { label: "Deposits & Withdrawals", to: "/deposits" },
      { label: "Copy Trading", to: "/copy-trading" },
      { label: "Client Portal", to: "/portal" },
    ],
  },
  {
    title: "Learn",
    links: [
      { label: "Education Centre", to: "/education" },
      { label: "Research & Analysis", to: "/research" },
      { label: "Trading Tools", to: "/tools" },
      { label: "Blog", to: "/blog" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Help Centre", to: "/support" },
      { label: "FAQ", to: "/faq" },
      { label: "Contact Us", to: "/contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Risk Disclosure", to: "/legal" },
      { label: "Terms & Conditions", to: "/legal" },
      { label: "Privacy Policy", to: "/legal" },
      { label: "AML Policy", to: "/legal" },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-14">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8 mb-12">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-1 lg:col-span-1">
            <div className="mb-4">
              <img src="/images/fexness-logo.png" alt="Fexness Logo" className="w-[220px] h-auto" />
            </div>
            <p className="text-gray-400 text-xs leading-relaxed mb-4">
              A globally recognized forex & CFD broker offering competitive spreads, fast execution, and a secure trading environment.
            </p>
            <div className="flex gap-3 mb-4">
              {[
                { icon: Linkedin, href: "#" },
                { icon: Twitter, href: "#" },
                { icon: Facebook, href: "#" },
                { icon: Instagram, href: "#" },
                { icon: Youtube, href: "#" },
              ].map(({ icon: Icon, href }, i) => (
                <a key={i} href={href} className="p-2 rounded-lg bg-gray-800 hover:bg-gold-500 text-gray-400 hover:text-white transition-all">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Nav Columns */}
          {COLS.map((col) => (
            <div key={col.title}>
              <h3 className="text-white font-bold text-sm mb-4">{col.title}</h3>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link to={link.to} className="text-gray-400 hover:text-gold-400 text-xs transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Offices */}
        <div className="grid md:grid-cols-2 gap-6 mb-10 pb-10 border-b border-gray-800">
          {[
            { city: "London Office", address: "123 Financial District, Canary Wharf, London E14 5AB, United Kingdom" },
            { city: "New York Office", address: "456 Wall Street, Financial District, New York, NY 10005, USA" },
          ].map((office, i) => (
            <div key={i} className="flex gap-3">
              <MapPin className="w-4 h-4 text-gold-400 flex-shrink-0 mt-0.5" />
              <div>
                <div className="text-white text-xs font-bold mb-0.5">{office.city}</div>
                <div className="text-gray-400 text-xs">{office.address}</div>
              </div>
            </div>
          ))}
          <div className="flex gap-3">
            <Mail className="w-4 h-4 text-gold-400 flex-shrink-0 mt-0.5" />
            <div>
              <div className="text-white text-xs font-bold mb-0.5">Email Support</div>
              <div className="text-gray-400 text-xs">support@example.com</div>
            </div>
          </div>
        </div>

        {/* Risk Warning */}
        <div className="bg-gray-800 rounded-xl p-5 mb-8">
          <h4 className="text-yellow-400 font-bold text-xs mb-2">⚠ Risk Warning</h4>
          <p className="text-gray-400 text-xs leading-relaxed">
            Trading Forex and CFDs involves significant risk of loss and may not be suitable for all investors. Leverage can work against you. You may lose more than your initial investment. Please ensure you fully understand the risks involved and seek independent financial advice if necessary. Past performance is not indicative of future results.
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Fexness Ltd. All rights reserved. Regulated & Licensed — Registration No. 2024-XXXXX.</p>
          <div className="flex gap-4">
            <Link to="/legal" className="hover:text-gold-400 transition-colors">Privacy</Link>
            <Link to="/legal" className="hover:text-gold-400 transition-colors">Terms</Link>
            <Link to="/legal" className="hover:text-gold-400 transition-colors">Risk</Link>
            <Link to="/legal" className="hover:text-gold-400 transition-colors">AML</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}