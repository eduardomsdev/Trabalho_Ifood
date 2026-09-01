import { useState } from "react";
import { motion } from "framer-motion";
import { UserRound, Store, Bike, Building2 } from "lucide-react";

const nodes = [
  {
    id: "cliente",
    icon: UserRound,
    label: "Cliente",
    text: "Faz o pedido pelo app ou site e acompanha a entrega em tempo real.",
  },
  {
    id: "ifood",
    icon: Building2,
    label: "iFood",
    text: "Plataforma que conecta os três lados, processa o pagamento e organiza a logística.",
  },
  {
    id: "restaurante",
    icon: Store,
    label: "Restaurante",
    text: "Recebe o pedido pronto pelo sistema, sem precisar de central telefônica própria.",
  },
  {
    id: "entregador",
    icon: Bike,
    label: "Entregador",
    text: "Parceiro autônomo que retira o pedido e leva até o cliente.",
  },
];

export default function SlideOQueE() {
  const [active, setActive] = useState("ifood");
  const activeNode = nodes.find((n) => n.id === active);

  return (
    <div className="h-full w-full flex flex-col items-center justify-center px-6 sm:px-16">
      <p className="uppercase tracking-[0.3em] text-xs text-paprika font-body mb-4">
        Parte 1 · Identificação do caso
      </p>
      <h2 className="font-display text-3xl sm:text-5xl text-center max-w-3xl mb-3">
        O que é o iFood?
      </h2>
      <p className="font-body text-cream/60 text-center max-w-2xl mb-12">
        Uma plataforma digital brasileira que conecta consumidores, restaurantes,
        mercados, farmácias e entregadores parceiros em um único aplicativo.
      </p>

      <div className="flex items-center justify-center gap-3 sm:gap-8 mb-10 flex-wrap">
        {nodes.map((node, i) => {
          const Icon = node.icon;
          const isActive = active === node.id;
          return (
            <div key={node.id} className="flex items-center gap-3 sm:gap-8">
              <motion.button
                onClick={() => setActive(node.id)}
                whileHover={{ y: -4 }}
                className={`flex flex-col items-center gap-2 px-5 py-4 rounded-2xl border transition-colors font-body ${
                  isActive
                    ? "border-paprika bg-paprika/10"
                    : "border-cream/15 hover:border-cream/35"
                }`}
              >
                <Icon size={28} className={isActive ? "text-paprika" : "text-cream/70"} />
                <span className="text-sm">{node.label}</span>
              </motion.button>
              {i < nodes.length - 1 && (
                <span className="text-cream/25 hidden sm:inline">→</span>
              )}
            </div>
          );
        })}
      </div>

      <motion.div
        key={active}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        className="max-w-xl text-center font-body text-cream/80 bg-ink-panel/50 border border-cream/10 rounded-2xl px-6 py-5"
      >
        {activeNode.text}
      </motion.div>
    </div>
  );
}
