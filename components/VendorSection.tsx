"use client";

import Image from "next/image";
import { useState } from "react";
import {
  FiArrowRight,
  FiBarChart2,
  FiBell,
  FiClock,
  FiTrendingUp,
  FiX
} from "react-icons/fi";

const vendorWins = [
  { icon: FiBell, label: "Live order alerts" },
  { icon: FiClock, label: "Faster table turns" },
  { icon: FiBarChart2, label: "Menu performance" },
  { icon: FiTrendingUp, label: "Growth insights" }
];

const vendorScreens = [
  {
    image: "/vendor1.png",
    title: "Vendor Dashboard",
    copy: "See your total earnings, orders, and real-time performance all in one place."
  },
  {
    image: "/vendor2.png",
    title: "Manage Orders",
    copy: "Accept, approve, and track incoming orders instantly with clear statuses."
  },
  {
    image: "/vendor3.png",
    title: "Order Details",
    copy: "View complete order information, customer details, and payment history."
  },
  {
    image: "/vendor4.png",
    title: "Menu Management",
    copy: "Add, edit, and manage your menu items, categories, and stock status."
  },
  {
    image: "/vendor5.png",
    title: "Happy Hour Offers",
    copy: "Set up happy hour discounts, schedule days and times, and boost revenue."
  },
  {
    image: "/vendor6.png",
    title: "Payouts & Earnings",
    copy: "Track your daily, weekly, and monthly earnings, plus complete payout history."
  },
  {
    image: "/vendor7.png",
    title: "Reviews Management",
    copy: "View and manage customer reviews to improve your venue's service and reputation."
  },
  {
    image: "/vendor8.png",
    title: "Bar Profile Settings",
    copy: "Update your bar information, hours, location, and all venue details easily."
  }
];

export default function VendorSection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section
      id="vendors"
      className="relative overflow-hidden bg-secondary py-24 text-white lg:py-32"
    >
      <div className="absolute left-1/2 top-0 h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-primary-light blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-primary-light blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.06),rgba(255,255,255,0)_34%),radial-gradient(circle_at_18%_78%,rgba(245,107,85,0.16),transparent_28%)] pointer-events-none" />

      <div className="section-shell relative">
        <div className="section-shell relative grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] mx-auto max-w-7xl mb-16">
          <div className="reveal">
            <p className="inline-flex items-center rounded-full border border-border-strong bg-white/5 px-4 py-2 text-xs font-black uppercase text-primary backdrop-blur">
              Vendor platform
            </p>
            <h2 className="mt-5 text-4xl font-black leading-[0.98] tracking-[0px] md:text-6xl">
              Turn every table into a faster revenue channel.
            </h2>
            <p className="mt-7 max-w-xl text-lg leading-9 text-secondary-light">
              Presto-Go gives bars a premium operating layer for reservations,
              incoming orders, payment visibility, menu control, and guest demand.
            </p>

            <div className="mt-8 grid max-w-xl gap-4 sm:grid-cols-3">
              {[
                ["248", "orders tonight"],
                ["06m", "avg wait"],
                ["4.9", "guest rating"]
              ].map(([value, label]) => (
                <div
                  key={label}
                  className="rounded-card border border-border-strong bg-white/5 p-4 backdrop-blur"
                >
                  <p className="text-3xl font-black text-white">{value}</p>
                  <p className="mt-1 text-sm font-semibold text-secondary-light">
                    {label}
                  </p>
                </div>
              ))}
            </div>

            <a
              href="https://vendor.presto-go.com/signup"
              target="_blank"
              rel="noreferrer"
              className="primary-button mt-10 inline-flex animate-[vendor-pulse_2.2s_ease-in-out_infinite] items-center justify-center gap-3 px-9 py-5 text-lg font-black relative z-10 cursor-pointer pointer-events-auto"
            >
              🚀 Become a Vendor
              <FiArrowRight aria-hidden />
            </a>
          </div>

          <div className="reveal reveal-delay-1 rounded-card border border-border-strong bg-white/5 p-3 shadow-[0_30px_90px_rgba(20,20,20,0.32)] backdrop-blur md:p-5">
            <div className="rounded-card bg-background-white p-5 text-secondary md:p-6">
              <div className="flex items-center justify-between gap-4 border-b border-border-light pb-6">
                <div>
                  <p className="text-xs font-black uppercase text-secondary-light">
                    Vendor dashboard
                  </p>
                  <h3 className="mt-1 text-2xl font-black">Service pulse</h3>
                </div>
                <span className="rounded-full bg-primary-light px-3 py-1 text-xs font-black text-primary">
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
                    <p className="mt-1 text-4xl font-black">248</p>
                  </div>
                  <p className="rounded-full bg-status-success-light px-3 py-1 text-sm font-black text-status-success">
                    +32%
                  </p>
                </div>
                <div className="mt-6 grid h-32 grid-cols-8 items-end gap-2">
                  {[45, 58, 38, 70, 62, 85, 74, 96].map((height) => (
                    <span
                      key={height}
                      className="rounded-t-button bg-primary-gradient shadow-[0_0_24px_rgba(245,107,85,0.22)] transition duration-300 hover:scale-y-105"
                      style={{ height: `${height}%` }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-16 mt-24">
          {vendorScreens.map((screen, index) => (
            <div
              key={index}
              className={`flex flex-col gap-8 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}
            >
              <div 
                className="relative w-full max-w-[500px] flex-shrink-0 cursor-pointer"
                onClick={() => setSelectedImage(screen.image)}
              >
                <Image
                  src={screen.image}
                  alt={screen.title}
                  width={500}
                  height={350}
                  className="w-full h-auto rounded-2xl hover:opacity-90 transition-opacity"
                  priority
                />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl lg:text-3xl font-black text-white">
                  {screen.title}
                </h3>
                <p className="mt-3 text-lg leading-7 text-secondary-light">
                  {screen.copy}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImage(null);
            }}
            className="absolute top-6 right-6 text-white text-3xl bg-black/50 rounded-full p-2 hover:bg-black/70 transition-colors"
          >
            <FiX />
          </button>
          <div className="relative max-w-4xl max-h-[90vh]">
            <Image
              src={selectedImage}
              alt="Preview"
              width={1200}
              height={800}
              className="object-contain rounded-2xl"
              priority
            />
          </div>
        </div>
      )}
    </section>
  );
}
