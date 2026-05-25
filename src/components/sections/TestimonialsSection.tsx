"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { portfolioData } from "@/data/portfolioData";
import { Star, ChevronDown } from "lucide-react";

export default function TestimonialsSection() {
  const { testimonials } = portfolioData;
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const visibleTestimonials = (isMobile && !isExpanded) 
    ? testimonials.slice(0, 2) 
    : testimonials;

  // Helper function to get initials from name
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(part => part[0])
      .join('')
      .toUpperCase()
      .substring(0, 2);
  };

  return (
    <section id="testimonials" className="py-32 px-6 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "0px" }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex flex-col gap-2 mb-16">
          <div className="flex items-center gap-4">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-light flex-shrink-0 whitespace-nowrap">
              Client Feedback
            </h2>
            <div className="h-[1px] w-full bg-brand-lightest-navy"></div>
          </div>
          <p className="text-brand-slate font-mono text-sm mt-2">What clients say about working with me</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {visibleTestimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="glass-card p-8 flex flex-col h-full hover:border-brand-teal/30 transition-colors relative group"
            >
              {/* Decorative top border */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-teal/20 to-transparent group-hover:via-brand-teal/50 transition-colors"></div>

              {/* Header: Avatar + Stars */}
              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 rounded-full bg-brand-teal/20 border border-brand-teal/30 text-brand-teal flex items-center justify-center font-bold text-lg font-mono flex-shrink-0">
                  {getInitials(testimonial.name)}
                </div>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="text-brand-teal fill-brand-teal" />
                  ))}
                </div>
              </div>

              {/* Quote */}
              <p className="text-brand-slate leading-relaxed mb-8 flex-1">
                "{testimonial.quote}"
              </p>

              {/* Divider */}
              <div className="w-12 h-[1px] bg-brand-teal/30 mb-6"></div>

              {/* Footer: Name + Role */}
              <div>
                <h4 className="text-lg font-bold text-brand-light group-hover:text-brand-teal transition-colors">{testimonial.name}</h4>
                <p className="text-brand-slate text-sm font-medium mt-1">
                  {testimonial.role} <span className="text-brand-teal">@</span> {testimonial.company}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Show More Button - Mobile Only */}
        {isMobile && testimonials.length > 2 && (
          <div className="mt-8 flex justify-center">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-xl border border-brand-teal text-brand-teal font-medium hover:bg-brand-teal/10 transition-colors"
            >
              {isExpanded ? "Show Less" : "Show More"}
              <ChevronDown 
                size={18} 
                className={`transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`} 
              />
            </button>
          </div>
        )}
      </motion.div>
    </section>
  );
}
