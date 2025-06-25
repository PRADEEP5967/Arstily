import { Suspense } from 'react'
import ArtistCard from '@/components/ArtistCard'
import FilterBlock from '@/components/FilterBlock'
import mockArtists from '@/mock-artists.json'

interface SearchParams {
  category?: string
  location?: string
  priceRange?: string
  search?: string
}

interface BrowsePageProps {
  searchParams: SearchParams
}

export default function BrowsePage({ searchParams }: BrowsePageProps) {
  const { category, location, priceRange, search } = searchParams

  // Filter artists based on search params
  const filteredArtists = mockArtists.filter(artist => {
    if (category && artist.category !== category) return false
    if (location && !artist.location.toLowerCase().includes(location.toLowerCase())) return false
    if (priceRange && artist.priceRange !== priceRange) return false
    if (search && !artist.name.toLowerCase().includes(search.toLowerCase())) return false
    return true
  })

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      {/* Navigation */}
      <nav className="navbar">
        <div className="responsive-container flex justify-between items-center">
          <a href="/" className="text-2xl font-bold text-primary">
            Artistly
          </a>
          <div className="hidden md:flex space-x-6">
            <a href="/browse" className="nav-link active">Browse Artists</a>
            <a href="/about" className="nav-link">About</a>
            <a href="/contact" className="nav-link">Contact</a>
            <a href="/manager" className="nav-link">Manager Portal</a>
          </div>
        </div>
      </nav>

      <div className="responsive-container py-8">
        <h1 className="text-4xl font-bold mb-8 text-center">Browse Artists</h1>
        
        <Suspense fallback={<div>Loading filters...</div>}>
          <FilterBlock />
        </Suspense>

        <div className="responsive-grid mt-8">
          {filteredArtists.length > 0 ? (
            filteredArtists.map((artist) => (
              <ArtistCard key={artist.id} artist={artist} />
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-xl text-gray-600">No artists found matching your criteria.</p>
              <a href="/browse" className="btn-modern mt-4 inline-block">
                Clear Filters
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}