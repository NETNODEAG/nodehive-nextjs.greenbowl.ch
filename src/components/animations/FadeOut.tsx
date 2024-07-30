'use client';

import { motion } from 'framer-motion';

export default function FadeOut() {
  const fadeOut = {
    initial: { opacity: 1 },
    animate: { opacity: 0 },
    transition: { duration: 0.5 },
  };

  return (
    <motion.div
      initial={fadeOut.initial}
      animate={fadeOut.animate}
      transition={fadeOut.transition}
      className="pointer-events-none fixed bottom-0 left-0 right-0 top-0 z-20 flex items-center justify-center overflow-hidden bg-white"
    ></motion.div>
  );
}
