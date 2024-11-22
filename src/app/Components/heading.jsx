import React from "react"

export const Heading = ({ title }) => {
  return (
    <>
      <h2
        className="text-4xl font-bold text-center text-yellow-400"
        data-aos="zoom-in-down"
      >
        {title}
      </h2>
    </>
  )
}
