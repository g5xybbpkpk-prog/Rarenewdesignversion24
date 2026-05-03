import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";

export function StartupAnimation({ onComplete }: { onComplete: () => void }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 800);
    }, 4000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  const products = [
    { name: "Serum", icon: "💧" },
    { name: "Cream", icon: "✨" },
    { name: "Oil", icon: "🌿" },
    { name: "Mask", icon: "🌸" },
    { name: "Balm", icon: "🤍" },
  ];

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-50 flex items-center justify-center"
          style={{ backgroundColor: "#FAF4EE" }}
        >
          <div className="relative w-full max-w-md aspect-square flex items-center justify-center">
            {/* Juggling products */}
            {products.map((product, index) => (
              <motion.div
                key={index}
                className="absolute text-4xl"
                initial={{ opacity: 0, scale: 0 }}
                animate={{
                  opacity: [0, 1, 1, 1],
                  scale: [0, 1, 1, 1],
                  x: [
                    0,
                    Math.cos((index * 2 * Math.PI) / products.length) * 120,
                    Math.cos((index * 2 * Math.PI) / products.length + Math.PI / 3) * 140,
                    Math.cos((index * 2 * Math.PI) / products.length + (2 * Math.PI) / 3) * 120,
                  ],
                  y: [
                    0,
                    Math.sin((index * 2 * Math.PI) / products.length) * 120,
                    Math.sin((index * 2 * Math.PI) / products.length + Math.PI / 3) * 140,
                    Math.sin((index * 2 * Math.PI) / products.length + (2 * Math.PI) / 3) * 120,
                  ],
                  rotate: [0, 0, 180, 360],
                }}
                transition={{
                  duration: 3,
                  delay: index * 0.15,
                  ease: "easeInOut",
                  repeat: 0,
                }}
              >
                <div
                  className="flex items-center justify-center w-16 h-16 rounded-full"
                  style={{ backgroundColor: "#D4AF7A20" }}
                >
                  {product.icon}
                </div>
              </motion.div>
            ))}

            {/* Center logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
              className="relative z-10 text-center"
            >
              <motion.div
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{
                  duration: 2,
                  delay: 1.5,
                  ease: "easeInOut",
                }}
              >
                <h1
                  className="text-6xl mb-2 tracking-wider"
                  style={{
                    fontFamily: "Playfair Display, serif",
                  }}
                >
                  <span style={{ color: "#2E1A1A" }}>R</span>
                  <span style={{ color: "#C9897A" }}>A</span>
                  <span style={{ color: "#2E1A1A" }}>RE</span>
                </h1>
              </motion.div>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="text-sm tracking-widest uppercase"
                style={{
                  fontFamily: "Jost, sans-serif",
                  color: "#C9897A",
                  letterSpacing: "0.3em",
                }}
              >
                Relaxed & Refresh
              </motion.p>
            </motion.div>

            {/* Accent circle */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.15 }}
              transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
              className="absolute w-64 h-64 rounded-full"
              style={{ backgroundColor: "#D4AF7A" }}
            />
          </div>

          {/* Loading indicator */}
          <motion.div
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 3.5, ease: "easeInOut" }}
            className="absolute bottom-20 left-1/2 -translate-x-1/2 h-0.5 max-w-xs w-full"
            style={{ backgroundColor: "#D4AF7A40" }}
          >
            <motion.div
              className="h-full"
              style={{ backgroundColor: "#D4AF7A" }}
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 3.5, ease: "easeInOut" }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
