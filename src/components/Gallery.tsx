import { motion } from "framer-motion";
import wedding from "@/assets/portfolio-wedding.jpg";
import wedding2 from "@/assets/portfolio-wedding2.jpg";
import prewedding from "@/assets/portfolio-prewedding.jpg";
import fashion from "@/assets/portfolio-fashion.jpg";
import portrait from "@/assets/portfolio-portrait.jpg";
import drone from "@/assets/portfolio-drone.jpg";
import events from "@/assets/portfolio-events.jpg";
import nature from "@/assets/portfolio-nature.jpg";

const grid = [
  { src: fashion, title: "Silk Noir" },
  { src: portrait, title: "The Muse" },
  { src: prewedding, title: "Sunlit Promise" },
  { src: wedding2, title: "Heirloom" },
  { src: nature, title: "First Light" },
  { src: drone, title: "Above the Ridge" },
  { src: events, title: "Chandelier Nights" },
  { src: wedding, title: "Golden Vows" },
];

export function Gallery({ onOpen }: { onOpen: (src: string, title: string) => void }) {
  return (
    <section id="gallery" className="relative py-24 sm:py-32 px-4 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-[10px] tracking-[0.4em] uppercase text-gold">— Gallery</span>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl lg:text-6xl leading-tight">
            An <span className="gold-text italic">interactive</span> archive.
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {grid.map((g, i) => (
            <motion.button
              key={g.title + i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.06 }}
              onClick={() => onOpen(g.src, g.title)}
              className="group relative aspect-square overflow-hidden rounded-xl gold-border"
            >
              <img
                src={g.src}
                alt={g.title}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-ink/40 opacity-0 group-hover:opacity-100 transition" />
              <div className="absolute inset-0 grid place-items-center opacity-0 group-hover:opacity-100 transition">
                <div className="rounded-full glass gold-border px-4 py-1.5 text-[10px] uppercase tracking-widest text-gold">
                  View
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}
