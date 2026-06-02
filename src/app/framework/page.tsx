import type { Metadata } from "next";

import FrameworkClient from "./framework-client";
import { pagesMetadata } from "@/lib/metadata";
import PBJTPrinciples from "./framework-foo";

export const metadata: Metadata = pagesMetadata.framework;

export default function FrameworkPage() {
  return (
    <div>
      <PBJTPrinciples />
      {/* <FrameworkClient /> */}
    </div>
  );
}
