import Reveal from "@/components/Reveal";
import ContourDivider from "@/components/ContourDivider";
import CountUp from "@/components/CountUp";
import WorldExplorer from "@/components/WorldExplorer";
import { globalTotals } from "@/data/ocean-data";

export default function ExplorePage() {
  return (
    <div>
      <section className="pt-14 pb-8 px-6 md:px-10">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <p className="font-data text-xs uppercase tracking-widest text-biolum-strong mb-3">
              Global progress
            </p>
            <h1 className="font-display text-4xl md:text-5xl tracking-tight max-w-[22ch]">
              World → country → region, one dataset underneath it all.
            </h1>
            <p className="mt-5 text-ink-soft max-w-[60ch] leading-relaxed">
              Every marker below is a live project. Switch the view to see the
              same data the way a funder, a government partner, or a visitor
              would read it.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="px-6 md:px-10 pb-16">
        <div className="mx-auto max-w-7xl">
          <Reveal delay={0.1}>
            <WorldExplorer height="h-[520px] md:h-[600px]" />
          </Reveal>
        </div>
      </section>

      <div className="px-6 md:px-10">
        <ContourDivider />
      </div>

      <section className="px-6 md:px-10 py-16">
        <div className="mx-auto max-w-7xl grid grid-cols-2 md:grid-cols-5 gap-8">
          {[
            { label: "Countries", value: globalTotals.countries },
            { label: "Active projects", value: globalTotals.activeProjects },
            { label: "Hectares protected", value: globalTotals.hectaresProtected },
            { label: "Tonnes CO2 reduced", value: globalTotals.co2Reduced },
            { label: "MPAs established", value: globalTotals.mpaCount },
          ].map((m, i) => (
            <Reveal key={m.label} delay={i * 0.06}>
              <p className="text-[11px] uppercase tracking-wider text-ink-faint mb-1">
                {m.label}
              </p>
              <CountUp value={m.value} className="font-data text-2xl text-ink" />
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
