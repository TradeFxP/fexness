/* Shared page hero section used on every inner page */
import React from 'react'
import useScrollReveal from '../hooks/useScrollReveal'

export default function PageHero({ title, subtitle, image }) {
  const ref = useScrollReveal()
  return (
    <div className="relative overflow-hidden">
      <img src={image} alt={title} className="w-full h-64 sm:h-80 object-cover" />
      <div className="absolute inset-0 hero-overlay flex items-center">
        <div ref={ref} className="reveal max-w-5xl mx-auto px-6 sm:px-12 text-white">
          <h1 className="text-3xl sm:text-5xl font-extrabold drop-shadow-lg leading-tight">{title}</h1>
          {subtitle && <p className="mt-3 text-white/90 text-lg max-w-xl">{subtitle}</p>}
        </div>
      </div>
    </div>
  )
}
