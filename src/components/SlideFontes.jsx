import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { sources } from "../data/content";

export default function SlideFontes() {
  return (
    <div className="h-full w-full flex flex-col items-center justify-center px-6 sm:px-16 py-8 overflow-y-auto">
      <p className="uppercase tracking-[0.3em] text-xs text-paprika font-body mb-3">
        Referências
      </p>
      <h2 className="font-display text-3xl sm:text-5xl text-center mb-10">
        Fontes e referências
      </h2>

      <div className="w-full max-w-2xl flex flex-col gap-3">
        {sources.map((s, i) => (
          <motion.a
            key={s.n}
            href={s.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            className="flex items-start gap-4 bg-ink-panel/50 border border-cream/10 hover:border-paprika/40 rounded-xl px-5 py-4 transition-colors font-body group"
          >
            <span className="text-paprika font-display text-lg shrink-0">{s.n}</span>
            <div className="flex-1 min-w-0">
              <p className="text-sm text-cream/90 truncate">{s.title}</p>
              <p className="text-xs text-cream/45 mt-0.5">
                {s.name} · {s.year}
              </p>
            </div>
            <ExternalLink size={16} className="text-cream/30 group-hover:text-paprika shrink-0 mt-1" />
          </motion.a>
        ))}
      </div>
    </div>
  );
}
