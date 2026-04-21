"use client";

import { FiZap, FiArrowRight } from "react-icons/fi";
import ScrollReveal from "./ScrollReveal";

export default function GetStartedSection() {
  return (
    <section className="relative py-20 lg:py-24 bg-secondary">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_24%_22%,rgba(245,107,85,0.14),transparent_30%),radial-gradient(circle_at_78%_28%,rgba(245,107,85,0.08),transparent_24%)] pointer-events-none" />

      <div className="section-shell relative">
        <ScrollReveal>
          <div className="premium-card border border-primary/30 bg-white/5 backdrop-blur p-10 md:p-12 lg:p-16">
            <div className="text-center">
              <p className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary-light px-6 py-2 text-xs font-black uppercase text-primary mx-auto mb-8">
                <FiZap className="text-sm" />
                START ORDERING TODAY
              </p>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] tracking-[0px] text-black mb-4">
                Start Enjoying Today with{" "}
                <span className="text-primary">Presto-Go</span>
              </h2>
              <p className="text-xl text-secondary-light mb-6">
                Why wait to enjoy your night out?
              </p>
              <p className="text-lg text-secondary-light mb-10 max-w-2xl mx-auto">
                Join thousands of users who are already discovering better experiences with Presto-Go — the smartest bar ordering app.
              </p>

              <div className="flex items-center justify-center gap-6 mb-10">
                {["Discover bars near you", "Order instantly", "Pay securely"].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span className="text-black font-semibold">{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="https://vendor.presto-go.com/signup"
                  target="_blank"
                  rel="noreferrer"
                  className="primary-button inline-flex items-center justify-center gap-3 px-10 py-5 text-base font-bold cursor-pointer !rounded-full backdrop-blur transition duration-300 hover:scale-105"
                >
                  Get Started Now
                  <FiArrowRight />
                </a>
                <button
                  onClick={() => {
                    const contactSection = document.getElementById("contact");
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  className="inline-flex items-center justify-center rounded-full border border-border-strong bg-white/5 px-10 py-5 text-base font-bold backdrop-blur transition duration-300 hover:scale-105 border-primary text-primary cursor-pointer"
                >
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
