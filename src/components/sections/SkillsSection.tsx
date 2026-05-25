"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolioData";
import { Code2, Workflow, Mic, Network, Rocket, Server } from "lucide-react";
import { 
  FaGithub as Github, 
  FaWordpress as WordPress, 
  FaShopify as Shopify, 
  FaNpm as Npm 
} from "react-icons/fa";

const iconMap: Record<string, React.ElementType> = {
  Code2,
  Github,
  Workflow,
  WordPress,
  Shopify,
  Npm,
  vapi: Mic,
  crewai: Network,
  antigravity: Rocket,
  hostinger: Server
};

export default function SkillsSection() {
  const { technical, tools, soft } = portfolioData.skills;

  return (
    <section id="skills" className="py-32 px-6 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "0px" }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-light flex-shrink-0">
            Skills & Expertise
          </h2>
          <div className="h-[1px] w-full bg-brand-lightest-navy"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Technical Skills */}
          <div>
            <h3 className="text-2xl font-bold text-brand-light mb-8">Technical Proficiency</h3>
            <div className="space-y-6">
              {technical.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between text-sm mb-2 text-brand-slate">
                    <span>{skill.name}</span>
                    <span className="text-brand-teal font-mono">{skill.percentage}%</span>
                  </div>
                  <div className="h-2 w-full bg-brand-lightest-navy rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-brand-teal"
                      style={{ width: `${skill.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tools & Soft Skills */}
          <div>
            <h3 className="text-2xl font-bold text-brand-light mb-8">Tools & Technologies</h3>
            <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-12">
              {tools.map((tool, index) => {
                const Icon = iconMap[tool.icon];
                return (
                  <div key={index} className="flex flex-col items-center justify-center glass-card p-4 hover:border-brand-teal/50 transition-colors group">
                    {Icon && <Icon size={28} className="text-brand-slate group-hover:text-brand-teal transition-colors mb-2" />}
                    <span className="text-xs text-brand-slate group-hover:text-brand-light transition-colors">{tool.name}</span>
                  </div>
                )
              })}
            </div>

            <h3 className="text-2xl font-bold text-brand-light mb-6">Soft Skills</h3>
            <div className="flex flex-wrap gap-3">
              {soft.map((skill, index) => (
                <span 
                  key={index}
                  className="px-4 py-2 bg-brand-lightest-navy text-brand-light rounded-full text-sm hover:bg-brand-teal hover:text-brand-navy transition-colors cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
