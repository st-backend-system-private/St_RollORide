"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import ForRiders from "@/components/ForRiders";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import EarlyAccessModal from "@/components/EarlyAccessModal";

export default function Home() {
  const [isEarlyAccessOpen, setIsEarlyAccessOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-slate-950 selection:bg-brand-orange selection:text-white transition-colors duration-300">
      <Navbar onOpenEarlyAccess={() => setIsEarlyAccessOpen(true)} />
      <main className="flex-grow">
        <Hero onOpenEarlyAccess={() => setIsEarlyAccessOpen(true)} />
        <Features />
        <HowItWorks />
        <ForRiders />
        <FAQ />
      </main>
      <Footer />

      <EarlyAccessModal
        isOpen={isEarlyAccessOpen}
        onClose={() => setIsEarlyAccessOpen(false)}
      />
    </div>
  );
}
