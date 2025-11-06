import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Schedule from "@/components/Schedule";
import Location from "@/components/Location";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <Hero />

      <Schedule />

      <Location />

      <Footer />
    </div>
  );
}
