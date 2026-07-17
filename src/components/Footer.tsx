import { Instagram, Youtube, Facebook, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative border-t border-gold/20 py-14 px-4 sm:px-6 overflow-hidden">
      <div className="absolute left-1/2 top-0 h-40 w-[80%] -translate-x-1/2 bg-gradient-to-b from-gold/10 to-transparent blur-3xl -z-10" />
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 md:grid-cols-[2fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2">
              <div className="h-9 w-9 rounded-full glass grid place-items-center">
                <div className="h-2 w-2 rounded-full bg-gold animate-pulse-gold" />
              </div>
              <div className="leading-none">
                <div className="font-display text-2xl gold-text">Lumière</div>
                <div className="text-[9px] tracking-[0.35em] text-muted-foreground uppercase">Studio</div>
              </div>
            </div>
            <p className="mt-5 max-w-sm text-sm text-muted-foreground leading-relaxed">
              A boutique photography & film studio crafting cinematic imagery for
              weddings, editorials and brands the world over.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {[Instagram, Youtube, Facebook, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="social"
                  className="grid h-10 w-10 place-items-center rounded-full glass gold-border text-gold hover:bg-gold/10 hover:gold-glow transition"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-[10px] uppercase tracking-[0.35em] text-gold">Studio</h4>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {["About", "Portfolio", "Services", "Pricing"].map((l) => (
                <li key={l}>
                  <a href={`#${l.toLowerCase()}`} className="hover:text-gold transition">{l}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] uppercase tracking-[0.35em] text-gold">Contact</h4>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>hello@lumiere.studio</li>
              <li>+1 (415) 555-0134</li>
              <li>San Francisco, CA</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border/50 flex flex-col sm:flex-row items-center justify-between gap-3 text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
          <span>© {new Date().getFullYear()} Lumière Studio. All rights reserved.</span>
          <span>Crafted with light & devotion</span>
        </div>
      </div>
    </footer>
  );
}
