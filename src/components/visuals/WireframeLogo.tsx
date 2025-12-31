"use client";

import { motion, Variants } from "framer-motion";
import { useEffect, useState } from "react";

export function WireframeLogo({ isAbsorbing }: { isAbsorbing: boolean }) {
    // Simple "W" geometric path
    // Coordinate system 100x100
    const pathVariants: Variants = {
        hidden: { pathLength: 0, opacity: 0 },
        visible: {
            pathLength: 1,
            opacity: 1,
            transition: { duration: 2, ease: "easeInOut" as const }
        },
        absorbing: {
            strokeWidth: 4,
            filter: "drop-shadow(0 0 10px #00BFFF)",
            scale: 1.1,
            transition: { duration: 0.5 }
        }
    };

    return (
        <div className="relative w-48 h-48 flex items-center justify-center">
            <motion.svg
                viewBox="0 0 100 100"
                className="w-full h-full text-accent drop-shadow-[0_0_8px_rgba(0,191,255,0.6)]"
                animate={isAbsorbing ? "absorbing" : "visible"}
                initial="hidden"
            >
                {/* The W Shape */}
                <motion.path
                    d="M 20 20 L 35 80 L 50 40 L 65 80 L 80 20"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    variants={pathVariants}
                />

                {/* Decorative elements - Brackets */}
                <motion.path
                    d="M 10 30 L 5 30 L 5 70 L 10 70"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeOpacity={0.5}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.5 }}
                    transition={{ delay: 1 }}
                />
                <motion.path
                    d="M 90 30 L 95 30 L 95 70 L 90 70"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeOpacity={0.5}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.5 }}
                    transition={{ delay: 1 }}
                />

                {/* Center node */}
                <motion.circle
                    cx="50" cy="40" r="2"
                    fill="currentColor"
                    animate={{ r: [2, 3, 2], opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                />
            </motion.svg>

            {/* Background Glow Pulse */}
            <motion.div
                className="absolute inset-0 bg-accent rounded-full blur-[40px]"
                animate={{ opacity: [0, 0.2, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
            />
        </div>
    );
}
