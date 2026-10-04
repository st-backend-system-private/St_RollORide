"use client";

import { stepsData } from "@/data/content";
import StepCard from "./StepCard";

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          {/* Eyebrow */}
          <span className="text-brand-orange text-xs sm:text-sm font-extrabold tracking-widest uppercase mb-3 inline-block">
            HOW IT WORKS
          </span>

          {/* Heading */}
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-brand-dark tracking-tight">
            Ride in 4 Simple Steps
          </h2>
        </div>

        {/* Steps Container with Connecting Line */}
        <div className="relative">
          {/* Thin Horizontal Connecting Line (Desktop Only - positioned at top-10 through center of 80px circles) */}
          <div className="hidden lg:block absolute top-10 left-[12%] right-[12%] h-0.5 border-t-2 border-dashed border-orange-300/80 z-0" />

          {/* Steps Grid: 4 columns desktop / 2 tablet / 1 mobile */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-6 relative z-10">
            {stepsData.map((step) => (
              <StepCard
                key={step.number}
                number={step.number}
                icon={step.icon}
                title={step.title}
                description={step.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
