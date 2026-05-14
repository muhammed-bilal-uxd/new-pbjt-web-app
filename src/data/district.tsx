const dindigulImage = "/images/in-practice/location-1b.png";

export interface District {
  heroSection: HeroSection;
  keyInsightsData: KeyInsights;
  climateData: ClimateData;
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

interface ClimateData {
  name: string;
  rows: ClimateRow[];
}

export interface ClimateRow {
  year: number;
  rainfall: string;
  minC: number;
  maxC: number;
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
    climateData: {
      name: "Dindigul",
      rows: [
        { year: 2021, rainfall: "240.5 mm", minC: 19.5, maxC: 37.5 },
        { year: 2022, rainfall: "1303.6 mm", minC: 19.8, maxC: 38.2 },
        { year: 2023, rainfall: "–", minC: 19.0, maxC: 38.7 },
        { year: 2024, rainfall: "–", minC: 20.0, maxC: 38.0 },
        { year: 2025, rainfall: "–", minC: 19.1, maxC: 39.0 },
      ],
    },
  },
};
