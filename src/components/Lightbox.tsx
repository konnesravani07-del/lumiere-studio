import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { useEffect } from "react";

export function Lightbox({
  src,
  title,
  onClose,
}: {
  src: string | null;
  title: string;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!src) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [src, onClose]);

  return (
    <AnimatePresence>
      {src && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-[90] flex items-center justify-center bg-ink/95 backdrop-blur-md p-4"
        >
          <button
            onClick={onClose}
            className="absolute top-6 right-6 grid h-11 w-11 place-items-center rounded-full glass gold-border text-gold hover:bg-gold/10"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>
          <motion.div
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            transition={{ type: "spring", stiffness: 200, damping: 25 }}
            onClick={(e) => e.stopPropagation()}
            className="relative max-h-[85vh] max-w-5xl overflow-hidden rounded-2xl gold-border gold-glow"
          >
            <img src={src} alt={title} className="max-h-[85vh] w-auto object-contain" />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink to-transparent p-6">
              <div className="font-display text-xl gold-text">{title}</div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
