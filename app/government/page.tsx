import Reveal from "@/components/Reveal";
import ContourDivider from "@/components/ContourDivider";
import CountUp from "@/components/CountUp";
import { countries, globalTotals } from "@/data/ocean-data";

const policyAreas = [
  {
    n: "01",
    title: "Marine spatial planning",
    body: "Technical support to zone coastal waters for conservation, fisheries, and development — grounded in project-level habitat data.",
  },
  {
    n: "02",
    title: "MPA legislation support",
    body: "Drafting and review support for marine protected area legal frameworks, drawing on enforcement outcomes from active sites.",
  },
  {
    n: "03",
    title: "Blue carbon accounting",
    body: "Methodology and verification support for national blue-carbon inventories and credit frameworks.",
  },
  {
    n: "04",
    title: "Coastal livelihood transition",
    body: "Program design for communities shifting from extractive fishing toward restoration-based livelihoods.",
  },
];

export default function GovernmentPage() {
  return (
    <div>
      <section className="pt-14 pb-10 px-6 md:px-10">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <p className="font-data text-xs uppercase tracking-widest text-biolum-strong mb-3">
              For governments & policymakers
            </p>
            <h1 className="font-display text-4xl md:text-5xl tracking-tight max-w-[22ch]">
              Technical partnership for national marine goals.
            </h1>
            <p className="mt-5 text-ink-soft max-w-[60ch] leading-relaxed">
              We work alongside national and state governments on marine
              spatial planning, MPA legislation, and blue-carbon reporting —
              backed by data from {globalTotals.countries} active country
              programs.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Country success stories */}
      <section className="px-6 md:px-10 pb-16">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <h2 className="font-display text-2xl md:text-3xl mb-8">
              Country partnerships
            </h2>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-4">
            {countries.map((c, i) => (
              <Reveal key={c.id} delay={i * 0.06}>
                <div className="rounded-2xl border border-paper-line p-6 h-full">
                  <div className="flex items-start justify-between">
                    <h3 className="font-display text-xl">{c.name}</h3>
                    <span
                      className={`text-[11px] font-medium px-2 py-0.5 rounded-full ${
                        c.govPartnership === "Active"
                          ? "bg-biolum-dim text-biolum-strong"
                          : "bg-amber-dim text-amber-strong"
                      }`}
                    >
                      {c.govPartnership}
                    </span>
                  </div>
                  <p className="text-sm text-ink-soft mt-2.5 leading-relaxed">{c.summary}</p>
                  <div className="flex items-center gap-5 mt-4 pt-4 border-t border-paper-line">
                    <div>
                      <p className="text-[10px] uppercase tracking-wider text-ink-faint">MPAs</p>
                      <p className="font-data text-sm">{c.mpaCount}</p>
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-wider text-ink-faint">
                        Hectares
                      </p>
                      <p className="font-data text-sm">
                        {c.hectaresProtected.toLocaleString()}
                      </p>
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-wider text-ink-faint">
                        CO2 (t)
                      </p>
                      <p className="font-data text-sm">{c.co2Reduced.toLocaleString()}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <div className="px-6 md:px-10">
        <ContourDivider />
      </div>

      {/* Policy frameworks — numbered because it's a genuine structured framework */}
      <section className="px-6 md:px-10 py-16" id="policy">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <p className="font-data text-xs uppercase tracking-widest text-biolum-strong mb-3">
              Policy frameworks
            </p>
            <h2 className="font-display text-2xl md:text-3xl mb-10 max-w-[22ch]">
              Four areas of technical support
            </h2>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-x-10 gap-y-8">
            {policyAreas.map((p, i) => (
              <Reveal key={p.n} delay={i * 0.06} className="flex gap-4">
                <span className="font-data text-sm text-biolum-strong pt-1">{p.n}</span>
                <div>
                  <h3 className="font-medium text-ink">{p.title}</h3>
                  <p className="text-sm text-ink-soft mt-1.5 leading-relaxed max-w-[46ch]">
                    {p.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <div className="px-6 md:px-10">
        <ContourDivider />
      </div>

      {/* Blue carbon data */}
      <section className="px-6 md:px-10 py-16" id="carbon">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <p className="font-data text-xs uppercase tracking-widest text-biolum-strong mb-3">
              Blue carbon data
            </p>
            <h2 className="font-display text-2xl md:text-3xl mb-8 max-w-[20ch]">
              Sequestration by country
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="space-y-3">
              {countries
                .slice()
                .sort((a, b) => b.co2Reduced - a.co2Reduced)
                .map((c) => (
                  <div key={c.id} className="flex items-center gap-4">
                    <span className="text-sm w-28 shrink-0">{c.name}</span>
                    <div className="flex-1 h-2 rounded-full bg-paper-dim overflow-hidden">
                      <div
                        className="h-full bg-biolum"
                        style={{
                          width: `${(c.co2Reduced / globalTotals.co2Reduced) * 100 * 2.2}%`,
                        }}
                      />
                    </div>
                    <span className="font-data text-xs text-ink-faint w-20 text-right">
                      <CountUp value={c.co2Reduced} /> t
                    </span>
                  </div>
                ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Government contact */}
      <section className="px-6 md:px-10 py-16" id="contact">
        <div className="mx-auto max-w-7xl bg-deep text-paper rounded-2xl p-10 md:p-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <h2 className="font-display text-2xl md:text-3xl max-w-[22ch]">
              Start a government partnership conversation
            </h2>
            <p className="text-paper/70 mt-3 max-w-[42ch]">
              For ministries, coastal authorities, and multilateral partners.
            </p>
          </div>
          <a
            href="mailto:government@current.org"
            className="inline-flex items-center rounded-full bg-paper text-ink px-6 py-3 text-sm font-medium hover:bg-paper-dim transition-colors whitespace-nowrap"
          >
            government@current.org
          </a>
        </div>
      </section>
    </div>
  );
}
