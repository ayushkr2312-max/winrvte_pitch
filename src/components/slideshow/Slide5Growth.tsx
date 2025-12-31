"use client";

import { motion, useScroll, useTransform, useSpring, AnimatePresence } from "framer-motion";
import { ArrowLeft, ChevronDown, ExternalLink, Play, BarChart3, TrendingUp, Users, FileText, CheckCircle2, Radar, Target, Eye } from "lucide-react";
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

    // Power Line Glow - Upward flow
    const powerLineOpacity = useTransform(smoothProgress, [0, 0.1], [0, 1]);
    const powerLineHeight = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);

    // Background parallax
    const bgY = useTransform(smoothProgress, [0, 1], ["0%", "20%"]);

    // Waveform Animation State
    const [waveformPhase, setWaveformPhase] = useState("chaos"); // chaos -> stable -> exponential

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
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(168,85,247,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(168,85,247,0.03)_1px,transparent_1px)] bg-[size:100px_100px] opacity-20" />
                </motion.div>

                {/* CENTRAL POWER LINE (Upward Flow) */}
                <div className="fixed left-1/2 top-0 bottom-0 w-[2px] bg-white/5 -translate-x-1/2 z-10 hidden md:block" />
                <motion.div
                    className="fixed left-1/2 bottom-0 w-[2px] bg-purple-500 -translate-x-1/2 z-10 shadow-[0_0_20px_rgba(168,85,247,0.8)] hidden md:block"
                    style={{
                        height: powerLineHeight,
                        opacity: powerLineOpacity
                    }}
                />

                {/* Data Packets (Floating Particles Upwards) */}
                {[...Array(5)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="fixed left-1/2 w-1.5 h-1.5 bg-white rounded-full z-20 hidden md:block shadow-[0_0_10px_white]"
                        style={{ x: "-50%" }}
                        animate={{
                            y: ["100vh", "-10vh"],
                            opacity: [0, 1, 0]
                        }}
                        transition={{
                            duration: 3 + i,
                            repeat: Infinity,
                            delay: i * 0.8,
                            ease: "linear"
                        }}
                    />
                ))}


                {/* Back Button - Left Edge Symmetrical */}
                <motion.div
                    className="fixed left-8 top-1/2 -translate-y-1/2 z-50 mix-blend-difference"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 }}
                >
                    <button
                        onClick={onBack}
                        className="group p-4 bg-white/10 hover:bg-white/20 border border-white/30 hover:border-white rounded-full transition-all duration-300 backdrop-blur-sm"
                    >
                        <ArrowLeft className="w-6 h-6 text-white transition-colors" />
                    </button>
                </motion.div>


                {/* --- SECTION 1: HERO (THE HOOK) --- */}
                <section className="relative min-h-screen flex flex-col items-center justify-center p-6 md:p-20 z-20">
                    <div className="w-full max-w-5xl flex flex-col items-center gap-12">

                        {/* Waveform Visualization */}
                        <div className="relative w-full h-64 md:h-80 flex items-center justify-center">
                            <svg className="w-full h-full overflow-visible">
                                <defs>
                                    <linearGradient id="waveGradient" x1="0" y1="0" x2="1" y2="0">
                                        <stop offset="0%" stopColor="#ef4444" />
                                        <stop offset="50%" stopColor="#a855f7" />
                                        <stop offset="100%" stopColor="#3b82f6" />
                                    </linearGradient>
                                </defs>

                                {/* Base Line */}
                                <line x1="0" y1="50%" x2="100%" y2="50%" stroke="white" strokeOpacity="0.1" strokeWidth="1" />

                                {/* Animated Path */}
                                <motion.path
                                    d="M0,150 Q50,100 100,200 T200,150 T300,100 T400,200 T500,50" // Placeholder curved path
                                    fill="none"
                                    stroke="url(#waveGradient)"
                                    strokeWidth="4"
                                    strokeLinecap="round"
                                    initial={{ pathLength: 0, opacity: 0 }}
                                    animate={{
                                        pathLength: 1,
                                        opacity: 1,
                                        d: [
                                            "M0,150 Q20,180 40,120 T80,160 T120,100 T160,180 T200,140 T240,190 T280,110 T320,170 T360,130 T400,180 T800,150", // Chaos
                                            "M0,150 Q200,150 400,150 T800,150", // Flat
                                            "M0,150 Q400,150 600,100 T800,10"  // Exponential
                                        ]
                                    }}
                                    transition={{
                                        duration: 4,
                                        times: [0, 0.4, 1],
                                        ease: "easeInOut",
                                        repeat: Infinity,
                                        repeatDelay: 1
                                    }}
                                />
                            </svg>

                            {/* Overlay Text for Visual */}
                            <motion.div
                                className="absolute text-center bg-obsidian/80 backdrop-blur px-4 py-2 border border-white/10 rounded-lg"
                                animate={{ opacity: [0, 1, 1, 0], scale: [0.9, 1, 1, 0.9] }}
                                transition={{ duration: 4, times: [0, 0.2, 0.8, 1], repeat: Infinity, repeatDelay: 1 }}
                            >
                                <span className="text-xs font-mono text-cyan-400">OPTIMIZING_ENGAGEMENT...</span>
                            </motion.div>
                        </div>

                        {/* Text Content */}
                        <div className="text-center space-y-6 max-w-3xl z-10">
                            <motion.h1
                                className="text-5xl md:text-7xl font-brand font-black leading-tight text-white uppercase"
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8 }}
                            >
                                Content without data <br /> is just <span className="text-red-500 line-through decoration-4">noise.</span>
                            </motion.h1>
                            <motion.p
                                className="text-xl md:text-2xl text-text-secondary"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.4 }}
                            >
                                Stop burning cash on high-production edits that nobody watches. <br />
                                <span className="text-purple-400 font-bold">Start engineering virality.</span>
                            </motion.p>
                        </div>
                    </div>

                    {/* Scroll Indicator */}
                    <motion.div
                        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-purple-400/60"
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    >
                        <span className="text-xs tracking-[0.2em] font-display uppercase">Scroll to Analyze</span>
                        <ChevronDown className="w-6 h-6" />
                    </motion.div>
                </section>


                {/* --- SECTION 2: THE ANATOMY OF VIRALITY --- */}
                <section className="relative min-h-screen flex flex-col items-center justify-center p-6 md:p-20 z-20 bg-gradient-to-b from-transparent to-obsidian/90">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 w-full max-w-6xl items-center">

                        {/* Left: Exploding UI Animation */}
                        <div className="relative h-[500px] w-full flex items-center justify-center">
                            {/* Base Video Player */}
                            <motion.div
                                className="absolute w-[300px] h-[500px] bg-black border border-white/20 rounded-2xl overflow-hidden shadow-2xl z-30"
                                initial={{ y: 50, rotateY: -10 }}
                                whileInView={{ y: 0, rotateY: 0 }}
                                transition={{ duration: 0.8 }}
                            >
                                {/* Fake Video Content */}
                                <div className="absolute inset-0 bg-gray-800 flex items-center justify-center">
                                    <Play className="w-12 h-12 text-white/50 fill-white/50" />
                                </div>
                                <div className="absolute bottom-0 inset-x-0 h-1/3 bg-gradient-to-t from-black to-transparent" />
                                <div className="absolute bottom-6 left-6 text-white font-bold">Failed_Vlog_01.mp4</div>
                            </motion.div>

                            {/* Exploded Data Layer 1: Retention */}
                            <motion.div
                                className="absolute w-[340px] h-[200px] bg-obsidian/90 border border-red-500/50 rounded-xl p-4 shadow-xl z-40 backdrop-blur-md"
                                initial={{ x: 0, scale: 0.8, opacity: 0 }}
                                whileInView={{ x: 180, y: -100, scale: 1, opacity: 1 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                            >
                                <div className="flex justify-between items-center mb-2">
                                    <span className="text-xs text-red-400 font-mono">RETENTION DROPOFF</span>
                                    <TrendingUp className="w-4 h-4 text-red-500" />
                                </div>
                                <div className="h-24 w-full bg-red-500/10 rounded relative overflow-hidden">
                                    <svg className="w-full h-full" preserveAspectRatio="none">
                                        <path d="M0,20 L50,25 L100,80 L300,90" fill="none" stroke="#ef4444" strokeWidth="2" />
                                        <circle cx="100" cy="80" r="4" fill="#ef4444" />
                                    </svg>
                                    <div className="absolute top-[80px] left-[100px] bg-red-500 text-black text-[10px] px-1 rounded transform -translate-y-full -translate-x-1/2 mt-1">
                                        -45% @ 0:03
                                    </div>
                                </div>
                            </motion.div>

                            {/* Exploded Data Layer 2: Sentiment */}
                            <motion.div
                                className="absolute w-[340px] h-[150px] bg-obsidian/90 border border-blue-500/50 rounded-xl p-4 shadow-xl z-40 backdrop-blur-md"
                                initial={{ x: 0, scale: 0.8, opacity: 0 }}
                                whileInView={{ x: 180, y: 120, scale: 1, opacity: 1 }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                            >
                                <div className="flex justify-between items-center mb-2">
                                    <span className="text-xs text-blue-400 font-mono">AUDIENCE SENTIMENT</span>
                                    <Users className="w-4 h-4 text-blue-500" />
                                </div>
                                <div className="space-y-2">
                                    <div className="flex items-center gap-2 text-xs text-gray-400">
                                        <span>Positive</span>
                                        <div className="h-1 flex-1 bg-gray-700 rounded-full overflow-hidden">
                                            <div className="h-full bg-green-500 w-[70%]" />
                                        </div>
                                        <span>70%</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-xs text-gray-400">
                                        <span>Negative</span>
                                        <div className="h-1 flex-1 bg-gray-700 rounded-full overflow-hidden">
                                            <div className="h-full bg-red-500 w-[12%]" />
                                        </div>
                                        <span>12%</span>
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        {/* Right: Copy */}
                        <div className="text-left space-y-6">
                            <motion.h2
                                className="text-4xl md:text-5xl font-display font-bold leading-tight text-white/90"
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                            >
                                WE DON'T GUESS. <br /> <span className="text-purple-500">WE MEASURE.</span>
                            </motion.h2>
                            <motion.p
                                className="text-lg text-text-secondary"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                            >
                                Why did your last video flop? Was it the thumbnail? The pacing? Our system dissects every frame. We tell you: <span className="text-white italic">"Cut the intro by 3 seconds"</span> and watch retention double.
                            </motion.p>
                        </div>
                    </div>
                </section>


                {/* --- SECTION 3: THE SPONSOR 'KILL SHEET' --- */}
                <section className="relative min-h-screen flex flex-col items-center justify-center p-6 md:p-20 z-20">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 w-full max-w-6xl items-center">

                        {/* Left: Copy */}
                        <div className="text-left space-y-6 order-2 md:order-1">
                            <motion.h2
                                className="text-4xl md:text-5xl font-display font-bold leading-tight text-white/90"
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                            >
                                TURN LIKES <br /> INTO <span className="text-green-500">LEVERAGE.</span>
                            </motion.h2>
                            <motion.p
                                className="text-lg text-text-secondary"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                            >
                                Sponsors don't care about your passion. They care about their logo visibility. We auto-generate the reports that prove your ROI and help you close the deal.
                            </motion.p>
                        </div>

                        {/* Right: Morphing Animation (Raw Data -> PDF) */}
                        <div className="relative h-[400px] w-full flex items-center justify-center order-1 md:order-2">
                            {/* Raw Data Particles */}
                            <motion.div
                                className="absolute grid grid-cols-4 gap-2 w-48"
                                initial={{ opacity: 1 }}
                                whileInView={{ opacity: 0, scale: 0.5 }}
                                transition={{ duration: 1, delay: 1 }}
                            >
                                {[...Array(16)].map((_, i) => (
                                    <motion.div
                                        key={i}
                                        className="h-8 bg-gray-800 rounded border border-gray-700 flex items-center justify-center"
                                        initial={{ scale: 0 }}
                                        whileInView={{ scale: 1 }}
                                        transition={{ delay: i * 0.05 }}
                                    >
                                        <span className="text-[6px] text-green-500 font-mono">101</span>
                                    </motion.div>
                                ))}
                            </motion.div>

                            {/* Resulting PDF Icon */}
                            <motion.div
                                className="absolute w-40 h-52 bg-white rounded-lg shadow-[0_0_50px_rgba(16,185,129,0.4)] flex flex-col items-center p-6"
                                initial={{ scale: 0, opacity: 0, rotate: 10 }}
                                whileInView={{ scale: 1, opacity: 1, rotate: 0 }}
                                transition={{ duration: 0.8, delay: 1.5, type: "spring" }}
                            >
                                <div className="w-full h-20 bg-gray-100 rounded mb-4 flex items-center justify-center">
                                    <BarChart3 className="w-10 h-10 text-gray-400" />
                                </div>
                                <div className="w-full h-2 bg-gray-200 rounded mb-2" />
                                <div className="w-3/4 h-2 bg-gray-200 rounded mb-2" />
                                <div className="w-full h-2 bg-gray-200 rounded mb-4" />

                                <motion.div
                                    className="mt-auto flex items-center gap-2 border-2 border-green-500 px-3 py-1 rounded text-green-600 font-bold tracking-wider"
                                    initial={{ scale: 1.5, opacity: 0 }}
                                    whileInView={{ scale: 1, opacity: 1 }}
                                    transition={{ delay: 2.2, type: "spring" }}
                                >
                                    <CheckCircle2 className="w-4 h-4" /> APPROVED
                                </motion.div>
                            </motion.div>
                        </div>

                    </div>
                </section>


                {/* --- SECTION 4: TREND PREDICTION (RADAR) --- */}
                <section className="relative min-h-[50vh] flex flex-col items-center justify-center p-6 md:p-20 z-20 bg-[#050505] border-t border-white/5">

                    <div className="mb-12 text-center">
                        <motion.h3
                            className="text-2xl md:text-3xl font-display font-bold text-white mb-2"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            RIDE THE WAVE. <span className="text-blue-400">DON'T CHASE IT.</span>
                        </motion.h3>
                        <p className="text-text-secondary max-w-xl">
                            Our algorithms flag T2/T3 content trends 48 hours before they peak. Be the first to post, not the last.
                        </p>
                    </div>

                    {/* Timeline Graphic */}
                    <div className="relative w-full max-w-4xl h-32 flex items-center">
                        {/* Line */}
                        <div className="absolute inset-x-0 h-1 bg-gray-800 rounded-full" />

                        {/* Competitors Marker (Behind) */}
                        <div className="absolute left-[20%] top-1/2 -translate-y-1/2 flex flex-col items-center gap-2 opacity-50">
                            <div className="w-4 h-4 bg-gray-500 rounded-full" />
                            <span className="text-xs text-gray-500 uppercase">Competitors</span>
                        </div>

                        {/* You Marker (Ahead on Rising Wave) */}
                        <motion.div
                            className="absolute left-[70%] top-1/2 flex flex-col items-center gap-2"
                            initial={{ y: "-50%", opacity: 0 }}
                            whileInView={{ y: "-80%", opacity: 1 }} // Moves up to ride the wave
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.2 }}
                        >
                            <div className="relative">
                                <div className="w-6 h-6 bg-blue-500 rounded-full shadow-[0_0_20px_blue]" />
                                <div className="absolute inset-0 bg-blue-400 rounded-full animate-ping" />
                            </div>
                            <span className="text-sm text-blue-400 font-bold uppercase">YOU (Early Adopter)</span>
                        </motion.div>

                        {/* Wave Graphic overlay */}
                        <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible">
                            <path d="M 0,16 L 500,16 C 600,16 700,-50 800,-50" fill="none" stroke="url(#waveTrend)" strokeWidth="2" strokeDasharray="5,5" opacity="0.5" />
                            <defs>
                                <linearGradient id="waveTrend" x1="0" y1="0" x2="1" y2="0">
                                    <stop offset="0%" stopColor="#4b5563" />
                                    <stop offset="100%" stopColor="#3b82f6" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>


                    {/* Next Module Button */}
                    <motion.div
                        className="mt-20"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Button onClick={onNext} className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/50 px-8 py-6 rounded-full text-lg font-bold hover:bg-emerald-500 hover:text-white transition-all">
                            NEXT MODULE: EXTERNAL (SCOUTING) <ExternalLink className="w-5 h-5 ml-2" />
                        </Button>
                    </motion.div>
                </section>

                {/* Bottom spacer */}
                <div className="h-20" />
            </div>
        </motion.div>
    );
}
