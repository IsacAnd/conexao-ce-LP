"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import simbol from "@/public/simbol.png";
import Reveal from "./Reveal";

interface HeroProps {
  isDark: boolean;
}

export default function Location({ isDark }: HeroProps) {
  const bgColor = isDark ? "bg-[var(--neutral-dark)]" : "bg-neutral-50";
  const cardBg = isDark
    ? "bg-[rgba(255,255,255,0.08)]"
    : "bg-[rgba(0,0,0,0.05)]";
  const cardBorder = isDark
    ? "border-[rgba(255,255,255,0.12)]"
    : "border-[rgba(0,0,0,0.08)]";
  const textPrimary = isDark ? "text-[#e8e8e8]" : "text-neutral-900";
  const textSecondary = isDark ? "text-[#d0d0d0b3]" : "text-neutral-600";
  const textAccent = isDark ? "text-[#f5d76e]" : "text-violet-600";
  const textStrong = isDark ? "text-[#ffffffcc]" : "text-neutral-800";
  const mapFilter = isDark
    ? "grayscale(40%) brightness(90%) contrast(110%)"
    : "grayscale(0%) brightness(100%) contrast(100%)";

  return (
    <section
      id="location"
      className={`relative flex justify-center items-center min-h-screen ${bgColor} overflow-hidden px-6 transition-colors duration-300`}
    >
      <div className="absolute left-10 top-1/4 opacity-10 w-[500px] h-[500px] z-0">
        <Image
          src={simbol}
          alt="Logo do evento"
          fill
          className="object-contain"
        />
      </div>
      <Reveal>
        <div
          className={`relative z-10 w-full max-w-6xl flex flex-col md:flex-row ${cardBg} backdrop-blur-lg rounded-2xl shadow-2xl overflow-hidden border ${cardBorder} transition-colors duration-300`}
        >
          <div
            className={`w-full md:w-1/2 p-10 flex flex-col justify-center ${textPrimary}`}
          >
            <h2
              className={`text-3xl font-bold mb-4 font-league-spartan ${textAccent}`}
            >
              Local do Evento
            </h2>
            <p className="text-lg font-outfit leading-relaxed mb-6">
              <strong className={textStrong}>Endereço:</strong> <br />
              R. Des. Moreira da Rocha, 1030 <br />
              Centro, Sobral - CE, 62010-140
            </p>
            <p className={`text-base ${textSecondary}`}>
              Localizado no coração de Sobral, o evento acontecerá em um dos
              principais pontos da cidade, com fácil acesso e ampla estrutura
              para os participantes.
            </p>
          </div>
          <div className="w-full md:w-1/2 h-[400px] md:h-auto">
            <iframe
              title="Localização do evento"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3920.6978595170025!2d-40.34926472418437!3d-3.688898896265692!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ebd9ab5e2b8dfd%3A0xc51ce946edcf38dc!2sR.%20Des.%20Moreira%20da%20Rocha%2C%201030%20-%20Centro%2C%20Sobral%20-%20CE%2C%2062010-140!5e0!3m2!1spt-BR!2sbr!4v1730900000000!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{
                border: 0,
                filter: mapFilter,
                transition: "filter 300ms ease-out",
              }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
