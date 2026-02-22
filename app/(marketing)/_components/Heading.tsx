"use client";

import { Button } from "@/components/ui/button";
import { useConvexAuth } from "convex/react";
import { ArrowRightIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { SignInButton } from "@clerk/nextjs";
import { Spinner } from "@/components/ui/spinner";

function Heading() {
  const { isAuthenticated, isLoading } = useConvexAuth();
  const router = useRouter();

  return (
    <div
      className="
        max-w-4xl min-h-screen pt-40 md:pt-48 pb-10
        flex flex-col items-center text-center space-y-8
      "
    >
      {/* YC Badge - ice blue theme */}
      <div
        className="
          inline-flex items-center gap-2 text-sm md:text-base
          text-slate-600 px-4 rounded-full py-2 border border-sky-200
          bg-white/70 backdrop-blur-sm
        "
      >
        <span>Not Backed by</span>
        <span className="inline-flex items-center gap-1.5">
          <span className="px-2 py-0.5 bg-sky-100 rounded font-bold text-sky-600">
            Y
          </span>
          <span className="text-sky-500 font-semibold">Combinator</span>
        </span>
      </div>

      {/* Main Heading - alpine blue gradient */}
      <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight max-w-3xl">
        <span className="bg-gradient-to-b from-sky-500 to-sky-400 bg-clip-text text-transparent">
          The simplest place to jot your thoughts.
        </span>
      </h1>

      {/* Subheading - slate colors */}
      <p className="font-sans text-lg md:text-xl font-normal text-slate-500 max-w-3xl mx-auto leading-relaxed">
        Capture, organize, and recall your thoughts instantly. Simple, fast note-taking that fits seamlessly into your digital life.
      </p>

      {/* CTA Buttons - coral orange */}
      <div className="pt-8">
        {isLoading ? (
          <Button
            disabled
            size="lg"
            className="rounded-xl px-10 text-lg font-medium shadow-md bg-orange-500 hover:bg-orange-500/90 text-white transition-all duration-200"
          >
            <Spinner size="lg" />
            Loading Jottr...
          </Button>
        ) : isAuthenticated ? (
          <Button
            onClick={() => router.push("/documents")}
            size="lg"
            className="group rounded-xl px-10 text-lg font-medium shadow-md hover:shadow-lg hover:scale-105 bg-orange-500 hover:bg-orange-500/90 text-white transition-all duration-200"
          >
            Enter Workspace
            <ArrowRightIcon className="h-5 w-5 ml-2 transition-transform duration-200 group-hover:translate-x-1" />
          </Button>
        ) : (
          <SignInButton mode="modal">
            <Button
              size="lg"
              className="group rounded-xl px-10 text-lg font-medium shadow-md hover:shadow-lg hover:scale-105 bg-orange-500 hover:bg-orange-500/90 text-white transition-all duration-200"
            >
              Get Jottr Free
              <ArrowRightIcon className="h-5 w-5 ml-2 transition-transform duration-200 group-hover:translate-x-1" />
            </Button>
          </SignInButton>
        )}
      </div>
    </div>
  );
}

export default Heading;
