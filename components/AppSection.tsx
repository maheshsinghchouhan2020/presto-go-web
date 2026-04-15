import {
  FiCreditCard,
  FiFilter,
  FiMap,
  FiShoppingCart,
  FiStar,
  FiUserPlus,
  FiUser,
  FiXCircle
} from "react-icons/fi";

const features = [
  {
    icon: FiUserPlus,
    title: "Registration",
    copy: "Fast onboarding for guests with clean profile setup and secure account access."
  },
  {
    icon: FiMap,
    title: "Nearby bars",
    copy: "Location-led discovery helps users find bars, lounges, and experiences close by."
  },
  {
    icon: FiFilter,
    title: "Filters",
    copy: "Guests narrow venues by distance, vibe, availability, rating, and service options."
  },
  {
    icon: FiShoppingCart,
    title: "Pre-book & instant order",
    copy: "Reserve ahead, order on arrival, or send a live order straight to the vendor."
  },
  {
    icon: FiCreditCard,
    title: "Cart & payment",
    copy: "A smooth cart and payment flow keeps the experience quick and dependable."
  },
  {
    icon: FiStar,
    title: "Reviews",
    copy: "Ratings and feedback build trust while helping venues improve every night."
  },
  {
    icon: FiXCircle,
    title: "Cancellation",
    copy: "Clear cancellation paths keep plans flexible without creating service friction."
  },
  {
    icon: FiUser,
    title: "Profile",
    copy: "Saved preferences, order history, and account details stay easy to manage."
  }
];

export default function AppSection() {
  return (
    <section
      id="app"
      className="viewport-section relative flex items-center overflow-hidden bg-background-light py-20 lg:py-24"
    >
      <div className="absolute right-0 top-20 h-72 w-72 rounded-full bg-primary-light blur-3xl" />
      <div className="section-shell">
        <div className="reveal relative mx-auto max-w-3xl text-center">
          <p className="eyebrow mx-auto">Guest app</p>
          <h2 className="section-title mt-5">
            Every step of the night, handled beautifully.
          </h2>
          <p className="section-copy mt-4">
            Guests move from discovery to payment without losing momentum, while
            every touchpoint feels polished and effortless.
          </p>
        </div>

        <div className="relative mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <article
                key={feature.title}
                className="premium-card reveal min-h-[160px] p-4"
                style={{ animationDelay: `${index * 55}ms` }}
              >
                <div className="grid h-10 w-10 place-items-center rounded-button bg-primary-light text-lg text-primary">
                  <Icon aria-hidden />
                </div>
                <h3 className="mt-3 text-base font-black text-secondary">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-5 text-secondary-light">
                  {feature.copy}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
