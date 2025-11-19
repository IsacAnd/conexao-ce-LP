"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import simbol from "@/public/simbol.png";

interface HeroProps {
  isDark: boolean;
}

export default function Footer({ isDark }: HeroProps) {
  const bgColor = isDark ? "bg-[var(--neutral-dark)]" : "bg-neutral-100";
  const textColor = isDark ? "text-[var(--neutral-light)]" : "text-neutral-900";
  const borderColor = isDark ? "border-white/10" : "border-black/10";
  const linkHover = isDark
    ? "hover:text-[var(--primary-accent)]"
    : "hover:text-violet-600";

  return (
    <footer
      className={`w-full h-max ${bgColor} ${textColor} py-8 border-t ${borderColor} transition-colors duration-300`}
    >
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-3">
          <Image
            src={simbol}
            alt="Símbolo Conexão Ceará"
            width={28}
            height={28}
            className="h-auto w-auto object-contain"
          />
          <p className="font-outfit text-sm">
            © {new Date().getFullYear()} Conexão Ceará. Todos os direitos
            reservados.
          </p>
        </div>
        <div className="flex gap-6 text-sm font-outfit">
          <Link
            href="#privacidade"
            className={`${linkHover} transition-colors`}
          >
            Política de Privacidade
          </Link>
          <Link href="#termos" className={`${linkHover} transition-colors`}>
            Termos de Uso
          </Link>
        </div>
      </div>
    </footer>
  );
}
