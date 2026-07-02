import Link from "next/link";
import { Waves } from "lucide-react";
import ContourDivider from "./ContourDivider";
import { globalTotals } from "@/data/ocean-data";

const columns = [
  {
    heading: "General public",
    links: [
      { label: "The mission", href: "/" },
      { label: "Impact stories", href: "/stories" },
      { label: "Global map", href: "/explore" },
      { label: "Get involved", href: "/get-started" },
    ],
  },
  {
    heading: "Investors",
    links: [
      { label: "Growth metrics", href: "/invest" },
      { label: "ESG reports", href: "/invest#esg" },
      { label: "Annual reports", href: "/invest#reports" },
      { label: "Investor contact", href: "/invest#contact" },
    ],
  },
  {
    heading: "Governments",
    links: [
      { label: "Country partnerships", href: "/government" },
      { label: "Policy frameworks", href: "/government#policy" },
      { label: "Blue carbon data", href: "/government#carbon" },
      { label: "Government relations", href: "/government#contact" },
    ],
  },
  {
    heading: "Partners",
    links: [
      { label: "Become a partner", href: "/partners" },
      { label: "Field operator network", href: "/partners#network" },
      { label: "Training", href: "/partners#training" },
      { label: "Certification", href: "/partners#certification" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-deep text-paper mt-24">
      <div className="px-6 md:px-10">
        <ContourDivider tone="paper" className="opacity-70" />
      </div>
      <div className="mx-auto max-w-7xl px-6 md:px-10 pb-12 pt-4">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <Waves className="w-5 h-5 text-biolum" strokeWidth={1.75} />
              <span className="font-display text-lg text-paper">Current.</span>
            </Link>
            <p className="mt-4 text-sm text-paper/60 leading-relaxed max-w-[22ch]">
              A global marine restoration platform working across{" "}
              <span className="font-data text-[13px] text-biolum">{globalTotals.countries} countries</span>.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.heading}>
              <h3 className="text-xs font-medium uppercase tracking-wider text-paper/50 mb-4">
                {col.heading}
              </h3>
              <ul className="space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="text-sm text-paper/80 hover:text-biolum transition-colors"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 pt-6 border-t border-paper/15 flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
          <p className="text-xs text-paper/40 font-data">
            © 2026 Current — demo build, illustrative data
          </p>
          <p className="text-xs text-paper/40">
            22.4761° N, 88.3639° E — last field sync 6 hours ago
          </p>
        </div>
      </div>
    </footer>
  );
}
