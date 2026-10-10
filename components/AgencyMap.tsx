"use client";

import { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import type { Agency } from "@/data/agencies";

export type MapAgency = Agency & { distanceMiles?: number };

type Props = {
  agencies: MapAgency[];
  selectedId?: string;
  onSelect?: (id: string) => void;
  center?: [number, number];
  zoom?: number;
  className?: string;
};

export default function AgencyMap({ agencies, selectedId, onSelect, center, zoom = 7.6, className = "" }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<mapboxgl.Map | null>(null);
  const markersRef = useRef<Map<string, mapboxgl.Marker>>(new Map());
  const token = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;

  useEffect(() => {
    if (!containerRef.current || !token) return;
    mapboxgl.accessToken = token;

    const initial = center || [agencies[0]?.longitude ?? -121.29, agencies[0]?.latitude ?? 38.89];
    const map = new mapboxgl.Map({
      container: containerRef.current,
      style: "mapbox://styles/mapbox/dark-v11",
      center: initial,
      zoom,
      attributionControl: true,
    });

    map.addControl(new mapboxgl.NavigationControl({ showCompass: false }), "top-right");
    mapRef.current = map;

    agencies.forEach((agency) => {
      const el = document.createElement("button");
      el.type = "button";
      el.className = `agency-marker${agency.id === selectedId ? " selected" : ""}`;
      el.setAttribute("aria-label", `Select ${agency.name}`);
      el.innerHTML = '<span class="marker-core"></span>';
      el.addEventListener("click", () => onSelect?.(agency.id));

      const marker = new mapboxgl.Marker({ element: el })
        .setLngLat([agency.longitude, agency.latitude])
        .addTo(map);
      markersRef.current.set(agency.id, marker);
    });

    return () => {
      markersRef.current.clear();
      map.remove();
      mapRef.current = null;
    };
  }, [token, agencies, onSelect, center, zoom, selectedId]);

  useEffect(() => {
    document.querySelectorAll<HTMLButtonElement>(".agency-marker").forEach((el) => el.classList.remove("selected"));
    const marker = markersRef.current.get(selectedId || "");
    if (marker) {
      marker.getElement().classList.add("selected");
      const agency = agencies.find((item) => item.id === selectedId);
      if (agency && mapRef.current) {
        mapRef.current.flyTo({ center: [agency.longitude, agency.latitude], zoom: Math.max(mapRef.current.getZoom(), 9), duration: 700 });
      }
    }
  }, [selectedId, agencies]);

  if (!token) {
    return (
      <div className={`map-fallback ${className}`}>
        <div className="fallback-grid" />
        {agencies.slice(0, 5).map((agency, index) => (
          <button key={agency.id} className={`fallback-pin pin-${index + 1}${agency.id === selectedId ? " selected" : ""}`} onClick={() => onSelect?.(agency.id)}>
            <span />
            <small>{agency.city}</small>
          </button>
        ))}
        <div className="map-token-note">Add NEXT_PUBLIC_MAPBOX_TOKEN to render Mapbox GL JS.</div>
      </div>
    );
  }

  return <div ref={containerRef} className={`agency-map ${className}`} />;
}
