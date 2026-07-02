"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { countries, type Country, type Region } from "@/data/ocean-data";
import { projectToMapPercent } from "@/lib/map-projection";
import CountUp from "./CountUp";
import { ChevronRight, X, MapPin } from "lucide-react";

type Layer = "public" | "investor" | "government";

const layers: { id: Layer; label: string }[] = [
  { id: "public", label: "Public view" },
  { id: "investor", label: "Investor view" },
  { id: "government", label: "Government view" },
];

const layerMeta: Record<
  Layer,
  { description: string; hint: string; panelHeading: string }
> = {
  public: {
    description: "Impact stories and on-the-ground results",
    hint: "select a marker to read field case studies",
    panelHeading: "Case study",
  },
  investor: {
    description: "Funding deployed, remaining gaps, and capital progress",
    hint: "select a marker to see funding and deployment data",
    panelHeading: "Funding overview",
  },
  government: {
    description: "Program summaries and marine policy status",
    hint: "select a marker to see partnership and policy details",
    panelHeading: "Program summary",
  },
};

export default function WorldExplorer({
  defaultLayer = "public",
  height = "h-[560px]",
  surface = "paper",
}: {
  defaultLayer?: Layer;
  height?: string;
  surface?: "paper" | "deep";
}) {
  const [layer, setLayer] = useState<Layer>(defaultLayer);
  const [selected, setSelected] = useState<Country | null>(null);
  const [region, setRegion] = useState<Region | null>(null);

  const ringCenters = useMemo(
    () => [
      { x: 20, y: 30 },
      { x: 70, y: 65 },
      { x: 85, y: 25 },
    ],
    []
  );

  const activeLayer = layerMeta[layer];
  const onDeep = surface === "deep";

  return (
    <div className="w-full">
      {/* Layer switcher — same map, different data emphasis */}
      <div className="flex items-center gap-1 mb-3 flex-wrap">
        {layers.map((l) => (
          <button
            key={l.id}
            type="button"
            onClick={() => {
              setLayer(l.id);
              setRegion(null);
            }}
            className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-colors border ${
              layer === l.id
                ? onDeep
                  ? "bg-paper text-deep border-paper"
                  : "bg-deep text-paper border-deep"
                : onDeep
                  ? "bg-transparent text-paper/90 border-paper/40 hover:bg-paper/10 hover:border-paper/60"
                  : "bg-transparent text-ink-soft border-paper-line hover:border-ink-faint hover:text-ink"
            }`}
          >
            {l.label}
          </button>
        ))}
        <span
          className={`ml-auto text-xs font-data hidden sm:inline ${
            onDeep ? "text-paper/55" : "text-ink-faint"
          }`}
        >
          one dataset · {layers.length} views
        </span>
      </div>
      <p
        className={`mb-4 text-xs leading-relaxed ${
          onDeep ? "text-paper/80" : "text-ink-soft"
        }`}
      >
        <span className={`font-medium ${onDeep ? "text-paper" : "text-ink"}`}>
          {layers.find((l) => l.id === layer)?.label}
        </span>
        {" — "}
        {activeLayer.description}
      </p>

      <div
        className={`relative w-full ${height} rounded-2xl overflow-hidden bg-deep border border-deep-light`}
      >
        {/* Map canvas — shared coordinate space for landmass + markers */}
        <div className="absolute inset-0 flex items-center justify-center p-3 sm:p-4">
          <div className="relative h-full w-full max-w-full aspect-95/62">
            <img
              src="/world-map.svg"
              alt=""
              aria-hidden
              draggable={false}
              className="pointer-events-none absolute inset-0 h-full w-full select-none object-contain opacity-[0.42]"
            />

            {/* Lat/long grid over the map */}
            <svg
              className="pointer-events-none absolute inset-0 h-full w-full opacity-50"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              {Array.from({ length: 9 }).map((_, i) => (
                <line
                  key={`v-${i}`}
                  x1={(i + 1) * 10}
                  y1={0}
                  x2={(i + 1) * 10}
                  y2={100}
                  stroke="#f4efe6"
                  strokeOpacity={0.05}
                  strokeWidth={0.12}
                />
              ))}
              {Array.from({ length: 9 }).map((_, i) => (
                <line
                  key={`h-${i}`}
                  x1={0}
                  y1={(i + 1) * 10}
                  x2={100}
                  y2={(i + 1) * 10}
                  stroke="#f4efe6"
                  strokeOpacity={0.05}
                  strokeWidth={0.12}
                />
              ))}
            </svg>

            {/* Country markers */}
            {countries.map((c) => {
              const isSelected = selected?.id === c.id;
              const { x, y } = projectToMapPercent(c.lat, c.lng);
              return (
                <button
                  key={c.id}
                  onClick={() => {
                    setSelected(c);
                    setRegion(null);
                  }}
                  className="absolute z-10 -translate-x-1/2 -translate-y-1/2 group"
                  style={{ left: `${x}%`, top: `${y}%` }}
                  aria-label={`View ${c.name}`}
                >
                  <span className="relative flex items-center justify-center w-4 h-4">
                    <motion.span
                      className="absolute inset-0 rounded-full bg-biolum"
                      animate={{
                        scale: isSelected ? [1, 1.9, 1] : [1, 1.6, 1],
                        opacity: isSelected ? [0.5, 0, 0.5] : [0.35, 0, 0.35],
                      }}
                      transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
                    />
                    <span
                      className={`relative rounded-full border-2 border-paper transition-all ${
                        isSelected ? "w-3.5 h-3.5 bg-amber" : "w-2.5 h-2.5 bg-biolum"
                      }`}
                    />
                  </span>
                  <span
                    className={`pointer-events-none absolute left-1/2 -translate-x-1/2 top-5 whitespace-nowrap text-[11px] font-medium px-2 py-0.5 rounded-full bg-paper/95 text-ink transition-opacity ${
                      isSelected ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                    }`}
                  >
                    {c.name}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Bathymetric contour rings — ambient depth outside the map */}
        <svg
          className="pointer-events-none absolute inset-0 h-full w-full opacity-40"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          {ringCenters.map((c, ci) =>
            [1, 2, 3, 4, 5].map((r) => (
              <circle
                key={`${ci}-${r}`}
                cx={c.x}
                cy={c.y}
                r={r * 9}
                fill="none"
                stroke="#f4efe6"
                strokeOpacity={0.04 + (5 - r) * 0.01}
                strokeWidth={0.15}
              />
            ))
          )}
        </svg>

        {/* Detail panel */}
        <AnimatePresence>
          {selected && (
            <motion.div
              key={selected.id}
              initial={{ x: 24, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 24, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="absolute top-3 right-3 bottom-3 z-20 w-[86%] sm:w-80 bg-paper rounded-xl shadow-xl overflow-y-auto"
            >
              <div className="p-5">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-[11px] font-data uppercase tracking-wider text-ink-faint">
                      {region ? `${selected.name} / region` : "Country"}
                    </p>
                    <h3 className="font-display text-xl mt-0.5">
                      {region ? region.name : selected.name}
                    </h3>
                  </div>
                  <button
                    onClick={() => setSelected(null)}
                    className="p-1 -mt-1 -mr-1 text-ink-faint hover:text-ink"
                    aria-label="Close"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                {!region && (
                  <span
                    className={`inline-block mt-2 text-[11px] font-medium px-2 py-0.5 rounded-full ${
                      selected.govPartnership === "Active"
                        ? "bg-biolum-dim text-biolum-strong"
                        : "bg-amber-dim text-amber-strong"
                    }`}
                  >
                    {selected.govPartnership} government partnership
                  </span>
                )}

                {/* Metric readouts — shared across all layers */}
                <div className="grid grid-cols-2 gap-3 mt-5">
                  <Metric
                    label="Hectares protected"
                    value={region ? region.hectares : selected.hectaresProtected}
                  />
                  <Metric
                    label="CO2 reduced (t)"
                    value={region ? region.co2 : selected.co2Reduced}
                  />
                  <Metric
                    label="Active projects"
                    value={region ? region.projects : selected.projects}
                    format={(n) => Math.round(n).toString()}
                  />
                  {!region && (
                    <Metric
                      label="MPAs established"
                      value={selected.mpaCount}
                      format={(n) => Math.round(n).toString()}
                    />
                  )}
                </div>

                {/* Layer-specific content */}
                {!region && (
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={layer}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.2 }}
                      className="mt-5 pt-5 border-t border-paper-line"
                    >
                      <p className="text-[11px] font-data uppercase tracking-wider text-ink-faint mb-3">
                        {activeLayer.panelHeading}
                      </p>

                      {layer === "public" && (
                        <p className="text-sm text-ink-soft leading-relaxed">{selected.caseStudy}</p>
                      )}

                      {layer === "investor" && (
                        <div className="space-y-3">
                          <div className="flex items-center justify-between">
                            <span className="text-xs text-ink-soft">Funding deployed</span>
                            <span className="font-data text-sm text-biolum-strong">
                              ${(selected.fundingDeployedUsd / 1_000_000).toFixed(1)}M
                            </span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-xs text-ink-soft">Remaining funding gap</span>
                            <span className="font-data text-sm text-amber-strong">
                              ${(selected.fundingGapUsd / 1_000_000).toFixed(1)}M
                            </span>
                          </div>
                          <div className="h-1.5 rounded-full bg-paper-dim overflow-hidden">
                            <div
                              className="h-full bg-biolum"
                              style={{
                                width: `${
                                  (selected.fundingDeployedUsd /
                                    (selected.fundingDeployedUsd + selected.fundingGapUsd)) *
                                  100
                                }%`,
                              }}
                            />
                          </div>
                        </div>
                      )}

                      {layer === "government" && (
                        <>
                          <p className="text-sm text-ink-soft leading-relaxed">{selected.summary}</p>
                          <p className="text-xs font-data text-ink-faint mt-3">
                            Policy status: marine spatial plan{" "}
                            {selected.govPartnership === "Active" ? "adopted" : "under review"}
                          </p>
                        </>
                      )}
                    </motion.div>
                  </AnimatePresence>
                )}

                {/* Region drill-down */}
                {!region && (
                  <div className="mt-5 pt-5 border-t border-paper-line">
                    <p className="text-[11px] font-data uppercase tracking-wider text-ink-faint mb-2">
                      Regions
                    </p>
                    <div className="space-y-1.5">
                      {selected.regions.map((r) => (
                        <button
                          key={r.id}
                          onClick={() => setRegion(r)}
                          className="w-full flex items-center justify-between px-3 py-2 rounded-lg bg-paper-dim hover:bg-deep-paper text-sm transition-colors"
                        >
                          <span className="flex items-center gap-2">
                            <MapPin className="w-3.5 h-3.5 text-biolum-strong" />
                            {r.name}
                          </span>
                          <ChevronRight className="w-3.5 h-3.5 text-ink-faint" />
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {region && (
                  <button
                    onClick={() => setRegion(null)}
                    className="mt-5 text-xs font-medium text-biolum-strong hover:underline"
                  >
                    ← Back to {selected.name}
                  </button>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {!selected && (
          <div className="absolute left-4 bottom-4 z-10 text-paper/50 text-xs font-data">
            {activeLayer.hint}
          </div>
        )}
      </div>
    </div>
  );
}

function Metric({
  label,
  value,
  format,
}: {
  label: string;
  value: number;
  format?: (n: number) => string;
}) {
  return (
    <div className="bg-paper-dim rounded-lg px-3 py-2.5">
      <p className="text-[10px] uppercase tracking-wider text-ink-faint">{label}</p>
      <CountUp
        value={value}
        format={format}
        className="font-data text-lg text-ink block mt-0.5"
      />
    </div>
  );
}
