import {
  FiZap,
  FiShield,
  FiClock,
  FiUsers,
  FiMapPin,
  FiTrendingUp,
} from "react-icons/fi";
import ScrollReveal from "./ScrollReveal";
import TiltCard from "./TiltCard";

const features = [
  {
    title: "Lightning Fast",
    copy: "Order drinks in seconds without waiting in line.",
    icon: FiZap,
    color: "#F56B55",
  },
  {
    title: "Secure Payment",
    copy: "Multiple payment options with end-to-end encryption.",
    icon: FiShield,
    color: "#00A654",
  },
  {
    title: "Real-time Updates",
    copy: "Get live notifications when your order is ready.",
    icon: FiClock,
    color: "#007AFF",
  },
  {
    title: "Group Orders",
    copy: "Split the bill and order together with friends.",
    icon: FiUsers,
    color: "#9B59B6",
  },
  {
    title: "Discover Venues",
    copy: "Find new bars and happy hours nearby.",
    icon: FiMapPin,
    color: "#E91E63",
  },
  {
    title: "Venue Growth",
    copy: "Increase revenue with faster table turns.",
    icon: FiTrendingUp,
    color: "#FF9800",
  },
];

export default function FeaturesSection() {
  return (
    <section className="relative py-20 lg:py-24 bg-background-light">
      <div className="absolute right-0 top-20 h-72 w-72 rounded-full bg-primary-light blur-3xl pointer-events-none" />
      
      <div className="section-shell relative">
        <ScrollReveal className="text-center mb-16">
          <p className="eyebrow mx-auto">Why choose us</p>
          <h2 className="section-title mt-5">
            Everything you need for a perfect night
          </h2>
        </ScrollReveal>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <ScrollReveal key={feature.title} delay={index * 100}>
                <TiltCard>
                  <article className="premium-card h-full" style={{
                    background: `linear-gradient(135deg, ${feature.color}15, ${feature.color}05)`,
                    borderColor: `${feature.color}30`,
                  }}>
                    <div className="p-6 md:p-7">
                      <div 
                        className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                        style={{ backgroundColor: `${feature.color}20` }}
                      >
                        <Icon 
                          className="text-2xl"
                          style={{ color: feature.color }}
                          aria-hidden 
                        />
                      </div>

                      <h3 className="text-xl font-black text-secondary mb-3">
                        {feature.title}
                      </h3>
                      <p className="text-base leading-7 text-secondary-light">
                        {feature.copy}
                      </p>
                    </div>
                  </article>
                </TiltCard>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
