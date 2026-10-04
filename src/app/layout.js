import { Poppins, Inter } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-poppins",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
});

export const metadata = {
  title: "RollORide — Your Ride. Your Way. Instantly.",
  description:
    "Fast, reliable bike taxi and instant cargo delivery service in Kolkata. Book rides, send parcels, and get around the city smoothly with RollORide.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable}`}>
      <body className="font-body antialiased bg-white text-slate-900">{children}</body>
    </html>
  );
}
