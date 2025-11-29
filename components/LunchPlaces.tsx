"use client";
import Image from "next/image";
import { useState } from "react";
import simbol from "@/public/simbol.png";
import Reveal from "./Reveal";
import { MapPin, Clock, Phone, Instagram } from "lucide-react";

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
}

const restaurants: Restaurant[] = [
  {
    id: 1,
    name: "Tako",
    address: "R. Dr. João do Monte, 814 – Centro, Sobral, CE",
    specialty: "Culinária Asiática",
    description:
      "Buffet variado com culinária brasileira e oriental. Excelente custo benefício para almoço em ambiente climatizado.",
    phone: "(88) 3614-1234",
    instagram: "takosobral",
    hours: "11h às 14h30",
    lat: -3.6878,
    lng: -40.3516,
  },
  {
    id: 2,
    name: "Picanha & Cia",
    address: "Rua Randal Pompeu, 50 – Centro, Sobral, CE",
    specialty: "Carnes Especializadas",
    description:
      "Especializado em carnes de qualidade. Picanha, carne de sol e pratos completos com atendimento atencioso.",
    phone: "(88) 3613-1499",
    instagram: "picanhaecia",
    hours: "11h às 15h",
    lat: -3.6884,
    lng: -40.351,
  },
  {
    id: 3,
    name: "Restaurante Sesc Sobral",
    address: "Travessa Adriano Dias de Carvalho, 135 – Centro, Sobral, CE",
    specialty: "Self-Service",
    description:
      "Self-service com preço acessível. Cardápio variado e ambiente agradável. Ideal para almoço rápido e de qualidade.",
    hours: "Seg-Sex: 11h às 14h",
    lat: -3.6892,
    lng: -40.3508,
  },
  {
    id: 4,
    name: "Bolero Blues Rango Bar",
    address: "R. Dr. João do Monte, 920 – Centro, Sobral, CE",
    specialty: "Espetinhos & Bebidas",
    description:
      "Ambiente descontraído com excelente variedade de espetos e bebidas. Ótima opção para almoço em grupo.",
    phone: "(88) 3614-5678",
    hours: "11h às 23h",
    lat: -3.688,
    lng: -40.3515,
  },
  {
    id: 5,
    name: "Alecrim Bistrô",
    address: "Rua Dr. João do Monte, 990 – Centro, Sobral, CE",
    specialty: "Culinária Sofisticada",
    description:
      "Ambiente aconchegante com cardápio sofisticado. Ideal para um almoço tranquilo e de qualidade premium.",
    hours: "11h às 15h",
    lat: -3.6875,
    lng: -40.352,
  },
  {
    id: 6,
    name: "Tempero Self Service",
    address: "Av. Dr. Guarany, 317 – Centro, Sobral, CE",
    specialty: "Self-Service Econômico",
    description:
      "Opção acessível e muito popular para almoço. Oferece refeições simples, bem servidas e com ótimo custo-benefício.",
    hours: "11h às 14h",
    lat: -3.68694,
    lng: -40.34753
  }
];

export default function LunchRecommendations({ isDark }: RestaurantProps) {
  const [selectedRestaurant, setSelectedRestaurant] = useState<number | null>(
    1
  );

  const bgColor = isDark ? "bg-[var(--neutral-dark)]" : "bg-white";
  const cardBg = isDark
    ? "bg-[rgba(255,255,255,0.08)]"
    : "bg-[rgba(0,0,0,0.05)]";
  const cardBorder = isDark
    ? "border-[rgba(255,255,255,0.12)]"
    : "border-[rgba(0,0,0,0.08)]";
  const textPrimary = isDark ? "text-[#e8e8e8]" : "text-neutral-900";
  const textSecondary = isDark ? "text-[#d0d0d0b3]" : "text-neutral-600";
  const textAccent = isDark ? "text-[#f5d76e]" : "text-violet-600";
  const textStrong = isDark ? "text-[#ffffffcc]" : "text-neutral-800";
  const hoverBg = isDark
    ? "hover:bg-[rgba(255,255,255,0.12)]"
    : "hover:bg-[rgba(0,0,0,0.08)]";

  const selectedRestaurantData = restaurants.find(
    (r) => r.id === selectedRestaurant
  );

  const generateMapUrl = (lat: number, lng: number, name: string) => {
    const zoom = 16;
    return `https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3920.697859517001!2d${lng}!3d${lat}!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s${encodeURIComponent(
      name
    )}!5e0!3m2!1spt-BR!2sbr!4v1700000000000`;
  };

  return (
    <section
      id="lunch"
      className={`relative flex justify-center items-center min-h-screen ${bgColor} overflow-hidden px-6 transition-colors duration-300 py-20`}
    >
      <div className="absolute right-10 top-1/3 opacity-10 w-[500px] h-[500px] z-0">
        <Image
          src={simbol}
          alt="Logo do evento"
          fill
          className="object-contain"
        />
      </div>

      <div className="relative text-center z-10 w-full max-w-6xl">
        <Reveal>
          <h2
            className={`text-5xl font-bold mb-2 font-league-spartan ${isDark ? "text-white" : "text-neutral-900"
              }`}
          >
            Locais Recomendados para Almoço
          </h2>
        </Reveal>
        <Reveal>
          <p className={`text-center mb-12 ${textSecondary} text-lg`}>
            Confira as melhores opções de restaurantes no centro de Sobral, a
            poucos passos do evento
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="flex flex-col gap-4">
            {restaurants.map((restaurant) => (
              <button
                key={restaurant.id}
                onClick={() => setSelectedRestaurant(restaurant.id)}
                className={`p-6 rounded-xl border transition-all duration-300 text-left ${selectedRestaurant === restaurant.id
                  ? `${cardBg} border-[${textAccent}] shadow-lg ring-2 ring-violet-600`
                  : `${cardBg} ${cardBorder} ${hoverBg}`
                  } ${cardBorder}`}
              >
                <h3 className={`text-xl font-bold mb-2 ${textStrong}`}>
                  {restaurant.name}
                </h3>
                <p className={`text-sm mb-3 ${textAccent} font-semibold`}>
                  {restaurant.specialty}
                </p>
                <div
                  className={`flex items-start gap-2 text-sm text-left  ${textSecondary}`}
                >
                  <MapPin size={16} className="flex-shrink-0 mt-0.5" />
                  <span>{restaurant.address}</span>
                </div>
              </button>
            ))}
          </div>

          <div>
            {selectedRestaurantData ? (
              <div
                className={`${cardBg} border ${cardBorder} rounded-xl overflow-hidden shadow-xl transition-all duration-300`}
              >
                <a
                  href={`https://www.google.com/maps/search/${encodeURIComponent(
                    selectedRestaurantData.name
                  )}+${encodeURIComponent(selectedRestaurantData.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-64 w-full bg-gradient-to-br from-violet-600 to-violet-800 flex items-center justify-center hover:from-violet-700 hover:to-violet-900 transition-all cursor-pointer"
                >
                  <div className="text-center text-white">
                    <div className="text-7xl mb-3">📍</div>
                    <p className="text-xl font-semibold mb-2">
                      Abrir no Google Maps
                    </p>
                    <p className="text-sm opacity-90">
                      Clique para ver mapa, rotas e avaliações
                    </p>
                  </div>
                </a>

                <div className="p-6">
                  <h3 className={`text-2xl font-bold mb-4 ${textPrimary}`}>
                    {selectedRestaurantData.name}
                  </h3>

                  <p className={`mb-6 leading-relaxed ${textSecondary}`}>
                    {selectedRestaurantData.description}
                  </p>

                  <div className="space-y-4">
                    <div className={`flex items-start gap-3 ${textSecondary}`}>
                      <MapPin size={18} className="flex-shrink-0 mt-0.5" />
                      <div className="flex flex-col">
                        <span className="font-semibold text-sm">
                          {selectedRestaurantData.name}
                        </span>
                        <span>{selectedRestaurantData.address}</span>
                      </div>
                    </div>

                    {selectedRestaurantData.hours && (
                      <div
                        className={`flex items-center gap-3 ${textSecondary}`}
                      >
                        <Clock size={18} className="flex-shrink-0" />
                        <span>{selectedRestaurantData.hours}</span>
                      </div>
                    )}

                    {selectedRestaurantData.phone && (
                      <a
                        href={`tel:${selectedRestaurantData.phone}`}
                        className={`flex items-center gap-3 ${textAccent} hover:underline transition-all`}
                      >
                        <Phone size={18} />
                        <span>{selectedRestaurantData.phone}</span>
                      </a>
                    )}

                    {selectedRestaurantData.instagram && (
                      <a
                        href={`https://instagram.com/${selectedRestaurantData.instagram}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center gap-3 ${textAccent} hover:underline transition-all`}
                      >
                        <Instagram size={18} />
                        <span>@{selectedRestaurantData.instagram}</span>
                      </a>
                    )}
                  </div>

                  <a
                    href={`https://www.google.com/maps/search/${encodeURIComponent(
                      selectedRestaurantData.name
                    )}+${encodeURIComponent(selectedRestaurantData.address)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`mt-6 block w-full py-3 px-4 rounded-lg font-semibold text-center transition-all ${isDark
                      ? "bg-violet-600 hover:bg-violet-700 text-white"
                      : "bg-violet-600 hover:bg-violet-700 text-white"
                      }`}
                  >
                    Ver Localização Completa
                  </a>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
