import Link from 'next/link'
import CategoryCard from '@/components/CategoryCard'

export default function HomePage() {
  const categories = [
    { name: 'Singers', icon: '🎤', count: 4 },
    { name: 'Dancers', icon: '💃', count: 1 },
    { name: 'DJs', icon: '🎧', count: 2 },
    { name: 'Speakers', icon: '🎙️', count: 1 },
    { name: 'Indian Singers', icon: '🎵', count: 1 },
    { name: 'Indian Actresses', icon: '🎭', count: 1 },
    { name: 'Indian Models', icon: '📸', count: 1 },
    { name: 'Indian DJs', icon: '🎶', count: 1 }
  ]

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
            <Link href="/contact" className="nav-link">Contact</Link>
            <Link href="/manager" className="nav-link">Manager Portal</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 text-center">
        <div className="responsive-container">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in-up">
            Book Amazing
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600"> Artists</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            Discover and book talented performers for your events. From singers to dancers, find the perfect artist for your special occasion.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{animationDelay: '0.4s'}}>
            <Link href="/browse" className="btn-modern">
              Browse Artists
            </Link>
            <Link href="/manager/onboard" className="btn-modern bg-gradient-to-r from-gray-600 to-gray-700">
              Join as Artist
            </Link>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16">
        <div className="responsive-container">
          <h2 className="text-3xl font-bold text-center mb-12">Browse by Category</h2>
          <div className="responsive-grid">
            {categories.map((category, index) => (
              <CategoryCard 
                key={category.name} 
                category={category} 
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white/50">
        <div className="responsive-container">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Artistly?</h2>
          <div className="responsive-grid">
            <div className="card-glass text-center p-8">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold mb-3">Curated Talent</h3>
              <p className="text-gray-600">Hand-picked artists with proven track records and exceptional skills.</p>
            </div>
            <div className="card-glass text-center p-8">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold mb-3">Quick Booking</h3>
              <p className="text-gray-600">Simple and fast booking process to secure your perfect artist.</p>
            </div>
            <div className="card-glass text-center p-8">
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="text-xl font-semibold mb-3">Secure Platform</h3>
              <p className="text-gray-600">Safe and secure transactions with full booking protection.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="responsive-container">
          <p>&copy; 2024 Artistly. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}