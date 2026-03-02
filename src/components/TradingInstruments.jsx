import React from 'react'

const instruments = [
  {title:'Forex', desc:'Major, minor and exotic currency pairs', img:'https://picsum.photos/seed/forex/800/600'},
  {title:'Spot Metal', desc:'CFD metals trading (gold, silver)', img:'https://picsum.photos/seed/metal/800/600'},
  {title:'Energies', desc:'Oil, gas and energy derivatives', img:'https://picsum.photos/seed/energies/800/600'},
  {title:'Indices', desc:'Global market indices CFDs', img:'https://picsum.photos/seed/indices/800/600'}
]

export default function TradingInstruments(){
  return (
    <section className="max-w-7xl mx-auto px-4 py-8">
      <h3 className="text-2xl font-bold">Trading Instruments</h3>
      <p className="text-muted mt-2">The range of financial instruments available on the platform.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
        {instruments.map((ins, idx)=> (
          <div key={idx} className="rounded overflow-hidden shadow hover:scale-105 transform transition">
            <div className="h-40 bg-gray-100">
              <img src={ins.img} alt={ins.title} className="w-full h-full object-cover" />
            </div>
            <div className="p-4 bg-white">
              <h4 className="font-bold">{ins.title}</h4>
              <p className="text-sm text-muted mt-1">{ins.desc}</p>
              <div className="mt-3">
                <button className="btn-primary px-3 py-1 rounded text-sm">Trade {ins.title}</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
