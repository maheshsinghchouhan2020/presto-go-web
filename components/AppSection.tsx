"use client";

import { useState } from "react";
import Image from "next/image";
import AppDownloadModal from "./AppDownloadModal";
import ScrollReveal from "./ScrollReveal";

const appScreens = [
  {
    image: "/media1.jpeg",
    title: "Discover Bars Nearby",
    copy: "Find bars, lounges, and venues in your area with live availability and happy hour offers."
  },
  {
    image: "/media2.jpeg",
    title: "View Bar Details",
    copy: "Explore venue information, happy hour schedules, location, and live status at a glance."
  },
  {
    image: "/media3.jpeg",
    title: "Browse Menus & Order",
    copy: "View drink and food menus, happy hour discounts, and add items directly to your cart."
  },
  {
    image: "/media4.jpeg",
    title: "Manage Your Cart",
    copy: "Review your order, adjust quantities, and checkout securely with just a few taps."
  },
  {
    image: "/media5.jpeg",
    title: "Cart Overview",
    copy: "Review your saved items, view subtotal, and continue shopping or proceed to checkout."
  }
];

export default function AppSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section
      id="app"
      className="relative overflow-hidden bg-background-light py-20 lg:py-24"
    >
      <div className="absolute right-0 top-20 h-72 w-72 rounded-full bg-primary-light blur-3xl pointer-events-none" />
      <div className="section-shell">
        <ScrollReveal className="relative mx-auto max-w-3xl text-center">
          <p className="eyebrow mx-auto">Customer app</p>
          <h2 className="section-title mt-5">
            Every step of the night, handled beautifully.
          </h2>
          <p className="section-copy mt-4">
            Guests move from discovery to payment without losing momentum, while
            every touchpoint feels polished and effortless.
          </p>

          <button
            onClick={() => setIsModalOpen(true)}
            className="primary-button mt-8 inline-flex items-center justify-center gap-3 px-8 py-4 text-base font-black cursor-pointer"
          >
            Download the App
          </button>
        </ScrollReveal>

        <div className="mt-16 space-y-16">
          {appScreens.map((screen, index) => (
            <ScrollReveal key={index} delay={index * 150}>
              <article
                className={`flex flex-col gap-8 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}
              >
                <div className="relative w-full max-w-[300px] flex-shrink-0">
                  <Image
                    src={screen.image}
                    alt={screen.title}
                    width={300}
                    height={600}
                    className="w-full object-contain"
                    priority
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl lg:text-3xl font-black text-secondary">
                    {screen.title}
                  </h3>
                  <p className="mt-3 text-lg leading-7 text-secondary-light">
                    {screen.copy}
                  </p>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>

      <AppDownloadModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}
