"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function FloatingContactBubbles() {
  return (
    <div className="fixed bottom-6 right-12 z-50 flex flex-col gap-4">
      {/* Phone bubble with ringing animation */}
      <motion.a
        href="tel:0971852897"
        className="group relative"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
          delay: 0.5,
        }}
        whileHover={{
          scale: 1.15,
          transition: { type: "spring", stiffness: 400, damping: 10 },
        }}
        whileTap={{
          scale: 0.9,
          transition: { type: "spring", stiffness: 400, damping: 10 },
        }}
      >
        {/* Ripple effect for ringing animation - First wave */}
        <motion.div
          className="absolute inset-0 rounded-full bg-green-400"
          initial={{ scale: 1, opacity: 0 }}
          animate={{
            scale: [1, 1.8],
            opacity: [0.6, 0],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: [0.4, 0, 0.2, 1],
            repeatDelay: 0,
          }}
        />
        {/* Second wave */}
        <motion.div
          className="absolute inset-0 rounded-full bg-green-400"
          initial={{ scale: 1, opacity: 0 }}
          animate={{
            scale: [1, 1.8],
            opacity: [0.6, 0],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: [0.4, 0, 0.2, 1],
            delay: 0.8,
            repeatDelay: 0,
          }}
        />
        {/* Third wave */}
        <motion.div
          className="absolute inset-0 rounded-full bg-green-400"
          initial={{ scale: 1, opacity: 0 }}
          animate={{
            scale: [1, 1.8],
            opacity: [0.6, 0],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: [0.4, 0, 0.2, 1],
            delay: 1.6,
            repeatDelay: 0,
          }}
        />

        {/* Phone icon bubble with subtle bounce */}
        <motion.div
          className="relative w-16 h-16 rounded-full shadow-2xl overflow-hidden bg-white"
          animate={{
            y: [0, -4, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Image
            src="/images/phone-call-icon-answer-accept-call-icon-with-green-button-contact-us-telephone-sign-yes-button-incoming-call-icon-vector.jpg"
            alt="Call us"
            fill
            className="object-cover"
          />
        </motion.div>

        {/* Badge notification with pulse */}
        {/* <motion.div
          className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center font-bold shadow-lg"
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          1
        </motion.div> */}

        {/* Tooltip */}
        <motion.div
          className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-800 text-white text-sm px-4 py-2 rounded-lg whitespace-nowrap pointer-events-none"
          initial={{ opacity: 0, x: 10, scale: 0.8 }}
          whileHover={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          Gọi: 0971 852 897
          <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full w-0 h-0 border-l-8 border-l-gray-800 border-t-4 border-t-transparent border-b-4 border-b-transparent" />
        </motion.div>
      </motion.a>

      {/* Zalo bubble with pulse animation */}
      <motion.a
        href="https://zalo.me/0971852897"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
          delay: 0.7,
        }}
        whileHover={{
          scale: 1.15,
          transition: { type: "spring", stiffness: 400, damping: 10 },
        }}
        whileTap={{
          scale: 0.9,
          transition: { type: "spring", stiffness: 400, damping: 10 },
        }}
      >
        {/* Pulse effect - First wave */}
        <motion.div
          className="absolute inset-0 rounded-full bg-blue-400"
          initial={{ scale: 1, opacity: 0 }}
          animate={{
            scale: [1, 1.6],
            opacity: [0.7, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: [0.4, 0, 0.2, 1],
            repeatDelay: 0,
          }}
        />
        {/* Second wave */}
        <motion.div
          className="absolute inset-0 rounded-full bg-blue-400"
          initial={{ scale: 1, opacity: 0 }}
          animate={{
            scale: [1, 1.6],
            opacity: [0.7, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: [0.4, 0, 0.2, 1],
            delay: 1,
            repeatDelay: 0,
          }}
        />

        {/* Zalo icon bubble with gentle float */}
        <motion.div
          className="relative w-16 h-16 rounded-full shadow-2xl overflow-hidden bg-white"
          animate={{
            y: [0, -6, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Image
            src="/images/Logo-Zalo-Arc.webp"
            alt="Chat Zalo"
            fill
            className="object-cover"
          />
        </motion.div>

        {/* Badge notification with pulse */}
        {/* <motion.div
          className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center font-bold shadow-lg"
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.3,
          }}
        >
          1
        </motion.div> */}

        {/* Tooltip */}
        <motion.div
          className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-800 text-white text-sm px-4 py-2 rounded-lg whitespace-nowrap pointer-events-none"
          initial={{ opacity: 0, x: 10, scale: 0.8 }}
          whileHover={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          Chat qua Zalo
          <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full w-0 h-0 border-l-8 border-l-gray-800 border-t-4 border-t-transparent border-b-4 border-b-transparent" />
        </motion.div>
      </motion.a>
    </div>
  );
}
