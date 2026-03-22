"use client";

import { motion } from "motion/react";

const testimonials = [
  {
    quote:
      "Jottr replaced three apps for me. Notes, drafts, and publishing — all in one place.",
    name: "Sarah Chen",
    role: "Technical Writer",
    initials: "SC",
    color: "bg-rose-100 text-rose-700",
  },
  {
    quote:
      "The encryption gives me peace of mind. I keep everything here — journal entries, passwords, ideas.",
    name: "Marcus Webb",
    role: "Software Engineer",
    initials: "MW",
    color: "bg-amber-100 text-amber-700",
  },
  {
    quote:
      "I've never found anything this fast. It keeps up with my brain, which is saying something.",
    name: "Priya Sharma",
    role: "Graduate Student",
    initials: "PS",
    color: "bg-sky-100 text-sky-700",
  },
];

function Testimonials() {
  return (
    <section className="w-full bg-white py-24 px-6">
      <div className="max-w-[1200px] mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="font-figtree text-3xl sm:text-4xl font-light tracking-tight text-stone-900 text-center mb-16"
        >
          Loved by writers & creators
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.5,
                delay: i * 0.12,
                ease: "easeOut",
              }}
              className="rounded-[20px] p-7 sm:p-8"
              style={{
                background: "rgba(255,255,255,0.6)",
                border: "1px solid rgba(0,0,0,0.06)",
                boxShadow:
                  "0 1px 3px rgba(0,0,0,0.04), 0 4px 12px rgba(0,0,0,0.02)",
              }}
            >
              <p className="font-figtree text-base leading-relaxed text-stone-700 mb-6">
                &ldquo;{t.quote}&rdquo;
              </p>

              <div className="flex items-center gap-3">
                <div
                  className={`w-9 h-9 rounded-full flex items-center justify-center text-xs font-medium ${t.color}`}
                >
                  {t.initials}
                </div>
                <div>
                  <p className="font-figtree text-sm font-medium text-stone-900 leading-tight">
                    {t.name}
                  </p>
                  <p className="font-figtree text-sm text-stone-400 leading-tight">
                    {t.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
