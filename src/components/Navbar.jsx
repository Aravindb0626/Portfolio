import React, { useState } from 'react'
import Contact from './Contact'

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false)

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if(element){
      element.scrollIntoView({ behavior : "smooth"})
      setIsOpen(false)
    }
  }
  return (
    <nav className='sticky top-0 left-0 w-full bg-white shadow-md z-50'>
      <div className='max-w-7xl mx-auto flex justify-between items-center py-4 px-6 md:px-12'>
        <h1 className='text-2xl text-gray-900 font-bold'>Aravind <span className='text-red-500'>.</span></h1>

        {/* Desktop Menu */}

        <ul className='hidden md:flex space-x-8 text-gray-700 font-medium items-center'>
          {[ "home", "about", "resume", "projects", "contact"].map((item) => (
            <li key={item} onClick={() => scrollToSection(item)} className='hover:text-red-500 cursor-pointer capitalize transition'>
              {item}
            </li>
          ))}
          <button onClick={() =>scrollToSection("contact")} className='bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded transition cursor-pointer'>Hire me</button>
        </ul>

        <button className='md:hidden text-gray-800 text-3xl focus:outline-none' onClick={() => setIsOpen(!isOpen)}>{isOpen ? "✕" : "☰"}</button>
      </div>

      {isOpen && (
        <ul className='md:hidden flex flex-col px-6 py-4 space-y-4 text-gray-700 font-medium bg-white items-start border-t border-gray-200'>
          {["home", "about", "resume", "projects", "contact"].map((item) => (
            <li key={item} onClick={() => scrollToSection(item)} className='hover:text-red-500 cursor-pointer capitalize transition'>{item}</li>
          ))}
          <button onClick={() =>scrollToSection("contact")} className='bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded transition cursor-pointer'>Hire me</button>
        </ul>
      )}
    </nav>
  )
}

export default Navbar
