"use client";
import {
  useEffect,
  useRef,
  useState,
} from "react";
import Image from "next/image";
import Link from "next/link";
import {
  agencies,
  findAgencyById,
  getNearestAgencies,
  type Agency,
} from "@/data/agencies";
import {
  getSavedLocalAgencyId,
  saveLocalAgency,
} from "@/lib/local-agency";
type Menu = "location";
type NavItem = {
  menu: string;
  label: string;
  href: string;
};
const navItems: NavItem[] = [
  {
    menu: "domainsites",
    label: "DOMAINSITES",
    href: "/domainsites",
  },
  {
    menu: "startersites",
    label: "STARTERSITES",
    href: "/startersites",
  },
  {
    menu: "websites",
    label: "WEBSITES",
    href: "/websites",
  },
  // {
  //   menu: "purchase",
  //   label: "PURCHASE",
  //   href: "/purchase",
  // },
  // {
  //   menu: "acquire",
  //   label: "ACQUIRE",
  //   href: "/acquire",
  // },
  // {
  //   menu: "expand",
  //   label: "EXPAND",
  //   href: "/expand",
  // },
  //    {
  //   menu: "create",
  //   label: "CREATE",
  //   href: "/create",
  // },
    {
    menu: "realsites",
    label: "REALSITES",
    href: "/realsites",
  },
  {
    menu: "venturesites",
    label: "VENTURESITES",
    href: "/venturesites",
  },
  // {
  //   menu: "reach",
  //   label: "REACH",
  //   href: "/reach",
  // },
  //   {
  //   menu: "work",
  //   label: "WORK",
  //   href: "/work",
  // },
];
export default function Navigation() {
  const [activeMenu, setActiveMenu] =
    useState<Menu | null>(null);
  const [showMenu, setShowMenu] =
    useState(false);
  const [localAgency, setLocalAgency] =
    useState<Agency | null>(null);
  const [locationStatus, setLocationStatus] =
    useState<
      "idle" | "locating" | "found" | "unavailable"
    >("idle");
  const timeout =
    useRef<ReturnType<
      typeof setTimeout
    > | null>(null);
  const navItem =
    "text-xs uppercase tracking-[.28em] transition-colors duration-200";
  /* ==========================================================
     MENU CONTROL
  ========================================================== */
  function clearCloseTimer() {
    if (timeout.current) {
      clearTimeout(timeout.current);
      timeout.current = null;
    }
  }
  function open(menu: Menu) {
    clearCloseTimer();
    setActiveMenu(menu);
    setShowMenu(true);
  }
  function close() {
    clearCloseTimer();
    timeout.current = setTimeout(() => {
      setShowMenu(false);
      timeout.current = setTimeout(() => {
        setActiveMenu(null);
      }, 200);
    }, 150);
  }
  /* ==========================================================
     SET AGENCY
  ========================================================== */
  function selectAgency(agency: Agency) {
    setLocalAgency(agency);
    setLocationStatus("found");
    saveLocalAgency(agency);
  }
  /* ==========================================================
     LOAD PREVIOUSLY SELECTED AGENCY
  ========================================================== */
  useEffect(() => {
    const savedAgencyId =
      getSavedLocalAgencyId();
    if (!savedAgencyId) {
      return;
    }
    const savedAgency =
      findAgencyById(savedAgencyId);
    if (savedAgency) {
      setLocalAgency(savedAgency);
      setLocationStatus("found");
    }
  }, []);
  /* ==========================================================
     LISTEN FOR AGENCY CHANGES
  ========================================================== */
  useEffect(() => {
    function handleAgencyChange(
      event: Event
    ) {
      const customEvent =
        event as CustomEvent<{
          agencyId: string | null;
        }>;
      const agencyId =
        customEvent.detail?.agencyId;
      if (!agencyId) {
        setLocalAgency(null);
        return;
      }
      const agency =
        findAgencyById(agencyId);
      if (agency) {
        setLocalAgency(agency);
      }
    }
    window.addEventListener(
      "realsite-agency-change",
      handleAgencyChange
    );
    return () => {
      window.removeEventListener(
        "realsite-agency-change",
        handleAgencyChange
      );
    };
  }, []);
  /* ==========================================================
     ATTEMPT LOCATION
     This only runs if browser permission has already been
     granted. It does NOT force a location permission popup
     when the visitor lands on the website.
  ========================================================== */
  useEffect(() => {
    if (localAgency) {
      return;
    }
    if (
      typeof navigator === "undefined" ||
      !navigator.geolocation
    ) {
      return;
    }
    async function attemptKnownLocation() {
      try {
        if (!navigator.permissions) {
          return;
        }
        const permission =
          await navigator.permissions.query({
            name: "geolocation",
          });
        if (
          permission.state !== "granted"
        ) {
          return;
        }
        setLocationStatus("locating");
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const nearest =
              getNearestAgencies(
                position.coords.latitude,
                position.coords.longitude
              );
            if (!nearest.length) {
              setLocationStatus(
                "unavailable"
              );
              return;
            }
            selectAgency(
              nearest[0].agency
            );
          },
          () => {
            setLocationStatus(
              "unavailable"
            );
          },
          {
            enableHighAccuracy: false,
            timeout: 8000,
            maximumAge: 300000,
          }
        );
      } catch {
        // Browser does not support Permissions API
        // or permission status cannot be queried.
      }
    }
    attemptKnownLocation();
  }, [localAgency]);
  /* ==========================================================
     CLEANUP
  ========================================================== */
  useEffect(() => {
    return () => {
      clearCloseTimer();
    };
  }, []);
  /* ==========================================================
     LOCATION LABEL
  ========================================================== */
  const locationLabel =
    localAgency
      ? `A ${localAgency.city}, ${localAgency.stateCode} DIGITAL AGENCY`
      : locationStatus === "locating"
        ? "LOCATING YOUR DIGITAL AGENCY..."
        : "YOUR LOCAL DIGITAL AGENCY";
  return (
    <header
      className="
        sticky
        top-0
        z-[999]
        h-24
        pt-4
        bg-transparent
      "
      onMouseLeave={close}
    >
      <div
        className="
          relative
          mx-auto
          grid
          h-24
          grid-cols-[1fr_auto]
          items-center
          px-6
          sm:px-10
          lg:grid-cols-[minmax(250px,1fr)_auto_minmax(210px,1fr)]
          lg:px-14
          xl:grid-cols-[minmax(285px,1fr)_auto_minmax(235px,1fr)]
          xl:px-16
        "
      >
        {/* =====================================================
            BRAND + LOCAL DIGITAL AGENCY
        ===================================================== */}
        <div
          className="
            relative
            z-10
            flex
            flex-col
            items-center
            justify-self-start
          "
        >
          {/* LOGO */}
          <Link
            href="/"
            aria-label="Realsite home"
            className="
              relative
              flex
              shrink-0
              items-center
              justify-center
            "
          >
            <Image
              src="/images/branding/realsite-signature-logo.png"
              alt="Realsite"
              width={280}
              height={106}
              priority
              className="
                h-auto
                w-[185px]
                object-contain
                sm:w-[195px]
                xl:w-[205px]
              "
            />
          </Link>
          {/* LOCAL AGENCY SELECTOR */}
          <button
            type="button"
            onMouseEnter={() =>
              open("location")
            }
            onFocus={() =>
              open("location")
            }
            onClick={() =>
              open("location")
            }
            aria-expanded={
              activeMenu === "location" &&
              showMenu
            }
            className={`
              -mt-1
              flex
              w-full
              items-center
              justify-center
              gap-1.5
              whitespace-nowrap
              text-center
              text-[9px]
              font-medium
              uppercase
              tracking-[.12em]
              transition-colors
              duration-200
              ${
                activeMenu === "location"
                  ? "text-[#536cff]"
                  : "text-white/55 hover:text-white"
              }
            `}
          >
            {/* LOCATION ICON */}
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
              className="
                shrink-0
                text-[#536cff]
              "
            >
              <path
                d="
                  M12 21
                  s6-5.1 6-11
                  a6 6 0 1 0-12 0
                  c0 5.9 6 11 6 11Z
                "
              />
              <circle
                cx="12"
                cy="10"
                r="2"
              />
            </svg>
            <span>
              {locationLabel}
            </span>
            {/* CHEVRON */}
            <svg
              width="10"
              height="10"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
              className={`
                transition-transform
                duration-200
                ${
                  activeMenu ===
                    "location" &&
                  showMenu
                    ? "rotate-180"
                    : ""
                }
              `}
            >
              <polyline
                points="6 9 12 15 18 9"
              />
            </svg>
          </button>
        </div>
        {/* =====================================================
            MAIN NAV
        ===================================================== */}
        <nav
          className="
            hidden
            items-center
            justify-center
            gap-8
            self-center
            lg:flex
          "
        >
          {navItems.map(
            (item) => (
              <Link
                key={item.menu}
                href={item.href}
                className={`
                  group
                  ${navItem}
                  whitespace-nowrap
                  text-white/70 hover:text-white
                `}
              >
                <span>
                  <span className="transition-colors duration-200 group-hover:text-[#536cff]">
                    {item.label.replace("SITES", "")}
                  </span>
                  SITES
                </span>
              </Link>
            )
          )}
        </nav>
        {/* =====================================================
            CTA
        ===================================================== */}
        <Link
          href="/getarealsite"
          className="
            relative
            z-10
            justify-self-end
            whitespace-nowrap
            rounded-lg
            bg-[#5750f6]
            px-6
            py-3
            text-[11px]
            font-medium
            uppercase
            tracking-[.24em]
            text-white
            shadow-[0_12px_35px_rgba(87,80,246,.25)]
            transition
            hover:bg-[#665fff]
          "
        >
          GET A REAL SITE
        </Link>
      </div>
      {/* =====================================================
          MEGA MENU
      ===================================================== */}
      <div
        className={`
          absolute
          left-0
          top-full
          z-[1400]
          w-full
          transition-all
          duration-300
          ${
            showMenu
              ? "pointer-events-auto translate-y-0 opacity-100"
              : "pointer-events-none -translate-y-4 opacity-0"
          }
        `}
        onMouseEnter={
          clearCloseTimer
        }
        onMouseLeave={close}
      >
        <div className="px-6 pb-6">
          <div
            className="
              overflow-hidden
              rounded-2xl
              bg-[linear-gradient(180deg,rgba(5,9,24,0.98)_0%,rgba(8,20,67,0.97)_45%,rgba(38,67,205,0.94)_100%)]
              shadow-2xl
              backdrop-blur-md
            "
          >
          </div>
        </div>
      </div>
    </header>
  );
}
