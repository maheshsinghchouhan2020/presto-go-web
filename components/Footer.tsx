"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiArrowUpRight, FiInstagram, FiMail } from "react-icons/fi";
import AppDownloadModal from "./AppDownloadModal";

const quickLinks = [
  { label: "Customer app", href: "#app" },
  { label: "Vendor signup", href: "https://vendor.presto-go.com/signup" },
  { label: "Admin", href: "#admin" },
  { label: "Contact", href: "#contact" },
];

const userLegalLinks = [
  { label: "Privacy Policy", href: "/privacy-user" },
  { label: "Terms & Conditions", href: "/terms-user" },
];

const vendorLegalLinks = [
  { label: "Privacy Policy", href: "/privacy-vendor" },
  { label: "Terms & Conditions", href: "/terms-vendor" },
];

export default function Footer() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <footer className="bg-secondary text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_24%_22%,rgba(245,107,85,0.14),transparent_30%),radial-gradient(circle_at_78%_28%,rgba(245,107,85,0.08),transparent_24%)] pointer-events-none" />
      <div className="section-shell relative py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Link href="#home" className="flex items-center gap-3">
              <Image
                src="/presto_logo.png"
                alt="Presto-Go Logo"
                width={48}
                height={48}
                className="object-contain transition duration-300 hover:scale-105"
              />
              <span className="text-2xl font-black">Presto-Go</span>
            </Link>
            <p className="mt-5 max-w-md text-lg leading-8 text-secondary-light">
              Premium ordering, booking, and marketplace software for modern bar
              experiences. Connecting guests and venues seamlessly.
            </p>

            <div className="mt-6 flex items-center gap-4">
              <a
                href="https://instagram.com/Prestogo_cheers"
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white/80 transition-all duration-300 hover:bg-primary-light hover:text-primary hover:scale-110"
              >
                <FiInstagram className="text-xl" />
              </a>
              <Link
                href="#contact"
                className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white/80 transition-all duration-300 hover:bg-primary-light hover:text-primary hover:scale-110"
              >
                <FiMail className="text-xl" />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-black uppercase tracking-widest text-secondary-light mb-5">
              Quick Links
            </h4>
            <div className="flex flex-col gap-3">
              {quickLinks.map((link) => {
                if (link.label === "Customer app") {
                  return (
                    <button
                      key={link.label}
                      onClick={() => setIsModalOpen(true)}
                      className="inline-flex items-center gap-2 text-base font-semibold text-white transition duration-300 hover:text-primary bg-transparent border-none p-0 cursor-pointer"
                    >
                      {link.label}
                      <FiArrowUpRight className="text-sm" />
                    </button>
                  );
                }
                if (link.href.startsWith("http")) {
                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-base font-semibold text-white transition duration-300 hover:text-primary"
                    >
                      {link.label}
                      <FiArrowUpRight className="text-sm" />
                    </a>
                  );
                } else {
                  return (
                    <Link
                      key={link.label}
                      href={link.href}
                      className="inline-flex items-center gap-2 text-base font-semibold text-white transition duration-300 hover:text-primary"
                    >
                      {link.label}
                    </Link>
                  );
                }
              })}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 md:grid-cols-1">
            <div>
              <h4 className="text-sm font-black uppercase tracking-widest text-secondary-light mb-5">
                For Users
              </h4>
              <div className="flex flex-col gap-3">
                {userLegalLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="text-base font-semibold text-secondary-light transition duration-300 hover:text-white"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-sm font-black uppercase tracking-widest text-secondary-light mb-5">
                For Vendors
              </h4>
              <div className="flex flex-col gap-3">
                {vendorLegalLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="text-base font-semibold text-secondary-light transition duration-300 hover:text-white"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 border-t border-border-strong pt-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <p className="text-secondary-light text-sm">
            © 2025 Presto-Go. All rights reserved.
          </p>
          <p className="text-secondary-light text-sm">
            Built for bars everywhere • presto-go.com
          </p>
        </div>
      </div>

      <AppDownloadModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </footer>
  );
}
