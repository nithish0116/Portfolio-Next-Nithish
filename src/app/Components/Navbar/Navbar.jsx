'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import { navlink } from '../DummyData/DummyData'
import { FaBars, FaTimes } from 'react-icons/fa'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-grey-950">
      <div className="navbar container mx-auto flex justify-between items-center px-5 py-5">
        <div className="logo">
          <h1 className="text-red-500 font-poppins text-3xl font-bold">Nithish</h1>
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex space-x-4">
          {navlink.map((links, i) => (
            <Link
              className="text-neutral-400 py-2 px-3 hover:bg-red-800 rounded-md transition-colors duration-300"
              href={links.url}
              key={i}
            >
              {links.text}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white text-2xl" onClick={toggleSidebar}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

        <div
          className={`fixed top-0 right-0 h-full w-2/3 bg-blue-950 text-white transform ${
            isOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300 ease-in-out z-50`}
        >
          <div className="flex flex-col items-start p-6 space-y-6">
            <button className="self-end text-2xl" onClick={toggleSidebar}>
              <FaTimes />
            </button>
            {navlink.map((links, i) => (
              <Link
                className="text-lg py-2 px-4 hover:bg-blue-800 rounded-md transition-colors duration-300 w-full"
                href={links.url}
                key={i}
                onClick={() => setIsOpen(false)}
              >
                {links.text}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar;
