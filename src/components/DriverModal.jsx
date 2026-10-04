"use client";

import { useState } from "react";
import { X, CheckCircle2, AlertCircle } from "lucide-react";

export default function DriverModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    city: "Kolkata",
    vehicleType: "Bike",
  });

  const [errors, setErrors] = useState({});
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Full name is required";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phone.trim())) {
      newErrors.phone = "Enter a valid 10-digit phone number";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email address is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = "Enter a valid email address";
    }

    if (!formData.city.trim()) {
      newErrors.city = "City is required";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Success state
    setIsSuccess(true);
    setErrors({});

    // Auto-close and reset after 2 seconds
    setTimeout(() => {
      setIsSuccess(false);
      setFormData({
        name: "",
        phone: "",
        email: "",
        city: "Kolkata",
        vehicleType: "Bike",
      });
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
          /* Success Confirmation State */
          <div className="py-8 text-center space-y-4">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner animate-bounce">
              <CheckCircle2 className="w-9 h-9 stroke-[2.5]" />
            </div>
            <h3 className="font-heading font-extrabold text-2xl text-brand-dark">
              Application Received!
            </h3>
            <p className="text-gray-600 text-sm max-w-xs mx-auto font-medium">
              Application received — we&apos;ll be in touch soon with your rider onboarding details!
            </p>
          </div>
        ) : (
          /* Application Form */
          <div>
            <div className="mb-6">
              <h3 className="font-heading font-extrabold text-2xl text-brand-dark tracking-tight">
                Register as a Driver
              </h3>
              <p className="text-gray-500 text-xs sm:text-sm mt-1">
                Join the RollORide network in Kolkata and start earning.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Full Name */}
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. Rahul Kumar"
                  className={`w-full px-4 py-2.5 rounded-xl border text-sm text-gray-900 focus:outline-none transition-colors ${
                    errors.name
                      ? "border-red-500 bg-red-50/50"
                      : "border-gray-200 focus:border-brand-orange focus:ring-1 focus:ring-brand-orange"
                  }`}
                />
                {errors.name && (
                  <p className="text-red-500 text-xs mt-1 flex items-center gap-1 font-medium">
                    <AlertCircle className="w-3.5 h-3.5" />
                    {errors.name}
                  </p>
                )}
              </div>

              {/* Phone Number */}
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="10-digit mobile number"
                  className={`w-full px-4 py-2.5 rounded-xl border text-sm text-gray-900 focus:outline-none transition-colors ${
                    errors.phone
                      ? "border-red-500 bg-red-50/50"
                      : "border-gray-200 focus:border-brand-orange focus:ring-1 focus:ring-brand-orange"
                  }`}
                />
                {errors.phone && (
                  <p className="text-red-500 text-xs mt-1 flex items-center gap-1 font-medium">
                    <AlertCircle className="w-3.5 h-3.5" />
                    {errors.phone}
                  </p>
                )}
              </div>

              {/* Email Address */}
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="e.g. rahul@example.com"
                  className={`w-full px-4 py-2.5 rounded-xl border text-sm text-gray-900 focus:outline-none transition-colors ${
                    errors.email
                      ? "border-red-500 bg-red-50/50"
                      : "border-gray-200 focus:border-brand-orange focus:ring-1 focus:ring-brand-orange"
                  }`}
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1 flex items-center gap-1 font-medium">
                    <AlertCircle className="w-3.5 h-3.5" />
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Grid for City and Vehicle Type */}
              <div className="grid grid-cols-2 gap-3">
                {/* City */}
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                    City
                  </label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    placeholder="e.g. Kolkata"
                    className={`w-full px-4 py-2.5 rounded-xl border text-sm text-gray-900 focus:outline-none transition-colors ${
                      errors.city
                        ? "border-red-500 bg-red-50/50"
                        : "border-gray-200 focus:border-brand-orange focus:ring-1 focus:ring-brand-orange"
                    }`}
                  />
                  {errors.city && (
                    <p className="text-red-500 text-xs mt-1 font-medium">
                      {errors.city}
                    </p>
                  )}
                </div>

                {/* Vehicle Type Dropdown */}
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                    Vehicle Type
                  </label>
                  <select
                    name="vehicleType"
                    value={formData.vehicleType}
                    onChange={handleChange}
                    className="w-full px-3 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-900 focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange bg-white"
                  >
                    <option value="Bike">Bike</option>
                    <option value="Scooter">Scooter</option>
                  </select>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full bg-brand-orange hover:bg-orange-600 text-white font-bold py-3 rounded-xl shadow-lg shadow-orange-500/25 transition-all active:scale-[0.98] text-sm"
                >
                  Submit Application
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
