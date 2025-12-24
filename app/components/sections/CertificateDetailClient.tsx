'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { getCertificateById } from '@/app/data/certificates';
import Container from '../ui/Container';

interface CertificateDetailClientProps {
  certificateId: string;
}

export default function CertificateDetailClient({ certificateId }: CertificateDetailClientProps) {
  const certificate = getCertificateById(certificateId);

  if (!certificate) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-2xl">Certificate not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-black text-white py-20 md:py-32">
        <Container>
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-8"
          >
            <Link
              href="/#certificates"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors"
            >
              <span className="text-2xl">←</span>
              <span>Back to Certificates</span>
            </Link>
          </motion.div>

          {/* Certificate Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="inline-block mb-4 px-4 py-2 border border-white/20 bg-white/5">
              <p className="font-mono text-sm">{certificate.shortId}</p>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
              {certificate.title}
            </h1>

            <div className="flex flex-wrap gap-4 text-lg text-white/80">
              <div className="flex items-center gap-2">
                <span className="font-mono">Issuer:</span>
                <span className="font-semibold">{certificate.issuer}</span>
              </div>
              <span className="text-white/40">•</span>
              <div className="flex items-center gap-2">
                <span className="font-mono">Year:</span>
                <span className="font-semibold">{certificate.year}</span>
              </div>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* Main Content */}
      <Container>
        <div className="py-16 md:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Certificate Image */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative"
            >
              <div className="border-4 border-black relative overflow-hidden bg-gray-100 aspect-[4/3]">
                <Image
                  src={certificate.image}
                  alt={certificate.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              {certificate.credentialUrl && (
                <motion.a
                  href={certificate.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 block w-full bg-black text-white text-center py-4 px-6 font-bold border-2 border-black hover:bg-white hover:text-black transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Verify Certificate →
                </motion.a>
              )}
            </motion.div>

            {/* Certificate Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-8"
            >
              {/* Description */}
              <div>
                <h2 className="text-3xl font-bold mb-4">About</h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {certificate.description}
                </p>
              </div>

              {/* Skills */}
              <div>
                <h2 className="text-3xl font-bold mb-4">Skills Covered</h2>
                <div className="flex flex-wrap gap-3">
                  {certificate.skills.map((skill, idx) => (
                    <motion.span
                      key={idx}
                      className="px-4 py-2 border-2 border-black bg-white hover:bg-black hover:text-white transition-colors"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.5 + idx * 0.05 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Certificate Details */}
              <div className="border-2 border-black p-6 bg-gray-50">
                <h3 className="text-xl font-bold mb-4">Certificate Details</h3>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm text-gray-600">Certificate ID</p>
                    <p className="font-mono text-sm">{certificate.shortId}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Issued By</p>
                    <p className="font-semibold">{certificate.issuer}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Year Obtained</p>
                    <p className="font-semibold">{certificate.year}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </Container>
    </div>
  );
}
