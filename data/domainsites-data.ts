export type Plan = "website" | "realsite" | "venture";
export type DomainSite = {
  slug: string;
  domain: string;
  description: string;
  image: string;
  concept: string;
  brandImages: string[];
  brand: boolean;
  plans: Plan[];
};
export const domains: DomainSite[] = [
  { slug: "concept-one", domain: "DomainName.com", description: "Short concept description goes here to give context.", concept: "A concept overview for this domain.", brandImages: [], image: "", brand: true, plans: ["website"] },
  { slug: "concept-two", domain: "DomainName.co", description: "Short concept description goes here to give context.", concept: "A concept overview for this domain.", brandImages: [], image: "", brand: true, plans: ["realsite"] },
  { slug: "concept-three", domain: "DomainName.app", description: "Short concept description goes here to give context.", concept: "A concept overview for this domain.", brandImages: [], image: "", brand: true, plans: ["venture"] },
];
