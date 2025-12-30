"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils"; // We might need to create this util for clsx/tailwind-merge

interface ButtonProps extends HTMLMotionProps<"button"> {
    children: React.ReactNode;
    variant?: "primary" | "outline" | "danger";
    glow?: boolean;
}

export function Button({
    children,
    className,
    variant = "primary",
    glow = false,
    ...props
}: ButtonProps) {

    const variants = {
        primary: "bg-accent text-obsidian hover:bg-accent-bright font-bold",
        outline: "border border-accent text-accent hover:bg-accent/10 font-medium",
        danger: "bg-danger text-white hover:bg-red-600 font-bold",
    };

    return (
        <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={cn(
                "relative px-8 py-4 uppercase tracking-[0.15em] font-display text-sm transition-colors rounded-sm overflow-hidden group",
                variants[variant],
                glow && "neon-box", // Custom utility
                className
            )}
            {...props}
        >
            {/* Scanline/Shine effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shine_1s_ease-in-out_infinite]" />

            <span className="relative z-10 flex items-center justify-center gap-2">
                {children}
            </span>
        </motion.button>
    );
}
