"use client";

import Link from "next/link";
import { FormEvent, useCallback, useMemo, useState } from "react";
import { agencies, type Agency } from "@/data/agencies";
import { rankAgencies, type Coordinates } from "@/lib/distance";
import AgencyMap from "./AgencyMap";

type RankedAgency = { agency: Agency; distanceMiles: number };

const defaultOrigin: Coordinates = { latitude: 38.8916, longitude: -121.2930 };

export default function LocatorClient() {
  const [query, setQuery] = useState("");
  const [origin, setOrigin] = useState<Coordinates>(defaultOrigin);
  const [locationLabel, setLocationLabel] = useState("Lincoln, CA demo location");
  const [status, setStatus] = useState("Search by city or ZIP code, or use your location.");
  const [selectedId, setSelectedId] = useState(agencies[0]?.id ?? "");
  const [loading, setLoading] = useState(false);

  const ranked = useMemo<RankedAgency[]>(() => rankAgencies(origin, agencies), [origin]);
  const selected = ranked.find((item) => item.agency.id === selectedId) || ranked[0];

  const selectAgency = useCallback((id: string) => setSelectedId(id), []);

  async function search(event: FormEvent) {
    event.preventDefault();
    if (!query.trim()) return setStatus("Enter a city or ZIP code first.");
    setLoading(true);
    setStatus("Finding your nearest RealSite agency…");
    try {
      const response = await fetch(`/api/geocode?q=${encodeURIComponent(query.trim())}`);
      const data = await response.json();
      if (!response.ok || !data.results?.length) throw new Error(data.error || "No matching location found.");
      const result = data.results[0];
      const nextOrigin = { latitude: result.latitude, longitude: result.longitude };
      const nextRanked = rankAgencies(nextOrigin, agencies);
      setOrigin(nextOrigin);
      setLocationLabel(result.name);
      setSelectedId(nextRanked[0].agency.id);
      setStatus(`Showing agencies nearest ${result.name}.`);
    } catch (error) {
      setStatus(error instanceof Error ? error.message : "Unable to search that location.");
    } finally {
      setLoading(false);
    }
  }

  function useMyLocation() {
    if (!navigator.geolocation) return setStatus("Location services are not supported by this browser.");
    setLoading(true);
    setStatus("Requesting your location…");
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const nextOrigin = { latitude: position.coords.latitude, longitude: position.coords.longitude };
        const nextRanked = rankAgencies(nextOrigin, agencies);
        setOrigin(nextOrigin);
        setLocationLabel("your current location");
        setSelectedId(nextRanked[0].agency.id);
        setStatus("Showing the nearest physical RealSite agencies.");
        setLoading(false);
      },
      () => {
        setStatus("We could not access your location. Search by city or ZIP code instead.");
        setLoading(false);
      },
      { enableHighAccuracy: false, timeout: 8000, maximumAge: 300000 },
    );
  }

  return (
    <main>
      <section className="locator-hero">
        <div className="locator-intro">
          <span className="eyebrow">GET A REAL SITE</span>
          <h1>Find your local <span>RealSite</span> agency.</h1>
          <p>Local expertise. RealSite capabilities. A physical agency you can actually visit.</p>

          <div className="locator-actions">
            <button className="primary-button" type="button" onClick={useMyLocation} disabled={loading}>⌖ USE MY LOCATION</button>
            <span className="or">OR</span>
            <form onSubmit={search} className="search-form">
              <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Enter city, state or ZIP code" aria-label="City, state or ZIP code" />
              <button type="submit" disabled={loading} aria-label="Search">→</button>
            </form>
          </div>
          <p className="locator-status" role="status">{status}</p>

          <div className="locator-points">
            <div><strong>LOCAL</strong><span>Digital Business Advisors</span></div>
            <div><strong>PHYSICAL</strong><span>Offices you can visit</span></div>
            <div><strong>NATIONAL</strong><span>RealSite systems behind them</span></div>
          </div>
        </div>

        <div className="locator-map-wrap">
          <AgencyMap agencies={ranked.map((item) => ({ ...item.agency, distanceMiles: item.distanceMiles }))} selectedId={selected?.agency.id} onSelect={selectAgency} center={[origin.longitude, origin.latitude]} zoom={8} />
          {selected && (
            <article className="nearest-card">
              <span className="eyebrow">YOUR NEAREST AGENCY</span>
              <h2>{selected.agency.name}</h2>
              <p>{selected.agency.city}, {selected.agency.state}</p>
              <strong>{selected.distanceMiles.toFixed(1)} miles away</strong>
              <Link className="primary-button full" href={selected.agency.slug}>VIEW THIS AGENCY <span>→</span></Link>
              <a className="text-link" href={`https://www.google.com/maps/search/?api=1&query=${selected.agency.latitude},${selected.agency.longitude}`} target="_blank" rel="noreferrer">GET DIRECTIONS ↗</a>
            </article>
          )}
        </div>
      </section>

      <section className="nearby-section">
        <div className="section-heading">
          <div><span className="eyebrow">NEAR {locationLabel.toUpperCase()}</span><h2>RealSite agencies near you.</h2></div>
          <p>Every result represents a physical RealSite agency location in the network.</p>
        </div>
        <div className="agency-grid">
          {ranked.slice(0, 5).map(({ agency, distanceMiles }) => (
            <button key={agency.id} className={`agency-result${selected?.agency.id === agency.id ? " selected" : ""}`} onClick={() => selectAgency(agency.id)}>
              {agency.heroImage && <img src={agency.heroImage} alt="" />}
              <span className="agency-result-body"><small>{agency.status === "opening-soon" ? "OPENING SOON" : "LOCAL AGENCY"}</small><strong>{agency.name}</strong><span>{agency.city}, {agency.stateCode.toUpperCase()}</span><b>{distanceMiles.toFixed(1)} mi</b></span>
            </button>
          ))}
        </div>
      </section>
    </main>
  );
}
