

import RealSiteExperience from "@/components/RealSiteExperience";
import RealSiteIndustries from "@/components/RealSiteIndustries";
import RealSitePricing from "@/components/RealSitePricing";
export default function Page() {
  return (
    <main>

      {/* Interactive RealSite experience */}
      <RealSiteExperience />

      <RealSitePricing />

      <RealSiteIndustries />
    </main>
  );
}

