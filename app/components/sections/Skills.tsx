'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Container from '../ui/Container';
import FadeIn from '../ui/FadeIn';

const skillCategories = [
  {
    title: 'Frontend',
    skills: [
      'React', 'Next.js', 'Laravel Blade','Tailwind CSS',
      'HTML5', 'CSS3', 'JavaScript',
    ]
  },
  {
    title: 'Backend',
    skills: [
      'Node.js', 'Python', 'Laravel API', 'REST API', 
    ]
  },
  {
    title: 'Mobile Development',
    skills: [
      'Kotlin', 'Flutter', 'Dart'
    ]
  },
  {
    title: 'Tools & Technologies',
    skills: [
      'Git', 'VS Code', 'Figma', 'Termius', 'CI/CD'
    ]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="relative bg-white py-20 md:py-32 overflow-hidden">
      {/* Background decorative elements */}
      <motion.div
        className="absolute top-20 left-0 w-1 h-64 bg-black opacity-10"
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      />

      <Container>
        {/* Header */}
        <FadeIn>
          <div className="mb-16 md:mb-24">
            <h2 className="text-5xl md:text-7xl font-bold tracking-tight">
              Skills &
              <span className="block italic font-light">Expertise</span>
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

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              className="group relative border-2 border-black p-8 bg-white"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              whileHover={{
                y: -8,
                boxShadow: '8px 8px 0px 0px rgba(0,0,0,1)',
                transition: { duration: 0.2 }
              }}
            >
              {/* Category number */}
              <motion.div
                className="absolute -top-4 -left-4 bg-black text-white w-12 h-12 flex items-center justify-center text-xl font-bold"
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.2 + 0.3 }}
              >
                {String(idx + 1).padStart(2, '0')}
              </motion.div>

              {/* Category title */}
              <h3 className="text-2xl md:text-3xl font-bold mb-8 tracking-tight">
                {category.title}
              </h3>

              {/* Skills list */}
              <ul className="space-y-3">
                {category.skills.map((skill, skillIdx) => (
                  <motion.li
                    key={skill}
                    className="flex items-center text-lg text-gray-700 group-hover:text-black transition-colors"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: idx * 0.2 + skillIdx * 0.05 }}
                  >
                    <motion.span
                      className="mr-3 h-2 w-2 bg-black"
                      whileHover={{ scale: 1.5 }}
                    />
                    {skill}
                  </motion.li>
                ))}
              </ul>

              {/* Decorative element */}
              <motion.div
                className="absolute bottom-4 right-4 h-16 w-16 border-r-2 border-b-2 border-black opacity-20"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 0.2 }}
                whileHover={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
