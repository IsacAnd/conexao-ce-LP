"use client";

import { Award, CheckCircle, ExternalLink, Mic, UserPlus } from "lucide-react";
import Reveal from "./Reveal";

interface RegistrationProps {
  isDark: boolean;
}

export default function Registration({ isDark }: RegistrationProps) {
  const bgColor = isDark ? "bg-[var(--neutral-dark)]" : "bg-neutral-50";
  const titleColor = isDark ? "text-white" : "text-black";
  const textColor = isDark ? "text-neutral-300" : "text-neutral-800";

  const cardBg = isDark
    ? "border-white/10 bg-white/5"
    : "border-black/10 bg-white/60";

  return (
    <section
      id="registration"
      className={`scroll-mt-15 relative w-full min-h-screen py-24 px-6 flex flex-col items-center overflow-hidden ${bgColor} transition-colors duration-300`}
    >
      {/* Blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-2/3 left-1/2 -translate-x-1/2 -translate-y-1/3 w-[900px] h-[900px] bg-[#248DA0]/20 rounded-full blur-[200px]" />
        <div className="absolute top-90 right-[-200px] w-[500px] h-[500px] bg-[#FFB237]/20 rounded-full blur-[180px]" />
      </div>

      <Reveal>
        <h2
          className={`text-5xl font-bold text-center mb-4 font-league-spartan ${titleColor}`}
        >
          Participe do Evento
        </h2>
      </Reveal>

      <Reveal delay={0.15}>
        <p
          className={`max-w-2xl text-center mb-12 leading-relaxed ${textColor}`}
        >
          Escolha como você quer fazer parte do Conexão Ceará. Seja participante
          ou compartilhe seu conhecimento como palestrante.
        </p>
      </Reveal>

      <Reveal delay={0.25}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl w-full">
          {/* Card Participante - Maior destaque */}
          <div
            className={`flex flex-col p-8 rounded-2xl shadow-xl backdrop-blur-md border ${cardBg} transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl`}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-[#248DA0]/20 rounded-xl">
                <UserPlus size={32} className="text-[#248DA0]" />
              </div>
              <h3
                className={`text-2xl font-bold font-league-spartan ${titleColor}`}
              >
                Participe
              </h3>
            </div>

            <p className={`mb-6 leading-relaxed ${textColor}`}>
              Garanta sua vaga e faça parte do maior encontro de tecnologia e
              inovação da cidade de Sobral - CE. Vagas limitadas!
            </p>

            <ul className="space-y-3 mb-8 flex-grow">
              <li className="flex items-start gap-2">
                <CheckCircle
                  size={20}
                  className="text-[#248DA0] mt-0.5 flex-shrink-0"
                />
                <span className={textColor}>
                  Networking com a comunidade tech do Ceará
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle
                  size={20}
                  className="text-[#248DA0] mt-0.5 flex-shrink-0"
                />
                <span className={textColor}>
                  Palestras com líderes do mercado nacional e internacional
                </span>
              </li>

              <li className="flex items-start gap-2">
                <CheckCircle
                  size={20}
                  className="text-[#248DA0] mt-0.5 flex-shrink-0"
                />
                <span className={textColor}>
                  Aprendizado, troca de experiências e muito mais
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle
                  size={20}
                  className="text-[#248DA0] mt-0.5 flex-shrink-0"
                />
                <span className={textColor}>Certificado de participação</span>
              </li>
              {/* <li className="flex items-start gap-2">
                <CheckCircle
                  size={20}
                  className="text-[#248DA0] mt-0.5 flex-shrink-0"
                />
                <span className={textColor}>
                  Coffee break incluídos
                </span>
              </li> */}
            </ul>

            <a
              href="https://www.sympla.com.br/evento/conexao-ceara/3219530"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-[#248DA0] hover:bg-[#1f7e8f] text-white font-semibold py-4 rounded-xl shadow-lg shadow-cyan-500/20 transition-all duration-300 flex items-center justify-center gap-2 hover:shadow-[0_0_20px_rgba(36,141,160,0.4)] hover:scale-105"
            >
              Inscreva-se Gratuitamente
              <ExternalLink size={20} />
            </a>
          </div>

          {/* Card Palestrante - Destaque secundário */}
          <div
            className={`flex flex-col p-8 rounded-2xl shadow-xl backdrop-blur-md border ${cardBg} transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl`}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-[#FFB237]/20 rounded-xl">
                <Mic size={32} className="text-[#FFB237]" />
              </div>
              <h3
                className={`text-2xl font-bold font-league-spartan ${titleColor}`}
              >
                Seja Palestrante
              </h3>
            </div>

            <p className={`mb-6 leading-relaxed ${textColor}`}>
              Compartilhe seu conhecimento e experiência com a comunidade tech
              do Ceará. Submeta sua proposta de palestra.
            </p>

            <ul className="space-y-3 mb-8 flex-grow">
              <li className="flex items-start gap-2">
                <Award
                  size={20}
                  className="text-[#FFB237] mt-0.5 flex-shrink-0"
                />
                <span className={textColor}>
                  Visibilidade nacional no ecossistema tech
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Award
                  size={20}
                  className="text-[#FFB237] mt-0.5 flex-shrink-0"
                />
                <span className={textColor}>
                  Networking exclusivo com outros palestrantes
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Award
                  size={20}
                  className="text-[#FFB237] mt-0.5 flex-shrink-0"
                />
                <span className={textColor}>
                  Compartilhe sua experiência e inspire novos talentos
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Award
                  size={20}
                  className="text-[#FFB237] mt-0.5 flex-shrink-0"
                />
                <span className={textColor}>Certificado de palestrante</span>
              </li>
            </ul>

            {/* TODO: Substituir por Google Forms link amanhã */}
            <button
              disabled
              className="w-full bg-[#FFB237]/50 text-white font-semibold py-4 rounded-xl shadow-lg cursor-not-allowed transition-all duration-300 flex items-center justify-center gap-2"
              title="Call for Papers em breve"
            >
              Em Breve
            </button>
            <p className={`text-center text-sm mt-3 ${textColor}`}>
              Submissão de palestras abre em breve
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
