import { portfolioData } from "@/data/portfolioData";
import { Mail } from "lucide-react";
import { FaGithub as Github, FaLinkedin as Linkedin, FaInstagram as Instagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-brand-light-navy py-8 mt-20 border-t border-brand-lightest-navy">
      <div className="container mx-auto px-6 md:px-12 flex flex-col items-center">
        <div className="flex space-x-6 mb-6">
          <a href={portfolioData.hero.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-brand-slate hover:text-brand-teal transition-colors">
            <Linkedin size={24} />
          </a>
          <a href={portfolioData.hero.socials.github} target="_blank" rel="noopener noreferrer" className="text-brand-slate hover:text-brand-teal transition-colors">
            <Github size={24} />
          </a>
          <a href={`mailto:${portfolioData.hero.socials.email}`} className="text-brand-slate hover:text-brand-teal transition-colors">
            <Mail size={24} />
          </a>
          <a href={portfolioData.hero.socials.instagram} target="_blank" rel="noopener noreferrer" className="text-brand-slate hover:text-brand-teal transition-colors">
            <Instagram size={24} />
          </a>
        </div>
        <p className="text-brand-slate text-sm text-center">
          &copy; {new Date().getFullYear()} Hammad Khalil. All rights reserved.        </p>
      </div>
    </footer>
  );
}
