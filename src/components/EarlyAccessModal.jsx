"use client";

import { useState } from "react";
import { X, CheckCircle2, AlertCircle, Sparkles } from "lucide-react";

export default function EarlyAccessModal({ isOpen, onClose }) {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    const cleanEmail = email.trim();

    if (!cleanEmail) {
      setError("Email address is required");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cleanEmail)) {
      setError("Please enter a valid email address");
      return;
    }

    // Success State
    setError("");
    setIsSuccess(true);

    // Auto-close after 2 seconds
    setTimeout(() => {
      setIsSuccess(false);
      setEmail("");
      onClose();
    }, 2000);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/65 backdrop-blur-sm transition-opacity duration-300"
      onClick={onClose}
    >
      {/* Modal Box */}
      <div
        className="bg-white rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl border border-gray-100 relative transform transition-all animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-gray-400 hover:text-gray-700 hover:bg-gray-100 rounded-full transition-colors"
          aria-label="Close Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {isSuccess ? (
          /* Confirmation Success State */
          <div className="py-8 text-center space-y-4">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner animate-bounce">
              <CheckCircle2 className="w-9 h-9 stroke-[2.5]" />
            </div>
            <h3 className="font-heading font-extrabold text-2xl text-brand-dark">
              You&apos;re on the list!
            </h3>
            <p className="text-gray-600 text-sm max-w-xs mx-auto font-medium leading-relaxed">
              Thank you for signing up. We&apos;ll notify you the moment RollORide launches in Kolkata!
            </p>
          </div>
        ) : (
          /* Email Input Form */
          <div>
            <div className="flex items-center gap-2 mb-2 text-brand-orange">
              <Sparkles className="w-5 h-5" />
              <span className="text-xs font-bold uppercase tracking-wider">
                Early Access
              </span>
            </div>

            <h3 className="font-heading font-extrabold text-2xl text-brand-dark tracking-tight mb-2">
              Get Early Access to RollORide
            </h3>

            <p className="text-gray-500 text-sm mb-6 leading-relaxed">
              Be among the first to experience Kolkata&apos;s fastest bike taxi and instant cargo delivery app.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                  Email Address
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (error) setError("");
                  }}
                  placeholder="Enter your email address"
                  className={`w-full px-4 py-3 rounded-xl border text-sm text-gray-900 focus:outline-none transition-colors ${
                    error
                      ? "border-red-500 bg-red-50/50"
                      : "border-gray-200 focus:border-brand-orange focus:ring-1 focus:ring-brand-orange"
                  }`}
                />
                {error && (
                  <p className="text-red-500 text-xs mt-1.5 flex items-center gap-1 font-medium">
                    <AlertCircle className="w-3.5 h-3.5" />
                    {error}
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="w-full bg-brand-orange hover:bg-orange-600 text-white font-extrabold py-3.5 rounded-xl shadow-lg shadow-orange-500/25 transition-all active:scale-[0.98] text-sm"
              >
                Notify Me
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
