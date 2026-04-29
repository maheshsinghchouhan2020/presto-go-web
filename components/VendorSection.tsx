"use client";

import Image from "next/image";
import { useState } from "react";
import {
  FiArrowRight,
  FiBarChart2,
  FiBell,
  FiClock,
  FiTrendingUp,
  FiX,
  FiZoomIn,
  FiZoomOut,
  FiList,
  FiPercent,
  FiDollarSign,
  FiStar,
  FiSettings,
  FiShoppingCart
} from "react-icons/fi";
import ScrollReveal from "./ScrollReveal";
import TiltCard from "./TiltCard";

const vendorWins = [
  { icon: FiBell, label: "Live order alerts" },
  { icon: FiClock, label: "Faster table turns" },
  { icon: FiBarChart2, label: "Menu performance" },
  { icon: FiTrendingUp, label: "Growth insights" }
];

const vendorScreens = [
  {
    screenshot: "/vendor1.png",
    icon: FiBarChart2,
    title: "Vendor Dashboard",
    copy: "See your total earnings, orders, and real-time performance all in one place."
  },
  {
    screenshot: "/vendor2.png",
    icon: FiShoppingCart,
    title: "Manage Orders & Order Details",
    copy: "Accept, approve, and track incoming orders instantly with clear statuses. View complete order information, customer details, and payment history."
  },
  {
    screenshot: "/vendor3.png",
    icon: FiList,
    title: "Menu Management",
    copy: "Add, edit, and manage your menu items, categories, and stock status."
  },
  {
    screenshot: "/vendor4.png",
    icon: FiPercent,
    title: "Happy Hour Offers",
    copy: "Set up happy hour discounts, schedule days and times, and boost revenue."
  },
  {
    screenshot: "/vendor5.png",
    icon: FiDollarSign,
    title: "Payouts & Earnings",
    copy: "Track your daily, weekly, and monthly earnings, plus complete payout history."
  },
  {
    screenshot: "/vendor6.png",
    icon: FiStar,
    title: "Reviews Management",
    copy: "View and manage customer reviews to improve your venue's service and reputation."
  },
  {
    screenshot: "/vendor7.png",
    icon: FiSettings,
    title: "Bar Profile Settings",
    copy: "Update your bar information, hours, location, and all venue details easily."
  }
];

export default function VendorSection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [zoomLevel, setZoomLevel] = useState(1);

  const handleZoomIn = () => {
    setZoomLevel(prev => Math.min(prev + 0.25, 3));
  };

  const handleZoomOut = () => {
    setZoomLevel(prev => Math.max(prev - 0.25, 0.5));
  };

  const closeModal = () => {
    setSelectedImage(null);
    setZoomLevel(1);
  };

  return (
    <section
      id="vendors"
      className="relative overflow-hidden bg-secondary py-24 text-white lg:py-32"
    >
      <div className="absolute left-1/2 top-0 h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-primary-light blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-primary-light blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.06),rgba(255,255,255,0)_34%),radial-gradient(circle_at_18%_78%,rgba(245,107,85,0.16),transparent_28%)] pointer-events-none" />

      <div className="section-shell relative px-4 sm:px-6">
        <div className="section-shell relative grid items-center gap-10 lg:gap-14 lg:grid-cols-[0.9fr_1.1fr] mx-auto max-w-7xl mb-12 lg:mb-16">
          <div className="reveal">
            <p className="inline-flex items-center rounded-full border border-border-strong bg-white/5 px-4 py-2 text-[10px] sm:text-xs font-black uppercase text-primary backdrop-blur eyebrow mx-auto">
              Vendor platform
            </p>
            <h2 className="mt-5 text-3xl font-black leading-[1.1] tracking-[0px] sm:text-4xl md:text-5xl lg:text-6xl">
              Turn every table into a faster revenue channel.
            </h2>
            <p className="mt-6 max-w-xl text-base sm:text-lg leading-7 sm:leading-9 text-secondary-light">
              Presto-Go gives bars a premium operating layer for reservations,
              incoming orders, payment visibility, menu control, and guest demand.
            </p>

            <div className="mt-8 grid max-w-xl gap-3 sm:gap-4 grid-cols-2 sm:grid-cols-3">
              {[
                ["389", "orders tonight"],
                ["05m", "avg wait"],
                ["4.9", "guest rating"]
              ].map(([value, label], idx) => (
                <div
                  key={label}
                  className={`rounded-card border border-border-strong bg-white/5 p-3 sm:p-4 backdrop-blur ${idx === 2 ? 'col-span-2 sm:col-span-1' : ''}`}
                >
                  <p className="text-2xl sm:text-3xl font-black text-white">{value}</p>
                  <p className="mt-1 text-[10px] sm:text-sm font-semibold text-secondary-light">
                    {label}
                  </p>
                </div>
              ))}
            </div>

            <a
              href="https://vendor.presto-go.com/signup"
              target="_blank"
              rel="noreferrer"
              className="primary-button mt-10 inline-flex animate-[vendor-pulse_2.2s_ease-in-out_infinite] items-center justify-center gap-3 px-7 sm:px-9 py-4 sm:py-5 text-base sm:text-lg font-black relative z-10 cursor-pointer pointer-events-auto"
            >
              🚀 Become a Vendor
              <FiArrowRight aria-hidden />
            </a>
          </div>

          <div className="reveal reveal-delay-1 rounded-card border border-border-strong bg-white/5 p-2 sm:p-3 lg:p-5 shadow-[0_20px_60px_rgba(0,0,0,0.25)] sm:shadow-[0_30px_90px_rgba(20,20,20,0.32)] backdrop-blur">
            <div className="rounded-card bg-background-white p-3 sm:p-5 lg:p-6 text-secondary">
              <div className="flex items-center justify-between gap-3 sm:gap-4 border-b border-border-light pb-4 sm:pb-6">
                <div>
                  <p className="text-[10px] sm:text-xs font-black uppercase text-secondary-light">
                    Vendor dashboard
                  </p>
                  <h3 className="mt-1 text-xl sm:text-2xl font-black">Service pulse</h3>
                </div>
                <span className="rounded-full bg-primary-light px-2 sm:px-3 py-1 text-[10px] sm:text-xs font-black text-primary">
                  Peak hour
                </span>
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {vendorWins.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.label}
                      className="rounded-card border border-border-light bg-background-muted p-5 transition duration-300 hover:-translate-y-1 hover:border-border-strong hover:bg-background-white"
                    >
                      <Icon className="text-2xl text-primary" aria-hidden />
                      <p className="mt-4 font-black">{item.label}</p>
                    </div>
                  );
                })}
              </div>

              <div className="mt-5 rounded-card border border-border-light bg-secondary p-5 text-white shadow-[0_22px_60px_rgba(20,20,20,0.18)]">
                <div className="flex items-end justify-between gap-4">
                  <div>
                    <p className="text-sm font-bold text-secondary-light">
                      Tonight orders
                    </p>
                    <p className="mt-1 text-4xl font-black">389</p>
                  </div>
                  <p className="rounded-full bg-status-success-light px-3 py-1 text-sm font-black text-status-success">
                    +32%
                  </p>
                </div>
                <div className="mt-6 grid h-24 xs:h-32 grid-cols-8 items-end gap-1 xs:gap-2">
                  {[45, 58, 38, 70, 62, 85, 74, 96].map((height, idx) => (
                    <span
                      key={idx}
                      className="rounded-t-sm xs:rounded-t-button bg-primary-gradient shadow-[0_0_24px_rgba(245,107,85,0.22)] transition duration-300 hover:scale-y-105"
                      style={{ height: `${height}%` }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-24">
          {/* Vendor Dashboard */}
          <ScrollReveal>
            <div className="flex flex-col gap-8 items-center mb-16 lg:flex-row relative">
              {vendorScreens[0].screenshot && (
                <div 
                  className="relative w-full max-w-[500px] flex-shrink-0 cursor-pointer"
                  onClick={() => {
                    const img = vendorScreens[0].screenshot;
                    if (img) setSelectedImage(img);
                  }}
                >
                  <Image
                    src={vendorScreens[0].screenshot}
                    alt={vendorScreens[0].title}
                    width={500}
                    height={350}
                    className="w-full rounded-2xl hover:opacity-90 transition-opacity object-contain"
                    priority
                  />
                </div>
              )}
              <div className="flex-1">
                <h3 className="text-2xl lg:text-3xl font-black text-white">
                  {vendorScreens[0].title}
                </h3>
                <p className="mt-3 text-lg leading-7 text-secondary-light">
                  {vendorScreens[0].copy}
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Other features grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {vendorScreens.slice(1).map((screen, index) => (
              <ScrollReveal key={screen.title} delay={index * 80}>
                <TiltCard className="h-full">
                  <div className="group premium-card border border-primary/30 bg-white p-6 md:p-7 h-full relative overflow-hidden cursor-pointer">
                    {/* Sliding Text Content */}
                    <div className="transition-all duration-500 ease-in-out group-hover:-translate-x-full group-hover:opacity-0">
                      <div className="w-16 h-16 rounded-2xl bg-primary-light flex items-center justify-center mb-5">
                        <screen.icon className="text-3xl text-primary" />
                      </div>
                      <h3 className="text-xl font-black text-secondary mb-2">
                        {screen.title}
                      </h3>
                      <p className="text-base leading-7 text-secondary-light">
                        {screen.copy}
                      </p>
                    </div>

                    {/* Sliding Image Content */}
                    {screen.screenshot && (
                      <div
                        className="absolute inset-0 translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out z-10"
                        onClick={(e) => {
                          e.stopPropagation();
                          if (screen.screenshot) setSelectedImage(screen.screenshot);
                        }}
                      >
                        <div className="relative w-full h-full p-2">
                          <Image
                            src={screen.screenshot}
                            alt={screen.title}
                            fill
                            className="object-cover rounded-[22px] sm:rounded-[26px] shadow-2xl"
                          />
                          {/* Hover Overlay with Icon */}
                          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-[22px] sm:rounded-[26px]">
                            <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
                              <FiZoomIn className="text-2xl" />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </TiltCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>

      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95"
          onClick={closeModal}
        >
          <div className="absolute top-6 right-6 flex items-center gap-3">
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleZoomOut();
              }}
              className="text-white text-xl bg-black/50 rounded-full p-3 hover:bg-black/70 transition-colors"
              disabled={zoomLevel <= 0.5}
            >
              <FiZoomOut />
            </button>
            <span className="text-white font-bold min-w-[60px] text-center">
              {Math.round(zoomLevel * 100)}%
            </span>
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleZoomIn();
              }}
              className="text-white text-xl bg-black/50 rounded-full p-3 hover:bg-black/70 transition-colors"
              disabled={zoomLevel >= 3}
            >
              <FiZoomIn />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                closeModal();
              }}
              className="text-white text-xl bg-black/50 rounded-full p-3 hover:bg-black/70 transition-colors"
            >
              <FiX />
            </button>
          </div>

          <div className="relative max-w-[90vw] max-h-[85vh] overflow-auto">
            <div 
              className="flex items-center justify-center"
              style={{ transform: `scale(${zoomLevel})`, transition: 'transform 0.2s ease' }}
            >
              <Image
                src={selectedImage}
                alt="Vendor Dashboard"
                width={1200}
                height={800}
                className="object-contain rounded-2xl"
                priority
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
