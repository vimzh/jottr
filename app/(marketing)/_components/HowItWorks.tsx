"use client";

import { motion, type Variants } from "motion/react";
import { PenLine, Layers, Share2, type LucideIcon } from "lucide-react";

interface Step {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

const steps: Step[] = [
  {
    number: "01",
    title: "Capture",
    description:
      "Jot down thoughts instantly. No friction, no setup. Just open and write.",
    icon: PenLine,
  },
  {
    number: "02",
    title: "Organize",
    description:
      "AI auto-tags and categorizes. Your notes find themselves.",
    icon: Layers,
  },
  {
    number: "03",
    title: "Share",
    description:
      "Publish with one click. Keep private what's private, share what matters.",
    icon: Share2,
  },
];

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1],
    },
  }),
};

export default function HowItWorks() {
  return (
    <section className="bg-stone-50 py-24 md:py-32 px-6">
      <div className="max-w-[1100px] mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center mb-16 md:mb-20"
        >
          <p className="text-sm uppercase tracking-[0.2em] text-stone-400 font-figtree mb-4">
            How it works
          </p>
          <h2 className="font-figtree font-light text-3xl md:text-4xl lg:text-5xl text-stone-900 tracking-tight">
            Three steps to clarity
          </h2>
        </motion.div>

        {/* Steps grid */}
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
          {/* Connecting line — desktop only */}
          <div
            className="hidden md:block absolute top-[72px] left-[16.67%] right-[16.67%] h-px"
            aria-hidden="true"
          >
            <div className="w-full h-full border-t-2 border-dashed border-stone-200" />
          </div>

          {steps.map((step, i) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={step.number}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                className="relative flex flex-col items-center text-center rounded-2xl bg-[rgba(255,255,255,0.6)] border border-stone-200/60 px-8 py-10 backdrop-blur-sm"
              >
                {/* Large decorative number */}
                <span className="font-figtree font-light text-7xl md:text-8xl leading-none text-stone-200 select-none">
                  {step.number}
                </span>

                {/* Icon */}
                <div className="mt-5 mb-4 flex items-center justify-center w-11 h-11 rounded-full bg-stone-100">
                  <Icon className="w-5 h-5 text-stone-500" strokeWidth={1.5} />
                </div>

                {/* Title */}
                <h3 className="font-figtree font-semibold text-lg text-stone-900 mb-2">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="font-figtree text-sm leading-relaxed text-stone-500 max-w-[260px]">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
