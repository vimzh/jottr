"use client";

import { Button } from "@/components/ui/button";
import { useConvexAuth } from "convex/react";
import { ArrowRightIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { SignInButton } from "@clerk/nextjs";
import { Spinner } from "@/components/ui/spinner";
import { motion } from "motion/react";

function Heading() {
  const { isAuthenticated, isLoading } = useConvexAuth();
  const router = useRouter();

  return (
    <div className="max-w-5xl pt-20 pb-10 flex flex-col items-start text-left space-y-10">
      {/* Main Heading - Two Lines */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
        className="space-y-2"
      >
        <h1 className="font-figtree text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-tight leading-[1]">
          <span className="block text-black">Write Yourself</span>
        </h1>
        <h1 className="font-figtree text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-tight leading-[1]">
          <span className="text-black">Something </span>
          <span className="font-cormorant inline-flex items-center justify-center bg-stone-900 text-white px-3 py-1 rounded-md font-medium align-baseline overflow-hidden">
            <span className="relative z-10">beautiful</span>
            <span className="absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-transparent rounded-md pointer-events-none" />
          </span>
          <span className="text-black">.</span>
        </h1>
      </motion.div>

      {/* Subheading */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
        className="font-figtree text-lg md:text-xl font-light text-gray-500 max-w-xl leading-relaxed"
      >
        The fastest way to capture ideas and turn them into something meaningful.
      </motion.p>

      {/* CTA Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
        className="pt-4"
      >
        {isLoading ? (
          <Button
            disabled
            className="group inline-flex items-center justify-center gap-2 h-11 px-6 rounded-lg text-base font-medium bg-[#111111] text-white hover:bg-[#252525] shadow-[0_2px_8px_rgba(0,0,0,0.1),0_1px_2px_rgba(0,0,0,0.08),inset_0_1px_0_rgba(255,255,255,0.15)] transition-all duration-200"
          >
            <Spinner size="sm" />
            Loading...
          </Button>
        ) : isAuthenticated ? (
          <Button
            onClick={() => router.push("/documents")}
            className="group h-11 px-6 rounded-lg text-base font-medium bg-[#111111] text-white hover:bg-[#252525] shadow-[0_2px_8px_rgba(0,0,0,0.1),0_1px_2px_rgba(0,0,0,0.08),inset_0_1px_0_rgba(255,255,255,0.15)] transition-all duration-200"
          >
            Enter Workspace
          </Button>
        ) : (
          <SignInButton mode="modal">
            <Button
              className="group h-11 px-6 rounded-lg text-base font-medium bg-[#111111] text-white hover:bg-[#252525] shadow-[0_2px_8px_rgba(0,0,0,0.1),0_1px_2px_rgba(0,0,0,0.08),inset_0_1px_0_rgba(255,255,255,0.15)] transition-all duration-200"
            >
              Start Writing Free
            </Button>
          </SignInButton>
        )}
      </motion.div>
    </div>
  );
}

export default Heading;
