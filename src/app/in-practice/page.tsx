import type { Metadata } from "next";
import InPracticeClient from "./in-practice-client";

export const metadata: Metadata = {
  title: "In Practice",
  description:
    "See how PBJT is applied through local district work, community-led action, village insights, and practical transition pathways.",
};

export default function InPracticePage() {
  return <InPracticeClient />;
}
