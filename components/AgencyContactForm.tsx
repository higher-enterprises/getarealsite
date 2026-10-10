"use client";

import { useState } from "react";
import {
  ArrowRight,
  Info,
  Mail,
  MapPin,
  Phone,
  UploadCloud,
} from "lucide-react";

import type { Agency } from "@/data/agencies";

const serviceOptions = [
  "Strategic Planning",
  "Website Development",
  "Website Purchase",
  "Website Acquisition",
  "Technology Expansion",
  "Ongoing Management",
  "Content Creation",
  "Customer Acquisition",
  "Other",
];

export default function AgencyContactForm({
  agency,
}: {
  agency: Agency;
}) {
  const [showPlanInfo, setShowPlanInfo] = useState(false);

  const phoneHref = agency.phone
    ? `tel:${agency.phone.replace(/[^\d+]/g, "")}`
    : undefined;

  return (
    <section
      id="contact"
      className="h-screen overflow-hidden bg-[#030711] px-6 py-6 text-white sm:px-8 lg:px-10 xl:px-12"
    >
      <div className="mx-auto grid h-full max-w-[1800px] gap-8 xl:grid-cols-[40%_60%] xl:pr-12 2xl:pr-20">
        {/* =====================================================
            LEFT INTRO
        ===================================================== */}

        <aside className="flex min-h-0 flex-col overflow-hidden">
          <div>
            <p className="text-[9px] font-semibold uppercase tracking-[0.26em] text-[#756aff]">
              Ready To Grow?
            </p>

            <h2 className="mt-3 text-[34px] font-light leading-[1.08] tracking-[-0.04em] md:text-[42px]">
              Let&apos;s build
              <br />
              something great
              <br />
              <span className="text-[#7062ff]">together.</span>
            </h2>

            <p className="mt-4 max-w-[300px] text-[13px] leading-6 text-white/48">
              Tell us about your business and what you&apos;re looking to
              accomplish. Our {agency.city} team will be in touch shortly.
            </p>

            {/* CONTACT INFORMATION */}

            <div className="mt-5 space-y-3">
              {agency.phone && phoneHref && (
                <a
                  href={phoneHref}
                  className="flex items-center gap-3 text-[13px] text-white/80 transition hover:text-white"
                >
                  <Phone
                    size={17}
                    strokeWidth={1.5}
                    className="text-[#756aff]"
                  />

                  {agency.phone}
                </a>
              )}

              {agency.email && (
                <a
                  href={`mailto:${agency.email}`}
                  className="flex items-center gap-3 text-[13px] text-white/80 transition hover:text-white"
                >
                  <Mail
                    size={17}
                    strokeWidth={1.5}
                    className="text-[#756aff]"
                  />

                  {agency.email}
                </a>
              )}

              <div className="flex items-start gap-3 text-[13px] text-white/80">
                <MapPin
                  size={17}
                  strokeWidth={1.5}
                  className="mt-[2px] shrink-0 text-[#756aff]"
                />

                <div>
                  {agency.address && (
                    <span className="block">
                      {agency.address}
                    </span>
                  )}

                  <span className="block">
                    {agency.city}, {agency.stateCode} {agency.postalCode}
                  </span>
                </div>
              </div>
            </div>

            {/* AREAS SERVED */}

            {agency.areasServed && agency.areasServed.length > 0 && (
              <div className="mt-6 max-w-[340px] border-t border-white/10 pt-5">
                <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[#756aff]">
                  Areas We Serve
                </p>

                <div className="mt-3 flex flex-wrap gap-x-2 gap-y-1.5">
                  {agency.areasServed.map((area, index) => (
                    <span
                      key={area}
                      className="text-[11px] text-white/50"
                    >
                      {area}
                      {index < agency.areasServed!.length - 1 && (
                        <span className="ml-2 text-white/20">•</span>
                      )}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </aside>

        {/* =====================================================
            RIGHT FORM
        ===================================================== */}

        <form
          onSubmit={(event) => event.preventDefault()}
          className="flex h-full min-h-0 flex-col overflow-hidden rounded-xl border border-white/10 bg-[#070c18]"
        >
          <div className="grid min-h-0 flex-1 grid-rows-[auto_auto_1fr]">
            {/* =================================================
                ROW 1 — YOUR INFORMATION
            ================================================= */}

            <div className="border-b border-white/10 px-6 py-4 lg:px-7">
              <div className="mb-4 flex items-center gap-3">
                <span className="flex h-7 w-7 items-center justify-center rounded-md bg-[#5e52ff] text-[13px] font-medium text-white">
                  01
                </span>

                <h3 className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#9a93ff]">
                  Your Information
                </h3>
              </div>

              <div className="grid gap-3 lg:grid-cols-2 xl:grid-cols-3">
                <Field
                  label="Company"
                  name="company"
                  placeholder="Your company name"
                  required
                />

                <div>
                  <label className="text-[11px] text-white/80">
                    Contact <span className="text-[#766aff]">*</span>
                  </label>

                  <div className="mt-1.5 grid grid-cols-2 gap-2">
                    <input
                      type="text"
                      name="firstName"
                      placeholder="First name"
                      required
                      className={inputClass}
                    />

                    <input
                      type="text"
                      name="lastName"
                      placeholder="Last name"
                      required
                      className={inputClass}
                    />
                  </div>
                </div>

                <Field
                  label="Phone Number"
                  name="phone"
                  type="tel"
                  placeholder="(555) 123-4567"
                  required
                />

                <Field
                  label="Email Address"
                  name="email"
                  type="email"
                  placeholder="you@company.com"
                  required
                />

                <div className="lg:col-span-2">
                  <Field
                    label="Website Address"
                    name="website"
                    type="url"
                    placeholder="https://yourwebsite.com"
                  />
                </div>
              </div>
            </div>

            {/* =================================================
                ROW 2 — SERVICES
            ================================================= */}

            <div className="border-b border-white/10 px-6 py-4 lg:px-7">
              <div className="mb-3 flex items-center gap-3">
                <span className="flex h-7 w-7 items-center justify-center rounded-md bg-[#5e52ff] text-[13px] font-medium text-white">
                  02
                </span>

                <h3 className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#9a93ff]">
                  Services You&apos;re Interested In
                </h3>
              </div>

              <div className="grid gap-x-5 gap-y-1 sm:grid-cols-2 xl:grid-cols-3">
                {serviceOptions.map((service) => (
                  <label
                    key={service}
                    className="flex min-h-[30px] cursor-pointer items-center gap-2 border-b border-white/[0.05] py-1 text-[12px] text-white/80 transition hover:text-white"
                  >
                    <input
                      type="checkbox"
                      name="services"
                      value={service}
                      className="h-[13px] w-[13px] accent-[#6c5cff]"
                    />

                    <span>{service}</span>
                  </label>
                ))}
              </div>

              <div className="mt-2">
                <label
                  htmlFor="otherService"
                  className="text-[11px] text-white/80"
                >
                  If other, please specify
                </label>

                <textarea
                  id="otherService"
                  name="otherService"
                  rows={2}
                  placeholder="Please describe"
                  className={`${inputClass} mt-1.5 h-[54px] resize-none py-2`}
                />
              </div>
            </div>

            {/* =================================================
                ROW 3 — PROJECT DETAILS
            ================================================= */}

            <div className="min-h-0 overflow-hidden px-6 py-4 lg:px-7">
              <div className="mb-3 flex items-center gap-3">
                <span className="flex h-7 w-7 items-center justify-center rounded-md bg-[#5e52ff] text-[13px] font-medium text-white">
                  03
                </span>

                <h3 className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#9a93ff]">
                  Project Details
                </h3>
              </div>

              <div className="grid h-[calc(100%-40px)] min-h-0 gap-4 lg:grid-cols-[0.9fr_1.1fr]">
                {/* LEFT — MEMO */}

                <div className="min-h-0">
                  <label
                    htmlFor="message"
                    className="text-[11px] text-white/80"
                  >
                    Tell us about your project{" "}
                    <span className="text-[#766aff]">*</span>
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    required
                    placeholder="Share as much detail as you can about your goals, challenges, and what success looks like."
                    className="mt-1.5 h-[calc(100%-22px)] min-h-[140px] w-full resize-none rounded-md border border-white/10 bg-[#0a0f1b] px-3 py-2 text-[12px] leading-5 text-white outline-none transition placeholder:text-white/25 focus:border-[#6b60ff]"
                  />
                </div>

                {/* RIGHT — BUDGET + PLAN */}

                <div className="min-h-0">
                  <div className="grid gap-3 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="initialBudget"
                        className="text-[11px] text-white/80"
                      >
                        Initial Budget
                      </label>

                      <select
                        id="initialBudget"
                        name="initialBudget"
                        defaultValue=""
                        className={`${inputClass} mt-1.5`}
                      >
                        <option value="" disabled className="bg-[#070c18]">
                          Select initial budget
                        </option>
                        <option value="under-1000" className="bg-[#070c18]">
                          Under $1,000
                        </option>
                        <option value="1000-2500" className="bg-[#070c18]">
                          $1,000 – $2,500
                        </option>
                        <option value="2500-5000" className="bg-[#070c18]">
                          $2,500 – $5,000
                        </option>
                        <option value="5000-10000" className="bg-[#070c18]">
                          $5,000 – $10,000
                        </option>
                        <option value="10000-25000" className="bg-[#070c18]">
                          $10,000 – $25,000
                        </option>
                        <option value="25000-plus" className="bg-[#070c18]">
                          $25,000+
                        </option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="monthlyBudget"
                        className="text-[11px] text-white/80"
                      >
                        Ongoing Monthly Budget
                      </label>

                      <select
                        id="monthlyBudget"
                        name="monthlyBudget"
                        defaultValue=""
                        className={`${inputClass} mt-1.5`}
                      >
                        <option value="" disabled className="bg-[#070c18]">
                          Select monthly budget
                        </option>
                        <option value="none" className="bg-[#070c18]">
                          No ongoing budget
                        </option>
                        <option value="under-500" className="bg-[#070c18]">
                          Under $500 / month
                        </option>
                        <option value="500-1000" className="bg-[#070c18]">
                          $500 – $1,000 / month
                        </option>
                        <option value="1000-2500" className="bg-[#070c18]">
                          $1,000 – $2,500 / month
                        </option>
                        <option value="2500-5000" className="bg-[#070c18]">
                          $2,500 – $5,000 / month
                        </option>
                        <option value="5000-plus" className="bg-[#070c18]">
                          $5,000+ / month
                        </option>
                      </select>
                    </div>
                  </div>

                  {/* PLAN */}

                  <div className="mt-3">
                    <div className="flex items-center justify-between gap-3">
                      <label
                        htmlFor="plan"
                        className="text-[11px] text-white/80"
                      >
                        Plan{" "}
                        <span className="text-white/35">(Optional)</span>
                      </label>

                      <div className="relative">
                        <button
                          type="button"
                          aria-label="Why upload a plan?"
                          onClick={() =>
                            setShowPlanInfo((current) => !current)
                          }
                          className="flex h-6 w-6 items-center justify-center rounded-full border border-[#7064ff]/50 text-[#756aff] transition hover:bg-[#7064ff]/10"
                        >
                          <Info size={12} />
                        </button>

                        {showPlanInfo && (
                          <div className="absolute right-0 top-8 z-20 w-[250px] rounded-lg border border-white/10 bg-[#0c1120] p-3 shadow-2xl">
                            <p className="text-[11px] leading-5 text-white/65">
                              A plan helps us understand your goals,
                              requirements and priorities faster.
                            </p>

                            <a
                              href="/plan"
                              className="mt-2 flex items-center gap-2 text-[9px] font-semibold uppercase tracking-[0.14em] text-[#8177ff]"
                            >
                              Need a plan?
                              <ArrowRight size={11} />
                            </a>
                          </div>
                        )}
                      </div>
                    </div>

                    <label
                      htmlFor="plan"
                      className="mt-2 flex min-h-[86px] cursor-pointer items-center justify-center gap-4 rounded-md border border-dashed border-[#7165ff]/45 bg-[#0a0f1b] px-4 text-center transition hover:border-[#8177ff]"
                    >
                      <UploadCloud
                        size={25}
                        strokeWidth={1.4}
                        className="shrink-0 text-[#756aff]"
                      />

                      <div className="text-left">
                        <span className="block text-[11px] text-white/80">
                          Upload your plan
                        </span>

                        <span className="mt-1 block text-[9px] text-white/35">
                          PDF, DOC, DOCX, PNG, JPG
                        </span>
                      </div>

                      <input
                        id="plan"
                        name="plan"
                        type="file"
                        accept=".pdf,.doc,.docx,.png,.jpg,.jpeg"
                        className="sr-only"
                      />
                    </label>

                    <div className="mt-2 flex items-start gap-2 rounded-md border border-white/[0.08] bg-white/[0.02] px-3 py-2">
                      <Info
                        size={14}
                        className="mt-[1px] shrink-0 text-[#7468ff]"
                      />

                      <div>
                        <p className="text-[10px] font-medium text-white/80">
                          Don&apos;t have a plan yet?
                        </p>

                        <a
                          href="/plan"
                          className="mt-1 flex items-center gap-1.5 text-[9px] uppercase tracking-[0.12em] text-[#8177ff]"
                        >
                          Explore Planning
                          <ArrowRight size={10} />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* =====================================================
              SUBMIT
          ===================================================== */}

          <div className="border-t border-white/10 px-6 py-3">
            <button
              type="submit"
              className="mx-auto flex h-11 w-full max-w-[520px] items-center justify-center gap-6 rounded-md bg-[#6156ff] px-7 text-[10px] font-semibold uppercase tracking-[0.18em] transition hover:bg-[#7066ff]"
            >
              Submit Your Inquiry
              <ArrowRight size={14} />
            </button>

            <p className="mt-2 text-center text-[9px] text-white/30">
              Your inquiry will be sent to RealSite {agency.city}.
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}

const inputClass =
  "h-10 w-full rounded-md border border-white/10 bg-[#0a0f1b] px-3 text-[12px] text-white outline-none transition placeholder:text-white/25 focus:border-[#6b60ff]";

function Field({
  label,
  name,
  placeholder,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  placeholder: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="text-[11px] text-white/80"
      >
        {label}

        {required && (
          <span className="text-[#766aff]"> *</span>
        )}
      </label>

      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        className={`${inputClass} mt-1.5`}
      />
    </div>
  );
}