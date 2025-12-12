"use client";
import simbol from "@/public/simbol.png";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, ChevronLeft, ChevronRight, MapPin } from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import Reveal from "./Reveal";

// Array de imagens do local
const venueImages = [
  {
    src: "/imgs-cadeira-criativa/cadeia-criativa-aerea.jpg",
    alt: "Cadeia Criativa - Vista Aérea",
    priority: true,
  },
  {
    src: "/imgs-cadeira-criativa/img-frente-cadeira-criativa.png",
    alt: "Cadeia Criativa - Fachada Principal",
    priority: false,
  },
  {
    src: "/imgs-cadeira-criativa/img-lateral-cadeira-criativa.png",
    alt: "Cadeia Criativa - Vista Lateral",
    priority: false,
  },
  {
    src: "/imgs-cadeira-criativa/interno-cadeira-criativa.png",
    alt: "Cadeia Criativa - Espaço Interno",
    priority: false,
  },
];

interface HeroProps {
  isDark: boolean;
}

export default function Location({ isDark }: HeroProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const bgColor = isDark ? "bg-[var(--neutral-dark)]" : "bg-neutral-50";
  const cardBg = isDark
    ? "bg-[rgba(255,255,255,0.08)]"
    : "bg-[rgba(0,0,0,0.05)]";
  const cardBorder = isDark
    ? "border-[rgba(255,255,255,0.12)]"
    : "border-[rgba(0,0,0,0.08)]";
  const textPrimary = isDark ? "text-[#e8e8e8]" : "text-neutral-900";
  const textSecondary = isDark ? "text-[#d0d0d0b3]" : "text-neutral-600";
  const textAccent = isDark ? "text-[#248DA0]" : "text-[#223a3f]";

  // Navegação do carousel
  const nextImage = useCallback(() => {
    setCurrentImageIndex((prev) => (prev + 1) % venueImages.length);
  }, []);

  const prevImage = useCallback(() => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? venueImages.length - 1 : prev - 1
    );
  }, []);

  const goToImage = useCallback((index: number) => {
    setCurrentImageIndex(index);
    setIsAutoPlaying(false);
  }, []);

  // Auto-play do carousel
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(nextImage, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, nextImage]);

  const handleDirections = () => {
    window.open(
      "https://www.google.com/maps/dir/?api=1&destination=R.+Des.+Moreira+da+Rocha,+1030+-+Centro,+Sobral+-+CE,+62010-140",
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <section
      id="location"
      className={`scroll-mt-15 relative flex flex-col justify-center items-center min-h-screen ${bgColor} overflow-hidden px-6 py-20 transition-colors duration-300`}
    >
      {/* Background decoration */}
      <div className="absolute left-10 top-1/4 opacity-10 w-[500px] h-[500px] z-0">
        <Image
          src={simbol}
          alt="Logo do evento"
          fill
          className="object-contain"
        />
      </div>

      <div className="relative z-10 w-full max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <Reveal>
            <h2
              className={`text-5xl font-bold mb-4 font-league-spartan ${isDark ? "text-white" : "text-neutral-900"
                }`}
            >
              Local do Evento
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className={`text-xl ${textSecondary}`}>
              Conheça onde o Conexão Ceará acontecerá
            </p>
          </Reveal>
        </div>

        {/* Main Content Grid */}
        <Reveal delay={0.3}>
          <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-8">
            {/* Image Carousel/Slider */}
            <div className="relative w-full h-[400px] lg:h-[450px] rounded-2xl overflow-hidden bg-neutral-900/10 group shadow-xl">
              {/* Imagens com AnimatePresence para transições suaves */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentImageIndex}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="absolute inset-0"
                >
                  <Image
                    src={venueImages[currentImageIndex].src}
                    alt={venueImages[currentImageIndex].alt}
                    fill
                    priority={venueImages[currentImageIndex].priority}
                    quality={75}
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 600px"
                    className="object-cover"
                  />
                </motion.div>
              </AnimatePresence>

              {/* Botões de navegação - aparecem no hover */}
              <button
                onClick={() => {
                  prevImage();
                  setIsAutoPlaying(false);
                }}
                className={`absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full ${isDark
                  ? "bg-white/20 hover:bg-white/30"
                  : "bg-black/20 hover:bg-black/30"
                  } backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 cursor-pointer`}
                aria-label="Imagem anterior"
              >
                <ChevronLeft
                  className={isDark ? "text-white" : "text-black"}
                  size={24}
                />
              </button>

              <button
                onClick={() => {
                  nextImage();
                  setIsAutoPlaying(false);
                }}
                className={`absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full ${isDark
                  ? "bg-white/20 hover:bg-white/30"
                  : "bg-black/20 hover:bg-black/30"
                  } backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 cursor-pointer`}
                aria-label="Próxima imagem"
              >
                <ChevronRight
                  className={isDark ? "text-white" : "text-black"}
                  size={24}
                />
              </button>

              {/* Indicadores (dots) */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
                {venueImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToImage(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 cursor-pointer ${index === currentImageIndex
                      ? isDark
                        ? "bg-white w-8"
                        : "bg-black w-8"
                      : isDark
                        ? "bg-white/50 hover:bg-white/70"
                        : "bg-black/50 hover:bg-black/70"
                      }`}
                    aria-label={`Ir para imagem ${index + 1}`}
                  />
                ))}
              </div>

              {/* Contador de imagens */}
              <div
                className={`absolute top-4 right-4 z-20 px-3 py-1 rounded-full text-sm font-medium ${isDark ? "bg-black/40 text-white" : "bg-white/40 text-black"
                  } backdrop-blur-sm`}
              >
                {currentImageIndex + 1} / {venueImages.length}
              </div>
            </div>

            {/* Address Info Card */}
            <div
              className={`${cardBg} backdrop-blur-lg border ${cardBorder} rounded-2xl p-6 h-[400px] lg:h-[450px] flex flex-col justify-between shadow-xl transition-colors duration-300`}
            >
              <div>
                {/* Título */}
                <h3
                  className={`text-xl lg:text-2xl font-bold mb-3 lg:mb-4 font-league-spartan text-center ${textAccent}`}
                >
                  Cadeia Criativa
                </h3>

                {/* Endereço */}
                <div className="flex items-start gap-2 lg:gap-3 mb-3 lg:mb-4">
                  <MapPin
                    className={`w-5 h-5 lg:w-6 lg:h-6 mt-1 shrink-0 ${isDark ? "text-[#FFB237]" : "text-[#223a3f]"
                      }`}
                  />
                  <div>
                    <h4
                      className={`text-base lg:text-lg font-bold mb-1 font-league-spartan ${textPrimary}`}
                    >
                      Endereço
                    </h4>
                    <p
                      className={`text-sm lg:text-base leading-relaxed ${textPrimary}`}
                    >
                      R. Des. Moreira da Rocha, 1030 <br />
                      Centro, Sobral - CE <br />
                      CEP: 62010-140
                    </p>
                  </div>
                </div>

                {/* Descrição */}
                <div className={`pt-3 lg:pt-4 border-t ${cardBorder}`}>
                  <p
                    className={`text-sm lg:text-base leading-relaxed ${textSecondary}`}
                  >
                    Localizado no coração de Sobral, a Cadeia Criativa é um
                    espaço moderno e inovador, com ampla estrutura e fácil
                    acesso para todos os participantes do evento.
                  </p>
                </div>
              </div>

              {/* CTA Button */}
              <button
                onClick={handleDirections}
                className={`mt-4 lg:mt-6 w-full bg-[#FFB237] hover:bg-[#f5a623] text-white font-bold py-3 lg:py-4 px-4 lg:px-6 rounded-full flex items-center justify-center gap-2 shadow-lg transition-all duration-300 ease-out hover:shadow-[0_0_20px_rgba(255,178,55,0.5)] hover:scale-105 cursor-pointer`}
              >
                <span className="text-base lg:text-lg">Como chegar</span>
                <ArrowUpRight className="w-4 h-4 lg:w-5 lg:h-5" />
              </button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
