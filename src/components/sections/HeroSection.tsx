"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { portfolioData } from "@/data/portfolioData";
import { Mail, ArrowDown } from "lucide-react";
import { FaGithub as Github, FaLinkedin as Linkedin, FaInstagram as Instagram, FaWhatsapp as Whatsapp } from "react-icons/fa";

export default function HeroSection() {
  const { name, tagline, roles, socials } = portfolioData.hero;

  const [text] = useTypewriter({
    words: roles,
    loop: true,
    typeSpeed: 120,
    deleteSpeed: 80,
    delaySpeed: 2000
  });

  const [activeRoleIndex, setActiveRoleIndex] = useState(0);

  useEffect(() => {
    const index = roles.findIndex((role) => role.startsWith(text) && text.length > 0);
    if (index !== -1) {
      setActiveRoleIndex(index);
    }
  }, [text, roles]);

  const currentRole = roles[activeRoleIndex];
  let prefix = "I am a ";
  if (currentRole === "Founder & CEO of NovaStack") {
    prefix = "I am the ";
  } else if (/^[AEIOU]/i.test(currentRole)) {
    prefix = "I am an ";
  }

  return (
    <section id="hero" className="relative h-screen flex flex-col justify-center items-center text-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }} // wait for loading screen
        className="max-w-4xl mx-auto"
      >
        <p className="text-brand-teal font-mono mb-4 text-sm md:text-base">Hi, my name is</p>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-brand-light mb-4 tracking-tight">
          {name}.
        </h1>
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-brand-slate mb-6">
          {prefix}<span className="text-brand-teal">
            {text}
            <Cursor cursorStyle="_" />
          </span>
        </h2>
        <p className="text-brand-slate text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          {tagline}
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-12">
          <a
            href="#contact"
            className="px-8 py-4 bg-brand-teal text-brand-navy font-bold rounded-lg hover:bg-opacity-80 transition-all hover:-translate-y-1 w-full sm:w-auto"
          >
            Let's Build Together
          </a>
          <a
            href="#projects"
            className="px-8 py-4 border-2 border-brand-teal text-brand-teal font-bold rounded-lg hover:bg-brand-teal/10 transition-all hover:-translate-y-1 w-full sm:w-auto"
          >
            View My Work
          </a>
        </div>

        <div className="flex justify-center space-x-6">
          <a href={socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-brand-slate hover:text-brand-teal transition-all hover:-translate-y-1">
            <Linkedin size={28} />
          </a>
          <a href={socials.github} target="_blank" rel="noopener noreferrer" className="text-brand-slate hover:text-brand-teal transition-all hover:-translate-y-1">
            <Github size={28} />
          </a>
          <a href={`mailto:${socials.email}`} className="text-brand-slate hover:text-brand-teal transition-all hover:-translate-y-1">
            <Mail size={28} />
          </a>
          <a href={socials.whatsapp} target="_blank" rel="noopener noreferrer" className="text-brand-slate hover:text-brand-teal transition-all hover:-translate-y-1">
            <Whatsapp size={28} />
          </a>
          <a href={socials.instagram} target="_blank" rel="noopener noreferrer" className="text-brand-slate hover:text-brand-teal transition-all hover:-translate-y-1">
            <Instagram size={28} />
          </a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <a href="#about" className="text-brand-teal">
          <ArrowDown size={32} />
        </a>
      </motion.div>
    </section>
  );
}
