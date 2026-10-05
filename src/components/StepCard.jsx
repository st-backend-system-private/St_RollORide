"use client";

import { Smartphone, Bike, Users, MapPin } from "lucide-react";

const iconMap = {
  Smartphone,
  Bike,
  Users,
  MapPin,
};

export default function StepCard({ number, icon, title, description }) {
  const IconComponent = typeof icon === "string" ? iconMap[icon] : icon;

  return (
    <div className="flex flex-col items-center text-center relative z-10 group">
      {/* Large Solid Orange Circle */}
      <div className="w-20 h-20 rounded-full bg-brand-orange text-white flex items-center justify-center shadow-lg shadow-orange-500/25 border-4 border-white dark:border-slate-950 mb-4 group-hover:scale-110 transition-transform duration-300">
        {IconComponent && <IconComponent className="w-9 h-9 stroke-[2.2]" />}
      </div>

      {/* Small Orange Numbered Label */}
      <span className="text-brand-orange font-extrabold text-sm tracking-widest uppercase mb-1">
        {number}
      </span>

      {/* Bold Title */}
      <h3 className="font-heading font-extrabold text-xl text-brand-dark dark:text-white mb-2 tracking-tight">
        {title}
      </h3>

      {/* Short Centered Gray Description */}
      <p className="text-gray-500 dark:text-slate-400 text-sm leading-relaxed max-w-[240px] mx-auto font-normal">
        {description}
      </p>
    </div>
  );
}
