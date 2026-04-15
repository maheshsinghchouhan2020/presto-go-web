import { FiMail, FiMapPin, FiPhone } from "react-icons/fi";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="viewport-section relative flex items-center overflow-hidden bg-background-white py-20 lg:py-24"
    >
      <div className="absolute left-0 top-24 h-72 w-72 rounded-full bg-primary-light blur-3xl" />
      <div className="section-shell relative grid gap-12 lg:grid-cols-[0.92fr_1.08fr]">
        <div className="reveal">
          <p className="eyebrow">Contact</p>
          <h2 className="section-title mt-5">
            Ready to bring Presto-Go to your venue?
          </h2>
          <p className="section-copy mt-6 max-w-xl">
            Share a few details and the Presto-Go team can help you plan the
            right launch path for your market.
          </p>

          <div className="mt-10 grid max-w-xl gap-4">
            {[
              { icon: FiMail, label: "hello@presto-go.com" },
              { icon: FiPhone, label: "+1 555 014 7089" },
              { icon: FiMapPin, label: "Built for bars everywhere" }
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.label}
                  className="flex items-center gap-4 rounded-card border border-border-light bg-background-muted p-4"
                >
                  <div className="grid h-11 w-11 place-items-center rounded-button bg-primary-light text-xl text-primary">
                    <Icon aria-hidden />
                  </div>
                  <p className="font-bold text-secondary">{item.label}</p>
                </div>
              );
            })}
          </div>
        </div>

        <form className="premium-card reveal reveal-delay-1 p-6 md:p-8">
          <div className="mb-7 border-b border-border-light pb-6">
            <p className="text-xs font-black uppercase text-secondary-light">
              Vendor inquiry
            </p>
            <h3 className="mt-2 text-2xl font-black text-secondary">
              Tell us where to start.
            </h3>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            <label className="block">
              <span className="text-sm font-black text-secondary">
                Full name
              </span>
              <input
                className="mt-2 w-full rounded-button border border-border-light bg-background-muted px-4 py-4 text-secondary outline-none transition duration-300 placeholder:text-secondary-light hover:border-border-strong focus:border-primary focus:bg-background-white focus:ring-4 focus:ring-primary-light"
                placeholder="Alex Carter"
                type="text"
              />
            </label>
            <label className="block">
              <span className="text-sm font-black text-secondary">Email</span>
              <input
                className="mt-2 w-full rounded-button border border-border-light bg-background-muted px-4 py-4 text-secondary outline-none transition duration-300 placeholder:text-secondary-light hover:border-border-strong focus:border-primary focus:bg-background-white focus:ring-4 focus:ring-primary-light"
                placeholder="alex@venue.com"
                type="email"
              />
            </label>
          </div>

          <label className="mt-5 block">
            <span className="text-sm font-black text-secondary">
              Venue or company
            </span>
            <input
              className="mt-2 w-full rounded-button border border-border-light bg-background-muted px-4 py-4 text-secondary outline-none transition duration-300 placeholder:text-secondary-light hover:border-border-strong focus:border-primary focus:bg-background-white focus:ring-4 focus:ring-primary-light"
              placeholder="The Copper Bar"
              type="text"
            />
          </label>

          <label className="mt-5 block">
            <span className="text-sm font-black text-secondary">Message</span>
            <textarea
              className="mt-2 min-h-36 w-full resize-none rounded-button border border-border-light bg-background-muted px-4 py-4 text-secondary outline-none transition duration-300 placeholder:text-secondary-light hover:border-border-strong focus:border-primary focus:bg-background-white focus:ring-4 focus:ring-primary-light"
              placeholder="Tell us about your launch goals."
            />
          </label>

          <button
            className="primary-button mt-6 w-full px-7 py-4 text-base font-black md:w-auto"
            type="button"
          >
            Send message
          </button>
        </form>
      </div>
    </section>
  );
}
