import { notFound } from "next/navigation";
import DistrictPageClient from "./district-client";
import { districts } from "@/data/district";

export function generateStaticParams() {
  return Object.keys(districts).map((slug) => ({ slug }));
}

export const dynamicParams = false;

export default async function DistrictPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  if (!districts[slug]) {
    notFound();
  }

  return <DistrictPageClient districtName={slug} />;
}
