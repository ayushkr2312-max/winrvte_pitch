"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { MessageSquare, FileSpreadsheet, ArrowRight, ArrowLeft, Bot, ExternalLink, ChevronDown, Database, Code, Workflow, Gamepad2, Layers } from "lucide-react";
import { Button } from "../ui/Button";
import { useRef, useState } from "react";

interface SlideProps {
    isActive: boolean;
    onNext: () => void;
    onBack: () => void;
}

export function Slide4ZeroTouch({ isActive, onNext, onBack }: SlideProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        container: containerRef
    });

    const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

    // Power Line Glow - Intensity increases with scroll
    const powerLineOpacity = useTransform(smoothProgress, [0, 0.1], [0, 1]);
    const powerLineHeight = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);

    // Background parallax or subtle shift
    const bgY = useTransform(smoothProgress, [0, 1], ["0%", "20%"]);

    if (!isActive) return null;

    return (
        <motion.div
            className="absolute inset-0 bg-obsidian z-20 overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            {/* Scrollable Container */}
            <div
                ref={containerRef}
                className="absolute inset-0 overflow-y-auto scroll-smooth no-scrollbar"
                style={{ scrollBehavior: "smooth" }}
            >
                {/* Fixed Background Elements */}
                <motion.div
                    className="fixed inset-0 pointer-events-none z-0"
                    style={{ y: bgY }}
                >
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:100px_100px] opacity-20" />
                </motion.div>

                {/* CENTRAL POWER LINE */}
                <div className="fixed left-1/2 top-0 bottom-0 w-[2px] bg-white/5 -translate-x-1/2 z-10 hidden md:block" />
                <motion.div
                    className="fixed left-1/2 top-0 w-[2px] bg-cyan-400 -translate-x-1/2 z-10 shadow-[0_0_20px_rgba(34,211,238,0.8)] hidden md:block"
                    style={{
                        height: powerLineHeight,
                        opacity: powerLineOpacity
                    }}
                />

                {/* Back Button */}
                <div className="fixed top-8 left-8 z-50 mix-blend-difference">
                    <button onClick={onBack} className="text-white hover:text-cyan-400 flex items-center gap-2 uppercase tracking-widest text-xs font-display transition-colors group">
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                        Back
                    </button>
                </div>


                {/* --- SECTION 1: HERO (THE COACH PROBLEM) --- */}
                <section className="relative min-h-screen flex flex-col items-center justify-center p-6 md:p-20 z-20">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-6xl items-center">

                        {/* Left: Text */}
                        <div className="text-left space-y-8 order-2 md:order-1">
                            <motion.h2
                                className="text-5xl md:text-7xl font-display font-black leading-tight text-white"
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                            >
                                YOUR COACH <br />
                                SHOULD BE <br />
                                <span className="text-cyan-400">COACHING.</span>
                            </motion.h2>
                            <motion.p
                                className="text-xl md:text-2xl text-text-secondary max-w-md"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.4 }}
                            >
                                Stop burning 4 hours a week on data entry.
                                <span className="text-red-400 block mt-2 font-bold">Chaos ends here.</span>
                            </motion.p>
                        </div>

                        {/* Right: Existing Animation */}
                        <motion.div
                            className="relative h-[400px] w-full bg-surface/50 rounded-xl border border-white/10 overflow-hidden flex items-center justify-center order-1 md:order-2 shadow-2xl backdrop-blur-sm"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2 }}
                        >
                            <div className="absolute inset-0 grid grid-cols-2 gap-px bg-white/5 p-4">
                                {/* Discord UI */}
                                <div className="bg-[#36393f] rounded-l-lg p-4 flex flex-col gap-3 opacity-80">
                                    <div className="w-full h-4 bg-white/10 rounded" />
                                    <div className="flex gap-2">
                                        <div className="w-8 h-8 rounded-full bg-indigo-500/20" />
                                        <div className="flex-1 space-y-2">
                                            <div className="w-20 h-3 bg-white/5 rounded" />
                                            <div className="w-full h-12 bg-black/20 rounded p-2 text-xs font-mono text-green-400">
                                                SCRIM_RESULT.png
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Sheets UI */}
                                <div className="bg-[#f8f9fa] rounded-r-lg p-4 flex flex-col gap-2 opacity-90 text-black">
                                    <div className="w-full h-6 border-b border-gray-300 flex items-center px-2">
                                        <div className="w-4 h-4 bg-green-600 rounded mr-2" />
                                        <div className="w-20 h-2 bg-gray-300 rounded" />
                                    </div>
                                    <div className="grid grid-cols-3 gap-1 mt-2">
                                        {[...Array(9)].map((_, i) => (
                                            <motion.div
                                                key={i}
                                                className="h-4 bg-gray-200 rounded"
                                                animate={{ backgroundColor: ["#e5e7eb", "#86efac", "#e5e7eb"] }}
                                                transition={{ duration: 0.5, delay: 2 + i * 0.1, repeat: Infinity, repeatDelay: 3 }}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Middle Filter Config */}
                            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                <div className="w-24 h-24 bg-obsidian border border-cyan-400 rounded-xl flex flex-col items-center justify-center z-10 shadow-[0_0_30px_rgba(34,211,238,0.4)]">
                                    <Bot className="w-8 h-8 text-cyan-400 mb-2" />
                                    <span className="text-[10px] font-display text-white">LOGIC</span>
                                </div>
                            </div>

                            {/* Flying Object */}
                            <motion.div
                                className="absolute z-20 top-1/2 left-10 -mt-6 p-3 bg-indigo-500 rounded-lg shadow-lg text-white"
                                animate={{
                                    x: [0, 150, 300],
                                    y: [0, -20, 0],
                                    scale: [1, 0.5, 1],
                                    opacity: [1, 1, 0]
                                }}
                                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", repeatDelay: 1 }}
                            >
                                <MessageSquare className="w-6 h-6" />
                            </motion.div>
                        </motion.div>
                    </div>

                    {/* Scroll Indicator */}
                    <motion.div
                        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-cyan-400/60"
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    >
                        <span className="text-xs tracking-[0.2em] font-display uppercase">Scroll for Logic</span>
                        <ChevronDown className="w-6 h-6" />
                    </motion.div>
                </section>


                {/* --- SECTION 2: THE HIVE MIND (CENTRALIZATION) --- */}
                <section className="relative min-h-screen flex flex-col items-center justify-center p-6 md:p-20 z-20 bg-gradient-to-b from-transparent to-obsidian/90">
                    <div className="max-w-4xl text-center mb-16 relative z-10">
                        <motion.h2
                            className="text-4xl md:text-6xl font-brand font-black text-white mb-6"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            END OPERATIONAL <span className="text-purple-500">ENTROPY.</span>
                        </motion.h2>
                        <motion.p
                            className="text-lg text-text-secondary max-w-xl mx-auto"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            Your data is scattered in DMs, scrim logs, and lost spreadsheets. We unify it. One source of truth for your entire organization.
                        </motion.p>
                    </div>

                    {/* 3D Visualization */}
                    <div className="relative w-full max-w-4xl h-[400px] flex items-center justify-center">
                        <div className="absolute inset-0 bg-purple-500/5 blur-3xl rounded-full" />

                        {/* Connecting Cables (SVG) */}
                        <svg className="absolute inset-0 w-full h-full pointer-events-none">
                            {/* Cable from Left (Discord) */}
                            <motion.path
                                d="M 200,200 C 350,200 350,200 512,200"
                                initial={{ pathLength: 0, opacity: 0 }}
                                whileInView={{ pathLength: 1, opacity: 1 }}
                                transition={{ duration: 1.5, ease: "easeInOut" }}
                                stroke="url(#gradientLeft)"
                                strokeWidth="4"
                                fill="none"
                            />
                            {/* Cable from Top Right (Riot) */}
                            <motion.path
                                d="M 800,100 C 650,150 550,180 512,200"
                                initial={{ pathLength: 0, opacity: 0 }}
                                whileInView={{ pathLength: 1, opacity: 1 }}
                                transition={{ duration: 1.5, ease: "easeInOut", delay: 0.2 }}
                                stroke="url(#gradientRight)"
                                strokeWidth="4"
                                fill="none"
                            />
                            {/* Cable from Bottom Right (Sheets) */}
                            <motion.path
                                d="M 800,300 C 650,250 550,220 512,200"
                                initial={{ pathLength: 0, opacity: 0 }}
                                whileInView={{ pathLength: 1, opacity: 1 }}
                                transition={{ duration: 1.5, ease: "easeInOut", delay: 0.4 }}
                                stroke="url(#gradientBottom)"
                                strokeWidth="4"
                                fill="none"
                            />
                            <defs>
                                <linearGradient id="gradientLeft" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" stopColor="#5865F2" />
                                    <stop offset="100%" stopColor="#A855F7" />
                                </linearGradient>
                                <linearGradient id="gradientRight" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" stopColor="#D32936" />
                                    <stop offset="100%" stopColor="#A855F7" />
                                </linearGradient>
                                <linearGradient id="gradientBottom" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" stopColor="#0F9D58" />
                                    <stop offset="100%" stopColor="#A855F7" />
                                </linearGradient>
                            </defs>
                        </svg>

                        {/* Central Hub */}
                        <motion.div
                            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-obsidian border-2 border-purple-500 rounded-full flex items-center justify-center z-20 shadow-[0_0_40px_rgba(168,85,247,0.5)]"
                            initial={{ scale: 0, rotate: -90 }}
                            whileInView={{ scale: 1, rotate: 0 }}
                            transition={{ duration: 1, type: "spring" }}
                        >
                            <Layers className="w-12 h-12 text-purple-400" />
                        </motion.div>

                        {/* Floating Icons */}
                        <motion.div className="absolute left-[10%] top-[45%] w-16 h-16 bg-[#5865F2]/10 border border-[#5865F2] rounded-xl flex items-center justify-center" initial={{ x: -50, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }}>
                            <MessageSquare className="w-8 h-8 text-[#5865F2]" />
                        </motion.div>
                        <motion.div className="absolute right-[10%] top-[20%] w-16 h-16 bg-[#D32936]/10 border border-[#D32936] rounded-xl flex items-center justify-center" initial={{ x: 50, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }}>
                            <Gamepad2 className="w-8 h-8 text-[#D32936]" />
                        </motion.div>
                        <motion.div className="absolute right-[10%] bottom-[20%] w-16 h-16 bg-[#0F9D58]/10 border border-[#0F9D58] rounded-xl flex items-center justify-center" initial={{ x: 50, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }}>
                            <FileSpreadsheet className="w-8 h-8 text-[#0F9D58]" />
                        </motion.div>
                    </div>
                </section>


                {/* --- SECTION 3: THE TRUTH DASHBOARD (VISUALIZATION) --- */}
                <section className="relative min-h-screen flex flex-col items-center justify-center p-6 md:p-20 z-20">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 w-full max-w-6xl items-center">

                        {/* Left: 3D Dashboard Card */}
                        <motion.div
                            className="relative h-[350px] w-full bg-[#0F172A] rounded-xl border border-emerald-500/30 overflow-hidden shadow-2xl transform transition-transform"
                            style={{ perspective: "1000px" }}
                            initial={{ opacity: 0, rotateX: 20, y: 50 }}
                            whileInView={{ opacity: 1, rotateX: 10, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent" />

                            {/* Fake Dashboard Header */}
                            <div className="h-10 border-b border-white/5 flex items-center px-4 justify-between">
                                <div className="flex gap-2">
                                    <div className="w-3 h-3 rounded-full bg-red-500/50" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                                    <div className="w-3 h-3 rounded-full bg-green-500/50" />
                                </div>
                                <span className="text-xs text-emerald-500 font-mono">LIVE_PERFORMANCE.exe</span>
                            </div>

                            <div className="p-6">
                                <div className="flex justify-between items-end mb-4">
                                    <div>
                                        <p className="text-xs text-gray-500 uppercase">Win Rate</p>
                                        <h4 className="text-3xl font-bold text-white">68.4% <span className="text-sm text-emerald-400 font-normal">+12.3%</span></h4>
                                    </div>
                                </div>

                                {/* Animated Graph Line */}
                                <div className="relative h-32 w-full mt-8">
                                    <svg className="w-full h-full overflow-visible">
                                        <motion.path
                                            d="M 0,100 C 50,100 50,80 100,80 S 150,90 200,60 S 250,40 300,50 S 350,20 400,10"
                                            fill="none"
                                            stroke="#10B981"
                                            strokeWidth="3"
                                            initial={{ pathLength: 0 }}
                                            whileInView={{ pathLength: 1 }}
                                            transition={{ duration: 2, ease: "easeOut" }}
                                        />
                                        {/* Area Under Graph */}
                                        <motion.path
                                            d="M 0,100 C 50,100 50,80 100,80 S 150,90 200,60 S 250,40 300,50 S 350,20 400,10 V 130 H 0 Z"
                                            fill="url(#emeraldGradient)"
                                            fillOpacity="0.2"
                                            stroke="none"
                                            initial={{ opacity: 0 }}
                                            whileInView={{ opacity: 1 }}
                                            transition={{ duration: 2, delay: 0.5 }}
                                        />
                                        <defs>
                                            <linearGradient id="emeraldGradient" x1="0" y1="0" x2="0" y2="1">
                                                <stop offset="0%" stopColor="#10B981" />
                                                <stop offset="100%" stopColor="transparent" />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                </div>
                            </div>
                        </motion.div>

                        {/* Right: Copy */}
                        <div className="text-left space-y-6">
                            <motion.h2
                                className="text-4xl md:text-5xl font-display font-bold leading-tight text-white/90"
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                            >
                                DECISIONS BASED <br /> ON <span className="text-emerald-500">MATH.</span>
                            </motion.h2>
                            <motion.p
                                className="text-lg text-text-secondary"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                            >
                                No more "I feel like we played well." See the objective reality of your objective control, gold diff, and trade efficiency.
                            </motion.p>
                        </div>

                    </div>
                </section>


                {/* --- SECTION 4: TECHNICAL FOOTER --- */}
                <section className="relative min-h-[50vh] flex flex-col items-center justify-center p-6 md:p-20 z-20 bg-[#050505]">
                    {/* Tech Stack Grid */}
                    <motion.div
                        className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16 opacity-40 grayscale hover:grayscale-0 transition-all duration-500"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 0.4 }}
                        viewport={{ once: true }}
                    >
                        <div className="flex items-center gap-3">
                            <Workflow className="w-8 h-8 text-orange-400" />
                            <span className="font-mono text-white">n8n</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <Code className="w-8 h-8 text-yellow-400" />
                            <span className="font-mono text-white">Python</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <Database className="w-8 h-8 text-blue-400" />
                            <span className="font-mono text-white">Postgres</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <Layers className="w-8 h-8 text-white" />
                            <span className="font-mono text-white">Docker</span>
                        </div>
                    </motion.div>

                    <p className="text-white/30 text-sm font-mono tracking-widest uppercase mb-12">Powered by Enterprise-Grade Automation</p>

                    {/* Next Module Button */}
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Button onClick={onNext} className="bg-white text-obsidian px-8 py-6 rounded-full text-lg font-bold hover:bg-gray-200">
                            NEXT MODULE: GROWTH <ExternalLink className="w-5 h-5 ml-2" />
                        </Button>
                    </motion.div>
                </section>

                {/* Bottom spacer to ensure last section is comfortable */}
                <div className="h-20" />
            </div>
        </motion.div>
    );
}
