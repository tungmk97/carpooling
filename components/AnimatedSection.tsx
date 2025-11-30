'use client';

import { motion, Variants } from 'framer-motion';
import { ReactNode } from 'react';
import { fadeSlideUp } from '@/lib/animations';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  variants?: Variants;
  delay?: number;
}

export default function AnimatedSection({
  children,
  className = '',
  variants = fadeSlideUp,
  delay = 0,
}: AnimatedSectionProps) {
  // Add delay to variants if specified
  const variantsWithDelay = delay > 0
    ? {
        ...variants,
        visible: {
          ...variants.visible,
          transition: {
            ...(variants.visible as any).transition,
            delay,
          },
        },
      }
    : variants;

  return (
    <motion.section
      variants={variantsWithDelay}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      className={className}
    >
      {children}
    </motion.section>
  );
}
