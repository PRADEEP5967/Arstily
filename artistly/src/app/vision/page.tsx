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

function RocketIcon({ className = "" }) {
  return (
    <svg
      className={className}
      fill="currentColor"
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      aria-hidden="true"
    >
      <path d="M2 16.5V22h5.5l9.29-9.29-5.5-5.5L2 16.5zm19.71-13.04a1.003 1.003 0 0 0-1.42 0l-2.34 2.34 5.5 5.5 2.34-2.34a1.003 1.003 0 0 0 0-1.42l-4.08-4.08zm-3.32 3.32l-1.5 1.5 5.5 5.5 1.5-1.5-5.5-5.5z" />
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
    title: "Connect",
    desc: "Bridging event planners and artists worldwide.",
  },
  {
    icon: <PaletteIcon className="text-pink-500 text-2xl" />,
    title: "Create",
    desc: "Empowering creativity and unique experiences.",
  },
  {
    icon: <RocketIcon className="text-green-500 text-2xl" />,
    title: "Innovate",
    desc: "Seamless, transparent, and accessible talent booking.",
  },
  {
    icon: <LightbulbIcon className="text-yellow-400 text-2xl" />,
    title: "Inspire",
    desc: "Fostering unforgettable moments for all.",
  },
];

export default function VisionPage() {
  const [selected, setSelected] = useState(0);

  return (
    <main className="max-w-3xl mx-auto px-4 py-12 animate-fade-in">
      <section className="flex flex-col items-center mb-8">
        <h1 className="text-5xl font-extrabold text-blue-700 mb-2 tracking-tight drop-shadow-lg">
          Vision
        </h1>
        <p className="text-lg text-gray-600 text-center max-w-xl">
          Trusted, innovative, and creative: the future of connecting talent and events.
        </p>
      </section>
      <section className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
        {features.map((f, i) => (
          <button
            key={f.title}
            className={`flex items-center gap-4 p-5 rounded-xl border transition-all shadow-sm hover:shadow-lg focus:outline-none ${
              selected === i
                ? "bg-blue-50 border-blue-400"
                : "bg-white border-gray-200"
            }`}
            onClick={() => setSelected(i)}
            aria-pressed={selected === i}
          >
            {f.icon}
            <div>
              <div className="font-semibold text-lg">{f.title}</div>
              <div className="text-gray-500 text-sm">{f.desc}</div>
            </div>
          </button>
        ))}
      </section>
      <section className="bg-gradient-to-r from-blue-100 to-pink-100 rounded-xl p-6 shadow-inner text-center">
        <h2 className="text-2xl font-bold mb-2 text-blue-800">
          {features[selected].title}
        </h2>
        <p className="text-gray-700 text-base">{features[selected].desc}</p>
        <div className="mt-4 flex justify-center">
          {features[selected].icon}
        </div>
      </section>
    </main>
  );
}