// app/page.jsx  (App Router example usage)
//
// File placement in a Next.js project:
//   app/page.jsx
//   app/components/PbjtHero/PbjtHero.jsx
//   app/components/PbjtHero/PbjtHero.module.css
//
// Adjust the import path to wherever you keep the component.

import PbjtHero from "./PbjtHero";

export default function Page() {
  return (
    <main>
      <PbjtHero />
    </main>
  );
}
