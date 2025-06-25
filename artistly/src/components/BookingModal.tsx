'use client'

import { useState } from 'react'

interface Artist {
  id: string
  name: string
  category: string
  priceRange: string
  location: string
  image: string
  bio: string
}

interface BookingModalProps {
  artist: Artist
  onClose: () => void
}

export default function BookingModal({ artist, onClose }: BookingModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventDate: '',
    eventType: '',
    message: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate booking submission
    setIsSubmitted(true)
    setTimeout(() => {
      onClose()
    }, 2000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className="close-btn">×</button>
        
        {!isSubmitted ? (
          <>
            <h2 className="text-2xl font-bold mb-4">Book {artist.name}</h2>
            <p className="text-gray-600 mb-6">{artist.category} • {artist.priceRange}</p>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Your Name</label>
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
                <label className="block text-sm font-medium mb-1">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="input-modern"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">Event Date</label>
                <input
                  type="date"
                  name="eventDate"
                  required
                  value={formData.eventDate}
                  onChange={handleChange}
                  className="input-modern"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">Event Type</label>
                <select
                  name="eventType"
                  required
                  value={formData.eventType}
                  onChange={handleChange}
                  className="input-modern"
                >
                  <option value="">Select event type</option>
                  <option value="wedding">Wedding</option>
                  <option value="corporate">Corporate Event</option>
                  <option value="birthday">Birthday Party</option>
                  <option value="concert">Concert</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">Message</label>
                <textarea
                  name="message"
                  rows={3}
                  value={formData.message}
                  onChange={handleChange}
                  className="textarea-modern"
                  placeholder="Tell us about your event..."
                />
              </div>
              
              <button type="submit" className="btn-modern w-full">
                Send Booking Request
              </button>
            </form>
          </>
        ) : (
          <div className="text-center py-8">
            <div className="text-6xl mb-4 success-checkmark">✓</div>
            <h2 className="text-2xl font-bold mb-2">Booking Request Sent!</h2>
            <p className="text-gray-600">We'll get back to you within 24 hours.</p>
          </div>
        )}
      </div>
    </div>
  )
}