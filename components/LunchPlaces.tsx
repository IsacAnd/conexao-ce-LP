"use client";

import simbol from "@/public/simbol.png";
import { motion } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Clock,
  Instagram,
  MapPin,
  Phone,
  Star,
} from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import Reveal from "./Reveal";

interface RestaurantProps {
  isDark: boolean;
}

interface Restaurant {
  id: number;
  name: string;
  address: string;
  description: string;
  specialty: string;
  phone?: string;
  instagram?: string;
  hours?: string;
  lat: number;
  lng: number;
  rating?: number;
  imageUrl?: string;
  isPending?: boolean;
}

// Helper function para emojis por especialidade
const getSpecialtyEmoji = (specialty: string): string => {
  const emojiMap: Record<string, string> = {
    "Culinária Asiática": "🍜",
    "Carnes Especializadas": "🥩",
    "Self-Service": "🍽️",
    "Espetinhos & Bebidas": "🍢",
    "Culinária Sofisticada": "🍷",
    "Self-Service Econômico": "🍱",
    "Pousada & Restaurante": "🏨",
  };
  return emojiMap[specialty] || "🍴";
};

const restaurants: Restaurant[] = [
  {
    id: 1,
    name: "Tako Sushi Bar",
    address: "R. Oriano Mendes, 94 - Centro, Sobral - CE, 62010-370",
    specialty: "Culinária Asiática",
    description:
      "Buffet variado com culinária brasileira e oriental. Excelente custo benefício para almoço em ambiente climatizado.",
    phone: "(88) 99273-7552",
    instagram: "takosushiarco",
    hours: "11h às 15h e de 18h às 0h Presencial",
    lat: -3.6871209,
    lng: -40.3458969,
  },
  {
    id: 2,
    name: "Picanha & Cia",
    address: "Rua Randal Pompeu, 50 – Centro, Sobral, CE",
    specialty: "Carnes Especializadas",
    description:
      "Especializado em carnes de qualidade. Picanha, carne de sol e pratos completos com atendimento atencioso.",
    phone: "(88) 3613-1499",
    instagram: "picanhaeciasobral",
    hours: "10:30h às 00:30h",
    lat: -3.6923094,
    lng: -40.3478309,
  },
  {
    id: 3,
    name: "Restaurante Sesc Sobral",
    address: "Travessa Adriano Dias de Carvalho, 135 – Centro, Sobral, CE",
    specialty: "Self-Service",
    description:
      "Self-service com preço acessível. Cardápio variado e ambiente agradável. Ideal para almoço rápido e de qualidade.",
    phone: "(88) 3613-1709",
    instagram: "sescce",
    hours: "Seg-Sáb: 11h às 14h",
    lat: -3.6922574,
    lng: -40.3487365,
  },
  {
    id: 4,
    name: "Alecrim Bistrô",
    address: "Rua Dr. João do Monte, 990 – Centro, Sobral, CE",
    specialty: "Culinária Sofisticada",
    description:
      "Ambiente aconchegante com cardápio sofisticado. Ideal para um almoço tranquilo e de qualidade premium.",
    phone: "(88) 99687-0549",
    instagram: "alecrimbistrosobral",
    hours: "Ter-Sáb - 11h às 15h",
    lat: -3.6880575,
    lng: -40.3498679,
  },
  {
    id: 5,
    name: "Tempero Self Service",
    address: "Av. Dr. Guarany, 317 – Centro, Sobral, CE",
    specialty: "Self-Service Econômico",
    description:
      "Opção acessível e muito popular para almoço. Oferece refeições simples, bem servidas e com ótimo custo-benefício.",
    phone: "(88) 99922-0041",
    instagram: "tempero_selfservice",
    hours: "Sáb - 9:30h às 14:30h",
    lat: -3.6844837,
    lng: -40.3503072,
  },
  {
    id: 6,
    name: "Pousada e Restaurante Pontinho Verde",
    address: "R. Cel. Rangel, 160, Sobral, Ceara 62010-030",
    specialty: "Pousada & Restaurante",
    description:
      "Restaurante aconchegante com opções variadas para almoço. Ambiente familiar e boa localização.",
    phone: "(88) 997135165",
    instagram: "restaurantepontinhoverdesobral",
    hours: "10:30h às 11:30h",
    lat: -3.6883713,
    lng: -40.352464,
    // isPending: true,
  },
];

// Componente do Card (inline)
function RestaurantCard({
  restaurant,
  isDark,
}: {
  restaurant: Restaurant;
  isDark: boolean;
}) {
  const textStrong = isDark ? "text-[#ffffffcc]" : "text-neutral-800";
  const textSecondary = isDark ? "text-[#d0d0d0b3]" : "text-neutral-600";
  const textAccent = isDark ? "text-[#7FC7D0]" : "text-[#248DA0]";

  return (
    <motion.div
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className={`relative rounded-xl overflow-hidden shadow-lg transition-shadow duration-300 h-[650px] flex flex-col ${
        isDark ? "bg-[rgba(255,255,255,0.08)]" : "bg-white"
      } hover:shadow-2xl hover:z-10`}
    >
      {/* Image Section */}
      <div className="relative h-48 w-full bg-gradient-to-br from-[#248DA0] to-[#1a6d7d] flex-shrink-0">
        {restaurant.imageUrl ? (
          <Image
            src={restaurant.imageUrl}
            alt={restaurant.name}
            fill
            className="object-cover"
          />
        ) : (
          <div className="flex items-center justify-center h-full text-6xl">
            {getSpecialtyEmoji(restaurant.specialty)}
          </div>
        )}

        {/* Rating Badge (se disponível) */}
        {restaurant.rating && (
          <div className="absolute top-3 right-3 bg-white/95 backdrop-blur px-3 py-1.5 rounded-full flex items-center gap-1">
            <Star className="fill-yellow-400 text-yellow-400" size={16} />
            <span className="font-semibold text-sm">{restaurant.rating}</span>
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className="flex flex-col flex-1 min-h-0">
        <div className="p-6 space-y-3 flex-1 overflow-y-auto">
          {/* Name */}
          <h3
            className={`text-2xl font-bold font-league-spartan ${textStrong}`}
          >
            {restaurant.name}
          </h3>

          {/* Specialty Badge */}
          <div
            className={`inline-flex px-3 py-1 rounded-full text-sm font-semibold ${
              isDark
                ? "bg-[#FFB237]/20 text-[#FFB237]"
                : "bg-[#248DA0]/10 text-[#248DA0]"
            }`}
          >
            {restaurant.specialty}
          </div>

          {/* Description */}
          <p className={`text-sm leading-relaxed ${textSecondary}`}>
            {restaurant.description}
          </p>

          {/* Info List */}
          <div className="space-y-2">
            <div className="flex items-start gap-2 text-sm">
              <MapPin size={16} className="mt-0.5 flex-shrink-0" />
              <span className={textSecondary}>{restaurant.address}</span>
            </div>

            {restaurant.hours && (
              <div className="flex items-center gap-2 text-sm">
                <Clock size={16} />
                <span className={textSecondary}>{restaurant.hours}</span>
              </div>
            )}

            {restaurant.phone && (
              <a
                href={`tel:${restaurant.phone}`}
                className={`flex items-center gap-2 text-sm ${textAccent} hover:underline`}
              >
                <Phone size={16} />
                <span>{restaurant.phone}</span>
              </a>
            )}

            {restaurant.instagram && (
              <a
                href={`https://instagram.com/${restaurant.instagram}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-2 text-sm ${textAccent} hover:underline`}
              >
                <Instagram size={16} />
                <span>@{restaurant.instagram}</span>
              </a>
            )}
          </div>

          {/* Pending Warning */}
          {restaurant.isPending && (
            <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-3 text-xs">
              <span className="text-yellow-600 dark:text-yellow-400">
                ⚠️ Informações em confirmação
              </span>
            </div>
          )}
        </div>

        {/* CTA Buttons */}
        <div className="flex gap-3 p-6 pt-0 flex-shrink-0">
          <a
            href={`https://www.google.com/maps/search/${encodeURIComponent(
              restaurant.name
            )}+${encodeURIComponent(restaurant.address)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 py-2.5 px-4 bg-[#248DA0] hover:bg-[#1f7e8f] text-white rounded-lg font-semibold text-center transition-colors"
          >
            Ver no Maps
          </a>
          {restaurant.phone && (
            <a
              href={`tel:${restaurant.phone}`}
              className={`py-2.5 px-4 rounded-lg font-semibold transition-colors flex items-center justify-center ${
                isDark
                  ? "bg-white/10 hover:bg-white/20 text-white"
                  : "bg-neutral-100 hover:bg-neutral-200 text-neutral-900"
              }`}
            >
              <Phone size={20} />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function LunchRecommendations({ isDark }: RestaurantProps) {
  const [scrollContainerElement, setScrollContainerElement] =
    useState<HTMLDivElement | null>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  useEffect(() => {
    if (!scrollContainerElement) return;

    const checkScroll = () => {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerElement;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(Math.ceil(scrollLeft) < scrollWidth - clientWidth);
    };

    checkScroll();
    scrollContainerElement.addEventListener("scroll", checkScroll);
    window.addEventListener("resize", checkScroll);

    return () => {
      scrollContainerElement.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, [scrollContainerElement]);

  const bgColor = isDark ? "bg-[var(--neutral-dark)]" : "bg-white";
  const textSecondary = isDark ? "text-[#d0d0d0b3]" : "text-neutral-600";

  const handlePrev = () => {
    if (scrollContainerElement) {
      const containerWidth = scrollContainerElement.clientWidth;
      const newScrollLeft = Math.max(
        0,
        scrollContainerElement.scrollLeft - containerWidth
      );
      scrollContainerElement.scrollTo({
        left: newScrollLeft,
        behavior: "smooth",
      });
    }
  };

  const handleNext = () => {
    if (scrollContainerElement) {
      const containerWidth = scrollContainerElement.clientWidth;
      const maxScrollLeft = scrollContainerElement.scrollWidth - containerWidth;
      const newScrollLeft = Math.min(
        maxScrollLeft,
        scrollContainerElement.scrollLeft + containerWidth
      );
      scrollContainerElement.scrollTo({
        left: newScrollLeft,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="lunch"
      className={`relative flex justify-center items-center min-h-screen ${bgColor} px-6 transition-colors duration-300 py-20`}
    >
      {/* Background Symbol */}
      <div className="absolute right-10 top-1/3 opacity-10 w-[500px] h-[500px] z-0">
        <Image
          src={simbol}
          alt="Logo do evento"
          fill
          className="object-contain"
        />
      </div>

      <div className="relative text-center z-10 w-full max-w-7xl">
        {/* Title */}
        <Reveal>
          <h2
            className={`text-5xl font-bold mb-2 font-league-spartan ${
              isDark ? "text-white" : "text-neutral-900"
            }`}
          >
            Locais Recomendados para Almoço
          </h2>
        </Reveal>

        {/* Subtitle */}
        <Reveal>
          <p className={`text-center mb-12 ${textSecondary} text-lg`}>
            Confira as melhores opções de restaurantes no centro de Sobral, a
            poucos passos do evento
          </p>
        </Reveal>

        {/* Carousel Container */}
        <div className="relative px-6 md:px-12 lg:px-20 overflow-hidden">
          {/* Navigation Buttons */}
          {canScrollLeft && (
            <button
              onClick={handlePrev}
              className={`absolute left-0 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full transition-all duration-300 cursor-pointer ${
                isDark
                  ? "bg-[#248DA0] hover:bg-[#1f7e8f] text-white"
                  : "bg-white hover:bg-[#248DA0] text-[#248DA0] hover:text-white shadow-lg"
              }`}
              aria-label="Anterior"
            >
              <ChevronLeft size={24} />
            </button>
          )}

          {canScrollRight && (
            <button
              onClick={handleNext}
              className={`absolute right-0 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full transition-all duration-300 cursor-pointer ${
                isDark
                  ? "bg-[#248DA0] hover:bg-[#1f7e8f] text-white"
                  : "bg-white hover:bg-[#248DA0] text-[#248DA0] hover:text-white shadow-lg"
              }`}
              aria-label="Próximo"
            >
              <ChevronRight size={24} />
            </button>
          )}

          {/* Scroll Horizontal Container */}
          <div
            ref={setScrollContainerElement}
            className="flex gap-6 overflow-x-auto scroll-smooth scrollbar-hide py-12 select-none -mt-10"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              scrollSnapType: "x proximity",
            }}
            onMouseDown={(e) => {
              const container = e.currentTarget;
              const startX = e.pageX - container.offsetLeft;
              const scrollLeft = container.scrollLeft;
              let isDragging = false;

              const handleMouseMove = (e: MouseEvent) => {
                isDragging = true;
                e.preventDefault();
                const x = e.pageX - container.offsetLeft;
                const walk = (x - startX) * 2;
                container.scrollLeft = scrollLeft - walk;
              };

              const handleMouseUp = () => {
                document.removeEventListener("mousemove", handleMouseMove);
                document.removeEventListener("mouseup", handleMouseUp);

                // Prevent click events if we were dragging
                if (isDragging) {
                  setTimeout(() => {
                    isDragging = false;
                  }, 10);
                }
              };

              document.addEventListener("mousemove", handleMouseMove);
              document.addEventListener("mouseup", handleMouseUp);
            }}
          >
            {restaurants.map((restaurant) => (
              <div
                key={restaurant.id}
                className="restaurant-card flex-none w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
                style={{ scrollSnapAlign: "start" }}
              >
                <RestaurantCard restaurant={restaurant} isDark={isDark} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
