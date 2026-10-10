import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const q = request.nextUrl.searchParams.get("q")?.trim();
  const token = process.env.MAPBOX_ACCESS_TOKEN || process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN;

  if (!q) return NextResponse.json({ error: "Enter a city or ZIP code." }, { status: 400 });
  if (!token) return NextResponse.json({ error: "Mapbox token is not configured." }, { status: 503 });

  const url = new URL("https://api.mapbox.com/search/geocode/v6/forward");
  url.searchParams.set("q", q);
  url.searchParams.set("country", "us");
  url.searchParams.set("types", "place,postcode,address");
  url.searchParams.set("limit", "5");
  url.searchParams.set("autocomplete", "false");
  url.searchParams.set("access_token", token);

  const response = await fetch(url, { cache: "no-store" });
  if (!response.ok) {
    return NextResponse.json({ error: "Location search failed." }, { status: response.status });
  }

  const data = await response.json();
  const features = Array.isArray(data.features) ? data.features : [];
  const results = features
    .map((feature: any) => ({
      id: feature.id,
      name: feature.properties?.full_address || feature.properties?.name || feature.place_name || q,
      longitude: feature.geometry?.coordinates?.[0],
      latitude: feature.geometry?.coordinates?.[1],
    }))
    .filter((result: any) => Number.isFinite(result.latitude) && Number.isFinite(result.longitude));

  return NextResponse.json({ results });
}
