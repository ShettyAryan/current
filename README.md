# Current — Ocean Conservation Platform (demo build)

A working Next.js + Tailwind prototype implementing the "Chart Paper &
Bioluminescence" design system across all four audiences: Public, Investors,
Governments, and Partners — plus the interactive World → Country → Region
map explorer as the shared centerpiece.

## Run it locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000

## What's built

- `/` — Public homepage (hero, live metrics, approach, impact story)
- `/explore` — Full interactive global map (World → Country → Region), with
  Public / Investor / Government data-layer switching
- `/invest` — Investor growth metrics, financial table, ESG/reports, leadership
- `/government` — Country partnerships, policy frameworks, blue carbon data
- `/partners` — Become a partner, process, training
- `/stories` — Impact stories index
- `/get-started` — Audience routing / contact

## Notes

- All data in `data/ocean-data.ts` is illustrative/placeholder — swap in real
  figures before this goes further than a demo.
- Fonts (Fraunces, Inter, JetBrains Mono) are self-hosted via `@fontsource`
  packages — no external font requests at runtime.
- Animation: Framer Motion for scroll reveals, the count-up metric readouts,
  the contour-line divider draw-in, and the map's marker/panel transitions.
  Respects `prefers-reduced-motion`.
- Leadership photos and a few other image slots are solid-color placeholders
  — drop in real assets when available.
