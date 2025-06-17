import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMenuOpen(false)
  }, [location])

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <nav className={`fixed top-5 left-1/2 transform -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-6xl transition-all duration-300 ${isScrolled ? 'top-2' : ''}`}>
      <div className={`glass-strong ${isScrolled ? 'bg-white/80 shadow-md' : 'bg-white/60'} px-6 py-4 rounded-2xl transition-all duration-300`}>
        <div className="flex justify-between items-center">
          <div className="logo">
            <Link to="/" className="text-2xl md:text-3xl font-serif font-bold text-gray-900 hover:text-pink-500 transition-colors">
              LetsGathr
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            {[
              ['/', 'Home'],
              ['/about', 'About'],
              ['/events', 'Events'],
            
              ['/contact', 'Contact'],
            ].map(([path, label]) => {
              const isActive = location.pathname === path || (path === '/events' && location.pathname.includes('/events'))
              return (
                <Link
                  key={label}
                  to={path}
                  className={`font-medium relative transition-all duration-300 ${
                    isActive ? 'text-pink-500' : 'text-gray-700 hover:text-pink-500'
                  }`}
                >
                  {label}
                  {isActive && <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-pink-400 rounded-full"></div>}
                </Link>
              )
            })}
          </div>

          {/* Hamburger Icon */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="flex flex-col space-y-1 focus:outline-none">
              <span className={`w-6 h-0.5 bg-gray-800 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
              <span className={`w-6 h-0.5 bg-gray-800 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`w-6 h-0.5 bg-gray-800 transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden mt-4 transition-all duration-300 ${isMenuOpen ? 'opacity-100 max-h-64' : 'opacity-0 max-h-0 overflow-hidden'}`}>
          <div className="flex flex-col space-y-3 pt-4 border-t border-gray-300">
            {[
              ['/', 'Home'],
              ['/about', 'About'],
              ['/events', 'Events'],
      
              ['/contact', 'Contact'],
            ].map(([path, label]) => {
              const isActive = location.pathname === path || (path === '/events' && location.pathname.includes('/events'))
              return (
                <Link
                  key={label}
                  to={path}
                  className={`font-medium transition-colors ${
                    isActive ? 'text-pink-500' : 'text-gray-700 hover:text-pink-500'
                  }`}
                >
                  {label}
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
