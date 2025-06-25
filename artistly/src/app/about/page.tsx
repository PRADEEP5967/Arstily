import Link from 'next/link'

export default function AboutPage() {
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
            <Link href="/about" className="nav-link active">About</Link>
            <Link href="/contact" className="nav-link">Contact</Link>
            <Link href="/manager" className="nav-link">Manager Portal</Link>
          </div>
        </div>
      </nav>

      <div className="responsive-container py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8">About Artistly</h1>
          
          <div className="card-glass p-8 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="text-gray-700 leading-relaxed">
              Artistly is dedicated to connecting talented performing artists with clients who need 
              exceptional entertainment for their events. We believe that every event deserves 
              memorable performances, and every artist deserves a platform to showcase their talent.
            </p>
          </div>

          <div className="responsive-grid">
            <div className="card-glass p-6">
              <h3 className="text-xl font-semibold mb-3">🎯 Our Vision</h3>
              <p className="text-gray-600">
                To become the world's leading platform for booking performing artists, 
                making quality entertainment accessible to everyone.
              </p>
            </div>
            
            <div className="card-glass p-6">
              <h3 className="text-xl font-semibold mb-3">🤝 Our Values</h3>
              <p className="text-gray-600">
                We prioritize trust, quality, and seamless experiences for both 
                artists and clients in every interaction.
              </p>
            </div>
            
            <div className="card-glass p-6">
              <h3 className="text-xl font-semibold mb-3">🌟 Our Promise</h3>
              <p className="text-gray-600">
                We ensure every booking is handled professionally, with clear 
                communication and reliable service from start to finish.
              </p>
            </div>
          </div>

          <div className="card-glass p-8 mt-8 text-center">
            <h2 className="text-2xl font-semibold mb-4">Ready to Get Started?</h2>
            <p className="text-gray-600 mb-6">
              Whether you're looking to book an artist or join our platform as a performer, 
              we're here to help make your next event unforgettable.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/browse" className="btn-modern">
                Browse Artists
              </Link>
              <Link href="/manager/onboard" className="btn-modern bg-gradient-to-r from-gray-600 to-gray-700">
                Join as Artist
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}