'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Container from '../ui/Container';
import Button from '../ui/Button';
import FadeIn from '../ui/FadeIn';

const socialLinks = [
  { name: 'GitHub', url: 'https://github.com/amrisabilly' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/amri-sabilly-1a2a44319/' },
  { name: 'Twitter', url: 'https://x.com/queenbee973569' },
  { name: 'Email', url: 'mailto:amrsabill@gmail.com' }
];

export default function Contact() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="contact" className="relative bg-white min-h-screen flex items-center py-20 md:py-32 overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        className="absolute top-1/4 right-0 w-96 h-96 border-2 border-black opacity-5"
        animate={{
          rotate: [0, 90, 180, 270, 360],
          scale: [1, 1.1, 1, 0.9, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          {/* Left: CTA */}
          <FadeIn direction="left">
            <div className="space-y-8">
              <div>
                <motion.h2
                  className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-none"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  Let's
                  <span className="block italic font-light">Create</span>
                  <span className="block">Together</span>
                </motion.h2>
                <motion.div
                  className="mt-6 h-1 bg-black"
                  initial={{ width: 0 }}
                  whileInView={{ width: 96 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                />
              </div>

              <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-lg">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>

              {/* Decorative element */}
              <div className="flex gap-2 pt-8">
                {[2, 1.5, 1].map((height, idx) => (
                  <motion.div
                    key={idx}
                    className="w-2 bg-black"
                    style={{ height: `${height * 4}rem` }}
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    whileHover={{ scaleY: 1.2 }}
                  />
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Right: Contact info */}
          <FadeIn direction="right" delay={200}>
            <div className="space-y-12">
              {/* Email CTA */}
              <motion.div
                className="border-2 border-black p-8 bg-white"
                whileHover={{
                  y: -8,
                  boxShadow: '8px 8px 0px 0px rgba(0,0,0,1)',
                  transition: { duration: 0.2 }
                }}
              >
                <p className="text-sm uppercase tracking-wider text-gray-600 mb-4">
                  Email Me
                </p>
                <motion.a
                  href="mailto:amrisabilly@example.com"
                  className="text-2xl md:text-3xl font-bold block mb-6 hover:italic transition-all"
                  whileHover={{ x: 10 }}
                >
                  amrsabill@gmail.com
                </motion.a>
                <Button variant="primary" href="mailto:amrisabilly@example.com">
                  Send Message
                </Button>
              </motion.div>

              {/* Social Links */}
              <div className="space-y-6">
                <p className="text-sm uppercase tracking-wider text-gray-600">
                  Connect With Me
                </p>
                
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((link, idx) => (
                    <motion.a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative border-2 border-black p-4 text-center font-medium overflow-hidden"
                      onHoverStart={() => setHoveredIndex(idx)}
                      onHoverEnd={() => setHoveredIndex(null)}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <motion.div
                        className="absolute inset-0 bg-black"
                        initial={{ x: '-100%' }}
                        animate={{ x: hoveredIndex === idx ? 0 : '-100%' }}
                        transition={{ duration: 0.3 }}
                      />
                      <span className={`relative z-10 text-lg transition-colors ${
                        hoveredIndex === idx ? 'text-white' : 'text-black'
                      }`}>
                        {link.name}
                      </span>
                      <motion.span
                        className={`relative z-10 block text-xs mt-1 transition-colors ${
                          hoveredIndex === idx ? 'text-white' : 'text-black'
                        }`}
                        animate={{ opacity: hoveredIndex === idx ? 1 : 0 }}
                      >
                        →
                      </motion.span>
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Availability status */}
              <motion.div
                className="flex items-center gap-4 pt-8"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 }}
              >
                <motion.div
                  className="h-3 w-3 bg-black"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <p className="text-sm font-medium tracking-wider uppercase">
                  Available for freelance projects
                </p>
              </motion.div>
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
