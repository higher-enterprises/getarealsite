import ManagePlanPage from "@/components/manage/ManagePlanPage";
import { carePlan } from "@/components/manage/manage-plan-data";

export default function CarePage() {
  return <ManagePlanPage plan={carePlan} />;
}