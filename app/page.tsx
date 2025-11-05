import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow mt-30 px-6">
        <h1 className="text-3xl font-outfit mb-4">Esta é a League Spartan</h1>
        <h1 className="text-3xl font-league-spartan">Esta é a Outfit</h1>
      </main>
      
      <Footer />
    </div>
  );
}
