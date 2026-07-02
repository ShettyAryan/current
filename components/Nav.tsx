"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Waves } from "lucide-react";

const audiences = [
  { href: "/", label: "Mission", match: (p: string) => p === "/" || p === "/mission" || p === "/stories" },
  { href: "/explore", label: "Global map", match: (p: string) => p.startsWith("/explore") },
  { href: "/invest", label: "Investors", match: (p: string) => p.startsWith("/invest") },
  { href: "/government", label: "Governments", match: (p: string) => p.startsWith("/government") },
  { href: "/partners", label: "Partners", match: (p: string) => p.startsWith("/partners") },
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-paper/90 backdrop-blur-sm border-b border-paper-line">
      <div className="mx-auto max-w-7xl px-6 md:px-10 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <Waves className="w-5 h-5 text-biolum" strokeWidth={1.75} />
          <span className="font-display text-lg tracking-tight text-ink">
            Current<span className="text-biolum-strong">.</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {audiences.map((a) => {
            const active = a.match(pathname);
            return (
              <Link
                key={a.href}
                href={a.href}
                className={`relative px-4 py-2 text-sm font-medium transition-colors ${
                  active ? "text-ink" : "text-ink-soft hover:text-ink"
                }`}
              >
                {a.label}
                {active && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute left-4 right-4 -bottom-[1px] h-[2px] bg-biolum"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:block">
          <Link
            href="/get-started"
            className="inline-flex items-center rounded-full bg-deep px-5 py-2 text-sm font-medium text-paper hover:bg-deep-light transition-colors"
          >
            Get started
          </Link>
        </div>

        <button
          className="md:hidden p-2 -mr-2 text-ink"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden overflow-hidden border-t border-paper-line bg-paper"
          >
            <div className="flex flex-col px-6 py-4 gap-1">
              {audiences.map((a) => (
                <Link
                  key={a.href}
                  href={a.href}
                  onClick={() => setOpen(false)}
                  className="py-2.5 text-sm font-medium text-ink"
                >
                  {a.label}
                </Link>
              ))}
              <Link
                href="/get-started"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex items-center justify-center rounded-full bg-deep px-5 py-2.5 text-sm font-medium text-paper"
              >
                Get started
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
