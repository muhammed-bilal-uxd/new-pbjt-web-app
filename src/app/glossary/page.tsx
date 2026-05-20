import type { Metadata } from "next";
import GlossaryClient from "./glossary-client";

export const metadata: Metadata = {
  title: "Glossary",
  description:
    "Browse key PBJT terms and concepts connected to place-based just transition, responsible business, and local sustainability work.",
};

export default function GlossaryPage() {
  return <GlossaryClient />;
}
