import React from "react";
import Heading from "./_components/Heading";
import Footer from "./_components/Footer";
import Features from "./_components/Features";
import Content from "./_components/Content";

function MarketingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAF8] text-[#1a1a1a] relative">
      {/* Hero */}
      <div className="flex flex-col items-center justify-center text-center flex-1 px-6 pt-32 md:pt-40 pb-20">
        <Heading />
      </div>

      {/* Features */}
      <Features />

      {/* Product Showcase */}
      <Content />

      {/* Final CTA */}
      <section className="w-full py-24 md:py-32 px-6">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-[#1a1a1a]">
            Start writing, freely.
          </h2>
          <p className="text-lg text-[#6b6b6b] max-w-xl mx-auto leading-relaxed">
            No setup. No friction. Just open jottr and let your thoughts flow.
          </p>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default MarketingPage;
