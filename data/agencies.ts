export type DayKey =
  | "monday"
  | "tuesday"
  | "wednesday"
  | "thursday"
  | "friday"
  | "saturday"
  | "sunday";

export type HoursRange = [string, string] | null;

export type AgencyHours = {
  timezone: string;

  monday: HoursRange;
  tuesday: HoursRange;
  wednesday: HoursRange;
  thursday: HoursRange;
  friday: HoursRange;
  saturday: HoursRange;
  sunday: HoursRange;
};

export type Agency = {
  id: string;

  name: string;

  city: string;
  state: string;
  stateCode: string;
  postalCode?: string;

  country: string;
  countryCode: string;

  latitude: number;
  longitude: number;

  slug: string;

  address?: string;
  phone?: string;
  email?: string;

  description?: string;

  areasServed?: string[];
status: "open" | "opening-soon";
  hours?: AgencyHours;
  heroImage?: string;

};

export const agencies: Agency[] = [
  {
    id: "us-ca-rocklin",
status: "opening-soon",
    name: "REALSITE Rocklin",

    city: "Rocklin",
    state: "California",
    stateCode: "CA",
    postalCode: "95677",

    country: "United States",
    countryCode: "US",

    latitude: 38.8916,
    longitude: -121.293,

    slug: "/locations/us/ca/rocklin",

    address: "6518 Lonetree Boulevard Suite #2055",
    phone: "(916) 404-8373",
    email: "rocklin.ca@getarealsite.com",

    description:
      "Your local RealSite digital agency serving businesses in Rocklin and the surrounding communities.",

    areasServed: [
      "Rocklin",
      "Lincoln",
      "Roseville",
      "Loomis",
      "Granite Bay",
      "Auburn",
    ],

    hours: {
      timezone: "America/Los_Angeles",

      monday: ["09:00", "17:00"],
      tuesday: ["09:00", "17:00"],
      wednesday: ["09:00", "17:00"],
      thursday: ["09:00", "17:00"],
      friday: ["09:00", "17:00"],

      saturday: null,
      sunday: null,
    },
  },

  /*
   * Add additional VERIFIED physical agency locations here.
   *
   * Example:
   *
   * {
   *   id: "us-ca-example",
   *   name: "REALSITE Example",
   *   city: "Example",
   *   state: "California",
   *   stateCode: "CA",
   *   postalCode: "",
   *   country: "United States",
   *   countryCode: "US",
   *   latitude: 0,
   *   longitude: 0,
   *   slug: "/locations/us/ca/example",
   *   address: "",
   *   phone: "",
   *   email: "",
   *   description: "",
   *   areasServed: [
   *     "Example",
   *     "Nearby City",
   *     "Another Nearby City",
   *   ],
   *   hours: {
   *     timezone: "America/Los_Angeles",
   *     monday: ["09:00", "17:00"],
   *     tuesday: ["09:00", "17:00"],
   *     wednesday: ["09:00", "17:00"],
   *     thursday: ["09:00", "17:00"],
   *     friday: ["09:00", "17:00"],
   *     saturday: null,
   *     sunday: null,
   *   },
   * }
   */
];

/* ============================================================
   FIND AGENCY
============================================================ */

export function findAgency(value: string) {
  const normalized = value.toLowerCase().trim();

  return agencies.find((agency) => {
    return (
      agency.id.toLowerCase() === normalized ||
      agency.name.toLowerCase() === normalized ||
      agency.city.toLowerCase() === normalized ||
      agency.slug.toLowerCase() === normalized
    );
  });
}

/* ============================================================
   FIND BY ID
============================================================ */

export function findAgencyById(id: string) {
  return agencies.find((agency) => agency.id === id);
}

/* ============================================================
   FIND BY SLUG
============================================================ */

export function findAgencyBySlug(slug: string) {
  return agencies.find((agency) => agency.slug === slug);
}

/* ============================================================
   FIND BY LOCATION
============================================================ */

export function findAgencyByLocation({
  countryCode,
  stateCode,
  city,
}: {
  countryCode: string;
  stateCode: string;
  city: string;
}) {
  return agencies.find(
    (agency) =>
      agency.countryCode.toLowerCase() === countryCode.toLowerCase() &&
      agency.stateCode.toLowerCase() === stateCode.toLowerCase() &&
      agency.city.toLowerCase() === city.toLowerCase()
  );
}

/* ============================================================
   FIND AGENCY SERVING AREA
============================================================ */

export function findAgencyServingArea(area: string) {
  const normalized = area.toLowerCase().trim();

  return agencies.find((agency) =>
    agency.areasServed?.some(
      (servedArea) => servedArea.toLowerCase() === normalized
    )
  );
}

/* ============================================================
   DISTANCE
============================================================ */

export function calculateDistanceMiles(
  latitude1: number,
  longitude1: number,
  latitude2: number,
  longitude2: number
) {
  const earthRadiusMiles = 3958.8;

  const toRadians = (degrees: number) =>
    degrees * (Math.PI / 180);

  const dLat = toRadians(latitude2 - latitude1);
  const dLon = toRadians(longitude2 - longitude1);

  const lat1 = toRadians(latitude1);
  const lat2 = toRadians(latitude2);

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.sin(dLon / 2) *
      Math.sin(dLon / 2) *
      Math.cos(lat1) *
      Math.cos(lat2);

  const c =
    2 *
    Math.atan2(
      Math.sqrt(a),
      Math.sqrt(1 - a)
    );

  return earthRadiusMiles * c;
}

/* ============================================================
   NEAREST AGENCIES
============================================================ */

export function getNearestAgencies(
  latitude: number,
  longitude: number
) {
  return agencies
    .map((agency) => ({
      agency,

      distance: calculateDistanceMiles(
        latitude,
        longitude,
        agency.latitude,
        agency.longitude
      ),
    }))
    .sort((a, b) => a.distance - b.distance);
}