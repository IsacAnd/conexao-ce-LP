"use client";

import simbol from "@/public/simbol.png";
import wave from "@/public/wave.png";
import { motion } from "framer-motion";
import {
  Calendar,
  Clock,
  ExternalLink,
  MapPin,
  Presentation,
  Users,
} from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import Reveal from "./Reveal";

interface HeroProps {
  isDark: boolean;
}

export default function Hero({ isDark }: HeroProps) {
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const calculateCountdown = () => {
      const eventDate = new Date("2025-12-13T09:00:00-03:00").getTime();
      const now = new Date().getTime();
      const distance = eventDate - now;

      if (distance > 0) {
        setCountdown({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          ),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    };

    calculateCountdown();
    const interval = setInterval(calculateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  const bgColor = isDark
    ? "bg-[#248DA0]"
    : "bg-gradient-to-br from-[#248DA0] via-[#2A9BB5] to-[#FFB237]/30";
  const textColor = "text-white";
  const cardBg = "bg-white/10 backdrop-blur-md border border-white/20";

  return (
    <section
      id="about"
      className={`relative flex flex-col items-center justify-center text-center min-h-screen w-full overflow-hidden ${bgColor} ${textColor} px-4 transition-colors duration-300`}
    >
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-cyan-300/20 rounded-full blur-[180px]"
        />

        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            x: [0, -40, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-0 right-[-200px] w-[600px] h-[600px] bg-teal-400/25 rounded-full blur-[200px]"
        />

        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 20, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-[#FFB237]/15 rounded-full blur-[180px]"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-[#248DA0]/50 via-[#1E7B8D]/30 to-[#155E6C]/50" />
      </div>

      {/* Decorative Wave at Bottom */}
      <div className="absolute bottom-0 left-0 w-full opacity-20 z-0">
        <Image
          src={wave}
          alt=""
          className="w-full h-auto object-cover"
          priority
        />
      </div>

      {/* Floating Symbol Decoration */}
      <div className="absolute right-10 top-1/4 opacity-5 w-[350px] h-[350px] hidden lg:block">
        <Image src={simbol} alt="" fill className="object-contain" />
      </div>

      <div className="relative z-10 max-w-4xl">
        <Reveal>
          <div className="inline-block bg-white/10 text-cyan-200 text-sm px-4 py-1 rounded-full mb-4 border border-cyan-400/30 backdrop-blur-sm">
            Dezembro 13, 2025
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-[#FFB237] mb-4 drop-shadow-[0_0_25px_rgba(56,189,248,0.4)] font-league-spartan">
            Conexão Ceará
          </h1>
        </Reveal>

        <Reveal delay={0.25}>
          <p className="text-cyan-50/90 text-lg leading-relaxed mb-8 max-w-2xl mx-auto font-outfit">
            O primeiro grande encontro de tecnologia do interior do Ceará. Um
            dia inteiro de palestras, mentorias e oportunidades únicas de
            networking.
          </p>
        </Reveal>

        {/* Countdown Timer */}
        <Reveal delay={0.3}>
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <div className={`${cardBg} rounded-xl p-4 min-w-[80px]`}>
              <div className="text-3xl sm:text-4xl font-bold font-league-spartan text-[#FFB237]">
                {countdown.days}
              </div>
              <div className="text-xs text-cyan-100 mt-1">Dias</div>
            </div>
            <div className={`${cardBg} rounded-xl p-4 min-w-[80px]`}>
              <div className="text-3xl sm:text-4xl font-bold font-league-spartan text-[#FFB237]">
                {countdown.hours}
              </div>
              <div className="text-xs text-cyan-100 mt-1">Horas</div>
            </div>
            <div className={`${cardBg} rounded-xl p-4 min-w-[80px]`}>
              <div className="text-3xl sm:text-4xl font-bold font-league-spartan text-[#FFB237]">
                {countdown.minutes}
              </div>
              <div className="text-xs text-cyan-100 mt-1">Min</div>
            </div>
            <div className={`${cardBg} rounded-xl p-4 min-w-[80px]`}>
              <div className="text-3xl sm:text-4xl font-bold font-league-spartan text-[#FFB237]">
                {countdown.seconds}
              </div>
              <div className="text-xs text-cyan-100 mt-1">Seg</div>
            </div>
          </div>
        </Reveal>

        {/* Event Info Pills */}
        <Reveal delay={0.35}>
          <div className="flex flex-wrap justify-center gap-4 text-cyan-100/90 text-sm mb-6">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-cyan-200" />
              <span>Dezembro 13, 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-cyan-200" />
              <span>Sobral, Ceará</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-cyan-200" />
              <span>2000+ Participantes</span>
            </div>
          </div>
        </Reveal>

        {/* Stats Grid */}
        <Reveal delay={0.4}>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/10">
              <Clock className="w-4 h-4 text-[#FFB237]" />
              <span className="text-sm font-semibold">
                10 Horas de Conteúdo
              </span>
            </div>
            <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/10">
              <Presentation className="w-4 h-4 text-[#FFB237]" />
              <span className="text-sm font-semibold">6+ Palestras</span>
            </div>
          </div>
        </Reveal>

        {/* Vagas Limitadas Badge */}
        <Reveal delay={0.45}>
          <div className="inline-block bg-[#FFB237]/20 text-[#FFB237] text-xs font-bold px-3 py-1 rounded-full mb-4 border border-[#FFB237]/30 backdrop-blur-sm animate-pulse">
            VAGAS LIMITADAS
          </div>
        </Reveal>

        {/* CTAs */}
        <Reveal delay={0.5}>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => scrollToSection("registration")}
              className="bg-white text-[#155E6C] font-semibold hover:bg-cyan-100 px-6 py-3 rounded-full shadow-lg shadow-cyan-500/30 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] flex items-center gap-2 cursor-pointer"
            >
              Garanta Sua Vaga Gratuita
              <ExternalLink size={18} />
            </button>
            <div className="border border-white/40 text-white/60 rounded-full px-6 py-3 flex items-center gap-2 cursor-not-allowed">
              Programação em Breve
            </div>
          </div>
        </Reveal>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 flex justify-center z-10">
        <div className="w-5 h-8 border-2 border-cyan-200 rounded-full flex justify-center">
          <div className="w-1 h-2 bg-cyan-100 rounded-full mt-1 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
}
