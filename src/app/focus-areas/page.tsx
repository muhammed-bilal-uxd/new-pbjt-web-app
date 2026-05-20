import type { Metadata } from "next";
import FocusAreasClient from "./focus-areas-client";

export const metadata: Metadata = {
  title: "Focus Areas",
  description:
    "Explore PBJT focus areas, including local value chains, corporate accountability, community reflection, and ground-level sustainability action.",
};

export default function FocusAreasPage() {
  return <FocusAreasClient />;
}
