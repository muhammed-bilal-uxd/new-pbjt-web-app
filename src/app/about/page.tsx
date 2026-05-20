import type { Metadata } from "next";
import AboutClient from "./about-client";
import { pagesMetadata } from "@/lib/metadata";

export const metadata: Metadata = pagesMetadata.about;

export default function AboutPage() {
  return <AboutClient />;
}
