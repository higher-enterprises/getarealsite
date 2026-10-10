"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import {
  ChevronDown,
  Clock3,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

import type { Agency } from "@/data/agencies";

type DayKey =
  | "monday"
  | "tuesday"
  | "wednesday"
  | "thursday"
  | "friday"
  | "saturday"
  | "sunday";

type HoursRange = [string, string] | null;

type AgencyHours = {
  timezone: string;
  monday: HoursRange;
  tuesday: HoursRange;
  wednesday: HoursRange;
  thursday: HoursRange;
  friday: HoursRange;
  saturday: HoursRange;
  sunday: HoursRange;
};

type AgencyWithHours = Agency & {
  hours?: AgencyHours;
};

type AgencyTopHeaderProps = {
  agency: AgencyWithHours;
};

const orderedDays: DayKey[] = [
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
  "sunday",
];

const dayLabels: Record<DayKey, string> = {
  monday: "MONDAY",
  tuesday: "TUESDAY",
  wednesday: "WEDNESDAY",
  thursday: "THURSDAY",
  friday: "FRIDAY",
  saturday: "SATURDAY",
  sunday: "SUNDAY",
};

export default function AgencyTopHeader({
  agency,
}: AgencyTopHeaderProps) {
  const [hoursOpen, setHoursOpen] = useState(false);
  const [now, setNow] = useState(() => new Date());

  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setNow(new Date());
    }, 30_000);

    return () => {
      window.clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    function handleOutsideClick(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setHoursOpen(false);
      }
    }

    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setHoursOpen(false);
      }
    }

    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const phoneHref = agency.phone
    ? `tel:${agency.phone.replace(/[^\d+]/g, "")}`
    : undefined;

  const status = useMemo(() => {
    if (!agency.hours) {
      return {
        open: false,
        label: "CLOSED",
      };
    }

    const parts = new Intl.DateTimeFormat("en-US", {
      timeZone: agency.hours.timezone,
      weekday: "long",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    }).formatToParts(now);

    const weekday = parts
      .find((part) => part.type === "weekday")
      ?.value.toLowerCase() as DayKey | undefined;

    const hour = Number(
      parts.find((part) => part.type === "hour")?.value ?? 0
    );

    const minute = Number(
      parts.find((part) => part.type === "minute")?.value ?? 0
    );

    if (!weekday) {
      return {
        open: false,
        label: "CLOSED",
      };
    }

    const range = agency.hours[weekday];

    if (!range) {
      return {
        open: false,
        label: "CLOSED",
      };
    }

    const currentMinutes = hour * 60 + minute;

    const [openTime, closeTime] = range;

    const [openHour, openMinute] = openTime.split(":").map(Number);
    const [closeHour, closeMinute] = closeTime.split(":").map(Number);

    const openMinutes = openHour * 60 + openMinute;
    const closeMinutes = closeHour * 60 + closeMinute;

    const isOpen =
      currentMinutes >= openMinutes &&
      currentMinutes < closeMinutes;

    return {
      open: isOpen,
      label: isOpen ? "OPEN" : "CLOSED",
    };
  }, [agency.hours, now]);

  return (
   <div className="sticky top-0 z-[9999] w-full overflow-visible border-b border-white/[0.05] bg-[#000033]">     <div className="mx-auto flex h-[42px] max-w-[1800px] items-center justify-end px-6 lg:px-12">
        <div className="flex min-w-0 items-center divide-x divide-white/15 text-[10px] font-medium uppercase tracking-[0.18em]">
          {/* LOCATION */}

          <div className="flex items-center gap-2.5 px-4 first:pl-0">
            <MapPin
              size={16}
              strokeWidth={1.8}
              className="shrink-0 text-[#526cff]"
            />

            <span className="whitespace-nowrap text-[#526cff]">
    REALSITE
    <sup className="ml-[1px] text-[7px]">®</sup>{" "}
    OF {agency.city}, {agency.stateCode}
  </span>
          </div>

          {/* PHONE */}

          {agency.phone && phoneHref && (
            <div className="flex items-center gap-2.5 px-4">
              <Phone
                size={16}
                strokeWidth={1.8}
                className="shrink-0 text-[#526cff]"
              />

              <a
                href={phoneHref}
                className="whitespace-nowrap text-[#526cff] transition-colors hover:text-[#7488ff]"
              >
                {agency.phone}
              </a>
            </div>
          )}

          {/* EMAIL */}

          {agency.email && (
            <div className="flex items-center gap-2.5 px-4">
              <Mail
                size={16}
                strokeWidth={1.8}
                className="shrink-0 text-[#526cff]"
              />

              <a
                href={`mailto:${agency.email}`}
                className="whitespace-nowrap text-[#526cff] transition-colors hover:text-[#7488ff]"
              >
                {agency.email}
              </a>
            </div>
          )}

          {/* OPEN / CLOSED */}

          <div
            ref={dropdownRef}
            className="relative flex items-center px-4 pr-0"
          >
            <button
              type="button"
              onClick={() => setHoursOpen((current) => !current)}
              className="flex items-center gap-2.5 whitespace-nowrap text-[#526cff] transition-colors hover:text-[#7488ff]"
              aria-expanded={hoursOpen}
              aria-haspopup="menu"
              aria-label="View agency hours"
            >
              <Clock3
                size={17}
                strokeWidth={1.8}
                className="shrink-0"
              />

              <span className="font-medium tracking-[0.18em]">
                {status.label}
              </span>

              <ChevronDown
                size={14}
                strokeWidth={1.7}
                className={`shrink-0 transition-transform duration-200 ${
                  hoursOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* HOURS DROPDOWN */}

            {hoursOpen && agency.hours && (
              <div
                role="menu"
                className="absolute right-0 top-[32px] z-[250] w-[310px] overflow-hidden rounded-md border border-white/10 bg-[#0b1020] text-white shadow-2xl shadow-black/50"
              >
                <div className="border-b border-white/10 px-5 py-4">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#526cff]">
                    HOURS ({agency.city}, {agency.stateCode})
                  </p>
                </div>

                <div className="px-5 py-4">
                  <div className="space-y-3">
                    {orderedDays.map((day) => {
                      const range = agency.hours?.[day];

                      return (
                        <div
                          key={day}
                          className="flex items-center justify-between gap-8"
                        >
                          <span className="text-[10px] font-medium uppercase tracking-[0.12em] text-white/50">
                            {dayLabels[day]}
                          </span>

                          <span className="text-[11px] font-light tracking-normal text-white/80">
                            {range
                              ? `${formatTime(range[0])} – ${formatTime(
                                  range[1]
                                )}`
                              : "CLOSED"}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function formatTime(value: string) {
  const [hours, minutes] = value.split(":").map(Number);

  const date = new Date();
  date.setHours(hours, minutes, 0, 0);

  return new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  }).format(date);
}