"use client";

import { Calendar, MapPin, Users } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center text-center min-h-screen w-full overflow-hidden bg-[#248DA0] text-white px-4">
      {/* --- BACKGROUND GRADIENTS (GLOWS) --- */}
      <div className="absolute inset-0">
        {/* glow central */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-cyan-300/20 rounded-full blur-[180px]" />
        {/* glow lateral */}
        <div className="absolute bottom-0 right-[-200px] w-[600px] h-[600px] bg-teal-400/25 rounded-full blur-[200px]" />
        {/* fundo gradiente geral */}
        <div className="absolute inset-0 bg-linear-to-b from-[#248DA0] via-[#1E7B8D] to-[#155E6C]" />
      </div>

      <div className="relative z-10 max-w-3xl">
        <div className="inline-block bg-white/10 text-cyan-200 text-sm px-4 py-1 rounded-full mb-4 border border-cyan-400/30 backdrop-blur-sm">
          Dezembro 13, 2025
        </div>

        <h1 className="text-5xl sm:text-6xl font-extrabold text-[#FFB237] mb-4 drop-shadow-[0_0_25px_rgba(56,189,248,0.4)]">
          Conexão Ceará
        </h1>

        <p className="text-cyan-50/90 text-lg leading-relaxed mb-8">
          O encontro definitivo para desenvolvedores, inovadores e entusiastas
          da tecnologia. Um dia inteiro de palestras, mentorias e oportunidades
          únicas de networking.
        </p>

        <div className="flex flex-wrap justify-center gap-6 text-cyan-100/90 text-sm mb-10">
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

        <div className="flex flex-wrap justify-center gap-4">
          <button className="bg-white text-[#155E6C] font-semibold hover:bg-cyan-100 px-6 py-3 rounded-full shadow-lg shadow-cyan-500/30 transition">
            Inscreva-se
          </button>
          <button className="border border-white/60 text-white hover:bg-white/10 rounded-full px-6 py-3 transition">
            Ver programação
          </button>
        </div>
      </div>

      <div className="absolute bottom-10 flex justify-center">
        <div className="w-5 h-8 border-2 border-cyan-200 rounded-full flex justify-center">
          <div className="w-1 h-2 bg-cyan-100 rounded-full mt-1 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
}
