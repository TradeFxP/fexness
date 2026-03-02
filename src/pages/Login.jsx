import React, { useState } from "react"
import { Link } from "react-router-dom"
import { Mail, Lock, Eye, EyeOff, BarChart2 } from "lucide-react"

export default function Login() {
  const [show, setShow] = useState(false)
  return (
    <div className="min-h-screen bg-gradient-to-br from-gold-50 to-gray-100 flex items-center justify-center px-4 py-16">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-xl p-8">
        <div className="text-center mb-6">
          <div className="flex justify-center mb-2">
            <img src="/images/fexness-logo.png" alt="Fexness" className="w-[220px] h-auto" />
          </div>
          <h1 className="text-2xl font-bold text-gray-800">Welcome back</h1>
          <p className="text-gray-500 text-sm mt-1">Sign in to your trading account</p>
        </div>
        <form className="space-y-5">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1.5">Email Address</label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input type="email" placeholder="you@example.com" className="w-full border rounded-xl pl-10 pr-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-transparent" />
            </div>
          </div>
          <div>
            <div className="flex justify-between items-center mb-1.5">
              <label className="text-sm font-semibold text-gray-700">Password</label>
              <a href="#" className="text-xs text-gold-600 hover:underline">Forgot password?</a>
            </div>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input type={show ? "text" : "password"} placeholder="••••••••" className="w-full border rounded-xl pl-10 pr-12 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-transparent" />
              <button type="button" onClick={() => setShow(!show)} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                {show ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <input type="checkbox" id="remember" className="rounded border-gray-300 text-gold-500" />
            <label htmlFor="remember" className="text-sm text-gray-600">Remember me for 30 days</label>
          </div>
          <button type="submit" className="w-full bg-gold-500 text-white py-3 rounded-xl font-bold text-sm hover:bg-gold-600 transition-colors shadow-sm">Sign In</button>
        </form>
        <p className="text-center text-sm text-gray-500 mt-6">
          Do not have an account?{" "}
          <Link to="/register" className="text-gold-600 font-semibold hover:underline">Create one free</Link>
        </p>
      </div>
    </div>
  )
}