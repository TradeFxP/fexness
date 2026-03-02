import React, {useEffect, useState} from 'react'

const slides = [
  {title: 'Fexness - Global Market Leaders', subtitle: 'Professional trading solutions and education', image: 'https://picsum.photos/seed/hero1/1600/700'},
  {title: 'Masterful market wisdom', subtitle: 'Daily research reports and strategy guides', image: 'https://picsum.photos/seed/hero2/1600/700'},
  {title: 'Open a Live / Demo Forex account', subtitle: 'Quick 5-minute sign-up & KYC', image: 'https://picsum.photos/seed/hero3/1600/700'}
]

export default function Slider(){
  const [index, setIndex] = useState(0)
  useEffect(()=>{
    const t = setInterval(()=> setIndex(i=> (i+1)%slides.length), 4000)
    return ()=>clearInterval(t)
  },[])

  return (
    <div className="relative overflow-hidden">
      <div className="flex transition-transform duration-700" style={{transform:`translateX(-${index*100}%)`}}>
        {slides.map((s, i)=> (
          <div key={i} className="min-w-full relative">
            <div className="h-72 sm:h-96 w-full bg-cover bg-center" style={{backgroundImage:`url(${s.image})`}} />
            <div className="absolute inset-0 flex items-center">
              <div className="max-w-5xl mx-auto px-6 sm:px-12 text-white">
                <h1 className="text-2xl sm:text-4xl font-bold drop-shadow-lg">{s.title}</h1>
                <p className="mt-2 drop-shadow">{s.subtitle}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_,i)=> (
          <button key={i} onClick={()=>setIndex(i)} className={`w-3 h-3 rounded-full ${i===index? 'bg-primary':'bg-gray-300'}`} style={{backgroundColor: i===index? 'var(--primary)':''}} aria-label={`Slide ${i+1}`}></button>
        ))}
      </div>
    </div>
  )
}
