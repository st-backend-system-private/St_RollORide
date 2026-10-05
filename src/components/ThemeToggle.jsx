"use client";

import { useTheme } from "@/context/ThemeContext";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle({ className = "" }) {
  const { theme, toggleTheme, mounted } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      type="button"
      className={`relative inline-flex items-center justify-center p-2.5 rounded-full transition-all duration-300 bg-gray-100 hover:bg-gray-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-amber-400 border border-gray-200/80 dark:border-slate-700 shadow-xs focus:outline-none focus:ring-2 focus:ring-brand-orange ${className}`}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
    >
      <div className="relative w-5 h-5 flex items-center justify-center">
        {mounted && theme === "dark" ? (
          <Sun className="w-5 h-5 text-amber-400 animate-in spin-in-90 duration-300 stroke-[2.2]" />
        ) : (
          <Moon className="w-5 h-5 text-slate-700 dark:text-slate-200 animate-in spin-in-90 duration-300 stroke-[2.2]" />
        )}
      </div>
    </button>
  );
}
