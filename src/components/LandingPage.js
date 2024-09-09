import React from "react";
import Header from "./LandingPageComponents/Header";
import Footer from "./LandingPageComponents/Footer";
import BannerSection from "./LandingPageComponents/BannerSection";
import OurClientSection from "./LandingPageComponents/OurClientSection";
import ManageYourEntireCommunitySection from "./LandingPageComponents/ManageYourEntireCommunitySection";
import TheUnseenOfSpendingSection from "./LandingPageComponents/TheUnseenOfSpendingSection";
import HelpingALocalSection from "./LandingPageComponents/HelpingALocalSection";
import HowToDesignSection from "./LandingPageComponents/HowToDesignSection";
import TimSmithSection from "./LandingPageComponents/TimSmithSection";
import CaringIsTheSection from "./LandingPageComponents/CaringIsTheSection";
import PellentesqueSuscipitSection from "./LandingPageComponents/PellentesqueSuscipitSection";

const LandingPage = () => {
  return (
    <div>
      <Header />
      <BannerSection />
      <OurClientSection />
      <ManageYourEntireCommunitySection />
      <TheUnseenOfSpendingSection />
      <HelpingALocalSection />
      <HowToDesignSection />
      <TimSmithSection />
      <CaringIsTheSection />
      <PellentesqueSuscipitSection />
      <Footer />
    </div>
  );
};

export default LandingPage;
