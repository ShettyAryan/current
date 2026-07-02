/** Build a sized Unsplash CDN URL from a photo slug */
export function unsplash(photoId: string, width = 1200) {
  return `https://images.unsplash.com/${photoId}?auto=format&fit=crop&w=${width}&q=80`;
}

const mangroveRoots = unsplash("photo-1589556183130-530470785fab");
const mangroveAerial = unsplash("photo-1529758597842-15d98e72705b");
const reef = unsplash("photo-1708649290066-5f617003b93f");
const seagrass = unsplash("photo-1629215833477-4af6208b13d1");
const fieldData = unsplash("photo-1484291470158-b8f8d608850d");
const mpa = unsplash("photo-1624314430820-d129dcab803b");
const rajaAmpat = unsplash("photo-1703769605297-cc74106244d9");
const mekongDelta = unsplash("photo-1580630873708-e0475b1856c4");
const osaPeninsula = unsplash("photo-1629337461234-5f34073f1382");

/** Habitat-themed field photography */
export const habitatImages = {
  mangrove: mangroveRoots,
  reef,
  seagrass,
  mpa,
  community: mpa,
  data: fieldData,
} as const;

/** Story-specific imagery */
export const storyImages = {
  "konkan-mangroves": mangroveRoots,
  "abrolhos-reef": reef,
  "raja-ampat": rajaAmpat,
  "vanga-seagrass": seagrass,
  "verde-passage": rajaAmpat,
  "mekong-delta": mekongDelta,
  "osa-peninsula": osaPeninsula,
} as const;

export const countryImages = {
  IN: mangroveRoots,
  BR: reef,
  ID: rajaAmpat,
  KE: seagrass,
  PH: rajaAmpat,
  VN: mekongDelta,
  CR: osaPeninsula,
} as const;

export const leadershipImages = {
  "Dr. Amara Solano": unsplash("photo-1573496359142-b8d87734a5a2", 800),
  "Rahul Nair": unsplash("photo-1560250097-dc4347860847", 800),
  "Wei Lin Tan": unsplash("photo-1507003211169-0a1dd7228f2d", 800),
  "Grace Odhiambo": unsplash("photo-1580489944761-15a19d654956", 800),
} as const;

export const approachImages = {
  restoration: mangroveRoots,
  protection: mpa,
  livelihoods: mangroveAerial,
  data: fieldData,
} as const;
