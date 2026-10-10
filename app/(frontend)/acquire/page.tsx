"use client";

import Header from "@/components/navigation/navigation";
import Acquire from "@/components/acquire/acquire";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#030811] text-white">
      {/* =========================================================
          GLOBAL HERO NAVIGATION
      ========================================================= */}
      <div className="absolute inset-x-0 top-0 z-[1000]">
        <Header />
      </div>

      {/* =========================================================
          ACQUIRE PAGE CONTENT
          IMPORTANT:
          Do not constrain this wrapper to 100dvh. Acquire is a
          full multi-section page. Let its content establish the
          document height so the global footer renders after it.
      ========================================================= */}
      <Acquire />
    </main>
  );
}
