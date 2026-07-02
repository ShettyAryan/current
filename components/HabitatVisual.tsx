import type { ReactNode } from "react";
import type { Habitat } from "@/data/content-data";

const scenes: Record<Habitat, ReactNode> = {
  mangrove: (
    <>
      <path
        d="M0 120 Q40 95 80 110 T160 100 T240 108 T320 95 V160 H0 Z"
        fill="#e3f1ec"
      />
      <path
        d="M30 120 L38 72 M50 120 L44 68 M62 120 L58 76 M74 120 L70 64"
        stroke="#217a67"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M110 120 L118 78 M128 120 L122 70 M142 120 L136 74 M158 120 L152 66"
        stroke="#2e9c82"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M200 120 L208 80 M220 120 L214 72 M236 120 L228 76 M252 120 L246 68"
        stroke="#217a67"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <ellipse cx="180" cy="118" rx="120" ry="8" fill="#2e9c82" opacity="0.15" />
    </>
  ),
  reef: (
    <>
      <path
        d="M0 130 C60 108 120 118 180 102 C240 86 280 112 320 96 V160 H0 Z"
        fill="#e7dcf5"
      />
      <circle cx="90" cy="108" r="14" fill="#d97d3d" opacity="0.55" />
      <circle cx="130" cy="98" r="10" fill="#2e9c82" opacity="0.7" />
      <circle cx="175" cy="112" r="16" fill="#d97d3d" opacity="0.45" />
      <circle cx="220" cy="100" r="11" fill="#2e9c82" opacity="0.65" />
      <circle cx="260" cy="110" r="13" fill="#217a67" opacity="0.55" />
      <path
        d="M70 120 Q110 90 150 115 T230 108 T300 118"
        stroke="#217a67"
        strokeWidth="1.5"
        fill="none"
        opacity="0.5"
      />
    </>
  ),
  seagrass: (
    <>
      <rect x="0" y="108" width="320" height="52" fill="#e3f1ec" />
      <path
        d="M20 130 Q24 108 28 130 M40 132 Q46 106 50 132 M64 128 Q70 104 76 128"
        stroke="#217a67"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M120 132 Q126 100 132 132 M148 128 Q154 102 160 128 M176 130 Q182 104 188 130"
        stroke="#2e9c82"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M220 128 Q226 100 232 128 M248 132 Q254 106 260 132 M276 130 Q282 104 288 130"
        stroke="#217a67"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M0 118 Q80 112 160 116 T320 114"
        stroke="#2e9c82"
        strokeWidth="1"
        opacity="0.35"
        fill="none"
      />
    </>
  ),
  mpa: (
    <>
      <rect x="0" y="100" width="320" height="60" fill="#ece4d3" />
      <circle cx="160" cy="118" r="52" fill="none" stroke="#2e9c82" strokeWidth="2" strokeDasharray="6 4" />
      <circle cx="160" cy="118" r="34" fill="#e3f1ec" opacity="0.8" />
      <path d="M148 118 L156 126 L174 108" stroke="#217a67" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <path
        d="M40 132 Q100 120 160 128 T280 124"
        stroke="#ddd3bd"
        strokeWidth="1"
        fill="none"
      />
    </>
  ),
  community: (
    <>
      <rect x="0" y="108" width="320" height="52" fill="#f8e9dc" />
      <circle cx="100" cy="108" r="18" fill="#d97d3d" opacity="0.35" />
      <circle cx="160" cy="100" r="22" fill="#2e9c82" opacity="0.3" />
      <circle cx="220" cy="108" r="18" fill="#d97d3d" opacity="0.35" />
      <path d="M80 132 H240" stroke="#b8632c" strokeWidth="2" strokeLinecap="round" opacity="0.4" />
      <path
        d="M120 132 V118 M160 132 V112 M200 132 V118"
        stroke="#217a67"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </>
  ),
  data: (
    <>
      <rect x="0" y="96" width="320" height="64" fill="#e7dcf5" />
      <rect x="40" y="108" width="56" height="36" rx="4" fill="#f4efe6" stroke="#ddd3bd" />
      <rect x="112" y="116" width="56" height="28" rx="4" fill="#f4efe6" stroke="#ddd3bd" />
      <rect x="184" y="104" width="56" height="40" rx="4" fill="#f4efe6" stroke="#ddd3bd" />
      <path d="M52 132 L68 120 L80 126 L96 112" stroke="#217a67" strokeWidth="2" fill="none" />
      <path d="M196 136 L212 118 L228 124 L244 108" stroke="#2e9c82" strokeWidth="2" fill="none" />
    </>
  ),
};

export default function HabitatVisual({
  habitat,
  className = "",
  variant = "light",
}: {
  habitat: Habitat;
  className?: string;
  variant?: "light" | "dark";
}) {
  return (
    <div
      className={`overflow-hidden rounded-xl ${variant === "dark" ? "bg-deep-light/40" : "bg-paper-dim"} ${className}`}
      aria-hidden
    >
      <svg viewBox="0 0 320 160" className="h-full w-full" preserveAspectRatio="xMidYMid slice">
        <rect width="320" height="160" fill={variant === "dark" ? "#3a2360" : "#f4efe6"} />
        {scenes[habitat]}
        <path
          d="M0 145 Q80 138 160 142 T320 140"
          stroke="#ddd3bd"
          strokeWidth="1"
          fill="none"
          opacity="0.6"
        />
      </svg>
    </div>
  );
}
