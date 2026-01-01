"use client";

import { motion, useScroll, useSpring, useTransform, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, Activity, BarChart3, TrendingUp, FileText, CheckCircle2, ChevronDown, Zap, Search, Layout, PieChart, Globe, Cpu, Sliders, Layers } from "lucide-react";
import { Button } from "../ui/Button";
import { useRef, useState, useEffect } from "react";

interface SlideProps {
    isActive: boolean;
    onNext: () => void;
    onBack: () => void;
}

export function Slide5Growth({ isActive, onNext, onBack }: SlideProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        container: containerRef
    });

    const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

    // Parallax
    const heroY = useTransform(smoothProgress, [0, 0.2], [0, -50]);
    const heroOpacity = useTransform(smoothProgress, [0, 0.2], [1, 0]);

    if (!isActive) return null;

    return (
        <motion.div
            className="absolute inset-0 bg-[#050505] z-20 overflow-hidden font-brand text-white selection:bg-emerald-500/30"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <div
                ref={containerRef}
                className="absolute inset-0 overflow-y-auto scroll-smooth no-scrollbar perspective-1000"
                style={{ scrollBehavior: "smooth" }}
            >
                {/* Global Grid Background */}
                <div className="fixed inset-0 pointer-events-none opacity-[0.05]">
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,1)_1px,transparent_1px)] bg-[size:60px_60px]" />
                </div>

                {/* Back Navigation */}
                <motion.button
                    onClick={onBack}
                    className="fixed left-6 top-8 z-50 flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full backdrop-blur-md transition-all group"
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                >
                    <ArrowLeft className="w-4 h-4 text-white/50 group-hover:text-white" />
                    <span className="text-xs font-mono text-white/50 group-hover:text-white uppercase">Module 04</span>
                </motion.button>


                {/* --- SECTION 1: HERO - "THE GLOBAL BRAIN" --- */}
                <section className="relative min-h-screen flex flex-col items-center justify-center p-6 overflow-hidden">

                    {/* Background Globe Visual */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none">
                        <div className="relative w-[800px] h-[800px] rounded-full border border-white/10 animate-[spin_60s_linear_infinite]">
                            {/* Meridians */}
                            <div className="absolute inset-0 rounded-full border border-white/5 rotate-45" />
                            <div className="absolute inset-0 rounded-full border border-white/5 -rotate-45" />
                            <div className="absolute inset-20 rounded-full border border-white/5" />
                            <div className="absolute inset-40 rounded-full border border-white/5" />

                            {/* Data Packets */}
                            <motion.div
                                className="absolute w-2 h-2 bg-emerald-500 rounded-full blur-[2px]"
                                animate={{ offsetDistance: "0%" }}
                                style={{ offsetPath: "path('M 400 0 A 400 400 0 0 1 400 800 A 400 400 0 0 1 400 0')" }} // Orbit path roughly
                                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                            />
                        </div>
                    </div>

                    <motion.div
                        className="relative z-10 text-center space-y-8 max-w-4xl"
                        style={{ y: heroY, opacity: heroOpacity }}
                    >
                        {/* Live Status Ticker */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="inline-flex items-center gap-4 px-6 py-2 bg-[#0A0A0A] border border-white/10 rounded-full backdrop-blur-md shadow-2xl"
                        >
                            <div className="flex items-center gap-2 border-r border-white/10 pr-4">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                                </span>
                                <span className="text-xs font-mono text-emerald-400 uppercase font-bold">Live Ingest</span>
                            </div>
                            <div className="flex gap-4 text-[10px] font-mono text-gray-400">
                                <span>DAT_PKT: 8442 MB/s</span>
                                <span className="text-blue-500">LATENCY: 12ms</span>
                                <span>NODES: 42 Active</span>
                            </div>
                        </motion.div>

                        <h1 className="text-6xl md:text-9xl font-black tracking-tighter leading-[0.85]">
                            GLOBAL <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-400 to-gray-600">OVERSIGHT.</span>
                        </h1>

                        <p className="text-xl md:text-2xl text-white/60 max-w-2xl mx-auto leading-relaxed font-light">
                            We map your entire digital footprint in real-time. Control the narrative from a single source of truth.
                        </p>
                    </motion.div>

                    <motion.div
                        className="absolute bottom-10 flex flex-col items-center gap-2"
                        animate={{ opacity: [0.3, 1, 0.3] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    >
                        <ChevronDown className="w-6 h-6 text-white/30" />
                    </motion.div>
                </section>


                {/* --- SECTION 2: MONITORING - "WINNERS VS LOSERS" (SIMPLIFIED) --- */}
                <section className="min-h-screen flex items-center justify-center p-6 bg-[#080808] border-t border-white/5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-20 max-w-7xl w-full items-center">

                        {/* Visual: Simple Ledger */}
                        <div className="order-2 md:order-1 relative h-[500px] w-full flex flex-col justify-center gap-6">

                            {/* Card 1: The Winner */}
                            <motion.div
                                className="w-full bg-[#111] rounded-xl border border-emerald-500 p-6 shadow-[0_0_30px_rgba(16,185,129,0.15)] relative overflow-hidden group"
                                initial={{ x: -50, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.8 }}
                            >
                                <div className="absolute inset-0 bg-emerald-500/5 group-hover:bg-emerald-500/10 transition-colors" />
                                <div className="flex justify-between items-center mb-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 bg-emerald-500/20 rounded-full flex items-center justify-center">
                                            <TrendingUp className="w-5 h-5 text-emerald-500" />
                                        </div>
                                        <div>
                                            <div className="text-white font-bold text-lg">Top Performer</div>
                                            <div className="text-xs text-emerald-500">Video ID: #8821</div>
                                        </div>
                                    </div>
                                    <div className="px-3 py-1 bg-emerald-500 text-black text-xs font-bold rounded-full">
                                        KEEP DOING THIS
                                    </div>
                                </div>
                                <div className="grid grid-cols-3 gap-4 border-t border-white/10 pt-4">
                                    <div>
                                        <div className="text-xs text-gray-500 uppercase">Views</div>
                                        <div className="text-xl font-bold text-white">4.2M</div>
                                    </div>
                                    <div>
                                        <div className="text-xs text-gray-500 uppercase">Retention</div>
                                        <div className="text-xl font-bold text-emerald-500">High</div>
                                    </div>
                                    <div>
                                        <div className="text-xs text-gray-500 uppercase">Revenue</div>
                                        <div className="text-xl font-bold text-white">$12.4k</div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Card 2: The Loser */}
                            <motion.div
                                className="w-full bg-[#0A0A0A] rounded-xl border border-white/5 p-6 opacity-50 grayscale hover:opacity-100 hover:grayscale-0 transition-all"
                                initial={{ x: -50, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 0.5 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                            >
                                <div className="flex justify-between items-center mb-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center">
                                            <Activity className="w-5 h-5 text-gray-500" />
                                        </div>
                                        <div>
                                            <div className="text-gray-400 font-bold text-lg">Underperforming</div>
                                            <div className="text-xs text-gray-600">Video ID: #8822</div>
                                        </div>
                                    </div>
                                    <div className="px-3 py-1 bg-white/10 text-gray-500 text-xs font-bold rounded-full">
                                        STOP DOING THIS
                                    </div>
                                </div>
                                <div className="grid grid-cols-3 gap-4 border-t border-white/5 pt-4 text-gray-500">
                                    <div>
                                        <div className="text-xs uppercase">Views</div>
                                        <div className="text-xl font-bold">12k</div>
                                    </div>
                                    <div>
                                        <div className="text-xs uppercase">Retention</div>
                                        <div className="text-xl font-bold text-red-900">Low</div>
                                    </div>
                                    <div>
                                        <div className="text-xs uppercase">Revenue</div>
                                        <div className="text-xl font-bold">$42</div>
                                    </div>
                                </div>
                            </motion.div>

                        </div>

                        {/* Copy */}
                        <div className="space-y-8 order-1 md:order-2">
                            <div className="inline-flex items-center gap-2 text-emerald-500 font-mono text-xs uppercase tracking-widest">
                                <Search className="w-4 h-4" />
                                <span>Performance Clarity</span>
                            </div>
                            <h2 className="text-5xl font-bold leading-tight">
                                KNOW WHAT <br />
                                <span className="text-emerald-500">WINS.</span>
                            </h2>
                            <p className="text-xl text-white/60 leading-relaxed font-light">
                                It's simple. Some posts make money, others waste time. <br /><br />
                                We give you a clear "Green Light" on what is working so you can double down, and a "Red Light" on what isn't. No complex charts, just answers.
                            </p>
                        </div>
                    </div>
                </section>


                {/* --- SECTION 3: INTELLIGENCE - "SCENARIO SIMULATOR" --- */}
                <section className="min-h-screen flex items-center justify-center p-6 bg-[#050505] border-t border-white/5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-20 max-w-7xl w-full items-center">

                        {/* Copy */}
                        <div className="order-2 md:order-1 space-y-8">
                            <div className="inline-flex items-center gap-2 text-blue-500 font-mono text-xs uppercase tracking-widest">
                                <Cpu className="w-4 h-4" />
                                <span>Predictive Modeling</span>
                            </div>
                            <h2 className="text-5xl font-bold leading-tight">
                                DON'T GUESS. <br />
                                <span className="text-blue-500">SIMULATE.</span>
                            </h2>
                            <p className="text-xl text-white/60 leading-relaxed font-light">
                                "What if we shifted 20% budget to Shorts?" <br />
                                Don't risk it in production. Use our "Scenario Simulator" to model the outcome based on your historical yield data. Track the projected impact before you spend a dime.
                            </p>
                        </div>

                        {/* Visual: The Simulator UI */}
                        <div className="order-1 md:order-2 w-full bg-[#111] rounded-2xl border border-white/10 p-8 shadow-2xl relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500" />

                            <div className="flex justify-between items-center mb-8">
                                <span className="text-xs font-mono text-gray-400 uppercase">Resource Allocation Model</span>
                                <Sliders className="w-5 h-5 text-gray-400" />
                            </div>

                            {/* Sliders */}
                            <div className="space-y-8 mb-8">
                                <div>
                                    <div className="flex justify-between text-sm mb-2 text-gray-300">
                                        <span>Long Form Production</span>
                                        <span>40%</span>
                                    </div>
                                    <div className="h-1 w-full bg-gray-800 rounded relative">
                                        <div className="absolute w-4 h-4 bg-white rounded-full -top-1.5 left-[40%] shadow cursor-pointer hover:scale-110 transition-transform" />
                                        <div className="h-full bg-blue-500 w-[40%]" />
                                    </div>
                                </div>
                                <div>
                                    <div className="flex justify-between text-sm mb-2 text-gray-300">
                                        <span>Short Form / TikTok</span>
                                        <span className="text-blue-400 font-bold">60%</span>
                                    </div>
                                    <div className="h-1 w-full bg-gray-800 rounded relative">
                                        <div className="absolute w-4 h-4 bg-blue-500 rounded-full -top-1.5 left-[60%] shadow-[0_0_10px_#3b82f6] cursor-pointer" />
                                        <div className="h-full bg-blue-500 w-[60%]" />
                                    </div>
                                </div>
                            </div>

                            {/* Projection Box */}
                            <div className="bg-[#0A0A0A] border border-blue-500/30 rounded-lg p-6 flex justify-between items-center">
                                <div>
                                    <div className="text-xs text-gray-500 uppercase font-bold">Projected Impact</div>
                                    <div className="text-xs text-gray-600">Based on 6mo trailing data</div>
                                </div>
                                <div className="text-right">
                                    <div className="text-3xl font-black text-white">+42.8%</div>
                                    <div className="text-xs text-emerald-500 font-bold">GROWTH VELOCITY</div>
                                </div>
                            </div>

                        </div>

                    </div>
                </section>


                {/* --- SECTION 4: REPORTING - "THE TRUST LAYER (DATA MINTING)" --- */}
                <section className="min-h-[80vh] flex flex-col items-center justify-center p-6 bg-[#080808] border-t border-white/5">
                    <div className="max-w-4xl w-full text-center mb-16 px-4">
                        <h2 className="text-5xl font-bold mb-6">FROM CHAOS TO <span className="text-emerald-500">CLARITY.</span></h2>
                        <p className="text-xl text-white/60 font-light">
                            We mint raw data into verified assets. Your weekly "Growth Intelligence" brief is designed for one thing: Building trust with stakeholders.
                        </p>
                    </div>

                    {/* Visual: Data Minting Animation */}
                    <div className="relative w-full max-w-lg aspect-square flex items-center justify-center">

                        {/* Particles Swirling In */}
                        {[...Array(20)].map((_, i) => (
                            <motion.div
                                key={i}
                                className="absolute w-1 h-1 bg-emerald-500/50 rounded-full"
                                initial={{
                                    x: (Math.random() - 0.5) * 600,
                                    y: (Math.random() - 0.5) * 600,
                                    opacity: 0,
                                    scale: 0
                                }}
                                whileInView={{
                                    x: 0,
                                    y: 0,
                                    opacity: [0, 1, 0],
                                    scale: [0, 1.5, 0]
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    delay: Math.random() * 2,
                                    ease: "easeInOut"
                                }}
                            />
                        ))}

                        {/* Central Forge */}
                        <motion.div
                            className="relative z-10 w-64 aspect-[3/4] bg-[#0A0A0A] border border-white/10 rounded-xl shadow-[0_0_100px_rgba(16,185,129,0.2)] flex flex-col items-center justify-center p-6 overflow-hidden"
                            initial={{ scale: 0.8, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.8 }}
                        >
                            {/* Scanning Light */}
                            <motion.div
                                className="absolute top-0 bottom-0 left-0 w-[400%] bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12"
                                animate={{ x: ["-100%", "50%"] }}
                                transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                            />

                            <CheckCircle2 className="w-12 h-12 text-emerald-500 mb-4" />
                            <div className="text-center">
                                <div className="text-lg font-bold text-white mb-1">VERIFIED BRIEF</div>
                                <div className="text-xs text-gray-500 font-mono">ID: 9942-AX // SECURE</div>
                            </div>

                            <div className="mt-8 w-full space-y-2">
                                <div className="h-1 w-full bg-white/10 rounded" />
                                <div className="h-1 w-2/3 bg-white/10 rounded" />
                                <div className="h-1 w-full bg-white/10 rounded" />
                            </div>
                        </motion.div>

                        {/* Glowing Ring */}
                        <div className="absolute inset-0 border border-emerald-500/10 rounded-full scale-150 animate-[spin_10s_linear_infinite]" />
                        <div className="absolute inset-10 border border-emerald-500/5 rounded-full scale-125 animate-[spin_15s_linear_infinite_reverse]" />

                    </div>
                </section>


                {/* --- NEXT STEP --- */}
                <section className="py-20 flex justify-center bg-[#050505] border-t border-white/5">
                    <Button onClick={onNext} className="group bg-transparent border border-white/10 text-white hover:bg-white/5 px-10 py-8 rounded-full text-xl flex items-center gap-4 transition-all">
                        <span className="font-mono text-sm text-gray-500 uppercase tracking-widest group-hover:text-white transition-colors">Next Module</span>
                        <span className="font-bold">External Ops</span>
                        <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                    </Button>
                </section>

                <div className="h-20" />
            </div>
        </motion.div>
    );
}
