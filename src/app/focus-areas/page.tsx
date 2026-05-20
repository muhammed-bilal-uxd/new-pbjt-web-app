import type { Metadata } from "next";
import FocusAreasClient from "./focus-areas-client";
import { pagesMetadata } from "@/lib/metadata";

export const metadata: Metadata = pagesMetadata.focusAreas;

export default function FocusAreasPage() {
  return <FocusAreasClient />;
}
