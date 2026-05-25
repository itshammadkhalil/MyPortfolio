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
    <button
      onClick={handleDownload}
      className="fixed top-6 right-6 z-50 flex items-center gap-2 bg-[#64FFDA] text-[#0A192F] font-semibold py-2 px-4 rounded-lg shadow-lg hover:bg-[#64FFDA]/90 hover:-translate-y-1 transition-all"
    >
      <Download size={18} />
      Download CV
    </button>
  );
}
