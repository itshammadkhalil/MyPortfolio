"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolioData";
import { Building2, CheckCircle2, ExternalLink } from "lucide-react";
import Image from "next/image";

export default function CompanySection() {
  const { company } = portfolioData;

  return (
    <section id="company" className="py-32 px-6 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "0px" }}
        transition={{ duration: 0.3 }}
        className="glass-card p-8 md:p-12 relative overflow-hidden"
      >
        {/* Decorative background glow */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-teal/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        
        <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start">
          <div className="flex-shrink-0 bg-brand-navy p-4 rounded-xl border border-brand-lightest-navy w-24 h-24 flex items-center justify-center">
            <Image 
              src="/images/novastack_logo.png" 
              alt="NovaStack Logo" 
              width={80} 
              height={80}
              className="object-contain"
            />
          </div>
          
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-brand-light flex items-center flex-wrap gap-x-2 gap-y-1">
              <span>{company.role}</span>
              <a 
                href="https://novastackltd.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-brand-teal hover:underline flex items-center group"
              >
                @ {company.name}
                <ExternalLink size={18} className="ml-1.5 opacity-70 group-hover:opacity-100 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
              </a>
            </h3>
            <p className="text-brand-slate font-mono text-sm mt-1 mb-6">{company.duration}</p>
            
            <ul className="space-y-4 mb-6">
              {company.description.map((item, index) => (
                <li key={index} className="flex gap-3 text-brand-slate items-start">
                  <span className="text-brand-teal mt-1 flex-shrink-0">▹</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            
            <div className="bg-brand-navy/50 border border-brand-teal/20 rounded-lg p-4 flex gap-4 items-center mb-6">
              <CheckCircle2 className="text-brand-teal flex-shrink-0" size={24} />
              <p className="text-brand-light text-sm italic">{company.highlight}</p>
            </div>

            <div className="w-full h-px bg-brand-lightest-navy/50 my-4"></div>
            
            <div className="flex items-center text-sm text-brand-slate">
              <span>Explore our services at&nbsp;</span>
              <a 
                href="https://novastackltd.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-brand-teal hover:underline flex items-center group transition-colors"
              >
                novastackltd.com
                <ExternalLink size={14} className="ml-1 opacity-70 group-hover:opacity-100 transition-opacity" />
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
