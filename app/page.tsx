import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import ContourDivider from "@/components/ContourDivider";
import CountUp from "@/components/CountUp";
import WorldExplorer from "@/components/WorldExplorer";
import { globalTotals } from "@/data/ocean-data";

export default function Home() {
  return (
    <div>
      {/* Hero — a live-feeling map moment, not a stock photo */}
      <section className="pt-14 md:pt-20 pb-10 px-6 md:px-10">
        <div className="mx-auto max-w-7xl grid md:grid-cols-[1.1fr_1fr] gap-10 items-end">
          <Reveal>
            <p className="font-data text-xs uppercase tracking-widest text-biolum-strong mb-4">
              Field network · 5 countries · live
            </p>
            <h1 className="font-display text-[2.6rem] leading-[1.05] md:text-6xl md:leading-[1.03] tracking-tight text-ink">
              Coastlines don&apos;t
              <br />
              recover on their own.
              <br />
              <span className="italic text-biolum-strong">We help them.</span>
            </h1>
            <p className="mt-6 text-base md:text-lg text-ink-soft max-w-[46ch] leading-relaxed">
              Current runs marine restoration projects with coastal communities,
              national governments, and co-investors — and publishes the data
              from all of it, in the open, as it happens.
            </p>
            <div className="mt-8 flex items-center gap-4">
              <Link
                href="/explore"
                className="inline-flex items-center gap-2 rounded-full bg-deep text-paper px-6 py-3 text-sm font-medium hover:bg-deep-light transition-colors"
              >
                Explore the map <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/get-started"
                className="text-sm font-medium text-ink hover:text-biolum-strong underline decoration-paper-line underline-offset-4"
              >
                Get involved
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="rounded-2xl bg-deep p-1.5">
              <WorldExplorer
                height="h-[320px] md:h-[380px]"
                defaultLayer="public"
                surface="deep"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <div className="px-6 md:px-10">
        <ContourDivider />
      </div>

      {/* Instrument-style metrics band */}
      <section className="px-6 md:px-10 py-10">
        <div className="mx-auto max-w-7xl grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
          {[
            { label: "Countries active", value: globalTotals.countries, suffix: "" },
            { label: "Active projects", value: globalTotals.activeProjects, suffix: "" },
            {
              label: "Hectares protected",
              value: globalTotals.hectaresProtected,
              suffix: "",
            },
            {
              label: "Tonnes CO2 reduced",
              value: globalTotals.co2Reduced,
              suffix: "",
            },
          ].map((m, i) => (
            <Reveal key={m.label} delay={i * 0.08}>
              <p className="text-[11px] uppercase tracking-wider text-ink-faint mb-1">
                {m.label}
              </p>
              <CountUp
                value={m.value}
                className="font-data text-2xl md:text-3xl text-ink"
              />
            </Reveal>
          ))}
        </div>
      </section>

      <div className="px-6 md:px-10">
        <ContourDivider />
      </div>

      {/* Approach — asymmetric, not a 3-equal-column grid */}
      <section className="px-6 md:px-10 py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <p className="font-data text-xs uppercase tracking-widest text-biolum-strong mb-3">
              Our approach
            </p>
            <h2 className="font-display text-3xl md:text-4xl max-w-[24ch] tracking-tight">
              Three ways we work, always alongside the people who live there.
            </h2>
          </Reveal>

          <div className="mt-14 grid md:grid-cols-12 gap-8 md:gap-6">
            <Reveal className="md:col-span-7">
              <div className="bg-paper-dim rounded-2xl p-8 md:p-10 h-full">
                <p className="font-data text-xs text-ink-faint mb-3">01 — restoration</p>
                <h3 className="font-display text-2xl mb-3">
                  Mangrove, seagrass, and reef restoration
                </h3>
                <p className="text-ink-soft leading-relaxed max-w-[52ch]">
                  We rebuild the habitat that coastal fisheries and storm
                  protection depend on — planting, monitoring, and maintaining
                  it for the years it takes to actually take hold.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.1} className="md:col-span-5">
              <div className="bg-deep text-paper rounded-2xl p-8 md:p-10 h-full">
                <p className="font-data text-xs text-paper/50 mb-3">02 — protection</p>
                <h3 className="font-display text-2xl mb-3">
                  Marine protected area design
                </h3>
                <p className="text-paper/75 leading-relaxed">
                  We work with governments and fishing communities to design
                  MPAs that people can actually live with, and enforce.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.2} className="md:col-span-5">
              <div className="border border-paper-line rounded-2xl p-8 md:p-10 h-full">
                <p className="font-data text-xs text-ink-faint mb-3">03 — livelihoods</p>
                <h3 className="font-display text-2xl mb-3">
                  Community co-management
                </h3>
                <p className="text-ink-soft leading-relaxed">
                  Every project trains and pays local wardens, monitors, and
                  cooperative leads — conservation that has to also make
                  economic sense to last.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.3} className="md:col-span-7">
              <div className="bg-amber-dim rounded-2xl p-8 md:p-10 h-full flex flex-col justify-between">
                <div>
                  <p className="font-data text-xs text-amber-strong mb-3">04 — data</p>
                  <h3 className="font-display text-2xl mb-3">
                    Every project, publicly tracked
                  </h3>
                  <p className="text-ink-soft leading-relaxed max-w-[48ch]">
                    Hectares, carbon, funding — published at the project level,
                    not just rolled into an annual report.
                  </p>
                </div>
                <Link
                  href="/explore"
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-amber-strong"
                >
                  See the global map <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <div className="px-6 md:px-10">
        <ContourDivider />
      </div>

      {/* Featured impact story */}
      <section className="px-6 md:px-10 py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <p className="font-data text-xs uppercase tracking-widest text-biolum-strong mb-3">
              From the field
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <blockquote className="font-display text-2xl md:text-4xl leading-snug max-w-[26ch] tracking-tight">
              &ldquo;The mangroves came back before the fish did. Then the fish
              came back too.&rdquo;
            </blockquote>
            <div className="mt-6 flex items-center justify-between flex-wrap gap-4">
              <p className="text-sm text-ink-soft">
                Fatima Devi, cooperative lead — Konkan coast, Maharashtra
              </p>
              <Link
                href="/stories"
                className="text-sm font-medium text-biolum-strong hover:underline"
              >
                Read the full story →
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
