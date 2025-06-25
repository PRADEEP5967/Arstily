'use client';
import React, { useEffect, useState } from "react";
import ArtistCard, { Artist } from "../../components/ArtistCard";
import artistsData from "../../mock-artists.json";
import { getShortlist } from "../../utils/shortlist";

export default function ShortlistPage() {
  const [shortlisted, setShortlisted] = useState<Artist[]>([]);

  useEffect(() => {
    const ids = getShortlist();
    const allArtists = artistsData as Artist[];
    setShortlisted(allArtists.filter((a) => ids.includes(a.id)));
  }, []);

  return (
    <main className="max-w-3xl mx-auto px-4 py-8 relative">
      {/* Animated background gradient blob */}
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-gradient-to-tr from-blue-200 via-pink-100 to-yellow-100 rounded-full blur-3xl opacity-40 animate-float z-0 pointer-events-none"></div>
      <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-500 to-pink-400 mb-8 text-center drop-shadow-lg tracking-tight z-10 relative">
        My Shortlist
      </h2>
      {shortlisted.length === 0 ? (
        <div className="bg-gradient-to-br from-blue-50 via-white to-blue-100 rounded-3xl shadow-xl p-10 text-gray-500 text-center flex flex-col items-center gap-4 z-10 relative animate-fade-in">
          <svg className="w-16 h-16 text-blue-200 mb-2 animate-bounce" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
          </svg>
          <span className="text-lg font-semibold">Your shortlisted artists will appear here.</span>
          <span className="text-sm text-gray-400">Add some from <span className="text-blue-500 underline">Browse Artists</span>!</span>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 z-10 relative animate-fade-in-up">
          {shortlisted.map((artist, idx) => (
            <div
              key={artist.id}
              className="transition-transform duration-300 hover:scale-105"
              style={{
                animation: `fadeInUp 0.5s ${idx * 0.08 + 0.2}s both`
              }}
            >
              <ArtistCard artist={artist} />
            </div>
          ))}
        </div>
      )}
      {/* Modern floating animation keyframes */}
      <style jsx>{`
        .animate-float {
          animation: float 8s ease-in-out infinite alternate;
        }
        @keyframes float {
          0% { transform: translateY(0px) scale(1);}
          100% { transform: translateY(40px) scale(1.05);}
        }
        .animate-fade-in {
          animation: fadeIn 1s ease both;
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.8s cubic-bezier(0.23, 1, 0.32, 1) both;
        }
        @keyframes fadeIn {
          from { opacity: 0;}
          to { opacity: 1;}
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(40px);}
          to { opacity: 1; transform: translateY(0);}
        }
      `}</style>
    </main>
  );
} 