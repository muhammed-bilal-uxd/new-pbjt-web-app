import type { Metadata } from "next";
import { notFound } from "next/navigation";
import DistrictPageClient from "./district-client";
import { districts } from "@/data/district";

type DistrictPageProps = {
  params: Promise<{ slug: string }>;
};

const toTitleCase = (value: string) =>
  value
    .split(/[-\s]+/)
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");

export async function generateMetadata({
  params,
}: DistrictPageProps): Promise<Metadata> {
  const { slug } = await params;
  const district = districts[slug];

  if (!district) {
    return {
      title: "District",
      description: "PBJT district practice insights and community-led action.",
    };
  }

  const districtName = toTitleCase(district.heroSection.name || slug);
  const description = district.heroSection.discription.replace(/\s+/g, " ");

  return {
    title: `${districtName} In Practice`,
    description,
  };
}

export function generateStaticParams() {
  return Object.keys(districts).map((slug) => ({ slug }));
}

export const dynamicParams = false;

export default async function DistrictPage({ params }: DistrictPageProps) {
  const { slug } = await params;

  if (!districts[slug]) {
    notFound();
  }

  return <DistrictPageClient districtName={slug} />;
}
