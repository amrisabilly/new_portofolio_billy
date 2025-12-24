'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Container from '../ui/Container';
import FadeIn from '../ui/FadeIn';
import { certificates } from '@/app/data/certificates';

export default function Certificates() {
  return (
    <section id="certificates" className="relative bg-white py-20 md:py-32">
      <Container>
        {/* Header */}
        <FadeIn>
          <div className="mb-16 md:mb-24">
            <h2 className="text-5xl md:text-7xl font-bold tracking-tight">
              Certifications &
              <span className="block italic font-light">Credentials</span>
            </h2>
            <motion.div
              className="mt-6 h-1 bg-black"
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
          </div>
        </FadeIn>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, idx) => (
            <Link key={cert.id} href={`/certificates/${cert.id}`}>
              <motion.div
                className="group relative border-2 border-black p-6 bg-white cursor-pointer h-full"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                whileHover={{
                  x: -4,
                  y: -4,
                  boxShadow: '6px 6px 0px 0px rgba(0,0,0,1)',
                  transition: { duration: 0.2 }
                }}
              >
                {/* Certificate ID */}
                <motion.div
                  className="absolute -top-3 -right-3 bg-black text-white px-3 py-1 text-xs font-mono"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 + 0.2 }}
                >
                  {cert.shortId}
                </motion.div>

                {/* Content */}
                <div className="space-y-4">
                  <div className="h-16 flex items-center">
                    <h3 className="text-xl font-bold leading-tight">
                      {cert.title}
                    </h3>
                  </div>

                  <div className="border-t border-gray-200 pt-4 space-y-2">
                    <p className="text-sm text-gray-600 font-medium">
                      {cert.issuer}
                    </p>
                    <p className="text-sm text-gray-500">
                      Issued: {cert.year}
                    </p>
                  </div>

                  {/* View Details CTA */}
                  <div className="pt-2">
                    <span className="text-sm font-medium group-hover:underline">
                      View Details →
                    </span>
                  </div>
                </div>

                {/* Index number decoration */}
                <motion.div
                  className="absolute bottom-4 right-4 text-5xl font-black text-gray-100 group-hover:text-gray-200 transition-colors"
                  whileHover={{ scale: 1.2 }}
                >
                  {String(idx + 1).padStart(2, '0')}
                </motion.div>
              </motion.div>
            </Link>
          ))}
        </div>

        {/* View all link */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <motion.a
            href="#"
            className="inline-flex items-center gap-2 text-lg font-medium group"
            whileHover={{ gap: 16 }}
          >
            View All Credentials
            <motion.span
              className="text-2xl"
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </motion.a>
        </motion.div>
      </Container>
    </section>
  );
}
