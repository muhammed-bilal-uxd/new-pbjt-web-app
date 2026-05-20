import type { Metadata } from "next";
import GlossaryClient from "./glossary-client";
import { pagesMetadata } from "@/lib/metadata";

export const metadata: Metadata = pagesMetadata.glossary;

export default function GlossaryPage() {
  return <GlossaryClient />;
}
