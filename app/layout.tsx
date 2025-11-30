import type { Metadata } from "next";
import { League_Spartan, Outfit } from "next/font/google";
import "./globals.css";

const leagueSpartan = League_Spartan({
  variable: "--font-league-spartan",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Conexão Ceará 2025 | Evento de Tecnologia em Sobral",
  description:
    "Conexão Ceará une talentos, fortalece o ecossistema tech regional e conecta o presente ao futuro da inovação. Evento de tecnologia em 13 de dezembro de 2025 em Sobral, CE, networking e palestras.",
  keywords: [
    "evento tecnologia ceará",
    "conferência tech sobral",
    "desenvolvedores nordeste",
    "inovação ceará",
    "networking tech brasil",
    "conexão ceará",
    "evento tech 2025",
    "tecnologia sobral",
    "ecossistema tech ceará",
  ],
  authors: [{ name: "Conexão Ceará" }],
  creator: "Conexão Ceará",
  publisher: "Conexão Ceará",
  metadataBase: new URL("https://conexaoceara.com.br"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://conexaoceara.com.br",
    siteName: "Conexão Ceará",
    title: "Conexão Ceará 2025 | Evento de Tecnologia em Sobral",
    description:
      "Conexão Ceará une talentos e fortalece o ecossistema tech regional. Evento em 13 de dezembro de 2025 em Sobral, CE, networking e inovação.",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Conexão Ceará - O movimento da conexão fluida entre pessoas e ideias, representado pela onda, sol e elementos cearenses",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Conexão Ceará 2025 | Evento de Tecnologia em Sobral",
    description:
      "Conexão Ceará une talentos e fortalece o ecossistema tech regional. 13 de dezembro em Sobral, CE.",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/simbol.png", sizes: "32x32", type: "image/png" },
      { url: "/simbol.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/logo.png", sizes: "180x180", type: "image/png" }],
  },
  other: {
    "theme-color": "#248DA0",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const eventJsonLd = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: "Conexão Ceará 2025",
    description:
      "O Conexão Ceará nasce da vontade de unir talentos, fortalecer o ecossistema tecnológico regional e conectar o presente ao futuro da inovação no Ceará. Mais que um evento, somos uma ponte entre talentos em formação e o mercado de tecnologia.",
    startDate: "2025-12-13T09:00:00-03:00",
    endDate: "2025-12-13T18:00:00-03:00",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    eventStatus: "https://schema.org/EventScheduled",
    location: {
      "@type": "Place",
      name: "Cadeia Criativa",
      address: {
        "@type": "PostalAddress",
        streetAddress: "R. Des. Moreira da Rocha, 1030",
        addressLocality: "Sobral",
        addressRegion: "CE",
        postalCode: "62010-140",
        addressCountry: "BR",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: -3.6897,
        longitude: -40.3492,
      },
    },
    image: ["https://conexaoceara.com.br/logo.png"],
    organizer: {
      "@type": "Organization",
      name: "Conexão Ceará",
      url: "https://conexaoceara.com.br",
    },
    offers: {
      "@type": "Offer",
      url: "https://conexaoceara.com.br#registro",
      price: "0",
      priceCurrency: "BRL",
      availability: "https://schema.org/InStock",
      validFrom: "2025-11-01T00:00:00-03:00",
    },
    performer: [
      {
        "@type": "Person",
        name: "Sarah Chen",
        jobTitle: "Principal Engineer at Google",
        description: "AI & Machine Learning",
      },
      {
        "@type": "Person",
        name: "Marcus Johnson",
        jobTitle: "CTO at TechFlow",
        description: "Cloud Architecture",
      },
      {
        "@type": "Person",
        name: "Elena Rodriguez",
        jobTitle: "Lead Developer at Stripe",
        description: "Web3 & Blockchain",
      },
      {
        "@type": "Person",
        name: "Alex Kim",
        jobTitle: "Senior Engineer at Meta",
        description: "Mobile Development",
      },
    ],
    audience: {
      "@type": "Audience",
      audienceType: "Desenvolvedores, inovadores e entusiastas de tecnologia",
      expectedAttendance: 2000,
    },
  };

  return (
    <html lang="pt-BR">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(eventJsonLd) }}
        />
      </head>
      <body
        className={`${leagueSpartan.variable} ${outfit.variable} antialiased bg-[var(--background)] text-[var(--foreground)]`}
      >
        {children}
      </body>
    </html>
  );
}
