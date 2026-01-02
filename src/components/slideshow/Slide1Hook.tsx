"use client";

import { motion, useAnimation } from "framer-motion";
import { ChevronRight, Power, Crosshair, Hash, Scan, Globe, Cpu } from "lucide-react";
import { useEffect, useState } from "react";

interface Slide1Props {
    onInitialize: () => void;
    isExiting: boolean;
}

export function Slide1Hook({ onInitialize, isExiting }: Slide1Props) {
    const [isMounted, setIsMounted] = useState(false);
    const controls = useAnimation();

    useEffect(() => {
        setIsMounted(true);
        controls.start("visible");
    }, [controls]);

    // Handle the "Initialize" action
    const handleStart = () => {
        onInitialize();
    };

    return (
        <motion.div
            className="absolute inset-0 flex flex-col items-center justify-center z-20 overflow-hidden bg-[#020202] text-white selection:bg-cyan-500/30"
            initial={{ opacity: 0 }}
            animate={isExiting ? { scale: 1.5, opacity: 0, filter: "blur(10px)" } : { scale: 1, opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
        >
            {/* --- LAYERS: TACTICAL DATA AMBIENCE --- */}

            {/* 1. Base Gradient (Deep Data Void) */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#020202] via-[#05090a] to-[#020202]" />

            {/* 2. Abstract Data Grid (The 'Floor') */}
            <div className="absolute inset-0 perspective-1000 pointer-events-none opacity-20">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [transform:rotateX(60deg)_scale(2)] origin-top animate-pulse-slow" />
            </div>

            {/* 3. Floating Data Motes (Crosshairs & Signals) */}
            {isMounted && (
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    {[...Array(15)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute text-cyan-900/40 font-mono text-[10px]"
                            style={{
                                top: Math.random() * 100 + "%",
                                left: Math.random() * 100 + "%",
                            }}
                            animate={{
                                opacity: [0, 0.8, 0],
                                y: [0, -50]
                            }}
                            transition={{
                                duration: Math.random() * 5 + 4,
                                repeat: Infinity,
                                delay: Math.random() * 5,
                                ease: "linear"
                            }}
                        >
                            {i % 3 === 0 ? "+" : i % 3 === 1 ? "::" : "01"}
                        </motion.div>
                    ))}
                </div>
            )}

            {/* 4. Scanning Radar Line */}
            <motion.div
                className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent h-[20%] w-full pointer-events-none"
                animate={{ top: ["-20%", "120%"] }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            />

            {/* 5. SIDE ELEMENTS: VERTICAL DATA PILLARS */}
            <div className="absolute inset-y-0 left-0 w-24 border-r border-white/5 bg-gradient-to-r from-black/50 to-transparent hidden md:flex flex-col justify-between py-12 items-center pointer-events-none z-10">
                {/* Moving Ticker Left */}
                <div className="h-full w-px bg-white/5 relative overflow-hidden">
                    <motion.div
                        className="absolute w-full h-1/3 bg-gradient-to-b from-transparent via-cyan-500/50 to-transparent"
                        animate={{ top: ["-100%", "200%"] }}
                        transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                    />
                </div>
            </div>
            <div className="absolute inset-y-0 right-0 w-24 border-l border-white/5 bg-gradient-to-l from-black/50 to-transparent hidden md:flex flex-col justify-between py-12 items-center pointer-events-none z-10">
                {/* Moving Ticker Right */}
                <div className="h-full w-px bg-white/5 relative overflow-hidden">
                    <motion.div
                        className="absolute w-full h-1/3 bg-gradient-to-b from-transparent via-cyan-500/50 to-transparent"
                        animate={{ top: ["200%", "-100%"] }}
                        transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
                    />
                </div>
            </div>


            {/* --- CONTENT: THE HERO --- */}
            <div className="relative z-10 flex flex-col items-center text-center px-6">

                {/* Top Label: Live Network Status */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 1 }}
                    className="mb-16 w-full max-w-lg"
                >
                    <div className="flex items-center justify-between px-6 py-2 border-y border-white/5 bg-black/40 backdrop-blur-sm">
                        <div className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                            <span className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase">Live Connection</span>
                        </div>
                        <div className="flex items-center gap-4 text-[10px] font-mono text-zinc-600 tracking-widest uppercase">
                            <span className="flex items-center gap-1"><Globe className="w-3 h-3" /> GLBL</span>
                            <span className="text-zinc-800">|</span>
                            <span>42ms</span>
                            <span className="text-zinc-800">|</span>
                            <span className="flex items-center gap-1"><Cpu className="w-3 h-3" /> AES-256</span>
                        </div>
                    </div>
                </motion.div>

                {/* MAIN TITLE: WINRVTE (MASSIVE & UNIFIED HOVER) */}
                <div className="relative mb-2">
                    <motion.div
                        className="flex items-center justify-center gap-2 md:gap-4 cursor-default"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: [0, 0.3, 0.1, 1] }} // Engine Start Flicker
                        transition={{ duration: 1.5, times: [0, 0.4, 0.5, 1] }}
                        whileHover={{
                            scale: 1.05,
                            y: -5,
                            filter: "drop-shadow(0 0 40px rgba(34,211,238,0.6))",
                            transition: {
                                scale: { duration: 0.2 },
                                y: { duration: 0.2 }
                            }
                        }}
                    >
                        {/* W-I-N (LIGHT BLUE, NO DEFAULT GLOW) */}
                        <motion.span
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, ease: "backOut", delay: 0.2 }}
                            className="text-[15vw] md:text-[11rem] font-brand font-black tracking-[0.1em] leading-none text-cyan-400"
                        >
                            WIN
                        </motion.span>

                        {/* R-V-T-E (WHITE) */}
                        <motion.span
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, ease: "backOut", delay: 0.4 }}
                            className="text-[15vw] md:text-[11rem] font-brand font-black tracking-[0.1em] leading-none text-white flex items-center"
                        >
                            R
                            {/* The "V" - No individual animation anymore */}
                            <span className="relative text-white mx-1 inline-block">
                                V
                            </span>
                            TE
                        </motion.span>
                    </motion.div>
                </div>

                {/* Subtext */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2, duration: 1 }}
                    className="max-w-2xl mx-auto space-y-4"
                >
                    <h2 className="text-lg md:text-xl font-mono text-cyan-500/60 tracking-[0.2em] uppercase">
                        The Operating System for Esports
                    </h2>
                </motion.div>
            </div>


            {/* --- INTERACTION: "INITIALIZE" BUTTON --- */}
            <motion.div
                className="absolute bottom-24 z-20"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5, duration: 0.8 }}
            >
                <button
                    onClick={handleStart}
                    className="group flex flex-col items-center gap-4 focus:outline-none"
                >
                    <div className="relative w-16 h-16 flex items-center justify-center">
                        {/* Spinning Rings */}
                        <div className="absolute inset-0 border border-cyan-500/30 rounded-full animate-[spin_4s_linear_infinite]" />
                        <div className="absolute inset-2 border border-white/10 rounded-full animate-[spin_3s_linear_infinite_reverse]" />

                        {/* Icon */}
                        <Power className="w-6 h-6 text-white group-hover:text-cyan-400 transition-colors" />
                    </div>

                    <span className="text-[10px] font-mono text-cyan-500/80 tracking-[0.4em] uppercase group-hover:text-cyan-300 transition-colors">
                        Initialize
                    </span>
                </button>
            </motion.div>

        </motion.div>
    );
}
