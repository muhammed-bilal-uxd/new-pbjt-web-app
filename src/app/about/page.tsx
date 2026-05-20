import type { Metadata } from "next";
import AboutClient from "./about-client";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn how Place-Based Just Transition starts from local realities and centers workers, MSMEs, informal labour, and communities.",
};

export default function AboutPage() {
  return <AboutClient />;
}
