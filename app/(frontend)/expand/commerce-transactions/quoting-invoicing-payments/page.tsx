import { notFound } from "next/navigation";
import ExpandServicePage from "@/components/expand/ExpandServicePage";
import { getExpandServicePage } from "@/components/expand/expand-service-data";

export default function Page() {
  const service = getExpandServicePage("commerce-transactions", "quoting-invoicing-payments");

  if (!service) {
    notFound();
  }

  return <ExpandServicePage service={service} />;
}
