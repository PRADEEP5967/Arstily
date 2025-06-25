'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

interface ArtistSubmission {
  id: string
  name: string
  email: string
  category: string
  location: string
  priceRange: string
  submittedAt: string
  status: string
}

export default function DashboardPage() {
  const [submissions, setSubmissions] = useState<ArtistSubmission[]>([])

  useEffect(() => {
    const stored = localStorage.getItem('artistSubmissions')
    if (stored) {
      setSubmissions(JSON.parse(stored))
    }
  }, [])

  const handleDelete = (id: string) => {
    const updated = submissions.filter(s => s.id !== id)
    setSubmissions(updated)
    localStorage.setItem('artistSubmissions', JSON.stringify(updated))
  }

  const handleStatusChange = (id: string, newStatus: string) => {
    const updated = submissions.map(s => 
      s.id === id ? { ...s, status: newStatus } : s
    )
    setSubmissions(updated)
    localStorage.setItem('artistSubmissions', JSON.stringify(updated))
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
            <Link href="/contact" className="nav-link">Contact</Link>
            <Link href="/manager" className="nav-link">Manager Portal</Link>
          </div>
        </div>
      </nav>

      <div className="responsive-container py-12">
        <h1 className="text-4xl font-bold text-center mb-8">Artist Submissions Dashboard</h1>
        
        {submissions.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600 mb-4">No artist submissions yet.</p>
            <Link href="/manager/onboard" className="btn-modern">
              Add First Artist
            </Link>
          </div>
        ) : (
          <div className="manager-dashboard">
            <div className="overflow-x-auto">
              <table className="responsive-table">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Category</th>
                    <th>Location</th>
                    <th>Price Range</th>
                    <th>Status</th>
                    <th>Submitted</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {submissions.map((submission) => (
                    <tr key={submission.id}>
                      <td className="font-medium">{submission.name}</td>
                      <td>{submission.category}</td>
                      <td>{submission.location}</td>
                      <td>{submission.priceRange}</td>
                      <td>
                        <select
                          value={submission.status}
                          onChange={(e) => handleStatusChange(submission.id, e.target.value)}
                          className="text-sm border rounded px-2 py-1"
                        >
                          <option value="pending">Pending</option>
                          <option value="approved">Approved</option>
                          <option value="rejected">Rejected</option>
                        </select>
                      </td>
                      <td>{new Date(submission.submittedAt).toLocaleDateString()}</td>
                      <td>
                        <button
                          onClick={() => handleDelete(submission.id)}
                          className="text-red-600 hover:text-red-800 text-sm"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}