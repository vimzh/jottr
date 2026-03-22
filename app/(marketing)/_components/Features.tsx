"use client";

import React from "react";
import { Lock, Zap, Globe, Sparkles, ArrowRight, Search } from "lucide-react";
import { motion } from "motion/react";

// ─── Empty decorative glass cell ─────────────────────────────────────

const EmptyCell = ({ className = "" }: { className?: string }) => (
  <div
    className={`rounded-[20px] hidden md:block ${className}`}
    style={{
      background: "rgba(255,255,255,0.45)",
      border: "1px solid rgba(0,0,0,0.04)",
    }}
  />
);

// ─── Feature card wrapper ────────────────────────────────────────────

const FeatureCard = ({
  icon: Icon,
  iconBg,
  iconColor,
  title,
  desc,
  children,
}: {
  icon: React.ElementType;
  iconBg: string;
  iconColor: string;
  title: string;
  desc: string;
  children: React.ReactNode;
}) => (
  <motion.div
    className="group flex flex-col h-full rounded-[20px] overflow-hidden transition-shadow duration-300"
    style={{
      background: "rgba(255,255,255,0.6)",
      border: "1px solid rgba(0,0,0,0.06)",
      boxShadow: "0 2px 16px rgba(0,0,0,0.04)",
    }}
    whileHover={{
      y: -4,
      transition: { duration: 0.2, ease: "easeOut" },
    }}
  >
    <div className="h-[280px] sm:h-[320px] w-full relative flex items-center justify-center p-6 overflow-hidden">
      {children}
    </div>
    <div className="px-7 pb-7 pt-2">
      <div className="flex items-center gap-2.5 mb-2">
        <div className={`flex items-center justify-center w-7 h-7 rounded-lg ${iconBg}`}>
          <Icon className={`w-3.5 h-3.5 ${iconColor}`} strokeWidth={2.5} />
        </div>
        <h3 className="text-[17px] font-bold text-stone-900 tracking-tight">{title}</h3>
      </div>
      <p className="text-[14.5px] leading-relaxed text-stone-500 font-medium">{desc}</p>
    </div>
  </motion.div>
);

// ─── Main Features Section ───────────────────────────────────────────

export default function Features() {
  return (
    <section className="w-full py-24 md:py-32 bg-stone-50 flex flex-col items-center overflow-hidden">
      <div className="w-full max-w-[1400px] px-6">
        <div className="features-grid-fade">
          <div className="grid grid-cols-1 md:grid-cols-6 gap-3 md:gap-4">
            {/* Row 1: 6 empty decorative cells */}
            <EmptyCell className="h-20" />
            <EmptyCell className="h-20" />
            <EmptyCell className="h-20" />
            <EmptyCell className="h-20" />
            <EmptyCell className="h-20" />
            <EmptyCell className="h-20" />

            {/* Row 2-3: empty | Feature | Feature | empty */}
            <EmptyCell className="row-span-2" />

            <div className="md:col-span-2 md:row-span-2">
              <FeatureCard
                icon={Lock}
                iconBg="bg-blue-100"
                iconColor="text-blue-600"
                title="End-to-End Encrypted"
                desc="Your notes are secured with military-grade encryption. Nobody can read them but you — not even us."
              >
                <EncryptionVisual />
              </FeatureCard>
            </div>

            <div className="md:col-span-2 md:row-span-2">
              <FeatureCard
                icon={Zap}
                iconBg="bg-orange-100"
                iconColor="text-orange-600"
                title="Blazingly Fast"
                desc="Capture thoughts in milliseconds. No lag, no loading screens. Just pure speed when inspiration strikes."
              >
                <SpeedVisual />
              </FeatureCard>
            </div>

            <EmptyCell className="row-span-2" />

            {/* Row 4-5: empty | Feature | Feature | empty */}
            <EmptyCell className="row-span-2" />

            <div className="md:col-span-2 md:row-span-2">
              <FeatureCard
                icon={Globe}
                iconBg="bg-emerald-100"
                iconColor="text-emerald-600"
                title="Publish Anywhere"
                desc="Share your notes with the world. One click to make your ideas publicly accessible to anyone."
              >
                <PublishVisual />
              </FeatureCard>
            </div>

            <div className="md:col-span-2 md:row-span-2">
              <FeatureCard
                icon={Sparkles}
                iconBg="bg-rose-100"
                iconColor="text-rose-600"
                title="AI Organization"
                desc="Instantly categorize and auto-tag your notes using on-device AI. Find what you need without thinking."
              >
                <AiVisual />
              </FeatureCard>
            </div>

            <EmptyCell className="row-span-2" />

            {/* Row 6: 6 empty decorative cells */}
            <EmptyCell className="h-20" />
            <EmptyCell className="h-20" />
            <EmptyCell className="h-20" />
            <EmptyCell className="h-20" />
            <EmptyCell className="h-20" />
            <EmptyCell className="h-20" />
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Visual Mockup Components ────────────────────────────────────────

function EncryptionVisual() {
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center gap-4">
      <div className="absolute inset-0 flex flex-col justify-center items-center gap-6 pointer-events-none select-none">
        <p className="text-[13px] text-stone-400/50 font-medium flex items-center gap-2">
          <Sparkles className="w-3.5 h-3.5" />
          Your data is encrypted end-to-end...
        </p>
        <p className="text-[13px] text-stone-400/40 font-medium ml-12 flex items-center gap-2">
          <Sparkles className="w-3.5 h-3.5" />
          256-bit AES encryption at rest...
        </p>
      </div>

      <div className="relative z-10 w-full max-w-[320px] bg-white rounded-2xl shadow-[0_2px_20px_rgba(0,0,0,0.06)] p-4 transform transition-transform duration-500 group-hover:-translate-y-1">
        <div className="flex items-center gap-2 mb-3">
          <Sparkles className="w-4 h-4 text-blue-500" />
          <span className="text-[13px] font-semibold text-stone-800">What was my password for the vault?</span>
        </div>
      </div>

      <p className="text-[13px] text-stone-400/50 font-medium flex items-center gap-2">
        <Sparkles className="w-3.5 h-3.5" />
        Track AI citations and measure brand visibility...
      </p>
      <p className="text-[13px] text-stone-400/35 font-medium flex items-center gap-2">
        <Sparkles className="w-3.5 h-3.5" />
        Customers reached payback in under six months...
      </p>
    </div>
  );
}

function SpeedVisual() {
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center">
      <div className="w-full max-w-[300px] bg-white rounded-2xl shadow-[0_2px_20px_rgba(0,0,0,0.06)] overflow-hidden transform transition-transform duration-500 group-hover:-translate-y-1">
        <div className="px-5 pt-4 pb-3 flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <span className="text-[14px] font-semibold text-stone-800">Performance</span>
            <span className="w-3.5 h-3.5 rounded-full bg-stone-200 flex items-center justify-center text-[8px] text-stone-500">i</span>
          </div>
          <span className="text-[12px] font-medium text-stone-400 bg-stone-100 px-2.5 py-1 rounded-md">Details</span>
        </div>

        <div className="px-5 pb-3">
          <div className="flex items-baseline gap-2">
            <span className="text-[28px] font-bold text-stone-900 tracking-tight leading-none">82%</span>
            <span className="text-[12px] font-semibold text-emerald-500">+2.1% vs last week</span>
          </div>
        </div>

        <div className="px-5 pb-4">
          <div className="border-t border-stone-100 pt-3">
            <div className="grid grid-cols-3 gap-2 text-[11px] font-medium text-stone-400 mb-2.5">
              <span>Channels</span>
              <span>Metric</span>
              <span>Total</span>
            </div>
            <div className="grid grid-cols-3 gap-2 text-[12.5px] items-center mb-2">
              <div className="flex items-center gap-1.5">
                <span className="w-4 h-4 rounded-full bg-stone-100 flex items-center justify-center">
                  <Search className="w-2.5 h-2.5 text-stone-500" />
                </span>
                <span className="font-medium text-stone-700">Speed</span>
              </div>
              <span className="text-stone-600 font-medium">0.4ms</span>
              <div className="flex items-center gap-1">
                <span className="text-emerald-500 text-[11px]">&#9650;</span>
                <span className="text-emerald-500 font-semibold text-[11px]">+5</span>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-2 text-[12.5px] items-center">
              <div className="flex items-center gap-1.5">
                <span className="w-4 h-4 rounded-full bg-stone-100 flex items-center justify-center">
                  <Zap className="w-2.5 h-2.5 text-stone-500" />
                </span>
                <span className="font-medium text-stone-700">Sync</span>
              </div>
              <span className="text-stone-600 font-medium">1.2s</span>
              <div className="flex items-center gap-1">
                <span className="text-rose-400 text-[11px]">&#9660;</span>
                <span className="text-rose-400 font-semibold text-[11px]">+3</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute top-6 right-4">
        <div className="flex items-center -space-x-2">
          <div className="w-7 h-7 rounded-full bg-orange-200 border-2 border-white/60 z-30" />
          <div className="w-7 h-7 rounded-full bg-blue-200 border-2 border-white/60 z-20" />
          <div className="w-7 h-7 rounded-full bg-emerald-200 border-2 border-white/60 z-10" />
          <span className="text-[11px] font-semibold text-stone-500 ml-3">99+</span>
        </div>
      </div>

      <div className="absolute bottom-8 right-2 bg-white rounded-xl shadow-[0_2px_16px_rgba(0,0,0,0.06)] px-4 py-3 transform rotate-1 transition-transform duration-500 group-hover:rotate-0">
        <div className="flex items-center gap-1.5 mb-1.5">
          <Search className="w-3.5 h-3.5 text-stone-500" />
          <span className="text-[12px] font-bold text-stone-800">Speed Rating</span>
        </div>
        <p className="text-[10px] text-stone-400 font-medium tracking-wide mb-1">TOTAL RATING</p>
        <div className="flex items-center gap-1">
          <span className="text-amber-400 text-[12px]">&#9733;</span>
          <span className="text-[13px] font-bold text-stone-800">4.8/5</span>
          <span className="text-[11px] text-stone-400">(Overall 4.9)</span>
        </div>
      </div>
    </div>
  );
}

function PublishVisual() {
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center gap-3">
      <div className="absolute top-6 left-4 right-4">
        <p className="text-[12px] text-stone-400/40 font-medium flex items-center gap-2">
          <Globe className="w-3.5 h-3.5" />
          Access and sync your files
        </p>
        <div className="absolute top-0 right-0 text-[12px] text-stone-400/40 font-medium">Connect</div>
      </div>

      <div className="relative w-full max-w-[300px] flex flex-col gap-2.5 mt-4">
        <div className="flex items-center justify-between bg-white rounded-xl px-4 py-3 shadow-[0_1px_8px_rgba(0,0,0,0.04)] transform transition-transform duration-500 group-hover:-translate-y-0.5">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center">
              <svg className="w-5 h-5 text-blue-500" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6 2l6 3.75L6 9.5 0 5.75zM18 2l6 3.75-6 3.75-6-3.75zM0 13.25L6 9.5l6 3.75L6 17zM18 9.5l6 3.75L18 17l-6-3.75zM6 18.25l6-3.75 6 3.75L12 22z" />
              </svg>
            </div>
            <div>
              <p className="text-[13px] font-semibold text-stone-800">Dropbox</p>
              <p className="text-[11px] text-stone-400 font-medium">Create and update pages</p>
            </div>
          </div>
          <span className="text-[12px] font-medium text-stone-400 bg-stone-50 border border-stone-200/60 px-3 py-1.5 rounded-lg">Connect</span>
        </div>

        <div className="flex items-center justify-between bg-white rounded-xl px-4 py-3 shadow-[0_2px_12px_rgba(0,0,0,0.06)] transform transition-transform duration-500 group-hover:-translate-y-1">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-stone-100 flex items-center justify-center">
              <span className="text-[16px] font-bold text-stone-800">N</span>
            </div>
            <div>
              <p className="text-[13px] font-semibold text-stone-800">Notion</p>
              <p className="text-[11px] text-stone-400 font-medium">Create and update pages</p>
            </div>
          </div>
          <span className="text-[12px] font-medium text-stone-500 bg-white border border-stone-200 px-3 py-1.5 rounded-lg shadow-sm">Connect</span>
        </div>

        <div className="flex items-center justify-between bg-white rounded-xl px-4 py-3 shadow-[0_2px_12px_rgba(0,0,0,0.06)] transform transition-transform duration-500 group-hover:-translate-y-0.5">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-purple-50 flex items-center justify-center">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                <path d="M14.5 2a2.5 2.5 0 0 0 0 5h2.5V4.5A2.5 2.5 0 0 0 14.5 2z" fill="#E01E5A" />
                <path d="M2 14.5a2.5 2.5 0 0 0 5 0V12H4.5A2.5 2.5 0 0 0 2 14.5z" fill="#36C5F0" />
                <path d="M9.5 2a2.5 2.5 0 0 0 0 5H12V4.5A2.5 2.5 0 0 0 9.5 2z" fill="#2EB67D" />
                <path d="M2 9.5a2.5 2.5 0 0 0 5 0V7H4.5A2.5 2.5 0 0 0 2 9.5z" fill="#ECB22E" />
              </svg>
            </div>
            <div>
              <p className="text-[13px] font-semibold text-stone-800">Slack</p>
              <p className="text-[11px] text-stone-400 font-medium">Send messages & notifications</p>
            </div>
          </div>
          <span className="text-[12px] font-semibold text-white bg-emerald-500 px-3 py-1.5 rounded-lg shadow-sm">Connected</span>
        </div>
      </div>
    </div>
  );
}

function AiVisual() {
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center">
      <div className="w-full max-w-[300px] bg-white rounded-2xl shadow-[0_2px_20px_rgba(0,0,0,0.06)] overflow-hidden transform transition-transform duration-500 group-hover:-translate-y-1">
        <div className="px-5 pt-4 pb-3">
          <p className="text-[13px] text-stone-400/60 font-medium mb-3">Of course. I&apos;m listening, how can I help you?</p>
          <div className="flex items-center gap-2 mb-4">
            <button className="w-6 h-6 rounded flex items-center justify-center text-stone-300 hover:text-stone-400">
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
              </svg>
            </button>
            <button className="w-6 h-6 rounded flex items-center justify-center text-stone-300 hover:text-stone-400">
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" />
              </svg>
            </button>
            <button className="w-6 h-6 rounded flex items-center justify-center text-stone-300 hover:text-stone-400">
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path d="M10 15V5a3 3 0 0 1 3 3l4 9v11H5.72a2 2 0 0 1-2-1.7l-1.38-9a2 2 0 0 1 2-2.3z" transform="rotate(180 12 12)" />
              </svg>
            </button>
          </div>

          <div className="flex items-center gap-3 bg-stone-50 rounded-xl px-4 py-3 mb-4">
            <div className="w-8 h-8 rounded-lg bg-stone-200/60 flex items-center justify-center">
              <svg className="w-4 h-4 text-stone-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48" />
              </svg>
            </div>
            <div>
              <p className="text-[12.5px] font-semibold text-stone-800">meeting-notes.pdf</p>
              <p className="text-[10.5px] text-stone-400 font-medium">PDF</p>
            </div>
          </div>
        </div>

        <div className="px-4 pb-4">
          <div className="flex items-center gap-2 px-4 py-3 bg-stone-50 rounded-xl border border-stone-200/60">
            <span className="text-[13px] text-stone-400 flex-1">How can I help you today?</span>
            <button className="w-6 h-6 rounded-full flex items-center justify-center text-stone-300">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <line x1="12" y1="5" x2="12" y2="19" />
                <line x1="5" y1="12" x2="19" y2="12" />
              </svg>
            </button>
            <button className="w-7 h-7 rounded-full bg-stone-900 flex items-center justify-center">
              <ArrowRight className="w-3.5 h-3.5 text-white" />
            </button>
          </div>
        </div>

        <div className="px-5 pb-3">
          <p className="text-[10px] text-stone-300 text-center font-medium">AI can make mistakes - please double-check</p>
        </div>
      </div>
    </div>
  );
}
