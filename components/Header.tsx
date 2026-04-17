"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

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
      <div className="section-shell flex h-20 items-center justify-between gap-8">
        <Link href="#home" className="flex items-center gap-3 text-secondary">
          <Image
            src="/presto_logo.png"
            alt="Presto-Go Logo"
            width={56}
            height={44}
            className="object-contain transition duration-300 hover:scale-105"
          />
          <span className="text-xl font-black tracking-[0px]">Presto-Go</span>
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

        <a
          href="https://vendor.presto-go.com/signup"
          target="_blank"
          rel="noreferrer"
          className="primary-button hidden px-5 py-3 text-sm font-black md:inline-flex relative z-10 cursor-pointer pointer-events-auto"
        >
          Become a Vendor
        </a>
      </div>
    </header>
  );
}
