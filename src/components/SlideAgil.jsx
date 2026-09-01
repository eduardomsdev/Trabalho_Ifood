import { motion } from "framer-motion";
import { agilePrinciples, sources } from "../data/content";

const cycle = ["Ideia", "Protótipo", "Teste", "Feedback", "Melhoria", "Novo teste"];

export default function SlideAgil() {
  return (
    <div className="h-full w-full flex flex-col lg:flex-row items-center justify-center gap-10 px-6 sm:px-16 py-8">
      <div className="flex flex-col items-center">
        <p className="uppercase tracking-[0.3em] text-xs text-paprika font-body mb-3 text-center">
          Parte 3 · Metodologias ágeis
        </p>
        <h2 className="font-display text-3xl sm:text-4xl text-center mb-8 max-w-sm">
          O ciclo ágil por trás do produto
        </h2>

        <div className="relative w-64 h-64 sm:w-72 sm:h-72">
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-dashed border-paprika/30"
            animate={{ rotate: 360 }}
            transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
          />
          {cycle.map((step, i) => {
            const angle = (i / cycle.length) * 2 * Math.PI - Math.PI / 2;
            const r = 42; // percentage radius
            const x = 50 + r * Math.cos(angle);
            const y = 50 + r * Math.sin(angle);
            return (
              <motion.div
                key={step}
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.08 }}
                className="absolute -translate-x-1/2 -translate-y-1/2 bg-ink-panel border border-cream/15 rounded-full px-3 py-1.5 text-[11px] sm:text-xs font-body whitespace-nowrap"
                style={{ left: `${x}%`, top: `${y}%` }}
              >
                {step}
              </motion.div>
            );
          })}
          <div className="absolute inset-0 flex items-center justify-center font-display text-sm text-cream/50">
            ciclo<br />contínuo
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4 max-w-md w-full">
        {agilePrinciples.map((p, i) => {
          const src = sources.find((s) => s.n === p.source);
          return (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 + i * 0.15 }}
              className="bg-ink-panel/50 border border-cream/10 rounded-2xl p-5"
            >
              <h3 className="font-display text-lg mb-2">{p.title}</h3>
              <p className="font-body text-sm text-cream/65 leading-relaxed">{p.text}</p>
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
