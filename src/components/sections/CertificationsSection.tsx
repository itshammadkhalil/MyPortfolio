"use client";

import { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { portfolioData } from "@/data/portfolioData";
import { Award, ExternalLink, ChevronDown } from "lucide-react";

const CATEGORIES = ["All", "AI & Automation", "Web Development", "Python & Data"];

export default function CertificationsSection() {
  const { certifications } = portfolioData;
  const [activeTab, setActiveTab] = useState("All");
  const [initialCount, setInitialCount] = useState(6);
  const [visibleCount, setVisibleCount] = useState(6);

  useEffect(() => {
    const count = window.innerWidth >= 768 ? 6 : 3;
    setInitialCount(count);
    setVisibleCount(count);
  }, []);

  // Filter certifications by category
  const filteredCertifications = useMemo(() => {
    if (activeTab === "All") return certifications;
    return certifications.filter((cert: any) => cert.category === activeTab);
  }, [activeTab, certifications]);

  // Handle Tab Change
  const handleTabChange = (category: string) => {
    setActiveTab(category);
    setVisibleCount(initialCount); // Reset visible count on tab change
  };

  // Handle Load More
  const handleLoadMore = () => {
    setVisibleCount(prev => prev + initialCount);
  };

  // Calculate if there are more to show
  const hasMore = visibleCount < filteredCertifications.length;

  return (
    <section id="certifications" className="py-32 px-6 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "0px" }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex items-center gap-4 mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-light flex-shrink-0">
            Wall of Achievement
          </h2>
          <div className="h-[1px] w-full bg-brand-lightest-navy"></div>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-3 mb-10">
          {CATEGORIES.map(category => (
            <button
              key={category}
              onClick={() => handleTabChange(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeTab === category
                  ? "bg-brand-teal text-brand-navy"
                  : "bg-brand-light-navy text-brand-slate hover:text-brand-teal border border-brand-lightest-navy"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCertifications.slice(0, visibleCount).map((cert, index) => (
            <div
              key={cert.credentialId}
              className="glass-card p-6 group hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden flex flex-col h-full"
            >
                {/* Decorative glow */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-teal/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:bg-brand-teal/20 transition-colors"></div>

                <div className="flex justify-between items-start mb-6 relative z-10">
                  <div className="w-12 h-12 bg-brand-navy rounded-full flex items-center justify-center border border-brand-lightest-navy">
                    <Award className="text-brand-teal" size={24} />
                  </div>
                  <span className="bg-brand-teal/10 text-brand-teal px-3 py-1 rounded-full text-xs font-mono font-bold">
                    {cert.platform}
                  </span>
                </div>

                <div className="flex-1 relative z-10">
                  <h3 className="text-lg font-bold text-brand-light mb-2 group-hover:text-brand-teal transition-colors line-clamp-2">
                    {cert.name}
                  </h3>
                  <div className="text-brand-slate text-sm space-y-1 mb-6">
                    {cert.issuer && <p>Issuer: <span className="text-brand-light">{cert.issuer}</span></p>}
                    <p>Date: {cert.date}</p>
                    {cert.badge && <p>Badge: <span className="text-brand-light">{cert.badge}</span></p>}
                    {cert.grade && <p>Grade: <span className="text-brand-teal font-mono">{cert.grade}</span></p>}
                    <p className="font-mono text-xs opacity-70 pt-2 break-all">ID: {cert.credentialId}</p>
                  </div>
                </div>

                <a
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto relative z-10 flex items-center justify-center gap-2 w-full py-3 bg-brand-navy border border-brand-lightest-navy rounded-lg text-sm text-brand-light group-hover:border-brand-teal group-hover:text-brand-teal transition-colors"
                >
                  {cert.badge ? "Verify Badge" : "Verify Certificate"} <ExternalLink size={16} />
                </a>
              </div>
            ))}
        </div>

        {/* Load More Button */}
        {hasMore && (
          <div className="mt-12 flex justify-center">
            <button
              onClick={handleLoadMore}
              className="group flex items-center gap-2 px-6 py-3 rounded-full border border-brand-teal text-brand-teal font-medium hover:bg-brand-teal/10 transition-colors"
            >
              Load More
              <ChevronDown size={18} className="group-hover:translate-y-1 transition-transform" />
            </button>
          </div>
        )}
      </motion.div>
    </section>
  );
}
