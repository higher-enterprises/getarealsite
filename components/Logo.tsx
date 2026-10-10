import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/locations" className="logo" aria-label="RealSite locations home">
      <span className="logo-word">REALSITE</span>
      <span className="logo-signature">real</span>
    </Link>
  );
}
