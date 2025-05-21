"use client";
import React from "react";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import FeatureSection from "./FeatureSection";
import TrustSection from "./TrustSection";
import AdviserSection from "./AdviserSection";
import ExpertiseSection from "./ExpertiseSection";
import CallToActionSection from "./CallToActionSection";
import Footer from "./Footer";

function HomePage() {
  return (
    <main className="pb-[1250px] max-md:pb-24">
      <section className="overflow-hidden w-full max-md:max-w-full">
        <div className="overflow-hidden relative w-full max-md:max-w-full">
          <Navbar />
          <HeroSection />
          <img
            src="https://cdn.builder.io/api/v1/image/assets/988ce8d5213645ae9869bacfcb0efcc5/ceb43bb2f1809fc074ba25bbb342d21da409ec36?placeholderIfAbsent=true"
            className="object-contain absolute right-0 z-0 aspect-[3.42] bottom-[1046px] h-[420px] w-[1440px] max-md:max-w-full"
            alt="Decorative element"
          />
          <FeatureSection />
          <TrustSection />
          <AdviserSection />
          <ExpertiseSection />
          <CallToActionSection />
          <Footer />
        </div>
      </section>
    </main>
  );
}

export default HomePage;
