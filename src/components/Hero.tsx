import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { HeroScene } from "./scene/HeroScene";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  const [particles, setParticles] = useState<{ w: number; h: number; l: number; t: number; d: number; delay: number }[]>([]);
  useEffect(() => {
    setParticles(
      Array.from({ length: 30 }).map(() => ({
        w: 4 + Math.random() * 10,
        h: 4 + Math.random() * 10,
        l: Math.random() * 100,
        t: Math.random() * 100,
        d: 4 + Math.random() * 4,
        delay: Math.random() * 3,
      })),
    );
  }, []);

  return (
    <section id="home" ref={ref} className="relative min-h-screen overflow-hidden">
      {/* Radial spotlight backdrop */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-ink via-background to-background" />
        <div className="absolute left-1/2 top-1/3 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/10 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-neon/5 blur-[100px]" />
      </div>

      {/* Grain / bokeh particles */}
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-60">
        {particles.map((p, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gold/40 blur-sm"
            style={{ width: p.w, height: p.h, left: `${p.l}%`, top: `${p.t}%` }}
            animate={{ y: [0, -40, 0], opacity: [0.2, 0.8, 0.2] }}
            transition={{ duration: p.d, repeat: Infinity, delay: p.delay }}
          />
        ))}
      </div>

      <motion.div
        style={{ y, opacity }}
        className="relative z-10 mx-auto grid min-h-screen max-w-7xl grid-cols-1 items-center gap-8 px-4 pt-32 pb-16 lg:grid-cols-2 sm:px-6"
      >
        <div className="text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2 }}
            className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 mb-6"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse-gold" />
            <span className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground">
              Award-winning studio · Est. 2018
            </span>
          </motion.div>

          <h1 className="font-display text-5xl leading-[1.02] sm:text-6xl lg:text-7xl xl:text-8xl">
            <motion.span
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.1, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="block text-foreground"
            >
              Capturing
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.25, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="block gold-text italic"
            >
              Memories.
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.4, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="block text-foreground"
            >
              Creating <span className="gold-text italic">Stories.</span>
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.6 }}
            className="mt-6 max-w-lg mx-auto lg:mx-0 text-sm sm:text-base text-muted-foreground leading-relaxed"
          >
            A cinematic photography & film studio crafting timeless imagery for weddings,
            editorials, brands and moments that deserve to be remembered forever.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.75 }}
            className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-3"
          >
            <a
              href="#contact"
              className="group relative overflow-hidden rounded-full bg-gradient-to-br from-gold-soft via-gold to-gold-deep px-7 py-3.5 text-xs font-bold uppercase tracking-widest text-ink transition-all hover:gold-glow"
            >
              <span className="relative z-10">Book a Shoot</span>
            </a>
            <a
              href="#portfolio"
              className="group inline-flex items-center gap-2 rounded-full glass gold-border px-7 py-3.5 text-xs font-bold uppercase tracking-widest text-gold hover:bg-gold/10 transition"
            >
              View Portfolio
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3 }}
            className="mt-10 flex items-center justify-center lg:justify-start gap-6 text-[10px] uppercase tracking-[0.3em] text-muted-foreground"
          >
            <span>★★★★★ 4.9</span>
            <span className="h-3 w-px bg-border" />
            <span>1000+ Clients</span>
            <span className="h-3 w-px bg-border hidden sm:block" />
            <span className="hidden sm:inline">7 Years</span>
          </motion.div>
        </div>

        {/* 3D Canvas */}
        <div className="relative h-[400px] sm:h-[500px] lg:h-[620px]">
          <div className="absolute inset-0 rounded-3xl">
            <HeroScene />
          </div>
          {/* corner accents */}
          <div className="absolute left-4 top-4 h-8 w-8 border-l-2 border-t-2 border-gold/60" />
          <div className="absolute right-4 top-4 h-8 w-8 border-r-2 border-t-2 border-gold/60" />
          <div className="absolute left-4 bottom-4 h-8 w-8 border-l-2 border-b-2 border-gold/60" />
          <div className="absolute right-4 bottom-4 h-8 w-8 border-r-2 border-b-2 border-gold/60" />
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.2 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="flex flex-col items-center gap-2 text-[9px] uppercase tracking-[0.4em] text-muted-foreground">
          <span>Scroll</span>
          <div className="h-8 w-px bg-gradient-to-b from-gold to-transparent" />
        </div>
      </motion.div>
    </section>
  );
}
