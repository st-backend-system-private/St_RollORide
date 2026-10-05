"use client";

import PhoneMockup from "./PhoneMockup";

export default function Hero({ onOpenEarlyAccess }) {
  const handleBadgeClick = (e) => {
    e.preventDefault();
    if (onOpenEarlyAccess) {
      onOpenEarlyAccess();
    }
  };

  return (
    <section
      id="hero"
      className="relative bg-white dark:bg-slate-950 overflow-hidden min-h-[calc(100vh-80px)] flex items-center transition-colors duration-300"
    >
      <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-stretch justify-between min-h-[620px]">
        {/* Left Column: Text & CTA Content */}
        <div className="w-full lg:w-[52%] px-4 sm:px-6 lg:px-8 py-12 lg:py-16 flex flex-col justify-center items-start z-10">
          {/* Kolkata Badge */}
          <div className="inline-flex items-center gap-2 bg-orange-100/80 dark:bg-orange-950/60 border border-orange-200/80 dark:border-orange-800/60 text-brand-orange px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wide shadow-xs mb-6">
            <span className="w-2 h-2 rounded-full bg-brand-orange animate-pulse" />
            <span>Launching in Kolkata Soon</span>
          </div>

          {/* Headline */}
          <h1 className="font-heading text-5xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight leading-[1.06] mb-6">
            <span className="block text-brand-dark dark:text-white">Your Ride.</span>
            <span className="block text-brand-dark dark:text-white">Your Way.</span>
            <span className="block text-brand-orange">Instantly.</span>
          </h1>

          {/* Subtext */}
          <p className="text-gray-500 dark:text-slate-400 text-base sm:text-lg max-w-lg leading-relaxed font-normal mb-8">
            Book a bike taxi or send goods across Kolkata in minutes. RollORide
            connects you with trusted, verified riders at unbeatable prices.
          </p>

          {/* App Store / Play Store Buttons */}
          <div className="flex flex-wrap items-center gap-4">
            {/* App Store Button */}
            <button
              onClick={handleBadgeClick}
              className="bg-brand-dark dark:bg-slate-800 hover:bg-black dark:hover:bg-slate-700 text-white px-5 py-3 rounded-2xl flex items-center gap-3.5 transition-all shadow-lg shadow-slate-900/10 dark:shadow-black/40 hover:-translate-y-0.5 active:translate-y-0 group border border-slate-800 dark:border-slate-700"
            >
              <svg
                className="w-6 h-6 fill-current text-white shrink-0"
                viewBox="0 0 24 24"
              >
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 4.54c.67-.82 1.13-1.96.99-3.09-1 .04-2.22.67-2.91 1.48-.61.71-1.14 1.87-.99 2.99 1.12.09 2.26-.56 2.91-1.38z" />
              </svg>
              <div className="text-left">
                <p className="text-[10px] text-gray-300 dark:text-slate-400 font-medium leading-none mb-1">
                  Download on the
                </p>
                <p className="text-sm font-bold text-white leading-none">
                  App Store
                </p>
              </div>
            </button>

            {/* Google Play Button */}
            <button
              onClick={handleBadgeClick}
              className="bg-brand-dark dark:bg-slate-800 hover:bg-black dark:hover:bg-slate-700 text-white px-5 py-3 rounded-2xl flex items-center gap-3.5 transition-all shadow-lg shadow-slate-900/10 dark:shadow-black/40 hover:-translate-y-0.5 active:translate-y-0 group border border-slate-800 dark:border-slate-700"
            >
              <svg
                className="w-6 h-6 fill-current text-white shrink-0"
                viewBox="0 0 24 24"
              >
                <path d="M3 20.5v-17c0-.83.67-1.5 1.5-1.5.31 0 .61.1.86.29l12.87 8.5c.61.4.61 1.3 0 1.71L5.36 20.71c-.25.19-.55.29-.86.29-.83 0-1.5-.67-1.5-1.5zm13.12-8.5L5 5.5v13l11.12-6.5z" />
              </svg>
              <div className="text-left">
                <p className="text-[10px] text-gray-300 dark:text-slate-400 font-medium leading-none mb-1">
                  Get it on
                </p>
                <p className="text-sm font-bold text-white leading-none">
                  Google Play
                </p>
              </div>
            </button>
          </div>
        </div>

        {/* Right Column: Skewed Orange Hero Banner with PhoneMockup */}
        <div className="w-full lg:w-[48%] relative flex items-center justify-center min-h-[500px] lg:min-h-full py-12 lg:py-0">
          <div
            className="absolute inset-0 bg-brand-orange z-0 lg:[clip-path:polygon(14%_0,100%_0,100%_100%,0%_100%)] rounded-t-[40px] lg:rounded-none"
            style={{
              backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.25) 1.5px, transparent 1.5px)`,
              backgroundSize: `22px 22px`,
            }}
          />

          <div className="relative z-10 lg:pl-10 my-auto">
            <PhoneMockup />
          </div>
        </div>
      </div>
    </section>
  );
}
