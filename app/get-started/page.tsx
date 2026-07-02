import Link from "next/link";
import Reveal from "@/components/Reveal";
import { ArrowUpRight } from "lucide-react";

const paths = [
  { title: "Support the mission", body: "Give, fundraise, or spread the word.", href: "/", cta: "See how" },
  { title: "Invest or co-fund", body: "Talk to our investor relations team.", href: "/invest#contact", cta: "Investor contact" },
  { title: "Partner as a government", body: "Explore national partnership options.", href: "/government#contact", cta: "Government contact" },
  { title: "Become a field partner", body: "Apply to join the operator network.", href: "/partners", cta: "Apply" },
];

export default function GetStartedPage() {
  return (
    <div className="pt-14 pb-24 px-6 md:px-10">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <h1 className="font-display text-4xl md:text-5xl tracking-tight max-w-[18ch] mb-4">
            Which of these is you?
          </h1>
          <p className="text-ink-soft max-w-[50ch] mb-14 leading-relaxed">
            Pick the path that fits — each one goes to the right team.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-4">
          {paths.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.07}>
              <Link
                href={p.href}
                className="group flex items-center justify-between rounded-2xl border border-paper-line p-7 hover:border-biolum-strong transition-colors h-full"
              >
                <div>
                  <h3 className="font-display text-xl mb-1.5">{p.title}</h3>
                  <p className="text-sm text-ink-soft">{p.body}</p>
                  <span className="inline-flex items-center gap-1 text-sm font-medium text-biolum-strong mt-4">
                    {p.cta} <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
