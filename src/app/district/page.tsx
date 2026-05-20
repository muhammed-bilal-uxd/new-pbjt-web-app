import { redirect } from "next/navigation";

export default async function LegacyDistrictPage({
  searchParams,
}: {
  searchParams: Promise<{ districtName?: string }>;
}) {
  const { districtName } = await searchParams;

  redirect(
    districtName
      ? `/in-practice/district/${districtName}`
      : "/in-practice",
  );
}
