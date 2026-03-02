/* Reusable section wrapper with reveal animation */
import React from 'react'
import useScrollReveal from '../hooks/useScrollReveal'

export default function Section({ id, title, subtitle, children, gray = false, className = '' }) {
  const ref = useScrollReveal()
  return (
    <section id={id} className={`py-16 px-4 ${gray ? 'bg-gray-50' : 'bg-white'} ${className}`}>
      <div className="max-w-7xl mx-auto">
        {(title || subtitle) && (
          <div ref={ref} className="reveal text-center mb-10">
            {title && <h2 className="text-3xl font-extrabold">{title}</h2>}
            {subtitle && <p className="text-muted mt-3 max-w-2xl mx-auto">{subtitle}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  )
}
