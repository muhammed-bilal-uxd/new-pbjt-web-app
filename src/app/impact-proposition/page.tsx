import type { Metadata } from "next";
import ImpactPropositionClient from "./impact-proposition-client";

export const metadata: Metadata = {
  title: "Impact Proposition",
  description:
    "Understand why Place-Based Just Transition is necessary for workers, communities, MSMEs, and responsible business action.",
};

export default function ImpactPropositionPage() {
  return <ImpactPropositionClient />;
}
