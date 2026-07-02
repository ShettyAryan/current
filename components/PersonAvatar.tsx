export default function PersonAvatar({
  name,
  initials,
  accent,
}: {
  name: string;
  initials: string;
  accent: string;
}) {
  return (
    <div
      className={`relative mb-4 flex aspect-square items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br ${accent}`}
      aria-hidden
    >
      <span className="font-display text-3xl text-paper/90">{initials}</span>
      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-deep/30 to-transparent" />
      <span className="sr-only">{name}</span>
    </div>
  );
}
