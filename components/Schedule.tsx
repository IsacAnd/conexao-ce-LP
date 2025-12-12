"use client";

import { useState } from "react";
import { Clock, MapPin } from "lucide-react";
import Image from "next/image";
import simbol from "@/public/wave.png";
import Reveal from "./Reveal";

interface ScheduleItem {
  time: string;
  title: string;
  location: string;
  type: "Break" | "Talk" | "Keynote";
  speaker?: string;
  room: "Coworking" | "Secitece";
  period: "Manhã" | "Tarde";
}

interface ScheduleProps {
  isDark: boolean;
}

const schedule: ScheduleItem[] = [
  // ======== MANHÃ – COWORKING =========
  {
    time: "08:00 - 08:45",
    title: "Credenciamento",
    location: "Hall Principal",
    type: "Break",
    room: "Coworking",
    period: "Manhã",
  },
  {
    time: "08:45 - 09:00",
    title: "Abertura",
    location: "Sala Coworking",
    type: "Keynote",
    room: "Coworking",
    period: "Manhã",
  },
  {
    time: "09:00 - 09:30",
    title: "IA no fluxo de desenvolvimento e frameworks",
    speaker: "Clezio Júnior",
    location: "Sala Coworking",
    type: "Talk",
    room: "Coworking",
    period: "Manhã",
  },
  {
    time: "09:30 - 11:00",
    title: "Roda de Conversa",
    speaker: "Leo",
    location: "Sala Coworking",
    type: "Talk",
    room: "Coworking",
    period: "Manhã",
  },
  {
    time: "11:00 - 12:00",
    title: "Como Análise e Ciência de Dados pode ser Útil para um Empreendedor",
    speaker: "Prof. Hudson",
    location: "Sala Coworking",
    type: "Talk",
    room: "Coworking",
    period: "Manhã",
  },

  // ======== TARDE – COWORKING =========
  {
    time: "13:30 - 14:30",
    title: "Design Patterns & Design Principles: A Engenharia Invisível do Software",
    speaker: "Leonardo Carneiro",
    location: "Sala Coworking",
    type: "Talk",
    room: "Coworking",
    period: "Tarde",
  },
  {
    time: "14:30 - 15:30",
    title: "Coffee Break",
    location: "Área Externa",
    type: "Break",
    room: "Coworking",
    period: "Tarde",
  },
  {
    time: "15:30 - 16:30",
    title: "A Importância do Registro de Marca no INPI para a Segurança Jurídica e Comercial do seu Negócio",
    speaker: "Thiago Macário Lima Pinheiro",
    location: "Sala Coworking",
    type: "Talk",
    room: "Coworking",
    period: "Tarde",
  },

  {
    time: "16:30 - 17:30",
    title: "Palestra",
    speaker: "Kossi Sedjro Mawuli Dominique Houessou",
    location: "Sala Coworking",
    type: "Talk",
    room: "Coworking",
    period: "Tarde",
  },
  {
    time: "15:30 - 16:30",
    title: "Apresentação",
    speaker: "Ardulab + Nucllic",
    location: "Sala Secitece",
    type: "Talk",
    room: "Secitece",
    period: "Tarde",
  },
  {
    time: "17:30 - 18:00",
    title: "Encerramento",
    location: "Sala Coworking",
    type: "Keynote",
    room: "Coworking",
    period: "Tarde",
  },
];

export default function Schedule({ isDark }: ScheduleProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [periodFilter, setPeriodFilter] = useState<"Manhã" | "Tarde">("Manhã");

  const bgColor = isDark ? "bg-[var(--neutral-dark)]" : "bg-neutral-50";
  const textColor = isDark ? "text-neutral-light" : "text-neutral-dark";
  const borderColor = isDark ? "border-neutral-700/50" : "border-neutral-300/50";

  const azul = "#248DA0";

  const filteredSchedule = schedule.filter((s) => s.period === periodFilter);

  return (
    <section
      id="schedule"
      className={`scroll-mt-15 relative flex flex-col min-h-screen ${bgColor} ${textColor} px-6 py-20 overflow-hidden transition-colors duration-300`}
    >
      <div className="relative z-10 flex flex-col items-center justify-center">
        <Reveal>
          <h2
            className={`text-5xl font-bold mb-2 font-league-spartan ${isDark ? "text-white" : "text-neutral-900"}`}
          >
            Programação
          </h2>
        </Reveal>

        <Reveal delay={0.2}>
          <p
            className={`mb-12 text-center max-w-md ${isDark ? "text-neutral-300" : "text-neutral-600"}`}
          >
            Um dia de aprendizado, inovação e conexões.
          </p>
        </Reveal>

        {/* BOTÕES MANHÃ / TARDE */}
        <Reveal>
          <div className="flex gap-4 mb-10">
            {["Manhã", "Tarde"].map((p) => {
              const active = periodFilter === p;

              return (
                <button
                  key={p}
                  onClick={() => setPeriodFilter(p as any)}
                  className={`px-6 py-2 rounded-full text-lg font-semibold transition-all duration-300 border`}
                  style={{
                    backgroundColor: active ? azul : "transparent",
                    color: active ? "white" : isDark ? "#d1d5db" : "#374151",
                    borderColor: active ? azul : isDark ? "#4b5563" : "#d1d5db",
                    boxShadow: active ? `0 0 12px ${azul}80` : "none",
                  }}
                >
                  {p}
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* LISTAGEM */}
        <Reveal>
          <div className="w-full max-w-3xl space-y-4 transition-all duration-300">
            {filteredSchedule.map((item, index) => {
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
                    backgroundColor: isDark ? `${accentColor}25` : `${accentColor}15`,
                    borderLeft: `5px solid ${accentColor}`,
                    transform: isHovered
                      ? "scale(1.04)"
                      : "scale(1)",
                    opacity: hoveredIndex === null || isHovered ? 1 : 0.8,
                  }}
                >
                  <div className="flex items-center gap-4">
                    <Clock
                      className={`w-6 h-6 flex-shrink-0 ${isDark ? "text-neutral-300" : "text-neutral-600"}`}
                    />

                    <div>
                      <p className="font-semibold text-lg" style={{ color: textColorValue }}>
                        {item.title}
                      </p>

                      {item.speaker && (
                        <p className="text-sm" style={{ color: subTextColorValue }}>
                          {item.speaker}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="mt-4 md:mt-0 flex items-center gap-4 whitespace-nowrap min-w-fit">
                    <span
                      className={`flex flex-row items-center gap-1 px-3 py-1 text-xs border rounded-full tracking-wide`}
                      style={{
                        backgroundColor: isDark ? "#11182790" : "#e5e7eb90",
                        color: isDark ? "#f3f4f6" : "#374151",
                        borderColor: isDark ? "#4b5563" : "#d1d5db",
                      }}
                    >
                      <Clock className="w-4 h-4" /> {item.time}
                    </span>

                    <span
                      className={`flex flex-row items-center gap-1 px-3 py-1 text-xs border rounded-full tracking-wide`}
                      style={{
                        backgroundColor: isDark ? "#11182790" : "#e5e7eb90",
                        color: isDark ? "#f3f4f6" : "#374151",
                        borderColor: isDark ? "#4b5563" : "#d1d5db",
                      }}
                    >
                      <MapPin className="w-4 h-4" /> {item.room}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>

      <div className="pointer-events-none absolute top-1/2 right-0 -translate-y-1/2 opacity-10 w-[900px] h-[500px] z-0">
        <Image
          src={simbol}
          alt="Logo do evento"
          fill
          className="object-contain"
        />
      </div>

    </section>
  );
}
