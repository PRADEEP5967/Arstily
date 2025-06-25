'use client'

import { useState } from 'react'
import BookingModal from './BookingModal'

interface Artist {
  id: string
  name: string
  category: string
  priceRange: string
  location: string
  image: string
  bio: string
}

interface ArtistCardProps {
  artist: Artist
}

export default function ArtistCard({ artist }: ArtistCardProps) {
  const [showBookingModal, setShowBookingModal] = useState(false)

  return (
    <>
      <div className="card-glass p-6 hover:shadow-lg transition-all duration-300">
        <div className="aspect-square bg-gradient-to-br from-purple-100 to-pink-100 rounded-lg mb-4 flex items-center justify-center">
          <span className="text-4xl">🎭</span>
        </div>
        
        <h3 className="text-xl font-semibold mb-2">{artist.name}</h3>
        <p className="text-gray-600 mb-2">{artist.category}</p>
        <p className="text-sm text-gray-500 mb-2">{artist.location}</p>
        <p className="text-lg font-bold text-primary mb-4">{artist.priceRange}</p>
        
        <p className="text-sm text-gray-600 mb-4 line-clamp-3">{artist.bio}</p>
        
        <div className="flex gap-2">
          <button 
            onClick={() => setShowBookingModal(true)}
            className="btn-modern flex-1"
          >
            Book Now
          </button>
          <button className="px-4 py-2 border border-gray-300 rounded-full hover:bg-gray-50 transition-colors">
            ♡
          </button>
        </div>
      </div>

      {showBookingModal && (
        <BookingModal 
          artist={artist} 
          onClose={() => setShowBookingModal(false)} 
        />
      )}
    </>
  )
}