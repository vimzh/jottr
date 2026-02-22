"use client";

import { Button } from "@/components/ui/button";
import { useConvexAuth } from "convex/react";
import { ArrowRight, Sparkles } from "lucide-react";
import { useRouter } from "next/navigation";
import { SignInButton } from "@clerk/nextjs";
import { Spinner } from "@/components/ui/spinner";

function Heading() {
  const { isAuthenticated, isLoading } = useConvexAuth();
  const router = useRouter();

  return (
    <div className="max-w-5xl flex flex-col items-center text-center space-y-8">
      {/* Animated pill badge */}
      <div className="inline-flex items-center gap-2 text-xs tracking-widest uppercase text-white px-4 py-2 rounded-full bg-gradient-to-r from-blue-600/80 to-purple-600/80 backdrop-blur-sm border border-blue-400/30">
        <Sparkles className="w-3 h-3" />
        Introducing Jottr Pro
      </div>

      {/* Main Heading with gradient */}
      <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-[1.05] max-w-5xl">
        <span className="bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 bg-clip-text text-transparent">
          Your thoughts, perfectly captured.
        </span>
      </h1>

      {/* Subheading */}
      <p className="text-lg md:text-xl font-normal text-[#6b6b6b] max-w-3xl mx-auto leading-relaxed">
        Lightning-fast note-taking with end-to-end encryption. Write freely, think clearly, and never lose an idea.
      </p>

      {/* Dual CTA */}
      <div className="pt-6 flex flex-col sm:flex-row gap-4 items-center justify-center">
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
            className="group rounded-full px-8 text-base font-semibold bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all duration-200 cursor-pointer"
          >
            Enter Workspace
            <ArrowRight className="h-4 w-4 ml-2 transition-transform duration-200 group-hover:translate-x-1" />
          </Button>
        ) : (
          <>
            <SignInButton mode="modal">
              <Button
                size="lg"
                className="group rounded-full px-8 text-base font-semibold bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all duration-200 cursor-pointer"
              >
                Get Jottr Free
                <ArrowRight className="h-4 w-4 ml-2 transition-transform duration-200 group-hover:translate-x-1" />
              </Button>
            </SignInButton>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full px-8 text-base font-semibold border-2 border-slate-200 hover:bg-slate-50 transition-all duration-200"
            >
              See Demo
            </Button>
          </>
        )}
      </div>

      {/* Trust indicators */}
      <div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-[#8a8a8a]">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
          Free to use, forever
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
          No credit card required
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
          Fully encrypted
        </div>
      </div>
    </div>
  );
}

export default Heading;
