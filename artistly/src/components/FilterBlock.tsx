'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import { useState, useEffect } from 'react'

export default function FilterBlock() {
  const router = useRouter()
  const searchParams = useSearchParams()
  
  const [filters, setFilters] = useState({
    category: searchParams.get('category') || '',
    location: searchParams.get('location') || '',
    priceRange: searchParams.get('priceRange') || '',
    search: searchParams.get('search') || ''
  })

  const categories = [
    'All Categories',
    'Singers',
    'Dancers', 
    'DJs',
    'Speakers',
    'Indian Singers',
    'Indian Actresses',
    'Indian Models',
    'Indian DJs'
  ]

  const locations = [
    'All Locations',
    'New York, NY',
    'Los Angeles, CA',
    'Chicago, IL',
    'Miami, FL',
    'San Francisco, CA',
    'Austin, TX',
    'Mumbai, India',
    'Delhi, India'
  ]

  const priceRanges = [
    'All Price Ranges',
    '$500 - $1,000',
    '$600 - $1,200',
    '$700 - $1,300',
    '$800 - $1,500',
    '$1,000 - $2,500',
    '$1,200 - $2,000',
    '$1,500 - $3,000',
    '$2,000 - $5,000',
    '$3,000 - $7,000',
    '$10,000+'
  ]

  const handleFilterChange = (key: string, value: string) => {
    const newFilters = { ...filters, [key]: value === `All ${key.charAt(0).toUpperCase() + key.slice(1)}` || value === 'All Categories' || value === 'All Locations' || value === 'All Price Ranges' ? '' : value }
    setFilters(newFilters)
    
    // Update URL
    const params = new URLSearchParams()
    Object.entries(newFilters).forEach(([k, v]) => {
      if (v) params.set(k, v)
    })
    
    router.push(`/browse?${params.toString()}`)
  }

  return (
    <div className="filter-block">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div>
          <label className="block text-sm font-medium mb-2">Search</label>
          <input
            type="text"
            placeholder="Search artists..."
            value={filters.search}
            onChange={(e) => handleFilterChange('search', e.target.value)}
            className="input-modern"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-2">Category</label>
          <select
            value={filters.category || 'All Categories'}
            onChange={(e) => handleFilterChange('category', e.target.value)}
            className="input-modern"
          >
            {categories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-2">Location</label>
          <select
            value={filters.location || 'All Locations'}
            onChange={(e) => handleFilterChange('location', e.target.value)}
            className="input-modern"
          >
            {locations.map(location => (
              <option key={location} value={location}>{location}</option>
            ))}
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-2">Price Range</label>
          <select
            value={filters.priceRange || 'All Price Ranges'}
            onChange={(e) => handleFilterChange('priceRange', e.target.value)}
            className="input-modern"
          >
            {priceRanges.map(range => (
              <option key={range} value={range}>{range}</option>
            ))}
          </select>
        </div>
      </div>
    </div>
  )
}