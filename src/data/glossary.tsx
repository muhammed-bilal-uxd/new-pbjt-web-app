import {
  Building2,
  Scale,
  Leaf,
  FileText,
  Factory,
  HeartHandshake,
  Users,
  Network,
  GitBranch,
  MapPinned,
  Briefcase,
  Search,
  ShieldAlert,
  Trees,
  Handshake,
  Route,
  ClipboardCheck,
  LucideIcon,
} from "lucide-react";

interface ITerms {
  id: string;
  name: string;
  category: string;
  icon: LucideIcon;
  description: string;
}

export const terms: ITerms[] = [
  {
    id: "PBJT",
    name: "Place-Based Just Transition",
    category: "Framework",
    icon: Building2,
    description:
      "An approach to environmental and economic transition that starts from specific places such as villages, neighbourhoods, worksites, and production clusters. PBJT focuses on how workers, MSMEs, informal actors, and communities experience sustainability at the last tiers of value chains.",
  },
  {
    id: "JT",
    name: "Just Transition",
    category: "Framework",
    icon: Scale,
    description:
      "A process of shifting to environmentally sustainable economies in a fair and inclusive way, ensuring workers and communities are protected, supported, and represented during transition.",
  },
  {
    id: "ESAG",
    name: "Environmental Social and Governance",
    category: "Reporting",
    icon: Leaf,
    description:
      "A framework used by companies and investors to assess non-financial performance. PBJT examines whether ESG commitments create meaningful improvements in livelihoods, working conditions, and local environments.",
  },
  {
    id: "BRASR",
    name: "Business Responsibility and Sustainability Report",
    category: "Reporting",
    icon: FileText,
    description:
      "A disclosure framework used by companies to report social and environmental responsibilities. PBJT uses BRSR to compare corporate claims with realities experienced at the last tier of value chains.",
  },
  {
    id: "MSAME",
    name: "Micro Small and Medium Enterprises",
    category: "Enterprise",
    icon: Factory,
    description:
      "Small-scale businesses that form the backbone of local economies and supply chains. They often face financial, technical, and policy barriers during sustainability transitions.",
  },
  {
    id: "CSR",
    name: "Corporate Social Responsibility",
    category: "Governance",
    icon: HeartHandshake,
    description:
      "Activities undertaken by companies to contribute to social and environmental wellbeing. PBJT distinguishes CSR from accountability, which requires responsibility for core business impacts.",
  },
  {
    id: "SHG",
    name: "Self-Help Groups",
    category: "Community",
    icon: Users,
    description:
      "Community-based groups often formed around savings, credit, livelihoods, or shared concerns. They play an important role in resilience and collective decision-making.",
  },
  {
    id: "SAME",
    name: "Small and Medium Enterprises",
    category: "Enterprise",
    icon: Factory,
    description:
      "A term similar to MSMEs commonly used in policy and international contexts. PBJT prefers MSMEs to better represent micro and informal enterprises.",
  },
  {
    id: "VC",
    name: "Value Chain",
    category: "Framework",
    icon: GitBranch,
    description:
      "The full range of activities and actors involved in producing, distributing, using, and disposing of a product or service, including informal and last-tier actors.",
  },
  {
    id: "LTLM",
    name: "Last-Tier Last-Mile",
    category: "Framework",
    icon: MapPinned,
    description:
      "Workers, vendors, and enterprises located at the furthest end of value chains where impacts are most direct and protections are often weakest.",
  },
  {
    id: "IE",
    name: "Informal Economy",
    category: "Economy",
    icon: Briefcase,
    description:
      "Economic activities operating outside formal contracts or regulatory systems while remaining socially and economically organised.",
  },
  {
    id: "CCL",
    name: "Collective Collectivisation",
    category: "Community",
    icon: Users,
    description:
      "The process of organising individuals into groups capable of acting together, strengthening bargaining power and democratic participation.",
  },
  {
    id: "CA",
    name: "Collective Agency",
    category: "Community",
    icon: Users,
    description:
      "The ability of a group to influence decisions affecting livelihoods, environments, and working conditions. PBJT prioritises collective agency over individual resilience.",
  },
  {
    id: "WG",
    name: "Worker Groups",
    category: "Labour",
    icon: Users,
    description:
      "Formal or informal worker associations organised around occupations, workplaces, or shared concerns that help define fair and dignified green work.",
  },
  {
    id: "CCO",
    name: "Community Collectives",
    category: "Community",
    icon: Network,
    description:
      "Local groups organised around geography or shared concerns such as water, waste, livelihoods, or gender equity.",
  },
  {
    id: "GJ",
    name: "Green Jobs",
    category: "Labour",
    icon: Leaf,
    description:
      "Jobs that contribute to environmental sustainability while ensuring fair wages, safe working conditions, and livelihood security.",
  },
  {
    id: "PAS",
    name: "Participatory Action Study",
    category: "Research",
    icon: Search,
    description:
      "A method combining research, action, and reflection where communities and workers actively participate in generating knowledge and solutions.",
  },
  {
    id: "VE",
    name: "Village Ecosystem",
    category: "Community",
    icon: Trees,
    description:
      "The interconnected social, economic, environmental, and governance systems within a village or local area.",
  },
  {
    id: "GM",
    name: "Grievance Mechanism",
    category: "Governance",
    icon: ShieldAlert,
    description:
      "A process through which workers or communities raise concerns regarding labour conditions, environmental harm, or business practices.",
  },
  {
    id: "TR",
    name: "Transition Risk",
    category: "Risk",
    icon: ShieldAlert,
    description:
      "The social, economic, or livelihood risks that emerge when industries, markets, or policies shift toward sustainability.",
  },
  {
    id: "LR",
    name: "Local Resilience",
    category: "Community",
    icon: Trees,
    description:
      "The capacity of local communities and economies to adapt to environmental and economic changes without losing social cohesion or livelihoods.",
  },
  {
    id: "PR",
    name: "Power Redistribution",
    category: "Governance",
    icon: Scale,
    description:
      "The shifting of decision-making authority toward groups historically excluded from economic and environmental governance.",
  },
  {
    id: "CCR",
    name: "Co-Creation",
    category: "Methodology",
    icon: Handshake,
    description:
      "A collaborative process where communities, workers, MSMEs, and businesses jointly design solutions rather than having them imposed externally.",
  },
  {
    id: "VCM",
    name: "Value Chain Mapping",
    category: "Methodology",
    icon: Route,
    description:
      "A process used to identify all actors in a value chain, especially informal and last-tier participants often omitted from formal documentation.",
  },
  {
    id: "A",
    name: "Accountability",
    category: "Governance",
    icon: ClipboardCheck,
    description:
      "The ability of workers and communities to understand, question, and influence decisions affecting their lives and environment.",
  },
  {
    id: "SR",
    name: "Sustainability Reporting",
    category: "Reporting",
    icon: FileText,
    description:
      "The practice of disclosing environmental and social performance. PBJT views reporting as a starting point for dialogue rather than proof of impact.",
  },
];
