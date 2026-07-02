import Reveal from "@/components/Reveal";
import { countries } from "@/data/ocean-data";

export default function StoriesPage() {
  return (
    <div className="pt-14 pb-24 px-6 md:px-10">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="font-data text-xs uppercase tracking-widest text-biolum-strong mb-3">
            From the field
          </p>
          <h1 className="font-display text-4xl md:text-5xl tracking-tight max-w-[20ch] mb-14">
            Impact stories
          </h1>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-6">
          {countries.map((c, i) => (
            <Reveal
              key={c.id}
              delay={i * 0.06}
              className={i === 0 ? "md:col-span-2" : ""}
            >
              <article className="rounded-2xl border border-paper-line p-8 h-full">
                <p className="font-data text-xs text-biolum-strong mb-3">{c.name}</p>
                <p className="font-display text-xl md:text-2xl leading-snug max-w-[46ch]">
                  {c.caseStudy}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
