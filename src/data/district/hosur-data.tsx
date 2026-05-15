import { District } from "../district";

const heroImage = "/images/in-practice/location-1b.png";

export const hosurData: District = {
  heroSection: {
    name: "Hosur",
    discription: `A land of fertile plains, resilient communities, and rich traditions
            — where nature, culture, and livelihoods shape everyday life.`,
    heroImage: heroImage,
  },
  keyInsightsData: {
    name: "Hosur",
    description: [
      "Hosur district, in southern Tamil Nadu, sits at a unique ecological crossroads — where fertile plains meet the hill ecosystems of the Palani and Sirumalai ranges. These landscapes shape the district's climate, water systems, and biodiversity.",
      "The plains experience a semi-arid tropical monsoon climate, while hill areas such as Kodaikanal have a cooler environment. Average annual rainfall: ~836 mm, largely dependent on the North East Monsoon.",
      "Nearly 70% of the population depends on agriculture and related activities. Major crops include onions, groundnuts, grapes, flowers, and vegetables.",
      "Traditional industries include: Iron lock making · Leather tanning · Textile production (Art-Silk &amp; Sungudi sarees)",
    ],
  },
  climateData: {
    name: "Hosur",
    rows: [
      { year: 2021, rainfall: "240.5 mm", minC: 19.5, maxC: 37.5 },
      { year: 2022, rainfall: "1303.6 mm", minC: 19.8, maxC: 38.2 },
      { year: 2023, rainfall: "–", minC: 19.0, maxC: 38.7 },
      { year: 2024, rainfall: "–", minC: 20.0, maxC: 38.0 },
      { year: 2025, rainfall: "–", minC: 19.1, maxC: 39.0 },
    ],
  },
  village: {
    title: "In Four Villages Across Hosur",
    description: `Community-Led actions restoring ecosystems, reducing waste and
          building local livelihoods.`,
    villageAreas: [
      {
        id: "avilipatti",
        name: "AVILIPATTI",
        image: "/images/in-practice-detail/img01.png",
        cardMetrics: { dumpSites: 4, waterBodies: 1, trees: 120 },
        panel: {
          tagline:
            "Local actions that turned waste into value and restored common ecosystems.",
          activities: [
            "Dump site: 4",
            "Water bodies: 1",
            "Trees planted: 120",
            "Sanitation workers - Collected waste properly and received incentives from the Panchayat",
          ],
          insight:
            "Community participation and incentives improved waste management practices.",
          restored: ["Dump site: 1", "Water bodies: 1"],
          restoredImage:
            "https://picsum.photos/seed/avilipatti-restored/640/360",
          restoredCaption:
            "A restored water body now supports biodiversity and community use.",
          groups: [
            { name: "Gethu Group", members: 13 },
            { name: "Adolescent Boys and Girls", members: 27 },
            { name: "MSME", members: 1 },
            { name: "Vendors Association", members: 13 },
          ],
        },
      },
      {
        id: "pethampatty",
        name: "PETHAMPATTY",
        image: "/images/in-practice-detail/img02.png",
        cardMetrics: { dumpSites: 2, waterBodies: 2, trees: 50 },
        panel: {
          tagline:
            "Local actions that turned waste into value and restored common ecosystems.",
          activities: [
            "Dump site: 2",
            "Water bodies: 2",
            "Trees planted: 50",
            "Petty shops - 2 shops - Collecting empty milk packets and dosa batter packets",
          ],
          insight:
            "Local shops have become collection points, embedding waste sorting into daily routine.",
          restored: ["Dump site: 1", "Water bodies: 0"],
          restoredImage:
            "https://picsum.photos/seed/pethampatty-restored/640/360",
          restoredCaption:
            "Cleared dump sites are paving the way for healthier surroundings.",
          groups: [
            { name: "Gethu Group", members: 13 },
            { name: "Adolescent boys and Girls", members: 25 },
          ],
        },
      },
      {
        id: "gopalpatti",
        name: "GOPALPATTI",
        image: "/images/in-practice-detail/img03.png",
        cardMetrics: { dumpSites: 6, waterBodies: 3, trees: 100 },
        panel: {
          tagline:
            "Local actions that turned waste into value and restored common ecosystems.",
          activities: [
            "Dump site: 6",
            "Water bodies: 3",
            "Solar: 8",
            "Rain water: 400",
            "Trees planted: 100",
            "Waste recycle unit: 1 - Run by the Panchayat",
            "Vendors committed to zero plastic usage: 45",
            "Barber salon - 6 (segregating waste and giving hair to process manure)",
          ],
          insight:
            "Diverse community-led initiatives are reinforcing sustainable practices across livelihoods.",
          restored: ["Dump site: 2", "Water bodies: 0"],
          restoredImage:
            "https://picsum.photos/seed/gopalpatti-restored/640/360",
          restoredCaption:
            "Restored dump sites are returning land to productive community use.",
          groups: [
            { name: "Barbers Association", members: 13 },
            { name: "Auto drivers association", members: 11 },
            { name: "MSME Group", members: 4 },
            { name: "Green workers", members: 15 },
          ],
        },
      },
      {
        id: "sanarpatty",
        name: "SANARPATTY",
        image: "/images/in-practice-detail/img04.png",
        cardMetrics: { dumpSites: 6, waterBodies: 5, trees: 200 },
        panel: {
          tagline:
            "Local actions that turned waste into value and restored common ecosystems.",
          activities: [
            "Dump site: 6",
            "Water bodies: 5",
            "Solar: 6",
            "Rain water: 11",
            "Trees planted: 200",
            "Waste recycle unit: 1 - Run by the Panchayat",
            "Shops committed to zero plastic usage: 51",
            "Best plastic free practices: 10",
          ],
          insight:
            "Strong vendor commitment and youth participation are accelerating change at scale.",
          restored: ["Dump site: 2", "Water bodies: 0"],
          restoredImage:
            "https://picsum.photos/seed/sanarpatty-restored/640/360",
          restoredCaption:
            "Plastic-free practices are reshaping daily commerce in the village.",
          groups: [
            { name: "Barbers Association", members: 4 },
            { name: "Environmental Protection Committee", members: 70 },
            { name: "MSME Group", members: 3 },
            { name: "Small vendors Association", members: 27 },
            { name: "Auto Drivers Association", members: 19 },
            { name: "Youth Groups", members: 45 },
            { name: "Adolescent Groups", members: 28 },
            { name: "Green Gethu workers group", members: 60 },
          ],
        },
      },
    ],
  },
  beforeAfter: {
    name: "Hosur",
    title: "What Shifted Across Systems",
    description:
      "Rooted in collaboration. Measurable impact across seven key themes.",
    badge: "Built by communities. Sustained together.",
    themes: [
      {
        id: "waste",
        label: "Waste System Transformation",
        heading: "Waste System Transformation",
        timeline: "June 2025 -> February 2026",
        beforeTitle: "June 2025",
        afterTitle: "February 2026",
        before: [
          "Waste dump sites were identified across villages",
          "Mixed waste was disposed of without systematic segregation",
          "Meetings were conducted with vendors and households",
          "A community pledge was initiated towards waste segregation and responsible disposal",
        ],
        after: [
          "Households are properly segregating milk packets and other plastic waste",
          "Plastic waste is responsibly disposed of through structured collection systems",
          "Hair waste from salons is being segregated and sent to farmers for use as organic manure",
          "Community-level awareness has translated into consistent waste management practices",
        ],
        impact: [
          "Informal dumping reduced",
          "Structured waste segregation",
          "Resource recovery enabled",
        ],
      },
      {
        id: "plastic",
        label: "Plastic Accountability Model",
        heading: "Plastic Accountability Model",
        timeline: "June 2025 -> February 2026",
        beforeTitle: "June 2025",
        afterTitle: "February 2026",
        before: [
          "Plastics were indiscriminately dumped and burnt at local dump sites",
          "Shops commonly used plastic covers for packaging",
        ],
        after: [
          "Plastics are now properly collected and sold to waste vendors for recycling",
          "Shopkeepers have transitioned to eco-friendly alternatives such as banana leaves for packaging",
          "Community-level conversations on plastic accountability are influencing local business practices",
        ],
        impact: [
          "Reduced open burning",
          "Circular waste systems",
          "Responsible retail practices",
        ],
      },
      {
        id: "water",
        label: "Water & Ecological Restoration",
        heading: "Water and Ecological Restoration",
        timeline: "June 2025 -> February 2026",
        beforeTitle: "June 2025",
        afterTitle: "February 2026",
        before: [
          "Waterbodies were identified during village mapping",
          "Large quantities of village waste were dumped inside waterbodies and along bunds",
        ],
        after: [
          "Waste from waterbodies and bund areas was cleared",
          "Tree saplings were planted to restore and protect the ecological spaces",
          "Community engagement has strengthened local stewardship over common water resources",
        ],
        impact: [
          "Reduced ecological degradation",
          "Restoration of commons",
          "Protection of local ecosystems",
        ],
      },
      {
        id: "energy",
        label: "Renewable Energy & Water Harvesting",
        heading: "Renewable Energy and Water Harvesting",
        timeline: "June 2025 -> February 2026",
        beforeTitle: "June 2025",
        afterTitle: "February 2026",
        before: [
          "Awareness sessions conducted on rainwater harvesting and its benefits",
        ],
        after: [
          "2 households adopted and installed a rainwater harvesting pit",
        ],
        impact: [
          "Knowledge translated into action at the household level",
          "Adoption of rainwater harvesting practices",
          "Improved local climate resilience through water conservation",
        ],
      },
      {
        id: "culture",
        label: "Green Cultural Practices",
        heading: "Green Cultural Practices",
        timeline: "June 2025 -> February 2026",
        beforeTitle: "June 2025",
        afterTitle: "February 2026",
        before: [
          "Festivals used flex banners",
          "Non-sustainable practices were followed",
        ],
        after: [
          "Temple festival organized as a Green Festival initiative",
          "Plastic-free celebration implemented",
          "Sustainable waste management practices introduced",
          "Tree planting integrated into celebrations",
        ],
        impact: [
          "Cultural events transformed into platforms for environmental responsibility",
          "Increased adoption of sustainable practices during festivals",
          "Strengthened community dignity and collective participation",
        ],
      },
      {
        id: "business",
        label: "Responsible Business Norms",
        heading: "Responsible Business Norms",
        timeline: "June 2025 -> February 2026",
        beforeTitle: "June 2025",
        afterTitle: "February 2026",
        before: ["Vendors identified and engaged through focused meetings"],
        after: [
          "Discussions promoted reduced plastic use and reusable alternatives",
          "Vendors incentivize customers bringing their own vessels",
          "112 vendors established Zero Plastic commitment in their shops",
        ],
        impact: [
          "Emerging responsible business behavior rooted in local economic systems",
          "Increased adoption of sustainable retail practices",
          "Strengthened accountability among local vendors",
        ],
      },
      {
        id: "labour",
        label: "Labour Dignity & Heat Response",
        heading: "Labour Dignity and Heat Response",
        timeline: "June 2025 -> February 2026",
        beforeTitle: "June 2025",
        afterTitle: "February 2026",
        before: [
          "Heat stress impacts on workers were not systematically addressed",
          "Limited local response to rising temperatures and working conditions",
        ],
        after: [
          "100 saplings distributed by an MSME as a heat response initiative",
          "Totally 470 saplings planted across 4 villages",
          "Villagers actively maintaining the trees",
        ],
        impact: [
          "Community-led heat mitigation through greening",
          "Improved local environmental conditions for workers",
          "Shared responsibility between communities and local actors",
        ],
      },
      {
        id: "child",
        label: "Child Protection & Ethical Business",
        heading: "Child Protection & Ethical Business",
        timeline: "June 2025 -> February 2026",
        beforeTitle: "June 2025",
        afterTitle: "February 2026",
        before: [
          "Limited coordinated efforts to address child marriage and child labour",
          "Lack of visible commitments from local businesses on child protection",
        ],
        after: [
          "Rally organized with schools, colleges, and Panchayat to prevent child marriage",
          "Enterprises committed to eliminating child labour",
          "No Child Labour signage displayed across business establishments",
        ],
        impact: [
          "Strengthened ethical business norms",
          "Increased institutional backing for child protection",
          "Greater community awareness and collective action",
        ],
      },
    ],
  },
};
