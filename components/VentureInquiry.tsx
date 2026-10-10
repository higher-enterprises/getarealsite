"use client";

import { useMemo, useState } from "react";
import styles from "./VentureInquiry.module.css";

type VentureType = "CommunityVenture" | "SchoolVenture" | "MarketplaceVenture" | "PortalVenture" | "EventVenture" | "FundraisingVenture" | "CustomVenture";
type Inquiry = {
  name: string; email: string; phone: string; organization: string; role: string;
  projectName: string; website: string; ventureType: VentureType | "";
  description: string; audience: string; problem: string; features: string[];
  stage: string; budget: string; timeline: string; funding: string;
  references: string; notes: string; consent: boolean;
};

export type VentureInquiryPayload = Inquiry & { submittedAt: string };
export type VentureInquiryProps = {
  onSubmit?: (data: VentureInquiryPayload) => Promise<void> | void;
  title?: string;
  defaultVentureType?: VentureType;
  className?: string;
};

const types: VentureType[] = ["CommunityVenture", "SchoolVenture", "MarketplaceVenture", "PortalVenture", "EventVenture", "FundraisingVenture", "CustomVenture"];
const capabilities = ["Accounts & profiles", "Memberships / subscriptions", "Payments & checkout", "Booking & scheduling", "Vendor / provider management", "Messaging & notifications", "Content management", "Courses & learning", "Ticketing & registration", "Donations & campaigns", "Dashboards & reporting", "Integrations / APIs", "Mobile app", "AI-powered features", "Not sure yet"];
const initial: Inquiry = { name:"", email:"", phone:"", organization:"", role:"", projectName:"", website:"", ventureType:"", description:"", audience:"", problem:"", features:[], stage:"", budget:"", timeline:"", funding:"", references:"", notes:"", consent:false };
const steps = ["Project details", "Platform & features", "Budget & timeline", "Review & submit"];

export default function VentureInquiry({ onSubmit, title = "Let’s build your venture.", defaultVentureType, className = "" }: VentureInquiryProps) {
  const [step, setStep] = useState(0);
  const [data, setData] = useState<Inquiry>({ ...initial, ventureType: defaultVentureType || "" });
  const [error, setError] = useState("");
  const [sending, setSending] = useState(false);
  const [done, setDone] = useState(false);
  const [showSummary, setShowSummary] = useState(false);
  const update = <K extends keyof Inquiry>(key: K, value: Inquiry[K]) => setData(prev => ({ ...prev, [key]: value }));
  const toggleFeature = (feature: string) => update("features", data.features.includes(feature) ? data.features.filter(f => f !== feature) : [...data.features, feature]);
  const progress = useMemo(() => `${((step + 1) / steps.length) * 100}%`, [step]);

  function validate(index: number) {
    if (index === 0 && (!data.name.trim() || !/^\S+@\S+\.\S+$/.test(data.email) || !data.projectName.trim())) return "Please enter your name, a valid email, and your project name.";
    if (index === 1 && (!data.ventureType || !data.description.trim())) return "Choose a Venture type and describe what you want to build.";
    if (index === 2 && (!data.budget || !data.timeline || !data.stage)) return "Choose your project stage, budget, and timeline.";
    if (index === 3 && !data.consent) return "Please confirm that we may contact you about this inquiry.";
    return "";
  }
  function next() { const message = validate(step); if (message) { setError(message); return; } setError(""); setStep(v => Math.min(3, v + 1)); }
  async function submit() {
    const message = validate(3); if (message) { setError(message); return; }
    if (!onSubmit) { setError("Submission is not connected yet. Pass an onSubmit handler to send inquiries to your server."); return; }
    setSending(true); setError("");
    try { await onSubmit({ ...data, submittedAt: new Date().toISOString() }); setDone(true); }
    catch { setError("We couldn't send your inquiry. Please try again."); }
    finally { setSending(false); }
  }
  const field = (label: string, key: keyof Inquiry, placeholder = "", required = false, type = "text") => (
    <label className={styles.field}><span>{label}{required && <em> *</em>}</span><input type={type} value={String(data[key])} onChange={e => update(key as keyof Inquiry, e.target.value as never)} placeholder={placeholder} /></label>
  );
  const select = (label: string, key: keyof Inquiry, options: string[], required = false) => (
    <label className={styles.field}><span>{label}{required && <em> *</em>}</span><select value={String(data[key])} onChange={e => update(key as keyof Inquiry, e.target.value as never)}><option value="">Select an option</option>{options.map(option => <option key={option} value={option}>{option}</option>)}</select></label>
  );
  const area = (label: string, key: keyof Inquiry, placeholder: string, required = false) => (
    <label className={`${styles.field} ${styles.full}`}><span>{label}{required && <em> *</em>}</span><textarea rows={4} value={String(data[key])} onChange={e => update(key as keyof Inquiry, e.target.value as never)} placeholder={placeholder}/></label>
  );

  return <section id="venture-inquiry" className={`${styles.section} ${className}`} aria-label="VentureSite inquiry">
    <div className={styles.shell}>
      <aside className={styles.intro}>
        <p className={styles.eyebrow}>START YOUR VENTURESITE</p>
        <h2>{title.includes("venture") ? <>Let’s build your <strong>venture.</strong></> : title}</h2>
        <p>Tell us what you’re imagining. We’ll help define the platform, identify the right foundation, and map a practical path from concept to launch.</p>
        <div className={styles.introRule}/>
        <div className={styles.benefits}><span>01 <b>Tailored recommendations</b></span><span>02 <b>Scope before pricing</b></span><span>03 <b>Clear next steps</b></span></div>
        <p className={styles.micro}>No obligation. Your information is used to respond to your inquiry.</p>
      </aside>
      <div className={styles.panel}>
        {done ? <div className={styles.success}><span className={styles.successIcon}>✓</span><h3>Inquiry received.</h3><p>Thank you for sharing your project. We’ll review the details and follow up using the contact information provided.</p></div> : <>
          <div className={styles.stepHeader}><span>PROJECT INQUIRY</span><span>STEP {String(step + 1).padStart(2,"0")} / 04</span></div>
          <div className={styles.progress}><span style={{width: progress}} /></div>
          <div className={styles.steps}>{steps.map((name, index) => <button type="button" key={name} className={`${styles.step} ${index === step ? styles.current : ""} ${index < step ? styles.complete : ""}`} onClick={() => { if (index < step) { setStep(index); setError(""); } }}><span>{index < step ? "✓" : index + 1}</span><small>{name}</small></button>)}</div>
          <div className={styles.content}>
            {step === 0 && <><h3>Tell us about your idea.</h3><p className={styles.hint}>Start with the people behind the venture and the concept you want to bring to life.</p><div className={styles.fields}>{field("Your name", "name", "Full name", true)}{field("Email address", "email", "you@company.com", true, "email")}{field("Phone (optional)", "phone", "Phone number", false, "tel")}{field("Organization (optional)", "organization", "Company or organization")}{field("Your role (optional)", "role", "Founder, director, etc.")}{field("Project name", "projectName", "Your venture’s working name", true)}{field("Existing website (optional)", "website", "https://")}</div></>}
            {step === 1 && <><h3>What are we building?</h3><p className={styles.hint}>Choose the closest foundation. The final solution can combine capabilities across categories.</p><div className={styles.fields}>{select("Venture type", "ventureType", types, true)}{field("Who will use it?", "audience", "Customers, members, vendors, students...")}{area("Describe your platform", "description", "What should it do? How would someone use it?", true)}{area("What problem does it solve?", "problem", "What changes for your users when it exists?")}</div><h4>Capabilities you may need</h4><div className={styles.capabilities}>{capabilities.map(item => <label key={item} className={data.features.includes(item) ? styles.chosen : ""}><input type="checkbox" checked={data.features.includes(item)} onChange={() => toggleFeature(item)}/>{item}</label>)}</div></>}
            {step === 2 && <><h3>Let’s talk scope.</h3><p className={styles.hint}>These answers help us recommend a realistic starting point. They aren’t a commitment.</p><div className={styles.fields}>{select("Current stage", "stage", ["Idea / discovery", "Planning / validating", "Designs or prototype exist", "Already launched", "Replacing / rebuilding an existing platform"], true)}{select("Estimated project budget (USD)", "budget", ["Under $5,000", "$5,000–$9,999", "$10,000–$24,999", "$25,000–$49,999", "$50,000–$99,999", "$100,000+", "Need help determining a budget"], true)}{select("Ideal launch timeline", "timeline", ["As soon as possible", "Within 1–3 months", "Within 3–6 months", "Within 6–12 months", "Flexible / exploring"], true)}{select("Funding status (optional)", "funding", ["Self-funded", "Business / organization funded", "Investor-backed", "Seeking funding", "Grant / nonprofit funding", "Prefer not to say"])}{area("Inspiration or reference platforms (optional)", "references", "Links or examples of products you admire")}{area("Anything else we should know? (optional)", "notes", "Key constraints, integrations, stakeholders, or questions")}</div></>}
            {step === 3 && <><h3>Review your inquiry.</h3><p className={styles.hint}>Check the essentials before sending.</p><dl className={styles.review}><div><dt>Contact</dt><dd>{data.name}<br/>{data.email}</dd></div><div><dt>Project</dt><dd>{data.projectName}<br/>{data.ventureType}</dd></div><div><dt>Concept</dt><dd>{data.description}</dd></div><div><dt>Capabilities</dt><dd>{data.features.length ? data.features.join(" · ") : "To be determined"}</dd></div><div><dt>Scope</dt><dd>{data.stage}<br/>{data.budget}<br/>{data.timeline}</dd></div></dl><label className={styles.consent}><input type="checkbox" checked={data.consent} onChange={e => update("consent", e.target.checked)}/><span>I agree to be contacted about my VentureSite inquiry.</span></label><button type="button" className={styles.detailsToggle} onClick={() => setShowSummary(v => !v)}>{showSummary ? "Hide" : "Show"} additional details</button>{showSummary && <pre className={styles.raw}>{JSON.stringify(data, null, 2)}</pre>}</>}
            {error && <p className={styles.error} role="alert">{error}</p>}
            <div className={styles.actions}>{step > 0 && <button type="button" className={styles.back} onClick={() => {setStep(s => s - 1); setError("");}}>← Back</button>}<button type="button" className={styles.next} disabled={sending} onClick={step === 3 ? submit : next}>{sending ? "SENDING..." : step === 3 ? "SUBMIT INQUIRY →" : "CONTINUE →"}</button></div>
          </div>
        </>}
      </div>
    </div>
  </section>;
}
