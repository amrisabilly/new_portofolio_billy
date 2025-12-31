'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Container from '../ui/Container';
import Card from '../ui/Card';
import FadeIn from '../ui/FadeIn';
import { projects } from '@/app/data/projects';

export default function Projects() {
  const [showAll, setShowAll] = React.useState(false);
  const displayedProjects = showAll ? projects : projects.slice(0, 4);
  return (
    <section id="projects" className="relative bg-gray-50 py-20 md:py-32">
      <Container>
        {/* Header */}
        <FadeIn>
          <div className="mb-16 md:mb-24">
            <div className="flex items-end justify-between flex-wrap gap-4">
              <div>
                <h2 className="text-5xl md:text-7xl font-bold tracking-tight">
                  Featured
                  <span className="block italic font-light">Projects</span>
                </h2>
                <motion.div
                  className="mt-6 h-1 bg-black"
                  initial={{ width: 0 }}
                  whileInView={{ width: 96 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                />
              </div>
              <p className="text-lg text-gray-600 max-w-md">
                A selection of my recent work showcasing various technologies and problem-solving approaches.
              </p>
            </div>
          </div>
        </FadeIn>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {displayedProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <Link href={`/projects/${project.id}`}>
                <Card className="group h-full flex flex-col cursor-pointer">
                  {/* Project number */}
                  <div className="flex items-start justify-between mb-6">
                    <motion.span
                      className="text-6xl font-black text-gray-200 group-hover:text-black transition-colors duration-300"
                      whileHover={{ scale: 1.1 }}
                    >
                      {String(idx + 1).padStart(2, '0')}
                    </motion.span>
                    <span className="text-sm font-medium tracking-wider text-gray-500">
                      {project.year}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="space-y-4 grow">
                    <h3 className="text-2xl md:text-3xl font-bold tracking-tight group-hover:underline">
                      {project.title}
                    </h3>

                    <p className="text-gray-700 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.technologies.slice(0, 4).map((tech, techIdx) => (
                        <motion.span
                          key={tech}
                          className="px-3 py-1 text-xs font-medium tracking-wide uppercase border border-black bg-white"
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: idx * 0.1 + techIdx * 0.05 }}
                          whileHover={{ scale: 1.05, backgroundColor: '#000', color: '#fff' }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="px-3 py-1 text-xs font-medium tracking-wide uppercase text-gray-500">
                          +{project.technologies.length - 4} more
                        </span>
                      )}
                    </div>

                    {/* Link */}
                    <div className="pt-4 flex items-center gap-2 text-sm font-medium group-hover:gap-4 transition-all">
                      <span>View Details</span>
                      <span>→</span>
                    </div>
                  </div>

                  {/* Decorative corner */}
                  <motion.div
                    className="absolute top-0 right-0 h-24 w-24 border-t-2 border-r-2 border-black opacity-0 group-hover:opacity-100 transition-opacity"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                  />
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        {!showAll && projects.length > 4 && (
          <div className="flex justify-center mt-10">
            <button
              className="px-6 py-3 bg-black text-white rounded-lg font-semibold hover:bg-gray-800 transition"
              onClick={() => setShowAll(true)}
            >
              View All Projects
            </button>
          </div>
        )}
        {showAll && (
          <div className="flex justify-center mt-10">
            <button
              className="px-6 py-3 bg-gray-200 text-black rounded-lg font-semibold hover:bg-gray-300 transition"
              onClick={() => setShowAll(false)}
            >
              Show Less
            </button>
          </div>
        )}
      </Container>
    </section>
  );
}
