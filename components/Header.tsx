"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/public/logo.png";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-[var(--neutral-dark)]/80 text-[var(--neutral-light)] shadow-sm backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center">
          <Image
            src={logo}
            alt="Logo Conexão Ceará"
            width={120} 
            height={40}
            className="h-auto w-auto object-contain"
            priority
          />

        <nav className="hidden md:flex space-x-8 font-outfit">
          <Link href="#sobre" className="hover:text-[var(--secondary-accent)] transition">Sobre</Link>
          <Link href="#programacao" className="hover:text-[var(--secondary-accent)] transition">Programação</Link>
          <Link href="#location" className="hover:text-[var(--secondary-accent)] transition">Localização</Link>
          <Link href="#speakers" className="hover:text-[var(--secondary-accent)] transition">Palestrantes</Link>
          <Link href="https://www.instagram.com/portalconexaoceara/" className="hover:text-[var(--secondary-accent)] transition">MídiaKit</Link>
        </nav>

        <button
          className="md:hidden p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menu"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {menuOpen && (
        <nav className="md:hidden bg-[var(--neutral-dark)] border-t border-[var(--neutral-light)]/10">
          <ul className="flex flex-col items-center space-y-4 py-6 font-outfit">
            <li><Link href="#sobre" onClick={() => setMenuOpen(false)}>Sobre</Link></li>
            <li><Link href="#programacao" onClick={() => setMenuOpen(false)}>Programação</Link></li>
            <li><Link href="#location" onClick={() => setMenuOpen(false)}>Localização</Link></li>
            <li><Link href="#speakers" onClick={() => setMenuOpen(false)}>Palestrantes</Link></li>
          </ul>
        </nav>
      )}
    </header>
  );
}
