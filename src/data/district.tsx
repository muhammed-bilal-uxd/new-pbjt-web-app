const dindigulImage = "/images/in-practice/location-1b.png";

export interface District {
  heroSection: HeroSection;
  keyInsightsData: KeyInsights;
}

interface HeroSection {
  name: string;
  discription: string;
  heroImage: string;
}

interface KeyInsights {
  name: string;
  description: string[];
}

export const districts: Record<string, District> = {
  ["dindigul"]: {
    heroSection: {
      name: "dindigul",
      discription: `A land of fertile plains, resilient communities, and rich traditions
            — where nature, culture, and livelihoods shape everyday life.`,
      heroImage: dindigulImage,
    },
    keyInsightsData: {
      name: "dindigul",
      description: [
        "Dindigul district, in southern Tamil Nadu, sits at a unique ecological crossroads — where fertile plains meet the hill ecosystems of the Palani and Sirumalai ranges. These landscapes shape the district's climate, water systems, and biodiversity.",
        "The plains experience a semi-arid tropical monsoon climate, while hill areas such as Kodaikanal have a cooler environment. Average annual rainfall: ~836 mm, largely dependent on the North East Monsoon.",
        "Nearly 70% of the population depends on agriculture and related activities. Major crops include onions, groundnuts, grapes, flowers, and vegetables.",
        "Traditional industries include: Iron lock making · Leather tanning · Textile production (Art-Silk &amp; Sungudi sarees)",
      ],
    },
  },
};
