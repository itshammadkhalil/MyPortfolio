"use client";

import { useState } from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type ModalType = "privacy" | "terms" | null;

export default function Footer() {
  const [activeModal, setActiveModal] = useState<ModalType>(null);

  return (
    <footer className="bg-brand-light-navy py-8 mt-20 border-t border-brand-lightest-navy relative z-50">
      <div className="container mx-auto px-6 md:px-12 flex flex-col items-center">

        <p className="text-brand-slate text-sm text-center mb-4">
          &copy; 2026 Hammad Khalil. All rights reserved.
        </p>
        <div className="flex gap-4 text-xs text-brand-slate">
          <button 
            onClick={() => setActiveModal("privacy")}
            className="hover:text-brand-teal transition-colors underline underline-offset-4 decoration-brand-slate/30 hover:decoration-brand-teal"
          >
            Privacy Policy
          </button>
          <span className="text-brand-lightest-navy">|</span>
          <button 
            onClick={() => setActiveModal("terms")}
            className="hover:text-brand-teal transition-colors underline underline-offset-4 decoration-brand-slate/30 hover:decoration-brand-teal"
          >
            Terms of Service
          </button>
        </div>
      </div>

      {/* Modal Overlay */}
      <AnimatePresence>
        {activeModal && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-[#0A192F]/80 backdrop-blur-sm"
            onClick={() => setActiveModal(null)}
          >
            <motion.div 
              initial={{ scale: 0.95, opacity: 0, y: 10 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 10 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#0A192F] border border-brand-teal/20 rounded-xl shadow-2xl max-w-lg w-full max-h-[85vh] overflow-y-auto p-6 md:p-8"
            >
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-2xl font-bold text-brand-teal">
                  {activeModal === "privacy" ? "Privacy Policy" : "Terms of Service"}
                </h3>
                <button 
                  onClick={() => setActiveModal(null)}
                  className="text-brand-slate hover:text-brand-light p-1 transition-colors rounded-md hover:bg-brand-lightest-navy/50"
                >
                  <X size={24} />
                </button>
              </div>
              
              <div className="text-brand-slate space-y-4 text-sm md:text-base leading-relaxed">
                {activeModal === "privacy" && (
                  <>
                    <p className="flex gap-3 items-start"><span className="text-brand-teal mt-1 flex-shrink-0">▹</span> We collect only contact form data (name, email, message).</p>
                    <p className="flex gap-3 items-start"><span className="text-brand-teal mt-1 flex-shrink-0">▹</span> Data is not sold or shared with third parties.</p>
                    <p className="flex gap-3 items-start"><span className="text-brand-teal mt-1 flex-shrink-0">▹</span> Emails are stored securely via Formspree only.</p>
                    <p className="flex gap-3 items-start"><span className="text-brand-teal mt-1 flex-shrink-0">▹</span> You can request data deletion anytime by emailing Hello@HammadKhalil.me.</p>
                    <p className="flex gap-3 items-start"><span className="text-brand-teal mt-1 flex-shrink-0">▹</span> This website uses no tracking cookies.</p>
                  </>
                )}
                {activeModal === "terms" && (
                  <>
                    <p className="flex gap-3 items-start"><span className="text-brand-teal mt-1 flex-shrink-0">▹</span> All content on this site belongs to Hammad Khalil / NovaStack.</p>
                    <p className="flex gap-3 items-start"><span className="text-brand-teal mt-1 flex-shrink-0">▹</span> Projects shown are real client work or personal projects.</p>
                    <p className="flex gap-3 items-start"><span className="text-brand-teal mt-1 flex-shrink-0">▹</span> Unauthorized copying or reproduction of content is prohibited.</p>
                    <p className="flex gap-3 items-start"><span className="text-brand-teal mt-1 flex-shrink-0">▹</span> For collaborations, please contact me directly via the contact form.</p>
                  </>
                )}
              </div>
              
              <div className="mt-8 pt-6 border-t border-brand-teal/10 text-right">
                <button 
                  onClick={() => setActiveModal(null)}
                  className="px-6 py-2 rounded-lg bg-brand-lightest-navy text-brand-light hover:bg-brand-teal hover:text-brand-navy transition-colors text-sm font-medium"
                >
                  Understood
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </footer>
  );
}
