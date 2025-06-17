import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import girlsimage from '../assets/girls.png';
const Home = () => {
  const fadeInRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    const elements = document.querySelectorAll('.fade-in-view')
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-white/70 via-pink-100/60 to-white/20 z-10"></div>
          <img 
            src={girlsimage} 
            alt="Elegant fashion background"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="container mx-auto px-4 z-20 text-center">
          <div className="fade-in-view max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-gray-900 mb-6">
              LetsGathr
            </h1>
            <p className="text-2xl md:text-3xl lg:text-4xl text-sky-950 font-medium mb-6">
              Curation Meets Celebration
            </p>
            <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              Elite event curation combining luxury experiences with social consciousness and Indian tradition
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/events" className="bg-red-400 rounded-3xl text-lg px-8 py-4">
                View Events
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 bg-gradient-to-b from-pink-50 to-transparent">
        <div className="container mx-auto px-4">
          <div className="glass-strong p-12 max-w-4xl mx-auto text-center fade-in-view">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-gray-900 mb-8">
              Crafting Unforgettable Experiences
            </h2>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              We bring together culture, elegance, and ethical lifestyle through immersive events that celebrate tradition while embracing modern luxury. Each gathering is thoughtfully curated to create meaningful connections and lasting memories.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Event - The Rakhi Edit */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="section-title fade-in-view text-gray-800">Featured Event</h2>
          <div className="max-w-4xl mx-auto">
            <div className="glass-strong overflow-hidden group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 fade-in-view">
              <div className="lg:grid lg:grid-cols-2 lg:gap-0">
                <div className="aspect-w-16 aspect-h-10 lg:aspect-h-full overflow-hidden">
                  <img 
                    src="https://images.herzindagi.info/image/2024/Jul/raksha-bandhan-2024.jpg" 
                    alt="The Rakhi Edit Event"
                    className="w-full h-64 lg:h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-8 lg:flex lg:flex-col lg:justify-center bg-gradient-to-br from-pink-100/40 to-purple-100/20">
                  <h3 className="text-2xl md:text-3xl font-serif font-semibold text-gray-900 mb-3">
                    The Rakhi Edit - Ties That Matter
                  </h3>
                  <p className="text-pink-500 font-medium mb-4">
                    July 26-27 (Bangalore) • Aug 2-3 (Pune)
                  </p>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    A celebration of sustainable fashion and traditional bonds, featuring curated exhibitions of eco-conscious brands, artisanal crafts, and meaningful connections. This signature event brings together heritage and innovation in a festival of conscious consumption.
                  </p>
                  <Link 
                    to="/events/rakhi-edit" 
                    className="btn-primary"
                  >
                    Explore Event
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-b from-white to-pink-50">
        <div className="container mx-auto px-4">
          <h2 className="section-title fade-in-view text-gray-800">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: '🌱',
                title: 'Sustainability',
                desc: 'Promoting eco-conscious brands and sustainable practices in every event we curate.',
              },
              {
                icon: '✨',
                title: 'Experience Design',
                desc: 'Creating immersive, multi-sensory experiences that engage and inspire our attendees.',
              },
              {
                icon: '🤝',
                title: 'Community Curation',
                desc: 'Building meaningful connections between brands, creators, and conscious consumers.',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="glass text-center p-8 hover:glass-strong transition-all duration-300 hover:-translate-y-2 fade-in-view"
              >
                <div className="text-5xl mb-6">{item.icon}</div>
                <h3 className="text-xl font-serif font-semibold text-gray-900 mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
