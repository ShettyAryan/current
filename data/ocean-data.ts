export type Region = {
  id: string;
  name: string;
  projects: number;
  hectares: number;
  co2: number;
};

export type Habitat = "mangrove" | "reef" | "seagrass" | "mpa";

export type Country = {
  id: string;
  name: string;
  /** Marine project anchor — WGS84 coordinates */
  lat: number;
  lng: number;
  /** Marker position on world-map.svg, as % of the 950×620 viewBox */
  mapX: number;
  mapY: number;
  habitat: Habitat;
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
    mapX: 70.6,
    mapY: 44.9,
    habitat: "mangrove",
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
    mapX: 33.6,
    mapY: 59.7,
    habitat: "reef",
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
    mapX: 82.3,
    mapY: 58.5,
    habitat: "reef",
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
    mapX: 59.6,
    mapY: 55.2,
    habitat: "seagrass",
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
    mapX: 82.9,
    mapY: 47.5,
    habitat: "mpa",
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
  {
    id: "VN",
    name: "Vietnam",
    lat: 10,
    lng: 106.5,
    mapX: 78.1,
    mapY: 47.5,
    habitat: "mangrove",
    projects: 8,
    hectaresProtected: 24000,
    co2Reduced: 68000,
    mpaCount: 4,
    govPartnership: "Active",
    fundingGapUsd: 2800000,
    fundingDeployedUsd: 6100000,
    summary:
      "Mekong Delta mangrove buffer restoration with provincial fisheries departments and coastal cooperatives.",
    caseStudy:
      "In Ben Tre province, cooperatives replanted 2,400 hectares of mangrove buffer zone, reducing storm surge damage for 12 fishing villages along the delta edge.",
    regions: [
      { id: "BT", name: "Ben Tre", projects: 3, hectares: 9800, co2: 28000 },
      { id: "KG", name: "Kien Giang", projects: 3, hectares: 8200, co2: 24000 },
      { id: "CT", name: "Ca Mau", projects: 2, hectares: 6000, co2: 16000 },
    ],
  },
  {
    id: "CR",
    name: "Costa Rica",
    lat: 8.5,
    lng: -83.5,
    mapX: 23.5,
    mapY: 51.1,
    habitat: "reef",
    projects: 5,
    hectaresProtected: 15200,
    co2Reduced: 42000,
    mpaCount: 3,
    govPartnership: "Exploratory",
    fundingGapUsd: 1900000,
    fundingDeployedUsd: 3400000,
    summary:
      "Pacific coast reef recovery on the Osa Peninsula, partnering with national park authorities and local dive cooperatives.",
    caseStudy:
      "Coral nurseries and no-take zones along the Osa coast restored spawning grounds for snapper and grouper, with fish counts up 45% at monitoring sites within four years.",
    regions: [
      { id: "OS", name: "Osa Peninsula", projects: 3, hectares: 10200, co2: 28000 },
      { id: "GC", name: "Golfo Dulce", projects: 2, hectares: 5000, co2: 14000 },
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
  { year: 2025, hectares: 260000, funding: 72.3, projects: 70 },
  { year: 2026, hectares: 291700, funding: 81.6, projects: 75 },
];
