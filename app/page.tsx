"use client";

import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Schedule from "@/components/Schedule";
import Location from "@/components/Location";
import Speakers from "@/components/Speakers";
import BackToTop from "@/components/BackToTop";

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
        <Schedule isDark={isDark} />
        <Location isDark={isDark} />
        <Speakers isDark={isDark} />
        <Footer isDark={isDark} />
      </div>
      <BackToTop isDark={isDark} />
    </>
  );
}
