"use client"
import React, { useEffect } from 'react'
import { Heading } from '../heading'
import { about } from '../DummyData/DummyData'
import Aos from 'aos'
import "aos/dist/aos.css"

const About = () => {

  useEffect(() => {
    Aos.init({
      duration: 1000, // Animation duration (in ms)
      once: true,      // Animation runs only once
    });
  }, []);

  return (
    <section className="about h-100 py-10">
      <div className="container mx-auto px-4">
        {about.map((val, index) => (
          <div key={index} data-aos="fade-down-left">
            <Heading title="About Me" className="text-5xl font-poppins text-yellow-500 text-center mb-6" />
            <p className="text-gray-500	 font-poppins mt-4 text-lg  font-poppins">{val.desc}</p>
            {/* <p className=" font-poppins mt-4 text-lg leading-relaxed  font-poppins mb-10">{val.desc1}</p> */}

            {/* Card Container */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
              
              {/* Frontend Card with fade-right */}
              <div
                className="frontend rounded-lg shadow-lg p-6 text-left font-poppins hover:shadow-xl transition-shadow duration-300 min-h-[16rem]" // Set min-height
                data-aos='flip-left'
              >
                <h3 className="text-3xl font-bold text-blue-600 font-poppins mb-4">{val.frontendtitle}</h3>
                <p className=" text-gray-500 font-poppins">{val.frontendcontent}</p>
              </div>

              {/* Backend Card with fade-up */}
              <div
                className="backend rounded-lg text-left shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 min-h-[16rem]" // Set min-height
                data-aos='flip-left'
              >
                <h3 className="text-2xl font-bold text-green-600 mb-4 font-poppins">{val.backendtitle}</h3>
                <p className="text-gray-500 font-poppins">
                  {val.backendcontent}
                </p>
              </div>

              {/* Database Card with fade-left */}
              <div
                className="tools rounded-lg text-left shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 min-h-[16rem]" // Set min-height
                data-aos='flip-left'
              >
                <h3 className="text-2xl font-bold text-purple-600 mb-4 font-poppins">{val.tools}</h3>
                <p className="text-gray-500 font-poppins ">{val.toolscontent}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default About
