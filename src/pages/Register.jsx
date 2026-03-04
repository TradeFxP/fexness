import React, { useState } from "react"
import { Link } from "react-router-dom"
import { User, Mail, Lock, Eye, EyeOff, Phone, BarChart2 } from "lucide-react"

export default function Register() {
  const [show, setShow] = useState(false)
  return (
    <div className="min-h-screen bg-gradient-to-br from-gold-50 to-gray-100 flex items-center justify-center px-4 py-16">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-xl p-8">
        <div className="text-center mb-6">
          <div className="flex justify-center mb-2">
            <img src="/images/fexness-logo.png" alt="Fexness" className="w-[220px] h-auto" />
          </div>
          <h1 className="text-2xl font-bold text-gray-800">Create Free Account</h1>
          <p className="text-gray-500 text-sm mt-1">Join 200,000+ traders worldwide</p>
        </div>
        <form className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">First Name</label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input type="text" placeholder="John" className="w-full border rounded-xl pl-9 pr-3 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold-400" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">Last Name</label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input type="text" placeholder="Doe" className="w-full border rounded-xl pl-9 pr-3 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold-400" />
              </div>
            </div>
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1.5">Email Address</label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input type="email" placeholder="you@example.com" className="w-full border rounded-xl pl-10 pr-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold-400" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1.5">Phone Number</label>
            <div className="relative">
              <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input type="tel" placeholder="+1 234 567 8900" className="w-full border rounded-xl pl-10 pr-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold-400" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1.5">Country</label>
            <select className="w-full border rounded-xl px-4 py-3 text-sm text-gray-600 focus:outline-none focus:ring-2 focus:ring-gold-400">
              <option>Select your country...</option>
              <option>United Arab Emirates</option>
              <option>United Kingdom</option>
              <option>India</option>
              <option>Nigeria</option>
              <option>Kenya</option>
              <option>Other</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1.5">Password</label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input type={show ? "text" : "password"} placeholder="Min 8 characters" className="w-full border rounded-xl pl-10 pr-12 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold-400" />
              <button type="button" onClick={() => setShow(!show)} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
                {show ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <input type="checkbox" id="agree" className="mt-1 rounded border-gray-300 text-gold-500" />
            <label htmlFor="agree" className="text-xs text-gray-500">I agree to the <a href="/legal" className="text-gold-600 hover:underline">Terms & Conditions</a> and <a href="/legal" className="text-gold-600 hover:underline">Privacy Policy</a></label>
          </div>
          <button type="submit" className="w-full bg-gold-500 text-white py-3 rounded-xl font-bold text-sm hover:bg-gold-600 transition-colors shadow-sm">Create Account</button>
        </form>
        <p className="text-center text-sm text-gray-500 mt-6">
          Already have an account?{" "}
          <a href="https://portal.fexness.com/login" className="text-gold-600 font-semibold hover:underline">Sign in</a>
        </p>
      </div>
    </div>
  )
}