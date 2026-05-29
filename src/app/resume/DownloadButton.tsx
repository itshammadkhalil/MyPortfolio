"use client";

import { Download } from "lucide-react";

export default function DownloadButton() {
  const handleDownload = () => {
    const element = document.createElement('a');
    element.href = window.location.href;
    const htmlContent = document.documentElement.outerHTML;
    const blob = new Blob([htmlContent], {type: 'text/html'});
    element.href = URL.createObjectURL(blob);
    element.download = 'Hammad_Khalil_CV.html';
    element.click();
  };

  return (
    <div className="fixed top-6 right-6 z-50 group flex flex-col items-end">
      <button
        onClick={handleDownload}
        className="flex items-center justify-center w-[44px] h-[44px] bg-[#64FFDA] text-[#0A192F] rounded-full shadow-[0_4px_14px_rgba(100,255,218,0.25)] hover:scale-110 transition-all duration-300"
        aria-label="Download CV"
      >
        <Download size={20} strokeWidth={2.5} />
      </button>
      {/* Tooltip */}
      <span className="absolute top-[52px] right-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[#0A192F] text-[#64FFDA] text-xs font-medium py-1.5 px-3 rounded whitespace-nowrap shadow-xl border border-[#64FFDA]/20 pointer-events-none">
        Download CV
      </span>
    </div>
  );
}
