"use client";

import BackToTop from "@/components/BackToTop";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Location from "@/components/Location";
import LunchPlaces from "@/components/LunchPlaces";
import Registration from "@/components/Registration";
import { useEffect, useState } from "react";

export default function Home() {
  const [isDark, setIsDark] = useState<boolean>(true);
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem("theme") || "dark";
    setIsDark(savedTheme === "dark");

    // Listener para mudanças de tema
    const handleStorageChange = (): void => {
      const newTheme = localStorage.getItem("theme") || "dark";
      setIsDark(newTheme === "dark");
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  const toggleTheme = (): void => {
    const newTheme = isDark ? "light" : "dark";
    setIsDark(!isDark);
    localStorage.setItem("theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    window.dispatchEvent(new Event("storage"));
  };

  if (!mounted) {
    return (
      <div className="flex flex-col min-h-screen bg-[var(--neutral-dark)]" />
    );
  }

  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Header isDark={isDark} toggleTheme={toggleTheme} />
        <Hero isDark={isDark} />
        {/* TODO: Implementar página de programação após fechar grade */}
        {/* <Schedule isDark={isDark} /> */}
        <Registration isDark={isDark} />
        <Location isDark={isDark} />
        {/* TODO: Implementar página de palestrantes após fechar grade */}
        {/* <Speakers isDark={isDark} /> */}
        <LunchPlaces isDark={isDark} />
        <Footer isDark={isDark} />
      </div>
      <BackToTop isDark={isDark} />
    </>
  );
}
