import type { Metadata } from "next";
import TestimonialsClient from "./testimonials-client";

export const metadata: Metadata = {
  title: "Testimonials",
  description:
    "Hear stories from workers, youth, women, community leaders, and local businesses shaping PBJT from the ground.",
};

export default function TestimonialsPage() {
  return <TestimonialsClient />;
}
