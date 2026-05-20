import type { Metadata } from "next";
import ContactClient from "./contact-client";
import { pagesMetadata } from "@/lib/metadata";

export const metadata: Metadata = pagesMetadata.contact;

export default function ContactPage() {
  return <ContactClient />;
}
