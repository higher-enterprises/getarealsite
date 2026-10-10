"use client";

export default function AcquireForm() {
  return (
    <div className="rounded-2xl border border-white/10 bg-black/40 p-10 backdrop-blur-xl">

      <p className="text-sm uppercase tracking-[.3em] text-indigo-400">
        Private Acquisition Network
      </p>

      <h2 className="mt-5 text-5xl font-light leading-tight">
        Tell us what
        <br />
        you're looking for.
      </h2>

      <p className="mt-8 text-lg leading-8 text-white/65">
        Serious inquiries only. Every submission is reviewed before access is
        granted to available opportunities.
      </p>

      <div className="mt-10 space-y-4">

        <input
          placeholder="Full Name"
          className="w-full rounded-lg border border-white/10 bg-white/5 p-4 outline-none transition focus:border-indigo-500"
        />

        <input
          placeholder="Email Address"
          className="w-full rounded-lg border border-white/10 bg-white/5 p-4 outline-none transition focus:border-indigo-500"
        />

        <input
          placeholder="Phone Number"
          className="w-full rounded-lg border border-white/10 bg-white/5 p-4 outline-none transition focus:border-indigo-500"
        />

        <input
          placeholder="Company"
          className="w-full rounded-lg border border-white/10 bg-white/5 p-4 outline-none transition focus:border-indigo-500"
        />

        <select className="w-full rounded-lg border border-white/10 bg-white/5 p-4">

          <option>
            What type of business interests you?
          </option>

          <option>Website</option>
          <option>Blog</option>
          <option>Ecommerce</option>
          <option>SaaS</option>
          <option>Marketplace</option>

        </select>

        <textarea
          rows={5}
          placeholder="Tell us about your acquisition goals..."
          className="w-full rounded-lg border border-white/10 bg-white/5 p-4 outline-none transition focus:border-indigo-500"
        />

      </div>

      <label className="mt-8 flex items-center gap-3 text-sm text-white/70">

        <input type="checkbox" />

        I understand opportunities are confidential.

      </label>

      <button className="mt-8 w-full rounded-xl bg-indigo-600 py-5 font-medium tracking-wide transition hover:bg-indigo-500">

        Join Acquisition Network

      </button>

      <p className="mt-6 text-center text-sm text-white/50">
        🔒 Your information is never shared.
      </p>

    </div>
  );
}