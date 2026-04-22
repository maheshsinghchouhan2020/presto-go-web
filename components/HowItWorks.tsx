import {
  FiMapPin,
  FiMenu,
  FiShoppingCart,
  FiCheckCircle,
} from "react-icons/fi";
import ScrollReveal from "./ScrollReveal";
import TiltCard from "./TiltCard";

const steps = [
  {
    number: "01",
    icon: FiMapPin,
    title: "Discover Nearby Bars",
    copy: "Find bars, lounges, and venues in your area with live availability and happy hour.",
  },
  {
    number: "02",
    icon: FiMenu,
    title: "Browse & Order",
    copy: "Explore menus, select drinks and food, add items to your cart, and customize your order.",
  },
  {
    number: "03",
    icon: FiShoppingCart,
    title: "Pay Securely",
    copy: "Checkout instantly with secure payment options, no need to wait in line at the bar.",
  },
  {
    number: "04",
    icon: FiCheckCircle,
    title: "Enjoy Your Night",
    copy: "Get notified when your order is ready, then sit back, relax, and enjoy your experience!",
  },
];

export default function HowItWorks() {
  return (
    <section className="relative py-20 lg:py-24 bg-background-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_24%_22%,rgba(245,107,85,0.08),transparent_30%),radial-gradient(circle_at_78%_28%,rgba(245,107,85,0.05),transparent_24%)] pointer-events-none" />
      
      <div className="section-shell relative">
        <ScrollReveal className="text-center mb-16">
          <p className="eyebrow mx-auto">
            How it works
          </p>
          <h2 className="section-title mt-5">
            Simple. Fast. <span className="text-primary">Seamless ordering</span>
          </h2>
          <p className="section-copy mt-4 max-w-2xl mx-auto">
            Presto-Go makes ordering at bars effortless. Here is how you can skip the lines and enjoy more.
          </p>
        </ScrollReveal>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <ScrollReveal key={step.number} delay={index * 120}>
                <TiltCard>
                  <article className="premium-card border border-border-light bg-white h-full">
                    <div className="relative p-6 md:p-7">
                      <div className="absolute top-6 right-6 text-5xl font-black text-primary">
                        {step.number}
                      </div>
                      
                      <div className="w-14 h-14 rounded-2xl bg-primary-light flex items-center justify-center mb-6">
                        <Icon className="text-2xl text-primary" aria-hidden />
                      </div>

                      <h3 className="text-xl font-black text-secondary mb-3">
                        {step.title}
                      </h3>
                      <p className="text-base leading-7 text-secondary-light">
                        {step.copy}
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
