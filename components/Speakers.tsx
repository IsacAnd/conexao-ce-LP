import Image from "next/image";
import { Twitter, Linkedin, Github } from "lucide-react";

export default function Speakers() {
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

  return (
    <section className="bg-[#292929] py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-4">Palestrantes</h2>
          <p className="text-[#248DA0] text-xl">
            Aprenda com as melhores mentes da tecnologia.
          </p>
        </div>

        {/* Speaker Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {speakers.map((speaker, index) => (
            <div
              key={index}
              className="bg-[#1a1a1a] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Image Container */}
              <div className="relative h-64 bg-gradient-to-br from-[#248DA0] to-[#03738C]">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-40 h-40 bg-gray-300 rounded-full"></div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-white text-2xl font-bold mb-2">
                  {speaker.name}
                </h3>
                <p className="text-[#FFB237] text-lg font-medium mb-2">
                  {speaker.role}
                </p>
                <p className="text-[#7FC7D0] text-sm mb-6">
                  {speaker.expertise}
                </p>

                {/* Social Links */}
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="text-[#248DA0] hover:text-[#FFB237] transition-colors"
                    aria-label="Twitter"
                  >
                    <Twitter size={20} />
                  </a>
                  <a
                    href="#"
                    className="text-[#248DA0] hover:text-[#FFB237] transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a
                    href="#"
                    className="text-[#248DA0] hover:text-[#FFB237] transition-colors"
                    aria-label="GitHub"
                  >
                    <Github size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
