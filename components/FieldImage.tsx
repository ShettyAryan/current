import Image from "next/image";

export default function FieldImage({
  src,
  alt,
  className = "",
  priority = false,
  overlay = "warm",
  sizes = "(max-width: 768px) 100vw, 50vw",
}: {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  overlay?: "warm" | "subtle" | "none";
  sizes?: string;
}) {
  const overlayClass =
    overlay === "warm"
      ? "bg-gradient-to-t from-deep/55 via-deep/15 to-transparent"
      : overlay === "subtle"
        ? "bg-deep/20"
        : "";

  return (
    <div className={`relative overflow-hidden bg-paper-dim ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        className="object-cover"
      />
      {overlay !== "none" && (
        <div className={`pointer-events-none absolute inset-0 ${overlayClass}`} aria-hidden />
      )}
    </div>
  );
}
