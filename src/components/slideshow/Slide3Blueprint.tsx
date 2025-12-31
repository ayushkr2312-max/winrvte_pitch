"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { ArrowLeft, Network, Globe, TrendingUp, ChevronRight, ChevronLeft } from "lucide-react";
import { useState, useEffect } from "react";

interface Slide3Props {
    isActive: boolean;
    onNext: () => void;
    onBack: () => void;
}

export function Slide3Blueprint({ isActive, onNext, onBack }: Slide3Props) {
    const [isHoveringText, setIsHoveringText] = useState(false);

    // Continuous Streak Animation
    // Progress goes from 0 to 1 linearly
    const streakProgress = useMotionValue(0);

    useEffect(() => {
        if (!isActive) return;

        // Loop duration: 4 seconds (even slower)
        const controls = animate(streakProgress, 1, {
            duration: 4,
            ease: "linear",
            repeat: Infinity,
            repeatDelay: 0,
            onComplete: () => streakProgress.set(0) // Logic handled by repeat but safety
        });

        return () => controls.stop();
    }, [isActive, streakProgress]);

    // Map progress to Horizontal Position
    // Start off-screen left (-20%) to off-screen right (120%)
    // Total distance range ~140%
    // Internal Box Center: ~16.67% -> Progress ~0.26
    // Growth Box Center: ~50% -> Progress ~0.50
    // External Box Center: ~83.33% -> Progress ~0.74
    const streakLeft = useTransform(streakProgress, [0, 1], ["-20%", "120%"]);

    // Map progress to Streak Color
    // Blue initially -> Turns Purple AFTER Growth (0.5) -> Turns Green AFTER External (0.74)
    const streakColor = useTransform(streakProgress, (v) => {
        if (v < 0.52) return "#3B82F6"; // Blue (Internal & Growth)
        if (v < 0.76) return "#A855F7"; // Purple (External)
        return "#10B981"; // Green (Exit)
    });

    // Map progress to Box Glows (Bell curve feeling around the impact point)
    const glowDuration = 0.08; // How long the glow window is in progress units

    // Internal Glow (Center ~0.26)
    const internalGlowOpacity = useTransform(streakProgress, [0.26 - glowDuration, 0.26, 0.26 + glowDuration], [0, 0.2, 0]);
    const internalBoxShadow = useTransform(internalGlowOpacity, [0, 0.2], ["none", "0 0 15px rgba(59, 130, 246, 0.2)"]);

    // Growth Glow (Center ~0.50)
    const growthGlowOpacity = useTransform(streakProgress, [0.50 - glowDuration, 0.50, 0.50 + glowDuration], [0, 0.2, 0]);
    const growthBoxShadow = useTransform(growthGlowOpacity, [0, 0.2], ["none", "0 0 15px rgba(168, 85, 247, 0.2)"]);

    // External Glow (Center ~0.74)
    const externalGlowOpacity = useTransform(streakProgress, [0.74 - glowDuration, 0.74, 0.74 + glowDuration], [0, 0.2, 0]);
    const externalBoxShadow = useTransform(externalGlowOpacity, [0, 0.2], ["none", "0 0 15px rgba(16, 185, 129, 0.2)"]);

    if (!isActive) return null;

    return (
        <motion.div
            className="absolute inset-0 flex flex-col items-center justify-center z-20 bg-obsidian overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            {/* Background Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(0,191,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,191,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none" />



            {/* Main Content Container */}
            <div className="relative w-full max-w-6xl px-8 flex flex-col items-center">

                {/* Pre-headline */}
                <motion.h2
                    className="text-2xl md:text-4xl font-display font-medium uppercase tracking-wide text-white/60 mb-4 text-center -mt-8"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    We Turn{" "}
                    <span className="text-red-500 inline-block font-bold">
                        Chaos
                    </span>
                    {" "}Into
                </motion.h2>

                {/* SYSTEMS Headline */}
                <motion.h1
                    className="text-6xl md:text-8xl lg:text-[9rem] font-brand font-black text-accent tracking-wider mb-6 relative text-center cursor-pointer select-none"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: isHoveringText ? 1.08 : 1 }}
                    transition={{ duration: 0.15 }}
                    onMouseEnter={() => setIsHoveringText(true)}
                    onMouseLeave={() => setIsHoveringText(false)}
                >
                    <span className="relative z-10 glow-text">SYSTEMS.</span>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-accent/10 blur-3xl animate-pulse -z-10" />
                </motion.h1>

                {/* Tagline */}
                <motion.p
                    className="text-center text-base md:text-lg text-text-secondary max-w-xl mb-16"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                >
                    Three interconnected pillars. One unstoppable foundation.
                </motion.p>

                {/* Systems Grid with Data Flow */}
                <div className="relative w-full max-w-5xl">

                    {/* Horizontal Data Flow Path */}
                    <div className="absolute left-0 right-0 top-[48px] h-[2px] z-0 overflow-visible">
                        {/* Main horizontal line extending to page edges */}
                        <motion.div
                            className="absolute left-[-100vw] right-[-100vw] h-[2px] bg-gradient-to-r from-transparent via-accent/20 to-transparent"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 0.8 }}
                        />

                        {/* Single Data Streak - Continuous Smooth Animation */}
                        <motion.div
                            className="absolute top-[0px] w-40 h-[1.5px] rounded-full"
                            style={{
                                left: streakLeft,
                                background: useTransform(streakColor, color => `linear-gradient(90deg, transparent, ${color}, transparent)`),
                                translateX: "-50%"
                            }}
                        />
                    </div>

                    {/* Node connection dots - no permanent ping */}
                    <div className="absolute left-[16.67%] top-[48px] w-2 h-2 bg-blue-400 rounded-full -translate-x-1/2 -translate-y-1/2 z-10" />
                    <div className="absolute left-[50%] top-[48px] w-2 h-2 bg-purple-400 rounded-full -translate-x-1/2 -translate-y-1/2 z-10" />
                    <div className="absolute left-[83.33%] top-[48px] w-2 h-2 bg-emerald-400 rounded-full -translate-x-1/2 -translate-y-1/2 z-10" />

                    {/* Three Columns Grid - Increased gap for more spacing */}
                    <div className="grid grid-cols-3 gap-16 relative z-10">

                        {/* Internal */}
                        <motion.div
                            className="flex flex-col items-center gap-4"
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ type: "spring", stiffness: 100, delay: 1 }}
                        >
                            <motion.div
                                className="relative w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-blue-500/20 to-surface border-2 border-blue-500/30 rounded-2xl flex items-center justify-center hover:border-blue-500/60 transition-all duration-300 group cursor-pointer shadow-xl backdrop-blur-md"
                                animate={{
                                    scale: isHoveringText ? 1.15 : 1,
                                    y: isHoveringText ? -8 : 0,
                                }}
                                style={{
                                    boxShadow: internalBoxShadow
                                }}
                                transition={{ duration: 0.15 }}
                            >
                                <Network className="w-10 h-10 md:w-12 md:h-12 text-blue-400 group-hover:text-blue-300 transition-colors" />
                                <motion.div
                                    className="absolute inset-0 bg-blue-500 rounded-2xl blur-xl -z-10"
                                    style={{ opacity: internalGlowOpacity }}
                                />
                            </motion.div>
                            <div className="text-center">
                                <h3 className="text-lg md:text-xl font-bold tracking-wider text-blue-400 uppercase mb-1">AUTOMATED OPS</h3>
                                <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                                    Eliminate manual entry. Automated scrim logging, centralize performance data, and optimize workflows.
                                </p>
                            </div>
                        </motion.div>

                        {/* Growth */}
                        <motion.div
                            className="flex flex-col items-center gap-4"
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ type: "spring", stiffness: 100, delay: 1.2 }}
                        >
                            <motion.div
                                className="relative w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-purple-500/20 to-surface border-2 border-purple-500/30 rounded-2xl flex items-center justify-center hover:border-purple-500/60 transition-all duration-300 group cursor-pointer shadow-xl backdrop-blur-md"
                                animate={{
                                    scale: isHoveringText ? 1.15 : 1,
                                    y: isHoveringText ? -8 : 0,
                                }}
                                style={{
                                    boxShadow: growthBoxShadow
                                }}
                                transition={{ duration: 0.15 }}
                            >
                                <TrendingUp className="w-10 h-10 md:w-12 md:h-12 text-purple-400 group-hover:text-purple-300 transition-colors" />
                                <motion.div
                                    className="absolute inset-0 bg-purple-500 rounded-2xl blur-xl -z-10"
                                    style={{ opacity: growthGlowOpacity }}
                                />
                            </motion.div>
                            <div className="text-center">
                                <h3 className="text-lg md:text-xl font-bold tracking-wider text-blue-400 uppercase mb-1">GROWTH & ANALYTICS</h3>
                                <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                                    Visualize your trajectory. Granular tracking of content ROI, engagement trends, and reports to prove your value.
                                </p>
                            </div>
                        </motion.div>

                        {/* External */}
                        <motion.div
                            className="flex flex-col items-center gap-4"
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ type: "spring", stiffness: 100, delay: 1.4 }}
                        >
                            <motion.div
                                className="relative w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-emerald-500/20 to-surface border-2 border-emerald-500/30 rounded-2xl flex items-center justify-center hover:border-emerald-500/60 transition-all duration-300 group cursor-pointer shadow-xl backdrop-blur-md"
                                animate={{
                                    scale: isHoveringText ? 1.15 : 1,
                                    y: isHoveringText ? -8 : 0,
                                }}
                                style={{
                                    boxShadow: externalBoxShadow
                                }}
                                transition={{ duration: 0.15 }}
                            >
                                <Globe className="w-10 h-10 md:w-12 md:h-12 text-emerald-400 group-hover:text-emerald-300 transition-colors" />
                                <motion.div
                                    className="absolute inset-0 bg-emerald-500 rounded-2xl blur-xl -z-10"
                                    style={{ opacity: externalGlowOpacity }}
                                />
                            </motion.div>
                            <div className="text-center">
                                <h3 className="text-lg md:text-xl font-bold tracking-wider text-blue-400 uppercase mb-1">SCOUTING & SURVEILLANCE</h3>
                                <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                                    The Watchtower. 24/7 talent scouting, competitor analysis, and market trend monitoring to catch opportunities first.
                                </p>
                            </div>
                        </motion.div>

                    </div>
                </div>

            </div>

            {/* Bottom Text */}
            <motion.p
                className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center text-sm md:text-base text-white font-bold z-20"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.6 }}
            >
                Built for esports organizations who refuse to lose.
            </motion.p>

            {/* Back Button - Fixed on Left Edge */}
            <motion.div
                className="fixed left-8 top-1/2 -translate-y-1/2 z-30"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.5 }}
            >
                <button
                    onClick={onBack}
                    className="group p-4 bg-accent/10 hover:bg-accent border border-accent/30 hover:border-accent rounded-full transition-all duration-300 backdrop-blur-sm"
                >
                    <ChevronLeft className="w-6 h-6 text-accent group-hover:text-obsidian transition-colors" />
                </button>
            </motion.div>

            {/* Next Button - Fixed on Right Edge */}
            <motion.div
                className="fixed right-8 top-1/2 -translate-y-1/2 z-30"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.5 }}
            >
                <button
                    onClick={onNext}
                    className="group p-4 bg-accent/10 hover:bg-accent border border-accent/30 hover:border-accent rounded-full transition-all duration-300 backdrop-blur-sm"
                >
                    <ChevronRight className="w-6 h-6 text-accent group-hover:text-obsidian transition-colors" />
                </button>
            </motion.div>
        </motion.div>
    );
}
