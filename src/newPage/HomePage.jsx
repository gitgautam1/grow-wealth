"use client";
import React from "react";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import FeatureSection from "./FeatureSection";
import TrustSection from "./TrustSection";
import AdviserSection from "./AdviserSection";
import ExpertiseSection from "./ExpertiseSection";
import CallToActionSection from "./CallToActionSection";

function HomePage() {
  return (
    <main className="">
      <section className="overflow-hidden w-full max-md:max-w-full">
        <div className="overflow-hidden relative w-full max-md:max-w-full">
          <Navbar />
          <HeroSection />
          <FeatureSection />
          <TrustSection />
          <AdviserSection />
          <ExpertiseSection />
          <CallToActionSection />
        </div>
      </section>
    </main>
  );
}

export default HomePage;
