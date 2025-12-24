'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: 'primary' | 'secondary' | 'ghost';
  className?: string;
  onClick?: () => void;
}

export default function Button({ 
  children, 
  href, 
  variant = 'primary', 
  className = '',
  onClick 
}: ButtonProps) {
  const baseClasses = 'inline-flex items-center justify-center px-8 py-4 text-sm font-medium tracking-wide transition-all duration-300';
  
  const variants = {
    primary: 'bg-black text-white hover:bg-white hover:text-black border-2 border-black',
    secondary: 'bg-white text-black hover:bg-black hover:text-white border-2 border-black',
    ghost: 'text-black hover:text-gray-600 underline underline-offset-4'
  };

  const classes = `${baseClasses} ${variants[variant]} ${className}`;

  const MotionComponent = motion.div;

  if (href) {
    return (
      <MotionComponent
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <Link href={href} className={classes}>
          {children}
        </Link>
      </MotionComponent>
    );
  }

  return (
    <MotionComponent
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <button onClick={onClick} className={classes}>
        {children}
      </button>
    </MotionComponent>
  );
}
