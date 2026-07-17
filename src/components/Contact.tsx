import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="relative py-24 sm:py-32 px-4 sm:px-6 overflow-hidden">
      <div className="absolute right-0 top-1/4 h-96 w-96 rounded-full bg-gold/8 blur-[120px] -z-10" />
      <div className="mx-auto max-w-7xl">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-[10px] tracking-[0.4em] uppercase text-gold">— Get in Touch</span>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl lg:text-6xl leading-tight">
            Let's create <span className="gold-text italic">something.</span>
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass rounded-3xl p-8 lg:col-span-2 flex flex-col gap-6"
          >
            <div>
              <h3 className="font-display text-2xl gold-text">Studio</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Reach out for bookings, collaborations or a coffee. We reply within 24 hours.
              </p>
            </div>

            <div className="space-y-4">
              {[
                { icon: Phone, label: "Phone", value: "+1 (415) 555-0134" },
                { icon: Mail, label: "Email", value: "hello@lumiere.studio" },
                { icon: MapPin, label: "Studio", value: "24 Golden Lane, Suite 5\nSan Francisco, CA 94103" },
              ].map((c) => {
                const Icon = c.icon;
                return (
                  <div key={c.label} className="flex items-start gap-3">
                    <div className="shrink-0 grid h-10 w-10 place-items-center rounded-xl bg-gold/10 border border-gold/30 text-gold">
                      <Icon className="h-4 w-4" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[9px] uppercase tracking-[0.3em] text-muted-foreground">{c.label}</div>
                      <div className="text-sm text-foreground whitespace-pre-line">{c.value}</div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="relative rounded-2xl overflow-hidden gold-border h-48">
              <iframe
                title="Studio location"
                src="https://www.openstreetmap.org/export/embed.html?bbox=-122.42%2C37.77%2C-122.40%2C37.79&layer=mapnik"
                className="h-full w-full grayscale contrast-125 opacity-80"
                loading="lazy"
              />
              <div className="pointer-events-none absolute inset-0 bg-ink/30 mix-blend-multiply" />
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
              setTimeout(() => setSent(false), 3500);
            }}
            className="glass rounded-3xl p-8 lg:col-span-3 space-y-4"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Name</span>
                <input required className="mt-2 w-full rounded-xl bg-input px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-gold border border-transparent focus:border-gold/40" />
              </label>
              <label className="block">
                <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Email</span>
                <input required type="email" className="mt-2 w-full rounded-xl bg-input px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-gold border border-transparent focus:border-gold/40" />
              </label>
            </div>
            <label className="block">
              <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Service</span>
              <select className="mt-2 w-full rounded-xl bg-input px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-gold border border-transparent focus:border-gold/40">
                <option>Wedding Photography</option>
                <option>Pre Wedding Shoot</option>
                <option>Fashion Editorial</option>
                <option>Cinematic Video</option>
                <option>Other</option>
              </select>
            </label>
            <label className="block">
              <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Tell us about your project</span>
              <textarea required rows={5} className="mt-2 w-full rounded-xl bg-input px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-gold border border-transparent focus:border-gold/40 resize-none" />
            </label>
            <button
              type="submit"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-br from-gold-soft via-gold to-gold-deep px-7 py-3.5 text-xs font-bold uppercase tracking-widest text-ink hover:gold-glow transition"
            >
              {sent ? "Message sent ✓" : "Send Enquiry"}
              <Send className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition" />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
