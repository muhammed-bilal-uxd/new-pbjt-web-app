import type { Metadata } from "next";
import ContactClient from "./contact-client";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact PBJT for collaborations, questions, ideas, and partnerships around place-based just transition work.",
};

export default function ContactPage() {
  return <ContactClient />;
}
