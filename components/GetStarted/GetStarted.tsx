"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FileText, MapPin, MessagesSquare, CalendarDays, ArrowUpRight, ArrowRight } from "lucide-react";
import styles from "./GetStarted.module.css";

type Props = { chatAvailable?: boolean; chatHref?: string; scheduleHref?: string };
const choices = [
  { label: "Submit an Inquiry", eyebrow: "OPTION 1", icon: FileText, description: "Tell us about your business and project. We'll take it from there.", action: "Get started", href: "/getarealsite/inquiry" },
  { label: "Find an Agency", eyebrow: "OPTION 2", icon: MapPin, description: "Connect directly with a RealSite agency serving your area.", action: "Explore locations", href: "/locations" },
  { label: "Live Chat", eyebrow: "OPTION 3", icon: MessagesSquare, description: "Have a quick question? Talk with our team in real time.", action: "Start a conversation", href: "" },
  { label: "Schedule a Call", eyebrow: "OPTION 4", icon: CalendarDays, description: "Book a conversation with a RealSite representative at a time that works for you.", action: "View availability", href: "" },
];
export default function GetStartedPage({ chatAvailable = false, chatHref, scheduleHref }: Props) {
  const [chatNotice, setChatNotice] = useState(false);
  return (
    <main className={styles.page}>
      {/* The global SiteHeader and SiteFooter should come from your existing layout. */}
      <section className={styles.hero} aria-labelledby="get-started-heading">
        <div className={styles.atmosphere} aria-hidden="true" />
        <div className={styles.heroInner}>
          <div className={styles.intro}>
            <p className={styles.eyebrow}>GET STARTED</p>
            <h1 id="get-started-heading">Let's get you<br />a <span>real site.</span></h1>
            <p className={styles.description}>Choose how you'd like to connect with RealSite. Whether you're ready to start a project, looking for a local agency, need a quick answer, or want to schedule a call — we're here to help.</p>
          </div>
          <div className={styles.portrait} aria-hidden="true">
            <Image src="/images/get-started/hero-woman-reference.png" alt="" fill priority sizes="(max-width: 800px) 80vw, 44vw" className={styles.portraitImage} />
          </div>
          <div className={styles.choices}>
            {choices.map((choice, index) => {
              const Icon = choice.icon;
              const isChat = index === 2;
              const disabledChat = isChat && (!chatAvailable || !chatHref);
              const target = isChat ? (chatAvailable ? chatHref : undefined) : index === 3 ? scheduleHref : choice.href;
              const content = <>
                <Icon className={styles.choiceIcon} strokeWidth={1.65} aria-hidden="true" />
                <div className={styles.optionRow}><span>{choice.eyebrow}</span>{isChat && <span className={chatAvailable && chatHref ? styles.online : styles.offline}>{chatAvailable && chatHref ? "Online" : "Offline"}</span>}</div>
                <h2>{choice.label}</h2>
                <p>{choice.description}</p>
                <div className={styles.action}><span>{disabledChat ? "Leave an inquiry" : choice.action}</span><span className={styles.arrow}><ArrowRight size={20} /></span></div>
              </>;
              return target ? <Link href={target} key={choice.label} className={`${styles.choice} ${index === 0 ? styles.primary : ""}`}>{content}</Link> : <button type="button" key={choice.label} className={`${styles.choice} ${index === 0 ? styles.primary : ""}`} onClick={() => { if (disabledChat) window.location.assign("/get-started/inquiry"); else setChatNotice(true); }}>{content}</button>;
            })}
          </div>
          {chatNotice && <p className={styles.notice} role="status">Chat is not connected yet. Configure the chat URL to enable it.</p>}
        </div>
      </section>
    </main>
  );
}
