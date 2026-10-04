"use client";

import { FaFacebook, FaInstagram, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { Bike } from "lucide-react";
export default function Footer() {
  const companyLinks = [
    { name: "About", href: "#" },
    { name: "Careers", href: "#" },
    { name: "Blog", href: "#" },
  ];

  const productLinks = [
    { name: "Features", href: "#features" },
    { name: "Safety", href: "#safety" },
    { name: "Pricing", href: "#" },
  ];

  const legalLinks = [
    { name: "Privacy", href: "#" },
    { name: "Terms", href: "#" },
    { name: "Contact", href: "#" },
  ];

  const socialLinks = [
    { icon: FaXTwitter, href: "#", label: "Twitter" },
    { icon: FaInstagram, href: "#", label: "Instagram" },
    { icon: FaLinkedin, href: "#", label: "LinkedIn" },
    { icon: FaFacebook, href: "#", label: "Facebook" },
  ];

  return (
    <footer id="safety" className="bg-brand-dark text-white py-16 lg:py-20 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 pb-12 border-b border-slate-800">
          {/* Left Column: Logo & Tagline (takes 2 cols on lg) */}
          <div className="lg:col-span-2 space-y-4">
            <a href="#hero" className="flex items-center gap-2.5 group inline-flex">
              <img
                src="/logo.png"
                alt="RollORide Logo"
                className="h-12 w-auto object-contain bg-white rounded-xl p-1.5 transition-transform group-hover:scale-105"
              />
            </a>

            <p className="text-gray-400 text-sm max-w-sm leading-relaxed font-normal">
              Your Ride. Your Way. Instantly. Fast, reliable bike taxi and
              instant cargo delivery service across Kolkata.
            </p>

            {/* Contact Information */}
            <div className="text-xs text-gray-400 space-y-1 pt-1 font-medium">
              <p className="flex items-center gap-2">
                <span className="text-brand-orange font-bold">Email:</span> info@shatripthitechnologiespvtltd.in
              </p>
              <p className="flex items-center gap-2">
                <span className="text-brand-orange font-bold">Phone:</span> 90834 47938
              </p>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              {socialLinks.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <a
                    key={idx}
                    href={item.href}
                    aria-label={item.label}
                    className="w-9 h-9 rounded-full bg-slate-800/80 hover:bg-brand-orange text-gray-400 hover:text-white flex items-center justify-center transition-colors border border-slate-700/60"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Column 1: Company Links */}
          <div>
            <h4 className="font-heading font-extrabold text-sm text-white uppercase tracking-wider mb-4">
              Company
            </h4>
            <ul className="space-y-2.5">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-brand-orange text-sm font-medium transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Product Links */}
          <div>
            <h4 className="font-heading font-extrabold text-sm text-white uppercase tracking-wider mb-4">
              Product
            </h4>
            <ul className="space-y-2.5">
              {productLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-brand-orange text-sm font-medium transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Legal Links */}
          <div>
            <h4 className="font-heading font-extrabold text-sm text-white uppercase tracking-wider mb-4">
              Legal
            </h4>
            <ul className="space-y-2.5">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-brand-orange text-sm font-medium transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Line Copyright */}
        <div className="pt-8 text-center sm:flex sm:items-center sm:justify-between">
          <p className="text-xs text-gray-500 font-medium">
            © 2026 RollORide. All rights reserved.
          </p>

          <p className="text-xs text-gray-500 font-medium mt-2 sm:mt-0">
            Designed for Kolkata with ❤️
          </p>
        </div>
      </div>
    </footer>
  );
}
