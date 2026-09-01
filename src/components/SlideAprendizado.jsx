import { motion } from "framer-motion";

const flow = ["Oportunidade", "Ideia", "Teste", "Feedback", "Melhoria", "Crescimento"];

export default function SlideAprendizado() {
  return (
    <div className="h-full w-full flex flex-col items-center justify-center px-6 sm:px-16 py-8">
      <p className="uppercase tracking-[0.3em] text-xs text-paprika font-body mb-3">
        Parte 4 · Síntese do grupo
      </p>
      <h2 className="font-display text-2xl sm:text-4xl text-center max-w-2xl leading-snug mb-10">
        “Empreender não é apenas ter uma ideia. É identificar uma oportunidade,
        testar soluções e adaptar-se constantemente.”
      </h2>

      <div className="flex items-center flex-wrap justify-center gap-2 sm:gap-3 mb-10">
        {flow.map((step, i) => (
          <motion.div
            key={step}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="flex items-center gap-2 sm:gap-3"
          >
            <span className="font-body text-xs sm:text-sm bg-ink-panel/60 border border-cream/15 rounded-full px-4 py-2">
              {step}
            </span>
            {i < flow.length - 1 && <span className="text-paprika">→</span>}
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="max-w-xl text-center font-body text-cream/75 bg-ink-panel/50 border border-cream/10 rounded-2xl px-6 py-5"
      >
        <p className="text-xs uppercase tracking-widest text-mango mb-2">Recomendação do grupo</p>
        Continuar testando novas funcionalidades e utilizando o feedback de
        consumidores, restaurantes e entregadores para melhorar a plataforma.
      </motion.div>
    </div>
  );
}
