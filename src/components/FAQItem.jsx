"use client";

import { ChevronDown, ChevronUp } from "lucide-react";

export default function FAQItem({ question, answer, isOpen, onToggle }) {
  return (
    <div className="bg-white rounded-2xl border border-gray-200/80 shadow-xs mb-4 overflow-hidden transition-all duration-200">
      <button
        onClick={onToggle}
        className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none group"
      >
        <span className="font-heading font-extrabold text-base sm:text-lg text-brand-dark group-hover:text-brand-orange transition-colors pr-4">
          {question}
        </span>
        <div className="p-1 rounded-full text-brand-orange shrink-0">
          {isOpen ? (
            <ChevronUp className="w-5 h-5 text-brand-orange stroke-[2.5]" />
          ) : (
            <ChevronDown className="w-5 h-5 text-gray-400 group-hover:text-brand-orange stroke-[2.5] transition-colors" />
          )}
        </div>
      </button>

      {isOpen && (
        <div className="px-6 pb-6 pt-1 text-gray-500 text-sm sm:text-base leading-relaxed border-t border-gray-100/60 animate-in fade-in duration-200">
          {answer}
        </div>
      )}
    </div>
  );
}
