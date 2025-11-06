"use client";

import { useState } from "react";
import { Clock, MapPin } from "lucide-react";

const schedule = [
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

export default function Schedule() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="relative flex flex-col min-h-screen bg-[var(--neutral-dark)] text-neutral-light overflow-hidden">
      <div className="relative z-10 flex flex-col items-center justify-center py-20 px-6">
        <h2 className="text-5xl font-bold mb-2 text-white font-league-spartan">
          Agenda do Evento
        </h2>
        <p className="text-neutral-300 mb-12 text-center max-w-md">
          Um dia de aprendizado, inovação e conexões.
        </p>

        <div className="flex flex-wrap justify-center gap-3 mb-10">
          <button className="px-6 py-2 rounded-full border border-neutral-700 text-sm text-neutral-400 hover:bg-neutral-700 transition">
            Dia 13
          </button>
          <button className="px-6 py-2 rounded-full border border-neutral-700 text-sm text-neutral-400 hover:bg-neutral-700 transition">
            Dia 14
          </button>
          <button className="px-6 py-2 rounded-full border border-neutral-700 text-sm bg-violet-700 text-white shadow-[0_0_12px_rgba(139,92,246,0.6)] transition">
            Dia 15
          </button>
        </div>

        <div className="w-full max-w-3xl space-y-4 transition-all duration-300">
          {schedule.map((item, index) => {
            const accentColor = index % 2 === 0 ? "#248DA0" : "#FFB237";
            const textColor = "#f9fafb";
            const subTextColor = "rgba(245,245,245,0.85)";
            const isHovered = hoveredIndex === index;

            return (
              <div
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="flex flex-col md:flex-row md:items-center justify-between px-6 py-5 rounded-2xl border border-neutral-700/50 backdrop-blur-sm transition-transform duration-500 ease-out"
                style={{
                  backgroundColor: `${accentColor}25`,
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
                  <Clock className="w-5 h-5 text-neutral-300 mt-1" />
                  <div>
                    <p
                      className="font-semibold text-lg"
                      style={{ color: textColor }}
                    >
                      {item.title}
                    </p>
                    {item.speaker && (
                      <p className="text-sm" style={{ color: subTextColor }}>
                        {item.speaker}
                      </p>
                    )}
                    <div
                      className="flex items-center gap-1 text-sm mt-1"
                      style={{ color: subTextColor }}
                    >
                      <MapPin className="w-4 h-4" />
                      <span>{item.location}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-4 md:mt-0 flex items-center gap-4">
                  <span className="font-mono text-sm text-neutral-200">
                    {item.time}
                  </span>
                  <span className="px-3 py-1 text-xs bg-neutral-800/70 border border-neutral-700 rounded-full text-neutral-100 uppercase tracking-wide">
                    {item.type}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="absolute bottom-0 right-0 w-[500px] md:w-[700px] opacity-90 pointer-events-none">
        <img src="/wave.png" alt="Wave decorativa" className="object-contain" />
      </div>
    </section>
  );
}
