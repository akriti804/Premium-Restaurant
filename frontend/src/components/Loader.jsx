import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { LOADER } from "@/constants/testIds";
import { BRAND } from "@/data/site";

export const Loader = ({ onComplete }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const t1 = setTimeout(() => setVisible(false), 2600);
    const t2 = setTimeout(() => onComplete && onComplete(), 3100);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          data-testid={LOADER.container}
          className="fixed inset-0 z-[100] flex items-center justify-center"
          style={{ background: "#050505" }}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
        >
          {/* Ambient gold light */}
          <motion.div
            className="absolute h-[480px] w-[480px] rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(212,175,55,0.35) 0%, transparent 70%)",
              filter: "blur(40px)",
            }}
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: [0.6, 1.1, 1], opacity: [0, 0.9, 0.7] }}
            transition={{ duration: 2.4, ease: "easeOut" }}
          />

          <motion.div
            data-testid={LOADER.logo}
            className="relative flex flex-col items-center"
            initial={{ opacity: 0, scale: 0.92, y: 8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.span
              className="text-overline"
              initial={{ opacity: 0, letterSpacing: "0.5em" }}
              animate={{ opacity: 1, letterSpacing: "0.32em" }}
              transition={{ duration: 1.4, delay: 0.6 }}
            >
              {BRAND.estd}
            </motion.span>

            <motion.h1
              className="font-heading mt-3 text-5xl md:text-7xl gold-text animate-glow"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.4, delay: 0.2 }}
            >
              {BRAND.name}
            </motion.h1>

            <motion.div
              className="mt-6 h-px w-0 bg-gradient-to-r from-transparent via-bansi-gold to-transparent"
              animate={{ width: ["0px", "200px"] }}
              transition={{ duration: 1.6, delay: 0.8, ease: "easeInOut" }}
            />

            <motion.p
              className="font-body mt-4 text-xs uppercase tracking-[0.4em] text-bansi-muted"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.4 }}
            >
              Pure Vegetarian · Patna
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;
