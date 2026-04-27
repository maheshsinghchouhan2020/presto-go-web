import {
  FiActivity,
  FiDatabase,
  FiLayers,
  FiShield,
  FiSliders,
  FiUsers
} from "react-icons/fi";
import ScrollReveal from "./ScrollReveal";
import TiltCard from "./TiltCard";

const adminTools = [
  {
    icon: FiUsers,
    title: "User management",
    copy: "Track users, and vendors roles, and access from a clean control center."
  },
  {
    icon: FiLayers,
    title: "Venue oversight",
    copy: "Review listings, availability, menus, orders, and vendor readiness."
  },
  {
    icon: FiActivity,
    title: "Operational analytics",
    copy: "See demand, fulfillment patterns, cancellations, and service health."
  },
  {
    icon: FiShield,
    title: "Trust controls",
    copy: "Moderate reviews, manage reports, and protect the marketplace experience."
  },
  {
    icon: FiSliders,
    title: "Platform settings",
    copy: "Tune categories, fees, visibility, notifications, and support workflows."
  },
  {
    icon: FiDatabase,
    title: "Data clarity",
    copy: "Keep core marketplace data organized, searchable, and ready to act on."
  }
];

export default function AdminSection() {
  return (
    <section
      id="admin"
      className="flex items-center bg-background-white py-16 lg:py-24"
    >
      <div className="section-shell px-4 sm:px-6">
        <ScrollReveal className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-3xl">
            <p className="eyebrow">Admin Platform</p>
            <h2 className="section-title mt-5 text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
              The back office for a modern hospitality network.
            </h2>
          </div>
          <p className="section-copy max-w-md text-base sm:text-lg">
            Admin teams get the visibility and control needed to keep the guest
            and vendor ecosystem running with confidence.
          </p>
        </ScrollReveal>

        <div className="mt-8 grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {adminTools.map((tool, index) => {
            const Icon = tool.icon;

            return (
              <ScrollReveal key={tool.title} delay={index * 80}>
                <TiltCard>
                  <article className="premium-card p-5">
                    <div className="flex items-start gap-5">
                      <div className="grid h-11 w-11 shrink-0 place-items-center rounded-button bg-primary-light text-xl text-primary">
                        <Icon aria-hidden />
                      </div>
                      <div>
                        <h3 className="text-lg font-black text-secondary">
                          {tool.title}
                        </h3>
                        <p className="mt-2 text-sm leading-6 text-secondary-light">
                          {tool.copy}
                        </p>
                      </div>
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
