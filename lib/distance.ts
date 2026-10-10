import type { Agency } from "@/data/agencies";

export type Coordinates = { latitude: number; longitude: number };

export function milesBetween(a: Coordinates, b: Coordinates) {
  const toRad = (degrees: number) => (degrees * Math.PI) / 180;
  const earthRadiusMiles = 3958.7613;
  const dLat = toRad(b.latitude - a.latitude);
  const dLng = toRad(b.longitude - a.longitude);
  const lat1 = toRad(a.latitude);
  const lat2 = toRad(b.latitude);
  const h =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLng / 2) ** 2;
  return 2 * earthRadiusMiles * Math.asin(Math.sqrt(h));
}

export function rankAgencies(origin: Coordinates, agencies: Agency[]) {
  return agencies
    .map((agency) => ({
      agency,
      distanceMiles: milesBetween(origin, {
        latitude: agency.latitude,
        longitude: agency.longitude,
      }),
    }))
    .sort((a, b) => a.distanceMiles - b.distanceMiles);
}
