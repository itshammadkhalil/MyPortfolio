"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolioData";
import { Brain, Eye, Cpu } from "lucide-react";
import Image from "next/image";

const iconMap: Record<string, React.ElementType> = {
  Brain,
  Eye,
  Cpu,
};

export default function AboutSection() {
  const { story, stats, traits } = portfolioData.about;

  return (
    <section id="about" className="py-32 px-6 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "0px" }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-light flex-shrink-0">
            About Me
          </h2>
          <div className="h-[1px] w-full bg-brand-lightest-navy"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-brand-slate text-lg leading-relaxed">
              {story}
            </p>

            {/* Traits */}
            <div className="flex flex-wrap gap-4 pt-4">
              {traits.map((trait, index) => {
                const Icon = iconMap[trait.icon];
                return (
                  <div key={index} className="flex items-center gap-2 bg-brand-light-navy px-4 py-2 rounded-full border border-brand-lightest-navy text-sm text-brand-light">
                    {Icon && <Icon size={16} className="text-brand-teal" />}
                    <span>{trait.text}</span>
                  </div>
                );
              })}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-6">
              {stats.map((stat, index) => (
                <div key={index} className="glass-card p-4 text-center">
                  <div className="text-2xl md:text-3xl font-bold text-brand-teal mb-1">{stat.value}</div>
                  <div className="text-xs md:text-sm text-brand-slate">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative max-w-sm mx-auto md:ml-auto w-full">
            <div className="absolute inset-0 border-2 border-brand-teal/30 rounded-lg translate-x-4 translate-y-4 z-0"></div>
            <div className="relative z-10 rounded-lg overflow-hidden bg-brand-light-navy aspect-square shadow-[0_0_30px_rgba(100,255,218,0.2)] border border-brand-teal/20">
              <Image 
                src="/images/profile_photo.png" 
                alt={portfolioData.hero.name}
                fill
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
