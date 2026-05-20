import type { Metadata } from "next";
import TestimonialsClient from "./testimonials-client";
import { pagesMetadata } from "@/lib/metadata";

export const metadata: Metadata = pagesMetadata.testimonials;

export default function TestimonialsPage() {
  return <TestimonialsClient />;
}
