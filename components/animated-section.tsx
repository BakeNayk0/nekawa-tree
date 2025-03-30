'use client';

import { motion, Variants } from 'framer-motion';
import clsx from 'clsx';

type PageSectionProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  animation?: Variants;
};

const defaultVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

export function AnimatedSection({
  children,
  className,
  delay = 0,
  animation = defaultVariants,
}: PageSectionProps) {
  return (
    <motion.section
      className={clsx('will-change-transform', className)}
      initial="hidden"
      animate="visible"
      variants={animation}
      transition={{
        duration: 0.7,
        ease: 'easeOut',
        delay,
      }}
    >
      {children}
    </motion.section>
  );
}
