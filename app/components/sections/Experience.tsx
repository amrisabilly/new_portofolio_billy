'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Container from '../ui/Container';
import FadeIn from '../ui/FadeIn';

const experiences = [
  {
    role: 'Fullstack Developer',
    company: 'Naga Cargo',
    period: '2025 - Present',
    description: 'Developing end-to-end solutions for cargo management system, handling both web and mobile application development.',
    achievements: [
      'Built cargo management website',
      'Developed mobile application',
      'Implemented full-stack solutions'
    ]
  },
  {
    role: 'Backend Developer',
    company: 'PT Berbinar Insightfull',
    period: '2024 - Present',
    description: 'Developing and maintaining backend systems for various web applications including psychological testing, e-learning, and internal staff management platforms.',
    achievements: [
      'Built psychological testing website',
      'Developed e-learning platform',
      'Created internal staff management website'
    ]
  },
  {
    role: 'Vice Chairman of the Website Community',
    company: 'Himasisfo UPNYK',
    period: '2023 - 2024',
    description: 'Led website community initiatives and coordinated team efforts to build and maintain organizational web presence.',
    achievements: [
      'Built KSM Himasisfo website',
      'Coordinated website development team',
      'Managed website community activities'
    ]
  },
  {
    role: 'Frontend Developer',
    company: 'Himasisfo UPNYK',
    period: '2023 - 2024',
    description: 'Built responsive and accessible web interfaces. Collaborated with designers to transform mockups into pixel-perfect implementations.',
    achievements: [
      'Built responsive and interactive websites ',
      'Optimized performance and accessibility',
      'Developed reusable UI components'
    ]
  }
];

const education = [
  {
    degree: 'Bachelor of Information Systems',
    institution: 'UPN Veteran Yogyakarta',
    period: '2023 - now',
    details: 'Graduated with Honors. Focus on Information Systems, Business Analysis, and Application Development.'
  }
];

export default function Experience() {
  return (
    <section id="experience" className="relative bg-black text-white py-20 md:py-32 overflow-hidden">
      {/* Background decoration */}
      <motion.div
        className="absolute top-0 right-0 w-64 h-full border-l border-white opacity-5"
        initial={{ x: 100 }}
        whileInView={{ x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      />

      <Container className="relative z-10">
        {/* Header */}
        <FadeIn>
          <div className="mb-16 md:mb-24">
            <h2 className="text-5xl md:text-7xl font-bold tracking-tight">
              Experience &
              <span className="block italic font-light">Education</span>
            </h2>
            <motion.div
              className="mt-6 h-1 bg-white"
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
          </div>
        </FadeIn>

        {/* Experience Timeline */}
        <div className="mb-24">
          <h3 className="text-2xl font-bold mb-12 tracking-wider uppercase">
            Work Experience
          </h3>
          
          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <motion.div
                key={`${exp.company}-${exp.role}-${idx}`}
                className="relative pl-8 border-l-2 border-gray-700 hover:border-white transition-colors duration-300"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.2 }}
              >
                {/* Timeline dot */}
                <motion.div
                  className="absolute -left-2.25 top-0 h-4 w-4 bg-white"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: idx * 0.2 + 0.2 }}
                  whileHover={{ scale: 1.5 }}
                />

                {/* Content */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                  {/* Period */}
                  <div className="md:col-span-3">
                    <p className="text-sm font-mono text-gray-400 tracking-wider">
                      {exp.period}
                    </p>
                  </div>

                  {/* Details */}
                  <div className="md:col-span-9 space-y-4">
                    <div>
                      <h4 className="text-2xl font-bold mb-1">
                        {exp.role}
                      </h4>
                      <p className="text-lg text-gray-400">
                        {exp.company}
                      </p>
                    </div>

                    <p className="text-gray-300 leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Achievements */}
                    <ul className="space-y-2 pt-2">
                      {exp.achievements.map((achievement, achIdx) => (
                        <motion.li
                          key={achievement}
                          className="flex items-start text-gray-400"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: idx * 0.2 + achIdx * 0.1 }}
                        >
                          <span className="mr-3 mt-2 h-1 w-1 bg-white shrink-0"></span>
                          <span>{achievement}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education */}
        <FadeIn delay={400}>
          <div>
            <h3 className="text-2xl font-bold mb-12 tracking-wider uppercase">
              Education
            </h3>
            
            <div className="space-y-8">
              {education.map((edu, idx) => (
                <motion.div
                  key={edu.degree}
                  className="border-2 border-white p-8"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  whileHover={{
                    y: -8,
                    boxShadow: '8px 8px 0px 0px rgba(255,255,255,1)',
                    transition: { duration: 0.2 }
                  }}
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                    <h4 className="text-2xl font-bold">
                      {edu.degree}
                    </h4>
                    <p className="text-sm font-mono text-gray-400 tracking-wider">
                      {edu.period}
                    </p>
                  </div>
                  <p className="text-xl text-gray-400 mb-2">
                    {edu.institution}
                  </p>
                  <p className="text-gray-400">
                    {edu.details}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
