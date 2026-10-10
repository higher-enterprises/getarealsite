"use client";

import Link from "next/link";
import { FormEvent, useEffect, useState } from "react";
import Header from "@/components/navigation/navigation";

type Discipline = {
  id: string;
  number: string;
  name: string;
  short: string;
  description: string;
  services: string;
  image: string;
  icon: "copy" | "graphics" | "photo" | "video" | "audio" | "interactive" | "games";
};

const disciplines: Discipline[] = [
  {
    id: "copy",
    number: "01",
    name: "COPY",
    short: "Words that open doors.",
    description: "Brand voice, campaigns, scripts, web copy, editorial, naming, and messaging.",
    services: "Brand Voice · Campaigns · Scripts · Web Copy · Editorial · Naming",
    image:
      "https://images.unsplash.com/photo-1456324504439-367cee3b3c32?auto=format&fit=crop&w=1800&q=88",
    icon: "copy",
  },
  {
    id: "graphics",
    number: "02",
    name: "GRAPHICS",
    short: "Visuals that make an impact.",
    description: "Identity, campaign creative, illustration, motion graphics, and digital assets.",
    services: "Identity · Campaign Creative · Illustration · Motion · Digital Assets",
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=1800&q=88",
    icon: "graphics",
  },
  {
    id: "photography",
    number: "03",
    name: "PHOTOGRAPHY",
    short: "Images worth remembering.",
    description: "Brand, product, lifestyle, people, architecture, events, and editorial photography.",
    services: "Brand · Product · Lifestyle · People · Architecture · Events · Editorial",
    image:
      "https://images.unsplash.com/photo-1452780212940-6f5c0d14d848?auto=format&fit=crop&w=1800&q=88",
    icon: "photo",
  },
  {
    id: "video",
    number: "04",
    name: "VIDEO",
    short: "Stories that bring brands to life.",
    description: "Commercials, brand films, social video, product video, and animation.",
    services: "Commercials · Brand Films · Social · Product Video · Animation",
    image:
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1800&q=88",
    icon: "video",
  },
  {
    id: "music-audio",
    number: "05",
    name: "MUSIC + AUDIO",
    short: "Sound that moves people.",
    description: "Original music, sonic branding, scoring, podcasts, and audio production.",
    services: "Original Music · Sonic Branding · Scoring · Podcasts · Audio Production",
    image:
      "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=1800&q=88",
    icon: "audio",
  },
  {
    id: "interactive",
    number: "06",
    name: "INTERACTIVE",
    short: "Experiences people explore.",
    description: "Interactive storytelling, experiential web, installations, and prototypes.",
    services: "Storytelling · Experiential Web · Installations · Prototypes",
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1800&q=88",
    icon: "interactive",
  },
  {
    id: "games",
    number: "07",
    name: "GAMES",
    short: "Worlds people want to play.",
    description: "Branded games, educational games, casual games, and gamified experiences.",
    services: "Branded · Educational · Casual · Gamified Experiences",
    image:
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1800&q=88",
    icon: "games",
  },
];

function Arrow({ direction = "right" }: { direction?: "left" | "right" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={`h-4 w-4 ${direction === "left" ? "rotate-180" : ""}`}
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

function DisciplineIcon({ type }: { type: Discipline["icon"] }) {
  const common = {
    viewBox: "0 0 24 24",
    className: "h-5 w-5",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.55,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };

  if (type === "copy")
    return (
      <svg {...common}>
        <path d="M6 3h8l4 4v14H6z" />
        <path d="M14 3v5h5M9 12h6M9 16h6" />
      </svg>
    );

  if (type === "graphics")
    return (
      <svg {...common}>
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <circle cx="9" cy="9" r="2" />
        <path d="m4 17 5-5 4 4 2-2 5 5" />
      </svg>
    );

  if (type === "photo")
    return (
      <svg {...common}>
        <path d="M4 7h4l1.5-2h5L16 7h4v12H4z" />
        <circle cx="12" cy="13" r="4" />
      </svg>
    );

  if (type === "video")
    return (
      <svg {...common}>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m10 9 5 3-5 3z" />
      </svg>
    );

  if (type === "audio")
    return (
      <svg {...common}>
        <path d="M4 10v4M8 7v10M12 4v16M16 7v10M20 10v4" />
      </svg>
    );

  if (type === "interactive")
    return (
      <svg {...common}>
        <path d="m5 3 12 8-6 2-3 6z" />
        <path d="m13 13 5 5" />
      </svg>
    );

  return (
    <svg {...common}>
      <path d="M7 9h10c2 0 3 2 3 5l-1 5-4-3H9l-4 3-1-5c0-3 1-5 3-5Z" />
      <path d="M8 12v4M6 14h4M15 13h.01M18 15h.01" />
    </svg>
  );
}

function HeroCarousel() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const timer = window.setInterval(
      () => setActive((current) => (current + 1) % disciplines.length),
      6200
    );
    return () => window.clearInterval(timer);
  }, [paused]);

  const go = (direction: number) =>
    setActive((current) => (current + direction + disciplines.length) % disciplines.length);

  const activeItem = disciplines[active];

  return (
    <section
      className="relative min-h-[100dvh] overflow-hidden border-b border-white/10 bg-[#030811]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="absolute inset-0">
        {disciplines.map((item, index) => (
          <div
            key={item.id}
            className={`absolute inset-0 transition-opacity duration-[1400ms] ${
              index === active ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={item.image}
              alt=""
              className="absolute inset-y-0 right-0 h-full w-[72%] object-cover object-center"
            />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,#030811_0%,#030811_34%,rgba(3,8,17,.94)_48%,rgba(3,8,17,.34)_72%,rgba(3,8,17,.28)_100%)]" />
            <div className="absolute inset-x-0 top-0 h-52 bg-gradient-to-b from-[#030811] via-[#030811]/55 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-[#030811] via-[#030811]/50 to-transparent" />
          </div>
        ))}
      </div>

      <div className="relative z-30 mx-auto flex min-h-[100dvh] max-w-[1800px] items-center px-7 pb-28 pt-32 sm:px-10 lg:px-14 xl:px-24">
        <div className="max-w-[760px]">
          <p className="mb-5 text-[9px] font-semibold uppercase tracking-[.34em] text-[#526cff]">
            Create
          </p>
          <h1 className="text-[clamp(3.6rem,5.5vw,6.8rem)] font-light leading-[.94] tracking-[-.055em]">
            Ideas made
            <br />
            visible. Audible.
            <br />
            <span className="text-[#526cff]">Playable.</span>
          </h1>
          <p className="mt-7 max-w-[580px] text-sm font-light leading-7 text-white/55 sm:text-[15px]">
            A full-service creative studio for the digital world. Copy, graphics,
            photography, video, music, interactive experiences, and games.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() =>
                document.getElementById("project-form")?.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                })
              }
              className="inline-flex h-12 items-center gap-5 rounded-md bg-[#3048ff] px-6 text-[9px] font-semibold uppercase tracking-[.22em] text-white transition hover:bg-[#526cff]"
            >
              Start a project <Arrow />
            </button>
            <button
              type="button"
              onClick={() =>
                document.getElementById("studio")?.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                })
              }
              className="inline-flex h-12 items-center gap-4 rounded-md border border-white/15 bg-black/20 px-6 text-[9px] font-semibold uppercase tracking-[.22em] text-white/75 backdrop-blur-sm transition hover:border-white/35 hover:text-white"
            >
              Explore the studio <Arrow />
            </button>
          </div>
        </div>
      </div>

      <button
        type="button"
        aria-label="Previous creative discipline"
        onClick={() => go(-1)}
        className="absolute left-5 top-1/2 z-40 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-[#030811]/55 text-white/60 backdrop-blur-md transition hover:border-[#526cff] hover:text-white md:flex"
      >
        <Arrow direction="left" />
      </button>

      <button
        type="button"
        aria-label="Next creative discipline"
        onClick={() => go(1)}
        className="absolute right-5 top-1/2 z-40 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-[#030811]/55 text-white/60 backdrop-blur-md transition hover:border-[#526cff] hover:text-white md:flex"
      >
        <Arrow />
      </button>

      <div className="absolute bottom-8 left-1/2 z-40 flex -translate-x-1/2 items-center gap-4">
        <div className="flex gap-2">
          {disciplines.map((item, index) => (
            <button
              key={item.id}
              type="button"
              aria-label={`Show ${item.name}`}
              onClick={() => setActive(index)}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                active === index ? "w-7 bg-[#526cff]" : "w-1.5 bg-white/25 hover:bg-white/55"
              }`}
            />
          ))}
        </div>
        <span className="text-[9px] tracking-[.2em] text-white/45">
          {String(active + 1).padStart(2, "0")} / 07
        </span>
      </div>

      <div className="absolute bottom-8 right-8 z-30 hidden text-right lg:block">
        <p className="text-[9px] font-semibold uppercase tracking-[.28em] text-[#526cff]">
          {activeItem.name}
        </p>
        <p className="mt-2 text-xs text-white/45">{activeItem.short}</p>
      </div>
    </section>
  );
}

function StudioTabs() {
  const [active, setActive] = useState(2);
  const item = disciplines[active];

  return (
    <section
      id="studio"
      className="relative min-h-[100dvh] overflow-hidden border-b border-white/10 bg-[#020712]"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_76%_48%,rgba(48,72,255,.10),transparent_35%)]" />

      <div className="relative z-10 mx-auto flex min-h-[100dvh] max-w-[1800px] flex-col justify-center px-7 py-28 sm:px-10 lg:px-14 xl:px-24">
        <div className="mb-10 grid gap-6 lg:grid-cols-[1fr_.9fr] lg:items-end">
          <div>
            <p className="mb-4 text-[9px] font-semibold uppercase tracking-[.34em] text-[#526cff]">
              Our Studio
            </p>
            <h2 className="text-[clamp(2.7rem,4.2vw,5.2rem)] font-light leading-[.98] tracking-[-.05em]">
              Seven disciplines.
              <br />
              <span className="text-[#526cff]">One creative studio.</span>
            </h2>
          </div>
          <p className="max-w-[600px] text-sm font-light leading-7 text-white/45 lg:justify-self-end">
            From a single asset to a full campaign, we create the content and
            experiences that bring your brand to life across every medium.
          </p>
        </div>

        <div className="grid min-h-0 gap-5 lg:grid-cols-[36%_64%] xl:grid-cols-[34%_66%]">
          <div className="flex flex-col gap-2">
            {disciplines.map((discipline, index) => {
              const selected = index === active;
              return (
                <button
                  key={discipline.id}
                  type="button"
                  onClick={() => setActive(index)}
                  className={`group grid min-h-[70px] grid-cols-[36px_48px_1fr_24px] items-center gap-3 rounded-xl border px-4 text-left transition-all duration-500 ${
                    selected
                      ? "border-[#526cff] bg-[#526cff]/10 shadow-[0_0_28px_rgba(82,108,255,.16)]"
                      : "border-white/10 bg-white/[.025] hover:border-white/20 hover:bg-white/[.045]"
                  }`}
                >
                  <span
                    className={`text-sm font-light ${
                      selected ? "text-white" : "text-white/35"
                    }`}
                  >
                    {discipline.number}
                  </span>
                  <span
                    className={`flex h-11 w-11 items-center justify-center rounded-lg border ${
                      selected
                        ? "border-[#526cff]/55 bg-[#526cff]/10 text-[#6f83ff]"
                        : "border-white/10 bg-white/[.025] text-white/45"
                    }`}
                  >
                    <DisciplineIcon type={discipline.icon} />
                  </span>
                  <span>
                    <span className="block text-[12px] font-semibold tracking-[.02em] text-white">
                      {discipline.name}
                    </span>
                    <span className="mt-1 hidden text-[10px] leading-4 text-white/42 xl:block">
                      {discipline.description}
                    </span>
                  </span>
                  <span
                    className={`transition-transform duration-300 ${
                      selected ? "translate-x-1 text-[#526cff]" : "text-white/25 group-hover:translate-x-1"
                    }`}
                  >
                    <Arrow />
                  </span>
                </button>
              );
            })}
          </div>

          <div className="relative min-h-[480px] overflow-hidden rounded-xl border border-white/10 bg-[#07101d]">
            {disciplines.map((discipline, index) => (
              <div
                key={discipline.id}
                className={`absolute inset-0 transition-all duration-700 ${
                  active === index
                    ? "translate-x-0 opacity-100"
                    : index < active
                    ? "-translate-x-10 opacity-0"
                    : "translate-x-10 opacity-0"
                }`}
              >
                <img
                  src={discipline.image}
                  alt={`${discipline.name.toLowerCase()} creative studio`}
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#030811] via-[#030811]/15 to-transparent" />
              </div>
            ))}

            <div className="absolute inset-x-0 bottom-0 z-20 p-6 sm:p-8 lg:p-10">
              <p className="text-[9px] font-semibold uppercase tracking-[.3em] text-[#526cff]">
                {item.number} / 07
              </p>
              <h3 className="mt-3 text-3xl font-light tracking-[-.035em] sm:text-4xl">
                {item.name}
              </h3>
              <p className="mt-3 max-w-[760px] text-xs leading-6 text-white/60 sm:text-sm">
                {item.services}
              </p>
              <button
                type="button"
                onClick={() =>
                  document.getElementById("project-form")?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  })
                }
                className="mt-5 inline-flex items-center gap-4 text-[9px] font-semibold uppercase tracking-[.25em] text-[#6f83ff] transition hover:text-white"
              >
                Start a {item.name.toLowerCase()} project <Arrow />
              </button>
            </div>

            <div className="absolute right-5 top-5 z-30 flex gap-2">
              <button
                type="button"
                aria-label="Previous discipline"
                onClick={() =>
                  setActive((current) => (current - 1 + disciplines.length) % disciplines.length)
                }
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-[#030811]/60 text-white/60 backdrop-blur-md transition hover:border-[#526cff] hover:text-white"
              >
                <Arrow direction="left" />
              </button>
              <button
                type="button"
                aria-label="Next discipline"
                onClick={() => setActive((current) => (current + 1) % disciplines.length)}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-[#030811]/60 text-white/60 backdrop-blur-md transition hover:border-[#526cff] hover:text-white"
              >
                <Arrow />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectForm() {
  const [selected, setSelected] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);

  function toggleDiscipline(id: string) {
    setSelected((current) =>
      current.includes(id) ? current.filter((item) => item !== id) : [...current, id]
    );
  }

  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section
      id="project-form"
      className="relative min-h-[100dvh] overflow-hidden bg-[#030811]"
    >
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=2200&q=85"
          alt=""
          className="h-full w-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#030811_0%,rgba(3,8,17,.95)_44%,rgba(3,8,17,.82)_100%)]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#030811] via-transparent to-[#030811]/70" />
      </div>

      <div className="relative z-10 mx-auto grid min-h-[100dvh] max-w-[1800px] items-center gap-12 px-7 py-28 sm:px-10 lg:grid-cols-[36%_64%] lg:px-14 xl:px-24">
        <div className="max-w-[500px]">
          <p className="mb-5 text-[9px] font-semibold uppercase tracking-[.34em] text-[#526cff]">
            Let&apos;s Create Together
          </p>
          <h2 className="text-[clamp(3rem,4.7vw,5.6rem)] font-light leading-[.98] tracking-[-.055em]">
            Tell us about
            <br />
            your <span className="text-[#526cff]">project.</span>
          </h2>
          <p className="mt-7 max-w-[430px] text-sm font-light leading-7 text-white/48">
            Bring us an idea, a problem, a story—or a blank page. We&apos;ll help
            turn it into something people see, hear, watch, interact with, and remember.
          </p>
        </div>

        <form
          onSubmit={submit}
          className="rounded-2xl border border-white/10 bg-[#07101d]/88 p-5 shadow-[0_35px_100px_rgba(0,0,0,.30)] backdrop-blur-xl sm:p-7 lg:p-9"
        >
          {submitted ? (
            <div className="flex min-h-[520px] flex-col items-center justify-center text-center">
              <span className="flex h-14 w-14 items-center justify-center rounded-full border border-[#526cff]/50 bg-[#526cff]/10 text-[#6f83ff]">
                <Arrow />
              </span>
              <h3 className="mt-6 text-3xl font-light tracking-[-.04em]">
                Project details received.
              </h3>
              <p className="mt-3 max-w-[460px] text-sm leading-6 text-white/45">
                This front-end form is ready to connect to your preferred form handler,
                CRM, or API endpoint.
              </p>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="mt-7 text-[9px] font-semibold uppercase tracking-[.25em] text-[#6f83ff]"
              >
                Send another project
              </button>
            </div>
          ) : (
            <>
              <div>
                <label className="text-[10px] font-medium text-white/65">
                  What do you want to make? <span className="text-[#526cff]">*</span>
                </label>
                <textarea
                  required
                  name="project"
                  rows={4}
                  placeholder="Tell us about your idea, project, or challenge..."
                  className="mt-2 w-full resize-none rounded-lg border border-white/10 bg-white/[.025] px-4 py-3 text-sm text-white outline-none placeholder:text-white/25 focus:border-[#526cff]"
                />
              </div>

              <fieldset className="mt-6">
                <legend className="text-[10px] font-medium text-white/65">
                  Creative discipline(s)
                </legend>
                <div className="mt-3 flex flex-wrap gap-2">
                  {disciplines.map((discipline) => {
                    const checked = selected.includes(discipline.id);
                    return (
                      <button
                        key={discipline.id}
                        type="button"
                        onClick={() => toggleDiscipline(discipline.id)}
                        className={`inline-flex h-10 items-center gap-2 rounded-md border px-3 text-[9px] uppercase tracking-[.1em] transition ${
                          checked
                            ? "border-[#526cff] bg-[#526cff]/12 text-white"
                            : "border-white/10 bg-white/[.025] text-white/55 hover:border-white/25"
                        }`}
                      >
                        <span className="text-[#6f83ff]">
                          <DisciplineIcon type={discipline.icon} />
                        </span>
                        {discipline.name}
                      </button>
                    );
                  })}
                </div>
                {selected.map((value) => (
                  <input key={value} type="hidden" name="disciplines" value={value} />
                ))}
              </fieldset>

              <div className="mt-7 grid gap-4 sm:grid-cols-2">
                <Field label="Name" name="name" placeholder="Your name" required />
                <Field label="Email" name="email" type="email" placeholder="you@example.com" required />
                <Field label="Company / Organization" name="company" placeholder="Optional" />
                <Field label="Phone" name="phone" type="tel" placeholder="Optional" />
              </div>

              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <SelectField
                  label="Target Launch"
                  name="timeline"
                  options={[
                    "As soon as possible",
                    "Within 30 days",
                    "1–3 months",
                    "3–6 months",
                    "6+ months",
                    "Not sure yet",
                  ]}
                />
                <SelectField
                  label="Budget Range"
                  name="budget"
                  options={[
                    "Under $2,500",
                    "$2,500–$5,000",
                    "$5,000–$10,000",
                    "$10,000–$25,000",
                    "$25,000+",
                    "Not sure yet",
                  ]}
                />
              </div>

              <button
                type="submit"
                className="mt-7 flex h-12 w-full items-center justify-center gap-5 rounded-md bg-[#3048ff] text-[9px] font-semibold uppercase tracking-[.24em] text-white transition hover:bg-[#526cff]"
              >
                Send my project <Arrow />
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
        {label} {required && <span className="text-[#526cff]">*</span>}
      </span>
      <input
        required={required}
        name={name}
        type={type}
        placeholder={placeholder}
        className="mt-2 h-11 w-full rounded-lg border border-white/10 bg-white/[.025] px-4 text-sm text-white outline-none placeholder:text-white/25 focus:border-[#526cff]"
      />
    </label>
  );
}

function SelectField({
  label,
  name,
  options,
}: {
  label: string;
  name: string;
  options: string[];
}) {
  return (
    <label className="block">
      <span className="text-[10px] font-medium text-white/65">{label}</span>
      <select
        name={name}
        defaultValue=""
        className="mt-2 h-11 w-full rounded-lg border border-white/10 bg-[#091321] px-4 text-sm text-white/70 outline-none focus:border-[#526cff]"
      >
        <option value="" disabled>
          Select an option
        </option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  );
}

export default function CreatePage() {
  return (
    <>
      <main className="relative bg-[#030811] text-white">
        <div className="absolute inset-x-0 top-0 z-[1000]">
          <Header />
        </div>

        <HeroCarousel />
        <StudioTabs />
        <ProjectForm />

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
    </>
  );
}
