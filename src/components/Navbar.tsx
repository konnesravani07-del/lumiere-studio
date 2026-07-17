import { motion, useScroll, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

const links = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Portfolio", id: "portfolio" },
  { label: "Services", id: "services" },
  { label: "Pricing", id: "pricing" },
  { label: "Reviews", id: "reviews" },
  { label: "Gallery", id: "gallery" },
  { label: "Contact", id: "contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 20 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.div
        style={{ scaleX }}
        className="fixed left-0 right-0 top-0 z-[60] h-[2px] origin-left bg-gradient-to-r from-gold via-gold-soft to-neon"
      />
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled ? "py-2" : "py-4"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6">
          <a href="#home" className="flex items-center gap-2 group">
            <div className="relative h-9 w-9 rounded-full glass grid place-items-center">
              <div className="h-2 w-2 rounded-full bg-gold animate-pulse-gold" />
              <div className="absolute inset-0 rounded-full border border-gold/40 group-hover:scale-110 transition-transform" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-display text-lg gold-text">Lumière</span>
              <span className="text-[9px] tracking-[0.35em] text-muted-foreground uppercase">Studio</span>
            </div>
          </a>

          <nav className="hidden lg:flex items-center gap-1 glass rounded-full px-2 py-1.5">
            {links.map((l) => (
              <a
                key={l.id}
                href={`#${l.id}`}
                className="relative rounded-full px-3.5 py-1.5 text-xs font-medium text-muted-foreground uppercase tracking-wider transition hover:text-gold"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className="hidden sm:inline-flex items-center rounded-full bg-gradient-to-br from-gold-soft via-gold to-gold-deep px-5 py-2 text-xs font-semibold uppercase tracking-widest text-ink hover:gold-glow transition-all"
          >
            Book Now
          </a>

          <button
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden glass rounded-full p-2.5"
            aria-label="Menu"
          >
            <div className="flex flex-col gap-1">
              <span className={`h-0.5 w-5 bg-gold transition-all ${open ? "translate-y-1.5 rotate-45" : ""}`} />
              <span className={`h-0.5 w-5 bg-gold transition-all ${open ? "opacity-0" : ""}`} />
              <span className={`h-0.5 w-5 bg-gold transition-all ${open ? "-translate-y-1.5 -rotate-45" : ""}`} />
            </div>
          </button>
        </div>

        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:hidden mx-4 mt-3 glass rounded-2xl p-4"
          >
            <div className="grid grid-cols-2 gap-1">
              {links.map((l) => (
                <a
                  key={l.id}
                  href={`#${l.id}`}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-4 py-3 text-sm font-medium text-muted-foreground uppercase tracking-wider hover:bg-gold/10 hover:text-gold transition"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </header>
    </>
  );
}
