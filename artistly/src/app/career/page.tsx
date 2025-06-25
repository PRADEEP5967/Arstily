"use client";
import React, { useState } from "react";

const POSITIONS = [
  {
    title: "Frontend Developer",
    tags: ["React", "Next.js", "TypeScript"],
    desc: "Build beautiful, performant UIs for artists and managers.",
    apply: "https://forms.gle/artistly-frontend"
  },
  {
    title: "UI/UX Designer",
    tags: ["Figma", "Design Systems", "Accessibility"],
    desc: "Craft intuitive, modern experiences for our platform.",
    apply: "https://forms.gle/artistly-designer"
  },
  {
    title: "Marketing Specialist",
    tags: ["Growth", "Content", "Social Media"],
    desc: "Drive Artistly's growth and brand presence.",
    apply: "https://forms.gle/artistly-marketing"
  },
  {
    title: "Artist Relations Manager",
    tags: ["Networking", "Support", "Onboarding"],
    desc: "Connect with artists and ensure their success on Artistly.",
    apply: "https://forms.gle/artistly-relations"
  }
];

export default function CareerPage() {
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState<null | number>(null);

  const filtered = POSITIONS.filter(
    p =>
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.tags.some(t => t.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <main className="max-w-2xl mx-auto px-4 py-12">
      <h1 className="text-3xl sm:text-4xl font-bold text-blue-700 mb-2">Careers @ Artistly</h1>
      <p className="text-gray-600 mb-6 text-base sm:text-lg">
        Help us shape the future of artist booking. <span className="font-semibold text-blue-600">Remote-first, flexible, creative.</span>
      </p>
      <div className="flex items-center gap-2 mb-6">
        <input
          type="text"
          placeholder="Search roles or skills…"
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="flex-1 border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-300 transition"
        />
        <button
          className="btn-modern"
          onClick={() => setSearch("")}
          aria-label="Clear search"
        >
          Clear
        </button>
      </div>
      <section className="space-y-4 mb-8">
        {filtered.length === 0 && (
          <div className="text-gray-500 text-center py-8">No positions found.</div>
        )}
        {filtered.map((pos, i) => (
          <div
            key={pos.title}
            className={`card-glass p-4 transition cursor-pointer border-2 ${selected === i ? "border-blue-500 shadow-lg" : "border-transparent hover:border-blue-300"}`}
            tabIndex={0}
            onClick={() => setSelected(selected === i ? null : i)}
            onKeyDown={e => (e.key === "Enter" || e.key === " ") && setSelected(selected === i ? null : i)}
            aria-expanded={selected === i}
            aria-label={`View details for ${pos.title}`}
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-blue-700">{pos.title}</h3>
                <div className="flex flex-wrap gap-2 mt-1">
                  {pos.tags.map(tag => (
                    <span key={tag} className="bg-blue-100 text-blue-700 text-xs px-2 py-0.5 rounded-full">{tag}</span>
                  ))}
                </div>
              </div>
              <a
                href={pos.apply}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-modern text-sm px-4 py-1"
                tabIndex={-1}
                onClick={e => e.stopPropagation()}
              >
                Apply
              </a>
            </div>
            {selected === i && (
              <div className="mt-3 text-gray-700 text-sm border-t pt-2">
                {pos.desc}
              </div>
            )}
          </div>
        ))}
      </section>
      <div className="text-center text-gray-600 text-sm">
        <span>
          No perfect fit? <a href="mailto:careers@artistly.com" className="text-blue-600 underline">Email us</a> with your resume &amp; ideas!
        </span>
        <div className="mt-4 flex flex-wrap justify-center gap-2 text-xs text-gray-400">
          <span>Modern stack</span>
          <span>Remote</span>
          <span>Inclusive</span>
          <span>Growth</span>
          <span>Design-driven</span>
          <span>Fracture-friendly</span>
        </div>
      </div>
    </main>
  );
}