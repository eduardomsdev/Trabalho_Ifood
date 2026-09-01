import { motion } from "framer-motion";
import { ShoppingBag, Home, UtensilsCrossed } from "lucide-react";
import { founders } from "../data/content";

export default function SlideCapa() {
  return (
    <div className="h-full w-full flex flex-col items-center justify-center px-6 sm:px-16 relative overflow-hidden">
      {/* Ambient background shapes */}
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-paprika/10 blur-3xl" />
      <div className="absolute -bottom-32 -left-24 w-96 h-96 rounded-full bg-leaf/10 blur-3xl" />

      {/* Route animation: restaurant -> bag -> home */}
      <div className="relative w-full max-w-md h-16 mb-10 flex items-center justify-between">
        <UtensilsCrossed className="text-mango" size={28} />
        <div className="flex-1 mx-4 h-px bg-cream/15 relative">
          <motion.div
            className="absolute -top-3"
            initial={{ left: "0%" }}
            animate={{ left: "88%" }}
            transition={{ duration: 2.2, ease: "easeInOut", delay: 0.4 }}
          >
            <ShoppingBag className="text-paprika" size={24} />
          </motion.div>
        </div>
        <Home className="text-leaf" size={28} />
      </div>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="uppercase tracking-[0.35em] text-xs text-paprika font-body mb-6"
      >
        Empreendedorismo e Metodologias Ágeis
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35, duration: 0.7 }}
        className="font-display text-center text-4xl sm:text-6xl lg:text-7xl leading-[1.05] max-w-4xl"
      >
        iFood: empreendedorismo,<br className="hidden sm:block" /> inovação e agilidade
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.55, duration: 0.6 }}
        className="font-body text-cream/60 mt-6 text-lg"
      >
        Estudo de caso
      </motion.p>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="font-body text-cream/35 text-sm mt-16 max-w-md text-center"
      >
        Fundadores do iFood: {founders}
      </motion.p>
    </div>
  );
}
