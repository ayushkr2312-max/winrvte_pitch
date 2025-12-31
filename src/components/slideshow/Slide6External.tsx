"use client";

import { motion, useScroll, useTransform, useSpring, AnimatePresence } from "framer-motion";
import { ArrowLeft, ChevronDown, ExternalLink, Radar, User, ShieldAlert, Crosshair, Network, Zap, Check, Search, Map, Video, Gamepad2, PenTool, Briefcase } from "lucide-react";
import { Button } from "../ui/Button";
import { useRef, useState, useEffect } from "react";

interface SlideProps {
    isActive: boolean;
    onNext: () => void;
    onBack: () => void;
}

export function Slide6External({ isActive, onNext, onBack }: SlideProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        container: containerRef
    });

    const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

    // Power Line - Fiber Optic Pulse (Rapid)
    const powerLineOpacity = useTransform(smoothProgress, [0, 0.1], [0, 1]);
    const powerLineHeight = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);

    // Background parallax
    const bgY = useTransform(smoothProgress, [0, 1], ["0%", "20%"]);

    // Typing Animation State
    const [typingText, setTypingText] = useState("");
    const [showMatch, setShowMatch] = useState(false);

    useEffect(() => {
        const sequence = [
            { text: "Scout: Motion Designer (Budget: Low)", delay: 50 },
            { text: "Scout: Valorant IGL", delay: 100 }
        ];

        let currentIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        let timeout: ReturnType<typeof setTimeout>;

        const type = () => {
            const currentString = sequence[currentIndex].text;

            if (isDeleting) {
                if (charIndex > 0) {
                    setTypingText(currentString.substring(0, charIndex - 1));
                    charIndex--;
                    timeout = setTimeout(type, 30);
                } else {
                    isDeleting = false;
                    currentIndex = (currentIndex + 1) % sequence.length;
                    timeout = setTimeout(type, 500);
                }
            } else {
                if (charIndex < currentString.length) {
                    setTypingText(currentString.substring(0, charIndex + 1));
                    charIndex++;
                    timeout = setTimeout(type, 50);
                } else {
                    // Finished typing
                    setShowMatch(true);
                    timeout = setTimeout(() => {
                        setShowMatch(false);
                        isDeleting = true;
                        type();
                    }, 2000); // Hold match for 2s
                    return;
                }
            }
        };

        timeout = setTimeout(type, 1000);
        return () => clearTimeout(timeout);
    }, []);

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
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(0,191,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,191,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] opacity-30" />
                </motion.div>

                {/* CENTRAL POWER LINE (Fiber Optic - Rapid Pulse) */}
                <div className="fixed left-1/2 top-0 bottom-0 w-[2px] bg-white/5 -translate-x-1/2 z-10 hidden md:block" />
                <motion.div
                    className="fixed left-1/2 top-0 w-[1px] bg-blue-500 -translate-x-1/2 z-10 shadow-[0_0_20px_rgba(0,191,255,1)] hidden md:block"
                    style={{
                        height: powerLineHeight,
                        opacity: powerLineOpacity
                    }}
                >
                    {/* Rapid Pulses travelling down */}
                    <motion.div
                        className="absolute top-0 left-1/2 -translate-x-1/2 w-[3px] h-[50px] bg-white blur-[1px]"
                        animate={{ top: ["0%", "100%"], opacity: [0, 1, 0] }}
                        transition={{ duration: 0.5, repeat: Infinity, ease: "linear", repeatDelay: 0.1 }}
                    />
                    <motion.div
                        className="absolute top-0 left-1/2 -translate-x-1/2 w-[3px] h-[50px] bg-cyan-400 blur-[1px]"
                        animate={{ top: ["0%", "100%"], opacity: [0, 1, 0] }}
                        transition={{ duration: 0.8, repeat: Infinity, ease: "linear", delay: 0.3 }}
                    />
                </motion.div>


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


                {/* --- SECTION 1: HERO (THE WATCHTOWER) --- */}
                <section className="relative min-h-screen flex flex-col items-center justify-center p-6 md:p-20 z-20 overflow-hidden">

                    {/* Full Screen Radar Background */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-30 pointer-events-none">
                        <div className="relative w-[150vw] h-[150vw] md:w-[80vw] md:h-[80vw] border-[1px] border-blue-500/20 rounded-full flex items-center justify-center">
                            <div className="absolute inset-0 border-[1px] border-blue-500/20 rounded-full scale-75" />
                            <div className="absolute inset-0 border-[1px] border-blue-500/20 rounded-full scale-50" />
                            <div className="absolute inset-0 border-[1px] border-blue-500/20 rounded-full scale-25" />

                            {/* Scanning Beam */}
                            <motion.div
                                className="absolute inset-0 rounded-full bg-[conic-gradient(from_0deg,transparent_0deg,transparent_270deg,rgba(0,191,255,0.3)_360deg)]"
                                animate={{ rotate: 360 }}
                                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                            />
                        </div>
                    </div>

                    <div className="z-10 text-center space-y-6 max-w-4xl">
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 1 }}
                            className="inline-flex items-center gap-2 px-3 py-1 rounded border border-blue-500/50 bg-blue-500/10 text-blue-400 text-xs font-mono mb-4"
                        >
                            <Radar className="w-4 h-4 animate-spin-slow" /> SYSTEM_STATUS: SURVEILLANCE_ACTIVE
                        </motion.div>

                        <motion.h1
                            className="text-6xl md:text-8xl font-brand font-black leading-none text-white tracking-tight"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            SEE THE <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">WHOLE BOARD.</span>
                        </motion.h1>

                        <motion.p
                            className="text-xl md:text-2xl text-text-secondary max-w-2xl mx-auto"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                        >
                            Your competition is reacting. <span className="text-white font-bold">You are predicting.</span> <br />
                            Total market surveillance, 24/7.
                        </motion.p>
                    </div>

                    {/* Scroll Indicator */}
                    <motion.div
                        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-cyan-400/60"
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    >
                        <span className="text-xs tracking-[0.2em] font-display uppercase">Initiate Scan</span>
                        <ChevronDown className="w-6 h-6" />
                    </motion.div>
                </section>


                {/* --- SECTION 2: THE SHADOW ROSTER (TALENT PIPELINE) --- */}
                <section className="relative min-h-screen flex flex-col items-center justify-center p-6 md:p-20 z-20 bg-gradient-to-b from-transparent to-obsidian/90">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 w-full max-w-6xl items-center">

                        {/* Left: Scanner Grid Animation */}
                        <div className="relative w-full h-[400px] bg-black/50 border border-white/10 rounded-xl overflow-hidden p-4">
                            <div className="grid grid-cols-2 gap-4 h-full">
                                {[...Array(4)].map((_, i) => (
                                    <div key={i} className="relative bg-white/5 rounded-lg border border-white/5 flex flex-col items-center justify-center p-4 group">
                                        <div className="w-16 h-16 rounded-full bg-gray-700 mb-3 opacity-50 transition-opacity duration-300 group-hover:opacity-100 relative overflow-hidden">
                                            <User className="w-full h-full p-3 text-gray-500" />
                                        </div>
                                        <div className="h-3 w-24 bg-gray-700 rounded mb-2 opacity-50" />
                                        <div className="h-2 w-16 bg-gray-800 rounded opacity-50" />

                                        {/* Match Highlight Overlay (Only on 2nd card) */}
                                        {i === 1 && (
                                            <motion.div
                                                className="absolute inset-0 bg-blue-500/20 border-2 border-blue-500 rounded-lg flex flex-col items-center justify-center z-10"
                                                initial={{ opacity: 0 }}
                                                whileInView={{ opacity: 1 }}
                                                viewport={{ margin: "-20%" }}
                                                transition={{ duration: 0.5, delay: 1 }} // Delays until scanner passes
                                            >
                                                <div className="w-16 h-16 rounded-full bg-blue-600 mb-3 flex items-center justify-center shadow-[0_0_20px_blue]">
                                                    <Check className="w-8 h-8 text-white" />
                                                </div>
                                                <div className="bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded mb-1">98% MATCH</div>
                                                <div className="text-blue-300 text-[10px] font-mono">UNDER BUDGET</div>
                                            </motion.div>
                                        )}
                                    </div>
                                ))}
                            </div>

                            {/* Scanning Bar */}
                            <motion.div
                                className="absolute top-0 left-0 right-0 h-1 bg-cyan-400 shadow-[0_0_20px_cyan] z-20"
                                initial={{ top: "0%" }}
                                whileInView={{ top: "100%" }}
                                transition={{ duration: 2, ease: "linear", repeat: Infinity, repeatDelay: 1 }}
                            >
                                <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-t from-cyan-400/20 to-transparent" />
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
                                NEVER PANIC <br /> <span className="text-blue-500">HIRE AGAIN.</span>
                            </motion.h2>
                            <motion.p
                                className="text-lg text-text-secondary"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                            >
                                We maintain a <span className="text-white font-bold">'Shadow Roster'</span> of free agents that fit your specific playstyle and budget. When a player leaves, you have 3 replacements ready instantly.
                            </motion.p>
                        </div>

                    </div>
                </section>


                {/* --- SECTION 3: THE TALENT ENGINE (TOTAL SCOUTING) --- */}
                <section className="relative min-h-screen flex flex-col items-center justify-center p-6 md:p-20 z-20">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 w-full max-w-6xl items-center">

                        {/* Left: Animated Search & Network Web */}
                        <div className="relative h-[400px] w-full flex flex-col items-center justify-center">

                            {/* Search Interface */}
                            <motion.div
                                className="w-full max-w-md bg-black/80 border border-white/20 rounded-xl p-6 shadow-2xl mb-12 relative z-30 backdrop-blur-md"
                                initial={{ y: 20, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true }}
                            >
                                <div className="flex items-center gap-3 border-b border-white/10 pb-4 mb-4">
                                    <Search className="w-5 h-5 text-gray-400" />
                                    <div className="font-mono text-white/80 h-6 border-r-2 border-cyan-400 animate-pulse pr-1">
                                        {typingText}
                                    </div>
                                </div>
                                <div className="h-12 flex items-center justify-center">
                                    <AnimatePresence mode="wait">
                                        {showMatch && (
                                            <motion.div
                                                initial={{ scale: 0.8, opacity: 0 }}
                                                animate={{ scale: 1, opacity: 1 }}
                                                exit={{ scale: 0.8, opacity: 0 }}
                                                className="flex items-center gap-2 bg-blue-500/20 text-blue-400 border border-blue-500/50 px-4 py-2 rounded-full font-bold shadow-[0_0_15px_rgba(59,130,246,0.3)]"
                                            >
                                                <Check className="w-4 h-4" /> MATCH FOUND
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </motion.div>

                            {/* Network Web Graphic */}
                            <div className="absolute inset-0 flex items-center justify-center pt-20">
                                {/* Center Node */}
                                <div className="relative z-20 w-24 h-24 bg-black border border-white/20 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(255,255,255,0.1)]">
                                    <Network className="w-10 h-10 text-white" />
                                    <div className="absolute inset-0 border border-cyan-500/30 rounded-full animate-ping" />
                                </div>

                                {/* Connecting Lines */}
                                <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
                                    <line x1="50%" y1="60%" x2="20%" y2="40%" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
                                    <line x1="50%" y1="60%" x2="80%" y2="40%" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
                                    <line x1="50%" y1="60%" x2="20%" y2="80%" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
                                    <line x1="50%" y1="60%" x2="80%" y2="80%" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
                                </svg>

                                {/* Orbiting Nodes */}
                                <motion.div className="absolute top-[40%] left-[20%] p-3 bg-gray-900 border border-white/10 rounded-full text-blue-400" animate={{ y: [0, -10, 0] }} transition={{ duration: 3, repeat: Infinity }}>
                                    <Gamepad2 className="w-6 h-6" />
                                </motion.div>
                                <motion.div className="absolute top-[40%] right-[20%] p-3 bg-gray-900 border border-white/10 rounded-full text-purple-400" animate={{ y: [0, 10, 0] }} transition={{ duration: 4, repeat: Infinity }}>
                                    <Video className="w-6 h-6" />
                                </motion.div>
                                <motion.div className="absolute bottom-[20%] left-[20%] p-3 bg-gray-900 border border-white/10 rounded-full text-green-400" animate={{ y: [0, 10, 0] }} transition={{ duration: 3.5, repeat: Infinity }}>
                                    <Briefcase className="w-6 h-6" />
                                </motion.div>
                                <motion.div className="absolute bottom-[20%] right-[20%] p-3 bg-gray-900 border border-white/10 rounded-full text-pink-400" animate={{ y: [0, -10, 0] }} transition={{ duration: 4.5, repeat: Infinity }}>
                                    <PenTool className="w-6 h-6" />
                                </motion.div>
                            </div>

                        </div>

                        {/* Right: Copy */}
                        <div className="text-left space-y-6">
                            <motion.h2
                                className="text-4xl md:text-5xl font-display font-bold leading-tight text-white/90"
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                            >
                                WE SCOUT <br /> <span className="text-blue-500">EVERYTHING.</span> <br /> SO YOU DON'T HAVE TO.
                            </motion.h2>
                            <motion.p
                                className="text-lg text-text-secondary"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                            >
                                Need a motion designer for a tournament intro? A temporary substitute player? A specialized coach? <span className="text-white italic">Our system + human network scouts talent across all roles within your exact budget.</span>
                            </motion.p>
                            <motion.div
                                className="inline-block px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded text-blue-400 font-bold tracking-wide text-sm"
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                            >
                                STOP SCROLLING TWITTER. START HIRING WINNERS.
                            </motion.div>
                        </div>

                    </div>
                </section>

                {/* --- SECTION 4: COMPETITOR X-RAY (ENEMY INTEL) --- */}
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
                                THEIR STRATS. <br /> <span className="text-red-500">YOUR DATABASE.</span>
                            </motion.h2>
                            <motion.p
                                className="text-lg text-text-secondary"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                            >
                                Why watch 50 hours of VODs? Our system scrapes enemy match history and gives you a one-page <span className="text-red-400">'Cheat Sheet'</span> on their weaknesses before the match starts.
                            </motion.p>
                        </div>

                        {/* Right: Tactical Map Visualization */}
                        <div className="relative h-[400px] w-full bg-[#1a1a1a] rounded-xl border border-red-500/30 p-4 shadow-2xl order-1 md:order-2 overflow-hidden flex flex-col">
                            {/* Header */}
                            <div className="flex justify-between items-center mb-4 border-b border-white/10 pb-2">
                                <div className="flex items-center gap-2 text-red-500 text-xs font-mono font-bold animate-pulse">
                                    <ShieldAlert className="w-4 h-4" /> THREAT_DETECTED
                                </div>
                                <div className="text-gray-500 text-xs font-mono">LIVE_FEED</div>
                            </div>

                            {/* Map Content */}
                            <div className="flex-1 relative bg-grid-white/[0.05] rounded border border-white/5 p-4">
                                {/* Map Grid */}
                                <div className="absolute inset-0 grid grid-cols-4 grid-rows-4">
                                    {[...Array(16)].map((_, i) => (
                                        <div key={i} className="border-[0.5px] border-white/5" />
                                    ))}
                                </div>

                                {/* Enemy Markers */}
                                <motion.div
                                    className="absolute top-[30%] left-[20%] w-3 h-3 bg-red-500 rounded-full shadow-[0_0_10px_red]"
                                    animate={{ left: ["20%", "40%", "20%"], top: ["30%", "25%", "30%"] }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                                />
                                <motion.div
                                    className="absolute top-[60%] right-[30%] w-3 h-3 bg-red-500 rounded-full shadow-[0_0_10px_red]"
                                    animate={{ right: ["30%", "50%", "30%"], top: ["60%", "65%", "60%"] }}
                                    transition={{ duration: 5, repeat: Infinity, ease: "linear", delay: 1 }}
                                />

                                {/* Path Prediction Lines */}
                                <svg className="absolute inset-0 w-full h-full pointer-events-none">
                                    <motion.path
                                        d="M 120,80 L 250,70 L 120,80"
                                        stroke="rgba(239,68,68,0.3)"
                                        strokeWidth="1"
                                        fill="none"
                                        strokeDasharray="4,4"
                                    />
                                </svg>

                                {/* Side Panel Overlay */}
                                <div className="absolute right-2 top-2 w-32 bg-black/80 border border-red-500/30 p-2 rounded backdrop-blur-sm">
                                    <div className="text-[10px] text-gray-400 mb-1">KEY BANS</div>
                                    <div className="flex gap-1 mb-2">
                                        <div className="w-6 h-6 bg-red-500/20 rounded border border-red-500/50 flex items-center justify-center text-[8px] text-red-300">VPR</div>
                                        <div className="w-6 h-6 bg-red-500/20 rounded border border-red-500/50 flex items-center justify-center text-[8px] text-red-300">OMN</div>
                                    </div>
                                    <div className="text-[10px] text-gray-400 mb-1">WIN RATE</div>
                                    <div className="text-red-400 text-lg font-bold leading-none">62%</div>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>


                {/* --- SECTION 4: MARKET ORACLE (CLOSING) --- */}
                <section className="relative min-h-[50vh] flex flex-col items-center justify-center p-6 md:p-20 z-20 bg-[#050505] border-t border-white/5">

                    {/* Node Graph Background */}
                    <div className="absolute inset-0 opacity-20 pointer-events-none">
                        <svg className="w-full h-full">
                            <line x1="10%" y1="20%" x2="50%" y2="50%" stroke="gray" strokeWidth="0.5" />
                            <line x1="90%" y1="20%" x2="50%" y2="50%" stroke="gray" strokeWidth="0.5" />
                            <line x1="20%" y1="80%" x2="50%" y2="50%" stroke="gray" strokeWidth="0.5" />
                            <line x1="80%" y1="80%" x2="50%" y2="50%" stroke="gray" strokeWidth="0.5" />
                            <circle cx="50%" cy="50%" r="5" fill="white" />
                        </svg>
                    </div>

                    <div className="mb-12 text-center relative z-10">
                        <motion.h3
                            className="text-4xl md:text-5xl font-display font-black text-white mb-4 uppercase"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            THE UNFAIR <span className="text-cyan-400">ADVANTAGE.</span>
                        </motion.h3>
                        <p className="text-text-secondary max-w-xl mx-auto text-lg">
                            While they play checkers, you play chess. Winrvte gives you the information dominance to outlast, outsmart, and outgrow the tier you are in.
                        </p>
                    </div>

                    {/* Final CTA Button */}
                    <motion.div
                        className="relative group"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg blur opacity-40 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
                        <Button onClick={onNext} className="relative bg-black text-white border border-white/10 px-12 py-8 rounded-lg text-2xl font-black tracking-widest hover:bg-zinc-900 transition-all shadow-2xl">
                            INITIALIZE PARTNERSHIP <Zap className="w-6 h-6 ml-3 fill-yellow-400 text-yellow-400" />
                        </Button>
                    </motion.div>
                </section>

                {/* Bottom spacer */}
                <div className="h-20" />
            </div>
        </motion.div>
    );
}
