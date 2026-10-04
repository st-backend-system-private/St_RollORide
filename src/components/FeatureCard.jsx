"use client";

import {
  Zap,
  Package,
  ShieldCheck,
  IndianRupee,
  Navigation,
  CreditCard,
} from "lucide-react";

const iconMap = {
  Zap,
  Package,
  ShieldCheck,
  IndianRupee,
  Navigation,
  CreditCard,
};

export default function FeatureCard({ icon, title, description }) {
  const IconComponent = typeof icon === "string" ? iconMap[icon] : icon;

  return (
    <div className="bg-white rounded-2xl p-7 sm:p-8 border border-gray-100/90 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col items-start text-left group">
      {/* Orange rounded-square icon badge */}
      <div className="bg-brand-orange text-white p-3.5 rounded-2xl inline-flex items-center justify-center shadow-md shadow-orange-500/20 group-hover:scale-110 transition-transform mb-6">
        {IconComponent && <IconComponent className="w-6 h-6 stroke-[2.2]" />}
      </div>

      {/* Title */}
      <h3 className="font-heading font-extrabold text-xl text-brand-dark mb-3 tracking-tight">
        {title}
      </h3>

      {/* Description */}
      <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
        {description}
      </p>
    </div>
  );
}
