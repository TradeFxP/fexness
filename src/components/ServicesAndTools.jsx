import React from 'react'

const services = [
  {title:'Copy Trade', desc:'Automatically copy successful traders.'},
  {title:'VPS Hosting', desc:'Low-latency virtual servers for execution.'},
  {title:'Economic Calendar', desc:'Track market-moving events.'},
  {title:'Forex Calculator', desc:'Position size, margin, and pip calculator.'}
]

export default function ServicesAndTools(){
  return (
    <section className="max-w-7xl mx-auto px-4 py-8">
      <h3 className="text-2xl font-bold">Services & Tools</h3>
      <p className="text-muted mt-2">Additional tools to help your trading journey.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
        {services.map((s, idx)=> (
          <div key={idx} className="p-4 bg-white rounded shadow hover:scale-105 transform transition">
            <h4 className="font-bold">{s.title}</h4>
            <p className="text-sm text-muted mt-2">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
