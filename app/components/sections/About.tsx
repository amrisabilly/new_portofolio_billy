'use client';

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Container from '../ui/Container';
import FadeIn from '../ui/FadeIn';

export default function About() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <section id="about" className="relative bg-black text-white py-20 md:py-32 overflow-hidden">
      {/* Parallax background elements */}
      <motion.div
        className="absolute top-0 right-0 w-96 h-96 border border-white opacity-10"
        style={{ y }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-64 h-64 bg-white opacity-5"
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, 100]) }}
      />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          {/* Left: Title and decorative element */}
          <FadeIn direction="left">
            <div className="space-y-8">
              <div className="relative">
                <h2 className="text-5xl md:text-7xl font-bold tracking-tight">
                  About
                  <span className="block italic font-light">Me</span>
                </h2>
                {/* Decorative line */}
                <motion.div
                  className="absolute -right-12 top-1/2 h-px bg-white hidden lg:block"
                  initial={{ width: 0 }}
                  whileInView={{ width: 256 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.5 }}
                />
              </div>

              {/* Abstract decoration */}
              <div className="flex gap-4 pt-8">
                {[1, 0.6, 0.4].map((opacity, idx) => (
                  <motion.div
                    key={idx}
                    className="h-24 w-1 bg-white"
                    style={{ opacity }}
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                  />
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Right: Content */}
          <FadeIn direction="right" delay={200}>
            <div className="space-y-6">
              <p className='text-lg md:text-xl leading-relaxed text-gray-300'>I'm a passionate <span className='font-semibold text-white'>software developer</span> bridging technology and business. I specialize in development and project management to deliver systems that create real value.</p>
              
              <p className='text-lg md:text-xl leading-relaxed text-gray-300'>With expertise in full-stack development, I build scalable applications through clean code. My business background enables me to craft technology as strategic solutions.</p>

              <p className="text-lg md:text-xl leading-relaxed text-gray-300">
                I believe in continuous learning to deliver <span className="italic">innovative solutions</span> that make a difference.
              </p>

              {/* Stats */}
              <motion.div
                className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-800"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: {},
                  visible: {
                    transition: {
                      staggerChildren: 0.2,
                    },
                  },
                }}
              >
                {[
                  { value: '2+', label: 'Years Exp' },
                  { value: '20+', label: 'Projects' },
                  { value: '5+', label: 'Clients' },
                ].map((stat, idx) => (
                  <motion.div
                    key={idx}
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0 },
                    }}
                  >
                    <motion.p
                      className="text-4xl font-bold"
                      initial={{ opacity: 0, scale: 0.5 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: idx * 0.1 }}
                    >
                      {stat.value}
                    </motion.p>
                    <p className="text-sm text-gray-400 uppercase tracking-wider">
                      {stat.label}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
