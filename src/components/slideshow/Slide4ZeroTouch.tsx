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
        <section className="relative min-h-screen flex flex-col justify-center items-center px-6 border-b border-white/5">
            <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                {/* Text Content */}
                <div className="space-y-8 z-20 relative">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-full mb-6">
                            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                            <span className="text-[10px] uppercase tracking-widest text-emerald-400 font-mono">System Optimized</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-black text-white leading-[0.9] tracking-tighter mb-6 relative z-30">
                            OPERATIONAL <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500">SUPREMACY.</span>
                        </h1>
                        <p className="text-lg md:text-xl text-white/60 max-w-md leading-relaxed border-l-2 border-emerald-500/50 pl-6">
                            We replace the chaos of DMs and spreadsheets with a single, automated operating system.
                        </p>
                    </motion.div>
                </div>

                {/* Visual: The Transformation */}
                <div className="relative h-[500px] w-full isolate">

                    {/* Foreground Order (The Card) */}
                    <motion.div
                        className="absolute inset-x-0 md:inset-x-auto md:right-0 md:w-[90%] top-4 bottom-4 bg-[#050505] rounded-2xl border border-emerald-500/30 shadow-[0_0_50px_rgba(16,185,129,0.1)] overflow-hidden flex flex-col z-10"
                        initial={{ scale: 0.9, opacity: 0, x: 50 }}
                        animate={{ scale: 1, opacity: 1, x: 0 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                    >
                        {/* Header */}
                        <div className="h-10 border-b border-white/10 bg-white/5 flex items-center justify-between px-4">
                            <span className="text-[10px] font-mono text-emerald-500/60 uppercase">Command_Core // Online</span>
                            <div className="flex gap-1.5">
                                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500/40" />
                                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500/40" />
                            </div>
                        </div>
                        {/* Body - The Hyper-Reactor */}
                        <div className="flex-1 flex items-center justify-center bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.05),transparent)] relative overflow-hidden">
                            {/* Grid Scan Effect */}
                            <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.03)_1px,transparent_1px)] bg-[size:20px_20px]" />

                            {/* Main Concentric Container */}
                            <div className="relative w-96 h-96 flex items-center justify-center">

                                {/* Ring 1: Outer Slow */}
                                <motion.div
                                    className="absolute top-1/2 left-1/2 w-64 h-64 border border-emerald-500/20 rounded-full"
                                    style={{ x: "-50%", y: "-50%" }}
                                    animate={{ rotate: 360, scale: [1, 1.02, 1] }}
                                    transition={{ rotate: { duration: 20, repeat: Infinity, ease: "linear" }, scale: { duration: 4, repeat: Infinity } }}
                                />
                                {/* Ring 2: Dashed Medium */}
                                <motion.div
                                    className="absolute top-1/2 left-1/2 w-48 h-48 border border-dashed border-emerald-500/30 rounded-full"
                                    style={{ x: "-50%", y: "-50%" }}
                                    animate={{ rotate: -360 }}
                                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                                />
                                {/* Ring 3: Inner Fast with Gap */}
                                <motion.div
                                    className="absolute top-1/2 left-1/2 w-32 h-32 border-2 border-emerald-500/40 rounded-full border-t-transparent border-r-transparent"
                                    style={{ x: "-50%", y: "-50%" }}
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                                />

                                {/* Orbiting Particles Layer */}
                                <motion.div
                                    className="absolute top-1/2 left-1/2 w-40 h-40"
                                    style={{ x: "-50%", y: "-50%" }}
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                                >
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-emerald-400 rounded-full shadow-[0_0_10px_#34d399]" />
                                </motion.div>
                                <motion.div
                                    className="absolute top-1/2 left-1/2 w-56 h-56"
                                    style={{ x: "-50%", y: "-50%" }}
                                    animate={{ rotate: -360 }}
                                    transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                                >
                                    <div className="absolute bottom-0 right-1/2 translate-x-1/2 w-1.5 h-1.5 bg-cyan-400 rounded-full shadow-[0_0_10px_#22d3ee]" />
                                </motion.div>

                                {/* Core */}
                                <div className="relative z-10 flex flex-col items-center gap-4">
                                    <motion.div
                                        className="w-20 h-20 bg-emerald-500/10 rounded-full flex items-center justify-center border border-emerald-500 text-emerald-400 shadow-[0_0_40px_rgba(16,185,129,0.5)] backdrop-blur-sm"
                                        animate={{ scale: [1, 1.1, 1], boxShadow: ["0 0 40px rgba(16,185,129,0.5)", "0 0 60px rgba(16,185,129,0.8)", "0 0 40px rgba(16,185,129,0.5)"] }}
                                        transition={{ duration: 2, repeat: Infinity }}
                                    >
                                        <Activity className="w-10 h-10" />
                                    </motion.div>
                                    <motion.div
                                        className="px-4 py-1.5 bg-emerald-950/80 border border-emerald-500/50 rounded backdrop-blur-md absolute -bottom-16 left-1/2 -translate-x-1/2 whitespace-nowrap"
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.5 }}
                                    >
                                        <div className="text-[10px] font-mono text-emerald-400 tracking-widest uppercase flex items-center gap-2">
                                            <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-blink" />
                                            PERFORMANCE: <span className="font-bold text-white">MAXIMIZED</span>
                                        </div>
                                    </motion.div>
                                </div>
                            </div>
                        </div>

                        {/* Scanner Line Overlay */}
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-500/10 to-transparent pointer-events-none"
                            initial={{ top: "-100%" }}
                            animate={{ top: "100%" }}
                            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                        />
                    </motion.div>
                </div>
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
                        {["DISCORD_LOGS", "RIOT_API_V4", "SCRIM_GOOGLE_SHEETS"].map((label, i) => (
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

                {/* Visual: The High-Fidelity Dashboard */}
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
                                <span>LCS_SUMMER_2025</span>
                            </div>
                        </div>
                        <div className="px-2 py-1 bg-emerald-500/10 text-emerald-400 text-[10px] font-bold rounded border border-emerald-500/20">LIVE FEED</div>
                    </div>

                    {/* Main Content */}
                    <div className="p-6 grid grid-cols-3 gap-6">
                        {/* Sidebar details */}
                        <div className="col-span-1 space-y-4">
                            <div className="p-4 bg-white/5 rounded border border-white/5">
                                <div className="text-[10px] text-white/40 uppercase tracking-widest mb-1">Win Probability</div>
                                <div className="text-3xl font-mono text-white">72.4%</div>
                                <div className="text-xs text-emerald-400 mt-1 flex items-center gap-1">▲ 12.3% <span className="text-white/20">vs avg</span></div>
                            </div>
                            <div className="p-4 bg-white/5 rounded border border-white/5">
                                <div className="text-[10px] text-white/40 uppercase tracking-widest mb-1">Gold Diff @ 15</div>
                                <div className="text-3xl font-mono text-white">+2.1k</div>
                                <div className="text-xs text-emerald-400 mt-1 flex items-center gap-1">▲ 0.8k <span className="text-white/20">vs avg</span></div>
                            </div>
                        </div>

                        {/* Main Graph */}
                        <div className="col-span-2 bg-black rounded border border-white/5 p-4 relative overflow-hidden">
                            {/* Grid Background */}
                            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:20px_20px]" />

                            {/* The Line */}
                            <svg className="w-full h-full relative z-10 overflow-visible">
                                <motion.path
                                    d="M 0,150 C 50,140 100,160 150,100 S 250,80 300,50 S 350,20 400,10"
                                    fill="none"
                                    stroke="#10B981"
                                    strokeWidth="2"
                                    initial={{ pathLength: 0 }}
                                    whileInView={{ pathLength: 1 }}
                                    transition={{ duration: 2, ease: "easeOut" }}
                                />
                                <circle cx="400" cy="10" r="4" className="fill-emerald-400 animate-ping" />
                                <circle cx="400" cy="10" r="3" className="fill-white" />
                            </svg>

                            {/* Annotation */}
                            <motion.div
                                className="absolute top-4 right-4 bg-emerald-950/80 border border-emerald-500/30 p-2 rounded backdrop-blur-md"
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 1.5 }}
                            >
                                <div className="text-[9px] text-emerald-300 font-mono">OBJECTIVE BOUNTY CLAIMED</div>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>

                {/* Text */}
                <div className="md:col-span-1 space-y-6">
                    <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
                        DECISIONS <br />
                        BASED ON <br />
                        <span className="text-emerald-500">MATH.</span>
                    </h2>
                    <p className="text-lg text-white/50">
                        Gut feeling is a liability. We visualize your objective reality—gold diff, trade efficiency, vision score—in real-time.
                    </p>
                    <ul className="space-y-3">
                        {["Draft Edge Calculation", "Live Win Probability", "Economy Tracking"].map((item, i) => (
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
