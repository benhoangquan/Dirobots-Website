import React from "react";
import { useTranslations } from "next-intl";

const HeroSection: React.FC = () => {
  const t = useTranslations("hero");

  return (
    <div className="bg-cream py-20 md:py-32 relative overflow-hidden min-h-[70vh] flex items-center">
      {/* Simple gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-50 via-transparent to-blue-50 opacity-50"></div>

      <div className="container mx-auto px-6 md:px-8 max-w-4xl relative z-10 text-center">
        {/* Main heading */}
        <h1 className="text-seth-coral mb-4">
          <span className="block text-2xl md:text-3xl font-light mb-2 opacity-80">
            {t("greeting")}
          </span>
          <span className="block text-5xl md:text-7xl font-bold">
            {t("location")}
          </span>
        </h1>

        {/* Simple tagline */}
        <p className="text-xl md:text-2xl text-seth-coral/70 mt-8 max-w-2xl mx-auto">
          Build robots. Learn programming. Compete together.
        </p>

        {/* Simple CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
          <a
            href="https://discord.gg/2Ttnw8p2Hy"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-seth-coral text-white px-8 py-3 rounded-full font-medium hover:bg-seth-coral/90 transition-colors"
          >
            Join Our Discord
          </a>
          <a
            href="#events"
            className="border-2 border-seth-coral text-seth-coral px-8 py-3 rounded-full font-medium hover:bg-seth-coral hover:text-white transition-colors"
          >
            See Events
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
