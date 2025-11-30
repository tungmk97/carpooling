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
        <div className="flex justify-between items-center">
          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-xl md:text-2xl font-bold text-primary"
          >
            Xe Ghép Nam Định - Hà Nội
          </motion.h1>
          <Navigation />
        </div>
      </div>
    </motion.header>
  );
}
