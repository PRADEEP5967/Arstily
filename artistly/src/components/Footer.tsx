import Link from "next/link";
import React from "react";

const socialLinks = [
  {
    href: "https://instagram.com",
    label: "Instagram",
    icon: (
      <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zm4.25 3.25a5.25 5.25 0 1 1 0 10.5 5.25 5.25 0 0 1 0-10.5zm0 1.5a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5zm6 1.25a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
      </svg>
    ),
    color: "hover:text-pink-500"
  },
  {
    href: "https://twitter.com",
    label: "Twitter",
    icon: (
      <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M22.46 6c-.77.35-1.6.59-2.47.7a4.3 4.3 0 0 0 1.88-2.37 8.59 8.59 0 0 1-2.72 1.04A4.28 4.28 0 0 0 16.11 4c-2.37 0-4.29 1.92-4.29 4.29 0 .34.04.67.1.99C7.69 9.13 4.07 7.38 1.64 4.7c-.37.64-.58 1.38-.58 2.17 0 1.5.76 2.82 1.92 3.6a4.28 4.28 0 0 1-1.94-.54v.05c0 2.1 1.5 3.85 3.5 4.25-.36.1-.74.16-1.13.16-.28 0-.54-.03-.8-.08.54 1.7 2.1 2.94 3.95 2.97A8.6 8.6 0 0 1 2 19.54a12.13 12.13 0 0 0 6.56 1.92c7.88 0 12.2-6.53 12.2-12.2 0-.19 0-.37-.01-.56A8.7 8.7 0 0 0 24 4.59a8.5 8.5 0 0 1-2.54.7z"/>
      </svg>
    ),
    color: "hover:text-blue-400"
  }
];

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/career", label: "Careers" },
  { href: "/vision", label: "Vision" },
  { href: "/mission", label: "Mission" }
];

const relatedArtists = [
  { id: "r1", name: "Ava Lee", image: "/ava.jpg" },
  { id: "r2", name: "Noah Kim", image: "/noah.jpg" }
];

export default function Footer() {
  const year = 2024;
  return (
    <footer className="w-full bg-gradient-to-tr from-white via-blue-50 to-pink-50 border-t border-blue-100 mt-12 py-6">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left: Logo & Social */}
        <div className="flex flex-col items-center md:items-start gap-1">
          <Link href="/" className="text-2xl font-extrabold text-blue-700 tracking-tight flex items-center gap-2">
            <span className="inline-block animate-spin-slow">
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                <circle cx="12" cy="12" r="10" stroke="#a5b4fc" strokeWidth="2" />
                <circle cx="12" cy="12" r="6" stroke="#fbc2eb" strokeWidth="2" />
              </svg>
            </span>
            Artistly
          </Link>
          <p className="text-gray-500 text-xs">
            &copy; {year} Artistly. All rights reserved.
          </p>
          <div className="flex gap-3 mt-1">
            <a href="mailto:info@artistly.com" className="text-blue-600 hover:underline text-xs">info@artistly.com</a>
            {socialLinks.map(s => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-gray-400 ${s.color} transition`}
                aria-label={s.label}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>
        {/* Right: Nav */}
        <div className="flex flex-col items-center md:items-end gap-1">
          <nav className="flex gap-3 mb-1" aria-label="Footer navigation">
            {navLinks.map(link => (
              <Link key={link.href} href={link.href} className="text-gray-600 hover:text-blue-600 text-xs font-medium transition">{link.label}</Link>
            ))}
          </nav>
          <p className="text-gray-400 text-[11px] mt-1">
            Made with <span className="text-pink-500" role="img" aria-label="love">♥</span> for artists &amp; event planners Develop By Er Pradeep Sahani
          </p>
        </div>
      </div>
    </footer>
  );
}
