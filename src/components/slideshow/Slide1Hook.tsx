"use client";

import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";

interface Slide1Props {
    onInitialize: () => void;
    isExiting: boolean;
}

export function Slide1Hook({ onInitialize, isExiting }: Slide1Props) {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    // Orthogonal Grid Paths for Data Flow
    // Aligning roughly with a 4rem (64px) grid
    const circuitPaths = [
        "M 0 128 L 1920 128", // Top Horizontal
        "M 0 384 L 500 384 L 500 600", // Left Horizontal to Vert drop
        "M 1920 256 L 1200 256 L 1200 0", // Right Horizontal to Top
        "M 0 512 L 800 512", // Mid-Bottom Horizontal
        "M 640 1080 L 640 0", // Vertical Line 1
        "M 1280 0 L 1280 1080", // Vertical Line 2
        "M 320 0 L 320 400 L 0 400", // Top-Left Vertical to Horizontal exit
        "M 1600 1080 L 1600 600 L 1920 600" // Bottom-Right Vertical to Horizontal exit
    ];

    return (
        <motion.div
            className="absolute inset-0 flex flex-col items-center justify-start z-10 overflow-hidden bg-obsidian"
            initial={{ opacity: 0 }}
            animate={isExiting ? { scale: 2, opacity: 0, filter: "blur(20px)" } : { scale: 1, opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
        >

            {/* 1. Consistent Grid Background (Matches Slide 3) */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

            {/* 2. Dynamic Data Streaks (Orthogonal) - Client Only to avoid Hydration Mismatch from Extensions */}
            {isMounted && (
                <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-40">
                    {circuitPaths.map((d, i) => (
                        <g key={i}>
                            {/* Base Faint Line */}
                            <path d={d} fill="none" stroke="#00BFFF" strokeWidth="1" strokeOpacity="0.05" />

                            {/* Energy Packet (The "Streak") */}
                            <motion.ellipse rx="80" ry="1.5" fill="#00BFFF" opacity="0.3">
                                <animateMotion
                                    dur={`${3 + i * 0.5}s`}
                                    repeatCount="indefinite"
                                    path={d}
                                    rotate="auto"
                                    keyPoints="0;1"
                                    keyTimes="0;1"
                                />
                            </motion.ellipse>
                        </g>
                    ))}
                </svg>
            )}

            {/* 2. Header Content - WINRVTE Main */}
            <motion.div
                className="flex-1 flex flex-col items-center justify-center z-20 text-center px-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                {/* Logo receiving energy */}
                <motion.h1
                    className="text-8xl md:text-[11rem] font-brand font-black tracking-[0.1em] relative mb-8 cursor-default leading-none flex items-center justify-center gap-2"
                    initial="initial"
                    whileHover="hover"
                >
                    <span className="text-accent">WIN</span>
                    <span className="text-white flex items-baseline">
                        R
                        <motion.span
                            className="inline-block origin-center -ml-4"
                            variants={{
                                initial: { rotate: 0, y: 0 },
                                hover: { rotate: 180, y: "1%" } // Moved up towards baseline
                            }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        >
                            V
                        </motion.span>
                        TE
                    </span>

                    {/* Subtle Glow container - persistent static illumination */}
                    <div className="absolute inset-0 bg-accent blur-[100px] rounded-full -z-10 scale-150 opacity-20" />
                </motion.h1>

                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className="max-w-5xl space-y-6"
                >
                    <h2 className="text-xl md:text-3xl font-bold text-white leading-tight uppercase tracking-wider">
                        Elevate Your Esports Organization <span className="text-accent">WITH DATA</span>
                    </h2>
                    <h3 className="text-xs md:text-sm text-accent font-body font-bold tracking-[0.3em] uppercase opacity-80">
                        Data-Driven Infrastructure for Sustainable Growth & Competitive Edge
                    </h3>
                </motion.div>
            </motion.div>

            {/* 4. Navigation: Right Edge Chevron */}
            <motion.button
                onClick={onInitialize}
                className="absolute right-0 top-1/2 -translate-y-1/2 p-6 md:p-8 hover:bg-white/5 transition-colors group z-50 focus:outline-none"
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 2, type: "spring" }}
            >
                <motion.div
                    animate={{ x: [0, 5, 0], opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                    <ChevronRight className="w-12 h-12 md:w-16 md:h-16 text-accent drop-shadow-[0_0_10px_rgba(0,191,255,0.8)]" />
                </motion.div>

                {/* Vertical Line Decoration on Edge */}
                <div className="absolute right-0 top-1/2 -translate-y-1/2 h-32 w-1 bg-gradient-to-b from-transparent via-accent/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.button>

        </motion.div>
    );
}
