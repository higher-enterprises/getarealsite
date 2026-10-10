"use client";

import { ArrowRight, Check, CircleMinus } from "lucide-react";
import Header from "@/components/navigation/navigation";

export type BuildFeature = {
  title: string;
  description: string;
  included: boolean;
};

export type OtherPlan = {
  name: string;
  pages: string;
  description: string;
  price: string;
  href: string;
};

export type BuildPlanHero = {
  eyebrow: string;
  planLabel: string;
  headline: string;
  description: string;
  paidInFull: string;
  monthly: string;
  paymentNote: string;
  backgroundImage: string;
  websiteImage: string;
  websiteImageAlt: string;
};

export type BuildPlanInquiry = {
  eyebrow: string;
  title: string;
  description: string;
  benefits: string[];
  formTitle: string;
  submitLabel: string;
};

export type BuildPlanOtherPlans = {
  eyebrow: string;
  title: string;
  description: string;
};

export type BuildPlanCta = {
  eyebrow: string;
  title: string;
  description: string;
  buttonLabel: string;
};

export type BuildPlanPageProps = {
  plan: string;
  hero: BuildPlanHero;
  featuresEyebrow: string;
  featuresTitle: string;
  featuresDescription: string;
  features: BuildFeature[];
  inquiry: BuildPlanInquiry;
  otherPlansSection: BuildPlanOtherPlans;
  otherPlans: OtherPlan[];
  cta: BuildPlanCta;
};

export default function BuildPlanPage({
  plan,
  hero,
  featuresEyebrow,
  featuresTitle,
  featuresDescription,
  features,
  inquiry,
  otherPlansSection,
  otherPlans,
  cta,
}: BuildPlanPageProps) {
  const formId = `build-${plan.toLowerCase().replace(/\s+/g, "-")}-inquiry`;

  const scrollToForm = () => {
    document
      .getElementById(formId)
      ?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <main className="min-h-screen bg-[#020812] text-white">
      <Header />

      {/* HERO */}
      <section className="relative min-h-[680px] overflow-hidden border-b border-white/5 bg-[#061323] lg:min-h-[720px]">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src={hero.backgroundImage}
            alt=""
            className="absolute inset-0 h-full w-full object-cover object-center opacity-55"
          />

          <div className="absolute inset-0 bg-[linear-gradient(90deg,#061323_0%,rgba(6,19,35,.96)_16%,rgba(6,19,35,.76)_38%,rgba(6,19,35,.28)_66%,rgba(6,19,35,.08)_100%)]" />

          <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#061323] to-transparent" />
        </div>

        <div className="relative grid min-h-[680px] w-full grid-cols-1 pb-24 pt-24 lg:min-h-[720px] lg:grid-cols-[43%_57%] lg:pb-28 lg:pt-28">
          {/* HERO COPY */}
          <div className="relative z-20 self-center px-8 lg:pl-14 lg:pr-3 xl:pl-20">
            <div className="max-w-[690px]">
              <p className="mb-5 text-[11px] font-semibold uppercase tracking-[.25em] text-[#58a0ff]">
                {hero.planLabel}
              </p>

              <h1 className="max-w-[680px] text-[46px] font-light leading-[1.03] tracking-[-.045em] sm:text-[58px] lg:text-[64px]">
                {hero.headline}
              </h1>

              <p className="mt-6 max-w-[640px] text-[15px] font-light leading-7 text-white/65">
                {hero.description}
              </p>

              <div className="mt-7">
                <div className="flex items-end gap-3">
                  <span className="text-[38px] font-light tracking-[-.04em]">
                    {hero.paidInFull}
                  </span>

                  <span className="pb-1 text-sm text-white/75">
                    paid in full
                  </span>
                </div>

                <div className="mt-1 text-lg text-white/85">
                  or <span className="font-medium">{hero.monthly}</span>
                </div>

                <p className="mt-2 text-xs text-white/45">
                  {hero.paymentNote}
                </p>
              </div>
            </div>
          </div>

         {/* WEBSITE PREVIEW */}
<div className="relative z-10 hidden min-w-0 lg:block">
  <div className="absolute right-[-100px] top-[calc(50%+35px)] w-[990px] -translate-y-1/2 xl:right-[-130px] xl:w-[1080px] 2xl:right-[-150px] 2xl:w-[1150px]">
    <img
      src={hero.websiteImage}
      alt={hero.websiteImageAlt}
      className="block h-auto w-full max-w-none drop-shadow-[0_32px_90px_rgba(0,0,0,.55)]"
    />
  </div>
</div>
        </div>

        <div className="pointer-events-none absolute -bottom-[1px] left-0 right-0 h-24 overflow-hidden">
          <div className="absolute -bottom-16 -left-[4%] h-32 w-[108%] rounded-[50%_50%_0_0/100%_100%_0_0] bg-[#030c17]" />
          <div className="absolute bottom-6 right-0 h-16 w-[18%] origin-bottom-right -skew-y-[26deg] rounded-tl-[48px] bg-[#245dff]/80" />
        </div>
      </section>

      {/* FEATURES */}
      <section className="bg-[#030c17] px-8 pb-24 pt-32 lg:px-14 xl:px-20">
        <div className="mx-auto max-w-[1450px]">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-[10px] font-semibold uppercase tracking-[.3em] text-[#3977ff]">
              {featuresEyebrow}
            </p>

            <h2 className="mt-4 text-[38px] font-light tracking-[-.04em] sm:text-[46px]">
              {featuresTitle}
            </h2>

            <p className="mt-4 text-sm leading-6 text-white/55">
              {featuresDescription}
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <FeatureCard key={feature.title} feature={feature} />
            ))}
          </div>
        </div>
      </section>

      {/* INQUIRY */}
      <section className="relative border-t border-white/5 bg-[#06182b] px-8 pb-24 pt-28 lg:px-14 xl:px-20">
        <div className="mx-auto grid max-w-[1450px] gap-14 lg:grid-cols-[minmax(0,.82fr)_minmax(560px,1.18fr)] lg:items-center">
          <div className="max-w-[560px]">
            <p className="text-[10px] font-semibold uppercase tracking-[.3em] text-[#46a0ff]">
              {inquiry.eyebrow}
            </p>

            <h2 className="mt-4 text-[42px] font-light tracking-[-.04em]">
              {inquiry.title}
            </h2>

            <p className="mt-5 text-sm leading-7 text-white/60">
              {inquiry.description}
            </p>

            <div className="mt-8 space-y-4 text-sm text-white/78">
              {inquiry.benefits.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#0b55d7]">
                    <Check size={15} />
                  </span>
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div id={formId} className="relative z-30 lg:-mt-44">
            <div className="rounded-2xl border border-[#2670b8]/70 bg-[#071a2b]/95 p-7 shadow-[0_28px_90px_rgba(0,0,0,.45)] backdrop-blur-xl">
              <h2 className="text-2xl font-medium tracking-[-.03em]">
                {inquiry.formTitle}
              </h2>

              <form className="mt-6 space-y-4">
                <input type="hidden" name="plan" value={plan} />

                <div className="grid grid-cols-2 gap-3">
                  <Field
                    label="Full Name"
                    name="name"
                    placeholder="Your name"
                  />

                  <Field
                    label="Email"
                    name="email"
                    placeholder="you@company.com"
                    type="email"
                  />

                  <Field
                    label="Phone"
                    name="phone"
                    placeholder="(916) 555-5555"
                  />

                  <Field
                    label="Company"
                    name="company"
                    placeholder="Business name"
                  />
                </div>

                <Field
                  label="Current Website (if any)"
                  name="website"
                  placeholder="https://"
                />

                <TextArea
                  label="What do you need your new website to accomplish?"
                  name="goals"
                  placeholder="More leads, online bookings, showcase services..."
                />

                <div>
                  <p className="mb-2 text-[11px] font-medium text-white/75">
                    Preferred way to start?
                  </p>

                  <div className="flex flex-wrap gap-4 text-xs text-white/70">
                    {["Paid in Full", "Monthly Payments", "Not Sure"].map(
                      (value) => (
                        <label
                          key={value}
                          className="flex items-center gap-2"
                        >
                          <input
                            type="radio"
                            name="payment"
                            value={value}
                            className="accent-[#2d65ff]"
                          />
                          {value}
                        </label>
                      )
                    )}
                  </div>
                </div>

                <button
                  type="submit"
                  className="flex h-12 w-full items-center justify-center gap-3 rounded-lg bg-[#2d5cff] text-[11px] font-semibold uppercase tracking-[.18em] transition hover:bg-[#3b68ff]"
                >
                  {inquiry.submitLabel}
                  <ArrowRight size={15} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* OTHER PLANS */}
      <section className="border-t border-white/5 bg-[#04101d] px-8 py-24 lg:px-14 xl:px-20">
        <div className="mx-auto max-w-[1350px]">
          <div className="max-w-3xl text-left">
            <p className="text-[10px] font-semibold uppercase tracking-[.3em] text-[#3977ff]">
              {otherPlansSection.eyebrow}
            </p>

            <h2 className="mt-4 text-[38px] font-light tracking-[-.04em] sm:text-[46px]">
              {otherPlansSection.title}
            </h2>

            <p className="mt-3 text-sm text-white/55">
              {otherPlansSection.description}
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {otherPlans.map((other) => (
              <a
                key={other.name}
                href={other.href}
                className="group rounded-2xl border border-[#1b4670] bg-[linear-gradient(145deg,rgba(8,31,51,.95),rgba(3,13,24,.96))] p-7 transition hover:border-[#3479ff]"
              >
                <p className="text-xl font-medium">{other.name}</p>

                <p className="mt-2 text-[10px] font-semibold uppercase tracking-[.22em] text-[#3d86ff]">
                  {other.pages}
                </p>

                <p className="mt-5 min-h-16 text-sm leading-6 text-white/60">
                  {other.description}
                </p>

                <p className="mt-7 text-3xl font-light">{other.price}</p>

                <div className="mt-6 flex h-11 items-center justify-center gap-2 rounded-lg border border-[#24538a] text-[10px] font-semibold uppercase tracking-[.17em] transition group-hover:bg-[#235dff]">
                  View {other.name}
                  <ArrowRight size={14} />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="border-t border-[#16436f] bg-[radial-gradient(circle_at_75%_50%,rgba(29,87,165,.35),transparent_35%),linear-gradient(90deg,#06182b,#0a2744_55%,#071525)] px-8 py-16 lg:px-14 xl:px-20">
        <div className="mx-auto flex max-w-[900px] flex-col items-center text-center">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[.3em] text-[#46a0ff]">
              {cta.eyebrow}
            </p>

            <h2 className="mt-3 text-[38px] font-light tracking-[-.04em]">
              {cta.title}
            </h2>

            <p className="mt-3 text-sm text-white/60">
              {cta.description}
            </p>
          </div>

          <button
            onClick={scrollToForm}
            className="mt-7 flex h-12 min-w-[250px] items-center justify-center gap-3 rounded-lg bg-[#285cff] px-8 text-[10px] font-semibold uppercase tracking-[.18em]"
          >
            {cta.buttonLabel}
            <span>↑</span>
          </button>
        </div>
      </section>
    </main>
  );
}

function Field({
  label,
  name,
  placeholder,
  type = "text",
}: {
  label: string;
  name: string;
  placeholder: string;
  type?: string;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-[10px] font-medium text-white/70">
        {label}
      </span>

      <input
        name={name}
        type={type}
        placeholder={placeholder}
        className="h-10 w-full rounded-md border border-white/10 bg-[#03101c] px-3 text-xs text-white outline-none placeholder:text-white/25 focus:border-[#3479ff]"
      />
    </label>
  );
}

function TextArea({
  label,
  name,
  placeholder,
}: {
  label: string;
  name: string;
  placeholder: string;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-[10px] font-medium text-white/70">
        {label}
      </span>

      <textarea
        name={name}
        placeholder={placeholder}
        rows={3}
        className="w-full resize-none rounded-md border border-white/10 bg-[#03101c] px-3 py-3 text-xs text-white outline-none placeholder:text-white/25 focus:border-[#3479ff]"
      />
    </label>
  );
}

function FeatureCard({ feature }: { feature: BuildFeature }) {
  return (
    <div
      className={`rounded-2xl border p-6 ${
        feature.included
          ? "border-[#174c78] bg-[linear-gradient(145deg,rgba(8,31,51,.96),rgba(3,13,24,.98))]"
          : "border-white/7 bg-white/[.015] opacity-45"
      }`}
    >
      <div className="flex items-start gap-4">
        <div
          className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full border ${
            feature.included
              ? "border-[#225ca0] bg-[#082448] text-[#3e82ff]"
              : "border-white/10 text-white/30"
          }`}
        >
          {feature.included ? (
            <Check size={18} />
          ) : (
            <CircleMinus size={18} />
          )}
        </div>

        <div>
          <h3 className="text-sm font-medium">{feature.title}</h3>

          <p className="mt-2 text-xs leading-5 text-white/50">
            {feature.description}
          </p>

          <div className="mt-4 flex items-center gap-2 text-[10px] text-white/55">
            {feature.included ? (
              <>
                <Check size={12} className="text-[#3e82ff]" />
                Included
              </>
            ) : (
              <>
                <CircleMinus size={12} />
                Not included
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}