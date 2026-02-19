"use client";

import { useScrollTop } from "@/hooks/use-scroll-top";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { SignInButton, UserButton } from "@clerk/clerk-react";
import { Spinner } from "@/components/ui/spinner";
import Link from "next/link";
import { useConvexAuth } from "convex/react";

function Navbar() {
  const { isAuthenticated, isLoading } = useConvexAuth();
  const scrolled = useScrollTop();

  return (
    <div
      className={cn(
        "z-50 fixed top-0 left-0 right-0 flex items-center justify-between h-16 px-6 md:px-10",
        "bg-transparent transition-all duration-300 ease-in-out",
        scrolled &&
          "border-b border-[#e8e8e4] bg-[#FAFAF8]/90 backdrop-blur-md"
      )}
    >
      {/* Logo */}
      <Link href="/">
        <span className="font-serif text-2xl md:text-3xl font-semibold tracking-tight text-[#1a1a1a] cursor-pointer">
          jottr
        </span>
      </Link>

      <div className="flex items-center gap-x-3">
        {isLoading && <Spinner size="lg" />}

        {!isAuthenticated && !isLoading && (
          <>
            <SignInButton mode="modal">
              <Button
                size="default"
                variant="ghost"
                className="text-sm font-medium text-[#1a1a1a] hover:bg-[#1a1a1a]/5 cursor-pointer"
              >
                Log in
              </Button>
            </SignInButton>

            <SignInButton mode="modal">
              <Button
                size="default"
                className="hidden sm:inline-flex text-sm font-medium rounded-full px-6 bg-[#1a1a1a] text-white hover:bg-[#333] cursor-pointer"
              >
                Get Jottr Free
              </Button>
            </SignInButton>
          </>
        )}

        {isAuthenticated && !isLoading && (
          <>
            <Button
              size="default"
              asChild
              className="text-sm font-medium rounded-full px-6 bg-[#1a1a1a] text-white hover:bg-[#333] cursor-pointer"
            >
              <Link href="/documents">Enter Jottr</Link>
            </Button>
            <UserButton afterSignOutUrl="/" />
          </>
        )}
      </div>
    </div>
  );
}

export default Navbar;
