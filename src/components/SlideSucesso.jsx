import { motion } from "framer-motion";
import {
  Rocket,
  Lightbulb,
  Smartphone,
  RefreshCcw,
  Users2,
  Bot,
} from "lucide-react";
import { successFactors, sources } from "../data/content";

const icons = { Rocket, Lightbulb, Smartphone, RefreshCcw, Users2, Bot };

export default function SlideSucesso() {
  return (
    <div className="h-full w-full flex flex-col items-center justify-center px-6 sm:px-16 py-8">
      <p className="uppercase tracking-[0.3em] text-xs text-paprika font-body mb-3">
        Parte 1 · Por que é um caso de sucesso
      </p>
      <h2 className="font-display text-3xl sm:text-5xl text-center mb-10 max-w-3xl">
        Os fatores por trás do crescimento
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 max-w-4xl">
        {successFactors.map((f, i) => {
          const Icon = icons[f.icon];
          const src = f.source ? sources.find((s) => s.n === f.source) : null;
          return (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.06, duration: 0.4 }}
              whileHover={{ y: -4 }}
              className="bg-ink-panel/50 border border-cream/10 hover:border-paprika/40 rounded-2xl p-4 sm:p-5 transition-colors"
            >
              <Icon size={22} className="text-mango mb-3" />
              <h3 className="font-display text-base sm:text-lg mb-1.5">{f.title}</h3>
              <p className="font-body text-xs sm:text-sm text-cream/60 leading-relaxed">
                {f.text}
              </p>
              {src && (
                <p className="font-body text-[10px] text-cream/30 mt-2">
                  Fonte: {src.name}, {src.year}
                </p>
              )}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
