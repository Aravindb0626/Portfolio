import React, { useEffect, useState } from 'react'
import { FaArrowUp, FaFacebookF, FaGithub, FaInstagram, FaLinkedinIn, FaPinterestP, FaTumblr, FaTwitter } from 'react-icons/fa'

const Footer = () => {

    const [showScroll, setShowScroll] =useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if(window.scrollY > 300) {
                setShowScroll(true)
            } else {
                setShowScroll(false)
            }
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const scrollToTop = () =>{
        window.scrollTo({ top : 0, behavior : "smooth"})
    }
  return (
    <footer className="bg-[#1b1e22] text-gray-300 py-10 relative">
      {/* Social Links */}
      <div className="flex flex-wrap justify-center gap-4 mb-6">
        {[
          // { name: "Facebook", icon: <FaFacebookF /> },
          // { name: "Twitter", icon: <FaTwitter /> },

          { name: "LinkedIn", icon: <FaLinkedinIn/>, link: 'https://www.linkedin.com/in/aravindb06'},
          { name: "Github", icon: <FaGithub/>, link: 'https://github.com/Aravindb0626?tab=repositories'},
          { name: "Instagram", icon: <FaInstagram />, link: 'https://www.instagram.com/stainless_steelboy?igsh=NnkxZW54a2w5OWEw' },
          
        //   { name: "Pinterest", icon: <FaPinterestP /> },
        //   { name: "Tumblr", icon: <FaTumblr /> },
        ].map((social, index) => (
          <a
            key={index}
            href={social.link}
            target='_blank'
            rel='noopener noreferrer'
            className="flex items-center gap-2 px-6 py-3 border border-gray-600 hover:border-yellow-400 hover:text-yellow-400 transition-all duration-300 uppercase font-semibold tracking-wide text-sm"
          >
            {social.icon} {social.name}
          </a>
        ))}
      </div>

      {/* Copyright */}
      <p className="text-center text-gray-400 text-sm">
        Copyright © 2025 | All Rights Reserved.
      </p>

      {/* Scroll to Top Button */}
      {showScroll && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-yellow-500 hover:bg-yellow-600 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all duration-300"
        >
          <FaArrowUp className="text-lg" />
        </button>
      )}
    </footer>
  )
}

export default Footer
