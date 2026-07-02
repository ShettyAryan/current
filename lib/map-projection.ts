/** Map viewBox for `public/world-map.svg` */
export const MAP_VIEWBOX = { width: 950, height: 620 } as const;

/**
 * Project WGS84 coordinates onto the world-map.svg canvas.
 * Calibrated against India and Kenya path bounds in the SVG asset.
 */
export function projectToMapPercent(lat: number, lng: number) {
  const x = 47.44 + 0.3044 * lng;
  const y = 54.02 - 0.508 * lat;

  return {
    x: Math.min(100, Math.max(0, x)),
    y: Math.min(100, Math.max(0, y)),
  };
}
