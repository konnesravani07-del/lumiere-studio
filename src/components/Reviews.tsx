import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import a1 from "@/assets/avatar-1.jpg";
import a2 from "@/assets/avatar-2.jpg";
import a3 from "@/assets/avatar-3.jpg";

const reviews = [
  {
    name: "Aarav & Meera",
    role: "Wedding · Udaipur",
    avatar: a3,
    quote:
      "They didn't just photograph our wedding — they told our story. Every frame feels like a still from a film. Absolutely unmatched.",
  },
  {
    name: "Sofia Laurent",
    role: "Fashion Editorial",
    avatar: a2,
    quote:
      "The lighting, the direction, the calm on set — everything felt like a Vogue shoot. The final images sold out our collection in 48 hours.",
  },
  {
    name: "Marcus Chen",
    role: "Brand Campaign",
    avatar: a1,
    quote:
      "Meticulous, patient and wildly talented. Our product film has been shared over 200k times. I will never work with anyone else.",
  },
];

export function Reviews() {
  return (
    <section id="reviews" className="relative py-24 sm:py-32 px-4 sm:px-6 overflow-hidden">
      <div className="mx-auto max-w-7xl">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-[10px] tracking-[0.4em] uppercase text-gold">— Kind Words</span>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl lg:text-6xl leading-tight">
            Loved by <span className="gold-text italic">storytellers.</span>
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {reviews.map((r, i) => (
            <motion.div
              key={r.name}
              initial={{ opacity: 0, y: 40, rotateX: -10 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.12 }}
              whileHover={{ y: -8, rotateY: 3 }}
              style={{ transformStyle: "preserve-3d", perspective: 1200 }}
              className="glass rounded-3xl p-8 relative"
            >
              <Quote className="absolute top-6 right-6 h-8 w-8 text-gold/25" />
              <div className="flex gap-0.5 text-gold">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="mt-5 text-sm sm:text-base leading-relaxed text-foreground/90 italic">
                &ldquo;{r.quote}&rdquo;
              </p>
              <div className="mt-8 flex items-center gap-3">
                <div className="relative h-12 w-12 shrink-0 rounded-full overflow-hidden gold-border">
                  <img src={r.avatar} alt={r.name} loading="lazy" className="h-full w-full object-cover" />
                </div>
                <div className="min-w-0">
                  <div className="font-display text-base text-foreground">{r.name}</div>
                  <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">{r.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
