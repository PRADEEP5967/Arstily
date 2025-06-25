import Link from 'next/link'

export default function ManagerPage() {
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
            <Link href="/manager" className="nav-link active">Manager Portal</Link>
          </div>
        </div>
      </nav>

      <div className="responsive-container py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8">Manager Portal</h1>
          
          <div className="responsive-grid">
            <div className="card-glass p-8 text-center">
              <div className="text-5xl mb-4">🎭</div>
              <h2 className="text-2xl font-semibold mb-4">Join as Artist</h2>
              <p className="text-gray-600 mb-6">
                Register your talent and start getting bookings from clients worldwide.
              </p>
              <Link href="/manager/onboard" className="btn-modern">
                Get Started
              </Link>
            </div>
            
            <div className="card-glass p-8 text-center">
              <div className="text-5xl mb-4">📊</div>
              <h2 className="text-2xl font-semibold mb-4">Manage Bookings</h2>
              <p className="text-gray-600 mb-6">
                View and manage your artist submissions and booking requests.
              </p>
              <Link href="/manager/dashboard" className="btn-modern">
                View Dashboard
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}