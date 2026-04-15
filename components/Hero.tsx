import Image from "next/image";
import Link from "next/link";
import { FiArrowRight, FiCheckCircle, FiMapPin, FiStar } from "react-icons/fi";

export default function Hero() {
  return (
    <section
      id="home"
      className="viewport-section relative flex items-center overflow-hidden bg-secondary py-20 text-white md:py-24"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_24%_22%,rgba(245,107,85,0.20),transparent_30%),radial-gradient(circle_at_78%_28%,rgba(245,107,85,0.12),transparent_24%)]" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-border-strong" />

      <div className="section-shell relative grid items-center gap-10 lg:grid-cols-[1.02fr_0.98fr] xl:gap-14">
        <div className="reveal max-w-4xl">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-border-strong bg-white/5 px-4 py-2 text-sm font-bold text-white shadow-[0_18px_50px_rgba(20,20,20,0.24)] backdrop-blur">
            <FiStar className="text-primary" />
            A faster night out starts here
          </div>
          <h1 className="text-5xl font-black leading-[0.96] tracking-[0px] md:text-6xl xl:text-7xl">
            Discover, book, order, and pay at bars with{" "}
            <span className="text-primary">Presto-Go</span>.
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-secondary-light md:text-xl md:leading-8">
            Presto-Go connects guests, vendors, and admins in one polished
            hospitality platform built for real-time ordering, smoother service,
            and stronger venue growth.
          </p>

          <div className="mt-6 grid max-w-2xl gap-3 text-sm font-bold text-white/90 sm:grid-cols-3">
            {["Pre-book tables", "Order instantly", "Pay securely"].map(
              (item) => (
                <div key={item} className="flex items-center gap-2">
                  <FiCheckCircle className="text-status-success" />
                  {item}
                </div>
              )
            )}
          </div>

          <div className="mt-7 flex flex-col gap-4 sm:flex-row">
            <Link
              href="https://vendor.presto-go.com/signup"
              target="_blank"
              rel="noreferrer"
              className="primary-button inline-flex items-center justify-center gap-3 px-8 py-4 text-base font-black"
            >
              Launch with Presto-Go
              <FiArrowRight aria-hidden />
            </Link>
            <Link
              href="#app"
              className="inline-flex items-center justify-center rounded-button border border-border-strong bg-white/5 px-8 py-4 text-base font-bold text-white backdrop-blur transition duration-300 hover:scale-105 hover:border-primary hover:text-primary"
            >
              Explore the app
            </Link>
          </div>
        </div>

        <div className="reveal reveal-delay-1 relative min-h-[540px]">
          <div className="absolute inset-x-4 top-10 h-80 rounded-full bg-primary-light blur-3xl" />
          <div className="floating relative mx-auto w-full max-w-[430px] rounded-[34px] border border-border-strong bg-white p-3 shadow-[0_34px_100px_rgba(20,20,20,0.42)]">
            <div className="rounded-[26px] bg-background-light p-4 text-secondary">
              <div className="mb-3 flex items-center justify-between px-1">
                <div>
                  <p className="text-xs font-black uppercase text-secondary-light">
                    Tonight near you
                  </p>
                  <h2 className="mt-1 text-xl font-black">Reserve & order</h2>
                </div>
                <span className="rounded-full bg-status-success-light px-3 py-1 text-xs font-black text-status-success">
                  Live
                </span>
              </div>

              <div className="overflow-hidden rounded-card border border-border-light bg-secondary shadow-soft">
                <div className="relative h-52">
                  <Image
                    src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1200&q=80"
                    alt="Premium bar interior with warm lighting"
                    fill
                    priority
                    className="object-cover"
                    sizes="(min-width: 1024px) 460px, 100vw"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(20,20,20,0.08),rgba(20,20,20,0.86))]" />
                  <div className="absolute inset-0 flex flex-col justify-between p-5 text-white">
                    <span className="w-fit rounded-full border border-border-strong bg-white/10 px-3 py-1 text-xs font-bold backdrop-blur">
                      Premium Lounge
                    </span>
                    <div>
                      <h3 className="text-2xl font-black">The Copper Bar</h3>
                      <p className="mt-2 flex items-center gap-2 text-sm text-white/80">
                        <FiMapPin /> 0.8 km away
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-3">
                {["Table for 4", "Instant order", "Paid", "4.9 rating"].map(
                  (item) => (
                    <div
                      key={item}
                      className="rounded-card border border-border-light bg-white p-3.5 text-sm font-black"
                    >
                      {item}
                    </div>
                  )
                )}
              </div>

              <div className="mt-4 rounded-card border border-border-light bg-white p-3.5 shadow-[0_12px_40px_rgba(20,20,20,0.06)]">
                <div className="flex items-center justify-between">
                  <span className="font-black">Signature cart</span>
                  <span className="text-sm font-black text-primary">$84</span>
                </div>
                <div className="mt-4 h-3 overflow-hidden rounded-full bg-primary-light">
                  <div className="h-full w-3/4 rounded-full bg-primary-gradient" />
                </div>
              </div>
            </div>
          </div>

          <div className="absolute -right-2 bottom-12 hidden rounded-card border border-border-light bg-white p-4 text-secondary shadow-hover md:block">
            <p className="text-xs font-black uppercase text-secondary-light">
              Wait time
            </p>
            <p className="mt-1 text-3xl font-black text-primary">06m</p>
          </div>
        </div>
      </div>
    </section>
  );
}
