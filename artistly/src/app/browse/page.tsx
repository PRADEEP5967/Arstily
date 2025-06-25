'use client';
import React, { useState, useEffect } from "react";
import ArtistCard, { Artist } from "../../components/ArtistCard";
import artistsData from "../../mock-artists.json";
import FilterBlock from "../../components/FilterBlock";

const categories = ["All", ...Array.from(new Set((artistsData as Artist[]).map(a => a.category)))];
const locations = ["All", ...Array.from(new Set((artistsData as Artist[]).map(a => a.location)))];
const priceRanges = ["All", ...Array.from(new Set((artistsData as Artist[]).map(a => a.priceRange)))];

export default function BrowseArtists() {
  const [category, setCategory] = useState("All");
  const [location, setLocation] = useState("All");
  const [priceRange, setPriceRange] = useState("All");
  const [loading, setLoading] = useState(false);
  const artists = artistsData as Artist[];

  const filtered = artists.filter(a =>
    (category === "All" || a.category === category) &&
    (location === "All" || a.location === location) &&
    (priceRange === "All" || a.priceRange === priceRange)
  );

  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timeout);
  }, [category, location, priceRange]);

  return (
    <main className="max-w-6xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-blue-600 mb-6">Browse Artists</h2>
      {/* Filtering Controls */}
      <FilterBlock
        category={category}
        setCategory={setCategory}
        categories={categories}
        location={location}
        setLocation={setLocation}
        locations={locations}
        priceRange={priceRange}
        setPriceRange={setPriceRange}
        priceRanges={priceRanges}
      />
      <button
        onClick={() => {
          setCategory('All');
          setLocation('All');
          setPriceRange('All');
        }}
        className="mb-6 px-4 py-2 bg-gray-100 text-gray-700 rounded hover:bg-gray-200 transition text-sm font-medium"
      >
        Clear Filters
      </button>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {loading ? (
          Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="animate-pulse bg-gray-100 rounded-lg p-4 h-72 flex flex-col items-center">
              <div className="w-28 h-28 bg-gray-200 rounded-full mb-4" />
              <div className="h-5 w-2/3 bg-gray-200 rounded mb-2" />
              <div className="h-4 w-1/2 bg-gray-200 rounded mb-2" />
              <div className="h-4 w-1/3 bg-gray-200 rounded mb-2" />
              <div className="h-4 w-1/2 bg-gray-200 rounded mb-4" />
              <div className="h-8 w-full bg-gray-200 rounded" />
            </div>
          ))
        ) : filtered.length > 0 ? (
          filtered.map((artist) => <ArtistCard key={artist.id} artist={artist} />)
        ) : (
          <div className="col-span-full text-gray-500 text-center py-12">No artists found for selected filters.</div>
        )}
      </div>
    </main>
  );
} 