import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const mv = useMotionValue(0);
  const spring = useSpring(mv, { stiffness: 60, damping: 20 });
  const display = useTransform(spring, (v) => Math.floor(v).toLocaleString() + suffix);

  useEffect(() => {
    if (inView) mv.set(to);
  }, [inView, mv, to]);

  return <motion.span ref={ref}>{display}</motion.span>;
}

const stats = [
  { value: 1000, suffix: "+", label: "Happy Clients" },
  { value: 500, suffix: "+", label: "Weddings" },
  { value: 7, suffix: "+", label: "Years Experience" },
  { value: 4, suffix: "K", label: "Video Production" },
];

export function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32 px-4 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[10px] tracking-[0.4em] uppercase text-gold">— About the Studio</span>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl lg:text-6xl leading-tight">
              Cinematic vision, <br />
              <span className="gold-text italic">crafted by hand.</span>
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              We are a boutique photography & film studio dedicated to producing editorial-grade
              imagery. Every frame is composed with intent — from the whisper of window light on a
              bride's veil to the shudder of a drone rising over a mountaintop. Our craft is
              patience, our currency is light.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              With over 500 weddings, 300 fashion editorials and countless intimate portraits
              behind our lenses, we bring restraint, warmth and a filmmaker's eye to every shoot.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-4 sm:gap-6"
          >
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                whileHover={{ y: -6, rotateX: 4, rotateY: -4 }}
                transition={{ type: "spring", stiffness: 200 }}
                style={{ transformStyle: "preserve-3d", perspective: 1000 }}
                className="glass rounded-2xl p-6 sm:p-8 relative overflow-hidden group"
              >
                <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-gold/20 via-transparent to-neon/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative">
                  <div className="font-display text-4xl sm:text-5xl gold-text">
                    <Counter to={s.value} suffix={s.suffix} />
                  </div>
                  <div className="mt-2 text-[10px] sm:text-xs uppercase tracking-[0.25em] text-muted-foreground">
                    {s.label}
                  </div>
                </div>
                <div
                  className="absolute right-3 top-3 h-10 w-10 rounded-full border border-gold/30 grid place-items-center text-gold text-xs opacity-40"
                >
                  0{i + 1}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
