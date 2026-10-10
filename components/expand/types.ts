import type { LucideIcon } from "lucide-react";

export type ExpandSystem = {
  id: string;
  title: string;
  short: string;
  description: string;
  icon: LucideIcon;
  color: string;
  position: "left" | "right" | "bottom";
};