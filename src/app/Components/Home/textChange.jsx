'use client'

import React from 'react'
import dynamic from 'next/dynamic'
import { home } from '../DummyData/DummyData'

const Typewriter = dynamic(() => import('typewriter-effect'), { ssr: false })

const TextChange = () => {
  return (
    <section className="hero h-screen bg-center bg-cover">
      <div className="heroContent flex items-center justify-center h-full text-center">
        {home.map((val, i) => (
          <div key={i} className="heroContent space-y-4">
            <h3 className="text-4xl text-gray-300 font-bold" data-aos="fade-right">
              {val.text}
            </h3>
            <br/>
            <h1 className="text-5xl font-bold text-amber-500">
                <Typewriter
                  options={{
                    strings: [`${val.name}`, `${val.fullstack}`,`${val.post}`, `${val.design}`,],
                    autoStart: true,
                    loop: true,
                 }}
                 />
             </h1>
             <br/>
            <p className="text-stone-600" data-aos="fade-left">
              {val.desc}
            </p>
            <button className="primaryBtn mt-4 font-semibold px-8 py-3 bg-transparent border-2 border-gray-500 text-stone-100 rounded-full hover:bg-yellow-300 hover:text-white transition duration-300 ease-in-out transform hover:scale-105 shadow-xl hover:shadow-4xl" data-aos="fade-up-right">
              Download CV
            </button>
          </div>
        ))}
      </div>
    </section>
  )
}

export default TextChange
