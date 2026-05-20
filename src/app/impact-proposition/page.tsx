import type { Metadata } from "next";
import ImpactPropositionClient from "./impact-proposition-client";
import { pagesMetadata } from "@/lib/metadata";

export const metadata: Metadata = pagesMetadata.impactProposition;

export default function ImpactPropositionPage() {
  return <ImpactPropositionClient />;
}
