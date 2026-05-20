import type { Metadata } from "next";
import AboutClient from "./about/about-client";

export const metadata: Metadata = {
  title: "Home",
  description:
    "PBJT's learning emerges through real conversations on worksites, in community meetings, and in everyday informal spaces.",
};

export default function Home() {
  return (
    <div>
      <AboutClient />
    </div>
  );
}
