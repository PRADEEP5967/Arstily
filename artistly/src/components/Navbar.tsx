"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

const infoLinks = [
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact Us" },
  { href: "/career", label: "Careers" },
  { href: "/vision", label: "Vision" },
  { href: "/mission", label: "Mission" },
];
const appLinks = [
  { href: "/browse", label: "Browse Artists" },
  { href: "/shortlist", label: "Shortlist" },
  { href: "/requests", label: "Booking Requests" },
  { href: "/manager", label: "Manager Dashboard" },
  { href: "/manager/onboard", label: "Add Artist", button: true },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [infoOpen, setInfoOpen] = useState(false);
  const [appOpen, setAppOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-md mb-6 sticky top-0 z-20">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3 relative">
        <Link href="/" className="text-xl font-bold text-blue-600 whitespace-nowrap">Artistly.com</Link>
        {/* Desktop: Centered Menu */}
        <div className="hidden sm:flex flex-1 justify-center items-center gap-2 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <Link
            href="/"
            className={pathname === "/" ? "text-blue-600 font-bold underline underline-offset-4 px-3 py-1" : "text-gray-700 hover:text-blue-600 font-medium px-3 py-1"}
          >
            Home
          </Link>
          {/* App Dropdown */}
          <div className="relative group">
            <button
              className="text-gray-700 hover:text-blue-600 font-medium px-3 py-1 rounded focus:outline-none flex items-center gap-1"
              tabIndex={0}
              onMouseEnter={() => setAppOpen(true)}
              onMouseLeave={() => setAppOpen(false)}
              onFocus={() => setAppOpen(true)}
              onBlur={() => setAppOpen(false)}
            >
              App <span className="text-xs">▼</span>
            </button>
            <div
              className={`absolute left-0 mt-2 w-56 bg-white rounded shadow-lg py-2 z-20 transition-all ${appOpen ? "block" : "hidden"}`}
              onMouseEnter={() => setAppOpen(true)}
              onMouseLeave={() => setAppOpen(false)}
            >
              {appLinks.map(link => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={
                    link.button
                      ? "block px-4 py-2 bg-blue-600 text-white rounded font-semibold shadow hover:bg-blue-700 transition text-sm my-1 mx-2" + (pathname === link.href ? " underline underline-offset-4" : "")
                      : (pathname === link.href ? "block px-4 py-2 text-blue-600 font-bold underline underline-offset-4" : "block px-4 py-2 text-gray-700 hover:text-blue-600 font-medium")
                  }
                  aria-current={pathname === link.href ? "page" : undefined}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          {/* Info Dropdown */}
          <div className="relative group">
            <button
              className="text-gray-700 hover:text-blue-600 font-medium px-3 py-1 rounded focus:outline-none flex items-center gap-1"
              tabIndex={0}
              onMouseEnter={() => setInfoOpen(true)}
              onMouseLeave={() => setInfoOpen(false)}
              onFocus={() => setInfoOpen(true)}
              onBlur={() => setInfoOpen(false)}
            >
              Info <span className="text-xs">▼</span>
            </button>
            <div
              className={`absolute left-0 mt-2 w-56 bg-white rounded shadow-lg py-2 z-20 transition-all ${infoOpen ? "block" : "hidden"}`}
              onMouseEnter={() => setInfoOpen(true)}
              onMouseLeave={() => setInfoOpen(false)}
            >
              {infoLinks.map(link => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={pathname === link.href ? "block px-4 py-2 text-blue-600 font-bold underline underline-offset-4" : "block px-4 py-2 text-gray-700 hover:text-blue-600 font-medium"}
                  aria-current={pathname === link.href ? "page" : undefined}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
        {/* Mobile */}
        <div className="sm:hidden flex items-center">
          <button
            className="text-gray-700 focus:outline-none"
            onClick={() => setMenuOpen(v => !v)}
            aria-label="Open menu"
          >
            <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"/></svg>
          </button>
        </div>
      </div>
      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <>
          <div className="fixed inset-0 bg-black bg-opacity-30 z-30" onClick={() => setMenuOpen(false)} />
          <div className="fixed top-0 left-0 w-full h-full overflow-y-auto bg-white z-40 flex flex-col pt-20 pb-8 animate-fade-in">
            <div className="max-w-7xl mx-auto w-full px-6 flex flex-col gap-2">
              <Link
                href="/"
                className={pathname === "/" ? "block px-6 py-2 text-blue-600 font-bold underline underline-offset-4" : "block px-6 py-2 text-gray-700 hover:text-blue-600 font-medium"}
                onClick={() => setMenuOpen(false)}
              >
                Home
              </Link>
              <div className="border-t my-2" />
              <div className="px-6 font-semibold text-gray-500">App</div>
              {appLinks.map(link => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={
                    link.button
                      ? "block px-6 py-2 bg-blue-600 text-white rounded font-semibold shadow hover:bg-blue-700 transition text-sm my-1" + (pathname === link.href ? " underline underline-offset-4" : "")
                      : (pathname === link.href ? "block px-6 py-2 text-blue-600 font-bold underline underline-offset-4" : "block px-6 py-2 text-gray-700 hover:text-blue-600 font-medium")
                  }
                  aria-current={pathname === link.href ? "page" : undefined}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="border-t my-2" />
              <div className="px-6 font-semibold text-gray-500">Info</div>
              {infoLinks.map(link => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={pathname === link.href ? "block px-6 py-2 text-blue-600 font-bold underline underline-offset-4" : "block px-6 py-2 text-gray-700 hover:text-blue-600 font-medium"}
                  aria-current={pathname === link.href ? "page" : undefined}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </>
      )}
    </nav>
  );
} 