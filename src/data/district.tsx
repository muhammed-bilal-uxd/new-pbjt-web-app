import { dingigulData } from "./district/dindigul-data";
import { hosurData } from "./district/hosur-data";
import { krishnagiriData } from "./district/krishnagiri-data";
import { virudhunagarData } from "./district/virudhnagar-data";

export interface District {
  heroSection: HeroSection;
  keyInsightsData: KeyInsights;
  climateData: ClimateData;
  village: VillageData;
  beforeAfter: BeforeAfterData;
}

export interface BeforeAfterData {
  name: string;
  title: string;
  description: string;
  badge: string;
  themes: VillageTheme[];
}

export interface VillageTheme {
  id: string;
  label: string;
  heading: string;
  timeline: string;
  beforeTitle: string;
  afterTitle: string;
  before: string[];
  after: string[];
  impact: string[];
}

export interface VillageData {
  title: string;
  description: string;
  villageAreas: VillageArea[];
}

export interface VillageArea {
  id: string;
  name: string;
  image: string;
  cardMetrics: { dumpSites: number; waterBodies: number; trees: number };
  panel: {
    tagline: string;
    activities: string[];
    insight: string;
    restored: string[];
    restoredImage: string;
    restoredCaption: string;
    groups: { name: string; members: number }[];
  };
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
  ["dindigul"]: dingigulData,
  ["virudhnagar"]: virudhunagarData,
  ["krishnagiri"]: krishnagiriData,
  ["hosur"]: hosurData,
};
