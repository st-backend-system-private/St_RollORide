"use client";

import { useState } from "react";
import { ArrowLeft, Bike, Menu, X } from "lucide-react";

export default function Navbar({ onOpenEarlyAccess }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Features", href: "#features" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "For Drivers", href: "#for-drivers" },
    { name: "Safety", href: "#safety" },
  ];

  const handleScroll = (e, href) => {
    setMobileMenuOpen(false);
    if (href.startsWith("#")) {
      const targetId = href.replace("#", "");
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        e.preventDefault();
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const handleDownloadClick = (e) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (onOpenEarlyAccess) {
      onOpenEarlyAccess();
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Left Section: Shatripthi Link + Divider + RollORide Logo */}
        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href="https://shatripthi.tech"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-[11px] sm:text-xs text-gray-500 hover:text-brand-orange transition-colors font-medium shrink-0"
          >
            <ArrowLeft className="w-3.5 h-3.5 text-brand-orange" />
            <span>Shatripthi.tech</span>
          </a>

          <div className="h-4 sm:h-5 w-px bg-gray-200 mx-0.5 sm:mx-1 shrink-0" />

          <a
            href="#hero"
            onClick={(e) => handleScroll(e, "#hero")}
            className="flex items-center gap-2 group shrink-0"
          >
            <img
              src="/logo.png"
              alt="RollORide Logo"
              className="h-10 sm:h-12 w-auto object-contain transition-transform group-hover:scale-105"
            />
          </a>
        </div>

        {/* Center Section: Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleScroll(e, link.href)}
              className="text-gray-600 hover:text-brand-dark text-sm font-semibold transition-colors relative py-1 group"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-orange transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Right Section: Download App Button */}
        <div className="hidden md:flex items-center">
          <button
            onClick={handleDownloadClick}
            className="bg-brand-orange hover:bg-orange-600 text-white font-semibold text-sm px-6 py-2.5 rounded-full transition-all shadow-md shadow-orange-500/25 hover:shadow-lg hover:shadow-orange-500/35 active:scale-95 flex items-center gap-2"
          >
            Download App
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-gray-700 hover:text-brand-orange focus:outline-none rounded-lg"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 px-4 pt-2 pb-6 space-y-3 shadow-xl">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleScroll(e, link.href)}
              className="block px-3 py-2 text-base font-semibold text-gray-700 hover:text-brand-orange hover:bg-orange-50 rounded-lg transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2">
            <button
              onClick={handleDownloadClick}
              className="w-full text-center block bg-brand-orange hover:bg-orange-600 text-white font-semibold text-sm px-6 py-3 rounded-full shadow-md"
            >
              Download App
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
