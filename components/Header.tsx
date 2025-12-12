"use client";

import logo from "@/public/logo.png";
import { Menu, Moon, Sun, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

interface HeaderProps {
  isDark: boolean;
  toggleTheme: () => void;
}

export default function Header({ isDark, toggleTheme }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`w-full fixed top-0 left-0 z-50 shadow-sm backdrop-blur-sm transition-colors duration-300 ${isDark
          ? "bg-[var(--neutral-dark)]/80 text-[var(--neutral-light)]"
          : "bg-white/80 text-[var(--neutral-dark)]"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center">
        <Image
          src={logo}
          alt="Logo Conexão Ceará"
          width={120}
          height={40}
          className="h-auto w-auto object-contain"
          priority
        />

        <nav className="hidden md:flex space-x-8 font-outfit items-center">
          <button
            onClick={() => scrollToSection("about")}
            className={`cursor-pointer transition ${isDark
                ? "hover:text-[var(--secondary-accent)]"
                : "hover:text-violet-600"
              }`}
          >
            Sobre
          </button>


          <button
            onClick={() => scrollToSection("schedule")}
            className={`cursor-pointer transition ${isDark
                ? "hover:text-[var(--secondary-accent)]"
                : "hover:text-violet-600"
              }`}
          >
            Programação
          </button>

          {/* <button
            onClick={() => scrollToSection("speakers")}
            className={`cursor-pointer transition ${
              isDark
                ? "hover:text-[var(--secondary-accent)]"
                : "hover:text-violet-600"
            }`}
          >
            Palestrantes
          </button> */}

          <button
            onClick={() => scrollToSection("registration")}
            className={`cursor-pointer transition ${isDark
                ? "hover:text-[var(--secondary-accent)]"
                : "hover:text-violet-600"
              }`}
          >
            Inscrição
          </button>

          <button
            onClick={() => scrollToSection("location")}
            className={`cursor-pointer transition ${isDark
                ? "hover:text-[var(--secondary-accent)]"
                : "hover:text-violet-600"
              }`}
          >
            Localização
          </button>

          <a
            href="https://conexaoceara.com.br/midia-kit-2025.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={`transition ${isDark
                ? "hover:text-[var(--secondary-accent)]"
                : "hover:text-violet-600"
              }`}
          >
            MídiaKit
          </a>

          {/* Botão de alternância de tema */}
          <button
            onClick={toggleTheme}
            aria-label={isDark ? "Ativar light mode" : "Ativar dark mode"}
            className={`p-2 rounded-lg transition ${isDark
                ? "bg-[var(--neutral-light)]/10 hover:bg-[var(--neutral-light)]/20"
                : "bg-[var(--neutral-dark)]/10 hover:bg-[var(--neutral-dark)]/20"
              }`}
          >
            {isDark ? (
              <Sun size={20} className="text-yellow-400" />
            ) : (
              <Moon size={20} className="text-indigo-600" />
            )}
          </button>
        </nav>

        <div className="flex items-center gap-4 md:hidden">
          <button
            onClick={toggleTheme}
            aria-label={isDark ? "Ativar light mode" : "Ativar dark mode"}
            className={`p-2 rounded-lg transition ${isDark
                ? "bg-[var(--neutral-light)]/10 hover:bg-[var(--neutral-light)]/20"
                : "bg-[var(--neutral-dark)]/10 hover:bg-[var(--neutral-dark)]/20"
              }`}
          >
            {isDark ? (
              <Sun size={20} className="text-yellow-400" />
            ) : (
              <Moon size={20} className="text-indigo-600" />
            )}
          </button>

          <button
            className="p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Abrir menu"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav
          className={`md:hidden border-t transition-colors duration-300 ${isDark
              ? "bg-[var(--neutral-dark)] border-[var(--neutral-light)]/10"
              : "bg-white border-[var(--neutral-dark)]/10"
            }`}
        >
          <ul className="flex flex-col items-center space-y-4 py-6 font-outfit">
            <li>
              <button
                onClick={() => {
                  scrollToSection("sobre");
                  setMenuOpen(false);
                }}
              >
                Sobre
              </button>
            </li>

            {/* <li>
              <button
                onClick={() => {
                  scrollToSection("programacao");
                  setMenuOpen(false);
                }}
              >
                Programação
              </button>
            </li> */}

            {/* <li>
              <button
                onClick={() => {
                  scrollToSection("speakers");
                  setMenuOpen(false);
                }}
              >
                Palestrantes
              </button>
            </li> */}

            <li>
              <button
                onClick={() => {
                  scrollToSection("registration");
                  setMenuOpen(false);
                }}
              >
                Inscrição
              </button>
            </li>

            <li>
              <button
                onClick={() => {
                  scrollToSection("location");
                  setMenuOpen(false);
                }}
              >
                Localização
              </button>
            </li>
            <li>
              <a
                href="https://conexaoceara.com.br/midia-kit-2025.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMenuOpen(false)}
              >
                MídiaKit
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
