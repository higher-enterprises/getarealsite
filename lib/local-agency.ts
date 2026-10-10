import type { Agency } from "@/data/agencies";

const STORAGE_KEY = "realsite-local-agency";

export function saveLocalAgency(agency: Agency) {
  if (typeof window === "undefined") {
    return;
  }

  window.localStorage.setItem(
    STORAGE_KEY,
    agency.id
  );

  window.dispatchEvent(
    new CustomEvent("realsite-agency-change", {
      detail: {
        agencyId: agency.id,
      },
    })
  );
}

export function getSavedLocalAgencyId() {
  if (typeof window === "undefined") {
    return null;
  }

  return window.localStorage.getItem(
    STORAGE_KEY
  );
}

export function clearLocalAgency() {
  if (typeof window === "undefined") {
    return;
  }

  window.localStorage.removeItem(
    STORAGE_KEY
  );

  window.dispatchEvent(
    new CustomEvent("realsite-agency-change", {
      detail: {
        agencyId: null,
      },
    })
  );
}