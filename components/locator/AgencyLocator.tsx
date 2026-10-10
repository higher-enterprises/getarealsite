"use client";

import Link from "next/link";
import {
  FormEvent,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import mapboxgl, {
  Map as MapboxMap,
  Marker,
} from "mapbox-gl";

import {
  agencies,
  getNearestAgencies,
  type Agency,
} from "@/data/agencies";

type AgencyWithDistance = Agency & {
  distanceMiles: number;
};

type SearchOrigin = {
  latitude: number;
  longitude: number;
  label: string;
};

/* ============================================================
   MAP MARKER
============================================================ */

function createMarkerElement(
  agency: Agency,
  selected: boolean
) {
  const button = document.createElement("button");

  button.type = "button";
  button.setAttribute("aria-label", agency.name);

  button.style.width = selected ? "52px" : "38px";
  button.style.height = selected ? "52px" : "38px";
  button.style.border = "0";
  button.style.padding = "0";
  button.style.background = "transparent";
  button.style.cursor = "pointer";

  const markerColor =
    agency.status === "opening-soon"
      ? "#697386"
      : "#4664ff";

  button.innerHTML = `
    <span
      style="
        position:relative;
        display:flex;
        width:100%;
        height:100%;
        align-items:center;
        justify-content:center;
      "
    >
      ${
        selected
          ? `
            <span
              style="
                position:absolute;
                width:52px;
                height:52px;
                border-radius:9999px;
                background:rgba(70,100,255,.16);
                border:1px solid rgba(100,125,255,.32);
                box-shadow:
                  0 0 0 9px rgba(70,100,255,.07),
                  0 0 34px rgba(70,100,255,.48);
              "
            ></span>
          `
          : ""
      }

      <span
        style="
          position:relative;
          display:flex;
          width:${selected ? "34px" : "27px"};
          height:${selected ? "34px" : "27px"};
          align-items:center;
          justify-content:center;
          border-radius:50% 50% 50% 0;
          transform:rotate(-45deg);
          background:${markerColor};
          border:2px solid rgba(255,255,255,.94);
          box-shadow:0 8px 24px rgba(0,0,0,.5);
        "
      >
        <span
          style="
            width:7px;
            height:7px;
            border-radius:9999px;
            background:#fff;
          "
        ></span>
      </span>
    </span>
  `;

  return button;
}

/* ============================================================
   LOCATOR
============================================================ */

export default function AgencyLocator() {
  const mapContainerRef =
    useRef<HTMLDivElement | null>(null);

  const mapRef =
    useRef<MapboxMap | null>(null);

  const markersRef =
    useRef<Marker[]>([]);

  const token =
    process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN;

  const [selectedAgencyId, setSelectedAgencyId] =
    useState<string | null>(null);

  const [rankedAgencies, setRankedAgencies] =
    useState<AgencyWithDistance[]>(
      agencies.map((agency) => ({
        ...agency,
        distanceMiles: 0,
      }))
    );

  const [searchValue, setSearchValue] =
    useState("");

  const [searching, setSearching] =
    useState(false);

  const [locating, setLocating] =
    useState(false);

  const [error, setError] =
    useState<string | null>(null);

  const [searchOrigin, setSearchOrigin] =
    useState<SearchOrigin | null>(null);

  /* ============================================================
     SELECTED AGENCY
  ============================================================ */

  const selectedAgency = useMemo(() => {
    if (!selectedAgencyId) {
      return null;
    }

    return (
      rankedAgencies.find(
        (agency) =>
          agency.id === selectedAgencyId
      ) ??
      agencies.find(
        (agency) =>
          agency.id === selectedAgencyId
      ) ??
      null
    );
  }, [
    selectedAgencyId,
    rankedAgencies,
  ]);

  /* ============================================================
     INITIALIZE MAPBOX
  ============================================================ */

  useEffect(() => {
    if (!mapContainerRef.current) {
      return;
    }

    if (!token) {
      setError(
        "Mapbox is not configured."
      );

      return;
    }

    if (mapRef.current) {
      return;
    }

    mapboxgl.accessToken = token;

    const map = new mapboxgl.Map({
      container: mapContainerRef.current,

      style:
        "mapbox://styles/mapbox/dark-v11",

      /*
       * Initial California view.
       * This is only the opening map position.
       * It does NOT preselect an agency.
       */
      center: [
        -120.85,
        37.85,
      ],

      zoom: 5.8,

      minZoom: 2,

      maxZoom: 18,

      pitch: 0,

      bearing: 0,

      attributionControl: true,
    });

    mapRef.current = map;

    map.addControl(
      new mapboxgl.NavigationControl({
        showCompass: false,
      }),
      "top-right"
    );

    map.on("load", () => {
      map.resize();
    });

    return () => {
      markersRef.current.forEach(
        (marker) =>
          marker.remove()
      );

      markersRef.current = [];

      map.remove();

      mapRef.current = null;
    };
  }, [token]);

  /* ============================================================
     MAP RESIZE
  ============================================================ */

  useEffect(() => {
    function resizeMap() {
      mapRef.current?.resize();
    }

    window.addEventListener(
      "resize",
      resizeMap
    );

    const timeout =
      window.setTimeout(
        resizeMap,
        300
      );

    return () => {
      window.removeEventListener(
        "resize",
        resizeMap
      );

      window.clearTimeout(
        timeout
      );
    };
  }, []);

  /* ============================================================
     SELECT AGENCY
  ============================================================ */

  function selectAgency(
    agency: Agency,
    fly = true
  ) {
    setSelectedAgencyId(
      agency.id
    );

    if (!fly) {
      return;
    }

    mapRef.current?.flyTo({
      center: [
        agency.longitude,
        agency.latitude,
      ],

      zoom: 11.25,

      duration: 1000,

      essential: true,
    });
  }

  /* ============================================================
     MAP MARKERS
  ============================================================ */

  useEffect(() => {
    const map = mapRef.current;

    if (!map) {
      return;
    }

    markersRef.current.forEach(
      (marker) =>
        marker.remove()
    );

    markersRef.current = [];

    agencies.forEach((agency) => {
      const element =
        createMarkerElement(
          agency,
          agency.id ===
            selectedAgencyId
        );

      element.addEventListener(
        "click",
        () => {
          selectAgency(
            agency
          );
        }
      );

      const marker =
        new mapboxgl.Marker({
          element,
          anchor: "bottom",
        })
          .setLngLat([
            agency.longitude,
            agency.latitude,
          ])
          .addTo(map);

      markersRef.current.push(
        marker
      );
    });
  }, [selectedAgencyId]);

  /* ============================================================
     HANDLE SEARCH COORDINATES
  ============================================================ */

  function handleCoordinates(
    latitude: number,
    longitude: number,
    label: string
  ) {
    const results: AgencyWithDistance[] = getNearestAgencies(
      latitude,
      longitude
    ).map(({ agency, distance }) => ({
      ...agency,
      distanceMiles: distance,
    }));

    setRankedAgencies(
      results
    );

    setSearchOrigin({
      latitude,
      longitude,
      label,
    });

    if (!results.length) {
      setSelectedAgencyId(
        null
      );

      setError(
        "No RealSite agencies were found."
      );

      return;
    }

    const nearest =
      results[0];

    setSelectedAgencyId(
      nearest.id
    );

    const map =
      mapRef.current;

    if (!map) {
      return;
    }

    const bounds =
      new mapboxgl.LngLatBounds();

    bounds.extend([
      longitude,
      latitude,
    ]);

    results
      .slice(0, 5)
      .forEach((agency) => {
        bounds.extend([
          agency.longitude,
          agency.latitude,
        ]);
      });

    map.fitBounds(
      bounds,
      {
        padding: {
          top: 90,
          right: 90,
          bottom: 90,
          left: 90,
        },

        maxZoom: 10.5,

        duration: 1200,
      }
    );
  }

  /* ============================================================
     USE MY LOCATION
  ============================================================ */

  function useMyLocation() {
    setError(null);

    if (
      !navigator.geolocation
    ) {
      setError(
        "Your browser does not support location services."
      );

      return;
    }

    setLocating(true);

    navigator.geolocation.getCurrentPosition(
      (position) => {
        handleCoordinates(
          position.coords.latitude,
          position.coords.longitude,
          "Your location"
        );

        setLocating(false);
      },

      () => {
        setError(
          "We couldn't access your location. Search by city, state, or ZIP code instead."
        );

        setLocating(false);
      },

      {
        enableHighAccuracy: false,
        timeout: 10000,
        maximumAge: 300000,
      }
    );
  }

  /* ============================================================
     MAPBOX SEARCH
  ============================================================ */

  async function searchLocation(
    event: FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    const query =
      searchValue.trim();

    if (!query) {
      return;
    }

    if (!token) {
      setError(
        "Mapbox access token is missing."
      );

      return;
    }

    setSearching(true);
    setError(null);

    try {
      const params =
        new URLSearchParams({
          q: query,

          country: "US",

          limit: "1",

          language: "en",

          access_token: token,
        });

      const response =
        await fetch(
          `https://api.mapbox.com/search/geocode/v6/forward?${params.toString()}`
        );

      if (!response.ok) {
        throw new Error(
          "Mapbox search failed."
        );
      }

      const data =
        await response.json();

      const feature =
        data.features?.[0];

      if (!feature) {
        setError(
          "We couldn't find that location."
        );

        return;
      }

      const [
        longitude,
        latitude,
      ] =
        feature.geometry
          .coordinates;

      const label =
        feature.properties
          ?.full_address ||
        feature.properties?.name ||
        feature.place_name ||
        query;

      handleCoordinates(
        latitude,
        longitude,
        label
      );
    } catch (err) {
      console.error(
        "Location search error:",
        err
      );

      setError(
        "We couldn't search that location. Please try again."
      );
    } finally {
      setSearching(false);
    }
  }

  /* ============================================================
     DIRECTIONS
  ============================================================ */

  function getDirections(
    agency: Agency
  ) {
    const destination =
      encodeURIComponent(
        `${agency.address}, ${agency.city}, ${agency.stateCode} ${agency.postalCode}`
      );

    window.open(
      `https://www.google.com/maps/dir/?api=1&destination=${destination}`,
      "_blank",
      "noopener,noreferrer"
    );
  }

  /* ============================================================
     UI
  ============================================================ */

  return (
    <main
      className="
        min-h-screen
        bg-[#020812]
        text-white
      "
    >

      {/* ======================================================
          HORIZONTAL SEARCH BAR
      ====================================================== */}

      <section
        className="
          relative
          z-20
          border-b
          border-white/10
          bg-[linear-gradient(90deg,#03101f_0%,#07132b_52%,#03101f_100%)]
          px-6
          py-5
          lg:px-10
        "
      >
        <div
          className="
            mx-auto
            flex
            max-w-[1800px]
            flex-col
            gap-4
            xl:flex-row
            xl:items-center
          "
        >
          {/* TITLE */}

          <div
            className="
              shrink-0
              xl:w-[320px]
            "
          >
   

            <h1
              className="
                mt-1
                text-[24px]
                font-light
                tracking-tight
                text-white
              "
            >
              Find your local website advisor
            </h1>
          </div>

          {/* SEARCH */}

          <form
            onSubmit={
              searchLocation
            }
            className="
              flex
              min-w-0
              flex-1
              flex-col
              gap-3
              sm:flex-row
            "
          >
            <div
              className="
                relative
                min-w-0
                flex-1
              "
            >
              <input
                type="text"
                value={
                  searchValue
                }
                onChange={(
                  event
                ) =>
                  setSearchValue(
                    event.target
                      .value
                  )
                }
                placeholder="Enter city, state or ZIP code"
                aria-label="City, state or ZIP code"
                className="
                  h-13
                  w-full
                  rounded-lg
                  border
                  border-white/15
                  bg-black/20
                  px-5
                  pr-14
                  text-[14px]
                  text-white
                  outline-none
                  transition
                  placeholder:text-white/30
                  focus:border-blue-400/70
                "
              />

              <button
                type="submit"
                disabled={searching}
                aria-label="Search"
                className="
                  absolute
                  right-2
                  top-1/2
                  flex
                  h-9
                  w-9
                  -translate-y-1/2
                  items-center
                  justify-center
                  rounded-md
                  text-white/55
                  transition
                  hover:bg-white/[0.05]
                  hover:text-white
                  disabled:opacity-50
                "
              >
                {searching ? (
                  <span
                    className="
                      h-4
                      w-4
                      animate-spin
                      rounded-full
                      border
                      border-white/30
                      border-t-white
                    "
                  />
                ) : (
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                  >
                    <circle
                      cx="11"
                      cy="11"
                      r="7"
                    />

                    <path
                      d="m20 20-4-4"
                    />
                  </svg>
                )}
              </button>
            </div>

            <button
              type="button"
              onClick={
                useMyLocation
              }
              disabled={locating}
              className="
                flex
                h-13
                shrink-0
                items-center
                justify-center
                gap-2
                rounded-lg
                bg-[#4058ff]
                px-6
                text-[9px]
                font-medium
                uppercase
                tracking-[.18em]
                text-white
                transition
                hover:bg-[#5268ff]
                disabled:cursor-wait
                disabled:opacity-60
              "
            >
              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
              >
                <path
                  d="M12 21s6-5.1 6-11a6 6 0 1 0-12 0c0 5.9 6 11 6 11Z"
                />

                <circle
                  cx="12"
                  cy="10"
                  r="2"
                />
              </svg>

              {locating
                ? "LOCATING..."
                : "USE MY LOCATION"}
            </button>
          </form>
        </div>

        {/* ERROR */}

        {error && (
          <div
            className="
              mx-auto
              mt-3
              max-w-[1800px]
              text-right
            "
          >
            <p
              className="
                text-xs
                text-red-300/80
              "
            >
              {error}
            </p>
          </div>
        )}
      </section>

      {/* ======================================================
          MAP + RESULTS
      ====================================================== */}

      <section
        className="
          grid
          min-h-[720px]
          grid-cols-1
          lg:grid-cols-[minmax(0,1fr)_430px]
        "
      >

        {/* ====================================================
            LEFT — MAPBOX
        ==================================================== */}

        <div
          className="
            relative
            min-h-[600px]
            overflow-hidden
            bg-[#07121e]
          "
        >
          <div
            ref={
              mapContainerRef
            }
            className="
              absolute
              inset-0
              h-full
              w-full
            "
          />

          {/* MAP STATUS */}

          <div
            className="
              pointer-events-none
              absolute
              left-5
              top-5
              z-10
              rounded-full
              border
              border-white/10
              bg-[#030a14]/85
              px-4
              py-2.5
              backdrop-blur-md
            "
          >
            <div
              className="
                flex
                items-center
                gap-2
                text-[9px]
                uppercase
                tracking-[.17em]
                text-white/60
              "
            >
              <span
                className="
                  h-2
                  w-2
                  rounded-full
                  bg-[#4664ff]
                "
              />

              PHYSICAL REALSITE
              AGENCIES
            </div>
          </div>

          {/* SEARCH LOCATION LABEL */}

          {searchOrigin && (
            <div
              className="
                pointer-events-none
                absolute
                bottom-5
                left-5
                z-10
                max-w-[340px]
                rounded-lg
                border
                border-white/10
                bg-[#030a14]/90
                px-4
                py-3
                backdrop-blur-md
              "
            >
              <p
                className="
                  text-[8px]
                  uppercase
                  tracking-[.2em]
                  text-blue-400
                "
              >
                SEARCHING NEAR
              </p>

              <p
                className="
                  mt-1
                  truncate
                  text-sm
                  text-white/75
                "
              >
                {
                  searchOrigin.label
                }
              </p>
            </div>
          )}
        </div>

        {/* ====================================================
            RIGHT — RESULTS
        ==================================================== */}

        <aside
          className="
            border-t
            border-white/10
            bg-[#030b16]
            lg:border-l
            lg:border-t-0
          "
        >
          {/* RESULTS HEADER */}

          <div
            className="
              border-b
              border-white/10
              px-6
              py-6
            "
          >
            <p
              className="
                text-[9px]
                font-medium
                uppercase
                tracking-[.23em]
                text-blue-400
              "
            >
              NEARBY AGENCIES
            </p>

            <h2
              className="
                mt-2
                text-[25px]
                font-light
                text-white
              "
            >
              {searchOrigin
                ? "Locations near you."
                : "RealSite locations."}
            </h2>

            <p
              className="
                mt-2
                text-sm
                leading-6
                text-white/40
              "
            >
              {searchOrigin
                ? "Showing the closest physical RealSite agencies."
                : "Search above or select an agency on the map."}
            </p>
          </div>

          {/* RESULT LIST */}

          <div
            className="
              max-h-[720px]
              overflow-y-auto
            "
          >
            {rankedAgencies.map(
              (
                agency,
                index
              ) => {
                const active =
                  agency.id ===
                  selectedAgencyId;

                return (
                  <article
                    key={
                      agency.id
                    }
                    className={`
                      border-b
                      border-white/10
                      transition
                      ${
                        active
                          ? "bg-[#0a1830]"
                          : "bg-transparent hover:bg-white/[0.025]"
                      }
                    `}
                  >
                    <button
                      type="button"
                      onClick={() =>
                        selectAgency(
                          agency
                        )
                      }
                      className="
                        block
                        w-full
                        px-6
                        py-5
                        text-left
                      "
                    >
                      {/* RESULT NUMBER + STATUS */}

                      <div
                        className="
                          flex
                          items-center
                          justify-between
                          gap-4
                        "
                      >
                        <div
                          className="
                            flex
                            items-center
                            gap-3
                          "
                        >
                          <span
                            className={`
                              flex
                              h-7
                              w-7
                              items-center
                              justify-center
                              rounded-full
                              text-[10px]
                              ${
                                active
                                  ? "bg-[#4058ff] text-white"
                                  : "bg-white/[0.05] text-white/45"
                              }
                            `}
                          >
                            {index +
                              1}
                          </span>

                          {index ===
                            0 &&
                            searchOrigin && (
                              <span
                                className="
                                  text-[8px]
                                  font-medium
                                  uppercase
                                  tracking-[.18em]
                                  text-blue-400
                                "
                              >
                                NEAREST
                              </span>
                            )}
                        </div>

                        <span
                          className="
                            flex
                            items-center
                            gap-2
                            text-[8px]
                            uppercase
                            tracking-[.15em]
                            text-white/35
                          "
                        >
                          <span
                            className={`
                              h-1.5
                              w-1.5
                              rounded-full
                              ${
                                agency.status ===
                                "open"
                                  ? "bg-emerald-400"
                                  : "bg-white/35"
                              }
                            `}
                          />

                          {agency.status ===
                          "open"
                            ? "OPEN"
                            : "OPENING SOON"}
                        </span>
                      </div>

                      {/* AGENCY */}

                      <h3
                        className="
                          mt-4
                          text-[19px]
                          font-medium
                          text-white
                        "
                      >
                        {
                          agency.name
                        }
                      </h3>

                      <p
                        className="
                          mt-1
                          text-sm
                          text-white/45
                        "
                      >
                        {
                          agency.city
                        }
                        ,{" "}
                        {
                          agency.state
                        }
                      </p>

                      {searchOrigin &&
                        agency.distanceMiles >
                          0 && (
                          <p
                            className="
                              mt-3
                              text-[10px]
                              font-medium
                              uppercase
                              tracking-[.15em]
                              text-blue-400
                            "
                          >
                            {agency.distanceMiles.toFixed(
                              1
                            )}{" "}
                            MILES AWAY
                          </p>
                        )}
                    </button>

                    {/* ACTIVE ACTIONS */}

                    {active && (
                      <div
                        className="
                          grid
                          grid-cols-2
                          gap-2
                          px-6
                          pb-5
                        "
                      >
                        <Link
                          href={
                            agency.slug
                          }
                          className="
                            flex
                            h-11
                            items-center
                            justify-center
                            rounded-lg
                            bg-[#4058ff]
                            px-3
                            text-center
                            text-[8px]
                            font-medium
                            uppercase
                            tracking-[.16em]
                            text-white
                            transition
                            hover:bg-[#5268ff]
                          "
                        >
                          VIEW AGENCY
                        </Link>

                        <button
                          type="button"
                          onClick={() =>
                            getDirections(
                              agency
                            )
                          }
                          className="
                            flex
                            h-11
                            items-center
                            justify-center
                            rounded-lg
                            border
                            border-white/10
                            px-3
                            text-[8px]
                            font-medium
                            uppercase
                            tracking-[.16em]
                            text-white/55
                            transition
                            hover:border-white/20
                            hover:text-white
                          "
                        >
                          DIRECTIONS ↗
                        </button>
                      </div>
                    )}
                  </article>
                );
              }
            )}
          </div>
        </aside>
      </section>
    </main>
  );
}