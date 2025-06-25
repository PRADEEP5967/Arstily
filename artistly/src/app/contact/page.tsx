'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate form submission
    setIsSubmitted(true)
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: '', email: '', subject: '', message: '' })
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      {/* Navigation */}
      <nav className="navbar">
        <div className="responsive-container flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-primary">
            Artistly
          </Link>
          <div className="hidden md:flex space-x-6">
            <Link href="/browse" className="nav-link">Browse Artists</Link>
            <Link href="/about" className="nav-link">About</Link>
            <Link href="/contact" className="nav-link active">Contact</Link>
            <Link href="/manager" className="nav-link">Manager Portal</Link>
          </div>
        </div>
      </nav>

      <div className="responsive-container py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="card-glass p-8">
              <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
              
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Name</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="input-modern"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-1">Email</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="input-modern"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-1">Subject</label>
                    <select
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="input-modern"
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="booking">Booking Support</option>
                      <option value="artist">Artist Application</option>
                      <option value="technical">Technical Issue</option>
                      <option value="partnership">Partnership</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-1">Message</label>
                    <textarea
                      name="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="textarea-modern"
                      placeholder="How can we help you?"
                    />
                  </div>
                  
                  <button type="submit" className="btn-modern w-full">
                    Send Message
                  </button>
                </form>
              ) : (
                <div className="text-center py-8">
                  <div className="text-6xl mb-4 success-checkmark">✓</div>
                  <h3 className="text-xl font-semibold mb-2">Message Sent!</h3>
                  <p className="text-gray-600">We'll get back to you within 24 hours.</p>
                </div>
              )}
            </div>
            
            <div className="space-y-6">
              <div className="card-glass p-6">
                <h3 className="text-xl font-semibold mb-3">📧 Email Us</h3>
                <p className="text-gray-600">hello@artistly.com</p>
                <p className="text-gray-600">support@artistly.com</p>
              </div>
              
              <div className="card-glass p-6">
                <h3 className="text-xl font-semibold mb-3">📞 Call Us</h3>
                <p className="text-gray-600">+1 (555) 123-4567</p>
                <p className="text-gray-600">Mon-Fri, 9AM-6PM EST</p>
              </div>
              
              <div className="card-glass p-6">
                <h3 className="text-xl font-semibold mb-3">🏢 Visit Us</h3>
                <p className="text-gray-600">
                  123 Entertainment Ave<br />
                  New York, NY 10001<br />
                  United States
                </p>
              </div>
              
              <div className="card-glass p-6">
                <h3 className="text-xl font-semibold mb-3">🕒 Business Hours</h3>
                <p className="text-gray-600">
                  Monday - Friday: 9:00 AM - 6:00 PM<br />
                  Saturday: 10:00 AM - 4:00 PM<br />
                  Sunday: Closed
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}