"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaStar } from "react-icons/fa";
import {
  FiArrowRight,
  FiCheckCircle,
  FiMapPin,
  FiStar,
  FiUser,
  FiClock,
} from "react-icons/fi";
import { RiDiscountPercentFill } from "react-icons/ri";
import AppDownloadModal from "./AppDownloadModal";

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <section
      id="home"
      className="relative flex items-center overflow-hidden bg-secondary py-20 text-white md:py-24"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_24%_22%,rgba(245,107,85,0.20),transparent_30%),radial-gradient(circle_at_78%_28%,rgba(245,107,85,0.12),transparent_24%)] pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-border-strong pointer-events-none" />

      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <p className="text-xs font-bold text-secondary-light tracking-widest uppercase">
          Scroll to Explore
        </p>
        <Link href="#app" className="relative group">
          <div className="w-6 h-10 rounded-full border border-border-strong flex items-start justify-center p-1.5">
            <div className="w-1 h-2.5 bg-primary rounded-full animate-bounce" />
          </div>
        </Link>
      </div>

      <div className="section-shell relative grid items-center gap-10 lg:grid-cols-[1.02fr_0.98fr] xl:gap-14 px-4 sm:px-6">
        <div className="reveal max-w-4xl">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-border-strong bg-white/5 px-4 py-2 text-xs font-bold text-white shadow-[0_18px_50px_rgba(20,20,20,0.24)] backdrop-blur">
            <FiStar className="text-primary" />A memorable night starts here
          </div>
          <h1 className="text-4xl font-black leading-[1.1] tracking-[0px] sm:text-5xl md:text-6xl xl:text-7xl">
            Discover bars, order and pay with{" "}
            <span className="text-primary">Presto-Go</span>.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-secondary-light sm:text-lg sm:leading-8 md:text-xl md:leading-8">
            Presto-Go connects customers and vendors in one polished hospitality
            platform built for real-time ordering, smoother service, and
            stronger venue growth.
          </p>

          <div className="mt-6 grid max-w-2xl gap-3 text-xs sm:text-sm font-bold text-white/90 grid-cols-2 sm:grid-cols-3">
            {["Discover nearby", "Order instantly", "Pay securely"].map(
              (item) => (
                <div key={item} className="flex items-center gap-2">
                  <FiCheckCircle className="text-status-success" />
                  {item}
                </div>
              ),
            )}
          </div>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="https://vendor.presto-go.com/signup"
              target="_blank"
              rel="noreferrer"
              className="primary-button inline-flex items-center justify-center gap-3 px-6 sm:px-8 py-3.5 sm:py-4 text-sm sm:text-base font-black relative z-10 cursor-pointer pointer-events-auto"
            >
              Launch Vendor account <FiArrowRight aria-hidden />
            </a>
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center justify-center rounded-button border border-border-strong bg-white/5 px-6 sm:px-8 py-3.5 sm:py-4 text-sm sm:text-base font-bold text-white backdrop-blur transition duration-300 hover:scale-105 hover:border-primary hover:text-primary cursor-pointer"
            >
              Explore the app
            </button>
          </div>
        </div>

        <div className="reveal reveal-delay-1 relative min-h-[400px] sm:min-h-[540px]">
          {/* Glow Background */}
          <div className="absolute inset-x-4 top-10 h-60 sm:h-80 rounded-full bg-primary-light blur-3xl opacity-70" />

          {/* Card Container */}
          <div className="floating relative mx-auto w-full max-w-[280px] xs:max-w-[320px] sm:max-w-[430px] rounded-[28px] sm:rounded-[34px] border border-border bg-white p-2 sm:p-3 shadow-[0_20px_60px_rgba(0,0,0,0.25)] sm:shadow-[0_30px_80px_rgba(20,20,20,0.35)]">
            <div className="rounded-[22px] sm:rounded-[26px] bg-white p-3 sm:p-4 text-secondary overflow-hidden">
              {/* IMAGE SECTION */}
              <div className="relative overflow-hidden rounded-[24px] sm:rounded-[28px]">
                <div className="relative h-44 sm:h-56">
                  <Image
                    src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1200&q=80"
                    alt="Premium bar"
                    fill
                    priority
                    className="object-cover"
                  />

                  {/* Dark Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                  {/* Happy Hour Ribbon */}
                  <div className="absolute top-3 left-0">
                    <div className="bg-primary text-white px-4 py-1 text-xs font-bold rounded-r-lg shadow-md">
                      Happy Hour
                    </div>
                  </div>

                  {/* Rating Capsule */}
                  <div className="absolute top-3 right-3 flex items-center gap-2 sm:gap-3 bg-white rounded-full px-2.5 py-1 sm:px-4 sm:py-2 shadow-md">
                    <div className="flex items-center gap-1">
                      <FaStar className="text-yellow-500 text-xs sm:text-base" />
                      <span className="font-bold text-secondary text-xs sm:text-base">5</span>
                    </div>
                    <div className="w-px h-3 sm:h-5 bg-border" />
                    <div className="flex items-center gap-1">
                      <FiUser className="text-secondary-light text-xs sm:text-base" />
                      <span className="font-bold text-secondary-light text-xs sm:text-base">99</span>
                    </div>
                  </div>

                  {/* Bottom Badges */}
                  <div className="absolute bottom-3 left-2 right-2 flex items-center justify-center gap-2 sm:left-3 sm:right-3 sm:gap-3">
                    {/* Live Badge */}
                    <div className="flex items-center gap-1.5 bg-black/40 backdrop-blur-md px-2.5 py-1.5 sm:px-4 sm:py-2 rounded-full text-white text-[10px] sm:text-sm font-semibold whitespace-nowrap">
                      {/* Blinking Orange Dot */}
                      <span className="relative flex h-2 w-2 sm:h-2.5 sm:w-2.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 sm:h-2.5 sm:w-2.5 bg-primary"></span>
                      </span>
                      Happy Hour Live
                    </div>

                    {/* Offer Badge */}
                    <div className="flex items-center gap-1.5 bg-black/40 backdrop-blur-md px-2.5 py-1.5 sm:px-4 sm:py-2 rounded-full text-white text-[10px] sm:text-sm font-semibold whitespace-nowrap">
                      <RiDiscountPercentFill className="text-white font-bold text-sm sm:text-lg" />
                      Save Upto 21% OFF
                    </div>
                  </div>
                </div>
              </div>

              {/* CONTENT */}
              <div className="mt-5">
                {/* Title */}
                <h3 className="text-3xl font-bold tracking-tight">
                  Prestissimo
                </h3>

                {/* Tag */}
                <div className="mt-3 flex gap-2">
                  <span className="inline-flex items-center bg-primary-light text-primary px-4 py-1.5 rounded-full text-sm font-semibold">
                    Happy Hour
                  </span>
                  <span className="inline-flex items-center bg-primary-light text-primary px-4 py-1.5 rounded-full text-sm font-semibold">
                    Live Music
                  </span>
                </div>

                {/* Info Row */}
                <div className="mt-5 flex items-center justify-between text-secondary-light text-sm">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1">
                      <FiMapPin />
                      <span>0.06 km</span>
                    </div>

                    <span>•</span>

                    <div className="flex items-center gap-1">
                      <FiClock />
                      <span>5 min</span>
                    </div>
                  </div>

                  <span className="text-success font-semibold text-green-600">
                    Open Now
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <AppDownloadModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}
