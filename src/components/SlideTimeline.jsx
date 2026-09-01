import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { timeline } from "../data/content";

export default function SlideTimeline() {
  const [open, setOpen] = useState(0);

  return (
    <div className="h-full w-full flex flex-col items-center justify-center px-6 sm:px-16 py-10">
      <p className="uppercase tracking-[0.3em] text-xs text-paprika font-body mb-3">
        Parte 1 · Identificação do caso
      </p>
      <h2 className="font-display text-3xl sm:text-5xl text-center mb-2">
        A evolução do iFood
      </h2>
      <p className="font-body text-cream/50 text-sm mb-8">
        Toque em um ano para ver os detalhes
      </p>

      <div className="w-full max-w-5xl overflow-x-auto pb-4">
        <div className="flex items-start gap-2 sm:gap-4 min-w-max px-2">
          {timeline.map((item, i) => (
            <div key={item.year} className="flex items-start">
              <button
                onClick={() => setOpen(i)}
                className="flex flex-col items-center gap-3 group w-28 sm:w-36"
              >
                <span
                  className={`font-display text-lg sm:text-xl transition-colors ${
                    open === i ? "text-paprika" : "text-cream/50 group-hover:text-cream/80"
                  }`}
                >
                  {item.year}
                </span>
                <span
                  className={`w-4 h-4 rounded-full border-2 transition-colors ${
                    open === i
                      ? "bg-paprika border-paprika"
                      : "border-cream/30 group-hover:border-cream/60"
                  }`}
                />
                <span className="font-body text-xs text-cream/60 text-center leading-snug">
                  {item.title}
                </span>
              </button>
              {i < timeline.length - 1 && (
                <div className="h-4 w-6 sm:w-10 mt-[52px] sm:mt-[56px] border-t border-dashed border-cream/20" />
              )}
            </div>
          ))}
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={open}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="max-w-xl text-center font-body text-cream/80 bg-ink-panel/50 border border-cream/10 rounded-2xl px-6 py-5 mt-4"
        >
          <p>{timeline[open].text}</p>
          <p className="text-xs text-cream/40 mt-3">Fonte {timeline[open].source} — ver slide de referências</p>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
