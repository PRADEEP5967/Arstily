import Link from "next/link";
import Image from "next/image";
import React from "react";

const categories = [
  {
    name: "Singers",
    image: "/category-singers.svg",
    description: "Vocalists for every occasion: pop, jazz, classical, and more."
  },
  {
    name: "Dancers",
    image: "/category-dancers.svg",
    description: "From ballet to hip-hop, find talented dancers for your event."
  },
  {
    name: "Speakers",
    image: "/category-speakers.svg",
    description: "Motivational, keynote, and event speakers to inspire your audience."
  },
  {
    name: "DJs",
    image: "/category-djs.svg",
    description: "Professional DJs to keep the party going all night long."
  },
  {
    name: "Indian Singers",
    image: "/globe.svg",
    description: "Bollywood, classical, and regional Indian vocalists for every event."
  },
  {
    name: "Indian Actresses",
    image: "/file.svg",
    description: "Famous Indian film and TV actresses for appearances and performances."
  },
  {
    name: "Indian Models",
    image: "/globe.svg",
    description: "Top Indian models for fashion shows, shoots, and events."
  },
  {
    name: "Indian DJs",
    image: "/file.svg",
    description: "Popular Indian DJs for weddings, parties, and festivals."
  }
];

export default function Home() {
  return (
    <>
      <main className="flex flex-col items-center min-h-[80vh] px-4 gap-8 relative overflow-hidden">
        {/* Animated Gradient Background Blobs */}
        <div className="absolute -top-32 -left-32 w-[32rem] h-[32rem] bg-gradient-to-tr from-blue-200 via-pink-100 to-yellow-100 rounded-full blur-3xl opacity-40 animate-float z-0 pointer-events-none"></div>
        <div className="absolute -bottom-24 -right-24 w-[28rem] h-[28rem] bg-gradient-to-br from-purple-200 via-blue-100 to-pink-100 rounded-full blur-3xl opacity-30 animate-float2 z-0 pointer-events-none"></div>
        {/* Header */}
        <header className="w-full max-w-5xl flex flex-col items-center py-12 z-10 relative">
          <h1 className="text-5xl sm:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-500 to-pink-400 mb-3 drop-shadow-lg animate-fade-in">
            Artistly.com
          </h1>
          <p className="text-lg sm:text-2xl text-gray-700 max-w-2xl text-center font-medium animate-fade-in-up">
            The platform for Event Planners and Artist Managers to connect, book, and manage top performing artists.
          </p>
        </header>
        {/* Hero Section */}
        <section className="w-full max-w-4xl flex flex-col items-center gap-4 z-10 relative">
          <h2 className="text-3xl sm:text-4xl font-bold text-blue-800 mb-2 tracking-tight animate-fade-in-up">
            Book the perfect talent for your next event
          </h2>
          <p className="text-gray-600 text-center max-w-xl mb-4 text-lg animate-fade-in-up">
            Discover, shortlist, and book from a curated selection of singers, dancers, speakers, DJs, and more.
          </p>
          <Link
            href="/browse"
            className="px-10 py-3 bg-gradient-to-r from-blue-600 to-purple-500 text-white rounded-2xl font-semibold shadow-lg hover:from-blue-700 hover:to-purple-600 transition-all duration-200 text-lg transform hover:-translate-y-1 animate-bounce-slow"
          >
            Explore Artists
          </Link>
        </section>
        {/* Category Cards with Modern Design and Animation */}
        <section className="w-full max-w-5xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-10 z-10 relative">
          {categories.map((cat, idx) => (
            <div
              key={cat.name}
              className="relative bg-gradient-to-br from-white via-blue-50 to-purple-50 rounded-3xl shadow-xl p-7 flex flex-col items-center text-center group transition-all duration-300 hover:scale-105 hover:shadow-2xl animate-fade-in-up"
              style={{
                animationDelay: `${0.1 + idx * 0.08}s`,
                animationFillMode: "both"
              }}
            >
              {/* Animated Image Ring */}
              <div className="relative mb-5">
                <span className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-400 via-pink-300 to-yellow-200 blur-sm opacity-40 animate-spin-slow"></span>
            <Image
                  src={cat.image}
                  alt={cat.name}
                  width={72}
                  height={72}
                  className="w-20 h-20 object-contain rounded-full border-4 border-white shadow-lg z-10 relative transition-transform duration-300 group-hover:scale-110 bg-white"
                  priority
                />
              </div>
              <h3 className="text-xl font-bold text-blue-700 mb-2 group-hover:text-purple-600 transition-colors duration-200">
                {cat.name}
              </h3>
              <p className="text-gray-600 text-sm">{cat.description}</p>
        </div>
          ))}
        </section>
      </main>
      {/* Modern Info Section */}
      <section className="w-full bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 py-12 mt-16 border-t border-blue-100">
        <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-blue-700 mb-2">Our Mission</h3>
            <p className="text-gray-700 mb-4">To democratize access to world-class talent, making it easy for anyone to discover, book, and collaborate with artists globally. We are committed to transparency, diversity, and excellence in every interaction.</p>
            <h3 className="text-2xl font-bold text-purple-700 mb-2">Our Vision</h3>
            <p className="text-gray-700 mb-4">To be the world's most trusted and innovative platform for connecting event planners and artists, empowering creativity and unforgettable experiences everywhere.</p>
          </div>
          <div className="flex-1 flex flex-col items-center md:items-end">
            <h4 className="text-xl font-semibold text-blue-600 mb-2">Ready to get started?</h4>
            <Link href="/browse" className="mb-2 px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold shadow hover:bg-blue-700 transition text-lg">Explore Artists</Link>
            <Link href="/manager/onboard" className="px-8 py-3 bg-purple-600 text-white rounded-lg font-semibold shadow hover:bg-purple-700 transition text-lg">Join as an Artist</Link>
          </div>
        </div>
      </section>
    </>
  );
}
