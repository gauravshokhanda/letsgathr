import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="mt-20 pt-16 pb-8 bg-gradient-to-t from-pink-50 to-white">
      <div className="container mx-auto px-4">
        <div className="glass-strong p-10 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Branding Info */}
            <div className="space-y-4">
              <h3 className="text-2xl font-serif font-bold text-gray-900">LetsGathr</h3>
              <p className="text-gradient font-medium">Curation Meets Celebration</p>
              <p className="text-gray-700 leading-relaxed">
                Creating elite experiences through fashion, lifestyle, and cultural events that blend luxury with social consciousness.
              </p>
            </div>

            {/* Navigation */}
            <div className="space-y-4">
              <h4 className="text-lg font-serif font-semibold text-gray-900">Quick Links</h4>
              <div className="flex flex-col space-y-2">
                <Link to="/" className="text-gray-700 hover:text-pink-500 transition-colors">Home</Link>
                <Link to="/about" className="text-gray-700 hover:text-pink-500 transition-colors">About</Link>
                <Link to="/events" className="text-gray-700 hover:text-pink-500 transition-colors">Events</Link>
              
                <Link to="/contact" className="text-gray-700 hover:text-pink-500 transition-colors">Contact</Link>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h4 className="text-lg font-serif font-semibold text-gray-900">Contact Info</h4>
              <div className="space-y-2">
                <p className="text-gray-700 flex items-center">
                  <span className="mr-2">📧</span>
                  letsgathr.events@gmail.com
                </p>
                <div className="flex space-x-4 mt-4">
                  <a href="#" className="text-2xl hover:text-pink-500 transition-transform hover:scale-110" aria-label="Instagram">📷</a>
                  <a href="#" className="text-2xl hover:text-pink-500 transition-transform hover:scale-110" aria-label="Facebook">📘</a>
                  <a href="#" className="text-2xl hover:text-pink-500 transition-transform hover:scale-110" aria-label="LinkedIn">💼</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center pt-6 border-t border-gray-300">
          <p className="text-gray-500">&copy; 2024 LetsGathr. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
