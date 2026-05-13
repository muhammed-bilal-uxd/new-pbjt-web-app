const dindigulImage = "/images/in-practice/location-1b.png";

interface District {
  heroSection: HeroSection;
}

interface HeroSection {
  name: string;
  discription: string;
  heroImage: string;
}

export const districts: Record<string, District> = {
  ["dindigul"]: {
    heroSection: {
      name: "dindigul",
      discription: `A land of fertile plains, resilient communities, and rich traditions
            — where nature, culture, and livelihoods shape everyday life.`,
      heroImage: dindigulImage,
    },
  },
};
