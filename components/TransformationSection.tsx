"use client";

import { useState } from "react";
import { FiZap, FiStar, FiAward } from "react-icons/fi";
import { BsRocketTakeoff } from "react-icons/bs";
import { BiTrophy } from "react-icons/bi";
import ScrollReveal from "./ScrollReveal";

const transformationItems = [
  {
    icon: FiZap,
    title: "Convenience",
  },
  {
    icon: FiStar,
    title: "Transparency",
  },
  {
    icon: FiAward,
    title: "Instant gratification",
  },
];

const tags = [
  "bars near me",
  "happy hour deals",
  "order ahead app",
];

export default function TransformationSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="relative py-20 lg:py-24 bg-secondary">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_24%_22%,rgba(245,107,85,0.14),transparent_30%),radial-gradient(circle_at_78%_28%,rgba(245,107,85,0.08),transparent_24%)] pointer-events-none" />

      <div className="section-shell relative px-4 sm:px-6">
        <ScrollReveal className="text-center mb-10 lg:mb-12">
          <p className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary-light px-6 py-2 text-[10px] sm:text-xs font-black uppercase text-primary mx-auto">
            <BiTrophy className="text-sm sm:text-base" />
            BEST OF 2026
          </p>
          <h2 className="mt-6 text-3xl font-black leading-[1.1] tracking-[0px] sm:text-4xl md:text-5xl lg:text-6xl text-white">
            Best Bar Ordering App for 2026
          </h2>
          <p className="mt-4 text-base sm:text-lg leading-7 sm:leading-8 text-secondary-light max-w-2xl mx-auto">
            As more people look for faster ways to enjoy nights out, the demand for{" "}
            <span className="text-white font-semibold">mobile bar ordering</span> continues to grow.
          </p>
        </ScrollReveal>

        <ScrollReveal className="mb-12 lg:mb-16">
          <div className="premium-card border border-border-strong bg-white/5 backdrop-blur">
            <div className="p-6 sm:p-8 md:p-10 text-center">
              <div className="flex items-center justify-center gap-3 mb-8">
                <BsRocketTakeoff className="text-2xl sm:text-3xl text-primary animate-pulse" />
                <h3 className="text-lg sm:text-xl md:text-2xl font-black text-gray-900">
                  Presto-Go is leading this transformation
                </h3>
              </div>

              <div className="grid gap-6 grid-cols-1 sm:grid-cols-3">
                {transformationItems.map((item, index) => {
                  const Icon = item.icon;
                  const isActive = activeIndex === index;
                  return (
                    <div
                      key={item.title}
                      className="text-center cursor-pointer"
                      onMouseEnter={() => setActiveIndex(index)}
                      onMouseLeave={() => setActiveIndex(null)}
                    >
                      <div className="mb-4 flex justify-center">
                        <div
                          className="w-12 h-12 rounded-2xl flex items-center justify-center bg-primary-light text-primary transition-transform duration-300"
                          style={{ transform: isActive ? 'rotate(10deg)' : 'rotate(0deg)' }}
                        >
                          <Icon className="text-2xl" />
                        </div>
                      </div>
                      <h4 className="text-lg font-semibold text-secondary">
                        {item.title}
                      </h4>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal className="text-center">
          <p className="text-lg text-secondary-light mb-6">
            Whether you are searching for:
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {tags.map((tag, index) => (
              <span
                key={tag}
                className="px-6 py-2 rounded-full border border-primary/30 bg-white/5 text-gray-300 font-semibold text-sm cursor-pointer transition-all duration-300 hover:bg-primary-light hover:text-primary hover:border-primary"
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                {tag}
              </span>
            ))}
          </div>
          <h3 className="text-2xl font-black text-primary mb-4">
            Presto-Go is your go-to solution.
          </h3>
          <p className="text-base leading-7 text-secondary-light max-w-3xl mx-auto">
            Recognized as the premier <span className="text-white font-semibold">bar ordering app</span> people rely on, we connect thousands of users daily with verified{" "}
            <span className="text-white font-semibold">local bars and happy hour deals</span> — from coast to coast, helping communities enjoy nights out more while supporting local businesses.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
