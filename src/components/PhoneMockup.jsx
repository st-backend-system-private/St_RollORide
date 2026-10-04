"use client";

import { useState } from "react";
import Image from "next/image";
import { Bell, Bike, Package } from "lucide-react";

export default function PhoneMockup() {
  const [selectedOption, setSelectedOption] = useState("bike");

  return (
    <div className="w-[300px] sm:w-[330px] rounded-[44px] bg-slate-950 p-3 sm:p-3.5 shadow-2xl shadow-slate-950/60 border-4 border-slate-800/80 relative mx-auto my-auto select-none transform transition-transform hover:scale-[1.01]">
      {/* Top Speaker / Camera Island Cutout */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 w-24 h-4 bg-slate-950 rounded-full z-30 flex items-center justify-center gap-2">
        <div className="w-2.5 h-2.5 rounded-full bg-slate-900 border border-slate-800" />
        <div className="w-1.5 h-1.5 rounded-full bg-blue-950" />
      </div>

      {/* Screen Inner Container */}
      <div className="bg-brand-orange rounded-[36px] overflow-hidden relative font-sans pt-6">
        {/* Header Greeting */}
        <div className="px-5 pt-3 pb-4 flex items-center justify-between">
          <div>
            <p className="text-xs text-orange-100 font-medium">Good morning,</p>
            <h4 className="text-lg font-extrabold text-white tracking-tight">
              Rahul Kumar
            </h4>
          </div>

          <button className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/30 hover:bg-white/30 transition-colors shadow-sm">
            <Bell className="w-5 h-5 text-white" />
          </button>
        </div>

        {/* Pickup & Dropoff Card */}
        <div className="bg-white rounded-2xl p-3.5 mx-3.5 shadow-lg border border-orange-100/60 space-y-2 relative z-20">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 shrink-0 ring-4 ring-emerald-100" />
            <span className="text-xs font-semibold text-gray-800 truncate">
              Salt Lake Sector V
            </span>
          </div>

          {/* Dotted connecting line */}
          <div className="w-px h-3 bg-gray-200 border-l border-dashed border-gray-400 ml-[4.5px] -my-1" />

          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-brand-orange shrink-0 ring-4 ring-orange-100" />
            <span className="text-xs font-semibold text-gray-800 truncate">
              Esplanade, Kolkata
            </span>
          </div>
        </div>

        {/* Photo Banner with Circular Bike Icon */}
        <div className="relative w-full h-40 bg-orange-200 mt-3 overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=600&q=80"
            alt="RollORide bike rider Kolkata"
            fill
            sizes="330px"
            className="object-cover object-center filter brightness-[0.92]"
            priority
          />

          {/* Centered Floating Orange Bike Icon */}
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <div className="w-10 h-10 rounded-full bg-brand-orange text-white flex items-center justify-center shadow-xl border-2 border-white transform hover:scale-110 transition-transform">
              <Bike className="w-5 h-5 text-white stroke-[2.5]" />
            </div>
          </div>
        </div>

        {/* Bottom Options Container */}
        <div className="bg-white p-4 space-y-2.5 rounded-t-3xl shadow-inner relative z-10">
          {/* RollORide Bike Option */}
          <div
            onClick={() => setSelectedOption("bike")}
            className={`rounded-xl p-3 flex items-center justify-between transition-all cursor-pointer ${
              selectedOption === "bike"
                ? "bg-amber-50/90 border-2 border-brand-orange shadow-sm"
                : "bg-gray-50 border border-gray-100 hover:bg-gray-100"
            }`}
          >
            <div className="flex items-center gap-3">
              <div
                className={`p-2 rounded-lg ${
                  selectedOption === "bike"
                    ? "text-brand-orange bg-orange-100/60"
                    : "text-gray-500 bg-gray-200/50"
                }`}
              >
                <Bike className="w-5 h-5" />
              </div>
              <div>
                <h5 className="font-bold text-gray-900 text-xs sm:text-sm">
                  RollORide Bike
                </h5>
                <p className="text-[11px] text-gray-500">3 min away</p>
              </div>
            </div>
            <span
              className={`font-extrabold text-sm sm:text-base ${
                selectedOption === "bike"
                  ? "text-brand-orange"
                  : "text-gray-900"
              }`}
            >
              ₹49
            </span>
          </div>

          {/* RollORide Cargo Option */}
          <div
            onClick={() => setSelectedOption("cargo")}
            className={`rounded-xl p-3 flex items-center justify-between transition-all cursor-pointer ${
              selectedOption === "cargo"
                ? "bg-amber-50/90 border-2 border-brand-orange shadow-sm"
                : "bg-gray-50 border border-gray-100 hover:bg-gray-100"
            }`}
          >
            <div className="flex items-center gap-3">
              <div
                className={`p-2 rounded-lg ${
                  selectedOption === "cargo"
                    ? "text-brand-orange bg-orange-100/60"
                    : "text-gray-500 bg-gray-200/50"
                }`}
              >
                <Package className="w-5 h-5" />
              </div>
              <div>
                <h5 className="font-bold text-gray-800 text-xs sm:text-sm">
                  RollORide Cargo
                </h5>
                <p className="text-[11px] text-gray-500">5 min away</p>
              </div>
            </div>
            <span
              className={`font-extrabold text-sm sm:text-base ${
                selectedOption === "cargo"
                  ? "text-brand-orange"
                  : "text-gray-900"
              }`}
            >
              ₹79
            </span>
          </div>

          {/* Book Now Action Button */}
          <button className="w-full bg-brand-orange hover:bg-orange-600 text-white font-bold py-2.5 rounded-xl text-center text-xs sm:text-sm shadow-md shadow-orange-500/30 transition-all active:scale-[0.98] mt-1">
            Book Ride Now
          </button>
        </div>
      </div>
    </div>
  );
}
