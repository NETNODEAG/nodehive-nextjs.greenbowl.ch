'use client';

import { space } from '@/nodehive/space-config';
import { motion } from 'framer-motion';

export default function Loading() {
  const LogoComponent = space.logo;

  const rotateAnimation = {
    initial: { y: '0' },
    animate: { y: ['0px', '10px', '0px'] },
    transition: {
      duration: 0.5,
      repeat: Infinity,
      times: [0, 0.5, 1],
    },
  };

  return (
    <motion.div className="pointer-events-none fixed bottom-0 left-0 right-0 top-0 z-20 flex items-center justify-center overflow-hidden bg-white">
      <motion.div
        initial={rotateAnimation.initial}
        animate={rotateAnimation.animate}
        transition={rotateAnimation.transition}
        className="sidebar-visible:ml-[var(--nav-width)]"
      >
        <LogoComponent />
      </motion.div>
    </motion.div>
  );
}
