import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Timer, Smartphone, MessageCircle } from "lucide-react";

const options = [
  {
    id: "a",
    icon: Timer,
    label: "Melhorar o tempo de entrega",
    consequence:
      "Reduz a espera do cliente, mas exige investir em logística e mais entregadores parceiros — um ajuste operacional caro e lento de escalar.",
  },
  {
    id: "b",
    icon: Smartphone,
    label: "Melhorar a experiência do aplicativo",
    consequence:
      "Aumenta a satisfação e a retenção de quem já usa o app, mas não resolve gargalos de entrega ou comunicação com o restaurante.",
  },
  {
    id: "c",
    icon: MessageCircle,
    label: "Melhorar a comunicação com o restaurante",
    consequence:
      "Reduz erros de pedido e cancelamentos, fortalecendo a relação com os parceiros — mas o impacto é menos visível para o cliente final.",
  },
];

export default function SlideDesafio() {
  const [chosen, setChosen] = useState(null);
  const choice = options.find((o) => o.id === chosen);

  return (
    <div className="h-full w-full flex flex-col items-center justify-center px-6 sm:px-16 py-8">
      <p className="uppercase tracking-[0.3em] text-xs text-paprika font-body mb-3">
        Desafio interativo
      </p>
      <h2 className="font-display text-3xl sm:text-5xl text-center mb-3 max-w-3xl">
        Se você fosse o fundador do iFood...
      </h2>
      <p className="font-body text-cream/60 text-center max-w-xl mb-8">
        Como você melhoraria a experiência de delivery?
      </p>

      <div className="grid sm:grid-cols-3 gap-3 max-w-3xl w-full mb-6">
        {options.map((o) => {
          const Icon = o.icon;
          const isChosen = chosen === o.id;
          return (
            <button
              key={o.id}
              onClick={() => setChosen(o.id)}
              className={`flex flex-col items-center text-center gap-3 p-5 rounded-2xl border font-body transition-colors ${
                isChosen
                  ? "border-paprika bg-paprika/10"
                  : "border-cream/15 hover:border-cream/35"
              }`}
            >
              <Icon size={24} className={isChosen ? "text-paprika" : "text-cream/60"} />
              <span className="text-sm">{o.label}</span>
            </button>
          );
        })}
      </div>

      <AnimatePresence mode="wait">
        {choice && (
          <motion.div
            key={choice.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="max-w-xl text-center font-body text-cream/80 bg-ink-panel/50 border border-cream/10 rounded-2xl px-6 py-5 mb-4"
          >
            {choice.consequence}
          </motion.div>
        )}
      </AnimatePresence>

      {choice && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="font-display text-lg sm:text-xl text-mango text-center max-w-lg"
        >
          Essa é a lógica do pensamento ágil: identificar → testar → receber feedback → melhorar.
        </motion.p>
      )}
    </div>
  );
}
