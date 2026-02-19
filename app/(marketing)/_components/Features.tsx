import React from "react";
import { Lock, Zap, Globe } from "lucide-react";

const features = [
  {
    icon: Lock,
    title: "End-to-End Encrypted",
    desc: "Your notes are secured with military-grade encryption. Nobody can read them but you — not even us.",
  },
  {
    icon: Zap,
    title: "Blazingly Fast",
    desc: "Capture thoughts in milliseconds. No lag, no loading screens. Just pure speed when inspiration strikes.",
  },
  {
    icon: Globe,
    title: "Publish Anywhere",
    desc: "Share your notes with the world. One click to make your ideas publicly accessible to anyone.",
  },
];

function Features() {
  return (
    <section className="w-full py-24 md:py-32 border-t border-[#e8e8e4]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16 md:mb-20">
          <p className="text-xs tracking-widest uppercase text-[#8a8a8a] mb-4">
            Why Jottr
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-[#1a1a1a]">
            Built for how you think
          </h2>
        </div>

        {/* Feature grid */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {features.map((f) => {
            const Icon = f.icon;
            return (
              <div
                key={f.title}
                className="group relative flex flex-col p-8 md:p-10 rounded-2xl border border-[#e8e8e4] bg-white transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_8px_30px_-12px_rgba(0,0,0,0.08)] hover:border-[#d0d0cc] cursor-pointer"
              >
                {/* Icon */}
                <div className="mb-6 p-3 w-fit rounded-xl bg-[#f5f5f2] group-hover:bg-[#eeeee8] transition-colors duration-300">
                  <Icon className="w-5 h-5 text-[#6b6b6b] stroke-[1.5] group-hover:text-[#1a1a1a] transition-colors duration-300" />
                </div>

                {/* Text */}
                <h3 className="font-serif text-xl font-semibold text-[#1a1a1a] mb-3">
                  {f.title}
                </h3>
                <p className="text-sm text-[#8a8a8a] leading-relaxed">
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
