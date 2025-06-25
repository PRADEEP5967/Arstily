import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { addToShortlist, removeFromShortlist, isShortlisted } from "../utils/shortlist";

export interface Artist {
  id: string;
  name: string;
  genre: string;
  image: string;
  bio: string;
  category: string;
  location: string;
  priceRange: string;
}

interface ArtistCardProps {
  artist: Artist;
}

const ArtistCard: React.FC<ArtistCardProps> = ({ artist }) => {
  const [shortlisted, setShortlisted] = useState(false);

  useEffect(() => {
    setShortlisted(isShortlisted(artist.id));
  }, [artist.id]);

  const handleShortlist = () => {
    if (shortlisted) {
      removeFromShortlist(artist.id);
      setShortlisted(false);
    } else {
      addToShortlist(artist.id);
      setShortlisted(true);
    }
  };

  return (
    <div
      className="relative bg-gradient-to-br from-blue-50 via-white to-blue-100 rounded-3xl shadow-xl p-6 flex flex-col items-center text-center group transition-all duration-300 hover:scale-105 hover:shadow-2xl"
      style={{
        minHeight: 420,
        boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.15)",
      }}
    >
      {/* Modern animated image ring */}
      <div className="relative mb-5">
        <span className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-400 via-pink-300 to-yellow-200 blur-sm opacity-40 animate-spin-slow"></span>
        <Image
          src={artist.image}
          alt={artist.name}
          width={120}
          height={120}
          className="w-32 h-32 object-cover rounded-full border-4 border-white shadow-lg z-10 relative transition-transform duration-300 group-hover:scale-110"
          onError={(e) => (e.currentTarget.src = "/next.svg")}
          priority
        />
        {/* Animated badge */}
        <span className="absolute bottom-2 right-2 bg-gradient-to-r from-blue-500 to-purple-400 text-white text-xs px-2 py-1 rounded-full shadow-md animate-bounce">
          {artist.category}
        </span>
      </div>
      <h3 className="text-2xl font-bold text-blue-800 mb-1 tracking-tight transition-colors duration-200 group-hover:text-blue-600">
        {artist.name}
      </h3>
      <p className="text-xs uppercase tracking-widest text-gray-400 mb-1 font-semibold">{artist.location}</p>
      <p className="text-lg text-blue-600 font-semibold mb-2">{artist.priceRange}</p>
      <p className="text-gray-700 text-sm mb-4 line-clamp-3">{artist.bio}</p>
      <div className="flex flex-col gap-2 w-full mt-auto">
        <Link
          href={`/browse/${artist.id}`}
          className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-500 text-white rounded-xl shadow hover:from-blue-700 hover:to-purple-600 transition-all duration-200 text-sm font-semibold w-full transform hover:-translate-y-1"
        >
          Ask for Quote
        </Link>
        <button
          onClick={handleShortlist}
          className={`px-4 py-2 rounded-xl text-sm font-semibold border transition-all duration-200 w-full shadow-sm ${
            shortlisted
              ? 'bg-green-100 text-green-700 border-green-300 hover:bg-green-200'
              : 'bg-gray-100 text-gray-700 border-gray-300 hover:bg-gray-200'
          } hover:scale-105`}
        >
          {shortlisted ? (
            <span className="flex items-center justify-center gap-2">
              <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
              Remove from Shortlist
            </span>
          ) : (
            <span className="flex items-center justify-center gap-2">
              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" /></svg>
              Add to Shortlist
            </span>
          )}
        </button>
        <Link
          href={`/browse/${artist.id}`}
          className="px-4 py-2 bg-white border border-blue-200 text-blue-700 rounded-xl hover:bg-blue-50 transition-all duration-200 text-sm font-semibold w-full shadow-sm hover:scale-105"
        >
          View Profile
        </Link>
      </div>
      {/* Subtle floating animation */}
      <style jsx>{`
        .animate-spin-slow {
          animation: spin 6s linear infinite;
        }
        @keyframes spin {
          0% { transform: rotate(0deg);}
          100% { transform: rotate(360deg);}
        }
      `}</style>
    </div>
  );
};

export default ArtistCard; 