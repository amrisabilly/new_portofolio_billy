'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Container from '../ui/Container';
import Button from '../ui/Button';

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center bg-white overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        className="absolute top-20 right-10 w-64 h-64 border-2 border-black"
        style={{
          x: mousePosition.x * 2,
          y: mousePosition.y * 2,
          rotate: scrollY * 0.1,
        }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.1, scale: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      />
      
      <motion.div
        className="absolute bottom-20 left-20 w-32 h-32 bg-black"
        style={{
          x: mousePosition.x * -1.5,
          y: mousePosition.y * -1.5,
          rotate: scrollY * -0.05,
        }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.05, scale: 1 }}
        transition={{ duration: 1, delay: 0.7 }}
      />

      <motion.div
        className="absolute top-1/2 left-1/4 w-2 h-96 bg-black hidden lg:block"
        style={{
          y: mousePosition.y * 3,
          opacity: 0.08 - scrollY * 0.0001,
        }}
        initial={{ opacity: 0, scaleY: 0 }}
        animate={{ opacity: 0.08, scaleY: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
      />

      <Container className="relative z-10">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 lg:gap-16 items-center py-8 md:py-0"
          style={{ y: scrollY * 0.5 }}
        >
          {/* Left: Text Content */}
          <div className="space-y-6 md:space-y-8 order-2 lg:order-1 lg:col-span-7 text-center lg:text-left">
            {/* Decorative line */}
            <motion.div
              className="relative flex justify-center lg:justify-start"
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <div className="h-px bg-black w-16 md:w-24"></div>
            </motion.div>

            {/* Main content */}
            <div className="space-y-4 md:space-y-6">
              <motion.p
                className="text-xs md:text-sm font-medium tracking-[0.3em] uppercase text-gray-600"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Software Developer
              </motion.p>
              
              <div className="space-y-2 md:space-y-4">
                <motion.h1
                  className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tighter leading-none"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  <span className="block">Amri</span>
                  <span className="block italic font-light">Sabilly</span>
                </motion.h1>
              </div>

              <motion.div
                className="max-w-xl mx-auto lg:mx-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1 }}
              >
                <p className="text-base md:text-lg lg:text-xl font-light leading-relaxed text-gray-800">
                  Crafting <span className="font-semibold italic">elegant solutions</span> through 
                  clean code and innovative design.
                </p>
              </motion.div>
            </div>

            {/* CTA buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-2 md:pt-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              <Button variant="primary" href="#projects">
                View Projects
              </Button>
              <Button variant="secondary" href="#contact">
                Get in Touch
              </Button>
            </motion.div>
          </div>

          {/* Right: Photo Section with Abstract Frame */}
          <motion.div
            className="relative order-1 lg:order-2 lg:col-span-5 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <div className="relative w-56 sm:w-64 md:w-72 lg:w-64 xl:w-72">
              {/* Large abstract background square - Hidden on small screens */}
              <motion.div
                className="absolute -top-8 md:-top-12 -left-8 md:-left-12 w-32 h-32 md:w-40 md:h-40 border-2 border-black opacity-30 hidden sm:block"
                style={{
                  x: mousePosition.x * -0.8,
                  y: mousePosition.y * -0.8,
                }}
                initial={{ opacity: 0, rotate: 0 }}
                animate={{ opacity: 0.3, rotate: 45 }}
                transition={{ duration: 1.2, delay: 1 }}
              />

              {/* Minimal geometric lines */}
              <motion.div
                className="absolute -top-4 md:-top-6 -right-4 md:-right-6 w-16 h-16 md:w-20 md:h-20 border-t-4 border-r-4 border-black hidden sm:block"
                style={{
                  x: mousePosition.x * 0.4,
                  y: mousePosition.y * 0.4,
                }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 1.1 }}
              />

              <motion.div
                className="absolute -bottom-4 md:-bottom-6 -left-4 md:-left-6 w-12 h-12 md:w-16 md:h-16 bg-black hidden sm:block"
                style={{
                  x: mousePosition.x * 0.3,
                  y: mousePosition.y * 0.3,
                }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 1.3 }}
              />

              {/* Vertical accent lines - Hidden on small screens */}
              <motion.div
                className="absolute top-0 -right-2 w-px h-24 md:h-32 bg-black hidden sm:block"
                style={{
                  y: mousePosition.y * 1.2,
                }}
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ duration: 1, delay: 1.2 }}
              />

              <motion.div
                className="absolute bottom-0 -left-2 w-px h-16 md:h-24 bg-gray-400 hidden sm:block"
                style={{
                  y: mousePosition.y * -0.8,
                }}
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ duration: 1, delay: 1.4 }}
              />

              {/* Photo Frame - Compact and Modern */}
              <motion.div
                className="relative border-3 md:border-4 border-black bg-white shadow-lg"
                whileHover={{ 
                  scale: 1.03,
                  rotate: 1,
                  transition: { duration: 0.3 }
                }}
              >
                <div className="relative aspect-[3/4] overflow-hidden grayscale hover:grayscale-0 transition-all duration-500">
                  <Image
                    src="/test.webp"
                    alt="Amri Sabilly"
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 640px) 80vw, (max-width: 1024px) 40vw, 30vw"
                  />
                  
                  {/* Subtle overlay on hover */}
                  <motion.div
                    className="absolute inset-0 bg-black opacity-0 hover:opacity-10 transition-opacity duration-300"
                  />
                </div>

                {/* Minimal corner details */}
                <div className="absolute -top-1 -left-1 w-4 h-4 md:w-6 md:h-6 border-t-2 border-l-2 border-white"></div>
                <div className="absolute -bottom-1 -right-1 w-4 h-4 md:w-6 md:h-6 border-b-2 border-r-2 border-white"></div>
              </motion.div>

              {/* Small floating abstract elements - Hidden on mobile */}
              <motion.div
                className="absolute top-1/3 -left-6 md:-left-8 w-2 h-2 bg-black rounded-full hidden sm:block"
                animate={{
                  y: [0, -15, 0],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />

              <motion.div
                className="absolute top-2/3 -right-6 md:-right-8 w-3 h-3 border border-black hidden sm:block"
                animate={{
                  y: [0, 15, 0],
                  rotate: [0, 90, 180, 270, 360],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />

              <motion.div
                className="absolute bottom-1/4 -left-8 md:-left-10 w-1 h-8 md:h-12 bg-gray-300 hidden sm:block"
                animate={{
                  scaleY: [1, 1.3, 1],
                  opacity: [0.3, 0.8, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          style={{ opacity: Math.max(0, 1 - scrollY * 0.005) }}
        >
          <p className="text-xs tracking-widest uppercase text-gray-400">Scroll</p>
          <motion.div
            className="w-px h-16 bg-gradient-to-b from-black to-transparent"
            animate={{ scaleY: [1, 1.2, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </motion.div>
      </Container>
    </section>
  );
}
