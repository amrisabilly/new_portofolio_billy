'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Container from '@/app/components/ui/Container';
import Button from '@/app/components/ui/Button';
import { getProjectById } from '@/app/data/projects';

interface ProjectDetailClientProps {
  projectId: string;
}

export default function ProjectDetailClient({ projectId }: ProjectDetailClientProps) {
  const project = getProjectById(projectId);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-black text-white py-20 md:py-32 overflow-hidden">
        <motion.div
          className="absolute top-0 right-0 w-96 h-96 border border-white opacity-10"
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        />
        
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link href="/#projects" className="inline-flex items-center gap-2 text-sm mb-8 hover:gap-4 transition-all">
              <span>←</span> Back to Projects
            </Link>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4 text-sm uppercase tracking-wider text-gray-400">
                <span>{project.category}</span>
                <span>•</span>
                <span>{project.year}</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-black tracking-tight">
                {project.title}
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 max-w-3xl">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-4 pt-4">
                {project.liveDemo && (
                  <Button variant="primary" href={project.liveDemo}>
                    View Live Demo
                  </Button>
                )}
                {project.repository && (
                  <Button variant="secondary" href={project.repository}>
                    View Repository
                  </Button>
                )}
              </div>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* Project Details */}
      <section className="py-20 md:py-32">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Overview */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <h2 className="text-3xl font-bold">Overview</h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {project.longDescription}
                </p>
              </motion.div>

              {/* Mockups Gallery */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <h2 className="text-3xl font-bold">Project Mockups</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {project.mockups.map((mockup, idx) => (
                    <motion.div
                      key={idx}
                      className="relative border-2 border-black overflow-hidden grayscale hover:grayscale-0 transition-all duration-500"
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="relative aspect-video bg-gray-100">
                        <Image
                          src={mockup}
                          alt={`${project.title} mockup ${idx + 1}`}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                      </div>
                      <div className="absolute inset-0 bg-black opacity-0 hover:opacity-10 transition-opacity" />
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Features */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <h2 className="text-3xl font-bold">Key Features</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.features.map((feature, idx) => (
                    <motion.div
                      key={idx}
                      className="flex items-start gap-3 p-4 border border-gray-200 hover:border-black transition-colors"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.05 }}
                    >
                      <div className="w-2 h-2 bg-black mt-2 shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Challenges & Solutions */}
              {project.challenges && project.solutions && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="space-y-6"
                >
                  <h2 className="text-3xl font-bold">Challenges & Solutions</h2>
                  <div className="space-y-6">
                    <div className="border-l-4 border-black pl-6">
                      <h3 className="text-xl font-bold mb-2">Challenge</h3>
                      <p className="text-gray-700">{project.challenges}</p>
                    </div>
                    <div className="border-l-4 border-gray-300 pl-6">
                      <h3 className="text-xl font-bold mb-2">Solution</h3>
                      <p className="text-gray-700">{project.solutions}</p>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Project Info */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="border-2 border-black p-6 space-y-6"
              >
                <h3 className="text-xl font-bold">Project Info</h3>
                
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-gray-500 uppercase tracking-wider mb-1">Duration</p>
                    <p className="font-medium">{project.duration}</p>
                  </div>
                  
                  <div>
                    <p className="text-sm text-gray-500 uppercase tracking-wider mb-1">Role</p>
                    <p className="font-medium">{project.role}</p>
                  </div>
                  
                  <div>
                    <p className="text-sm text-gray-500 uppercase tracking-wider mb-1">Year</p>
                    <p className="font-medium">{project.year}</p>
                  </div>
                  
                  <div>
                    <p className="text-sm text-gray-500 uppercase tracking-wider mb-1">Category</p>
                    <p className="font-medium">{project.category}</p>
                  </div>
                </div>
              </motion.div>

              {/* Technologies */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="border-2 border-black p-6 space-y-4"
              >
                <h3 className="text-xl font-bold">Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <motion.span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium uppercase border border-black bg-white hover:bg-black hover:text-white transition-colors"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.05 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </motion.div>

              {/* Links */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="border-2 border-black p-6 space-y-4"
              >
                <h3 className="text-xl font-bold">Links</h3>
                <div className="space-y-3">
                  {project.liveDemo && (
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-3 border border-black hover:bg-black hover:text-white transition-colors group"
                    >
                      <span className="font-medium">Live Demo</span>
                      <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </a>
                  )}
                  {project.repository && (
                    <a
                      href={project.repository}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-3 border border-black hover:bg-black hover:text-white transition-colors group"
                    >
                      <span className="font-medium">Repository</span>
                      <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </a>
                  )}
                </div>
              </motion.div>
            </div>
          </div>
        </Container>
      </section>

      {/* Back to Projects CTA */}
      <section className="bg-black text-white py-20">
        <Container>
          <div className="text-center space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold">View More Projects</h2>
            <Link href="/#projects">
              <Button variant="secondary">Back to All Projects</Button>
            </Link>
          </div>
        </Container>
      </section>
    </div>
  );
}
