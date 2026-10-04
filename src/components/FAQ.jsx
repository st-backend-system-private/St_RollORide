"use client";

import { useState } from "react";
import { faqData } from "@/data/content";
import FAQItem from "./FAQItem";

export default function FAQ() {
  const [openId, setOpenId] = useState(1);

  const handleToggle = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="bg-slate-50/80 py-20 lg:py-28 border-t border-gray-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          {/* Eyebrow */}
          <span className="text-brand-orange text-xs sm:text-sm font-extrabold tracking-widest uppercase mb-3 inline-block">
            FAQS
          </span>

          {/* Heading */}
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-brand-dark tracking-tight">
            Common Questions
          </h2>
        </div>

        {/* Vertical Accordion */}
        <div className="space-y-3">
          {faqData.map((item) => (
            <FAQItem
              key={item.id}
              question={item.question}
              answer={item.answer}
              isOpen={openId === item.id}
              onToggle={() => handleToggle(item.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
