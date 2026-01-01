"use client";

import { motion, useScroll, useTransform, useSpring, AnimatePresence } from "framer-motion";
import { ArrowLeft, ChevronDown, Radar, User, ShieldAlert, Zap, Check, Search, Crosshair, BarChart2, Cpu, Scan, Target, AlertTriangle, Layers, Database, Palette, Video, Gavel, Network, Users, LayoutGrid, Globe } from "lucide-react";
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

    // Background Parallax
    const bgY = useTransform(smoothProgress, [0, 1], ["0%", "20%"]);
    const heroOpacity = useTransform(smoothProgress, [0, 0.2], [1, 0]);

    // --- SIGNAL CONSTELLATION STATE ---
    const [activeIndex, setActiveIndex] = useState(0);
    const signalNodes = [
        {
            id: "CREATIVE",
            label: "DESIGNERS",
            color: "purple", // Tailwind color name mapping handled in render
            position: { top: "20%", left: "20%" }, // Top Left
            beamPath: "M 150 150 L 60 60", // From Center (150,150) to Node
            card: {
                role: "SR. DESIGNER",
                tier: "TIER 1 VETTED",
                metric: "24h TURNAROUND"
            }
        },
        {
            id: "MEDIA",
            label: "EDITORS",
            color: "amber",
            position: { top: "20%", right: "20%" }, // Top Right
            beamPath: "M 150 150 L 240 60",
            card: {
                role: "VIDEO EDITOR",
                tier: "DOCUMENTARY SPEC",
                metric: "1M+ VIEWS"
            }
        },
        {
            id: "OPS",
            label: "STAFFS",
            color: "emerald",
            position: { bottom: "20%", left: "50%" }, // Bottom Center
            beamPath: "M 150 150 L 150 240",
            card: {
                role: "KEY STAFF",
                tier: "CRISIS EXPERT",
                metric: "<1HR RESPONSE"
            }
        }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % signalNodes.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    const activeNode = signalNodes[activeIndex];

    // Color helpers
    const getColor = (color: string) => {
        if (color === "purple") return "text-purple-400 border-purple-500 bg-purple-500 shadow-purple-500/50";
        if (color === "amber") return "text-amber-400 border-amber-500 bg-amber-500 shadow-amber-500/50";
        if (color === "emerald") return "text-emerald-400 border-emerald-500 bg-emerald-500 shadow-emerald-500/50";
        return "text-white border-white bg-white";
    };

    if (!isActive) return null;

    return (
        <motion.div
            className="absolute inset-0 bg-obsidian z-20 overflow-hidden font-brand text-white selection:bg-blue-500/30"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <div
                ref={containerRef}
                className="absolute inset-0 overflow-y-auto scroll-smooth no-scrollbar perspective-1000"
                style={{ scrollBehavior: "smooth" }}
            >
                {/* --- FIXED BACKGROUNDS --- */}
                <motion.div className="fixed inset-0 pointer-events-none z-0" style={{ y: bgY }}>
                    {/* Clean minimalist grid */}
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />
                </motion.div>

                {/* Back Navigation */}
                <motion.button
                    onClick={onBack}
                    className="fixed left-6 top-8 z-50 flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full backdrop-blur-md transition-all group"
                >
                    <ArrowLeft className="w-4 h-4 text-white/50 group-hover:text-white" />
                    <span className="text-xs font-mono text-white/50 group-hover:text-white uppercase">Module 05</span>
                </motion.button>


                {/* --- SECTIONS 1 & 2 (HERO & ROSTER) UNCHANGED --- */}
                <section className="relative min-h-screen flex flex-col items-center justify-center p-6 md:p-20 z-20 overflow-hidden pointer-events-none">
                    <motion.div style={{ opacity: heroOpacity }} className="text-center w-full flex flex-col items-center">
                        <div className="absolute inset-0 flex items-center justify-center opacity-30 pointer-events-none">
                            <div className="relative w-[80vw] h-[80vw] border-[1px] border-blue-500/20 rounded-full flex items-center justify-center">
                                <motion.div className="absolute inset-0 rounded-full bg-[conic-gradient(from_0deg,transparent_0deg,transparent_270deg,rgba(0,191,255,0.3)_360deg)]" animate={{ rotate: 360 }} transition={{ duration: 8, repeat: Infinity, ease: "linear" }} />
                            </div>
                        </div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded border border-blue-500/50 bg-blue-500/10 text-blue-400 text-xs font-mono mb-6">
                            <Radar className="w-4 h-4 animate-spin-slow" /> SYSTEM: SCANNING
                        </div>
                        <h1 className="text-6xl md:text-9xl font-black leading-none tracking-tighter mb-8">
                            SEE THE <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">WHOLE BOARD.</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-white/60 max-w-2xl mx-auto font-light">
                            Your competition is reacting. <span className="text-white font-bold">You are predicting.</span>
                        </p>
                    </motion.div>
                </section>

                <section className="relative min-h-screen flex items-center justify-center p-6 border-t border-white/5 bg-[#080808]">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-20 w-full max-w-7xl items-center z-10">
                        <motion.div className="w-full bg-[#111] border border-white/10 rounded-2xl overflow-hidden shadow-2xl relative" initial={{ x: -50, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 0.8 }}>
                            <div className="h-12 bg-white/5 border-b border-white/10 flex items-center justify-between px-4">
                                <div className="flex items-center gap-2 text-xs font-mono text-gray-400"><Database className="w-3 h-3 text-blue-500" /><span>SHADOW_ROSTER_DB</span></div>
                                <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" /><span className="text-[10px] font-bold text-emerald-500">ONLINE</span></div>
                            </div>
                            <div className="p-4 space-y-3">
                                {[{ name: "VORTEX", role: "Duelist", rating: "S+", status: "Free Agent", match: "98%" }, { name: "KAIROS", role: "Controller", rating: "A", status: "Buyout: $5k", match: "92%" }, { name: "ONYX", role: "IGL", rating: "S", status: "In Talks", match: "88%" }].map((player, i) => (
                                    <div key={i} className={`p-4 rounded-lg border flex items-center justify-between group cursor-pointer transition-all hover:scale-[1.02] ${i === 0 ? 'bg-blue-500/10 border-blue-500/50' : 'bg-black border-white/5 hover:border-white/20'}`}>
                                        <div className="flex items-center gap-4"><div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center relative overflow-hidden"><User className="w-6 h-6 text-gray-400" />{i === 0 && <div className="absolute inset-0 bg-blue-500/20" />}</div><div><div className="text-sm font-bold text-white flex items-center gap-2">{player.name}{i === 0 && <span className="bg-blue-500 text-black text-[9px] px-1 rounded font-bold">BEST FIT</span>}</div><div className="text-[10px] text-gray-500 font-mono uppercase">{player.role} // {player.status}</div></div></div><div className="text-right"><div className="text-xs text-gray-500">MATCH</div><div className={`text-lg font-bold font-mono ${i === 0 ? 'text-blue-400' : 'text-white'}`}>{player.match}</div></div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                        <div className="space-y-8">
                            <motion.div className="inline-flex items-center gap-2 text-blue-500 font-mono text-xs uppercase tracking-widest" initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }}><Scan className="w-4 h-4" /> <span>Talent Pipeline</span></motion.div>
                            <motion.h2 className="text-5xl md:text-6xl font-black text-white leading-tight">NEVER PANIC <br /> <span className="text-blue-500">HIRE AGAIN.</span></motion.h2>
                            <motion.p className="text-xl text-white/60 font-light leading-relaxed">We maintain a <span className="text-white font-bold">Shadow Roster</span> of filtered, vetted talent ready to deploy. Player leaves? Code red? <span className="text-white underline decoration-blue-500/50 underline-offset-4">We have 3 replacements ready within the hour.</span></motion.p>
                        </div>
                    </div>
                </section>


                {/* --- SECTION 3: THE SIGNAL CONSTELLATION (CLEAN & DYNAMIC) --- */}

                {/* --- SECTION 2.5: THE SCOUT'S EDGE (TALENT ACQUISITION) --- */}
                {/* "Sign them before they are stars." -> Visualizing the career trajectory. */}
                <section className="min-h-screen flex flex-col items-center justify-center p-6 bg-[#050505] relative border-t border-white/5 overflow-hidden">

                    {/* Background Grid - "Career Space" */}
                    <div className="absolute inset-0 opacity-20 pointer-events-none">
                        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />
                    </div>

                    <div className="max-w-6xl w-full flex flex-col relative z-10">

                        {/* Header */}
                        <div className="text-center mb-16">
                            <h3 className="text-4xl md:text-6xl font-black text-white mb-4 uppercase tracking-tighter">
                                Discover the <span className="text-green-500">Undiscovered.</span>
                            </h3>
                            <p className="text-zinc-500 font-mono text-sm tracking-[0.2em] uppercase">
                                Sign the next world champion <span className="text-white font-bold">before</span> the world knows their name.
                            </p>
                        </div>

                        {/* THE CAREER TRAJECTORY GRAPH */}
                        <div className="relative w-full h-[500px] border border-white/10 rounded-3xl bg-zinc-900/30 backdrop-blur-sm overflow-hidden group">

                            {/* SVG Graph Surface */}
                            <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
                                <defs>
                                    <linearGradient id="curveGradient" x1="0" y1="1" x2="0" y2="0">
                                        <stop offset="0%" stopColor="rgba(34, 197, 94, 0)" />
                                        <stop offset="100%" stopColor="rgba(34, 197, 94, 0.2)" />
                                    </linearGradient>
                                </defs>

                                {/* 1. The Career Curve (Path) */}
                                {/* Draws from bottom-left (Tier 3) to top-right (Tier 1) exponentially */}
                                <path
                                    d="M0,500 C200,500 400,450 600,250 S900,100 1200,50"
                                    fill="url(#curveGradient)"
                                    stroke="#22c55e"
                                    strokeWidth="3"
                                    className="drop-shadow-[0_0_10px_rgba(34,197,94,0.5)]"
                                />

                                {/* 2. Dashed Baseline (Average Talent) */}
                                <line x1="0" y1="450" x2="1200" y2="450" stroke="white" strokeWidth="1" strokeDasharray="5,5" opacity="0.1" />
                            </svg>

                            {/* --- INTERACTIVE MARKERS (Overlay) --- */}

                            {/* MARKER 1: THE DISCOVERY (Early & Green) */}
                            {/* Narrative: You find them in a Tier 3 tournament. */}
                            <div className="absolute bottom-[100px] left-[15%] flex flex-col items-center group/marker transition-all duration-500 hover:scale-110 cursor-pointer">
                                <div className="w-12 h-12 bg-zinc-900 border border-green-500 rounded-full flex items-center justify-center relative z-20 shadow-[0_0_20px_rgba(34,197,94,0.5)]">
                                    <span className="text-xs font-bold text-green-500">?</span>
                                </div>
                                <div className="absolute inset-0 bg-green-500/30 blur-xl animate-pulse rounded-full" />

                                {/* Scouting Card */}
                                <div className="absolute bottom-16 left-1/2 -translate-x-1/2 bg-zinc-900/95 border border-green-500/50 p-4 rounded-xl text-left backdrop-blur-md min-w-[180px] shadow-2xl">
                                    <div className="flex items-center gap-2 mb-2">
                                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                                        <div className="text-[10px] text-green-400 font-mono uppercase tracking-widest">Winrvte Scouted</div>
                                    </div>
                                    <div className="text-sm font-bold text-white mb-1">Player: "FLAME"</div>
                                    <div className="text-xs text-zinc-500 mb-2">League: Tier 3 (Unknown)</div>
                                    <div className="py-1 px-2 bg-green-500/10 rounded border border-green-500/20 text-green-400 text-xs font-mono">
                                        Contract: $12k / yr
                                    </div>
                                </div>
                                {/* Vertical Drop Line */}
                                <div className="h-[200px] w-px border-l border-green-500/30 border-dashed absolute top-6 pointer-events-none" />
                            </div>

                            {/* MARKER 2: THE HYPE (Late & Red) */}
                            {/* Narrative: Competitors try to buy them after they win Worlds. */}
                            <div className="absolute top-[80px] right-[20%] flex flex-col items-center group/marker transition-all duration-500 hover:scale-110 cursor-pointer">
                                <div className="w-12 h-12 bg-zinc-900 border border-red-500 rounded-full flex items-center justify-center relative z-20 shadow-[0_0_20px_rgba(239,68,68,0.5)]">
                                    <span className="text-xs font-bold text-red-500">★</span>
                                </div>

                                {/* Market Card */}
                                <div className="absolute top-16 left-1/2 -translate-x-1/2 bg-zinc-900/95 border border-red-500/50 p-4 rounded-xl text-left backdrop-blur-md min-w-[180px] shadow-2xl">
                                    <div className="flex items-center gap-2 mb-2">
                                        <div className="w-2 h-2 bg-red-500 rounded-full" />
                                        <div className="text-[10px] text-red-400 font-mono uppercase tracking-widest">Market Hype</div>
                                    </div>
                                    <div className="text-sm font-bold text-white mb-1">Star: "FLAME"</div>
                                    <div className="text-xs text-zinc-500 mb-2">Status: World Champion</div>
                                    <div className="py-1 px-2 bg-red-500/10 rounded border border-red-500/20 text-red-400 text-xs font-mono">
                                        Buyout: $2.4M
                                    </div>
                                </div>
                                {/* Vertical Drop Line */}
                                <div className="h-[340px] w-px border-l border-red-500/30 border-dashed absolute top-6 pointer-events-none" />
                            </div>

                            {/* THE NARRATIVE ARC LABEL */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none">
                                <div className="text-sm font-mono text-zinc-600 tracking-[0.5em] uppercase mb-2">Career Trajectory</div>
                            </div>

                        </div>
                    </div>
                </section>

                {/* --- SECTION 3: THE SIGNAL CONSTELLATION (CLEAN & DYNAMIC) --- */}
                <section className="relative min-h-screen flex items-center justify-center p-6 bg-[#050505] border-t border-white/5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-20 w-full max-w-7xl items-center z-10">

                        {/* Copy */}
                        <div className="space-y-8 order-2 md:order-1">
                            <div className="inline-flex items-center gap-2 text-purple-400 font-mono text-xs uppercase tracking-widest">
                                <Network className="w-4 h-4" /> <span>Private Network</span>
                            </div>
                            <h2 className="text-5xl md:text-6xl font-black text-white leading-tight">
                                <span className="whitespace-nowrap">WE DON'T SEARCH.</span> <br /> <span className="text-purple-500 whitespace-nowrap">WE REACH.</span>
                            </h2>
                            <p className="text-xl text-white/60 font-light leading-relaxed">
                                Players are just the start. <br /><br />
                                <span className="text-white font-bold">We maintain our own private database.</span> A network of thousands of experts—from Designers to Staffs. <br /><br />
                                When you need someone, we don't start googling. We make a call.
                            </p>
                        </div>

                        {/* Visual: The Signal Constellation */}
                        <motion.div
                            className="order-1 md:order-2 w-full max-w-lg mx-auto aspect-square relative flex items-center justify-center"
                            initial={{ scale: 0.9, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.8 }}
                        >
                            {/* Radial HUD Background */}
                            <div className="absolute inset-0 border border-white/5 rounded-full" />
                            <div className="absolute inset-1/4 border border-white/5 rounded-full border-dashed" />

                            {/* SVG Container for Beams */}
                            <svg className="absolute inset-0 w-full h-full overflow-visible">
                                <defs>
                                    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                                        <feGaussianBlur stdDeviation="2" result="blur" />
                                        <feComposite in="SourceGraphic" in2="blur" operator="over" />
                                    </filter>
                                </defs>
                                <AnimatePresence>
                                    <motion.path
                                        key={activeIndex}
                                        d={activeNode.beamPath}
                                        stroke={activeNode.color === "purple" ? "#a855f7" : activeNode.color === "amber" ? "#fbbf24" : "#34d399"}
                                        strokeWidth="2"
                                        fill="none"
                                        filter="url(#glow)"
                                        initial={{ pathLength: 0, opacity: 0 }}
                                        animate={{ pathLength: 1, opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 0.4, ease: "circOut" }}
                                    />
                                </AnimatePresence>
                            </svg>

                            {/* Center Hub */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30">
                                <div className="w-16 h-16 bg-black border border-white/20 rounded-full flex items-center justify-center shadow-2xl relative">
                                    <Globe className="w-8 h-8 text-white/50" />
                                    <div className="absolute inset-0 border border-purple-500/30 rounded-full animate-ping" />
                                </div>
                            </div>

                            {/* Node Constellations */}
                            {signalNodes.map((node, i) => {
                                const isActive = i === activeIndex;
                                const style = getColor(node.color);

                                return (
                                    <div key={i} className="absolute" style={{ ...node.position, transform: node.position.bottom ? 'translateX(-50%)' : '' }}>
                                        {/* The Node Dot */}
                                        <motion.div
                                            className={`w-3 h-3 rounded-full ${isActive ? style.split(' ')[2] : 'bg-gray-800'} transition-colors duration-300 relative z-20`}
                                            animate={{ scale: isActive ? 1.5 : 1 }}
                                        >
                                            {isActive && (
                                                <motion.div
                                                    className={`absolute inset-0 rounded-full ${style.split(' ')[2]} opacity-50`}
                                                    animate={{ scale: 2, opacity: 0 }}
                                                    transition={{ repeat: Infinity, duration: 1 }}
                                                />
                                            )}
                                        </motion.div>

                                        {/* The Label */}
                                        <div className={`absolute ${node.position.right ? 'right-6' : 'left-6'} top-1/2 -translate-y-1/2 text-[10px] font-mono tracking-widest ${isActive ? 'text-white' : 'text-gray-600'} transition-colors duration-300 whitespace-nowrap`}>
                                            {node.label}
                                        </div>

                                        {/* The Card Reveal */}
                                        <AnimatePresence>
                                            {isActive && (
                                                <motion.div
                                                    className={`absolute ${node.position.bottom ? 'top-8 left-1/2 -translate-x-1/2' : node.position.right ? 'top-8 right-0' : 'top-8 left-0'} z-40`}
                                                    initial={{ opacity: 0, y: 10, scale: 0.9 }}
                                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                                    exit={{ opacity: 0, scale: 0.9 }}
                                                    transition={{ duration: 0.3, type: "spring" }}
                                                >
                                                    <div className={`bg-[#111] border ${style.split(' ')[1]} rounded-lg p-4 w-48 shadow-2xl backdrop-blur-xl relative overflow-hidden`}>
                                                        {/* Animated Scan Bar */}
                                                        <motion.div
                                                            className={`absolute top-0 left-0 h-full w-[2px] ${style.split(' ')[2]} opacity-50`}
                                                            animate={{ left: ["0%", "100%"] }}
                                                            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                                                        />

                                                        <div className="text-[9px] text-gray-500 font-mono mb-1">NETWORK_MATCH_FOUND</div>
                                                        <div className="text-sm font-bold text-white uppercase mb-2">{node.card.role}</div>
                                                        <div className="space-y-1">
                                                            <div className="flex justify-between text-[10px] border-b border-white/5 pb-1">
                                                                <span className="text-gray-500">TIER</span>
                                                                <span className="text-white">{node.card.tier}</span>
                                                            </div>
                                                            <div className="flex justify-between text-[10px] pt-1">
                                                                <span className="text-gray-500">METRIC</span>
                                                                <span className={style.split(' ')[0]}>{node.card.metric}</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                );
                            })}

                        </motion.div>
                    </div>
                </section>

                {/* --- SECTIONS 4 & 5 UNCHANGED --- */}
                <section className="relative min-h-screen flex items-center justify-center p-6 bg-[#080808] border-t border-white/5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-20 w-full max-w-7xl items-center z-10">
                        <motion.div className="w-full bg-[#0F0F0F] rounded-2xl border border-red-900/30 overflow-hidden shadow-2xl" initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.8 }}>
                            <div className="bg-red-900/20 px-4 py-2 flex justify-between items-center border-b border-red-500/20"><div className="flex items-center gap-2 text-red-500 font-bold text-xs uppercase animate-pulse"><AlertTriangle className="w-4 h-4" /> Threat Detection Active</div><div className="text-[10px] font-mono text-red-400">LIVE FEED</div></div>
                            <div className="p-6">
                                <div className="flex justify-between items-end mb-6"><div><div className="text-sm text-gray-500 mb-1">ENEMY TEAM ECONOMY</div><div className="text-2xl font-mono text-white">$14,500 <span className="text-red-500 text-sm">(FORCE BUY)</span></div></div><div className="text-right"><div className="text-sm text-gray-500 mb-1">PREDICTED STRAT</div><div className="text-xl font-bold text-red-500">B-RUSH EXECUTE</div></div></div>
                                <div className="relative h-32 bg-black/50 rounded border border-white/5 mb-4 overflow-hidden"><div className="absolute bottom-0 left-0 w-full h-full flex items-end px-2 space-x-1">{[40, 65, 30, 80, 20, 90, 45, 70, 60, 85].map((h, i) => (<motion.div key={i} className="flex-1 bg-red-500/20 hover:bg-red-500/50 transition-colors rounded-t-sm" style={{ height: `${h}%` }} initial={{ height: 0 }} whileInView={{ height: `${h}%` }} transition={{ delay: i * 0.1 }} />))}</div><div className="absolute top-2 left-2 text-[10px] font-mono text-gray-600">AGGRESSION INDEX</div></div>
                            </div>
                        </motion.div>
                        <div className="space-y-8">
                            <div className="inline-flex items-center gap-2 text-red-500 font-mono text-xs uppercase tracking-widest"><Crosshair className="w-4 h-4" /> <span>Predictive Warfare</span></div>
                            <h2 className="text-5xl md:text-6xl font-black text-white leading-tight">THEIR STRATS. <br /> <span className="text-red-500">YOUR DATABASE.</span></h2>
                            <p className="text-xl text-white/60 font-light leading-relaxed">Why watch 50 hours of VODs? <br /><br /> Our system scrapes enemy match history and gives you a one-page <span className="text-red-500 font-bold">"Cheat Sheet"</span> on their weaknesses, economy habits, and tell-tale signs before the match even starts.</p>
                        </div>
                    </div>
                </section>

                <section className="relative min-h-[50vh] flex flex-col items-center justify-center p-6 bg-[#050505] border-t border-white/5">
                    <div className="text-center z-10 space-y-8">
                        <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tight">THE UNFAIR <span className="text-cyan-400">ADVANTAGE.</span></h2>
                        <Button onClick={onNext} className="bg-white text-black hover:bg-gray-200 px-12 py-6 rounded-full text-xl font-bold shadow-2xl transition-transform hover:scale-105">Next: ROI Analysis</Button>
                    </div>
                </section>

                <div className="h-20" />
            </div>
        </motion.div>
    );
}
