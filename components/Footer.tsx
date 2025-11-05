import Image from "next/image";
import Link from "next/link";
import simbol from "@/public/simbol.png";

export default function Footer() {
  return (
    <footer className="w-full bg-[var(--neutral-dark)] text-[var(--neutral-light)] py-8 mt-20 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Esquerda: logo + texto */}
        <div className="flex items-center gap-3">
          <Image
            src={simbol}
            alt="Símbolo Conexão Ceará"
            width={28}
            height={28}
            className="h-auto w-auto object-contain"
          />
          <p className="font-outfit text-sm">
            © {new Date().getFullYear()} Conexão Ceará. Todos os direitos reservados.
          </p>
        </div>

        {/* Direita: links */}
        <div className="flex gap-6 text-sm font-outfit">
          <Link
            href="#privacidade"
            className="hover:text-[var(--primary-accent)] transition-colors"
          >
            Política de Privacidade
          </Link>
          <Link
            href="#termos"
            className="hover:text-[var(--primary-accent)] transition-colors"
          >
            Termos de Uso
          </Link>
        </div>
      </div>
    </footer>
  );
}
