"use client";

import { Mail } from "lucide-react";
import Reveal from "./Reveal";

interface RegistrationProps {
  isDark: boolean;
}

export default function Registration({ isDark }: RegistrationProps) {
  const bgColor = isDark ? "bg-[var(--neutral-dark)]" : "bg-neutral-50";
  const titleColor = isDark ? "text-white" : "text-black";
  const textColor = isDark ? "text-neutral-300" : "text-neutral-800";
  const placeholderColor = isDark
    ? "placeholder-neutral-300"
    : "placeholder-neutral-500";

  const inputBg = isDark ? "bg-white/10 border-white/20" : "bg-white border-black/20";
  const inputText = isDark ? "text-neutral-200" : "text-neutral-900";
  const mailIconColor = isDark ? "text-neutral-300" : "text-neutral-500";

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
        <h2 className={`text-5xl font-bold text-center mb-4 font-league-spartan ${titleColor}`}>
          Inscrição
        </h2>
      </Reveal>

      <Reveal delay={0.15}>
        <p className={`max-w-lg text-center mb-10 leading-relaxed ${textColor}`}>
          As vagas para o Conexão Ceará são limitadas. Inscreva-se agora e
          participe do maior encontro de tecnologia e inovação do estado.
        </p>
      </Reveal>

      <Reveal delay={0.25}>
        <form
          className={`w-full max-w-md flex flex-col gap-4 p-6 rounded-2xl shadow-xl backdrop-blur-md border ${
            isDark ? "border-white/10 bg-white/5" : "border-black/10 bg-white/60"
          }`}
        >
          {/* Nome */}
          <div className="flex flex-col gap-1">
            <label className={`text-sm ${textColor}`}>Seu nome *</label>
            <input
              type="text"
              className={`
                px-4 py-3 rounded-xl outline-none
                ${inputBg}
                ${inputText}
                ${placeholderColor}
                focus:ring-2 focus:ring-[#248DA0]
              `}
              placeholder="Digite seu nome"
              required
            />
          </div>

          {/* Email */}
          <div className="flex flex-col gap-1">
            <label className={`text-sm ${textColor}`}>E-mail *</label>
            <div className="relative">
              <Mail
                className={`w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 ${mailIconColor}`}
              />
              <input
                type="email"
                className={`
                  pl-11 pr-4 py-3 rounded-xl w-full outline-none
                  ${inputBg}
                  ${inputText}
                  ${placeholderColor}
                  focus:ring-2 focus:ring-[#248DA0]
                `}
                placeholder="seuemail@gmail.com"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className="mt-4 bg-[#248DA0] hover:bg-[#1f7e8f] text-white font-semibold py-3 rounded-xl shadow-lg shadow-cyan-500/20 transition"
          >
            Confirmar Inscrição
          </button>
        </form>
      </Reveal>
    </section>
  );
}
