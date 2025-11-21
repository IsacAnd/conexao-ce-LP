"use client";

import { Mail } from "lucide-react";
import Reveal from "./Reveal";

interface RegistrationProps {
  isDark: boolean;
}

export default function Registration({ isDark }: RegistrationProps) {
  const bgColor = isDark ? "bg-[var(--neutral-dark)]" : "bg-neutral-50";
  const titleColor = isDark ? "text-white" : "text-neutral-900";
  const textColor = isDark ? "text-neutral-300" : "text-neutral-600";

  return (
    <section
      id="registration"
      className={`scroll-mt-15 relative w-full h-screen py-24 px-6 flex flex-col items-center overflow-hidden ${bgColor} transition-colors duration-300`}
    >

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
          className="w-full max-w-md flex flex-col gap-4 p-6 rounded-2xl shadow-xl backdrop-blur-md border border-white/10 bg-white/5"
        >
          <div className="flex flex-col gap-1">
            <label className={`text-sm ${textColor}`}>Seu nome *</label>
            <input
              type="text"
              className={`px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/40 focus:ring-2 focus:ring-[#248DA0] outline-none`}
              placeholder="Digite seu nome"
              required
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className={`text-sm ${textColor}`}>E-mail *</label>
            <div className="relative">
              <Mail className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-white/40" />
              <input
                type="email"
                className={`pl-11 pr-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/40 focus:ring-2 focus:ring-[#248DA0] outline-none w-full`}
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
