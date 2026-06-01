"use client";

import DindigulPage from "@/components/district/dindigul";
import HosurPage from "@/components/district/hosur";
import KrishnagiriPage from "@/components/district/krishnagiri";
import { districts } from "@/data/district";

export default function DistrictPageClient({
  districtName,
}: {
  districtName: string;
}) {
  const districtPages: Record<
    string,
    React.ComponentType<{ districtName: string }>
  > = {
    dindigul: DindigulPage,
    krishnagiri: KrishnagiriPage,
    hosur: HosurPage,
    // virudhunagar: VirudhunagarPage,
  };

  if (!districtName || !districts[districtName]) {
    return <DistrictNotFound />;
  }

  const DistrictPage = districtPages[districtName];

  return DistrictPage ? (
    <DistrictPage districtName={districtName} />
  ) : (
    <DistrictNotFound />
  );
}

function DistrictNotFound() {
  return (
    <div
      className={
        "p3 text-center min-h-[300px] flex items-center justify-center"
      }
    >
      <h1 className="text-[30px] font-bold">District name not found</h1>
    </div>
  );
}
