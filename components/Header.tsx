"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "App", href: "#app" },
  { label: "Vendors", href: "#vendors" },
  { label: "Admin", href: "#admin" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" }
];

export default function Header() {
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-20% 0% -70% 0%",
        threshold: 0
      }
    );

    navItems.forEach(({ href }) => {
      const id = href.slice(1);
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-border-light bg-background-white/90 shadow-[0_10px_34px_rgba(20,20,20,0.06)] backdrop-blur-xl">
      <div className="section-shell px-2 xs:px-4 sm:px-6 flex h-20 items-center justify-between gap-2 xs:gap-4 md:gap-8">
        <Link href="#home" className="flex items-center gap-1.5 xs:gap-2 sm:gap-3 text-secondary shrink-0">
          <Image
            src="/presto_logo.png"
            alt="Presto-Go Logo"
            width={38}
            height={28}
            className="object-contain transition duration-300 hover:scale-105 xs:w-[44px] xs:h-[34px] sm:w-[56px] sm:h-[44px]"
          />
          <span className="text-base xs:text-lg sm:text-xl font-black tracking-[0px]">Presto-Go</span>
        </Link>

        <nav className="hidden items-center gap-2 rounded-full border border-border-light bg-background-muted px-2 py-2 lg:flex">
          {navItems.map((item) => {
            const sectionId = item.href.slice(1);
            const isActive = activeSection === sectionId;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`group relative rounded-full px-4 py-2 text-sm font-bold text-secondary transition duration-300 hover:bg-background-white hover:text-primary hover:shadow-[0_10px_30px_rgba(20,20,20,0.06)] ${
                  isActive ? "bg-background-white text-primary shadow-[0_10px_30px_rgba(20,20,20,0.06)]" : ""
                }`}
              >
                {item.label}
                <span
                  className={`absolute bottom-1 left-1/2 h-0.5 -translate-x-1/2 rounded-full bg-primary transition-all duration-300 group-hover:w-5 ${
                    isActive ? "w-full" : "w-0"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="https://vendor.presto-go.com/signup"
            target="_blank"
            rel="noreferrer"
            className="primary-button hidden xs:inline-flex px-3 xs:px-4 sm:px-5 py-2 sm:py-3 text-[10px] xs:text-xs sm:text-sm font-black relative z-10 cursor-pointer pointer-events-auto"
          >
            Become a Vendor
          </a>
          
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border-light bg-background-muted text-secondary transition-all hover:bg-background-white lg:hidden"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <FiX className="text-xl" /> : <FiMenu className="text-xl" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 z-40 bg-background-white transition-all duration-500 lg:hidden ${
          isMobileMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        }`}
      >
        <div className="flex flex-col h-full pt-24 px-6 pb-10">
          <nav className="flex flex-col gap-2">
            {navItems.map((item) => {
              const sectionId = item.href.slice(1);
              const isActive = activeSection === sectionId;
              
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`flex items-center justify-between rounded-2xl px-6 py-4 text-xl font-black transition-all ${
                    isActive 
                      ? "bg-primary-light text-primary" 
                      : "text-secondary hover:bg-background-muted"
                  }`}
                >
                  {item.label}
                  {isActive && <div className="h-2 w-2 rounded-full bg-primary" />}
                </Link>
              );
            })}
          </nav>
          
          <div className="mt-auto pt-10 border-t border-border-light">
            <a
              href="https://vendor.presto-go.com/signup"
              target="_blank"
              rel="noreferrer"
              onClick={() => setIsMobileMenuOpen(false)}
              className="primary-button flex w-full items-center justify-center py-5 text-lg font-black"
            >
              Become a Vendor
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
