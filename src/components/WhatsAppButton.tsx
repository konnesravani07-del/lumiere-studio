import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/14155550134"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 2.5, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.08 }}
      className="fixed bottom-6 right-6 z-40 group"
      aria-label="Chat on WhatsApp"
    >
      <span className="absolute inset-0 rounded-full bg-emerald-500 animate-ping opacity-30" />
      <span className="relative grid h-14 w-14 place-items-center rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 text-white shadow-[0_10px_40px_rgba(16,185,129,0.5)]">
        <MessageCircle className="h-6 w-6" />
      </span>
      <span className="absolute right-16 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-full glass gold-border px-3 py-1.5 text-[10px] uppercase tracking-widest text-gold opacity-0 group-hover:opacity-100 transition pointer-events-none">
        Chat with us
      </span>
    </motion.a>
  );
}
