import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Schedule from "@/components/Schedule";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <Hero />

      <Schedule />

      <Footer />
    </div>
  );
}
