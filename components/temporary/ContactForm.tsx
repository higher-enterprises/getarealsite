"use client";
import { useState, type FormEvent } from "react";
export default function ContactForm() {
  const [status,setStatus] = useState<"idle"|"sending"|"success"|"error">("idle");
  async function submit(e:FormEvent<HTMLFormElement>) {
    e.preventDefault(); setStatus("sending");
    const form=e.currentTarget;
    const values=Object.fromEntries(new FormData(form).entries());
    try { const res=await fetch("/api/contact",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(values)});if(!res.ok)throw new Error("Contact service unavailable");setStatus("success");form.reset(); }
    catch {setStatus("error");}
  }
  const field="w-full rounded border border-[#285080]/70 bg-[#09182b] px-4 py-3 text-sm text-white outline-none placeholder:text-white/35 focus:border-[#398aff]";
  return <form onSubmit={submit} className="rounded-xl border border-[#2059a2]/50 bg-[#04101e]/95 p-6 sm:p-8" aria-label="Contact RealSite">
    <div className="grid gap-4 sm:grid-cols-2"><label className="text-xs text-white/70">Full Name *<input name="name" required maxLength={120} placeholder="Your name" className={`mt-2 ${field}`}/></label><label className="text-xs text-white/70">Email Address *<input type="email" name="email" required maxLength={200} placeholder="you@company.com" className={`mt-2 ${field}`}/></label><label className="text-xs text-white/70">Phone<input type="tel" name="phone" maxLength={40} placeholder="(555) 555-5555" className={`mt-2 ${field}`}/></label><label className="text-xs text-white/70">Company<input name="company" maxLength={120} placeholder="Company name" className={`mt-2 ${field}`}/></label></div>
    <label className="mt-4 block text-xs text-white/70">Project Type<select name="projectType" defaultValue="" className={`mt-2 ${field}`}><option value="">Select a project type</option>{["DOMAINSITES","STARTERSITES","WEBSITES","REALSITES","VENTURESITES","OTHER"].map(x=><option key={x}>{x}</option>)}</select></label>
    <label className="mt-4 block text-xs text-white/70">Tell Us About Your Project *<textarea name="message" required minLength={10} maxLength={5000} rows={4} placeholder="What are you looking to build?" className={`mt-2 resize-y ${field}`}/></label>
    <button type="submit" disabled={status==="sending"} className="mt-5 w-full rounded bg-[#2865f4] px-5 py-4 text-xs font-semibold uppercase tracking-[.17em] text-white transition-colors hover:bg-[#3b7cff] disabled:opacity-60">{status==="sending"?"Sending…":"Send Message →"}</button>
    {status==="success"&&<p role="status" className="mt-3 text-sm text-[#83b9ff]">Your message has been received.</p>}{status==="error"&&<p role="alert" className="mt-3 text-sm text-red-300">Unable to send right now. Please try again later.</p>}
  </form>;
}
