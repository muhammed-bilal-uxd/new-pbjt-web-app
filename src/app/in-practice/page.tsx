import type { Metadata } from "next";
import InPracticeClient from "./in-practice-client";
import { pagesMetadata } from "@/lib/metadata";

export const metadata: Metadata = pagesMetadata.inPractice;

export default function InPracticePage() {
  return <InPracticeClient />;
}
