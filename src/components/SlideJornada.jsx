import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bike, PackageCheck } from "lucide-react";

const steps = [
  "Cliente faz o pedido",
  "Restaurante recebe e confirma",
  "Restaurante prepara o pedido",
  "Entregador coleta na loja",
  "Entregador segue até o cliente",
  "Pedido entregue!",
];

const PATH = "M 90 260 C 160 260, 160 180, 230 180 S 320 100, 380 130 S 470 220, 520 180";

export default function SlideJornada() {
  const [running, setRunning] = useState(false);
  const [stepIndex, setStepIndex] = useState(-1);
  const [done, setDone] = useState(false);
  const [progress, setProgress] = useState(0);
  const [point, setPoint] = useState({ x: 90, y: 260 });
  const pathRef = useRef(null);
  const rafRef = useRef(null);
  const timeoutsRef = useRef([]);

  useEffect(() => {
    if (!pathRef.current) return;
    const total = pathRef.current.getTotalLength();
    const pt = pathRef.current.getPointAtLength(progress * total);
    setPoint({ x: pt.x, y: pt.y });
  }, [progress]);

  useEffect(() => {
    return () => {
      timeoutsRef.current.forEach(clearTimeout);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const animateProgressTo = (target, duration) => {
    const startProgress = progress;
    const startTime = performance.now();
    const tick = (now) => {
      const t = Math.min(1, (now - startTime) / duration);
      setProgress(startProgress + (target - startProgress) * t);
      if (t < 1) {
        rafRef.current = requestAnimationFrame(tick);
      }
    };
    rafRef.current = requestAnimationFrame(tick);
  };

  const start = () => {
    setRunning(true);
    setDone(false);
    setStepIndex(0);
    setProgress(0);
    steps.forEach((_, i) => {
      const t = setTimeout(() => {
        setStepIndex(i);
        // moped only moves during the "coleta" -> "chega" steps (index 3, 4)
        if (i === 4) animateProgressTo(1, 850);
        if (i === steps.length - 1) {
          const t2 = setTimeout(() => setDone(true), 300);
          timeoutsRef.current.push(t2);
        }
      }, i * 900);
      timeoutsRef.current.push(t);
    });
  };

  const reset = () => {
    timeoutsRef.current.forEach(clearTimeout);
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    setRunning(false);
    setDone(false);
    setStepIndex(-1);
    setProgress(0);
  };

  const barProgress = stepIndex < 0 ? 0 : (stepIndex + 1) / steps.length;

  return (
    <div className="h-full w-full flex flex-col items-center justify-center px-6 sm:px-16 py-8">
      <p className="uppercase tracking-[0.3em] text-xs text-paprika font-body mb-3">
        Como funciona
      </p>
      <h2 className="font-display text-3xl sm:text-5xl text-center mb-6">
        A jornada de um pedido
      </h2>

      <div className="relative w-full max-w-2xl bg-ink-panel/40 border border-cream/10 rounded-3xl p-4 sm:p-6">
        <svg viewBox="0 0 600 320" className="w-full h-auto">
          <rect x="20" y="20" width="120" height="80" rx="10" fill="#241B14" stroke="#F6EFE4" strokeOpacity="0.08" />
          <rect x="460" y="30" width="120" height="90" rx="10" fill="#241B14" stroke="#F6EFE4" strokeOpacity="0.08" />
          <rect x="240" y="220" width="140" height="80" rx="10" fill="#241B14" stroke="#F6EFE4" strokeOpacity="0.08" />
          <rect x="330" y="20" width="100" height="60" rx="10" fill="#241B14" stroke="#F6EFE4" strokeOpacity="0.08" />

          <path
            ref={pathRef}
            d={PATH}
            fill="none"
            stroke="#F6EFE4"
            strokeOpacity="0.15"
            strokeWidth="4"
            strokeDasharray="2 10"
            strokeLinecap="round"
          />
          {progress > 0 && (
            <path
              d={PATH}
              fill="none"
              stroke="#FF5A36"
              strokeWidth="4"
              strokeLinecap="round"
              strokeDasharray={`${progress * 500} 500`}
            />
          )}

          <g transform="translate(70, 240)">
            <circle r="22" fill="#FFC24B" />
            <text x="0" y="6" textAnchor="middle" fontSize="20">🍔</text>
          </g>
          <text x="70" y="300" textAnchor="middle" fill="#F6EFE4" opacity="0.6" fontSize="13" fontFamily="Space Grotesk">Restaurante</text>

          <g transform="translate(535, 165)">
            <circle r="22" fill="#2FAE72" />
            <text x="0" y="6" textAnchor="middle" fontSize="20">🏠</text>
          </g>
          <text x="535" y="205" textAnchor="middle" fill="#F6EFE4" opacity="0.6" fontSize="13" fontFamily="Space Grotesk">Casa do cliente</text>

          {running && stepIndex >= 3 && (
            <g transform={`translate(${point.x}, ${point.y})`}>
              <circle r="16" fill="#15100C" stroke="#FF5A36" strokeWidth="2" />
              <text x="0" y="5" textAnchor="middle" fontSize="16">🛵</text>
            </g>
          )}
        </svg>

        <div className="mt-4 flex flex-col items-center gap-4">
          {!running && (
            <button
              onClick={start}
              className="bg-paprika hover:bg-paprika-dim transition-colors text-ink font-body font-semibold px-6 py-3 rounded-full inline-flex items-center gap-2"
            >
              <Bike size={18} />
              Fazer pedido
            </button>
          )}

          {running && (
            <div className="w-full">
              <div className="h-1.5 bg-cream/10 rounded-full overflow-hidden mb-3">
                <motion.div
                  className="h-full bg-paprika"
                  animate={{ width: `${barProgress * 100}%` }}
                  transition={{ duration: 0.5, ease: "linear" }}
                />
              </div>
              <AnimatePresence mode="wait">
                <motion.p
                  key={stepIndex}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  className="text-center font-body text-cream/80"
                >
                  {steps[stepIndex]}
                </motion.p>
              </AnimatePresence>
            </div>
          )}

          {done && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex items-center gap-2 text-leaf font-body font-semibold mt-1"
            >
              <PackageCheck size={20} />
              Pedido entregue! 🍔
              <button onClick={reset} className="ml-3 text-xs text-cream/40 underline underline-offset-2">
                repetir
              </button>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}
