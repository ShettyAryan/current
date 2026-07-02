"use client";

import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import Reveal from "@/components/Reveal";
import ContourDivider from "@/components/ContourDivider";
import CountUp from "@/components/CountUp";
import FieldImage from "@/components/FieldImage";
import { leadership, reports } from "@/data/content-data";
import { leadershipImages } from "@/data/images";
import { growthSeries, globalTotals, countries } from "@/data/ocean-data";

export default function InvestPage() {
  const totalFundingM = (globalTotals.fundingDeployedUsd / 1_000_000).toFixed(1);
  const latestHectares = growthSeries[growthSeries.length - 1].hectares;

  return (
    <div>
      <section className="pt-14 pb-10 px-6 md:px-10">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <p className="font-data text-xs uppercase tracking-widest text-biolum-strong mb-3">
              For investors and funders
            </p>
            <h1 className="font-display text-4xl md:text-5xl tracking-tight max-w-[20ch]">
              Growth, deployed capital, and verified outcomes.
            </h1>
            <p className="mt-5 text-ink-soft max-w-[60ch] leading-relaxed">
              Reported the way a scaling operator should be — trailing metrics,
              not projections, with per-country breakdowns available on request.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="px-6 md:px-10 pb-16" id="growth">
        <div className="mx-auto max-w-7xl grid md:grid-cols-2 gap-6">
          <Reveal className="bg-paper-dim rounded-2xl p-6 md:p-8">
            <p className="text-xs uppercase tracking-wider text-ink-faint mb-1">
              Hectares under protection, cumulative
            </p>
            <p className="font-data text-2xl text-ink mb-4">
              <CountUp value={latestHectares} />
            </p>
            <div className="h-48">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={growthSeries}>
                  <defs>
                    <linearGradient id="hectares" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#2e9c82" stopOpacity={0.35} />
                      <stop offset="100%" stopColor="#2e9c82" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid vertical={false} stroke="#ddd3bd" strokeOpacity={0.6} />
                  <XAxis
                    dataKey="year"
                    tick={{ fontSize: 11, fill: "#24164099" }}
                    axisLine={false}
                    tickLine={false}
                  />
                  <YAxis hide />
                  <Tooltip
                    contentStyle={{
                      background: "#f4efe6",
                      border: "1px solid #ddd3bd",
                      borderRadius: 8,
                      fontSize: 12,
                    }}
                  />
                  <Area
                    type="monotone"
                    dataKey="hectares"
                    stroke="#217a67"
                    strokeWidth={2}
                    fill="url(#hectares)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="bg-paper-dim rounded-2xl p-6 md:p-8">
            <p className="text-xs uppercase tracking-wider text-ink-faint mb-1">
              Capital deployed, cumulative
            </p>
            <p className="font-data text-2xl text-ink mb-4">${totalFundingM}M</p>
            <div className="h-48">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={growthSeries}>
                  <CartesianGrid vertical={false} stroke="#ddd3bd" strokeOpacity={0.6} />
                  <XAxis
                    dataKey="year"
                    tick={{ fontSize: 11, fill: "#24164099" }}
                    axisLine={false}
                    tickLine={false}
                  />
                  <YAxis hide />
                  <Tooltip
                    contentStyle={{
                      background: "#f4efe6",
                      border: "1px solid #ddd3bd",
                      borderRadius: 8,
                      fontSize: 12,
                    }}
                  />
                  <Bar dataKey="funding" fill="#d97d3d" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </Reveal>
        </div>
      </section>

      <div className="px-6 md:px-10">
        <ContourDivider />
      </div>

      <section className="px-6 md:px-10 py-16">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <h2 className="font-display text-2xl md:text-3xl mb-6">
              Capital deployment by country
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="overflow-x-auto rounded-2xl border border-paper-line">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-paper-dim text-left text-xs uppercase tracking-wider text-ink-faint">
                    <th className="px-5 py-3 font-medium">Country</th>
                    <th className="px-5 py-3 font-medium">Deployed</th>
                    <th className="px-5 py-3 font-medium">Funding gap</th>
                    <th className="px-5 py-3 font-medium">Projects</th>
                    <th className="px-5 py-3 font-medium">Partnership</th>
                  </tr>
                </thead>
                <tbody>
                  {countries.map((c) => (
                    <tr key={c.id} className="border-t border-paper-line">
                      <td className="px-5 py-3.5 font-medium">{c.name}</td>
                      <td className="px-5 py-3.5 font-data text-biolum-strong">
                        ${(c.fundingDeployedUsd / 1_000_000).toFixed(1)}M
                      </td>
                      <td className="px-5 py-3.5 font-data text-amber-strong">
                        ${(c.fundingGapUsd / 1_000_000).toFixed(1)}M
                      </td>
                      <td className="px-5 py-3.5 font-data">{c.projects}</td>
                      <td className="px-5 py-3.5 text-ink-soft">{c.govPartnership}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        </div>
      </section>

      <div className="px-6 md:px-10">
        <ContourDivider />
      </div>

      <section className="px-6 md:px-10 py-16" id="esg">
        <div className="mx-auto max-w-7xl grid md:grid-cols-[1fr_1.2fr] gap-10">
          <Reveal>
            <p className="font-data text-xs uppercase tracking-widest text-biolum-strong mb-3">
              ESG & reporting
            </p>
            <h2 className="font-display text-2xl md:text-3xl max-w-[18ch]">
              Reports and disclosures
            </h2>
            <p className="mt-4 text-ink-soft leading-relaxed max-w-[46ch]">
              Full ESG methodology and third-party verification details are
              available in the current annual report.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="space-y-2" id="reports">
              {reports.map((r) => (
                <div
                  key={r.title}
                  className="flex items-center justify-between px-5 py-4 rounded-xl border border-paper-line hover:border-ink-faint transition-colors"
                >
                  <div>
                    <p className="text-sm font-medium">{r.title}</p>
                    <p className="text-xs text-ink-faint font-data">{r.year}</p>
                  </div>
                  <span className="text-xs font-data text-ink-faint">{r.size} · PDF</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <div className="px-6 md:px-10">
        <ContourDivider />
      </div>

      <section className="px-6 md:px-10 py-16">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <h2 className="font-display text-2xl md:text-3xl mb-10">Leadership</h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
            {leadership.map((p, i) => (
              <Reveal key={p.name} delay={i * 0.06}>
                <FieldImage
                  src={leadershipImages[p.name as keyof typeof leadershipImages]}
                  alt={p.name}
                  className="mb-4 aspect-square rounded-xl"
                  overlay="subtle"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                <p className="text-sm font-medium">{p.name}</p>
                <p className="text-xs text-biolum-strong mt-0.5">{p.role}</p>
                <p className="text-xs text-ink-faint mt-1.5 leading-relaxed">
                  {p.credential}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 md:px-10 py-16" id="contact">
        <div className="mx-auto max-w-7xl bg-deep text-paper rounded-2xl p-10 md:p-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <h2 className="font-display text-2xl md:text-3xl max-w-[20ch]">
              Speak with the investor relations team
            </h2>
            <p className="text-paper/70 mt-3 max-w-[42ch]">
              For co-investment, blended finance, or diligence requests.
            </p>
          </div>
          <a
            href="mailto:invest@current.org"
            className="inline-flex items-center rounded-full bg-paper text-ink px-6 py-3 text-sm font-medium hover:bg-paper-dim transition-colors whitespace-nowrap"
          >
            invest@current.org
          </a>
        </div>
      </section>
    </div>
  );
}
