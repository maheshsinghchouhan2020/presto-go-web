import {
  FiActivity,
  FiDatabase,
  FiLayers,
  FiShield,
  FiSliders,
  FiUsers
} from "react-icons/fi";

const adminTools = [
  {
    icon: FiUsers,
    title: "User management",
    copy: "Track guests, vendors, roles, and access from a clean control center."
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
      className="flex items-center bg-background-white py-20 lg:py-24"
    >
      <div className="section-shell">
        <div className="reveal flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div className="max-w-3xl">
            <p className="eyebrow">Admin Platform</p>
            <h2 className="section-title mt-5">
              The back office for a modern hospitality network.
            </h2>
          </div>
          <p className="section-copy max-w-md">
            Admin teams get the visibility and control needed to keep the guest
            and vendor ecosystem running with confidence.
          </p>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {adminTools.map((tool, index) => {
            const Icon = tool.icon;

            return (
              <article
                key={tool.title}
                className="premium-card reveal p-5"
                style={{ animationDelay: `${index * 70}ms` }}
              >
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
            );
          })}
        </div>
      </div>
    </section>
  );
}
