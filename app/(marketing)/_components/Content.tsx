"use client";

import React from "react";
import Image from "next/image";

function Content() {
  return (
    <section className="w-full py-24 md:py-32 bg-white border-t border-[#e8e8e4]">
      <div className="max-w-6xl mx-auto px-6 flex flex-col items-center gap-8">
        {/* Section header */}
        <p className="text-xs tracking-widest uppercase text-[#8a8a8a] mb-0">
          Your Workspace
        </p>
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-[#1a1a1a] text-center max-w-3xl">
          Everything you need, nothing you don&apos;t
        </h2>
        <p className="text-lg text-[#6b6b6b] max-w-2xl text-center leading-relaxed">
          Rich editing, code blocks, images, tables — all integrated seamlessly
          into a clean, distraction-free workspace.
        </p>

        {/* Screenshot */}
        <div className="w-full max-w-5xl mt-4 rounded-2xl border border-[#e8e8e4] overflow-hidden shadow-[0_8px_40px_-12px_rgba(0,0,0,0.06)]">
          <Image
            src="/demo1.png"
            alt="Jottr Interface Demo"
            width={1200}
            height={600}
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
}

export default Content;
