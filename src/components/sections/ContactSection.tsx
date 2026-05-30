"use client";

import { useState } from "react";
import { portfolioData } from "@/data/portfolioData";
import { MapPin, Mail, Send, Loader2, FileText } from "lucide-react";
import { FaWhatsapp as Whatsapp, FaLinkedin as Linkedin, FaGithub as Github, FaInstagram as Instagram } from "react-icons/fa";

export default function ContactSection() {
  const { contact, hero } = portfolioData;
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus("submitting");

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("https://formspree.io/f/mykvwjoa", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setFormStatus("success");
      } else {
        setFormStatus("error");
      }
    } catch (error) {
      console.error(error);
      setFormStatus("error");
    }
  };

  const handleReset = () => setFormStatus("idle");

  return (
    <section id="contact" className="py-32 px-6 max-w-6xl mx-auto">
      <div>
        <div className="flex flex-col items-center mb-16 text-center">
          <p className="font-mono text-brand-teal mb-4 text-lg">What's Next?</p>
          <h2 className="text-4xl md:text-5xl font-bold text-brand-light mb-6">Get In Touch</h2>
          <p className="text-brand-slate max-w-xl text-lg">
            Whether you have a question, a project in mind, or just want to say Hi, my inbox is always open. Let's build something amazing together!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
          {/* Contact Info */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-brand-light mb-6">Contact Information</h3>

            <div className="flex gap-4 items-center group cursor-default">
              <div className="w-12 h-12 bg-brand-light-navy border border-brand-lightest-navy rounded-full flex items-center justify-center group-hover:border-brand-teal transition-colors">
                <MapPin className="text-brand-teal" size={20} />
              </div>
              <div>
                <p className="text-sm text-brand-slate">Location</p>
                <p className="text-brand-light font-medium">{contact.location}</p>
              </div>
            </div>

            <div className="flex gap-4 items-center group">
              <a href={`mailto:${hero.socials.email}`} className="w-12 h-12 bg-brand-light-navy border border-brand-lightest-navy rounded-full flex items-center justify-center group-hover:border-brand-teal transition-colors">
                <Mail className="text-brand-teal" size={20} />
              </a>
              <div>
                <p className="text-sm text-brand-slate">Email</p>
                <a href={`mailto:${hero.socials.email}`} className="text-brand-light font-medium hover:text-brand-teal transition-colors">{hero.socials.email}</a>
              </div>
            </div>

            <div className="flex gap-4 items-center group">
              <a href={contact.whatsappLink} target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-brand-light-navy border border-brand-lightest-navy rounded-full flex items-center justify-center group-hover:border-brand-teal transition-colors">
                <Whatsapp className="text-brand-teal" size={20} />
              </a>
              <div>
                <p className="text-sm text-brand-slate">WhatsApp</p>
                <a href={contact.whatsappLink} target="_blank" rel="noopener noreferrer" className="text-brand-light font-medium hover:text-brand-teal transition-colors">{contact.whatsapp}</a>
              </div>
            </div>

            {/* Divider */}
            <div className="h-[1px] w-full bg-brand-teal opacity-10"></div>

            {/* Social Icons */}
            <div className="flex items-center gap-4">
              <a href="https://www.linkedin.com/in/muhammad-hammad-khalil/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-brand-teal flex items-center justify-center text-brand-teal hover:bg-brand-teal hover:text-brand-navy transition-all">
                <Linkedin size={18} />
              </a>
              <a href="https://github.com/itshammadkhalil" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-brand-teal flex items-center justify-center text-brand-teal hover:bg-brand-teal hover:text-brand-navy transition-all">
                <Github size={18} />
              </a>
              <a href="https://www.instagram.com/hammadkhalil.me" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-brand-teal flex items-center justify-center text-brand-teal hover:bg-brand-teal hover:text-brand-navy transition-all">
                <Instagram size={18} />
              </a>
              <div className="relative group">
                <a href="/resume" target="_blank" rel="noopener noreferrer" aria-label="View Resume" className="w-10 h-10 rounded-full border border-brand-teal flex items-center justify-center text-brand-teal hover:bg-brand-teal hover:text-brand-navy transition-all">
                  <FileText size={18} />
                </a>
                <span className="absolute -top-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-brand-navy text-brand-teal text-xs font-medium py-1 px-2 rounded whitespace-nowrap shadow-xl border border-brand-teal/20 pointer-events-none">
                  View Resume
                </span>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="glass-card relative overflow-hidden flex items-start justify-center min-h-[500px]">
            <>
              {formStatus === "success" ? (
                <div className="flex flex-col items-center justify-center text-center h-full w-full p-8 py-16 absolute inset-0">
                  <svg
                    width="80"
                    height="80"
                    viewBox="0 0 50 50"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="mb-6"
                  >
                    <circle
                      cx="25"
                      cy="25"
                      r="22"
                      stroke="#14b8a6"
                      strokeWidth="2"
                    />
                    <path
                      d="M16 26l6 6 12-12"
                      stroke="#14b8a6"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <h3 className="text-2xl font-bold text-brand-light mb-2">Message Sent Successfully! 🎉</h3>
                  <p className="text-brand-slate mb-8 max-w-xs">
                    Thank you for reaching out, I'll get back to you within 24 hours.
                  </p>
                  <button
                    onClick={handleReset}
                    className="bg-brand-light-navy border border-brand-lightest-navy text-brand-light font-bold py-3 px-6 rounded-lg hover:border-brand-teal hover:text-brand-teal transition-all"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <div className="w-full p-8">
                  <form onSubmit={handleSubmit} className="space-y-6 w-full">
                    <fieldset disabled={formStatus === "submitting"} className="space-y-6 w-full">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-brand-slate mb-2">Name</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          className="w-full bg-brand-navy border border-brand-lightest-navy rounded-lg px-4 py-3 text-brand-light focus:outline-none focus:border-brand-teal transition-colors disabled:opacity-50"
                          placeholder="Hammad Khalil"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-brand-slate mb-2">Email</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          className="w-full bg-brand-navy border border-brand-lightest-navy rounded-lg px-4 py-3 text-brand-light focus:outline-none focus:border-brand-teal transition-colors disabled:opacity-50"
                          placeholder="Habibi@example.com"
                        />
                      </div>
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-brand-slate mb-2">Message</label>
                        <textarea
                          id="message"
                          name="message"
                          required
                          rows={4}
                          className="w-full bg-brand-navy border border-brand-lightest-navy rounded-lg px-4 py-3 text-brand-light focus:outline-none focus:border-brand-teal transition-colors resize-none disabled:opacity-50"
                          placeholder="Hello Hammad, I'd like to discuss a project..."
                        />
                      </div>

                      {formStatus === "error" && (
                        <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4 flex flex-col items-center text-center gap-3">
                          <p className="text-red-400 text-sm">Something went wrong. Please try WhatsApp instead.</p>
                          <a
                            href={contact.whatsappLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 bg-green-500/20 text-green-400 px-4 py-2 rounded-full text-sm font-medium hover:bg-green-500/30 transition-colors"
                          >
                            <Whatsapp size={16} /> Open WhatsApp
                          </a>
                        </div>
                      )}

                      <div className="flex flex-col sm:flex-row gap-4">
                        <button
                          type="submit"
                          className="flex-1 bg-brand-teal/10 border border-brand-teal text-brand-teal font-bold py-4 rounded-lg flex justify-center items-center gap-2 hover:bg-brand-teal hover:text-brand-navy transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          {formStatus === "submitting" ? (
                            <>
                              Sending... <Loader2 size={18} className="animate-spin" />
                            </>
                          ) : (
                            <>
                              Send Message <Send size={18} />
                            </>
                          )}
                        </button>
                        <a
                          href={contact.whatsappLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 bg-brand-light-navy border border-brand-lightest-navy text-brand-light font-bold py-4 rounded-lg flex justify-center items-center gap-2 hover:border-brand-teal hover:text-brand-teal transition-all"
                        >
                          Chat on WhatsApp <Whatsapp size={18} />
                        </a>
                      </div>
                    </fieldset>
                  </form>
                </div>
              )}
            </>
          </div>
        </div>
      </div>
    </section>
  );
}
