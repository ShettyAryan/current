import Reveal from "@/components/Reveal";
import ContourDivider from "@/components/ContourDivider";
import StoryCard from "@/components/StoryCard";
import { fieldStories } from "@/data/content-data";

export default function StoriesPage() {
  const [featured, ...rest] = fieldStories;

  return (
    <div>
      <section className="pt-14 pb-8 px-6 md:px-10">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <p className="font-data text-xs uppercase tracking-widest text-biolum-strong mb-3">
              From the field
            </p>
            <h1 className="font-display text-4xl md:text-5xl tracking-tight max-w-[20ch]">
              Impact stories
            </h1>
            <p className="mt-5 text-ink-soft max-w-[58ch] leading-relaxed">
              On-the-ground reporting from {fieldStories.length} active programs —
              mangrove recovery, reef protection, seagrass credits, and
              community-managed marine areas.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="px-6 md:px-10 pb-10">
        <div className="mx-auto max-w-7xl">
          <Reveal delay={0.08}>
            <StoryCard story={featured} featured />
          </Reveal>
        </div>
      </section>

      <div className="px-6 md:px-10">
        <ContourDivider />
      </div>

      <section className="px-6 md:px-10 py-16 pb-24">
        <div className="mx-auto max-w-7xl grid md:grid-cols-2 gap-6">
          {rest.map((story, i) => (
            <Reveal key={story.id} delay={i * 0.06}>
              <StoryCard story={story} />
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
