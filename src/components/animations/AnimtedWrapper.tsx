'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function AnimatedWrapper({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, translateY: -5 }}
      whileInView={{ opacity: 1, translateY: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.15 }}
    >
      {children}
    </motion.div>
  );
}
