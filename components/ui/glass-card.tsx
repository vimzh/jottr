import { cn } from "@/lib/utils";
import { HTMLMotionProps, motion } from "motion/react";

interface GlassCardProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  gradient?: "1" | "2" | "3";
}

export function GlassCard({
  children,
  className,
  hover = true,
  gradient,
  ...props
}: GlassCardProps) {
  return (
    <motion.div
      className={cn(
        "glass-card relative overflow-hidden",
        hover && "transition-all duration-300",
        gradient && `gradient-accent-${gradient}`,
        className
      )}
      whileHover={
        hover
          ? {
              y: -4,
              transition: { duration: 0.2, ease: "easeOut" },
            }
          : undefined
      }
      {...props}
    >
      {gradient && (
        <div
          className={cn(
            "absolute inset-0 opacity-50",
            `gradient-accent-${gradient}`
          )}
        />
      )}
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}
