import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

const Events = () => {
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
      <section className="min-h-[70vh] flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-white/70 via-pink-100/40 to-white/70 z-10"></div>
          <img 
            src="https://images.pexels.com/photos/1024967/pexels-photo-1024967.jpeg?auto=compress&cs=tinysrgb&w=1600" 
            alt="Fashion exhibition background"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="container mx-auto px-4 z-20 text-center">
          <div className="fade-in-view max-w-3xl mx-auto pt-20">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-gray-900 mb-6">
              Our Events
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
              Curated experiences that celebrate culture, sustainability, and conscious living
            </p>
          </div>
        </div>
      </section>

      {/* Featured Event - The Rakhi Edit */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="section-title fade-in-view text-gray-800">Featured Event</h2>
          <div className="max-w-5xl mx-auto relative">
            <div className="glass-strong overflow-hidden group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 fade-in-view bg-gradient-to-br from-pink-100/40 to-purple-100/20">
              <div className="absolute top-4 left-4 z-10">
                <span className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                  Featured Event
                </span>
              </div>
              <div className="lg:grid lg:grid-cols-2 lg:gap-0">
                <div className="aspect-w-16 aspect-h-10 lg:aspect-h-full overflow-hidden">
                  <img 
                    src="https://www.jamuni.design/cdn/shop/files/5_d1484482-45bf-494d-9cb3-400e294a7162.jpg?v=1690803315" 
                    alt="The Rakhi Edit - Ties That Matter"
                    className="w-full h-64 lg:h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-8 lg:flex lg:flex-col lg:justify-center">
                  <h3 className="text-2xl md:text-3xl font-serif font-semibold text-gray-900 mb-3">
                    The Rakhi Edit - Ties That Matter
                  </h3>
                  <p className="text-pink-500 font-medium mb-4">
                    📅 July 26-27 (Bangalore) • Aug 2-3 (Pune)
                  </p>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    A celebration of sustainable fashion and traditional bonds, featuring curated exhibitions of eco-conscious brands, artisanal crafts, and meaningful connections. This signature event brings together heritage and innovation in a festival of conscious consumption.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="bg-pink-100 text-pink-600 px-3 py-1 rounded-full text-sm">🌱 Sustainable Fashion</span>
                    <span className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-sm">🎨 Artisanal Crafts</span>
                    <span className="bg-yellow-100 text-yellow-600 px-3 py-1 rounded-full text-sm">💎 Premium Brands</span>
                  </div>
                  <Link to="/events/rakhi-edit" className="btn-primary">
                    Explore This Event
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Event Features */}
      <section className="py-20 bg-gradient-to-b from-white to-pink-50">
        <div className="container mx-auto px-4">
          <h2 className="section-title fade-in-view text-gray-800">What Makes Our Events Special</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: '🎯',
                title: 'Curated Excellence',
                desc: 'Every brand and product is carefully selected based on quality, sustainability, and alignment with our values.',
              },
              {
                icon: '🌟',
                title: 'Immersive Experience',
                desc: 'Multi-sensory environments designed to engage, inspire, and create lasting memories for every visitor.',
              },
              {
                icon: '🤝',
                title: 'Meaningful Connections',
                desc: 'Opportunities to meet like-minded individuals, discover new brands, and build lasting relationships.',
              },
              {
                icon: '📈',
                title: 'Brand Growth',
                desc: 'Comprehensive support for exhibitors including marketing, networking, and post-event engagement strategies.',
              },
            ].map((feature, i) => (
              <div key={i} className="glass text-center p-8 hover:glass-strong transition-all duration-300 hover:-translate-y-2 fade-in-view">
                <div className="text-5xl mb-6">{feature.icon}</div>
                <h3 className="text-lg font-serif font-semibold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-t from-pink-50 to-white">
        <div className="container mx-auto px-4">
          <div className="glass-strong text-center p-12 max-w-4xl mx-auto fade-in-view bg-gradient-to-br from-pink-100/40 to-purple-100/20">
            <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-6">
              Ready to Join Our Event?
            </h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Whether you're a conscious consumer looking for unique experiences or a brand seeking the perfect platform, we'd love to connect with you.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/contact" className="btn-primary text-lg px-8 py-4">
                Become an Exhibitor
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Events
