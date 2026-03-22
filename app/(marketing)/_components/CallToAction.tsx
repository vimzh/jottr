"use client";

import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import { SignInButton } from "@clerk/nextjs";
import { useConvexAuth } from "convex/react";
import { Minus } from "lucide-react";
import { motion } from "motion/react";
import { useRouter } from "next/navigation";

export default function CallToAction() {
  const { isAuthenticated, isLoading } = useConvexAuth();
  const router = useRouter();

  return (
    <section className="bg-stone-900 py-24 md:py-32">
      <div className="max-w-4xl mx-auto px-6 flex flex-col items-center text-center">
        {/* Decorative line */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-10"
        >
          <Minus className="size-10 text-stone-700" strokeWidth={1} />
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          className="font-figtree text-4xl sm:text-5xl md:text-6xl font-light tracking-tight text-white leading-tight"
        >
          Start writing something{" "}
          <span className="font-cormorant italic font-medium">beautiful</span>.
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.25, ease: "easeOut" }}
          className="font-figtree text-lg md:text-xl font-light text-stone-400 mt-6"
        >
          Free forever. No credit card required.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          className="mt-10"
        >
          {isLoading ? (
            <Button
              disabled
              className="h-12 px-8 rounded-lg text-base font-medium bg-white text-stone-900 hover:bg-stone-100 transition-colors duration-200"
            >
              <Spinner size="sm" />
              Loading...
            </Button>
          ) : isAuthenticated ? (
            <Button
              onClick={() => router.push("/documents")}
              className="h-12 px-8 rounded-lg text-base font-medium bg-white text-stone-900 hover:bg-stone-100 transition-colors duration-200"
            >
              Enter Workspace
            </Button>
          ) : (
            <SignInButton mode="modal">
              <Button className="h-12 px-8 rounded-lg text-base font-medium bg-white text-stone-900 hover:bg-stone-100 transition-colors duration-200">
                Get Started Free
              </Button>
            </SignInButton>
          )}
        </motion.div>
      </div>
    </section>
  );
}
