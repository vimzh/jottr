import React from "react";
import Heading from "./_components/Heading";
import HeroMockup from "./_components/HeroMockup";
import Footer from "./_components/Footer";
import Features from "./_components/Features";
import Content from "./_components/Content";
import HowItWorks from "./_components/HowItWorks";
import Testimonials from "./_components/Testimonials";
import CallToAction from "./_components/CallToAction";
import Newsbox from "./_components/Newsbox";

function MarketingPage() {
  return (
    <div className="min-h-screen flex flex-col text-[#2f3437]">
      {/* Hero Section - Two Column */}
      <div className="relative min-h-screen flex items-center px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl w-full flex flex-col lg:flex-row items-center lg:items-center gap-8 lg:gap-16">
          <div className="flex-1 min-w-0">
            <Heading />
          </div>
          <div className="flex-1 min-w-0 hidden lg:block">
            <HeroMockup />
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="relative">
        <Features />
        <Content />
      </div>

      {/* How It Works */}
      <HowItWorks />

      {/* Testimonials */}
      <Testimonials />

      {/* Final CTA */}
      <CallToAction />

      <div className="relative pb-4">
        <Footer />
      </div>

      <div className="fixed right-4 bottom-4 z-50">
        <Newsbox />
      </div>
    </div>
  );
}

export default MarketingPage;
