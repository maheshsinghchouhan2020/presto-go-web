"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import AppDownloadModal from "./AppDownloadModal";

const steps = [
  {
    id: 1,
    title: "Discover bars nearby",
    description:
      "Explore the best venues around you with real-time availability and live updates on happy hours and events.",
    image: "/media1.png",
  },
  {
    id: 2,
    title: "View bar details",
    description:
      "Get all the information you need – from opening hours and special offers to the overall vibe and guest reviews.",
    image: "/media2.jpeg",
  },
  {
    id: 3,
    title: "Browse menu & order",
    description:
      "Skip the line by browsing the full digital menu and placing your order directly from your phone.",
    image: "/media3.jpeg",
  },
  {
    id: 4,
    title: "Manage your cart",
    description:
      "Keep track of your selections, customize your drinks, and review your order before checking out securely.",
    image: "/media4.jpeg",
  },
  {
    id: 5,
    title: "Overview",
    description:
      "Review your active orders, past history, and rewards all in one place for a seamless bar experience.",
    image: "/media5.jpeg",
  },
];

// Must be >= the browser's smooth-scroll animation duration
const ANIMATION_DURATION = 650;

export default function AppSection() {
  const [activeStep, setActiveStep] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const scrollContainerRef = useRef<HTMLDivElement>(null);

  /**
   * currentStepRef  — source of truth for "current step index" used
   *                   inside event listeners to avoid stale closures.
   * isAnimatingRef  — blocks new gestures while a smooth-scroll is
   *                   already in flight.
   */
  const currentStepRef = useRef(0);
  const isAnimatingRef = useRef(false);
  const touchStartYRef = useRef(0);

  /* ── Segment fill ─────────────────────────────────────────────
   * Returns 0-100 (%) for the line between step[i] and step[i+1].
   * Driven by the live scrollProgress so it animates smoothly
   * as the container scrolls to the target position.
   ─────────────────────────────────────────────────────────────── */
  const getSegmentFill = useCallback(
    (segmentIndex: number): number => {
      const total = steps.length - 1;
      const segStart = segmentIndex / total;
      const segEnd = (segmentIndex + 1) / total;
      if (scrollProgress >= segEnd) return 100;
      if (scrollProgress <= segStart) return 0;
      return ((scrollProgress - segStart) / (segEnd - segStart)) * 100;
    },
    [scrollProgress],
  );

  /* ── goToStep ────────────────────────────────────────────────
   * The single function that moves the view.  Sets state + ref
   * immediately (so UI reacts at once), then fires scrollTo and
   * locks the gate until the animation finishes.
   ─────────────────────────────────────────────────────────────── */
  const goToStep = useCallback((index: number) => {
    const el = scrollContainerRef.current;
    if (!el) return;

    const clamped = Math.max(0, Math.min(index, steps.length - 1));
    currentStepRef.current = clamped;
    setActiveStep(clamped);

    const maxScroll = el.scrollHeight - el.clientHeight;
    const targetTop = (clamped / (steps.length - 1)) * maxScroll;

    isAnimatingRef.current = true;
    el.scrollTo({ top: targetTop, behavior: "smooth" });

    setTimeout(() => {
      isAnimatingRef.current = false;
    }, ANIMATION_DURATION);
  }, []);

  /* ── handleScroll ────────────────────────────────────────────
   * Fires continuously while scrollTo() animates.
   * Only updates scrollProgress (which drives the line fill).
   * activeStep is already set optimistically in goToStep.
   ─────────────────────────────────────────────────────────────── */
  const handleScroll = useCallback(() => {
    const el = scrollContainerRef.current;
    if (!el) return;
    const { scrollTop, scrollHeight, clientHeight } = el;
    const maxScroll = scrollHeight - clientHeight;
    setScrollProgress(maxScroll > 0 ? Math.min(scrollTop / maxScroll, 1) : 0);
  }, []);

  /* ── handleWheel ─────────────────────────────────────────────
   * Intercepts every mouse-wheel / trackpad delta.
   * preventDefault() stops the browser from free-scrolling the
   * container, so we own every pixel of movement.
   ─────────────────────────────────────────────────────────────── */
  const handleWheel = useCallback(
    (e: WheelEvent) => {
      e.preventDefault();
      e.stopPropagation();
      if (isAnimatingRef.current) return;
      const direction = e.deltaY > 0 ? 1 : -1;
      goToStep(currentStepRef.current + direction);
    },
    [goToStep],
  );

  /* ── Touch events ────────────────────────────────────────────
   * Same one-step-per-gesture logic for mobile swipes.
   ─────────────────────────────────────────────────────────────── */
  const handleTouchStart = useCallback((e: TouchEvent) => {
    touchStartYRef.current = e.touches[0].clientY;
  }, []);

  const handleTouchEnd = useCallback(
    (e: TouchEvent) => {
      if (isAnimatingRef.current) return;
      const delta = touchStartYRef.current - e.changedTouches[0].clientY;
      if (Math.abs(delta) < 25) return; // ignore taps / micro-swipes
      goToStep(currentStepRef.current + (delta > 0 ? 1 : -1));
    },
    [goToStep],
  );

  /* ── Register listeners ──────────────────────────────────────
   * wheel must use { passive: false } so preventDefault() works.
   ─────────────────────────────────────────────────────────────── */
  useEffect(() => {
    const el = scrollContainerRef.current;
    if (!el) return;

    el.addEventListener("scroll", handleScroll, { passive: true });
    el.addEventListener("wheel", handleWheel, { passive: false });
    el.addEventListener("touchstart", handleTouchStart, { passive: true });
    el.addEventListener("touchend", handleTouchEnd, { passive: true });

    return () => {
      el.removeEventListener("scroll", handleScroll);
      el.removeEventListener("wheel", handleWheel);
      el.removeEventListener("touchstart", handleTouchStart);
      el.removeEventListener("touchend", handleTouchEnd);
    };
  }, [handleScroll, handleWheel, handleTouchStart, handleTouchEnd]);

  /* ── Click a step label to jump directly ────────────────────── */
  const handleStepClick = useCallback(
    (index: number) => {
      if (isAnimatingRef.current) return;
      goToStep(index);
    },
    [goToStep],
  );

  /* ── Render ───────────────────────────────────────────────── */
  return (
    <section
      id="app"
      className="relative py-16 lg:py-24 bg-background-white overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_24%_22%,rgba(245,107,85,0.05),transparent_30%),radial-gradient(circle_at_78%_28%,rgba(245,107,85,0.03),transparent_24%)] pointer-events-none" />

      <div className="section-shell relative px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-10 lg:mb-16">
          <p className="eyebrow mx-auto">Customer App</p>
          <h2 className="section-title mt-5">
            Every step of the night,{" "}
            <span className="text-primary">handled beautifully</span>
          </h2>
          <p className="section-copy mt-4 max-w-2xl mx-auto">
            Guests move from discovery to payment without losing momentum, while
            every touchpoint feels polished and effortless.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-10 lg:gap-24 items-start">
          {/* ── Phone mockup ─────────────────────────────────── */}
          <div className="w-full lg:w-1/2 flex items-start justify-center pt-0 pb-10 sticky top-20 lg:top-32 z-30 lg:z-auto">
            <div className="relative w-full max-w-[200px] xs:max-w-[240px] md:max-w-[280px] lg:max-w-[320px] aspect-[9/19.5] rounded-[2rem] xs:rounded-[2.5rem] lg:rounded-[3rem] border-[3px] xs:border-[4px] lg:border-[5px] border-[#1c1c1e] bg-gradient-to-b from-[#2c2c2e] to-black shadow-[0_10px_30px_rgba(0,0,0,0.25),0_30px_80px_rgba(0,0,0,0.35)] overflow-hidden">
              {/* Dynamic Island */}
              <div className="absolute top-3 left-1/2 -translate-x-1/2 w-[35%] h-[22px] bg-black rounded-full z-30 shadow-inner"></div>

              {/* Inner Screen (real bezel effect) */}
              <div className="absolute inset-[3px] rounded-[inherit] bg-black overflow-hidden">
                {/* Status Bar / Safe Area Header */}
                <div className="absolute top-0 left-0 right-0 h-10 z-20 flex items-center justify-between px-5 xs:px-7 text-[8px] xs:text-[10px] font-bold text-black pointer-events-none">
                  <span className="ml-1">9:41</span>
                  <div className="flex items-center gap-1 mr-1">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 21l-12-18h24z" />
                    </svg>
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M2 20h20v-20z" />
                    </svg>
                    <div className="w-5 h-2.5 border border-black rounded-sm relative after:content-[''] after:absolute after:top-[1px] after:-right-[3px] after:w-[2px] after:h-[4px] after:bg-black after:rounded-r-sm">
                      <div className="absolute top-[1px] left-[1px] bottom-[1px] w-[70%] bg-black rounded-[1px]" />
                    </div>
                  </div>
                </div>

                {/* Screen Content */}
                <div className="relative w-full h-full bg-white overflow-hidden pt-10">
                  {steps.map((step, index) => (
                    <div
                      key={step.id}
                      className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                        activeStep === index
                          ? "opacity-100 visible z-10"
                          : "opacity-0 invisible z-0"
                      }`}
                    >
                      <Image
                        src={step.image}
                        alt={step.title}
                        fill
                        className="object-cover"
                        style={{ top: '40px' }}
                        priority={index === 0}
                        sizes="(max-width: 768px) 240px, 320px"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* ── Step timeline (scrollable) ────────────────────── */}
          <div className="w-full lg:w-1/2 px-0 sm:px-0 pt-0">
            {/*
             * overflow-y-auto is required for scrollTo() to work,
             * but the user never free-scrolls — every gesture is
             * intercepted by the wheel / touch handlers above.
             */}
            <div
              ref={scrollContainerRef}
              className="h-[380px] sm:h-[450px] lg:h-[550px] overflow-y-auto pl-1 sm:pl-4 pr-2 sm:pr-6 pt-3 pb-3 no-scrollbar"
              style={{ overscrollBehavior: "contain" }}
            >
              {steps.map((step, index) => {
                const isActive = activeStep === index;
                const isPast = activeStep > index;
                const isLast = index === steps.length - 1;

                return (
                  /*
                   * items-stretch → both columns grow to the same
                   * height so the flex-1 line fills the exact gap
                   * between adjacent circles automatically.
                   */
                  <div
                    key={step.id}
                    className="flex items-stretch gap-4 sm:gap-8 cursor-pointer"
                    onClick={() => handleStepClick(index)}
                  >
                    {/* Timeline column */}
                    <div className="flex flex-col items-center flex-shrink-0 ml-1 sm:ml-2">
                      {/* Circle */}
                      <div
                        className={`
                          flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2
                          flex items-center justify-center text-lg sm:text-xl font-black
                          transition-all duration-300 z-10
                          ${
                            isActive
                              ? "bg-primary border-primary text-white scale-110 shadow-[0_0_20px_rgba(245,107,85,0.35)]"
                              : isPast
                                ? "bg-primary/15 border-primary text-primary"
                                : "border-border-strong text-secondary-light bg-transparent"
                          }
                        `}
                      >
                        {index + 1}
                      </div>

                      {/* Connecting line (hidden on last step) */}
                      {!isLast && (
                        <div className="relative w-[2px] flex-1 mt-1 min-h-[40px] sm:min-h-[56px]">
                          {/* Track */}
                          <div className="absolute inset-0 rounded-full bg-border-strong/25" />
                          {/* Orange fill driven by scrollProgress */}
                          <div
                            className="absolute top-0 left-0 right-0 rounded-full"
                            style={{
                              height: `${getSegmentFill(index)}%`,
                              backgroundColor: "rgb(245,107,85)",
                              willChange: "height",
                            }}
                          />
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div
                      className={`
                        flex-1 transition-all duration-500
                        ${isLast ? "pb-2" : "pb-8 sm:pb-10"}
                        ${isActive ? "opacity-100" : "opacity-25"}
                      `}
                    >
                      <div className="pt-1 sm:pt-2">
                        <h3
                          className={`text-xl sm:text-2xl md:text-3xl transition-all duration-300 ${
                            isActive
                              ? "font-black text-primary"
                              : "font-normal text-secondary-light"
                          }`}
                        >
                          {step.title}
                        </h3>
                        <p
                          className={`mt-2 sm:mt-3 text-sm sm:text-base leading-relaxed transition-all duration-300 ${
                            isActive
                              ? "text-secondary font-medium"
                              : "text-secondary-light"
                          }`}
                        >
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTA */}
            <div className="pt-12 flex justify-center lg:justify-start pl-4">
              <button
                onClick={() => setIsModalOpen(true)}
                className="primary-button inline-flex items-center justify-center gap-3 px-8 py-4 text-base font-black cursor-pointer shadow-xl"
              >
                Download the App
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      <AppDownloadModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
}
