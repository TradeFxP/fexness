import React from 'react'

const accounts = [
  {name:'Classic', deposit:'$100', leverage:'1:300', perks:['Free Signals','No Commission']},
  {name:'Premium', deposit:'$1000', leverage:'1:300', perks:['Best Spreads','Priority Support']},
  {name:'ECN', deposit:'$3000', leverage:'1:100', perks:['Low Spreads','Commission/Lot 7$']}
]

export default function AccountTypes(){
  return (
    <section className="bg-gray-50 p-4 rounded">
      <h3 className="text-2xl font-bold">Account Types</h3>
      <p className="text-muted mt-1">Choose the account that fits your trading style.</p>

      <div className="mt-4 flex gap-4 overflow-x-auto py-3">
        {accounts.map((a, idx)=> (
          <div key={idx} className="min-w-[180px] p-4 border rounded-lg bg-white flex-shrink-0 shadow-sm hover:shadow-lg transition transform hover:-translate-y-1">
            <div className="text-lg font-bold">{a.name}</div>
            <div className="text-sm text-muted">Min {a.deposit}</div>
            <div className="mt-2 text-muted">Leverage {a.leverage}</div>
            <ul className="mt-3 text-sm space-y-1">
              {a.perks.map((p,i)=> <li key={i}>• {p}</li>)}
            </ul>
            <div className="mt-4">
              <button className="btn-primary px-4 py-2 rounded">Open Account</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
