import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import ContourDivider from "@/components/ContourDivider";
import CountUp from "@/components/CountUp";
import HabitatVisual from "@/components/HabitatVisual";
import StoryCard from "@/components/StoryCard";
import WorldExplorer from "@/components/WorldExplorer";
import { fieldStories } from "@/data/content-data";
import { globalTotals } from "@/data/ocean-data";

const approach = [
  {
    n: "01",
    label: "restoration",
    title: "Mangrove, seagrass, and reef restoration",
    body: "We rebuild the habitat that coastal fisheries and storm protection depend on — planting, monitoring, and maintaining it for the years it takes to actually take hold.",
    habitat: "mangrove" as const,
    className: "md:col-span-7 bg-paper-dim",
  },
  {
    n: "02",
    label: "protection",
    title: "Marine protected area design",
    body: "We work with governments and fishing communities to design MPAs that people can actually live with, and enforce.",
    habitat: "mpa" as const,
    className: "md:col-span-5 bg-deep text-paper",
    dark: true,
  },
  {
    n: "03",
    label: "livelihoods",
    title: "Community co-management",
    body: "Every project trains and pays local wardens, monitors, and cooperative leads — conservation that has to also make economic sense to last.",
    habitat: "community" as const,
    className: "md:col-span-5 border border-paper-line",
  },
  {
    n: "04",
    label: "data",
    title: "Every project, publicly tracked",
    body: "Hectares, carbon, funding — published at the project level, not just rolled into an annual report.",
    habitat: "data" as const,
    className: "md:col-span-7 bg-amber-dim",
    link: "/explore",
  },
];

export default function Home() {
  const featuredStory = fieldStories[0];

  return (
    <div>
      <section className="pt-14 md:pt-20 pb-10 px-6 md:px-10">
        <div className="mx-auto max-w-7xl grid md:grid-cols-[1.1fr_1fr] gap-10 items-end">
          <Reveal>
            <p className="font-data text-xs uppercase tracking-widest text-biolum-strong mb-4">
              Field network · {globalTotals.countries} countries · live
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

      <section className="px-6 md:px-10 py-10">
        <div className="mx-auto max-w-7xl grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-8">
          {[
            { label: "Countries active", value: globalTotals.countries },
            { label: "Active projects", value: globalTotals.activeProjects },
            { label: "Hectares protected", value: globalTotals.hectaresProtected },
            { label: "Tonnes CO2 reduced", value: globalTotals.co2Reduced },
            { label: "MPAs established", value: globalTotals.mpaCount },
          ].map((m, i) => (
            <Reveal key={m.label} delay={i * 0.06}>
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
            {approach.map((item, i) => (
              <Reveal key={item.n} delay={i * 0.08} className={item.className}>
                <div className="rounded-2xl overflow-hidden h-full flex flex-col">
                  <HabitatVisual
                    habitat={item.habitat}
                    variant={item.dark ? "dark" : "light"}
                    className="aspect-[2.4/1] rounded-none"
                  />
                  <div className={`p-8 md:p-10 flex-1 flex flex-col ${item.dark ? "" : ""}`}>
                    <p
                      className={`font-data text-xs mb-3 ${
                        item.dark ? "text-paper/50" : "text-ink-faint"
                      }`}
                    >
                      {item.n} — {item.label}
                    </p>
                    <h3 className="font-display text-2xl mb-3">{item.title}</h3>
                    <p
                      className={`leading-relaxed max-w-[52ch] flex-1 ${
                        item.dark ? "text-paper/75" : "text-ink-soft"
                      }`}
                    >
                      {item.body}
                    </p>
                    {item.link && (
                      <Link
                        href={item.link}
                        className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-amber-strong"
                      >
                        See the global map <ArrowUpRight className="w-3.5 h-3.5" />
                      </Link>
                    )}
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

      <section className="px-6 md:px-10 py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <p className="font-data text-xs uppercase tracking-widest text-biolum-strong mb-3">
              From the field
            </p>
            <h2 className="font-display text-3xl md:text-4xl tracking-tight max-w-[20ch] mb-10">
              Stories from the coastline
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <StoryCard story={featuredStory} featured />
          </Reveal>
          <div className="mt-6 grid md:grid-cols-3 gap-6">
            {fieldStories.slice(1, 4).map((story, i) => (
              <Reveal key={story.id} delay={0.12 + i * 0.06}>
                <StoryCard story={story} />
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.3}>
            <Link
              href="/stories"
              className="mt-10 inline-flex items-center gap-2 text-sm font-medium text-biolum-strong hover:underline"
            >
              All impact stories <ArrowRight className="w-4 h-4" />
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
