"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Navigation from "./Navigation";

export default function Header() {
  const { scrollY } = useScroll();

  // Transform scroll position to shadow intensity
  const headerShadow = useTransform(
    scrollY,
    [0, 100],
    ["0px 2px 4px rgba(0, 0, 0, 0.05)", "0px 4px 12px rgba(0, 0, 0, 0.15)"]
  );

  return (
    <motion.header
      style={{ boxShadow: headerShadow }}
      className="bg-white sticky top-0 z-40"
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center gap-4 flex-wrap">
          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-4xl font-bold text-primary"
          >
            Xe Ghép Nam Định - Hà Nội - Nội Bài
          </motion.h1>

          <motion.a
            href="tel:0971852897"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-4 md:px-6 py-2 md:py-3 rounded-full font-bold text-base md:text-lg shadow-lg hover:shadow-xl transition-all"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            0971 852 897
          </motion.a>

          <Navigation />
        </div>
      </div>
    </motion.header>
  );
}
