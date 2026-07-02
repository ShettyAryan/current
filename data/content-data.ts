export type Habitat = "mangrove" | "reef" | "seagrass" | "mpa" | "community" | "data";

export type FieldStory = {
  id: string;
  countryId: string;
  countryName: string;
  title: string;
  excerpt: string;
  quote?: string;
  author?: string;
  role?: string;
  location?: string;
  habitat: Habitat;
  date: string;
  readMinutes: number;
  highlight?: string;
};

export const featuredQuote = {
  quote:
    "The mangroves came back before the fish did. Then the fish came back too.",
  author: "Fatima Devi",
  role: "Cooperative lead",
  location: "Konkan coast, Maharashtra",
  countryId: "IN",
  habitat: "mangrove" as Habitat,
};

export const fieldStories: FieldStory[] = [
  {
    id: "konkan-mangroves",
    countryId: "IN",
    countryName: "India",
    title: "Five years of mangrove return on the Konkan coast",
    excerpt:
      "A Maharashtra program restored nursery habitat for 40+ commercial fish species while retraining 300 former trawler crew as reef and mangrove wardens.",
    quote: featuredQuote.quote,
    author: featuredQuote.author,
    role: featuredQuote.role,
    location: featuredQuote.location,
    habitat: "mangrove",
    date: "Mar 2026",
    readMinutes: 6,
    highlight: "40+ fish species returned",
  },
  {
    id: "abrolhos-reef",
    countryId: "BR",
    countryName: "Brazil",
    title: "Cutting bottom-trawling in the Abrolhos reef corridor",
    excerpt:
      "Enforcement funding and community patrols reduced destructive trawling inside the corridor boundary by an estimated 70% within three years.",
    location: "Abrolhos, Bahia",
    habitat: "reef",
    date: "Feb 2026",
    readMinutes: 5,
    highlight: "70% trawling reduction",
  },
  {
    id: "raja-ampat",
    countryId: "ID",
    countryName: "Indonesia",
    title: "Community no-take zones in Raja Ampat",
    excerpt:
      "Locally managed zones increased reef fish biomass by over 60% in six years — with catch rising just outside the boundaries.",
    location: "Raja Ampat, West Papua",
    habitat: "reef",
    date: "Jan 2026",
    readMinutes: 7,
    highlight: "60% biomass increase",
  },
  {
    id: "vanga-seagrass",
    countryId: "KE",
    countryName: "Kenya",
    title: "Vanga Bay's community blue carbon credits",
    excerpt:
      "One of the first community-run seagrass initiatives to sell verified credits, returning revenue directly to local cooperatives.",
    location: "Vanga Bay, Kwale",
    habitat: "seagrass",
    date: "Dec 2025",
    readMinutes: 5,
    highlight: "Verified blue carbon credits",
  },
  {
    id: "verde-passage",
    countryId: "PH",
    countryName: "Philippines",
    title: "Verde Island Passage MPA network",
    excerpt:
      "Inside the center of the world's marine biodiversity, 14,000 hectares now sit under active co-management across three provinces.",
    location: "Verde Island Passage",
    habitat: "mpa",
    date: "Nov 2025",
    readMinutes: 6,
    highlight: "14,000 ha co-managed",
  },
  {
    id: "mekong-delta",
    countryId: "VN",
    countryName: "Vietnam",
    title: "Mekong Delta mangrove buffer restoration",
    excerpt:
      "Coastal cooperatives replanted 2,400 hectares of mangrove buffer zone, reducing storm surge damage for 12 fishing villages.",
    location: "Ben Tre, Mekong Delta",
    habitat: "mangrove",
    date: "Oct 2025",
    readMinutes: 5,
    highlight: "2,400 ha replanted",
  },
  {
    id: "osa-peninsula",
    countryId: "CR",
    countryName: "Costa Rica",
    title: "Osa Peninsula reef recovery program",
    excerpt:
      "Coral nurseries and no-take zones along the Pacific coast restored spawning grounds for snapper and grouper populations.",
    location: "Osa Peninsula, Pacific coast",
    habitat: "reef",
    date: "Sep 2025",
    readMinutes: 6,
    highlight: "Coral nurseries live",
  },
];

export const habitatLabels: Record<Habitat, string> = {
  mangrove: "Mangrove",
  reef: "Coral reef",
  seagrass: "Seagrass",
  mpa: "Marine protected area",
  community: "Community",
  data: "Field data",
};

export const reports = [
  { year: 2026, title: "Annual report FY26", size: "4.2 MB" },
  { year: 2025, title: "Annual report FY25", size: "3.8 MB" },
  { year: 2025, title: "ESG & sustainability report", size: "2.1 MB" },
  { year: 2024, title: "Annual report FY24", size: "3.6 MB" },
];

export const leadership = [
  {
    name: "Dr. Amara Solano",
    role: "Executive Director",
    credential: "Former UNEP marine program lead",
    initials: "AS",
    accent: "from-deep to-biolum-strong",
  },
  {
    name: "Rahul Nair",
    role: "Chief Financial Officer",
    credential: "15 years blended-finance structuring",
    initials: "RN",
    accent: "from-amber-strong to-amber",
  },
  {
    name: "Wei Lin Tan",
    role: "Director of Field Operations",
    credential: "Ran Indo-Pacific reef programs since 2014",
    initials: "WT",
    accent: "from-biolum-strong to-deep-light",
  },
  {
    name: "Grace Odhiambo",
    role: "Director of Government Relations",
    credential: "Former Kenyan coastal policy advisor",
    initials: "GO",
    accent: "from-deep-light to-biolum",
  },
];

export const policyAreas = [
  {
    n: "01",
    title: "Marine spatial planning",
    body: "Technical support to zone coastal waters for conservation, fisheries, and development — grounded in project-level habitat data.",
    habitat: "mpa" as Habitat,
  },
  {
    n: "02",
    title: "MPA legislation support",
    body: "Drafting and review support for marine protected area legal frameworks, drawing on enforcement outcomes from active sites.",
    habitat: "mpa" as Habitat,
  },
  {
    n: "03",
    title: "Blue carbon accounting",
    body: "Methodology and verification support for national blue-carbon inventories and credit frameworks.",
    habitat: "seagrass" as Habitat,
  },
  {
    n: "04",
    title: "Coastal livelihood transition",
    body: "Program design for communities shifting from extractive fishing toward restoration-based livelihoods.",
    habitat: "community" as Habitat,
  },
];

export const partnerSteps = [
  { n: "01", title: "Apply", body: "Tell us about your organization and the coastline you work in." },
  { n: "02", title: "Site assessment", body: "Our field team conducts a joint habitat and community assessment." },
  { n: "03", title: "Agreement", body: "We agree scope, funding, and reporting cadence together." },
  { n: "04", title: "Launch", body: "Your project goes live on the global map within 90 days." },
];

export const partnerChecklist = [
  "Registered nonprofit, cooperative, or community organization",
  "Active presence in a coastal or marine community",
  "Willingness to publish project-level outcome data",
  "At least one dedicated field coordinator",
];

export const trainings = [
  {
    title: "Reef restoration fundamentals",
    level: "Beginner",
    duration: "3 days",
    habitat: "reef" as Habitat,
    modules: "Coral handling, nursery setup, baseline surveys",
  },
  {
    title: "Mangrove nursery management",
    level: "Intermediate",
    duration: "5 days",
    habitat: "mangrove" as Habitat,
    modules: "Species selection, planting density, community patrols",
  },
  {
    title: "Community MPA enforcement",
    level: "Advanced",
    duration: "2 weeks",
    habitat: "mpa" as Habitat,
    modules: "Zoning design, patrol protocols, conflict mediation",
  },
  {
    title: "Seagrass monitoring & blue carbon",
    level: "Intermediate",
    duration: "4 days",
    habitat: "seagrass" as Habitat,
    modules: "Plot surveys, carbon sampling, credit verification prep",
  },
];

export const certifications = [
  {
    title: "Field operator certification",
    body: "Recognizes partners who complete two core trainings and publish 12 months of verified outcome data.",
  },
  {
    title: "Restoration site accreditation",
    body: "Independent review of habitat recovery metrics, community governance, and enforcement capacity.",
  },
];
