/** Map viewBox for `public/world-map.svg` */
export const MAP_VIEWBOX = { width: 950, height: 620 } as const;

/** Convert calibrated map percentages to SVG viewBox coordinates */
export function mapPercentToViewBox(mapX: number, mapY: number) {
  return {
    x: (mapX / 100) * MAP_VIEWBOX.width,
    y: (mapY / 100) * MAP_VIEWBOX.height,
  };
}
