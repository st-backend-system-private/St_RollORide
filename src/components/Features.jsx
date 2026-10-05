"use client";

import { featuresData } from "@/data/content";
import FeatureCard from "./FeatureCard";

export default function Features() {
  return (
    <section id="features" className="bg-slate-50/80 dark:bg-slate-900/90 py-20 lg:py-28 border-y border-gray-100 dark:border-slate-800/80 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          {/* Eyebrow */}
          <span className="text-brand-orange text-xs sm:text-sm font-extrabold tracking-widest uppercase mb-3 inline-block">
            FEATURES
          </span>

          {/* Heading */}
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-brand-dark dark:text-white tracking-tight mb-4">
            Designed for Kolkata&apos;s Streets
          </h2>

          {/* Subtext */}
          <p className="text-gray-500 dark:text-slate-400 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto font-normal">
            Every feature in RollORide is built around the realities of urban
            commuting and goods movement in Kolkata.
          </p>
        </div>

        {/* Features Grid: 3 cols desktop / 2 tablet / 1 mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {featuresData.map((feature) => (
            <FeatureCard
              key={feature.id || feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
