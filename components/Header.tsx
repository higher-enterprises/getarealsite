import Link from "next/link";
import Logo from "./Logo";

const nav = ["Plan", "Build", "Purchase", "Acquire", "Expand", "Manage", "Reach"];

export default function Header() {
  return (
    <header className="site-header">
      <Logo />
      <nav className="main-nav" aria-label="Primary">
        {nav.map((item) => (
          <Link key={item} href={`/${item.toLowerCase()}`}>{item.toUpperCase()}</Link>
        ))}
      </nav>
      <Link href="/locations" className="primary-button compact">GET A REAL SITE <span>→</span></Link>
    </header>
  );
}
