import Image from "next/image";

const appScreens = [
  {
    image: "/media1.jpeg",
    title: "Discover Venues",
    copy: "Find bars near you, view details, and see happy hour offers instantly."
  },
  {
    image: "/media2.jpeg",
    title: "Explore Menus",
    copy: "Browse drink menus, see happy hour discounts, and add items to your cart."
  },
  {
    image: "/media3.jpeg",
    title: "Cart & Checkout",
    copy: "Review your order, select instant or scheduled, and pay securely."
  },
  {
    image: "/media4.jpeg",
    title: "Order Summary",
    copy: "See your cart overview, add more items, and track your order easily."
  }
];

export default function AppSection() {
  return (
    <section
      id="app"
      className="relative overflow-hidden bg-background-light py-20 lg:py-24"
    >
      <div className="absolute right-0 top-20 h-72 w-72 rounded-full bg-primary-light blur-3xl pointer-events-none" />
      <div className="section-shell">
        <div className="reveal relative mx-auto max-w-3xl text-center">
          <p className="eyebrow mx-auto">Customer app</p>
          <h2 className="section-title mt-5">
            Every step of the night, handled beautifully.
          </h2>
          <p className="section-copy mt-4">
            Guests move from discovery to payment without losing momentum, while
            every touchpoint feels polished and effortless.
          </p>
        </div>

        <div className="mt-16 space-y-16">
          {appScreens.map((screen, index) => (
            <article
              key={index}
              className={`reveal flex flex-col gap-8 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative w-full max-w-[300px] flex-shrink-0">
                <Image
                  src={screen.image}
                  alt={screen.title}
                  width={300}
                  height={600}
                  className="w-full h-auto"
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
          ))}
        </div>
      </div>
    </section>
  );
}
