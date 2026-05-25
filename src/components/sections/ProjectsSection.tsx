"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { portfolioData } from "@/data/portfolioData";
import { ExternalLink, X } from "lucide-react";
import { FaGithub as Github } from "react-icons/fa";
import Image from "next/image";

export default function ProjectsSection() {
  const { projects } = portfolioData;
  const [selectedProject, setSelectedProject] = useState<any | null>(null);

  // Scroll lock when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedProject]);

  return (
    <section id="projects" className="py-32 px-6 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "0px" }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-light flex-shrink-0">
            Featured Projects
          </h2>
          <div className="h-[1px] w-full bg-brand-lightest-navy"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="glass-card group flex flex-col overflow-hidden h-full cursor-pointer hover:border-brand-teal/30 transition-colors"
              onClick={() => setSelectedProject(project)}
            >
              {/* Image Container with Hover Overlay */}
              <div className="relative aspect-video overflow-hidden">
                <Image 
                  src={project.imageRef} 
                  alt={project.name} 
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-brand-navy/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 backdrop-blur-sm">
                  <span className="px-4 py-2 bg-brand-teal/20 text-brand-teal rounded font-medium border border-brand-teal/30 hover:bg-brand-teal hover:text-brand-navy transition-colors">
                    View Case Study
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-brand-light mb-3 group-hover:text-brand-teal transition-colors">
                  {project.name}
                </h3>
                <p className="text-brand-slate text-sm mb-6 flex-1 line-clamp-4">
                  {project.description}
                </p>
                
                <ul className="flex flex-wrap gap-3 mt-auto">
                  {project.techStack.map((tech, i) => (
                    <li key={i} className="font-mono text-xs text-brand-teal bg-brand-teal/10 px-2 py-1 rounded">
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Case Study Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-brand-navy/90 backdrop-blur-md"
            />
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="glass-card relative z-10 w-full max-w-3xl max-h-[90vh] overflow-y-auto"
            >
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 text-brand-slate hover:text-brand-teal bg-brand-light-navy rounded-full transition-colors z-20"
              >
                <X size={20} />
              </button>

              <div className="relative h-48 sm:h-64 w-full">
                <Image 
                  src={selectedProject.imageRef} 
                  alt={selectedProject.name} 
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy to-transparent" />
                <h3 className="absolute bottom-6 left-6 right-6 text-2xl sm:text-3xl font-bold text-brand-light">
                  {selectedProject.name}
                </h3>
              </div>

              <div className="p-6 sm:p-8">
                {selectedProject.caseStudy ? (
                  <div className="space-y-8">
                    <div>
                      <h4 className="text-brand-teal font-mono text-sm mb-2 flex items-center gap-2">
                        <span className="w-8 h-[1px] bg-brand-teal"></span>
                        Problem Statement
                      </h4>
                      <p className="text-brand-slate leading-relaxed">
                        {selectedProject.caseStudy.problem}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-brand-teal font-mono text-sm mb-2 flex items-center gap-2">
                        <span className="w-8 h-[1px] bg-brand-teal"></span>
                        My Solution
                      </h4>
                      <p className="text-brand-slate leading-relaxed">
                        {selectedProject.caseStudy.solution}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-brand-teal font-mono text-sm mb-2 flex items-center gap-2">
                        <span className="w-8 h-[1px] bg-brand-teal"></span>
                        Tech Stack Used
                      </h4>
                      <p className="text-brand-slate leading-relaxed">
                        {selectedProject.caseStudy.tech}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-brand-teal font-mono text-sm mb-2 flex items-center gap-2">
                        <span className="w-8 h-[1px] bg-brand-teal"></span>
                        Results & Impact
                      </h4>
                      <div className="bg-brand-teal/10 border border-brand-teal/20 rounded p-4">
                        <p className="text-brand-light font-medium">
                          {selectedProject.caseStudy.results}
                        </p>
                      </div>
                    </div>
                  </div>
                ) : (
                  <p className="text-brand-slate">Case study details coming soon.</p>
                )}

                <div className="flex flex-wrap gap-4 mt-8 pt-8 border-t border-brand-lightest-navy">
                  {selectedProject.liveUrl !== "#" && (
                    <a 
                      href={selectedProject.liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-2 rounded bg-brand-teal text-brand-navy font-medium hover:bg-brand-teal/90 transition-colors"
                    >
                      <ExternalLink size={18} />
                      Live Demo
                    </a>
                  )}
                  {selectedProject.githubUrl !== "#" && (
                    <a 
                      href={selectedProject.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-2 rounded border border-brand-teal text-brand-teal font-medium hover:bg-brand-teal/10 transition-colors"
                    >
                      <Github size={18} />
                      Source Code
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
