import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Schedule from "@/components/Schedule";
import Location from "@/components/Location";
import Speakers from "@/components/Speakers";
import BackToTop from "@/components/BackToTop";

export default function Home() {
  return (
    <>
    <div className="flex flex-col min-h-screen">
      <Header />

      <Hero />

      <Schedule />

      <Location />

      <Speakers />

      <Footer />

    </div>
    <BackToTop />
    </>
  );
}
