"use client";
import React, { useState } from "react";

// Fallback SVG icons to replace react-icons/fa
function UsersIcon({ className = "" }) {
  return (
    <svg
      className={className}
      fill="currentColor"
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      aria-hidden="true"
    >
      <circle cx="7" cy="8" r="3" />
      <circle cx="17" cy="8" r="3" />
      <ellipse cx="7" cy="17" rx="5" ry="3" />
      <ellipse cx="17" cy="17" rx="5" ry="3" />
    </svg>
  );
}

function PaletteIcon({ className = "" }) {
  return (
    <svg
      className={className}
      fill="currentColor"
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      aria-hidden="true"
    >
      <path d="M12 2C6.48 2 2 6.03 2 11c0 3.87 3.13 7 7 7h1a1 1 0 0 1 0 2c-1.1 0-2 .9-2 2h6c0-1.1-.9-2-2-2a1 1 0 0 1 0-2h1c3.87 0 7-3.13 7-7 0-4.97-4.48-9-10-9zm-4 7a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm8 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm-4 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm6 2a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
    </svg>
  );
}

function GlobeIcon({ className = "" }) {
  return (
    <svg
      className={className}
      fill="currentColor"
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none"/>
      <ellipse cx="12" cy="12" rx="6" ry="10" stroke="currentColor" strokeWidth="2" fill="none"/>
      <ellipse cx="12" cy="12" rx="10" ry="6" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}

function LightbulbIcon({ className = "" }) {
  return (
    <svg
      className={className}
      fill="currentColor"
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      aria-hidden="true"
    >
      <path d="M9 21h6v-1H9v1zm3-19C7.48 2 4 5.48 4 10c0 2.38 1.19 4.47 3 5.74V18a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2.26c1.81-1.27 3-3.36 3-5.74 0-4.52-3.48-8-8-8zm1 15h-2v-2h2v2zm2.83-3.17C14.42 14.4 13.26 15 12 15s-2.42-.6-3.83-1.17C6.19 12.47 5 10.38 5 8c0-3.31 2.69-6 6-6s6 2.69 6 6c0 2.38-1.19 4.47-3.17 5.83z" />
    </svg>
  );
}

const features = [
  {
    icon: <UsersIcon className="text-blue-600 text-2xl" />,
    title: "Community",
    desc: "Connect with a diverse network of artists and organizers.",
  },
  {
    icon: <PaletteIcon className="text-pink-500 text-2xl" />,
    title: "Creativity",
    desc: "Showcase and discover unique talents worldwide.",
  },
  {
    icon: <GlobeIcon className="text-green-500 text-2xl" />,
    title: "Global Access",
    desc: "Book and collaborate with artists across the globe.",
  },
  {
    icon: <LightbulbIcon className="text-yellow-500 text-2xl" />,
    title: "Innovation",
    desc: "Advanced tools for seamless event planning and collaboration.",
  },
];

export default function MissionPage() {
  const [selected, setSelected] = useState(0);

  return (
    <main className="max-w-3xl mx-auto px-4 py-16 animate-fade-in">
      <section className="bg-gradient-to-r from-blue-50 to-white rounded-xl shadow-lg p-8 mb-8 flex flex-col items-center">
        <h1 className="text-5xl font-extrabold text-blue-800 mb-2 tracking-tight">Our Mission</h1>
        <p className="text-xl text-gray-700 text-center max-w-xl mb-4">
          Empowering creativity by connecting people with world-class artists, everywhere.
        </p>
        <div className="flex gap-2">
          {features.map((f, i) => (
            <button
              key={f.title}
              className={`rounded-full p-2 transition-all duration-200 ${selected === i ? "bg-blue-100 scale-110" : "bg-white hover:bg-blue-50"}`}
              aria-label={f.title}
              onClick={() => setSelected(i)}
            >
              {f.icon}
            </button>
          ))}
        </div>
      </section>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {features.map((f, i) => (
          <div
            key={f.title}
            className={`flex items-center gap-4 p-5 rounded-lg border transition-shadow duration-200 ${
              selected === i
                ? "border-blue-500 shadow-lg bg-blue-50"
                : "border-gray-200 bg-white hover:shadow"
            }`}
            onClick={() => setSelected(i)}
            tabIndex={0}
            role="button"
            aria-pressed={selected === i}
          >
            <div>{f.icon}</div>
            <div>
              <h3 className="font-semibold text-lg">{f.title}</h3>
              <p className="text-gray-600 text-sm">{f.desc}</p>
            </div>
          </div>
        ))}
      </section>
      <footer className="mt-12 text-center text-gray-400 text-xs">
        &copy; {new Date().getFullYear()} Artistly &mdash; Designed for creativity, powered by community.
      </footer>
    </main>
  );
}