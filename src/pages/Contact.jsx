import React, { useEffect } from 'react'

const Contact = () => {
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
          <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-pink-100/60 to-white/80 z-10"></div>
          <img 
            src="https://images.pexels.com/photos/1389460/pexels-photo-1389460.jpeg?auto=compress&cs=tinysrgb&w=1600" 
            alt="Contact us background"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="container mx-auto px-4 z-20 text-center">
          <div className="fade-in-view max-w-3xl mx-auto pt-20">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-gray-900 mb-6">
              Contact Us
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
              Ready to be part of our curated experiences? Let's connect and create something beautiful together.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div className="space-y-8 fade-in-view">
                <div className="glass p-8">
                  <h3 className="text-2xl font-serif font-semibold text-gray-900 mb-6">
                    Let's Connect
                  </h3>
                  <div className="space-y-6">
                    {[
                      {
                        icon: '📧',
                        title: 'Email',
                        value: 'letsgathr.events@gmail.com',
                        note: 'We respond within 24 hours',
                      },
                      {
                        icon: '📱',
                        title: 'WhatsApp',
                        value: '+91 98765 43210',
                        note: 'For quick inquiries and updates',
                      },
                      {
                        icon: '🌍',
                        title: 'Operating Cities',
                        value: 'Bangalore, Pune, Mumbai, Delhi',
                        note: 'Expanding to more cities soon',
                      },
                    ].map((item, i) => (
                      <div key={i} className="flex items-start space-x-4">
                        <div className="text-2xl">{item.icon}</div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-1">{item.title}</h4>
                          <p className="text-gray-700">{item.value}</p>
                          <p className="text-sm text-gray-500">{item.note}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="glass p-8">
                  <h3 className="text-2xl font-serif font-semibold text-gray-900 mb-6">
                    Follow Our Journey
                  </h3>
                  <div className="flex space-x-6">
                    {['📷', '📘', '💼', '🐦'].map((icon, i) => (
                      <a key={i} href="#" className="text-4xl hover:scale-110 transition-transform">
                        {icon}
                      </a>
                    ))}
                  </div>
                  <p className="text-gray-600 mt-4 text-sm">
                    Stay updated with our latest events, behind-the-scenes content, and brand spotlights.
                  </p>
                </div>

                <div className="glass p-8">
                  <h3 className="text-2xl font-serif font-semibold text-gray-900 mb-4">
                    Office Hours
                  </h3>
                  <div className="space-y-2 text-gray-700">
                    <p><span className="font-medium">Monday - Friday:</span> 10:00 AM - 7:00 PM</p>
                    <p><span className="font-medium">Saturday:</span> 10:00 AM - 5:00 PM</p>
                    <p><span className="font-medium">Sunday:</span> Closed</p>
                  </div>
                  <p className="text-sm text-gray-500 mt-3">
                    During event days, we're available extended hours for support.
                  </p>
                </div>
              </div>

              {/* Contact CTA */}
              <div className="fade-in-view">
                <div className="glass-strong p-8 h-full flex flex-col justify-center">
                  <h3 className="text-2xl font-serif font-semibold text-gray-900 mb-6 text-center">
                    Ready to Collaborate?
                  </h3>
                  <div className="space-y-6">
                    <p className="text-gray-700 text-center leading-relaxed">
                      Whether you're a brand looking to showcase your products or an attendee seeking unique experiences, we'd love to hear from you.
                    </p>
                    
                    <div className="space-y-4">
                      <div className="glass p-6 text-center">
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">For Brands & Exhibitors</h4>
                        <p className="text-gray-600 text-sm mb-4">Join our curated events and reach conscious consumers</p>
                        <a href="mailto:letsgathr.events@gmail.com?subject=Exhibitor Inquiry" className="btn-primary">
                          Become an Exhibitor
                        </a>
                      </div>

                      <div className="glass p-6 text-center">
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">For Event Attendees</h4>
                        <p className="text-gray-600 text-sm mb-4">Stay updated on our upcoming events and experiences</p>
                        <a href="mailto:letsgathr.events@gmail.com?subject=Event Updates" className="btn-secondary">
                          Get Event Updates
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Contact Form */}
<section className="py-20">
  <div className="container mx-auto px-4 max-w-4xl">
    <div className="glass-strong p-10 fade-in-view">
      <h2 className="text-3xl font-serif font-semibold text-gray-900 mb-6 text-center">
        Send Us a Message
      </h2>
      <form className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-gray-700 font-medium mb-1">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Your Full Name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">Email</label>
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
              required
            />
          </div>
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-1">Phone</label>
          <input
            type="tel"
            name="phone"
            placeholder="+91 XXXXX XXXXX"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-1">Message</label>
          <textarea
            name="message"
            rows="5"
            placeholder="Type your message here..."
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
            required
          ></textarea>
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="btn-primary text-lg px-8 py-3"
          >
            Submit Query
          </button>
        </div>
      </form>
    </div>
  </div>
</section>


      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-b from-white to-pink-50">
        <div className="container mx-auto px-4">
          <h2 className="section-title fade-in-view text-gray-800">Frequently Asked Questions</h2>
          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                q: 'How can I become an exhibitor at your events?',
                a: 'Email us directly at letsgathr.events@gmail.com with "Exhibitor Inquiry" in the subject line. We’ll send you full event details, pricing, and application process.',
              },
              {
                q: 'What types of brands do you work with?',
                a: 'We work with sustainable fashion, wellness, artisanal, and ethical lifestyle brands focused on quality and social impact.',
              },
              {
                q: 'How often do you organize events?',
                a: 'We host 4–6 major events per year, plus seasonal pop-ups. Our curation is deep, so each one is meaningful.',
              },
              {
                q: 'Do you provide marketing support for exhibitors?',
                a: 'Yes! We run 2-month campaigns including social, email, influencer, and post-event content to boost brand visibility.',
              },
            ].map((faq, i) => (
              <div key={i} className="glass p-6 fade-in-view">
                <h3 className="text-lg font-serif font-semibold text-gray-900 mb-3">
                  {faq.q}
                </h3>
                <p className="text-gray-700 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
