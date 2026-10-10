import ManagePlanPage from "@/components/manage/ManagePlanPage";
import { managePlan } from "@/components/manage/manage-plan-data";

export default function ManagePage() {
  return <ManagePlanPage plan={managePlan} />;
}