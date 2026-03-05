import React, { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import TawkTo from './components/TawkTo'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Contact from './pages/Contact'
import About from './pages/About'
import WhyUs from './pages/WhyUs'
import Regulation from './pages/Regulation'
import Markets from './pages/Markets'
import Platforms from './pages/Platforms'
import Accounts from './pages/Accounts'
import Pricing from './pages/Pricing'
import Leverage from './pages/Leverage'
import Deposits from './pages/Deposits'
import PromotionsPage from './pages/PromotionsPage'
import IB from './pages/IB'
import Education from './pages/Education'
import Tools from './pages/Tools'
import Research from './pages/Research'
import Blog from './pages/Blog'
import CopyTrading from './pages/CopyTrading'
import PropTrading from './pages/PropTrading'
import SupportPage from './pages/SupportPage'
import FAQ from './pages/FAQ'
import Legal from './pages/Legal'
import Portal from './pages/Portal'

export default function App() {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <div className="min-h-screen flex flex-col">
      <TawkTo />
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/why-us" element={<WhyUs />} />
          <Route path="/regulation" element={<Regulation />} />
          <Route path="/markets" element={<Markets />} />
          <Route path="/platforms" element={<Platforms />} />
          <Route path="/accounts" element={<Accounts />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/leverage" element={<Leverage />} />
          <Route path="/deposits" element={<Deposits />} />
          <Route path="/promotions" element={<PromotionsPage />} />
          <Route path="/ib" element={<IB />} />
          <Route path="/education" element={<Education />} />
          <Route path="/tools" element={<Tools />} />
          <Route path="/research" element={<Research />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/copy-trading" element={<CopyTrading />} />
          <Route path="/prop-trading" element={<PropTrading />} />
          <Route path="/support" element={<SupportPage />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/legal" element={<Legal />} />
          <Route path="/portal" element={<Portal />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
