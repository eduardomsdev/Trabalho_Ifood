import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { entrepreneurshipConcepts } from "../data/content";

export default function SlideEmpreendedorismo() {
  const [active, setActive] = useState(entrepreneurshipConcepts[0].id);
  const activeConcept = entrepreneurshipConcepts.find((c) => c.id === active);

  return (
    <div className="h-full w-full flex flex-col items-center justify-center px-6 sm:px-16 py-8">
      <p className="uppercase tracking-[0.3em] text-xs text-paprika font-body mb-3">
        Parte 2 · Empreendedorismo
      </p>
      <h2 className="font-display text-3xl sm:text-5xl text-center mb-10 max-w-3xl">
        Que tipo de empreendedorismo encontramos no caso do iFood?
      </h2>

      <div className="relative w-full max-w-3xl">
        {/* Hub and spoke layout */}
        <div className="flex flex-col items-center gap-6">
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            {entrepreneurshipConcepts.map((c) => (
              <button
                key={c.id}
                onClick={() => setActive(c.id)}
                className={`font-body text-xs sm:text-sm px-4 py-2.5 rounded-full border transition-colors ${
                  active === c.id
                    ? "border-paprika bg-paprika text-ink font-semibold"
                    : "border-cream/20 text-cream/70 hover:border-cream/40"
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>

          <div className="w-16 h-16 rounded-full bg-paprika/15 border-2 border-paprika flex items-center justify-center font-display text-lg">
            iFood
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="max-w-xl text-center font-body text-cream/80 bg-ink-panel/50 border border-cream/10 rounded-2xl px-6 py-5"
            >
              {activeConcept.text}
            </motion.div>
          </AnimatePresence>

          <div className="flex items-center gap-2 sm:gap-3 font-body text-xs sm:text-sm text-cream/50 flex-wrap justify-center mt-2">
            <span>Oportunidade</span>
            <span className="text-paprika">→</span>
            <span>Solução</span>
            <span className="text-paprika">→</span>
            <span>Tecnologia</span>
            <span className="text-paprika">→</span>
            <span>Escala</span>
          </div>
        </div>
      </div>
    </div>
  );
}
