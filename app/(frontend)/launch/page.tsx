"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import Header from "@/components/navigation/navigation";

type LaunchService = {
  number: string;
  id: string;
  name: string;
  tagline: string;
  image: string;
  items: string[];
};

const services: LaunchService[] = [
  {
    number: "01",
    id: "domain",
    name: "DOMAIN",
    tagline: "Secure your name.",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1400&q=88",
    items: [
      "Domain search and selection",
      "Registration or transfer",
      "DNS configuration",
      "Subdomains and redirects",
    ],
  },
  {
    number: "02",
    id: "hosting",
    name: "HOSTING",
    tagline: "Deploy your site.",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1400&q=88",
    items: [
      "Secure, high-performance hosting",
      "Website deployment",
      "SSL certificate (HTTPS)",
      "Production environment setup",
    ],
  },
  {
    number: "03",
    id: "email",
    name: "EMAIL",
    tagline: "Get your business online.",
    image:
      "https://images.unsplash.com/photo-1557200134-90327ee9fafa?auto=format&fit=crop&w=1400&q=88",
    items: [
      "Professional business email",
      "Custom addresses and aliases",
      "Forwarding and routing",
      "Setup and configuration",
    ],
  },
];

function Arrow() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      aria-hidden="true"
    >
      <path d="M5 12h13" />
      <path d="m13 7 5 5-5 5" />
    </svg>
  );
}

function Check() {
  return (
    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#1467ff] text-white">
      <svg
        viewBox="0 0 24 24"
        className="h-3 w-3"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        aria-hidden="true"
      >
        <path d="m6 12 4 4 8-9" />
      </svg>
    </span>
  );
}

function Hero() {
  return (
    <section className="relative min-h-[100dvh] overflow-hidden border-b border-white/10 bg-[#030811]">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1517976487492-5750f3195933?auto=format&fit=crop&w=2400&q=90"
          alt=""
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#030811_0%,rgba(3,8,17,.93)_28%,rgba(3,8,17,.50)_56%,rgba(3,8,17,.25)_100%)]" />
        <div className="absolute inset-x-0 top-0 h-56 bg-gradient-to-b from-[#030811] via-[#030811]/45 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-52 bg-gradient-to-t from-[#030811] via-[#030811]/45 to-transparent" />
      </div>

      <div className="relative z-20 mx-auto flex min-h-[100dvh] max-w-[1800px] items-center px-7 pb-24 pt-32 sm:px-10 lg:px-14 xl:px-24">
        <div className="max-w-[780px]">
          <p className="mb-5 text-[9px] font-semibold uppercase tracking-[.34em] text-[#526cff]">
            Launch
          </p>

          <h1 className="text-[clamp(4rem,6.6vw,8rem)] font-light leading-[.88] tracking-[-.06em]">
            Ready for
            <br />
            <span className="text-[#2670ff]">liftoff.</span>
          </h1>

          <h2 className="mt-8 text-xl font-medium tracking-[-.02em] sm:text-2xl">
            Domain. Hosting. Email.
          </h2>

          <p className="mt-2 text-sm font-light text-white/65 sm:text-base">
            Everything you need to get your business online.
          </p>

          <button
            type="button"
            onClick={() =>
              document.getElementById("launch-form")?.scrollIntoView({
                behavior: "smooth",
                block: "start",
              })
            }
            className="mt-9 inline-flex h-12 items-center gap-5 rounded-md bg-[#1467ff] px-7 text-[9px] font-semibold uppercase tracking-[.22em] text-white shadow-[0_0_35px_rgba(20,103,255,.28)] transition hover:bg-[#347cff]"
          >
            Start your launch <Arrow />
          </button>
        </div>
      </div>

      <div className="absolute bottom-8 right-8 z-30 hidden w-[150px] lg:block">
        {services.map((service) => (
          <div
            key={service.id}
            className="grid grid-cols-[26px_1fr] border-l border-white/25 py-3 pl-4"
          >
            <span className="text-[9px] text-white/35">{service.number}</span>
            <span className="text-[9px] font-semibold uppercase tracking-[.2em] text-white/65">
              {service.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

function Essentials() {
  return (
    <section className="relative min-h-[100dvh] overflow-hidden border-b border-white/10 bg-[#020811]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_25%,rgba(38,112,255,.07),transparent_34%)]" />

      <div className="relative z-10 mx-auto flex min-h-[100dvh] max-w-[1800px] flex-col justify-center px-7 py-24 sm:px-10 lg:px-14 xl:px-24">
        <div className="mb-12 grid gap-7 lg:grid-cols-[1.5fr_.7fr] lg:items-end">
          <div>
            <p className="mb-4 text-[9px] font-semibold uppercase tracking-[.34em] text-[#526cff]">
              The Launch Essentials
            </p>
            <h2 className="text-[clamp(3rem,4.6vw,5.8rem)] font-light leading-[.96] tracking-[-.055em]">
              Three essentials.{" "}
              <span className="text-[#2670ff]">One launch.</span>
            </h2>
          </div>

          <p className="max-w-[470px] text-sm font-light leading-7 text-white/48 lg:justify-self-end">
            We handle the technical setup so you can focus on your business.
            Get your domain, hosting, and professional email all set up and ready to go.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.id}
              className="group relative flex min-h-[590px] flex-col overflow-hidden rounded-xl border border-white/12 bg-[#07101b] transition duration-500 hover:-translate-y-1 hover:border-[#2670ff]/70 hover:shadow-[0_20px_70px_rgba(0,0,0,.35)]"
            >
              <div className="px-6 pb-5 pt-7 sm:px-7">
                <div className="flex items-center gap-5">
                  <span className="text-xl font-light text-[#5f91ff]">
                    {service.number}
                  </span>
                  <span className="h-px w-10 bg-[#2670ff]/75" />
                  <div>
                    <h3 className="text-lg font-semibold tracking-[-.02em]">
                      {service.name}
                    </h3>
                    <p className="mt-1 text-xs text-white/48">{service.tagline}</p>
                  </div>
                </div>
              </div>

              <div className="relative h-[250px] overflow-hidden">
                <img
                  src={service.image}
                  alt={`${service.name.toLowerCase()} launch service`}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.025]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#07101b] via-transparent to-[#07101b]/15" />
              </div>

              <div className="flex flex-1 flex-col px-6 pb-6 pt-5 sm:px-7">
                <div className="space-y-3">
                  {service.items.map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <Check />
                      <span className="text-[12px] text-white/70">{item}</span>
                    </div>
                  ))}
                </div>

                <button
                  type="button"
                  onClick={() =>
                    document.getElementById("launch-form")?.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    })
                  }
                  className="mt-auto flex h-11 w-full items-center justify-center gap-4 rounded-md border border-[#2670ff]/70 text-[9px] font-semibold uppercase tracking-[.22em] text-white/75 transition hover:bg-[#1467ff] hover:text-white"
                >
                  Start with {service.name.toLowerCase()} <Arrow />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function LaunchForm() {
  const [needs, setNeeds] = useState<string[]>(["domain", "hosting", "email"]);
  const [domainStatus, setDomainStatus] = useState("need-help");
  const [submitted, setSubmitted] = useState(false);

  function toggleNeed(id: string) {
    setNeeds((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id]
    );
  }

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <section
      id="launch-form"
      className="relative min-h-[100dvh] overflow-hidden bg-[#030811]"
    >
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=2200&q=85"
          alt=""
          className="h-full w-full object-cover opacity-28"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#030811_0%,rgba(3,8,17,.90)_43%,rgba(3,8,17,.70)_100%)]" />
        <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-[#030811] to-transparent" />
      </div>

      <div className="relative z-10 mx-auto grid min-h-[100dvh] max-w-[1800px] items-center gap-12 px-7 py-28 sm:px-10 lg:grid-cols-[40%_60%] lg:px-14 xl:px-24">
        <div className="max-w-[540px]">
          <p className="mb-5 text-[9px] font-semibold uppercase tracking-[.34em] text-[#526cff]">
            Let&apos;s Launch Together
          </p>
          <h2 className="text-[clamp(3.3rem,5vw,6rem)] font-light leading-[.96] tracking-[-.055em]">
            Tell us about
            <br />
            your <span className="text-[#2670ff]">launch.</span>
          </h2>
          <p className="mt-7 max-w-[460px] text-sm font-light leading-7 text-white/50">
            Share a few details and we&apos;ll get everything set up—domain,
            hosting, and email—so you can go live with confidence.
          </p>
        </div>

        <form
          onSubmit={submit}
          className="rounded-2xl border border-white/10 bg-[#07101d]/90 p-5 shadow-[0_35px_100px_rgba(0,0,0,.35)] backdrop-blur-xl sm:p-7 lg:p-9"
        >
          {submitted ? (
            <div className="flex min-h-[480px] flex-col items-center justify-center text-center">
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#1467ff]">
                <Arrow />
              </span>
              <h3 className="mt-6 text-3xl font-light tracking-[-.04em]">
                Launch request received.
              </h3>
              <p className="mt-3 max-w-[440px] text-sm leading-6 text-white/45">
                The interface is ready to connect to your actual form endpoint,
                CRM, or onboarding workflow.
              </p>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="mt-7 text-[9px] font-semibold uppercase tracking-[.24em] text-[#5f91ff]"
              >
                Send another request
              </button>
            </div>
          ) : (
            <>
              <fieldset>
                <legend className="text-[10px] font-medium text-white/70">
                  What do you need? <span className="text-[#2670ff]">*</span>
                </legend>
                <div className="mt-3 grid gap-3 sm:grid-cols-3">
                  {services.map((service) => {
                    const selected = needs.includes(service.id);
                    return (
                      <button
                        key={service.id}
                        type="button"
                        onClick={() => toggleNeed(service.id)}
                        className={`flex h-11 items-center gap-3 rounded-md border px-4 text-left text-[10px] font-medium transition ${
                          selected
                            ? "border-[#2670ff]/70 bg-[#1467ff]/10 text-white"
                            : "border-white/10 bg-white/[.025] text-white/50"
                        }`}
                      >
                        <span
                          className={`flex h-4 w-4 items-center justify-center rounded-sm border ${
                            selected
                              ? "border-[#2670ff] bg-[#2670ff]"
                              : "border-white/25"
                          }`}
                        >
                          {selected && (
                            <svg
                              viewBox="0 0 24 24"
                              className="h-3 w-3"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2.3"
                            >
                              <path d="m6 12 4 4 8-9" />
                            </svg>
                          )}
                        </span>
                        {service.name[0] + service.name.slice(1).toLowerCase()}
                      </button>
                    );
                  })}
                </div>
                {needs.map((need) => (
                  <input key={need} type="hidden" name="needs" value={need} />
                ))}
              </fieldset>

              <fieldset className="mt-6">
                <legend className="text-[10px] font-medium text-white/70">
                  Do you already have a domain?
                </legend>
                <div className="mt-3 grid gap-3 sm:grid-cols-3">
                  {[
                    ["yes", "Yes"],
                    ["no", "No"],
                    ["need-help", "Need help choosing"],
                  ].map(([value, label]) => (
                    <label
                      key={value}
                      className={`flex h-11 cursor-pointer items-center gap-3 rounded-md border px-4 text-[10px] transition ${
                        domainStatus === value
                          ? "border-[#2670ff]/70 bg-[#1467ff]/10 text-white"
                          : "border-white/10 bg-white/[.025] text-white/50"
                      }`}
                    >
                      <input
                        type="radio"
                        name="domainStatus"
                        value={value}
                        checked={domainStatus === value}
                        onChange={() => setDomainStatus(value)}
                        className="sr-only"
                      />
                      <span
                        className={`h-4 w-4 rounded-full border ${
                          domainStatus === value
                            ? "border-[5px] border-[#2670ff]"
                            : "border-white/30"
                        }`}
                      />
                      {label}
                    </label>
                  ))}
                </div>
              </fieldset>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <Field
                  label="Domain name (if you have one)"
                  name="domain"
                  placeholder="e.g. yourbusiness.com"
                />
                <Field label="Target launch date" name="launchDate" type="date" />
                <Field label="Name" name="name" placeholder="Your name" required />
                <Field
                  label="Email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  required
                />
                <Field
                  label="Business / Organization"
                  name="business"
                  placeholder="Your business name"
                />
                <Field
                  label="Phone"
                  name="phone"
                  type="tel"
                  placeholder="(555) 123-4567"
                />
              </div>

              <button
                type="submit"
                className="mt-7 flex h-12 w-full items-center justify-center gap-5 rounded-md bg-[#1467ff] text-[9px] font-semibold uppercase tracking-[.24em] text-white transition hover:bg-[#347cff]"
              >
                Send my launch request <Arrow />
              </button>
            </>
          )}
        </form>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="text-[10px] font-medium text-white/65">
        {label} {required && <span className="text-[#2670ff]">*</span>}
      </span>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="mt-2 h-11 w-full rounded-md border border-white/10 bg-white/[.025] px-4 text-sm text-white outline-none placeholder:text-white/25 focus:border-[#2670ff]"
      />
    </label>
  );
}

export default function LaunchPage() {
  return (
    <main className="relative bg-[#030811] text-white">
      <div className="absolute inset-x-0 top-0 z-[1000]">
        <Header />
      </div>

      <Hero />
      <Essentials />
      <LaunchForm />

      <footer className="border-t border-white/10 bg-[#02060d]">
        <div className="mx-auto flex max-w-[1800px] flex-col gap-6 px-7 py-10 sm:px-10 md:flex-row md:items-center md:justify-between lg:px-14 xl:px-24">
          <p className="text-[9px] uppercase tracking-[.28em] text-white/35">
            © {new Date().getFullYear()} RealSite. All rights reserved.
          </p>
          <div className="flex gap-6 text-[9px] uppercase tracking-[.18em] text-white/35">
            <Link href="/privacy" className="transition hover:text-white">
              Privacy
            </Link>
            <Link href="/terms" className="transition hover:text-white">
              Terms
            </Link>
            <Link href="/work" className="transition hover:text-white">
              Work
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
