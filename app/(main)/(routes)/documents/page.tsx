"use client";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";
import { motion } from "motion/react";
import Image from "next/image";
import { useUser } from "@clerk/clerk-react";
import { PlusCircle, FileText, Sparkles } from "lucide-react";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

function Documents() {
  const { user } = useUser();
  const router = useRouter();
  const create = useMutation(api.documents.create);

  const onCreate = () => {
    const promise = create({ title: "Untitled" }).then((documentId) => {
      router.push(`/documents/${documentId}`);
    });

    toast.promise(promise, {
      loading: "Creating a new note...",
      success: "New note created!",
      error: "Failed to create a new note.",
    });
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center gap-6 overflow-hidden glass-bg-pattern relative">
      {/* Animated background orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-gradient-1 opacity-20 blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-gradient-2 opacity-15 blur-3xl"
          animate={{
            x: [0, -40, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center gap-8 max-w-lg mx-auto px-6">
        {/* Welcome section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 glass-strong rounded-full mb-4">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium">Your personal workspace</span>
          </div>
          
          <h1 className="text-3xl font-bold bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent">
            Welcome back, {user?.firstName}
          </h1>
          
          <p className="text-muted-foreground text-base max-w-sm mx-auto">
            Capture your thoughts, organize your ideas, and let creativity flow
          </p>
        </motion.div>

        {/* Glass cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full"
        >
          <GlassCard
            hover={true}
            className="p-6 cursor-pointer"
            onClick={onCreate}
          >
            <div className="flex flex-col items-center gap-3 text-center">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                <PlusCircle className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-base">Create New Note</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Start with a blank canvas
                </p>
              </div>
            </div>
          </GlassCard>

          <GlassCard
            hover={true}
            className="p-6 cursor-pointer"
            onClick={onCreate}
          >
            <div className="flex flex-col items-center gap-3 text-center">
              <div className="h-12 w-12 rounded-full bg-accent/50 flex items-center justify-center">
                <FileText className="h-6 w-6 text-accent-foreground" />
              </div>
              <div>
                <h3 className="font-semibold text-base">Browse Notes</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Explore your collection
                </p>
              </div>
            </div>
          </GlassCard>
        </motion.div>

        {/* Quick action button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <Button
            onClick={onCreate}
            size="lg"
            className="glass-button h-11 px-6 gap-2 shadow-md hover:shadow-lg transition-all"
          >
            <PlusCircle className="h-4 w-4" />
            <span>Create your first note</span>
          </Button>
        </motion.div>
      </div>
    </div>
  );
}

export default Documents;
