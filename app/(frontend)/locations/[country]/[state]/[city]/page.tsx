import { notFound } from "next/navigation";

import Header from "@/components/Header";
import AgencyPage from "@/components/AgencyPage";

import {
  agencies,
  findAgencyByLocation,
} from "@/data/agencies";

export function generateStaticParams() {
  return agencies.map((agency) => ({
    country: agency.countryCode.toLowerCase(),
    state: agency.stateCode.toLowerCase(),
    city: agency.city.toLowerCase().replace(/\s+/g, "-"),
  }));
}

export default async function LocalAgencyPage({
  params,
}: {
  params: Promise<{
    country: string;
    state: string;
    city: string;
  }>;
}) {
  const { country, state, city } = await params;

  const agency = findAgencyByLocation({
    countryCode: country,
    stateCode: state,
    city,
  });

  if (!agency) {
    notFound();
  }

  return (
    <>
      <AgencyPage agency={agency} />
    </>
  );
}