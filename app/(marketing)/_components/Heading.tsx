"use client";

import { Button } from "@/components/ui/button";
import { useConvexAuth } from "convex/react";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { SignInButton } from "@clerk/nextjs";
import { Spinner } from "@/components/ui/spinner";

function Heading() {
  const { isAuthenticated, isLoading } = useConvexAuth();
  const router = useRouter();

  return (
    <div className="max-w-4xl flex flex-col items-center text-center space-y-8">
      {/* Pill badge */}
      <div className="inline-flex items-center gap-2 text-xs tracking-widest uppercase text-[#8a8a8a] px-4 py-2 rounded-full border border-[#e0e0dc] bg-white/60 backdrop-blur-sm">
        Simple. Private. Fast.
      </div>

      {/* Main Heading */}
      <h1 className="font-serif text-5xl sm:text-6xl md:text-[5.5rem] font-semibold tracking-tight leading-[1.05] max-w-4xl">
        <span className="text-[#1a1a1a]">
          The simplest place to jot your thoughts.
        </span>
      </h1>

      {/* Subheading */}
      <p className="text-lg md:text-xl font-normal text-[#6b6b6b] max-w-2xl mx-auto leading-relaxed">
        Capture, organize, and recall your ideas instantly.
        Note-taking that fits seamlessly into your flow.
      </p>

      {/* CTA */}
      <div className="pt-4">
        {isLoading ? (
          <Button
            disabled
            size="lg"
            className="rounded-full px-10 text-base font-medium"
          >
            <Spinner size="lg" />
          </Button>
        ) : isAuthenticated ? (
          <Button
            onClick={() => router.push("/documents")}
            size="lg"
            className="group rounded-full px-10 text-base font-medium bg-[#1a1a1a] text-white hover:bg-[#333] shadow-sm cursor-pointer"
          >
            Enter Workspace
            <ArrowRight className="h-4 w-4 ml-2 transition-transform duration-200 group-hover:translate-x-1" />
          </Button>
        ) : (
          <SignInButton mode="modal">
            <Button
              size="lg"
              className="group rounded-full px-10 text-base font-medium bg-[#1a1a1a] text-white hover:bg-[#333] shadow-sm cursor-pointer"
            >
              Get Jottr Free
              <ArrowRight className="h-4 w-4 ml-2 transition-transform duration-200 group-hover:translate-x-1" />
            </Button>
          </SignInButton>
        )}
      </div>
    </div>
  );
}

export default Heading;
