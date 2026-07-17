import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import wedding from "@/assets/portfolio-wedding.jpg";
import wedding2 from "@/assets/portfolio-wedding2.jpg";
import prewedding from "@/assets/portfolio-prewedding.jpg";
import fashion from "@/assets/portfolio-fashion.jpg";
import portrait from "@/assets/portfolio-portrait.jpg";
import drone from "@/assets/portfolio-drone.jpg";
import events from "@/assets/portfolio-events.jpg";
import nature from "@/assets/portfolio-nature.jpg";

type Category = "All" | "Wedding" | "Pre Wedding" | "Portrait" | "Fashion" | "Events" | "Drone" | "Nature";

const items: { src: string; cat: Category; title: string; span?: string }[] = [
  { src: wedding, cat: "Wedding", title: "Golden Vows", span: "row-span-2" },
  { src: prewedding, cat: "Pre Wedding", title: "Sunlit Promise" },
  { src: fashion, cat: "Fashion", title: "Silk Noir", span: "row-span-2" },
  { src: portrait, cat: "Portrait", title: "The Muse" },
  { src: drone, cat: "Drone", title: "Above the Ridge" },
  { src: events, cat: "Events", title: "Chandelier Nights" },
  { src: nature, cat: "Nature", title: "First Light" },
  { src: wedding2, cat: "Wedding", title: "Heirloom" },
];

const cats: Category[] = ["All", "Wedding", "Pre Wedding", "Portrait", "Fashion", "Events", "Drone", "Nature"];

export function Portfolio({ onOpen }: { onOpen: (src: string, title: string) => void }) {
  const [active, setActive] = useState<Category>("All");
  const filtered = active === "All" ? items : items.filter((i) => i.cat === active);

  return (
    <section id="portfolio" className="relative py-24 sm:py-32 px-4 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between mb-10">
          <div>
            <span className="text-[10px] tracking-[0.4em] uppercase text-gold">— Portfolio</span>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl lg:text-6xl leading-tight">
              Selected <span className="gold-text italic">work.</span>
            </h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {cats.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`rounded-full px-4 py-1.5 text-[10px] font-semibold uppercase tracking-widest transition ${
                  active === c
                    ? "bg-gold text-ink gold-glow"
                    : "glass gold-border text-muted-foreground hover:text-gold"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="columns-1 sm:columns-2 lg:columns-3 gap-4 sm:gap-5 [column-fill:_balance]">
          <AnimatePresence mode="popLayout">
            {filtered.map((it) => (
              <motion.button
                layout
                key={it.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                onClick={() => onOpen(it.src, it.title)}
                className="group relative mb-4 sm:mb-5 block w-full overflow-hidden rounded-2xl gold-border break-inside-avoid"
              >
                <img
                  src={it.src}
                  alt={it.title}
                  loading="lazy"
                  className="w-full h-auto transition-transform duration-700 group-hover:scale-110"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-transparent opacity-70 group-hover:opacity-90 transition" />
                <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-gold/0 group-hover:ring-gold/60 transition-all" />
                <div className="absolute inset-x-0 bottom-0 p-5 text-left">
                  <div className="text-[9px] uppercase tracking-[0.3em] text-gold">{it.cat}</div>
                  <div className="mt-1 font-display text-xl text-foreground">{it.title}</div>
                </div>
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
