"use client";

import { useState } from "react";
import { Clock, MapPin } from "lucide-react";
import Reveal from "./Reveal";

interface ScheduleItem {
  time: string;
  title: string;
  location: string;
  type: "Break" | "Talk" | "Keynote";
  speaker?: string;
}

interface ScheduleProps {
  isDark: boolean;
}

const schedule: ScheduleItem[] = [
  {
    time: "09:00",
    title: "Café de Boas-vindas",
    location: "Hall Principal",
    type: "Break",
  },
  {
    time: "10:00",
    title: "Machine Learning em Produção",
    speaker: "Sarah Chen",
    location: "Palco Principal",
    type: "Talk",
  },
  {
    time: "11:30",
    title: "Painel: A Experiência do Desenvolvedor",
    speaker: "Todos os palestrantes",
    location: "Palco Principal",
    type: "Keynote",
  },
  {
    time: "13:00",
    title: "Almoço de Encerramento",
    location: "Área de Convivência",
    type: "Break",
  },
];
interface HeroProps {
  isDark: boolean;
}

export default function Schedule({ isDark }: HeroProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const bgColor = isDark ? "bg-[var(--neutral-dark)]" : "bg-white";
  const textColor = isDark ? "text-neutral-light" : "text-neutral-dark";
  const borderColor = isDark
    ? "border-neutral-700/50"
    : "border-neutral-300/50";

  return (
    <section
      id="programacao"
      className={`scroll-mt-15 relative flex flex-col min-h-screen ${bgColor} ${textColor} overflow-hidden transition-colors duration-300`}
    >
      <div className="relative z-10 flex flex-col items-center justify-center py-20 px-6">
        <Reveal>
          <h2
            className={`text-5xl font-bold mb-2 font-league-spartan ${
              isDark ? "text-white" : "text-neutral-900"
            }`}
          >
            Agenda do Evento
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p
            className={`mb-12 text-center max-w-md ${
              isDark ? "text-neutral-300" : "text-neutral-600"
            }`}
          >
            Um dia de aprendizado, inovação e conexões.
          </p>
        </Reveal>

        <Reveal>
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            <button
              className={`px-6 py-2 rounded-full border text-sm transition ${
                isDark
                  ? "border-neutral-700 text-neutral-400 hover:bg-neutral-700"
                  : "border-neutral-400 text-neutral-600 hover:bg-neutral-200"
              }`}
            >
              Dia 13
            </button>
            <button
              className={`px-6 py-2 rounded-full border text-sm transition ${
                isDark
                  ? "border-neutral-700 text-neutral-400 hover:bg-neutral-700"
                  : "border-neutral-400 text-neutral-600 hover:bg-neutral-200"
              }`}
            >
              Dia 14
            </button>
            <button
              className={`px-6 py-2 rounded-full text-sm transition ${
                isDark
                  ? "bg-violet-700 text-white shadow-[0_0_12px_rgba(139,92,246,0.6)]"
                  : "bg-violet-600 text-white shadow-[0_0_12px_rgba(124,58,237,0.4)]"
              }`}
            >
              Dia 15
            </button>
          </div>
        </Reveal>

        <Reveal>
          <div className="w-full max-w-3xl space-y-4 transition-all duration-300">
            {schedule.map((item: ScheduleItem, index: number) => {
              const accentColor = index % 2 === 0 ? "#248DA0" : "#FFB237";
              const textColorValue = isDark ? "#f9fafb" : "#1f2937";
              const subTextColorValue = isDark
                ? "rgba(245,245,245,0.85)"
                : "rgba(55,65,81,0.85)";
              const isHovered = hoveredIndex === index;

              return (
                <div
                  key={index}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className={`flex flex-col md:flex-row md:items-center justify-between px-6 py-5 rounded-2xl border transition-transform duration-500 ease-out ${borderColor}`}
                  style={{
                    backgroundColor: isDark
                      ? `${accentColor}25`
                      : `${accentColor}15`,
                    borderLeft: `5px solid ${accentColor}`,
                    transform: isHovered
                      ? "scale(1.05)"
                      : hoveredIndex !== null
                      ? "scaleY(0.95)"
                      : "scale(1)",
                    opacity: hoveredIndex === null || isHovered ? 1 : 0.8,
                  }}
                >
                  <div className="flex items-center gap-4">
                    <Clock
                      className={`w-5 h-5 mt-1 ${
                        isDark ? "text-neutral-300" : "text-neutral-600"
                      }`}
                    />
                    <div>
                      <p
                        className="font-semibold text-lg"
                        style={{ color: textColorValue }}
                      >
                        {item.title}
                      </p>
                      {item.speaker && (
                        <p
                          className="text-sm"
                          style={{ color: subTextColorValue }}
                        >
                          {item.speaker}
                        </p>
                      )}
                      <div
                        className="flex items-center gap-1 text-sm mt-1"
                        style={{ color: subTextColorValue }}
                      >
                        <MapPin className="w-4 h-4" />
                        <span>{item.location}</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 md:mt-0 flex items-center gap-4">
                    <span
                      className={`font-mono text-sm ${
                        isDark ? "text-neutral-200" : "text-neutral-700"
                      }`}
                    >
                      {item.time}
                    </span>
                    <span
                      className={`px-3 py-1 text-xs border rounded-full uppercase tracking-wide transition ${
                        isDark
                          ? "bg-neutral-800/70 border-neutral-700 text-neutral-100"
                          : "bg-neutral-200/70 border-neutral-300 text-neutral-700"
                      }`}
                    >
                      {item.type}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>

      <div className="absolute bottom-0 right-0 w-[700px] md:w-[900px] opacity-10 pointer-events-none">
        <img src="/wave.png" alt="Wave decorativa" className="object-contain" />
      </div>
    </section>
  );
}
