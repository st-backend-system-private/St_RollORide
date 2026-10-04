"use client";

import { useState } from "react";
import Image from "next/image";
import { CheckCircle2, Clock } from "lucide-react";
import { riderBenefits } from "@/data/content";
import DriverModal from "./DriverModal";

export default function ForRiders() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section
      id="for-drivers"
      className="bg-brand-orange py-20 lg:py-28 relative overflow-hidden text-white"
      style={{
        backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.22) 1.5px, transparent 1.5px)`,
        backgroundSize: `22px 22px`,
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
          {/* Left Column: Text & Benefits */}
          <div className="w-full lg:w-[52%] flex flex-col items-start text-left z-10">
            {/* Eyebrow Label */}
            <span className="text-orange-100 text-xs sm:text-sm font-extrabold tracking-widest uppercase mb-3 inline-block">
              FOR RIDERS
            </span>

            {/* Heading */}
            <h2 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.08] mb-4">
              <span className="block">Drive with RollORide.</span>
              <span className="block">Earn More.</span>
            </h2>

            {/* Paragraph */}
            <p className="text-orange-100/90 text-base sm:text-lg leading-relaxed font-normal mb-8 max-w-xl">
              Join Kolkata&apos;s fastest-growing rider network. Set your own
              hours, earn competitive pay per ride, and benefit from weekly
              bonuses and performance rewards.
            </p>

            {/* 2x2 Grid of Translucent Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mb-10">
              {riderBenefits.map((benefit) => (
                <div
                  key={benefit.id}
                  className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 sm:p-5 text-white transition-all hover:bg-white/15"
                >
                  <div className="flex items-center gap-2.5 mb-1.5">
                    <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-4 h-4 text-white stroke-[2.5]" />
                    </div>
                    <h4 className="font-bold text-white text-base">
                      {benefit.title}
                    </h4>
                  </div>
                  <p className="text-orange-100/80 text-xs sm:text-sm pl-8">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Register as a Driver White Pill Button */}
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-white text-brand-orange hover:bg-orange-50 font-extrabold text-sm sm:text-base px-8 py-4 rounded-full transition-all shadow-xl shadow-black/10 active:scale-95 hover:shadow-2xl hover:scale-105"
            >
              Register as a Driver
            </button>
          </div>

          {/* Right Column: Image & Overlapping Earnings Card */}
          <div className="w-full lg:w-[48%] relative z-10">
            {/* Image Container */}
            <div className="relative w-full h-[360px] sm:h-[440px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20">
              <Image
                src="https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=800&q=80"
                alt="RollORide driver in Kolkata"
                fill
                sizes="(max-width: 1024px) 100vw, 48vw"
                className="object-cover object-center filter brightness-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>

            {/* Floating White Card Overlapping Bottom-Left Corner */}
            <div className="absolute -bottom-5 -left-3 sm:bottom-6 sm:-left-6 bg-white rounded-2xl p-4 sm:p-4.5 shadow-2xl border border-orange-100 flex items-center gap-3.5 z-20 transform hover:scale-105 transition-transform">
              <div className="w-11 h-11 rounded-full bg-orange-100 text-brand-orange flex items-center justify-center shrink-0">
                <Clock className="w-6 h-6 text-brand-orange stroke-[2.5]" />
              </div>
              <div>
                <h5 className="font-extrabold text-gray-900 text-sm sm:text-base leading-tight">
                  ₹1,200 — Today
                </h5>
                <p className="text-xs text-gray-500 font-semibold mt-0.5">
                  14 rides completed
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Driver Registration Modal */}
      <DriverModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
}
