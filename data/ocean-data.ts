export type Region = {
  id: string;
  name: string;
  projects: number;
  hectares: number;
  co2: number;
};

export type Country = {
  id: string;
  name: string;
  /** Marine project anchor — WGS84 coordinates for marker placement */
  lat: number;
  lng: number;
  projects: number;
  hectaresProtected: number;
  co2Reduced: number;
  mpaCount: number;
  govPartnership: "Active" | "In negotiation" | "Exploratory";
  fundingGapUsd: number;
  fundingDeployedUsd: number;
  summary: string;
  caseStudy: string;
  regions: Region[];
};

export const countries: Country[] = [
  {
    id: "IN",
    name: "India",
    lat: 18,
    lng: 73,
    projects: 14,
    hectaresProtected: 42000,
    co2Reduced: 118000,
    mpaCount: 6,
    govPartnership: "Active",
    fundingGapUsd: 4200000,
    fundingDeployedUsd: 9800000,
    summary:
      "Mangrove restoration along the Konkan coast, run alongside state fisheries departments and coastal panchayats.",
    caseStudy:
      "In Maharashtra, a five-year mangrove program brought back nursery habitat for 40+ commercial fish species, while training 300 former trawler crew as reef and mangrove wardens.",
    regions: [
      { id: "MH", name: "Maharashtra", projects: 5, hectares: 16400, co2: 41000 },
      { id: "GJ", name: "Gujarat", projects: 4, hectares: 11200, co2: 29500 },
      { id: "TN", name: "Tamil Nadu", projects: 5, hectares: 14400, co2: 47500 },
    ],
  },
  {
    id: "BR",
    name: "Brazil",
    lat: -13,
    lng: -38.5,
    projects: 9,
    hectaresProtected: 61000,
    co2Reduced: 205000,
    mpaCount: 4,
    govPartnership: "Active",
    fundingGapUsd: 6800000,
    fundingDeployedUsd: 14200000,
    summary:
      "Reef and estuary protection across the northeast coast, co-managed with federal marine authorities.",
    caseStudy:
      "The Abrolhos reef corridor program cut destructive bottom-trawling within its boundary by an estimated 70% within three years of enforcement funding.",
    regions: [
      { id: "BA", name: "Bahia", projects: 4, hectares: 28000, co2: 96000 },
      { id: "PE", name: "Pernambuco", projects: 3, hectares: 19500, co2: 62000 },
      { id: "ES", name: "Espírito Santo", projects: 2, hectares: 13500, co2: 47000 },
    ],
  },
  {
    id: "ID",
    name: "Indonesia",
    lat: -4,
    lng: 118,
    projects: 21,
    hectaresProtected: 88000,
    co2Reduced: 312000,
    mpaCount: 11,
    govPartnership: "Active",
    fundingGapUsd: 9100000,
    fundingDeployedUsd: 21400000,
    summary:
      "The largest field presence in the network — coral restoration and community fisheries co-management across the archipelago.",
    caseStudy:
      "In Raja Ampat, community-run no-take zones increased reef fish biomass by over 60% within six years, directly increasing catch just outside the zone boundaries.",
    regions: [
      { id: "RA", name: "Raja Ampat", projects: 7, hectares: 31000, co2: 118000 },
      { id: "WK", name: "Wakatobi", projects: 6, hectares: 26000, co2: 94000 },
      { id: "BA2", name: "Bali", projects: 8, hectares: 31000, co2: 100000 },
    ],
  },
  {
    id: "KE",
    name: "Kenya",
    lat: -3.8,
    lng: 39.7,
    projects: 6,
    hectaresProtected: 19500,
    co2Reduced: 54000,
    mpaCount: 3,
    govPartnership: "In negotiation",
    fundingGapUsd: 3100000,
    fundingDeployedUsd: 4200000,
    summary:
      "Community-led seagrass and mangrove restoration along the Kenyan coast, tied to a national blue-carbon credit framework.",
    caseStudy:
      "The Vanga Bay seagrass project became one of the first community-run blue carbon initiatives to sell verified credits, returning revenue directly to local cooperatives.",
    regions: [
      { id: "KL", name: "Kilifi", projects: 3, hectares: 9800, co2: 27000 },
      { id: "KW", name: "Kwale", projects: 3, hectares: 9700, co2: 27000 },
    ],
  },
  {
    id: "PH",
    name: "Philippines",
    lat: 13,
    lng: 122,
    projects: 12,
    hectaresProtected: 37000,
    co2Reduced: 96000,
    mpaCount: 8,
    govPartnership: "Active",
    fundingGapUsd: 5200000,
    fundingDeployedUsd: 8600000,
    summary:
      "One of the longest-running marine protected area networks in the portfolio, spanning three island provinces.",
    caseStudy:
      "The Verde Island Passage MPA network — sitting inside what's often called the center of the world's marine biodiversity — now covers over 14,000 hectares under active co-management.",
    regions: [
      { id: "PL", name: "Palawan", projects: 5, hectares: 16000, co2: 41000 },
      { id: "CB", name: "Cebu", projects: 4, hectares: 12000, co2: 31000 },
      { id: "BT", name: "Batangas", projects: 3, hectares: 9000, co2: 24000 },
    ],
  },
];

export const globalTotals = {
  countries: countries.length,
  activeProjects: countries.reduce((sum, c) => sum + c.projects, 0),
  hectaresProtected: countries.reduce((sum, c) => sum + c.hectaresProtected, 0),
  co2Reduced: countries.reduce((sum, c) => sum + c.co2Reduced, 0),
  mpaCount: countries.reduce((sum, c) => sum + c.mpaCount, 0),
  fundingDeployedUsd: countries.reduce((sum, c) => sum + c.fundingDeployedUsd, 0),
};

export const growthSeries = [
  { year: 2021, hectares: 41000, funding: 12.4, projects: 22 },
  { year: 2022, hectares: 78000, funding: 24.8, projects: 34 },
  { year: 2023, hectares: 134000, funding: 41.2, projects: 46 },
  { year: 2024, hectares: 189000, funding: 58.9, projects: 55 },
  { year: 2025, hectares: 227000, funding: 72.3, projects: 62 },
  { year: 2026, hectares: 247500, funding: 81.6, projects: 62 },
];
