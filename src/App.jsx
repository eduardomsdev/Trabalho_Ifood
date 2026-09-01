import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Maximize2, Minimize2, Play } from "lucide-react";

import SlideCapa from "./components/SlideCapa";
import SlideOQueE from "./components/SlideOQueE";
import SlideTimeline from "./components/SlideTimeline";
import SlideJornada from "./components/SlideJornada";
import SlideSucesso from "./components/SlideSucesso";
import SlideEmpreendedorismo from "./components/SlideEmpreendedorismo";
import SlideAgil from "./components/SlideAgil";
import SlideDesafio from "./components/SlideDesafio";
import SlideAprendizado from "./components/SlideAprendizado";
import SlideFontes from "./components/SlideFontes";

const slides = [
  { Component: SlideCapa, label: "Capa" },
  { Component: SlideOQueE, label: "O que é" },
  { Component: SlideTimeline, label: "História" },
  { Component: SlideJornada, label: "A jornada do pedido" },
  { Component: SlideSucesso, label: "Por que deu certo" },
  { Component: SlideEmpreendedorismo, label: "Empreendedorismo" },
  { Component: SlideAgil, label: "Metodologias ágeis" },
  { Component: SlideDesafio, label: "Desafio" },
  { Component: SlideAprendizado, label: "Aprendizado" },
  { Component: SlideFontes, label: "Fontes" },
];

export default function App() {
  const [index, setIndex] = useState(0);
  const [started, setStarted] = useState(false);
  const [direction, setDirection] = useState(1);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const containerRef = useRef(null);

  const goTo = useCallback(
    (next) => {
      if (next < 0 || next >= slides.length) return;
      setDirection(next > index ? 1 : -1);
      setIndex(next);
    },
    [index]
  );

  const next = useCallback(() => goTo(index + 1), [goTo, index]);
  const prev = useCallback(() => goTo(index - 1), [goTo, index]);

  useEffect(() => {
    if (!started) return;
    const onKey = (e) => {
      if (e.key === "ArrowRight" || e.key === " ") {
        e.preventDefault();
        next();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        prev();
      } else if (e.key === "Escape" && document.fullscreenElement) {
        document.exitFullscreen();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [started, next, prev]);

  useEffect(() => {
    const onFsChange = () => setIsFullscreen(!!document.fullscreenElement);
    document.addEventListener("fullscreenchange", onFsChange);
    return () => document.removeEventListener("fullscreenchange", onFsChange);
  }, []);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      containerRef.current?.requestFullscreen?.();
    } else {
      document.exitFullscreen();
    }
  };

  const ActiveSlide = slides[index].Component;

  if (!started) {
    return (
      <div className="h-screen w-screen bg-ink text-cream flex items-center justify-center px-6">
        <div className="max-w-xl text-center">
          <p className="uppercase tracking-[0.3em] text-xs text-paprika mb-6 font-body">
            Empreendedorismo e Metodologias Ágeis
          </p>
          <h1 className="font-display text-5xl sm:text-6xl leading-tight mb-4">
            iFood: empreendedorismo, inovação e agilidade
          </h1>
          <p className="text-cream/70 font-body mb-10">
            Estudo de caso apresentado em sala de aula.
          </p>
          <button
            onClick={() => setStarted(true)}
            className="inline-flex items-center gap-3 bg-paprika hover:bg-paprika-dim transition-colors text-ink font-body font-semibold px-8 py-4 rounded-full text-lg"
          >
            <Play size={20} fill="currentColor" />
            Começar apresentação
          </button>
        </div>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className="h-screen w-screen bg-ink text-cream relative overflow-hidden select-none"
    >
      {/* Progress bar */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-ink-soft z-30">
        <motion.div
          className="h-full bg-paprika"
          initial={false}
          animate={{ width: `${((index + 1) / slides.length) * 100}%` }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        />
      </div>

      {/* Slide content */}
      <div className="absolute inset-0 top-1">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={index}
            custom={direction}
            initial={{ opacity: 0, x: direction * 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction * -40 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="h-full w-full"
          >
            <ActiveSlide goNext={next} />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation controls */}
      <div className="absolute bottom-6 left-0 right-0 flex items-center justify-center gap-6 z-30 font-body">
        <button
          onClick={prev}
          disabled={index === 0}
          aria-label="Voltar"
          className="w-11 h-11 rounded-full border border-cream/20 flex items-center justify-center hover:bg-cream/10 disabled:opacity-30 disabled:hover:bg-transparent transition-colors"
        >
          <ChevronLeft size={20} />
        </button>

        <div className="flex items-center gap-2 text-sm text-cream/60 tabular-nums">
          <span className="text-cream font-semibold">{index + 1}</span>
          <span>/</span>
          <span>{slides.length}</span>
          <span className="hidden sm:inline ml-2 text-cream/40">· {slides[index].label}</span>
        </div>

        <button
          onClick={next}
          disabled={index === slides.length - 1}
          aria-label="Próximo"
          className="w-11 h-11 rounded-full border border-cream/20 flex items-center justify-center hover:bg-cream/10 disabled:opacity-30 disabled:hover:bg-transparent transition-colors"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      <button
        onClick={toggleFullscreen}
        aria-label="Alternar tela cheia"
        className="absolute bottom-6 right-6 w-11 h-11 rounded-full border border-cream/20 flex items-center justify-center hover:bg-cream/10 transition-colors z-30"
      >
        {isFullscreen ? <Minimize2 size={18} /> : <Maximize2 size={18} />}
      </button>

      {/* Dot indicators */}
      <div className="absolute bottom-6 left-6 hidden md:flex gap-1.5 z-30">
        {slides.map((s, i) => (
          <button
            key={s.label}
            onClick={() => goTo(i)}
            aria-label={`Ir para slide ${i + 1}: ${s.label}`}
            className={`h-1.5 rounded-full transition-all ${
              i === index ? "w-6 bg-paprika" : "w-1.5 bg-cream/25 hover:bg-cream/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
