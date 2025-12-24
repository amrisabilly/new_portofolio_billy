'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, className = '', hover = true }: CardProps) {
  return (
    <motion.div
      className={`border-2 border-black bg-white p-6 md:p-8 ${className}`}
      whileHover={hover ? {
        y: -4,
        boxShadow: '8px 8px 0px 0px rgba(0,0,0,1)',
        transition: { duration: 0.2 }
      } : undefined}
      initial={{ boxShadow: '0px 0px 0px 0px rgba(0,0,0,1)' }}
    >
      {children}
    </motion.div>
  );
}
