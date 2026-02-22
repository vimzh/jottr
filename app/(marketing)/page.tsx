import React from "react";
import Heading from "./_components/Heading";
import Footer from "./_components/Footer";
import Features from "./_components/Features";
import Content from "./_components/Content";

function MarketingPage() {
  const testimonials = [
    {
      quote: "Jottr changed how I capture ideas. It's the fastest note-taking app I've used.",
      author: "Sarah Chen",
      role: "Product Designer",
    },
    {
      quote: "The encryption gives me peace of mind. My thoughts are truly mine.",
      author: "Marcus Rodriguez",
      role: "Developer",
    },
    {
      quote: "Simple, elegant, and actually useful. Everything I needed.",
      author: "Emma Wilson",
      role: "Writer",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#1a1a1a] relative">
      {/* Gradient background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-50 via-white to-purple-50"></div>

      {/* Hero */}
      <div className="flex flex-col items-center justify-center text-center flex-1 px-6 pt-32 md:pt-40 pb-20">
        <Heading />
      </div>

      {/* Features */}
      <Features />

      {/* Product Showcase */}
      <Content />

      {/* Testimonials Section */}
      <section className="w-full py-24 md:py-32 px-6 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs tracking-widest uppercase text-blue-600 font-semibold mb-4">
              Loved by users
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#1a1a1a]">
              What users are saying
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <div
                key={idx}
                className="p-8 rounded-2xl border border-slate-200 bg-white hover:shadow-lg transition-all duration-300"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400">★</span>
                  ))}
                </div>
                <p className="text-[#6b6b6b] leading-relaxed mb-6">"{testimonial.quote}"</p>
                <div>
                  <p className="font-semibold text-[#1a1a1a]">{testimonial.author}</p>
                  <p className="text-sm text-[#8a8a8a]">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="w-full py-32 md:py-40 px-6 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white">
            Ready to jot?
          </h2>
          <p className="text-lg text-blue-100 max-w-xl mx-auto leading-relaxed">
            Start capturing your ideas today. Free forever, no credit card needed.
          </p>
          <div className="pt-4">
            <button className="group rounded-full px-10 py-4 text-base font-semibold bg-white text-blue-600 hover:bg-blue-50 transition-all duration-200 shadow-lg hover:shadow-xl">
              Start Writing Now
              <span className="ml-2 transition-transform duration-200 group-hover:translate-x-1">→</span>
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default MarketingPage;
