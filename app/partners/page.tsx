import Reveal from "@/components/Reveal";
import ContourDivider from "@/components/ContourDivider";
import HabitatVisual from "@/components/HabitatVisual";
import {
  certifications,
  habitatLabels,
  partnerChecklist,
  partnerSteps,
  trainings,
} from "@/data/content-data";
import { CheckCircle2 } from "lucide-react";

export default function PartnersPage() {
  return (
    <div>
      <section className="pt-14 pb-10 px-6 md:px-10">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <p className="font-data text-xs uppercase tracking-widest text-biolum-strong mb-3">
              For partners & field operators
            </p>
            <h1 className="font-display text-4xl md:text-5xl tracking-tight max-w-[20ch]">
              Join the field network.
            </h1>
            <p className="mt-5 text-ink-soft max-w-[60ch] leading-relaxed">
              We fund, train, and connect local organizations already doing
              the work — rather than parachuting in a new one.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="px-6 md:px-10 pb-16">
        <div className="mx-auto max-w-7xl grid md:grid-cols-4 gap-6">
          {partnerSteps.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.08}>
              <p className="font-data text-sm text-biolum-strong mb-3">{s.n}</p>
              <h3 className="font-medium mb-1.5">{s.title}</h3>
              <p className="text-sm text-ink-soft leading-relaxed">{s.body}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <div className="px-6 md:px-10">
        <ContourDivider />
      </div>

      <section className="px-6 md:px-10 py-16">
        <div className="mx-auto max-w-7xl grid md:grid-cols-2 gap-10 items-start">
          <Reveal>
            <h2 className="font-display text-2xl md:text-3xl max-w-[18ch]">
              Who this is for
            </h2>
            <p className="mt-4 text-ink-soft leading-relaxed max-w-[46ch]">
              We partner with organizations already rooted in their coastal
              community — we bring funding, technical training, and a
              distribution channel for their outcomes.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <ul className="space-y-3">
              {partnerChecklist.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="w-4.5 h-4.5 text-biolum-strong shrink-0 mt-0.5" />
                  <span className="text-sm text-ink-soft">{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <div className="px-6 md:px-10">
        <ContourDivider />
      </div>

      <section className="px-6 md:px-10 py-16" id="training">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <h2 className="font-display text-2xl md:text-3xl mb-8">Training programs</h2>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-4">
            {trainings.map((t, i) => (
              <Reveal key={t.title} delay={i * 0.06}>
                <div className="rounded-2xl border border-paper-line overflow-hidden h-full hover:border-ink-faint transition-colors">
                  <HabitatVisual habitat={t.habitat} className="aspect-[3/1] rounded-none" />
                  <div className="p-5">
                    <div className="flex items-start justify-between gap-3">
                      <p className="text-sm font-medium">{t.title}</p>
                      <span className="rounded-full bg-biolum-dim px-2 py-0.5 text-[10px] font-medium text-biolum-strong shrink-0">
                        {habitatLabels[t.habitat]}
                      </span>
                    </div>
                    <p className="text-xs text-ink-soft mt-2 leading-relaxed">{t.modules}</p>
                    <div className="flex items-center gap-4 text-xs text-ink-faint font-data mt-4">
                      <span>{t.level}</span>
                      <span>{t.duration}</span>
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

      <section className="px-6 md:px-10 py-16" id="certification">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <p className="font-data text-xs uppercase tracking-widest text-biolum-strong mb-3">
              Certification
            </p>
            <h2 className="font-display text-2xl md:text-3xl mb-8 max-w-[22ch]">
              Recognized field standards
            </h2>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-4">
            {certifications.map((c, i) => (
              <Reveal key={c.title} delay={i * 0.08}>
                <div className="rounded-2xl bg-paper-dim border border-paper-line p-6 h-full">
                  <h3 className="font-display text-xl">{c.title}</h3>
                  <p className="text-sm text-ink-soft mt-2 leading-relaxed">{c.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 md:px-10 py-16" id="network">
        <div className="mx-auto max-w-7xl bg-deep text-paper rounded-2xl p-10 md:p-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <h2 className="font-display text-2xl md:text-3xl max-w-[20ch]">
              Ready to apply?
            </h2>
            <p className="text-paper/70 mt-3 max-w-[42ch]">
              Applications are reviewed on a rolling basis by our field team.
            </p>
          </div>
          <a
            href="mailto:partners@current.org"
            className="inline-flex items-center rounded-full bg-paper text-ink px-6 py-3 text-sm font-medium hover:bg-paper-dim transition-colors whitespace-nowrap"
          >
            partners@current.org
          </a>
        </div>
      </section>
    </div>
  );
}
