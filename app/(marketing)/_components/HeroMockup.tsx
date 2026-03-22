"use client";

import { motion } from "motion/react";

const SlackIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
    <path d="M14.5 2a2.5 2.5 0 0 0 0 5h2.5V4.5A2.5 2.5 0 0 0 14.5 2z" fill="#E01E5A" />
    <path d="M2 14.5a2.5 2.5 0 0 0 5 0V12H4.5A2.5 2.5 0 0 0 2 14.5z" fill="#36C5F0" />
    <path d="M9.5 2a2.5 2.5 0 0 0 0 5H12V4.5A2.5 2.5 0 0 0 9.5 2z" fill="#2EB67D" />
    <path d="M2 9.5a2.5 2.5 0 0 0 5 0V7H4.5A2.5 2.5 0 0 0 2 9.5z" fill="#ECB22E" />
    <path d="M9.5 22a2.5 2.5 0 0 0 0-5H7v2.5A2.5 2.5 0 0 0 9.5 22z" fill="#E01E5A" />
    <path d="M22 9.5a2.5 2.5 0 0 0-5 0V12h2.5A2.5 2.5 0 0 0 22 9.5z" fill="#36C5F0" />
    <path d="M14.5 22a2.5 2.5 0 0 0 0-5H12v2.5a2.5 2.5 0 0 0 2.5 2.5z" fill="#2EB67D" />
    <path d="M22 14.5a2.5 2.5 0 0 0-5 0V17h2.5a2.5 2.5 0 0 0 2.5-2.5z" fill="#ECB22E" />
  </svg>
);

const SparkleIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 16 16" fill="currentColor">
    <path d="M8 0l1.5 5.5L15 8l-5.5 1.5L8 15l-1.5-5.5L1 8l5.5-1.5L8 0z" />
  </svg>
);

const HeroMockup = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
      className="relative w-full h-[540px] select-none pointer-events-none"
    >
      {/* Subtle grid background */}
      <div className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,0,0,0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.3) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Main Chat Card */}
      <motion.div
        initial={{ opacity: 0, y: 20, rotate: -1 }}
        animate={{ opacity: 1, y: 0, rotate: -1 }}
        transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" }}
        className="absolute top-6 left-4 w-[320px] bg-white rounded-2xl shadow-[0_8px_40px_rgba(0,0,0,0.08),0_1px_3px_rgba(0,0,0,0.06)] border border-stone-200/60 overflow-hidden z-20"
      >
        {/* Header */}
        <div className="px-5 pt-4 pb-3 flex items-center gap-2">
          <SparkleIcon className="w-4 h-4 text-stone-800" />
          <span className="text-[15px] font-semibold text-stone-900 tracking-tight">New chat</span>
          <svg className="w-3.5 h-3.5 text-stone-400 ml-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>

        {/* Timestamp */}
        <div className="text-center">
          <span className="text-[11px] text-stone-400 font-medium">Today 3:37 PM</span>
        </div>

        {/* User Message */}
        <div className="px-5 pt-3 flex justify-end">
          <div className="bg-stone-100 rounded-2xl rounded-br-md px-4 py-2.5 max-w-[220px]">
            <p className="text-[13px] text-stone-700 leading-snug">What are my deadlines this week?</p>
          </div>
        </div>

        {/* AI Response */}
        <div className="px-5 pt-4 pb-3">
          <p className="text-[13px] text-stone-800 leading-relaxed font-medium mb-2">
            This week, you have the following deadlines:
          </p>
          <div className="flex items-start gap-2 ml-1 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-stone-400 mt-1.5 shrink-0" />
            <span className="text-[13px] text-stone-700 leading-snug">
              Submit campaign assets by Friday
              <span className="inline-flex items-center gap-1 ml-1.5 bg-purple-50 border border-purple-100 text-purple-600 rounded px-1.5 py-0.5 text-[10px] font-semibold align-middle">
                <SlackIcon />
                1
              </span>
            </span>
          </div>

          {/* Sources */}
          <p className="text-[11px] text-emerald-600 font-medium mb-2.5 tracking-wide">10 sources found</p>
          <div className="space-y-2.5">
            <div className="flex items-center gap-2.5">
              <SlackIcon />
              <span className="text-[12.5px] text-stone-700">Thread in #q3-planning</span>
            </div>
            <div className="flex items-center gap-2.5">
              <span className="w-4 h-4 rounded-full bg-amber-400 flex items-center justify-center">
                <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.75.75 0 0 1 1.06-1.06L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0z" />
                </svg>
              </span>
              <span className="text-[12.5px] text-stone-700">Projects & Tasks</span>
            </div>
            <div className="flex items-center gap-2.5">
              <span className="text-[14px]">☕</span>
              <span className="text-[12.5px] text-stone-700">Stand-up @Today</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-2 mt-4 pt-3 border-t border-stone-100">
            <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-stone-200 text-[12px] text-stone-600 font-medium bg-white hover:bg-stone-50 transition-colors">
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
              </svg>
              Copy
            </button>
            <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-stone-200 text-[12px] text-stone-600 font-medium bg-white hover:bg-stone-50 transition-colors">
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <circle cx="11" cy="11" r="8" />
                <path d="M21 21l-4.35-4.35" />
              </svg>
              Find in
              <svg className="w-2.5 h-2.5 text-stone-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <button className="flex items-center justify-center w-7 h-7 rounded-lg border border-stone-200 text-stone-500 bg-white hover:bg-stone-50 transition-colors">
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path d="M1 4v6h6" />
                <path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10" />
              </svg>
            </button>
          </div>
        </div>

        {/* Input Bar */}
        <div className="px-4 pb-4">
          <div className="flex items-center gap-2 px-4 py-2.5 bg-stone-50 rounded-xl border border-stone-200/80">
            <span className="text-[13px] text-stone-400">Ask AI anything...</span>
          </div>
        </div>
      </motion.div>

      {/* Analytics Badge */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.8, ease: "easeOut" }}
        className="absolute top-[72px] left-0 z-30"
      >
        <div className="flex items-center gap-2 bg-white rounded-xl px-4 py-2.5 shadow-[0_4px_20px_rgba(0,0,0,0.06),0_1px_3px_rgba(0,0,0,0.04)] border border-stone-200/50">
          <span className="text-[15px]">📊</span>
          <span className="text-[14px] font-semibold text-stone-900 tracking-tight">Analytics</span>
        </div>
      </motion.div>

      {/* Meetings Badge */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.9, ease: "easeOut" }}
        className="absolute top-[230px] right-2 z-30"
      >
        <div className="flex items-center gap-2 bg-white rounded-xl px-4 py-2.5 shadow-[0_4px_20px_rgba(0,0,0,0.06),0_1px_3px_rgba(0,0,0,0.04)] border border-stone-200/50">
          <span className="text-[15px]">📅</span>
          <span className="text-[14px] font-semibold text-stone-900 tracking-tight">Meetings</span>
        </div>
      </motion.div>

      {/* Traction & GTM Card */}
      <motion.div
        initial={{ opacity: 0, y: 20, rotate: 2 }}
        animate={{ opacity: 1, y: 0, rotate: 2 }}
        transition={{ duration: 0.7, delay: 0.7, ease: "easeOut" }}
        className="absolute bottom-4 right-0 w-[280px] bg-white rounded-2xl shadow-[0_8px_40px_rgba(0,0,0,0.08),0_1px_3px_rgba(0,0,0,0.06)] border border-stone-200/60 overflow-hidden z-10"
      >
        <div className="px-5 pt-5 pb-2">
          <h3 className="text-[17px] font-bold text-stone-900 tracking-tight mb-4">Traction & GTM</h3>

          <div className="mb-3">
            <div className="flex items-center gap-1.5 mb-2.5">
              <span className="text-[14px]">🚀</span>
              <span className="text-[13.5px] font-semibold text-stone-800">Platform metrics</span>
            </div>
            <div className="space-y-1.5 ml-1">
              <div className="flex items-center gap-2">
                <span className="text-stone-400 text-[11px]">&#9654;</span>
                <span className="text-[12.5px] text-stone-600">Direct downloads: 1k, 10% MoM</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-stone-400 text-[11px]">&#9654;</span>
                <span className="text-[12.5px] text-stone-600">Total downloads: 2k, 10% MoM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Toolbar */}
        <div className="px-4 pb-2">
          <div className="flex items-center gap-1 px-3 py-2 bg-stone-50 rounded-lg border border-stone-200/80">
            <SparkleIcon className="w-3 h-3 text-stone-700" />
            <span className="text-[12px] font-semibold text-stone-700 ml-0.5">Ask AI</span>
            <span className="w-px h-3.5 bg-stone-200 mx-1.5" />
            <span className="text-[12px] text-stone-400">Text</span>
            <svg className="w-2.5 h-2.5 text-stone-400 ml-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
            <div className="flex items-center gap-1 ml-auto">
              <span className="w-5 h-5 rounded flex items-center justify-center text-stone-400 hover:text-stone-600">
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                  <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                </svg>
              </span>
              <span className="w-5 h-5 rounded flex items-center justify-center text-stone-400 hover:text-stone-600">
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
              </span>
              <span className="w-5 h-5 rounded flex items-center justify-center text-stone-400 hover:text-stone-600">
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path d="M12 20h9" />
                  <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
                </svg>
              </span>
            </div>
          </div>
        </div>

        {/* Business Metrics Highlight */}
        <div className="px-5 pb-4 pt-1">
          <div className="inline-block">
            <span className="text-[14px] font-bold text-stone-900 bg-blue-100/70 px-1 py-0.5 rounded">
              Business metrics
            </span>
          </div>
        </div>
      </motion.div>

      {/* Decorative connecting lines */}
      <svg className="absolute inset-0 w-full h-full z-0 opacity-[0.06]" viewBox="0 0 500 540">
        <line x1="130" y1="95" x2="130" y2="30" stroke="currentColor" strokeWidth="1" />
        <line x1="350" y1="255" x2="400" y2="255" stroke="currentColor" strokeWidth="1" />
        <line x1="320" y1="420" x2="320" y2="350" stroke="currentColor" strokeWidth="1" />
      </svg>
    </motion.div>
  );
};

export default HeroMockup;
