import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function LoadingScreen() {
  const [gone, setGone] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setGone(true), 1800);
    return () => clearTimeout(t);
  }, []);
  if (gone) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-ink"
      onAnimationComplete={() => {}}
    >
      <div className="relative flex flex-col items-center gap-6">
        <div className="relative h-32 w-32">
          {/* Aperture blades */}
          {[0, 45, 90, 135, 180, 225, 270, 315].map((deg, i) => (
            <motion.div
              key={deg}
              initial={{ rotate: deg, scale: 1 }}
              animate={{ rotate: deg + 90, scale: 0 }}
              transition={{ duration: 1.4, delay: 0.3, ease: [0.7, 0, 0.3, 1] }}
              className="absolute inset-0 origin-center"
              style={{ transform: `rotate(${deg}deg)` }}
            >
              <div
                className="absolute left-1/2 top-0 h-1/2 w-16 -translate-x-1/2 origin-bottom"
                style={{
                  clipPath: "polygon(0 0, 100% 0, 50% 100%)",
                  background: "linear-gradient(180deg, #1a1a1a, #0a0a0a)",
                  border: "1px solid rgba(212,162,76,0.4)",
                }}
              />
            </motion.div>
          ))}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-3 w-3 rounded-full bg-gold animate-pulse-gold" />
          </div>
        </div>
        <motion.p
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="font-display text-lg tracking-[0.3em] gold-text uppercase"
        >
          Lumière Studio
        </motion.p>
      </div>
    </motion.div>
  );
}
