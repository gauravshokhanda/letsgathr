import React, { useEffect } from 'react'

const About = () => {
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
      <section className="min-h-[80vh] flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-sky-100/70 to-white/80 z-10"></div>
          <img 
            src="https://images.pexels.com/photos/1389460/pexels-photo-1389460.jpeg?auto=compress&cs=tinysrgb&w=1600" 
            alt="Cultural celebration background"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="container mx-auto px-4 z-20 text-center">
          <div className="fade-in-view max-w-3xl mx-auto pt-20">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-gray-900 mb-6">
              Our Story
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
              Where tradition meets innovation in the world of curated experiences
            </p>
          </div>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="glass-strong p-12 max-w-4xl mx-auto text-center fade-in-view">
            <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-8">
              How LetsGathr Began
            </h2>
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed text-left">
              <p>
                Born from a passion for meaningful connections and cultural celebration, LetsGathr emerged as a response to the growing need for authentic, sustainable, and socially conscious events.
              </p>
              <p>
                Our journey started with a simple belief: that every gathering should be a celebration of culture, creativity, and community.
              </p>
              <p>
                Through carefully curated exhibitions, we create platforms where heritage crafts meet contemporary design, and every attendee leaves with stories and lasting connections.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="glass p-10 text-center fade-in-view">
              <div className="text-6xl mb-6">🎯</div>
              <h3 className="text-2xl font-serif font-semibold text-gray-900 mb-6">
                Our Mission
              </h3>
              <p className="text-gray-700 leading-relaxed">
                To create immersive, culturally rich experiences that celebrate tradition, promote sustainability, and foster meaningful connections.
              </p>
            </div>

            <div className="glass p-10 text-center fade-in-view">
              <div className="text-6xl mb-6">👁️</div>
              <h3 className="text-2xl font-serif font-semibold text-gray-900 mb-6">
                Our Vision
              </h3>
              <p className="text-gray-700 leading-relaxed">
                To become India's leading platform for sustainable luxury events that preserve heritage and inspire conscious living.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Deep Dive */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="section-title fade-in-view text-gray-800">What Drives Us</h2>

          <div className="space-y-8 max-w-5xl mx-auto">
            {[
              {
                icon: '🌱',
                title: 'Sustainability at Heart',
                content:
                  'Every event prioritizes environmental responsibility. From eco-conscious brands to zero-waste practices, we honor the planet at every step.',
              },
              {
                icon: '✨',
                title: 'Experience Design Excellence',
                content:
                  'We craft immersive, multi-sensory events with storytelling, soundscapes, and visuals to create lasting emotional impact.',
              },
              {
                icon: '🤝',
                title: 'Community-Centric Approach',
                content:
                  'We bridge artisans and conscious consumers, fostering collaborations, cultural exchange, and long-term relationships.',
              },
              {
                icon: '🏛️',
                title: 'Cultural Preservation',
                content:
                  'By providing platforms for traditional craftspeople, we ensure India’s cultural roots flourish in modern contexts.',
              },
            ].map((item, index) => (
              <div key={index} className="glass p-10 fade-in-view">
                <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                  <div className="text-6xl flex-shrink-0">{item.icon}</div>
                  <div>
                    <h3 className="text-2xl font-serif font-semibold text-gray-900 mb-4">
                      {item.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">{item.content}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="section-title fade-in-view text-gray-800">Our Curation Process</h2>

          <div className="space-y-6 max-w-4xl mx-auto">
            {[
              {
                step: '01',
                title: 'Concept Development',
                desc: 'Each event begins with a meaningful theme that resonates with cultural relevance and conscious living.',
              },
              {
                step: '02',
                title: 'Brand Selection',
                desc: 'We carefully select ethical, sustainable, and purpose-driven brands that align with our mission.',
              },
              {
                step: '03',
                title: 'Experience Design',
                desc: 'We build immersive environments that elevate storytelling and attendee engagement.',
              },
              {
                step: '04',
                title: 'Community Building',
                desc: 'Before, during, and after — we foster authentic community interaction and partnerships.',
              },
            ].map((step, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row items-center gap-8 fade-in-view"
              >
                <div className="text-4xl font-serif font-bold text-sky-500 w-20 text-center">
                  {step.step}
                </div>
                <div className="glass p-8 flex-1">
                  <h4 className="text-xl font-serif font-semibold text-gray-900 mb-3">
                    {step.title}
                  </h4>
                  <p className="text-gray-700">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
