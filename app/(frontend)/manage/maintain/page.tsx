import ManagePlanPage from "@/components/manage/ManagePlanPage";
import { maintainPlan } from "@/components/manage/manage-plan-data";

export default function MaintainPage() {
  return <ManagePlanPage plan={maintainPlan} />;
}