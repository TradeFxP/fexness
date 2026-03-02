import React from 'react'

export default function Promotions(){
  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <div className="rounded-lg overflow-hidden bg-gradient-to-r from-gold-50 to-white p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h4 className="text-xl font-bold">Promotions</h4>
          <p className="text-muted mt-1">Check out our latest offers and deposit bonuses.</p>
        </div>
        <div>
          <button className="btn-primary px-4 py-2 rounded">View Promotions</button>
        </div>
      </div>
    </div>
  )
}
