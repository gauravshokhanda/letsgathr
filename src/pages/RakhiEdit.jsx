import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import rakhiedit from '../assets/rakhiedit.png'
import layout from '../assets/layout.png';
import layout2 from '../assets/layout2.png';

const RakhiEdit = () => {
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
          <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-pink-100/60 to-white/40 z-10"></div>
          <img 
            src={rakhiedit}
            alt="The Rakhi Edit celebration"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="container mx-auto px-4 z-20 text-center">
          <div className="fade-in-view max-w-4xl mx-auto pt-20">
            <div className="glass-strong p-12 rounded-3xl bg-gradient-to-br from-pink-100/60 to-purple-100/30">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-gray-900 mb-6">
                The Rakhi Edit
              </h1>
              <p className="text-xl md:text-2xl text-gradient font-medium mb-4">
                Ties That Matter
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                A celebration of sustainable fashion and traditional bonds, curating the perfect blend of heritage and innovation
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center text-pink-500 font-medium">
                <span>📍 Bangalore: July 26–27, 2024</span>
                <span>📍 Pune: August 2–3, 2024</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Event Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="fade-in-view">
              <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-6">
                Celebrating Bonds & Sustainability
              </h2>
              <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                <p>The Rakhi Edit is more than just an exhibition—it's a celebration of the timeless bonds that connect us, presented through the lens of sustainable fashion and conscious living.</p>
                <p>This flagship event brings together carefully curated brands that share our vision of preserving traditional values while embracing modern sustainable practices.</p>
                <p>Join us for an immersive experience where eco-conscious fashion meets artisanal craftsmanship, creating the perfect setting to celebrate the festival of Raksha Bandhan.</p>
              </div>
            </div>
            <div className="fade-in-view">
              <div className="glass p-8 space-y-6">
                <h3 className="text-2xl font-serif font-semibold text-gray-900">Event Highlights</h3>
                {[
                  ['🌱', 'Sustainable Fashion Showcase', 'Eco-friendly clothing and accessories from conscious brands'],
                  ['🎨', 'Artisanal Craft Exhibition', 'Handcrafted items from traditional Indian artisans'],
                  ['💎', 'Premium Lifestyle Brands', 'Curated selection of luxury sustainable products'],
                  ['🎵', 'Cultural Experiences', 'Live music, workshops, and interactive installations'],
                ].map(([icon, title, desc], i) => (
                  <div key={i} className="flex items-start space-x-3">
                    <span className="text-2xl">{icon}</span>
                    <div>
                      <h4 className="font-semibold text-gray-900">{title}</h4>
                      <p className="text-gray-600 text-sm">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Exhibitor Information */}
      <section className="py-20 bg-gradient-to-b from-white to-pink-50">
        <div className="container mx-auto px-4">
          <h2 className="section-title fade-in-view text-gray-800">Exhibitor Information</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              ['💰', 'Investment', '₹20,000', 'Complete package including setup, marketing, and support'],
              ['📐', 'Stall Specifications', '6x6 ft', 'Premium space with professional setup and branding opportunities'],
              ['🎯', 'Target Audience', '2000+', 'Conscious consumers seeking sustainable luxury experiences'],
            ].map(([icon, title, stat, desc], i) => (
              <div key={i} className="glass text-center p-8 fade-in-view">
                <div className="text-4xl mb-4">{icon}</div>
                <h3 className="text-xl font-serif font-semibold text-gray-900 mb-4">{title}</h3>
                <div className="text-3xl font-bold text-pink-500 mb-2">{stat}</div>
                <p className="text-gray-600">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Promotion Strategy */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="section-title fade-in-view text-gray-800">2-Month Promotion Strategy</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                phase: 'Pre-Event (4 Weeks)',
                color: 'bg-pink-400',
                points: [
                  'Social media campaigns across Instagram, Facebook, and LinkedIn',
                  'Influencer partnerships and brand ambassador programs',
                  'Email marketing to our curated customer database',
                  'Featured brand spotlights and behind-the-scenes content',
                  'PR outreach to lifestyle and fashion publications',
                ],
              },
              {
                phase: 'Post-Event (4 Weeks)',
                color: 'bg-purple-400',
                points: [
                  'Event recap content and highlights across all platforms',
                  'Customer testimonials and brand success stories',
                  'Continued online sales support and brand promotion',
                  'Networking opportunities with other participating brands',
                  'Feature in our next event announcements and newsletters',
                ],
              },
            ].map((block, i) => (
              <div key={i} className="glass p-8 fade-in-view">
                <h3 className="text-2xl font-serif font-semibold text-gray-900 mb-6 text-center">{block.phase}</h3>
                <div className="space-y-4">
                  {block.points.map((point, j) => (
                    <div key={j} className="flex items-start space-x-3">
                      <span className={`w-2 h-2 ${block.color} rounded-full mt-2 flex-shrink-0`}></span>
                      <p className="text-gray-700">{point}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

  {/* Gallery
<section className="py-20 bg-gradient-to-b from-white to-pink-50">
  <div className="container mx-auto px-4">
    <h2 className="section-title fade-in-view text-gray-800">Event Gallery</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
      {[
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPsJmt-sYo7OQlSE68OouhTP7LwC0sdsNbkw&s',
        'https://5.imimg.com/data5/IR/BH/MO/SELLER-44141435/whatsapp-image-2020-07-06-at-12-26-57-500x500.jpeg',
        'https://via.placeholder.com/800x600?text=Image+3',
        'https://via.placeholder.com/800x600?text=Image+4',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYGr80bw__JKaOy6NczHtcbE4B2eX6Lwe2f-o6faZuFx7JnzbDVeKI16YcmL2OuQVg-i4&usqp=CAU',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSksQYdAisAEHq2lFWq55Y5gUO3z8yB88wGuQ&s',
      ].map((url, i) => (
        <div key={i} className="glass overflow-hidden group fade-in-view">
          <img
            src={url}
            alt={`Gallery Image ${i + 1}`}
            className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      ))}
    </div>
  </div>
</section> */}


      <section className="py-20 bg-white">
  <div className="container mx-auto px-4">
    <h2 className="section-title fade-in-view text-gray-800 mb-12">Exhibition Stall Layouts</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
      
      <div className="glass fade-in-view overflow-hidden">
        <h3 className="text-xl font-serif font-semibold text-center text-gray-800 py-4 border-b border-gray-200">
        Bangalore Layout
        </h3>
        <img 
          src={layout} 
          alt="Pune Stall Layout" 
          className="w-full h-auto object-contain"
        />
      </div>
      
      <div className="glass fade-in-view overflow-hidden">
        <h3 className="text-xl font-serif font-semibold text-center text-gray-800 py-4 border-b border-gray-200">
          Pune Layout
        </h3>
        <img 
          src={layout2} 
          alt="Bangalore Stall Layout" 
          className="w-full h-auto object-contain"
        />
      </div>

    </div>
  </div>
</section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="glass-strong text-center p-12 max-w-4xl mx-auto fade-in-view bg-gradient-to-br from-pink-100/60 to-purple-100/30">
            <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-6">
              Ready to Join The Rakhi Edit?
            </h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Don’t miss this opportunity to be part of a celebration that perfectly blends tradition, sustainability, and luxury. Limited stalls available.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/contact" className="btn-primary text-lg px-8 py-4">
                Book Your Stall
              </Link>
              <Link to="/contact" className="btn-secondary text-lg px-8 py-4">
                Attend This Event
              </Link>
            </div>
            <div className="mt-8 text-sm text-gray-600">
              <p>Early bird discount available until June 30th • Limited to 50 exhibitors per city</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default RakhiEdit
