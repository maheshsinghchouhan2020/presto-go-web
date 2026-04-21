"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { FaApple, FaGooglePlay } from "react-icons/fa";
import { FiX } from "react-icons/fi";

interface AppDownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AppDownloadModal({
  isOpen,
  onClose,
}: AppDownloadModalProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow;
    if (isOpen) {
      document.body.style.overflow = "hidden";
      setIsVisible(true);
    } else {
      document.body.style.overflow = originalStyle;
      const timer = setTimeout(() => setIsVisible(false), 300);
      return () => clearTimeout(timer);
    }
    return () => {
      document.body.style.overflow = originalStyle;
    };
  }, [isOpen]);

  if (!isOpen && !isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className={`absolute inset-0 backdrop-blur-sm transition-opacity duration-300 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
        style={{ backgroundColor: "rgba(0,0,0,0.8)" }}
        onClick={onClose}
      />
      <div className="relative z-10 w-full max-w-[550px] mx-4">
        <div
          className={`relative overflow-hidden rounded-[32px] border-2 border-primary/30 transition-all duration-300 ${
            isVisible
              ? "opacity-100 scale-100 translate-y-0"
              : "opacity-0 scale-95 translate-y-4"
          }`}
          style={{
            background:
              "radial-gradient(circle at 10% 20%, rgba(245,107,85,0.25), transparent 40%), radial-gradient(circle at 90% 80%, rgba(245,107,85,0.18), transparent 45%), linear-gradient(135deg, #141414 0%, #1a1a1a 100%)",
          }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(245,107,85,0.15),transparent_50%)] pointer-events-none" />

          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors z-20"
          >
            <FiX className="text-xl" />
          </button>

          <div className="relative p-6 md:p-8">
            <div className="text-center">
              <div className="mx-auto mb-6 w-24 h-24 rounded-2xl bg-gradient-to-br from-primary to-primary-dark p-1">
                <div className="w-full h-full rounded-2xl bg-secondary flex items-center justify-center">
                  <Image
                    src="/presto_logo.png"
                    alt="Presto-Go Logo"
                    width={52}
                    height={52}
                    className="object-contain"
                  />
                </div>
              </div>

              <h2 className="text-2xl md:text-3xl font-black text-white leading-tight">
                Download Presto-Go App
                <br />
                <span className="text-primary">for faster ordering</span>
              </h2>

              <p className="mt-3 text-base text-secondary-light max-w-sm mx-auto">
                Discover nearby bars, skip the line, and order drinks instantly.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                {/* iOS Button */}
                <button className="h-14 sm:h-16 flex items-center gap-3 bg-white text-secondary px-8 sm:px-10 rounded-full font-black hover:scale-105 transition-transform cursor-pointer min-w-[220px]">
                  <FaApple className="text-2xl" />
                  <div className="flex flex-col leading-tight">
                    <span className="text-[10px] font-semibold uppercase tracking-wide opacity-80">
                      Download in
                    </span>
                    <span className="text-lg">iOS</span>
                  </div>
                </button>

                {/* Android Button */}
                <button className="h-14 sm:h-16 flex items-center gap-3 bg-gradient-to-r from-primary to-primary-dark text-white px-8 sm:px-10 rounded-full font-black hover:scale-105 transition-transform cursor-pointer min-w-[220px] shadow-[0_0_25px_rgba(245,107,85,0.40)]">
                  <FaGooglePlay className="text-xl" />
                  <div className="flex flex-col leading-tight">
                    <span className="text-[10px] font-semibold uppercase tracking-wide opacity-80">
                      Get it on
                    </span>
                    <span className="text-lg">Android</span>
                  </div>
                </button>
              </div>
            </div>
          </div>

          <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-primary/20 blur-3xl pointer-events-none" />
          <div className="absolute -top-14 -right-14 w-48 h-48 rounded-full bg-primary/15 blur-3xl pointer-events-none" />
        </div>
      </div>
    </div>
  );
}
