import { motion } from "framer-motion";
import {
  Heart, Sparkles, Camera, Baby, Flower2, Cake,
  Shirt, Package, Plane, Video, ImageIcon, Film,
} from "lucide-react";

const services = [
  { icon: Heart, title: "Wedding Photography", desc: "Timeless documentation of your once-in-a-lifetime day." },
  { icon: Sparkles, title: "Pre Wedding Shoots", desc: "Cinematic love stories at breathtaking locations." },
  { icon: Camera, title: "Candid Photography", desc: "Unposed, honest moments captured with an editor's eye." },
  { icon: Baby, title: "Baby Shoot", desc: "Soft, tender portraiture for the tiniest of humans." },
  { icon: Flower2, title: "Maternity Shoot", desc: "Elegant, glowing portraits of the beautiful in-between." },
  { icon: Cake, title: "Birthday Events", desc: "Vibrant coverage that turns celebrations into keepsakes." },
  { icon: Shirt, title: "Fashion Photography", desc: "Editorial imagery for designers, brands and lookbooks." },
  { icon: Package, title: "Product Photography", desc: "Studio-grade e-commerce and lifestyle product visuals." },
  { icon: Plane, title: "Drone Photography", desc: "Sweeping aerial cinematography that widens the story." },
  { icon: Video, title: "Cinematic Videography", desc: "4K narrative films with color-graded, story-first edits." },
  { icon: ImageIcon, title: "Photo Editing", desc: "Retouching & tonal work by an award-winning color team." },
  { icon: Film, title: "Video Editing", desc: "Feature-quality edits, motion design and audio mastering." },
];

export function Services() {
  return (
    <section id="services" className="relative py-24 sm:py-32 px-4 sm:px-6 overflow-hidden">
      <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-gold/5 blur-[120px] -z-10" />
      <div className="mx-auto max-w-7xl">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[10px] tracking-[0.4em] uppercase text-gold">— Our Craft</span>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl lg:text-6xl leading-tight">
            A full studio of <span className="gold-text italic">services</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            From intimate portraits to grand aerial cinematography — end-to-end production,
            editing and post-work under one roof.
          </p>
        </div>

        <div className="grid gap-4 sm:gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
                whileHover={{ y: -6 }}
                className="group relative glass rounded-2xl p-6 sm:p-7 overflow-hidden"
              >
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-gold/0 via-transparent to-gold/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gold/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative flex items-start gap-4">
                  <div className="shrink-0 grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-gold/20 to-gold/5 border border-gold/30 text-gold group-hover:gold-glow transition-all">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-display text-lg text-foreground group-hover:gold-text transition-colors">
                      {s.title}
                    </h3>
                    <p className="mt-1.5 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      {s.desc}
                    </p>
                  </div>
                </div>
                <div className="mt-5 flex items-center justify-between text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                  <span>0{(i + 1).toString().padStart(2, "0").slice(-2)}</span>
                  <span className="text-gold opacity-0 group-hover:opacity-100 transition">→ Enquire</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
