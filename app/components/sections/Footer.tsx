'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white py-12">
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left: Copyright */}
          <motion.div
            className="text-center md:text-left"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <p className="text-sm text-gray-400">
              © {currentYear} All rights reserved.
            </p>
          </motion.div>

          {/* Center: Name */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <p className="text-xl font-bold tracking-tight">
              AMRI<span className="italic font-light">SABILLY</span>
            </p>
          </motion.div>

          {/* Right: Back to top */}
          <motion.div
            className="text-center md:text-right"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <motion.a
              href="#"
              className="text-sm hover:text-gray-400 transition-colors inline-flex items-center gap-2"
              whileHover={{ y: -2 }}
            >
              Back to Top
              <motion.span
                className="text-lg"
                animate={{ y: [-2, 2, -2] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                ↑
              </motion.span>
            </motion.a>
          </motion.div>
        </div>

        {/* Decorative line */}
        <motion.div
          className="mt-8 h-px bg-gray-800"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.6 }}
        />
      </div>
    </footer>
  );
}
