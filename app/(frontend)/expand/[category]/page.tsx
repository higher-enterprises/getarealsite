import { notFound } from "next/navigation";
import ExpandCategoryPage from "@/components/expand/ExpandCategoryPage";
import { expandCategories, getExpandCategory } from "@/components/expand/expand-data";

export function generateStaticParams() {
  return expandCategories.map((category) => ({
    category: category.slug,
  }));
}

export default async function Page({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category: categorySlug } = await params;
  const category = getExpandCategory(categorySlug);

  if (!category) {
    notFound();
  }

  return <ExpandCategoryPage category={category} />;
}
