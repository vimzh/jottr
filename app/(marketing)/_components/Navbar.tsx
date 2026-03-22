"use client";

import { useScrollTop } from "@/hooks/use-scroll-top";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { SignInButton, UserButton } from "@clerk/clerk-react";
import { Spinner } from "@/components/ui/spinner";
import Link from "next/link";
import { useConvexAuth } from "convex/react";
import { motion, AnimatePresence } from "motion/react";
import { Github } from "lucide-react";

const navLinks = [
  { href: "#features", label: "Features" },
  { href: "#pricing", label: "Pricing" },
  { href: "https://github.com", label: "GitHub", icon: Github },
];

function Navbar() {
  const { isAuthenticated, isLoading } = useConvexAuth();
  const scrolled = useScrollTop();

  return (
    <>
      <motion.nav
        initial={false}
        animate={{
          backdropFilter: scrolled ? "blur(12px)" : "blur(0px)",
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50",
          "transition-all duration-300 ease-out",
          scrolled ? "bg-stone-50/80" : "bg-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-16 md:h-18">
            {/* Logo with delicate typography */}
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-center gap-2"
            >
              <Link href="/" className="group relative pr-2 flex items-baseline">
                <span className="font-figtree text-2xl md:text-3xl tracking-tight text-stone-900 font-light">
                  Jottr
                </span>
              </Link>
            </motion.div>

            {/* Center Navigation Links - Minimalist line draw hover */}
            <motion.div
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="hidden md:flex items-center gap-10"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="group flex items-center gap-2 text-[15px] font-figtree font-light text-stone-500 hover:text-stone-900 transition-colors duration-300 py-1"
                >
                  {link.icon && <link.icon className="h-[14px] w-[14px] opacity-70 group-hover:opacity-100 transition-opacity" />}
                  {link.label}
                </Link>
              ))}
            </motion.div>

            {/* Right Side Auth / App Navigation */}
            <motion.div
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-center gap-x-6 md:gap-x-8"
            >
              <AnimatePresence mode="wait">
                {isLoading ? (
                  <motion.div
                    key="loading"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Spinner size="sm" />
                  </motion.div>
                ) : !isAuthenticated ? (
                  <motion.div
                    key="guest"
                    initial={{ opacity: 0, filter: "blur(4px)" }}
                    animate={{ opacity: 1, filter: "blur(0px)" }}
                    exit={{ opacity: 0, filter: "blur(4px)" }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="flex items-center gap-x-5 md:gap-x-7"
                  >
                    <SignInButton mode="modal">
                      <button className="text-[15px] font-figtree font-light text-stone-500 hover:text-stone-900 transition-colors duration-300">
                        Log in
                      </button>
                    </SignInButton>

                    <SignInButton mode="modal">
                      <Button
                        className="group h-9 px-5 rounded-md text-sm font-medium bg-[#111111] text-white hover:bg-[#252525] shadow-[0_2px_8px_rgba(0,0,0,0.1),0_1px_2px_rgba(0,0,0,0.08),inset_0_1px_0_rgba(255,255,255,0.15)] transition-all duration-200"
                      >
                        Sign Up
                      </Button>
                    </SignInButton>
                  </motion.div>
                ) : (
                  <motion.div
                    key="authenticated"
                    initial={{ opacity: 0, filter: "blur(4px)" }}
                    animate={{ opacity: 1, filter: "blur(0px)" }}
                    exit={{ opacity: 0, filter: "blur(4px)" }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="flex items-center gap-x-5 md:gap-x-7"
                  >
                    <Link 
                      href="/documents" 
                      className="group flex items-center text-[15px] font-figtree font-light text-stone-500 hover:text-stone-900 transition-colors duration-300 py-1"
                    >
                      Enter Workspace
                    </Link>

                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                      className="relative"
                    >
                      <UserButton afterSignOutUrl="/" />
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </motion.nav>

      {/* Spacer updated to match new navbar height */}
      <div className="h-16 md:h-18" />
    </>
  );
}

export default Navbar;
