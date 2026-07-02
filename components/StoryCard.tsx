import Link from "next/link";
import HabitatVisual from "@/components/HabitatVisual";
import { habitatLabels, type FieldStory } from "@/data/content-data";
import { storyImages } from "@/data/images";

export default function StoryCard({
  story,
  featured = false,
}: {
  story: FieldStory;
  featured?: boolean;
}) {
  const image =
    story.image ?? storyImages[story.id as keyof typeof storyImages] ?? undefined;

  return (
    <article
      className={`group overflow-hidden rounded-2xl border border-paper-line bg-paper transition-colors hover:border-ink-faint ${
        featured ? "md:grid md:grid-cols-[1.1fr_1fr]" : ""
      }`}
    >
      <HabitatVisual
        habitat={story.habitat}
        image={image}
        priority={featured}
        className={featured ? "min-h-[220px] md:min-h-full md:rounded-none md:rounded-l-2xl" : "aspect-[16/9] rounded-b-none"}
      />
      <div className={`p-6 md:p-8 ${featured ? "flex flex-col justify-center" : ""}`}>
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className="font-data text-[11px] uppercase tracking-wider text-biolum-strong">
            {story.countryName}
          </span>
          <span className="text-ink-faint">·</span>
          <span className="text-[11px] font-data text-ink-faint">{story.date}</span>
          <span className="rounded-full bg-biolum-dim px-2 py-0.5 text-[10px] font-medium text-biolum-strong">
            {habitatLabels[story.habitat]}
          </span>
        </div>
        <h2
          className={`font-display leading-snug tracking-tight ${
            featured ? "text-2xl md:text-3xl" : "text-xl"
          }`}
        >
          {story.title}
        </h2>
        <p className="mt-3 text-sm text-ink-soft leading-relaxed">{story.excerpt}</p>
        {story.quote && (
          <blockquote className="mt-4 border-l-2 border-biolum pl-4 font-display text-base italic text-ink">
            &ldquo;{story.quote}&rdquo;
          </blockquote>
        )}
        <div className="mt-5 flex items-center justify-between gap-4 flex-wrap">
          <div className="text-xs text-ink-faint">
            {story.author && (
              <p>
                {story.author}
                {story.role ? ` · ${story.role}` : ""}
              </p>
            )}
            {story.location && <p className="font-data mt-0.5">{story.location}</p>}
          </div>
          {story.highlight && (
            <span className="rounded-full bg-amber-dim px-2.5 py-1 text-[11px] font-medium text-amber-strong">
              {story.highlight}
            </span>
          )}
        </div>
        <Link
          href="/explore"
          className="mt-5 inline-flex text-sm font-medium text-biolum-strong group-hover:underline"
        >
          View on map →
        </Link>
      </div>
    </article>
  );
}
