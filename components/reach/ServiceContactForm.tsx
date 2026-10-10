"use client";

import { FormEvent, useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

type ServiceContactFormProps = {
  service: string;
  serviceSlug: string;
};

export default function ServiceContactForm({
  service,
  serviceSlug,
}: ServiceContactFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitting(true);

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: String(formData.get("name") || ""),
      email: String(formData.get("email") || ""),
      phone: String(formData.get("phone") || ""),
      company: String(formData.get("company") || ""),
      website: String(formData.get("website") || ""),
      message: String(formData.get("message") || ""),
      service,
      serviceSlug,
      source: "digital-marketing-service-page",
    };

    try {
      /*
        Connect this to your real lead endpoint when ready.

        Example:

        const response = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });

        if (!response.ok) {
          throw new Error("Unable to submit form.");
        });

        The payload automatically tells the backend which service page
        generated the lead through `service` and `serviceSlug`.
      */

      console.log("Service contact lead:", payload);

      await new Promise((resolve) => window.setTimeout(resolve, 650));
      setSubmitted(true);
      form.reset();
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section
      id="service-contact"
      className="relative overflow-hidden border-y border-white/5 bg-[#050c15] px-7 py-20 sm:px-10 lg:px-14 lg:py-24"
    >
      <div className="pointer-events-none absolute right-[-10%] top-1/2 h-[520px] w-[760px] -translate-y-1/2 rounded-full bg-[#3048ff]/[0.08] blur-[170px]" />

      <div className="relative z-10 mx-auto grid max-w-[1600px] gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:gap-16">
        <div className="flex flex-col justify-center">
          <p className="text-[10px] font-semibold uppercase tracking-[0.32em] text-[#526cff]">
            Talk To Realsite
          </p>

          <h2 className="mt-4 max-w-[560px] text-[36px] font-light leading-[1.07] tracking-[-0.04em] sm:text-[44px]">
            Let&apos;s talk about your{" "}
            <span className="text-[#526cff]">{service.toLowerCase()}</span>{" "}
            goals.
          </h2>

          <p className="mt-5 max-w-[520px] text-sm font-light leading-7 text-white/50 sm:text-base">
            Tell us a little about your business and what you want to improve.
            This form is automatically tagged for {service}, so your inquiry
            reaches us with the right context.
          </p>

          <div className="mt-8 space-y-4 text-sm font-light text-white/55">
            {[
              "No obligation strategy conversation",
              "Your service interest is attached automatically",
              "We can discuss strategy, scope, and next steps",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <CheckCircle2
                  size={17}
                  className="mt-0.5 shrink-0 text-[#526cff]"
                  strokeWidth={1.6}
                />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[20px] border border-white/10 bg-[#06101b] p-6 sm:p-8 lg:p-9">
          {submitted ? (
            <div className="flex min-h-[430px] flex-col items-center justify-center text-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[#526cff]/30 bg-[#526cff]/10 text-[#526cff]">
                <CheckCircle2 size={26} />
              </div>

              <h3 className="mt-5 text-[28px] font-light tracking-[-0.035em]">
                Thanks. We received your inquiry.
              </h3>

              <p className="mt-3 max-w-[440px] text-sm font-light leading-6 text-white/50">
                Your request is tagged for {service}. We&apos;ll have the right
                context when we follow up.
              </p>

              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="mt-7 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#526cff]"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              {/* These hidden fields carry the service context behind the scenes. */}
              <input type="hidden" name="service" value={service} />
              <input type="hidden" name="serviceSlug" value={serviceSlug} />
              <input
                type="hidden"
                name="source"
                value="digital-marketing-service-page"
              />

              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-2 block text-[9px] font-semibold uppercase tracking-[0.2em] text-white/45">
                    Name
                  </span>
                  <input
                    required
                    name="name"
                    type="text"
                    autoComplete="name"
                    className="h-[52px] w-full rounded-lg border border-white/10 bg-[#030811]/70 px-4 text-sm font-light text-white outline-none transition placeholder:text-white/20 focus:border-[#526cff]/70"
                    placeholder="Your name"
                  />
                </label>

                <label className="block">
                  <span className="mb-2 block text-[9px] font-semibold uppercase tracking-[0.2em] text-white/45">
                    Email
                  </span>
                  <input
                    required
                    name="email"
                    type="email"
                    autoComplete="email"
                    className="h-[52px] w-full rounded-lg border border-white/10 bg-[#030811]/70 px-4 text-sm font-light text-white outline-none transition placeholder:text-white/20 focus:border-[#526cff]/70"
                    placeholder="you@company.com"
                  />
                </label>

                <label className="block">
                  <span className="mb-2 block text-[9px] font-semibold uppercase tracking-[0.2em] text-white/45">
                    Phone
                  </span>
                  <input
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    className="h-[52px] w-full rounded-lg border border-white/10 bg-[#030811]/70 px-4 text-sm font-light text-white outline-none transition placeholder:text-white/20 focus:border-[#526cff]/70"
                    placeholder="(555) 555-5555"
                  />
                </label>

                <label className="block">
                  <span className="mb-2 block text-[9px] font-semibold uppercase tracking-[0.2em] text-white/45">
                    Company
                  </span>
                  <input
                    name="company"
                    type="text"
                    autoComplete="organization"
                    className="h-[52px] w-full rounded-lg border border-white/10 bg-[#030811]/70 px-4 text-sm font-light text-white outline-none transition placeholder:text-white/20 focus:border-[#526cff]/70"
                    placeholder="Business name"
                  />
                </label>
              </div>

              <label className="mt-5 block">
                <span className="mb-2 block text-[9px] font-semibold uppercase tracking-[0.2em] text-white/45">
                  Website
                </span>
                <input
                  name="website"
                  type="url"
                  autoComplete="url"
                  className="h-[52px] w-full rounded-lg border border-white/10 bg-[#030811]/70 px-4 text-sm font-light text-white outline-none transition placeholder:text-white/20 focus:border-[#526cff]/70"
                  placeholder="https://"
                />
              </label>

              <label className="mt-5 block">
                <span className="mb-2 block text-[9px] font-semibold uppercase tracking-[0.2em] text-white/45">
                  What Would You Like To Accomplish?
                </span>
                <textarea
                  required
                  name="message"
                  rows={5}
                  className="w-full resize-none rounded-lg border border-white/10 bg-[#030811]/70 px-4 py-4 text-sm font-light leading-6 text-white outline-none transition placeholder:text-white/20 focus:border-[#526cff]/70"
                  placeholder={`Tell us what you want to accomplish with ${service.toLowerCase()}...`}
                />
              </label>

              <div className="mt-5 flex flex-col gap-4 border-t border-white/10 pt-5 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-[9px] uppercase tracking-[0.18em] text-white/25">
                    Service Interest
                  </p>
                  <p className="mt-1 text-xs font-light text-[#526cff]">
                    {service}
                  </p>
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="group flex h-[52px] items-center justify-center gap-3 rounded-lg bg-[#3048ff] px-7 text-[10px] font-semibold uppercase tracking-[0.22em] transition hover:bg-[#4057ff] disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {submitting ? "Sending..." : "Start The Conversation"}
                  {!submitting && (
                    <ArrowRight
                      size={14}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
