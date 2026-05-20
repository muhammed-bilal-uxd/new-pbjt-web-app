import { redirect } from "next/navigation";
import { districts } from "@/data/district";

export function generateStaticParams() {
  return Object.keys(districts).map((slug) => ({ slug }));
}

export default async function LegacyDistrictSlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  redirect(`/in-practice/district/${slug}`);
}
