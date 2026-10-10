
import VentureTypes from "@/components/VentureTypes";
import VenturePortfolio from "@/components/VenturePortfolio";
import VentureInquiry from "@/components/VentureInquiry";

export default function Page() {
  return (
    <>
      <VentureTypes />
      
<VenturePortfolio
  showFilters={false}
  limit={6}
  showSeeAll={false}
  seeAllHref="/venturesites/ventures"
/>
<VentureInquiry/>
    </>
  );
}

