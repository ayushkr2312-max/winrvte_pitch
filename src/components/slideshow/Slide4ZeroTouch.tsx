"use client";

import { motion, useScroll, useTransform, useSpring, AnimatePresence } from "framer-motion";
import {
    MessageSquare, FileSpreadsheet, ArrowRight, ArrowLeft, Bot, ExternalLink,
    ChevronDown, Database, Code, Workflow, Gamepad2, Layers, FileImage,
    FileVideo, FileBox, Palette, Activity, Globe, Server, Cpu, ShieldCheck
} from "lucide-react";
import { Button } from "../ui/Button";
import { useRef, useState, useEffect } from "react";

interface SlideProps {
    isActive: boolean;
    onNext: () => void;
    onBack: () => void;
}

export function Slide4ZeroTouch({ isActive, onNext, onBack }: SlideProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({ container: containerRef });
    const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

    if (!isActive) return null;

    return (
        <motion.div
            className="absolute inset-0 bg-[#030303] z-20 overflow-hidden font-brand"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <div ref={containerRef} className="absolute inset-0 overflow-y-auto scroll-smooth no-scrollbar">

                {/* --- GLOBAL BACKGROUND --- */}
                <div className="fixed inset-0 pointer-events-none z-0">
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:100px_100px]" />
                </div>

                <NavigationHeader onBack={onBack} />




                {/* --- SECTION 1: FROM CHAOS TO ORDER (SPLIT REVEAL) --- */}
                <HeroSection />

                {/* --- SECTION 2: THE ARCHITECTURE (SCHEMATIC PIPELINE) --- */}
                <PipelineSection />

                {/* --- SECTION 3: THE TRUTH TERMINAL (DASHBOARD) --- */}
                <DashboardSection />

                {/* --- SECTION 4: THE ASSET GRID (VAULT) --- */}
                <VaultSection />

                {/* --- SECTION 5: SYSTEM CORE (FOOTER) --- */}
                <FooterSection onNext={onNext} />

            </div>
        </motion.div>
    );
}

// --- SUB-COMPONENTS ---

function NavigationHeader({ onBack }: { onBack: () => void }) {
    return (
        <div className="fixed top-8 left-8 z-50 mix-blend-difference">
            <button onClick={onBack} className="text-white hover:text-cyan-400 flex items-center gap-2 uppercase tracking-widest text-xs font-mono transition-colors group">
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                SYSTEM_BACK
            </button>
        </div>
    );
}

function HeroSection() {
    return (
        <section className="relative min-h-screen flex flex-col justify-center items-center px-6 border-b border-white/5 overflow-hidden">

            {/* --- MASSIVE BACKGROUND VISUAL: THE LOGIC CORE --- */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-80">
                <div className="relative w-[800px] h-[800px] md:w-[1200px] md:h-[1200px]" style={{ perspective: "1000px" }}>

                    {/* Ring 1: The Outer Perimeter (Slow Logic) */}
                    <motion.div
                        className="absolute inset-0 border border-emerald-900/40 rounded-full"
                        style={{ rotateX: "60deg" }}
                        animate={{ rotateZ: 360 }}
                        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                    >
                        <div className="absolute inset-0 border border-dashed border-emerald-500/20 rounded-full" />
                        {/* Data Blips on Ring */}
                        <div className="absolute top-0 left-1/2 w-2 h-2 bg-emerald-500/60 rounded-full shadow-[0_0_10px_#10b981]" />
                        <div className="absolute bottom-0 left-1/2 w-2 h-2 bg-emerald-500/60 rounded-full shadow-[0_0_10px_#10b981]" />
                    </motion.div>

                    {/* Ring 2: The Processing Layer (Medium Speed) */}
                    <motion.div
                        className="absolute inset-[15%] border border-emerald-500/30 rounded-full"
                        style={{ rotateX: "60deg" }}
                        animate={{ rotateZ: -360 }}
                        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                    >
                        <div className="absolute inset-0 border-t border-l border-emerald-500/40 rounded-full" />
                    </motion.div>

                    {/* Ring 3: The Core (Fast Speed) */}
                    <motion.div
                        className="absolute inset-[30%] border-[2px] border-emerald-500/20 rounded-full"
                        style={{ rotateX: "60deg" }}
                        animate={{ rotateZ: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    >
                        <div className="absolute inset-0 border-t-[4px] border-emerald-500/60 rounded-full opacity-60" />
                    </motion.div>

                    {/* Central Pillar of Logic (Vertical Light) */}
                    <div className="absolute top-1/2 left-1/2 w-[200px] h-[500px] -translate-x-1/2 -translate-y-1/2 bg-gradient-to-b from-emerald-500/5 via-emerald-500/10 to-emerald-500/5 blur-3xl" />

                    {/* Floating Code Fragments */}
                    {[...Array(5)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute top-1/2 left-1/2 text-[10px] font-mono text-emerald-500/40 whitespace-nowrap"
                            initial={{ x: -50, y: -50, opacity: 0 }}
                            animate={{
                                x: (Math.random() - 0.5) * 600,
                                y: (Math.random() - 0.5) * 400,
                                opacity: [0, 1, 0]
                            }}
                            transition={{ duration: 5 + i, repeat: Infinity, ease: "linear" }}
                        >
                            {`SYS_OPT_0${i}x`} :: OK
                        </motion.div>
                    ))}

                </div>
            </div>

            {/* --- FOREGROUND CONTENT (Centered) --- */}
            <div className="relative z-10 text-center space-y-8 max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#0A0A0A] border border-emerald-500/20 rounded-full mb-6 backdrop-blur-md">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        <span className="text-[10px] uppercase tracking-widest text-emerald-400 font-mono">System Optimized</span>
                    </div>
                    <h1 className="text-6xl md:text-9xl font-black text-white leading-[0.85] tracking-tighter mb-8">
                        OPERATIONAL <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500">SUPREMACY.</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-white/60 max-w-2xl mx-auto leading-relaxed md:text-center">
                        Management made easy.
                    </p>
                </motion.div>
            </div>

            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/20">
                <span className="text-[10px] uppercase tracking-[0.3em] font-mono">Initiate Sequence</span>
                <ChevronDown className="w-5 h-5 animate-bounce" />
            </div>
        </section>
    );
}

function PipelineSection() {
    return (
        <section className="relative min-h-[80vh] flex flex-col justify-center items-center py-20 bg-[#020202] border-b border-white/5">
            <div className="max-w-7xl w-full px-6">
                <div className="text-center mb-24">
                    <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
                        THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-500">REFINERY.</span>
                    </h2>
                    <p className="text-lg text-white/50 max-w-2xl mx-auto">
                        Raw data is useless. We ingest, normalize, and visualize your entire organizations reality in real-time.
                    </p>
                </div>

                {/* SCHEMATIC VISUALIZATION */}
                <div className="relative w-full h-[300px] flex items-center justify-between gap-4 md:gap-8">

                    {/* STEP 1: INGESTION (SOURCES) */}
                    <div className="flex flex-col gap-4">
                        {["DISCORD_LOGS", "GOOGLE_DRIVE", "SCRIM_GOOGLE_SHEETS"].map((label, i) => (
                            <motion.div
                                key={i}
                                className="w-48 h-12 bg-[#0A0A0A] border border-white/10 rounded flex items-center px-4 gap-3 relative"
                                initial={{ x: -20, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{ delay: i * 0.1 }}
                            >
                                <div className={`w-2 h-2 rounded-full ${i === 1 ? 'bg-red-500' : i === 2 ? 'bg-green-500' : 'bg-indigo-500'}`} />
                                <span className="text-[10px] font-mono text-white/60 truncate">{label}</span>
                                {/* Connector Dot */}
                                <div className="absolute -right-1.5 w-3 h-3 bg-[#0A0A0A] border border-white/20 rounded-full" />
                            </motion.div>
                        ))}
                    </div>

                    {/* FLOW LINES 1 */}
                    <div className="flex-1 h-[2px] bg-white/5 relative overflow-hidden">
                        <motion.div
                            className="absolute inset-0 bg-purple-500/50"
                            initial={{ x: "-100%" }}
                            whileInView={{ x: "100%" }}
                            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                        />
                    </div>

                    {/* STEP 2: PROCESSING (BLACK BOX) */}
                    <motion.div
                        className="w-40 h-40 bg-black border border-purple-500/30 shadow-[0_0_50px_rgba(168,85,247,0.1)] rounded-xl flex flex-col items-center justify-center relative z-10"
                        initial={{ scale: 0.9 }}
                        whileInView={{ scale: 1 }}
                    >
                        <Cpu className="w-10 h-10 text-purple-400 mb-2" />
                        <span className="text-xs font-bold text-white tracking-widest">CORE</span>
                        <div className="absolute inset-0 border border-white/5 rounded-xl m-1" />
                        <div className="absolute -top-2 left-1/2 -translate-x-1/2 px-2 bg-black text-[9px] text-purple-400 border border-purple-500/30 rounded">NORMALIZING</div>
                    </motion.div>

                    {/* FLOW LINES 2 */}
                    <div className="flex-1 h-[2px] bg-white/5 relative overflow-hidden">
                        <motion.div
                            className="absolute inset-0 bg-indigo-500/50"
                            initial={{ x: "-100%" }}
                            whileInView={{ x: "100%" }}
                            transition={{ duration: 1.5, delay: 0.75, repeat: Infinity, ease: "linear" }}
                        />
                    </div>

                    {/* STEP 3: OUTPUT (CARDS) */}
                    <div className="flex flex-col gap-4">
                        {["PERFORMANCE_DASHBOARD", "ASSET_VAULT_UI", "PLAYER_ROI_REPORT"].map((label, i) => (
                            <motion.div
                                key={i}
                                className="w-48 h-12 bg-white/5 border border-white/20 rounded flex items-center justify-center relative overflow-hidden group"
                                initial={{ x: 20, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{ delay: 0.5 + i * 0.1 }}
                            >
                                <span className="text-[10px] font-bold text-white tracking-wider group-hover:text-cyan-400 transition-colors">{label.split('_')[0]}</span>
                                {/* Corner Accents */}
                                <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/30" />
                                <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/30" />
                            </motion.div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}

function DashboardSection() {
    return (
        <section className="relative min-h-screen flex items-center justify-center p-6 bg-[#050505] border-b border-white/5">
            <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-12 items-center">

                {/* Visual: The Roster Intelligence Dashboard */}
                <motion.div
                    className="md:col-span-2 bg-[#0A0A0A] rounded-xl border border-white/10 overflow-hidden shadow-2xl relative"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    {/* Toolbar */}
                    <div className="h-12 border-b border-white/5 flex items-center justify-between px-4 bg-white/[0.02]">
                        <div className="flex items-center gap-4">
                            <div className="flex gap-1.5"><div className="w-3 h-3 rounded-full bg-red-500/20" /><div className="w-3 h-3 rounded-full bg-yellow-500/20" /><div className="w-3 h-3 rounded-full bg-green-500/20" /></div>
                            <span className="h-4 w-[1px] bg-white/10" />
                            <div className="flex items-center gap-2 text-white/40 text-[10px] uppercase font-mono">
                                <Database className="w-3 h-3" />
                                <span>ROSTER_DECISION_ENGINE_V2</span>
                            </div>
                        </div>
                        <div className="px-2 py-1 bg-emerald-500/10 text-emerald-400 text-[10px] font-bold rounded border border-emerald-500/20">ANALYSIS_COMPLETE</div>
                    </div>

                    {/* Main Content */}
                    <div className="p-6 grid grid-cols-3 gap-6">
                        {/* Sidebar details */}
                        <div className="col-span-1 space-y-4">
                            <div className="p-4 bg-white/5 rounded border border-white/5">
                                <div className="text-[10px] text-white/40 uppercase tracking-widest mb-1">Player Efficiency</div>
                                <div className="text-3xl font-mono text-white">94.2</div>
                                <div className="text-xs text-emerald-400 mt-1 flex items-center gap-1">Top 5% <span className="text-white/20">role rank</span></div>
                            </div>
                            <div className="p-4 bg-white/5 rounded border border-white/5">
                                <div className="text-[10px] text-white/40 uppercase tracking-widest mb-1">Contract Value</div>
                                <div className="text-3xl font-mono text-white">$120k</div>
                                <div className="text-xs text-emerald-400 mt-1 flex items-center gap-1">UNDERVALUED <span className="text-white/20">by 40%</span></div>
                            </div>
                        </div>

                        {/* Main Graph / Decision Module */}
                        <div className="col-span-2 bg-black rounded border border-white/5 p-4 relative overflow-hidden flex flex-col justify-between">
                            {/* Grid Background */}
                            <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.05)_1px,transparent_1px)] bg-[size:20px_20px]" />

                            <div className="relative z-10 mb-4">
                                <div className="text-[10px] text-white/40 uppercase tracking-widest mb-2">Performance Trajectory (vs Replacement)</div>
                                <svg className="w-full h-24 overflow-visible">
                                    <defs>
                                        <linearGradient id="graphGradient" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="0%" stopColor="#10B981" stopOpacity="0.2" />
                                            <stop offset="100%" stopColor="#10B981" stopOpacity="0" />
                                        </linearGradient>
                                    </defs>
                                    {/* Area Fill */}
                                    <motion.path
                                        d="M 0,80 C 50,70 100,80 150,50 S 250,40 300,20 S 350,10 400,5 V 100 H 0 Z"
                                        fill="url(#graphGradient)"
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        transition={{ duration: 1.5 }}
                                    />
                                    {/* Line Path */}
                                    <motion.path
                                        d="M 0,80 C 50,70 100,80 150,50 S 250,40 300,20 S 350,10 400,5"
                                        fill="none"
                                        stroke="#10B981"
                                        strokeWidth="2"
                                        initial={{ pathLength: 0 }}
                                        whileInView={{ pathLength: 1 }}
                                        transition={{ duration: 2, ease: "easeOut" }}
                                    />

                                    {/* Interactive Data Nodes */}
                                    {[
                                        { x: 150, y: 50, label: "Efficiency Breakout", val: "+24%" },
                                        { x: 300, y: 20, label: "Peak Performance", val: "98.2" },
                                        { x: 400, y: 5, label: "Projected Ceiling", val: "MAX" }
                                    ].map((point, i) => (
                                        <motion.g
                                            key={i}
                                            initial={{ opacity: 0, scale: 0 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            transition={{ delay: 2 + (i * 0.3) }}
                                        >
                                            <circle cx={point.x} cy={point.y} r="4" fill="#050505" stroke="#10B981" strokeWidth="2" className="cursor-pointer hover:fill-emerald-500 transition-colors" />
                                            <circle cx={point.x} cy={point.y} r="8" fill="transparent" stroke="#10B981" strokeOpacity="0.3" className="animate-pulse" />

                                            {/* Hover Label (Simple Visual) */}
                                            <g className="opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-auto cursor-help">
                                                <rect x={point.x - 40} y={point.y - 35} width="80" height="25" rx="4" fill="#0A0A0A" stroke="#10B981" strokeWidth="0.5" />
                                                <text x={point.x} y={point.y - 20} textAnchor="middle" fill="#10B981" fontSize="8" fontFamily="monospace">{point.val}</text>
                                                {/* Invisible hit area for easier hover */}
                                                <circle cx={point.x} cy={point.y} r="15" fill="transparent" />
                                            </g>
                                        </motion.g>
                                    ))}

                                    {/* Baseline */}
                                    <path d="M 0,60 L 400,60" stroke="#333" strokeDasharray="4 4" />
                                </svg>
                            </div>

                            {/* DECISION OUTPUT */}
                            <motion.div
                                className="relative z-10 bg-emerald-900/20 border border-emerald-500/30 p-4 rounded flex items-center justify-between"
                                initial={{ scale: 0.95, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                transition={{ delay: 1 }}
                            >
                                <div>
                                    <div className="text-[10px] text-emerald-400 font-mono mb-1">AI RECOMMENDATION</div>
                                    <div className="text-xl font-bold text-white tracking-widest">EXTEND CONTRACT</div>
                                </div>
                                <div className="w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center">
                                    <Activity className="w-6 h-6 text-emerald-950" />
                                </div>
                            </motion.div>

                        </div>
                    </div>
                </motion.div>

                {/* Text */}
                <div className="md:col-span-1 space-y-6">
                    <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
                        DECISIONS <br />
                        BASED ON <br />
                        <span className="text-emerald-500">DATA.</span>
                    </h2>
                    <p className="text-lg text-white/50">
                        Stop guessing with your roster. We analyze performance vs cost, replacement value, and team synergy to give you the clear answer: <strong>Sign, Renew, or Drop.</strong>
                    </p>
                    <ul className="space-y-3">
                        {["Contract Optimization", "Performance Forecasting", "Roster Construction"].map((item, i) => (
                            <li key={i} className="flex items-center gap-3 text-white/70">
                                <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                                <span className="text-sm font-mono uppercase tracking-wider">{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>

            </div>
        </section>
    );
}

function VaultSection() {
    return (
        <section className="relative min-h-[80vh] flex flex-col items-center justify-center p-6 border-b border-white/5 overflow-hidden">
            <div className="absolute inset-0 bg-blue-950/10 z-0" />

            <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10 items-center">

                {/* Logic */}
                <div className="space-y-8">
                    <h2 className="text-5xl md:text-6xl font-black text-white">
                        YOUR BRAND. <br />
                        <span className="text-blue-500">INDEXED.</span>
                    </h2>
                    <p className="text-xl text-white/60">
                        Stop asking "Where's that logo?". Our Vault auto-tags and organizes every asset your team produces.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="bg-white/5 border border-white/10 p-4 rounded">
                            <div className="text-2xl font-bold text-white mb-1">0s</div>
                            <div className="text-[10px] uppercase text-white/40">Search Latency</div>
                        </div>
                        <div className="bg-white/5 border border-white/10 p-4 rounded">
                            <div className="text-2xl font-bold text-blue-400 mb-1">AI</div>
                            <div className="text-[10px] uppercase text-white/40">Auto-Tagging</div>
                        </div>
                    </div>
                </div>

                {/* Visual: The Self-Organizing Grid */}
                <div className="relative h-[400px] bg-[#050505] rounded-xl border border-white/10 overflow-hidden p-6 flex flex-col">
                    <div className="flex justify-between items-center mb-6">
                        <div className="flex gap-2">
                            <div className="w-3 h-3 rounded-full bg-white/20" />
                            <div className="h-3 w-32 bg-white/10 rounded-full" />
                        </div>
                        <div className="text-[10px] font-mono text-blue-400">STATUS: INDEXING</div>
                    </div>

                    <div className="grid grid-cols-4 gap-4 flex-1 content-start">
                        {Array.from({ length: 12 }).map((_, i) => (
                            <motion.div
                                key={i}
                                className="aspect-square bg-white/5 rounded border border-white/5 flex items-center justify-center relative overflow-hidden group"
                                initial={{ scale: 0, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                transition={{ delay: i * 0.05, type: 'spring' }}
                            >
                                {/* Icon */}
                                {i % 3 === 0 ? <FileImage className="w-6 h-6 text-white/20" /> :
                                    i % 3 === 1 ? <FileVideo className="w-6 h-6 text-white/20" /> :
                                        <FileBox className="w-6 h-6 text-white/20" />}

                                {/* Hover Reveal */}
                                <div className="absolute inset-0 bg-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                    <span className="text-[8px] font-bold text-white uppercase">Download</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Scanner */}
                    <motion.div
                        className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/10 to-transparent pointer-events-none"
                        initial={{ top: "-100%" }}
                        whileInView={{ top: "200%" }}
                        transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                    />
                </div>
            </div>
        </section>
    );
}

function FooterSection({ onNext }: { onNext: () => void }) {
    return (
        <section className="relative py-24 bg-black flex flex-col items-center justify-center border-t border-white/5">
            <div className="max-w-4xl w-full text-center space-y-12">

                {/* Terminal Stack */}
                <div className="font-mono text-xs text-left inline-block bg-[#0A0A0A] p-6 rounded border border-white/10 shadow-2xl min-w-[300px]">
                    <div className="text-white/30 mb-4 border-b border-white/5 pb-2">root@winrvte:~# system_check.sh</div>
                    <TypewriterLine text="[OK] POSTGRES_DB ................. CONNECTED" color="text-green-500" delay={0} />
                    <TypewriterLine text="[OK] RIOT_API_GATEWAY ............ ONLINE" color="text-green-500" delay={0.5} />
                    <TypewriterLine text="[OK] N8N_WORKFLOW_ENGINE ......... ACTIVE" color="text-orange-500" delay={1} />
                    <TypewriterLine text="[OK] DOCKER_CONTAINER_REGISTRY ... SYNCED" color="text-blue-500" delay={1.5} />
                    <motion.div
                        className="mt-2 text-white animate-pulse"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 2.5 }}
                    >
                        _
                    </motion.div>
                </div>

                <div className="pt-10">
                    <p className="text-white/30 text-xs font-mono tracking-[0.3em] uppercase mb-8">
                        The Infrastructure of Champions
                    </p>
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button
                            onClick={onNext}
                            className="bg-white hover:bg-gray-100 text-black px-10 py-6 text-lg font-black tracking-widest rounded-none clip-path-polygon"
                        >
                            NEXT: GROWTH ENGINE <ExternalLink className="w-5 h-5 ml-2" />
                        </Button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

function TypewriterLine({ text, color, delay }: { text: string, color: string, delay: number }) {
    return (
        <motion.div
            className={`mb-1 ${color}`}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay, duration: 0.1 }}
            viewport={{ once: true }}
        >
            {text}
        </motion.div>
    );
}
