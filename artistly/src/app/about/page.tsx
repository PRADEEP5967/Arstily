import React from "react";

export default function AboutPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-blue-700 mb-4">About Artistly</h1>
      <p className="text-lg text-gray-700 mb-6">
        Artistly.com is a modern platform connecting event planners and artist managers to discover, book, and manage top performing artists across genres. Our mission is to make talent booking seamless, transparent, and accessible for everyone.
      </p>
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-2xl font-semibold text-blue-600 mb-2">What We Do</h2>
        <p className="text-gray-600 mb-2">
          We curate a diverse roster of singers, dancers, speakers, DJs, and more, making it easy for event organizers to find the perfect talent for any occasion. With intuitive tools for shortlisting, booking, and artist onboarding, Artistly streamlines the entire process.
        </p>
        <p className="text-gray-600">
          Whether you're planning a wedding, corporate event, or festival, Artistly is your trusted partner for exceptional entertainment experiences.
        </p>
      </div>
    </main>
  );
} 