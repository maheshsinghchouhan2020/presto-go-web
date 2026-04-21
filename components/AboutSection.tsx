import Image from "next/image";
import { FiCheckCircle } from "react-icons/fi";
import ScrollReveal from "./ScrollReveal";

const points = [
  "Built for premium bars, lounges, and high-volume hospitality teams.",
  "Designed around the full loop: discovery, booking, ordering, payment, review.",
  "Clear experience layers for guests, vendors, and platform operators."
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative flex items-center py-20 lg:py-24 bg-background-muted"
    >
      <div className="section-shell relative grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <ScrollReveal className="relative p-12 -m-12">
          <div className="absolute inset-0">
            <Image
              src="/banner_group.png"
              alt="Presto-Go Banner"
              fill
              className="object-contain opacity-90"
              priority
            />
            <div className="absolute inset-0 bg-background-muted/40" />
          </div>
          
          <div className="relative z-10">
            <p className="eyebrow">About Presto-Go</p>
            <h2 className="section-title mt-5">
              Hospitality software that feels as smooth as the night should.
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={150} className="premium-card p-8 md:p-10">
          <p className="section-copy">
            Presto-Go brings the speed of consumer ordering together with the
            control venues need behind the bar. The result is a more predictable
            guest journey, stronger vendor operations, and a platform foundation
            ready for scale.
          </p>
          <div className="mt-9 space-y-4">
            {points.map((point) => (
              <div
                key={point}
                className="flex gap-4 rounded-card border border-border-light bg-background-muted p-4"
              >
                <FiCheckCircle
                  className="mt-1 shrink-0 text-xl text-status-success"
                  aria-hidden
                />
                <p className="font-semibold leading-7 text-secondary">
                  {point}
                </p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
