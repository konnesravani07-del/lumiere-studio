import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";

const tiers = [
  {
    name: "Basic",
    price: "$899",
    tag: "Intimate moments",
    features: ["4 hours coverage", "1 photographer", "150+ edited photos", "Online private gallery", "Delivery in 3 weeks"],
    highlight: false,
  },
  {
    name: "Premium",
    price: "$2,499",
    tag: "Most popular",
    features: ["8 hours coverage", "2 photographers", "400+ edited photos", "Cinematic highlight film", "Pre-wedding session", "Delivery in 2 weeks"],
    highlight: true,
  },
  {
    name: "Luxury",
    price: "$5,999",
    tag: "Full production",
    features: ["Full-day coverage", "3 photographers + drone", "800+ edited photos", "4K cinematic feature film", "Album + fine-art prints", "Priority 10-day delivery"],
    highlight: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="relative py-24 sm:py-32 px-4 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-[10px] tracking-[0.4em] uppercase text-gold">— Investment</span>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl lg:text-6xl leading-tight">
            Considered <span className="gold-text italic">pricing.</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Transparent, all-inclusive packages. Every quote is custom — these are starting points.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {tiers.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`relative rounded-3xl p-8 flex flex-col ${
                t.highlight
                  ? "bg-gradient-to-b from-gold/15 via-card to-card gold-border gold-glow scale-100 md:scale-[1.04]"
                  : "glass"
              }`}
            >
              {t.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1 rounded-full bg-gradient-to-br from-gold-soft to-gold-deep px-3 py-1 text-[9px] font-bold uppercase tracking-widest text-ink">
                  <Sparkles className="h-3 w-3" /> Most Loved
                </div>
              )}
              <div className="text-[10px] uppercase tracking-[0.35em] text-muted-foreground">{t.tag}</div>
              <h3 className="mt-2 font-display text-3xl gold-text">{t.name}</h3>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="font-display text-5xl text-foreground">{t.price}</span>
                <span className="text-xs text-muted-foreground">/ starting</span>
              </div>
              <div className="my-6 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
              <ul className="space-y-3 flex-1">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <Check className="h-4 w-4 shrink-0 text-gold mt-0.5" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`mt-8 block rounded-full px-6 py-3 text-center text-xs font-bold uppercase tracking-widest transition ${
                  t.highlight
                    ? "bg-gradient-to-br from-gold-soft via-gold to-gold-deep text-ink hover:gold-glow"
                    : "glass gold-border text-gold hover:bg-gold/10"
                }`}
              >
                Enquire
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
