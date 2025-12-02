"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface ImageCarouselProps {
  images: string[];
  autoPlayInterval?: number;
}

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 1000 : -1000,
    opacity: 0,
  }),
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

export default function ImageCarousel({
  images,
  autoPlayInterval = 5000,
}: ImageCarouselProps) {
  const [[currentIndex, direction], setPage] = useState([0, 0]);
  const [isHovered, setIsHovered] = useState(false);

  const paginate = useCallback(
    (newDirection: number) => {
      setPage(([prevIndex]) => {
        let nextIndex = prevIndex + newDirection;
        if (nextIndex < 0) nextIndex = images.length - 1;
        if (nextIndex >= images.length) nextIndex = 0;
        return [nextIndex, newDirection];
      });
    },
    [images.length]
  );

  const goToSlide = (index: number) => {
    const newDirection = index > currentIndex ? 1 : -1;
    setPage([index, newDirection]);
  };

  // Auto-play functionality
  useEffect(() => {
    if (!isHovered && autoPlayInterval > 0) {
      const interval = setInterval(() => {
        paginate(1);
      }, autoPlayInterval);

      return () => clearInterval(interval);
    }
  }, [currentIndex, isHovered, autoPlayInterval, paginate]);

  return (
    <div
      className="relative max-w-4xl mx-auto"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Main Image */}
      <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.4 },
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);

              if (swipe < -swipeConfidenceThreshold) {
                paginate(1);
              } else if (swipe > swipeConfidenceThreshold) {
                paginate(-1);
              }
            }}
            className="relative aspect-video cursor-grab active:cursor-grabbing"
          >
            <Image
              src={images[currentIndex]}
              alt={`Dịch vụ Xe Ghép Nam Định - Hà Nội - Nội Bài - Hình ${
                currentIndex + 1
              }`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
              priority={currentIndex === 0}
            />
          </motion.div>
        </AnimatePresence>

        {/* Previous Button */}
        <motion.button
          whileHover={{ scale: 1.1, backgroundColor: "rgba(0,0,0,0.8)" }}
          whileTap={{ scale: 0.9 }}
          onClick={() => paginate(-1)}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-3 rounded-full transition-all z-10"
          aria-label="Previous image"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </motion.button>

        {/* Next Button */}
        <motion.button
          whileHover={{ scale: 1.1, backgroundColor: "rgba(0,0,0,0.8)" }}
          whileTap={{ scale: 0.9 }}
          onClick={() => paginate(1)}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-3 rounded-full transition-all z-10"
          aria-label="Next image"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </motion.button>

        {/* Image Counter */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-full text-sm font-medium"
        >
          {currentIndex + 1} / {images.length}
        </motion.div>
      </div>

      {/* Dots Navigation */}
      <div className="flex justify-center gap-2 mt-6">
        {images.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => goToSlide(index)}
            animate={{
              width: index === currentIndex ? 32 : 12,
              backgroundColor:
                index === currentIndex
                  ? "rgb(67, 160, 71)"
                  : "rgba(156, 163, 175, 0.5)",
            }}
            whileHover={{
              backgroundColor:
                index === currentIndex
                  ? "rgb(67, 160, 71)"
                  : "rgba(156, 163, 175, 0.8)",
            }}
            transition={{ duration: 0.3 }}
            className="h-3 rounded-full"
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
