'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import Link from 'next/link'

const schema = yup.object({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  phone: yup.string().required('Phone is required'),
  category: yup.string().required('Category is required'),
  location: yup.string().required('Location is required'),
  priceRange: yup.string().required('Price range is required'),
  bio: yup.string().required('Bio is required').min(50, 'Bio must be at least 50 characters'),
  experience: yup.string().required('Experience is required'),
  portfolio: yup.string().url('Must be a valid URL').required('Portfolio URL is required')
})

type FormData = yup.InferType<typeof schema>

export default function OnboardPage() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: yupResolver(schema)
  })

  const onSubmit = (data: FormData) => {
    // Save to localStorage (simulating backend)
    const existingArtists = JSON.parse(localStorage.getItem('artistSubmissions') || '[]')
    const newArtist = {
      id: Date.now().toString(),
      ...data,
      submittedAt: new Date().toISOString(),
      status: 'pending'
    }
    existingArtists.push(newArtist)
    localStorage.setItem('artistSubmissions', JSON.stringify(existingArtists))
    
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 flex items-center justify-center">
        <div className="card-glass p-12 text-center max-w-md">
          <div className="text-6xl mb-6 success-checkmark">✓</div>
          <h1 className="text-3xl font-bold mb-4">Application Submitted!</h1>
          <p className="text-gray-600 mb-6">
            Thank you for your interest in joining Artistly. We'll review your application and get back to you within 2-3 business days.
          </p>
          <Link href="/" className="btn-modern">
            Back to Home
          </Link>
        </div>
      </div>
    )
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
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8">Join Artistly</h1>
          <p className="text-center text-gray-600 mb-8">
            Fill out this form to apply as a performing artist on our platform.
          </p>
          
          <form onSubmit={handleSubmit(onSubmit)} className="onboard-form space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">Full Name</label>
              <input
                {...register('name')}
                className="input-modern"
                placeholder="Your full name"
              />
              {errors.name && <p className="error-message">{errors.name.message}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                {...register('email')}
                className="input-modern"
                placeholder="your@email.com"
              />
              {errors.email && <p className="error-message">{errors.email.message}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Phone</label>
              <input
                type="tel"
                {...register('phone')}
                className="input-modern"
                placeholder="Your phone number"
              />
              {errors.phone && <p className="error-message">{errors.phone.message}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Category</label>
              <select {...register('category')} className="input-modern">
                <option value="">Select your category</option>
                <option value="Singers">Singer</option>
                <option value="Dancers">Dancer</option>
                <option value="DJs">DJ</option>
                <option value="Speakers">Speaker</option>
                <option value="Indian Singers">Indian Singer</option>
                <option value="Indian Actresses">Indian Actress</option>
                <option value="Indian Models">Indian Model</option>
                <option value="Indian DJs">Indian DJ</option>
              </select>
              {errors.category && <p className="error-message">{errors.category.message}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Location</label>
              <input
                {...register('location')}
                className="input-modern"
                placeholder="City, State/Country"
              />
              {errors.location && <p className="error-message">{errors.location.message}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Price Range</label>
              <select {...register('priceRange')} className="input-modern">
                <option value="">Select your price range</option>
                <option value="$500 - $1,000">$500 - $1,000</option>
                <option value="$1,000 - $2,500">$1,000 - $2,500</option>
                <option value="$2,500 - $5,000">$2,500 - $5,000</option>
                <option value="$5,000 - $10,000">$5,000 - $10,000</option>
                <option value="$10,000+">$10,000+</option>
              </select>
              {errors.priceRange && <p className="error-message">{errors.priceRange.message}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Bio</label>
              <textarea
                {...register('bio')}
                rows={4}
                className="textarea-modern"
                placeholder="Tell us about yourself, your style, and what makes you unique..."
              />
              {errors.bio && <p className="error-message">{errors.bio.message}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Years of Experience</label>
              <input
                {...register('experience')}
                className="input-modern"
                placeholder="e.g., 5 years"
              />
              {errors.experience && <p className="error-message">{errors.experience.message}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Portfolio/Website URL</label>
              <input
                type="url"
                {...register('portfolio')}
                className="input-modern"
                placeholder="https://your-portfolio.com"
              />
              {errors.portfolio && <p className="error-message">{errors.portfolio.message}</p>}
            </div>

            <button type="submit" className="btn-modern w-full">
              Submit Application
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}