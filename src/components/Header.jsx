import React, { useState, useEffect } from 'react'
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'
import {
  Menu, X, ChevronDown, Globe, BarChart2, BookOpen,
  Wrench, Newspaper, HelpCircle, Phone, ShieldCheck, Users, TrendingUp
} from 'lucide-react'

const NAV = [
  {
    label: 'Trade',
    items: [
      { label: 'Markets', to: '/markets', icon: Globe },
      { label: 'Platforms', to: '/platforms', icon: BarChart2 },
      { label: 'Account Types', to: '/accounts', icon: Users },
      { label: 'Pricing & Spreads', to: '/pricing', icon: BarChart2 },
      { label: 'Leverage & Margin', to: '/leverage', icon: BarChart2 },
    ]
  },
  {
    label: 'Company',
    items: [
      { label: 'About Us', to: '/about', icon: Globe },
      { label: 'Why Fexness', to: '/why-us', icon: ShieldCheck },
      { label: 'Regulation & Security', to: '/regulation', icon: ShieldCheck },
      { label: 'IB / Affiliate', to: '/ib', icon: Users },
    ]
  },
  {
    label: 'Funding',
    items: [
      { label: 'Deposits & Withdrawals', to: '/deposits', icon: Globe },
      { label: 'Promotions', to: '/promotions', icon: Globe },
    ]
  },
  {
    label: 'Learn',
    items: [
      { label: 'Education Hub', to: '/education', icon: BookOpen },
      { label: 'Tools', to: '/tools', icon: Wrench },
      { label: 'Blog', to: '/blog', icon: Newspaper },
      { label: 'Copy Trading', to: '/copy-trading', icon: Users },
      { label: 'Prop Trading', to: '/prop-trading', icon: TrendingUp },
    ]
  },
  {
    label: 'Support',
    items: [
      { label: 'Help Center', to: '/support', icon: HelpCircle },
      { label: 'FAQ', to: '/faq', icon: HelpCircle },
      { label: 'Contact Us', to: '/contact', icon: Phone },
    ]
  },
]

function Dropdown({ group }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="relative" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <button
        className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary transition-colors rounded-md hover:bg-gray-50"
      >
        {group.label}
        <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <div className="absolute top-full left-0 pt-1 z-50">
          <div className="w-52 bg-white rounded-xl shadow-xl border border-gray-100 py-2 anim-scale-in">
            {group.items.map(item => {
              const Icon = item.icon
              return (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-4 py-2.5 text-sm hover:bg-gray-50 transition-colors ${isActive ? 'text-primary font-semibold' : 'text-gray-700'}`
                  }
                >
                  <Icon className="w-4 h-4 text-primary" />
                  {item.label}
                </NavLink>
              )
            })}
          </div>
        </div>
      )}
    </div>
  )
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileGroup, setMobileGroup] = useState(null)
  const [scrolled, setScrolled] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => { setMobileOpen(false) }, [location])

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur border-b border-gray-100'}`}>
      {/* Top bar */}
      <div className="bg-gradient-to-r from-gold-500 to-gold-600 text-gray-900 text-xs py-1.5 px-4 hidden sm:flex justify-between items-center font-semibold">
        <span>📧 support@fexness.com &nbsp;|&nbsp; 📍 London, United Kingdom</span>
        <span>⏰ Support: 24/7 live chat &amp; email</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img src="/images/fexness-logo.png" alt="Fexness Logo" className="w-[200px] h-auto" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            <Link to="/" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary hover:bg-gray-50 rounded-md transition-colors">Home</Link>
            {NAV.map(g => <Dropdown key={g.label} group={g} />)}
          </nav>

          {/* CTA buttons */}
          <div className="hidden lg:flex items-center gap-2">
            <a href="https://portal.fexness.com/login" className="px-4 py-2 rounded-lg text-sm font-semibold border-2 border-[#d3a21a] text-[#d3a21a] hover:bg-[#d3a21a] hover:text-white transition-colors">Sign In</a>
            <a href="https://portal.fexness.com/signup" className="px-4 py-2 rounded-lg text-sm font-semibold bg-[#d3a21a] text-white hover:bg-[#b8901a] transition-colors">Signup</a>
          </div>

          {/* Mobile toggle */}
          <button className="lg:hidden p-2 rounded-md text-gray-600 hover:bg-gray-100" onClick={() => setMobileOpen(v => !v)}>
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 max-h-[80vh] overflow-y-auto shadow-xl anim-fade-down">
          <div className="px-4 py-4 space-y-1">
            <Link to="/" className="block py-2 text-sm font-medium text-gray-700">Home</Link>
            {NAV.map(g => (
              <div key={g.label}>
                <button
                  className="w-full flex justify-between items-center py-2 text-sm font-semibold text-gray-800"
                  onClick={() => setMobileGroup(mobileGroup === g.label ? null : g.label)}
                >
                  {g.label}
                  <ChevronDown className={`w-4 h-4 transition-transform ${mobileGroup === g.label ? 'rotate-180' : ''}`} />
                </button>
                {mobileGroup === g.label && (
                  <div className="pl-4 space-y-1 pb-2">
                    {g.items.map(item => {
                      const Icon = item.icon
                      return (
                        <NavLink key={item.to} to={item.to} className="flex items-center gap-3 py-2 text-sm text-gray-600 hover:text-primary">
                          <Icon className="w-4 h-4" /> {item.label}
                        </NavLink>
                      )
                    })}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-4 flex flex-col gap-2">
              <a href="https://portal.fexness.com/login" className="border-2 border-[#d3a21a] text-[#d3a21a] hover:bg-[#d3a21a] hover:text-white transition-colors text-center py-2 rounded-lg text-sm font-semibold">Sign In</a>
              <a href="https://portal.fexness.com/signup" className="bg-[#d3a21a] text-white hover:bg-[#b8901a] transition-colors text-center py-2 rounded-lg text-sm font-semibold">Signup</a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
