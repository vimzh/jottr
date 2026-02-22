import React from "react";
import { Lock, Zap, Globe, Shield, Lightbulb, Share2 } from "lucide-react";

const features = [
  {
    icon: Lock,
    title: "End-to-End Encrypted",
    desc: "Military-grade encryption keeps your thoughts safe. Only you can read them.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Zap,
    title: "Instant. No Lag.",
    desc: "Capture thoughts in milliseconds. Write like you think — fast, fluid, free.",
    color: "from-yellow-500 to-orange-500",
  },
  {
    icon: Share2,
    title: "Share Instantly",
    desc: "One click publishing. Share your ideas with the world whenever you're ready.",
    color: "from-purple-500 to-pink-500",
  },
];

function Features() {
  return (
    <section className="w-full py-24 md:py-32 bg-gradient-to-b from-white to-slate-50 border-t border-[#e8e8e4]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16 md:mb-20">
          <p className="text-xs tracking-widest uppercase text-blue-600 font-semibold mb-4">
            Why Choose Jottr
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#1a1a1a] mb-4">
            Everything you need to write better
          </h2>
          <p className="text-lg text-[#6b6b6b] max-w-2xl mx-auto">
            Designed for creators, thinkers, and anyone who wants to capture their best ideas.
          </p>
        </div>

        {/* Feature grid */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {features.map((f) => {
            const Icon = f.icon;
            return (
              <div
                key={f.title}
                className="group relative flex flex-col p-8 md:p-10 rounded-2xl border border-slate-200 bg-white transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-xl hover:border-slate-300 cursor-pointer overflow-hidden"
              >
                {/* Gradient accent */}
                <div className={`absolute top-0 right-0 w-32 h-32 opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-full bg-gradient-to-r ${f.color}`} />

                {/* Icon with gradient background */}
                <div className={`mb-6 p-4 w-fit rounded-xl bg-gradient-to-r ${f.color} text-white transition-all duration-300 group-hover:scale-110`}>
                  <Icon className="w-6 h-6 stroke-[1.5]" />
                </div>

                {/* Text */}
                <h3 className="font-serif text-xl font-bold text-[#1a1a1a] mb-3 relative z-10">
                  {f.title}
                </h3>
                <p className="text-sm text-[#6b6b6b] leading-relaxed relative z-10">
                  {f.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Features;
