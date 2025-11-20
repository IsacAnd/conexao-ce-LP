"use client";

import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

interface BackToTopProps {
  isDark: boolean;
}

export default function BackToTop({isDark}: BackToTopProps) {
  const [visible, setVisible] = useState(false);

  const bgColor = isDark ? "bg-[#248DA0]" : "bg-[#248DA0]"

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 600);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Voltar ao topo"
      className={`cursor-pointer z-[1000]
        fixed bottom-6 right-6 p-3 rounded-full shadow-lg ${bgColor} transition-all duration-300 
        ${
          visible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-6 pointer-events-none"
        }
      `}
    >
      <ArrowUp size={22} />
    </button>
  );
}
