"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Twitter, Linkedin, Github } from "lucide-react";
import Reveal from "./Reveal";

interface HeroProps {
  isDark: boolean;
}

export default function Speakers({ isDark }: HeroProps) {
  const speakers = [
    {
      name: "Sarah Chen",
      role: "Principal Engineer at Google",
      expertise: "AI & Machine Learning",
      image: "/speaker1.jpg",
    },
    {
      name: "Marcus Johnson",
      role: "CTO at TechFlow",
      expertise: "Cloud Architecture",
      image: "/speaker2.jpg",
    },
    {
      name: "Elena Rodriguez",
      role: "Lead Developer at Stripe",
      expertise: "Web3 & Blockchain",
      image: "/speaker3.jpg",
    },
    {
      name: "Alex Kim",
      role: "Senior Engineer at Meta",
      expertise: "Mobile Development",
      image: "/speaker4.jpg",
    },
  ];

  const bgColor = isDark ? "bg-[#292929]" : "bg-neutral-50";
  const cardBg = isDark ? "bg-[#1a1a1a]" : "bg-white";
  const textPrimary = isDark ? "text-white" : "text-neutral-900";
  const textSecondary = isDark ? "text-[#248DA0]" : "text-violet-600";
  const textRole = isDark ? "text-[#FFB237]" : "text-amber-600";
  const textExpertise = isDark ? "text-[#7FC7D0]" : "text-cyan-600";
  const socialColor = isDark
    ? "text-[#248DA0] hover:text-[#FFB237]"
    : "text-violet-600 hover:text-amber-600";
  const gradientFrom = isDark ? "from-[#248DA0]" : "from-violet-500";
  const gradientTo = isDark ? "to-[#03738C]" : "to-cyan-500";
  const shadowColor = isDark
    ? "shadow-lg hover:shadow-2xl"
    : "shadow-md hover:shadow-lg";

  return (
    <section
      id="speakers"
      className={`scroll-mt-15 ${bgColor} py-20 px-4 transition-colors duration-300`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <Reveal>
          <div className="text-center mb-16">
            <h2 className={`text-5xl font-bold ${textPrimary} mb-4`}>
              Palestrantes
            </h2>
            <p className={`${textSecondary} text-xl`}>
              Aprenda com as melhores mentes da tecnologia.
            </p>
          </div>
        </Reveal>

        {/* Speaker Cards Grid */}
        <Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {speakers.map((speaker, index) => (
              <div
                key={index}
                className={`${cardBg} rounded-2xl overflow-hidden ${shadowColor} transition-all duration-300 hover:-translate-y-2`}
              >
                {/* Image Container */}
                <div
                  className={`relative h-64 bg-gradient-to-br ${gradientFrom} ${gradientTo}`}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div
                      className={`w-40 h-40 rounded-full ${
                        isDark ? "bg-gray-300" : "bg-gray-200"
                      }`}
                    ></div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className={`${textPrimary} text-2xl font-bold mb-2`}>
                    {speaker.name}
                  </h3>
                  <p className={`${textRole} text-lg font-medium mb-2`}>
                    {speaker.role}
                  </p>
                  <p className={`${textExpertise} text-sm mb-6`}>
                    {speaker.expertise}
                  </p>

                  {/* Social Links */}
                  <div className="flex gap-4">
                    <a
                      href="#"
                      className={`${socialColor} transition-colors`}
                      aria-label="Twitter"
                    >
                      <Twitter size={20} />
                    </a>
                    <a
                      href="#"
                      className={`${socialColor} transition-colors`}
                      aria-label="LinkedIn"
                    >
                      <Linkedin size={20} />
                    </a>
                    <a
                      href="#"
                      className={`${socialColor} transition-colors`}
                      aria-label="GitHub"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
