import Image from "next/image";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";

const footerLinks = [
  { label: "Guest app", href: "#app" },
  { label: "Vendor signup", href: "https://vendor.presto-go.com/signup" },
  { label: "Admin", href: "#admin" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-secondary py-12 text-white">
      <div className="section-shell flex flex-col justify-between gap-8 md:flex-row md:items-center">
        <div>
          <Link href="#home" className="flex items-center gap-3">
            <div className="grid h-11 w-11 place-items-center rounded-button bg-white shadow-glow transition duration-300 hover:scale-105 overflow-hidden">
              <Image
                src="/presto_logo.png"
                alt="Presto-Go Logo"
                width={50}
                height={50}
                className="object-contain"
              />
            </div>
            <span className="text-xl font-black">Presto-Go</span>
          </Link>
          <p className="mt-4 max-w-md leading-7 text-secondary-light">
            Premium ordering, booking, and marketplace software for modern bar
            experiences.
          </p>
        </div>

        <div className="flex flex-wrap gap-5">
          {footerLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noreferrer" : undefined}
              className="inline-flex items-center gap-2 text-sm font-bold text-secondary-light transition duration-300 hover:text-primary"
            >
              {link.label}
              {link.href.startsWith("http") ? <FiArrowUpRight /> : null}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
