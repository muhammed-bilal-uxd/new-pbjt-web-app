import type { Metadata } from "next";
import AboutClient from "./about/about-client";
import { pagesMetadata } from "@/lib/metadata";

export const metadata: Metadata = pagesMetadata.home;

export default function Home() {
  return (
    <div>
      <AboutClient />
    </div>
  );
}
