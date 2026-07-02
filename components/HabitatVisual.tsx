import FieldImage from "@/components/FieldImage";
import { habitatImages } from "@/data/images";
import { habitatLabels, type Habitat } from "@/data/content-data";

export default function HabitatVisual({
  habitat,
  className = "",
  variant = "light",
  image,
  priority = false,
}: {
  habitat: Habitat;
  className?: string;
  variant?: "light" | "dark";
  image?: string;
  priority?: boolean;
}) {
  return (
    <FieldImage
      src={image ?? habitatImages[habitat]}
      alt={habitatLabels[habitat]}
      className={className}
      overlay={variant === "dark" ? "warm" : "subtle"}
      priority={priority}
    />
  );
}
