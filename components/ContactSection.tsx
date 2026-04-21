"use client";

import { useState } from "react";
import { FiMail, FiMapPin, FiCheckCircle, FiLoader, FiAlertCircle } from "react-icons/fi";
import ScrollReveal from "./ScrollReveal";

type FormErrors = {
  full_name?: string;
  email?: string;
  venue_company?: string;
  message?: string;
};

export default function ContactSection() {
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    venue_company: "",
    message: ""
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.full_name.trim()) {
      newErrors.full_name = "Full name is required";
    } else if (formData.full_name.trim().length < 2) {
      newErrors.full_name = "Full name must be at least 2 characters";
    } else if (/\d/.test(formData.full_name)) {
      newErrors.full_name = "Full name cannot contain numbers";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        newErrors.email = "Please enter a valid email address";
      }
    }

    if (!formData.venue_company.trim()) {
      newErrors.venue_company = "Venue or company name is required";
    } else if (formData.venue_company.trim().length < 2) {
      newErrors.venue_company = "Venue name must be at least 2 characters";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setStatus("sending");

    try {
      const response = await fetch("https://api.presto-go.com/api/vendor-inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          sendTo: "contact@presto-go.com"
        })
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ full_name: "", email: "", venue_company: "", message: "" });
        setErrors({});
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    
    const newErrors = { ...errors };
    
    if (name === "full_name") {
      if (!value.trim()) {
        newErrors.full_name = "Full name is required";
      } else if (value.trim().length < 2) {
        newErrors.full_name = "Full name must be at least 2 characters";
      } else if (/\d/.test(value)) {
        newErrors.full_name = "Full name cannot contain numbers";
      } else {
        delete newErrors.full_name;
      }
    }
    
    if (name === "email") {
      if (!value.trim()) {
        newErrors.email = "Email is required";
      } else {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
          newErrors.email = "Please enter a valid email address";
        } else {
          delete newErrors.email;
        }
      }
    }
    
    if (name === "venue_company") {
      if (!value.trim()) {
        newErrors.venue_company = "Venue or company name is required";
      } else if (value.trim().length < 2) {
        newErrors.venue_company = "Venue name must be at least 2 characters";
      } else {
        delete newErrors.venue_company;
      }
    }
    
    if (name === "message") {
      if (!value.trim()) {
        newErrors.message = "Message is required";
      } else if (value.trim().length < 10) {
        newErrors.message = "Message must be at least 10 characters";
      } else {
        delete newErrors.message;
      }
    }
    
    setErrors(newErrors);
  };

  return (
    <section
      id="contact"
      className="relative flex items-center overflow-hidden bg-background-white py-20 lg:py-24"
    >
      <div className="absolute left-0 top-24 h-72 w-72 rounded-full bg-primary-light blur-3xl pointer-events-none" />
      <div className="section-shell relative grid gap-12 lg:grid-cols-[0.92fr_1.08fr]">
        <ScrollReveal>
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
              { icon: FiMail, label: "contact@presto-go.com" },
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
        </ScrollReveal>

        <ScrollReveal delay={150}>
          <form onSubmit={handleSubmit} className="premium-card p-6 md:p-8">
            <div className="mb-7 border-b border-border-light pb-6">
              <p className="text-xs font-black uppercase text-secondary-light">
                Vendor inquiry
              </p>
              <h3 className="mt-2 text-2xl font-black text-secondary">
                Tell us where to start.
              </h3>
            </div>

          {status === "success" && (
            <div className="mb-6 flex items-center gap-3 rounded-card border border-status-success bg-status-success-light p-4">
              <FiCheckCircle className="text-2xl text-status-success" />
              <p className="font-bold text-status-success">Message sent successfully!</p>
            </div>
          )}

          {status === "error" && (
            <div className="mb-6 flex items-center gap-3 rounded-card border border-status-error bg-status-error-light p-4">
              <FiLoader className="text-2xl text-status-error" />
              <p className="font-bold text-status-error">Something went wrong. Please try again.</p>
            </div>
          )}

          <div className="grid gap-5 md:grid-cols-2">
            <label className="block">
              <span className="text-sm font-black text-secondary">
                Full name
              </span>
              <input
                name="full_name"
                value={formData.full_name}
                onChange={handleChange}
                className={`mt-2 w-full rounded-button border px-4 py-4 text-secondary outline-none transition duration-300 placeholder:text-secondary-light ${
                  errors.full_name
                    ? "border-status-error focus:border-status-error focus:ring-4 focus:ring-status-error-light"
                    : "border-border-light bg-background-muted hover:border-border-strong focus:border-primary focus:bg-background-white focus:ring-4 focus:ring-primary-light"
                }`}
                placeholder="Alex Carter"
                type="text"
                disabled={status === "sending"}
              />
              {errors.full_name && (
                <div className="mt-2 flex items-center gap-2 text-sm text-status-error">
                  <FiAlertCircle />
                  {errors.full_name}
                </div>
              )}
            </label>
            <label className="block">
              <span className="text-sm font-black text-secondary">Email</span>
              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`mt-2 w-full rounded-button border px-4 py-4 text-secondary outline-none transition duration-300 placeholder:text-secondary-light ${
                  errors.email
                    ? "border-status-error focus:border-status-error focus:ring-4 focus:ring-status-error-light"
                    : "border-border-light bg-background-muted hover:border-border-strong focus:border-primary focus:bg-background-white focus:ring-4 focus:ring-primary-light"
                }`}
                placeholder="alex@venue.com"
                type="email"
                disabled={status === "sending"}
              />
              {errors.email && (
                <div className="mt-2 flex items-center gap-2 text-sm text-status-error">
                  <FiAlertCircle />
                  {errors.email}
                </div>
              )}
            </label>
          </div>

          <label className="mt-5 block">
            <span className="text-sm font-black text-secondary">
              Venue or company
            </span>
            <input
              name="venue_company"
              value={formData.venue_company}
              onChange={handleChange}
              className={`mt-2 w-full rounded-button border px-4 py-4 text-secondary outline-none transition duration-300 placeholder:text-secondary-light ${
                errors.venue_company
                  ? "border-status-error focus:border-status-error focus:ring-4 focus:ring-status-error-light"
                  : "border-border-light bg-background-muted hover:border-border-strong focus:border-primary focus:bg-background-white focus:ring-4 focus:ring-primary-light"
              }`}
              placeholder="The Copper Bar"
              type="text"
              disabled={status === "sending"}
            />
            {errors.venue_company && (
              <div className="mt-2 flex items-center gap-2 text-sm text-status-error">
                <FiAlertCircle />
                {errors.venue_company}
              </div>
            )}
          </label>

          <label className="mt-5 block">
            <span className="text-sm font-black text-secondary">Message</span>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className={`mt-2 min-h-36 w-full resize-none rounded-button border px-4 py-4 text-secondary outline-none transition duration-300 placeholder:text-secondary-light ${
                errors.message
                  ? "border-status-error focus:border-status-error focus:ring-4 focus:ring-status-error-light"
                  : "border-border-light bg-background-muted hover:border-border-strong focus:border-primary focus:bg-background-white focus:ring-4 focus:ring-primary-light"
              }`}
              placeholder="Tell us about your launch goals."
              disabled={status === "sending"}
            />
            {errors.message && (
              <div className="mt-2 flex items-center gap-2 text-sm text-status-error">
                <FiAlertCircle />
                {errors.message}
              </div>
            )}
          </label>

          <button
            className="primary-button mt-6 flex items-center justify-center gap-3 w-full px-7 py-4 text-base font-black md:w-auto"
            type="submit"
            disabled={status === "sending"}
          >
            {status === "sending" ? (
              <>
                <FiLoader className="animate-spin" />
                Sending...
              </>
            ) : (
              "Send message"
            )}
          </button>
        </form>
        </ScrollReveal>
      </div>
    </section>
  );
}
