"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ChevronDown, DollarSign, TrendingUp, Lock, FileText, BarChart2, CheckCircle2, XCircle } from "lucide-react";
import { Button } from "../ui/Button";

interface SlideProps {
    isActive: boolean;
    onNext: () => void;
    onBack: () => void;
}

export function Slide6ContentROI({ isActive, onNext, onBack }: SlideProps) {
    if (!isActive) return null;

    return (
        // MAIN CONTAINER: Robust Narrative Layout
        <div className="fixed inset-0 z-20 bg-[#030303] h-screen w-screen overflow-y-auto text-white font-brand selection:bg-emerald-500/30">

            {/* GRID BACKGROUND - Subtle Financial/Data vibe */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <div className="absolute inset-0 bg-[#020202]" />
                <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />
                <div className="absolute top-0 inset-x-0 h-64 bg-gradient-to-b from-emerald-900/10 to-transparent" />
            </div>

            {/* NAVIGATION */}
            <button
                onClick={onBack}
                className="fixed left-8 top-8 z-50 flex items-center gap-3 px-5 py-2.5 bg-black/80 hover:bg-black border border-white/10 hover:border-emerald-500/50 rounded-full backdrop-blur-xl transition-all group cursor-pointer shadow-2xl"
            >
                <ArrowLeft className="w-4 h-4 text-white/50 group-hover:text-emerald-400" />
                <span className="text-xs font-mono text-white/50 group-hover:text-emerald-400 uppercase tracking-widest">Module 06 // ROI</span>
            </button>


            {/* CONTENT WRAPPER */}
            <div className="relative z-10 flex flex-col w-full">

                {/* --- SECTION 1: THE PORTAL (HERO) --- */}
                <section className="min-h-screen flex flex-col items-center justify-center p-6 md:p-20 relative overflow-hidden">
                    <div className="text-center w-full max-w-5xl flex flex-col items-center animate-in fade-in zoom-in duration-1000">

                        {/* Status Indicator */}
                        <div className="mb-12 flex items-center gap-4">
                            <div className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-red-500/20 bg-red-500/5 text-red-500/70 text-[10px] font-mono uppercase tracking-widest">
                                <XCircle className="w-3 h-3" /> Intuition
                            </div>
                            <div className="w-12 h-px bg-white/10" />
                            <div className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-500/50 bg-emerald-500/10 text-emerald-400 text-[10px] font-mono uppercase tracking-widest shadow-[0_0_15px_rgba(16,185,129,0.3)]">
                                <CheckCircle2 className="w-3 h-3" /> Precision
                            </div>
                        </div>

                        <h1 className="text-7xl md:text-9xl font-black leading-[0.9] tracking-tighter mb-12 text-white">
                            INTELLIGENCE <br /> IS <span className="text-transparent bg-clip-text bg-gradient-to-b from-emerald-300 to-emerald-600 filter drop-shadow-[0_0_20px_rgba(16,185,129,0.5)]">CURRENCY.</span>
                        </h1>

                        <p className="text-xl md:text-2xl text-zinc-400 max-w-3xl mx-auto font-light leading-relaxed">
                            Growth isn't an accident. It's an equation. <br />
                            <strong className="text-white">Guessing</strong> is a liability. <strong className="text-emerald-400">Knowing</strong> is a competitive advantage.
                        </p>

                        {/* Scroll Prompt */}
                        <div className="mt-32 flex flex-col items-center gap-4 opacity-50">
                            <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-emerald-500">Initialize</span>
                            <div className="w-px h-16 bg-gradient-to-b from-emerald-500 to-transparent" />
                        </div>
                    </div>
                </section>


                {/* --- SECTION 2: THE DIVIDE (GUESSING VS KNOWING) --- */}
                <section className="min-h-screen flex items-center justify-center p-6 border-t border-white/5 bg-[#050505]">
                    <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">

                        {/* BLOCK 1: THE FOG (Guessing) */}
                        <div className="group relative bg-[#0a0a0a] rounded-3xl border border-white/5 p-12 overflow-hidden flex flex-col justify-between min-h-[600px] transition-all hover:border-white/10">
                            <div className="absolute inset-0 bg-noise opacity-5 mix-blend-overlay" />
                            <div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-40 transition-opacity">
                                <div className="text-6xl font-black text-white/5 select-none">???</div>
                            </div>

                            <div>
                                <div className="inline-flex items-center gap-2 text-zinc-500 font-mono text-xs uppercase tracking-widest mb-6">
                                    <XCircle className="w-4 h-4" /> The Disadvantage
                                </div>
                                <h3 className="text-4xl font-bold text-zinc-400 mb-4 group-hover:text-zinc-200 transition-colors">Operating in <br /> The Dark</h3>
                                <p className="text-zinc-500 text-lg leading-relaxed">
                                    "I think players liked it?" <br />
                                    "Engagement felt good?" <br />
                                    "Maybe we charge more next time?"
                                </p>
                            </div>

                            <div className="space-y-4 mt-12 opacity-50 grayscale group-hover:grayscale-0 transition-all duration-700">
                                <div className="h-2 w-full bg-zinc-800 rounded-full overflow-hidden">
                                    <div className="h-full w-[30%] bg-zinc-600 rounded-full blur-[2px]" />
                                </div>
                                <div className="h-2 w-3/4 bg-zinc-800 rounded-full overflow-hidden">
                                    <div className="h-full w-[20%] bg-zinc-600 rounded-full blur-[2px]" />
                                </div>
                                <div className="text-xs font-mono text-zinc-600 mt-2">DATA INTEGRITY: CRITICAL FAILURE</div>
                            </div>
                        </div>

                        {/* BLOCK 2: THE CLARITY (Knowing) */}
                        <div className="group relative bg-black/50 rounded-3xl border border-emerald-500/30 p-12 overflow-hidden flex flex-col justify-between min-h-[600px] shadow-[0_0_50px_rgba(16,185,129,0.05)] hover:shadow-[0_0_80px_rgba(16,185,129,0.1)] transition-all">

                            {/* Background Grid */}
                            <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.03)_1px,transparent_1px)] bg-[size:20px_20px]" />
                            <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/5 to-transparent" />

                            <div>
                                <div className="inline-flex items-center gap-2 text-emerald-400 font-mono text-xs uppercase tracking-widest mb-6 drop-shadow-md">
                                    <Lock className="w-4 h-4" /> The Sovereign Advantage
                                </div>
                                <h3 className="text-4xl font-bold text-white mb-4">Total Information <br /> Awareness</h3>
                                <p className="text-emerald-100/60 text-lg leading-relaxed">
                                    Every interaction logged. <br />
                                    Every dollar accounted for. <br />
                                    Every future predicted.
                                </p>
                            </div>

                            {/* Live Data Visual */}
                            <div className="mt-12 bg-black/40 border border-emerald-500/20 rounded-xl p-6 backdrop-blur-md relative overflow-hidden group-hover:border-emerald-500/40 transition-colors">
                                <div className="flex justify-between items-end mb-4">
                                    <div className="text-xs font-mono text-emerald-500/50 uppercase">Asset Valuation</div>
                                    <div className="text-2xl font-black text-white">$420,069.00</div>
                                </div>

                                <div className="space-y-1">
                                    <div className="flex items-center gap-2">
                                        <div className="w-[85%] h-1 bg-emerald-900/50 rounded-full overflow-hidden">
                                            <div className="h-full bg-emerald-400 shadow-[0_0_10px_rgba(16,185,129,0.5)] w-full animate-pulse" />
                                        </div>
                                        <div className="text-[10px] font-mono text-emerald-400">98%</div>
                                    </div>
                                    <div className="flex justify-between text-[10px] font-mono text-emerald-500/50">
                                        <span>CONFIDENCE</span>
                                        <span>VERIFIED</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>


                {/* --- SECTION 2.5: ECOSYSTEM SURVEILLANCE (REPLACEMENT) --- */}
                <section className="min-h-screen flex flex-col items-center justify-center p-6 bg-[#050505] border-t border-white/5 relative overflow-hidden">
                    {/* Background Radar Effect */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
                        <div className="w-[800px] h-[800px] border border-white/5 rounded-full animate-[spin_60s_linear_infinite]" />
                        <div className="w-[600px] h-[600px] border border-white/5 rounded-full animate-[spin_40s_linear_infinite_reverse]" />
                        <div className="w-[400px] h-[400px] border border-white/10 rounded-full" />
                    </div>

                    <div className="w-full max-w-7xl z-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

                        {/* LEFT: NARATIVE */}
                        <div className="text-left">
                            <div className="inline-flex items-center gap-2 text-indigo-400 font-mono text-xs uppercase tracking-widest mb-6 border border-indigo-500/20 bg-indigo-500/5 px-3 py-1 rounded-full">
                                <TrendingUp className="w-3 h-3" /> Total Coverage
                            </div>
                            <h2 className="text-5xl md:text-7xl font-black text-white mb-8 uppercase tracking-tighter leading-[0.9]">
                                NO <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">BLIND SPOTS.</span>
                            </h2>
                            <p className="text-zinc-400 text-xl font-light leading-relaxed mb-8">
                                Fragmented data is a liability. We unify your entire campaign ecosystem into a single source of truth.
                            </p>

                            <div className="space-y-4 font-mono text-sm text-zinc-500">
                                <div className="flex items-center gap-4">
                                    <div className="w-2 h-2 bg-indigo-500 rounded-full shadow-[0_0_10px_rgba(99,102,241,0.5)]" />
                                    <span>CROSS-PLATFORM AGGREGATION</span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-2 h-2 bg-purple-500 rounded-full shadow-[0_0_10px_rgba(168,85,247,0.5)]" />
                                    <span>REAL-TIME AUDIENCE MAPPING</span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-2 h-2 bg-pink-500 rounded-full shadow-[0_0_10px_rgba(236,72,153,0.5)]" />
                                    <span>SENTIMENT ANALYSIS</span>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT: THE HUB VISUAL - REIMAGINED "GRAVITY WELL" */}
                        <div className="relative h-[600px] w-full flex items-center justify-center perspective-1000">

                            {/* 1. THE STATIC CORE (WINRVTE) */}
                            {/* Sticks to the center while everything spins around it */}
                            <div className="absolute z-20 w-40 h-40 bg-black/80 backdrop-blur-xl border border-cyan-500/50 rounded-full flex items-center justify-center shadow-[0_0_60px_rgba(34,211,238,0.3)]">
                                <div className="text-sm font-black tracking-widest relative z-10">
                                    <span className="text-cyan-400 drop-shadow-[0_0_10px_rgba(34,211,238,1)]">WIN</span>
                                    <span className="text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">RVTE</span>
                                </div>
                                {/* Core Pulse */}
                                <div className="absolute inset-0 border border-cyan-500/30 rounded-full animate-ping" style={{ animationDuration: '3s' }} />
                                <div className="absolute -inset-2 border border-indigo-500/20 rounded-full animate-pulse" />
                            </div>

                            {/* 2. THE ROTATING ORBITAL PLATE */}
                            {/* A single container that holds both the Tethers and the Icons. 
                                 This guarantees they NEVER detach. */}
                            <div className="absolute w-[500px] h-[500px] animate-[spin_30s_linear_infinite]">

                                {/* --- SPOKE 1: TWITCH (Top / 0deg) --- */}
                                <div className="absolute left-1/2 top-0 bottom-1/2 w-0 -ml-[1px] flex flex-col items-center justify-start origin-bottom">
                                    {/* The Tether Line */}
                                    <div className="h-full w-[2px] bg-gradient-to-t from-transparent via-purple-500/50 to-purple-500 relative overflow-hidden">
                                        <div className="absolute inset-0 bg-white/50 blur-[1px] animate-[translate-y_2s_infinite]" />
                                    </div>

                                    {/* The Node Icon - GYROSCOPIC STABILIZATION */}
                                    {/* Wrapper spins in REVERSE to keep icon upright */}
                                    <div className="absolute -top-8 w-16 h-16 flex items-center justify-center animate-[spin_30s_linear_infinite]" style={{ animationDirection: 'reverse' }}>
                                        <div className="w-full h-full bg-[#0a0a0a]/90 border border-purple-500/50 rounded-2xl flex items-center justify-center shadow-[0_0_30px_rgba(168,85,247,0.3)] backdrop-blur-md transition-transform hover:scale-110">
                                            <svg className="w-8 h-8 text-purple-400" viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714Z" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>

                                {/* --- SPOKE 2: YOUTUBE (Right / 120deg) --- */}
                                <div className="absolute left-1/2 top-0 bottom-1/2 w-0 -ml-[1px] flex flex-col items-center justify-start origin-bottom rotate-[120deg]">
                                    {/* The Tether Line */}
                                    <div className="h-full w-[2px] bg-gradient-to-t from-transparent via-red-500/50 to-red-500 relative overflow-hidden">
                                        <div className="absolute inset-0 bg-white/50 blur-[1px] animate-[translate-y_3s_infinite]" />
                                    </div>

                                    {/* The Node Icon - GYROSCOPIC STABILIZATION */}
                                    <div className="absolute -top-8 w-16 h-16 flex items-center justify-center animate-[spin_30s_linear_infinite]" style={{ animationDirection: 'reverse' }}>
                                        {/* Inner rotation counteracts spoke rotation (-120deg) so it starts upright, 
                                            then the wrapper counter-spins to KEEP it upright. */}
                                        <div className="w-full h-full bg-[#0a0a0a]/90 border border-red-500/50 rounded-2xl flex items-center justify-center shadow-[0_0_30px_rgba(239,68,68,0.3)] backdrop-blur-md transition-transform hover:scale-110 -rotate-[120deg]">
                                            <svg className="w-8 h-8 text-red-500" viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>

                                {/* --- SPOKE 3: X (Left / 240deg) --- */}
                                <div className="absolute left-1/2 top-0 bottom-1/2 w-0 -ml-[1px] flex flex-col items-center justify-start origin-bottom rotate-[240deg]">
                                    {/* The Tether Line */}
                                    <div className="h-full w-[2px] bg-gradient-to-t from-transparent via-zinc-500/50 to-zinc-500 relative overflow-hidden">
                                        <div className="absolute inset-0 bg-white/50 blur-[1px] animate-[translate-y_2.5s_infinite]" />
                                    </div>

                                    {/* The Node Icon - GYROSCOPIC STABILIZATION */}
                                    <div className="absolute -top-8 w-16 h-16 flex items-center justify-center animate-[spin_30s_linear_infinite]" style={{ animationDirection: 'reverse' }}>
                                        {/* Inner rotation counteracts spoke rotation (-240deg) */}
                                        <div className="w-full h-full bg-[#0a0a0a]/90 border border-zinc-500/50 rounded-2xl flex items-center justify-center shadow-[0_0_30px_rgba(255,255,255,0.1)] backdrop-blur-md transition-transform hover:scale-110 -rotate-[240deg]">
                                            <svg className="w-6 h-6 text-zinc-100" viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>


                {/* --- SECTION 3: THE LEVERAGE (GRAPH) --- */}
                <section className="min-h-screen flex flex-col items-center justify-center p-6 bg-[#030303] border-t border-white/5 relative">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,50,255,0.03),transparent_70%)] pointer-events-none" />

                    <div className="max-w-6xl w-full text-center relative z-10">
                        <div className="inline-flex items-center gap-2 text-blue-400 font-mono text-xs uppercase tracking-widest mb-8">
                            <BarChart2 className="w-4 h-4" /> <span>Market Dominance</span>
                        </div>
                        <h2 className="text-5xl md:text-7xl font-black text-white mb-24 uppercase">
                            Unfair <span className="text-blue-500">Leverage.</span>
                        </h2>

                        {/* CHART: Fixed Height, Flex Layout */}
                        <div className="h-[500px] w-full max-w-4xl mx-auto flex items-end justify-center gap-24 relative p-10 border-b border-white/10">

                            {/* Dashed Grid Lines */}
                            <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-10">
                                {[1, 2, 3, 4, 5].map(i => <div key={i} className="w-full h-px bg-white border-t border-dashed" />)}
                            </div>

                            {/* BAR 1: GUESSING */}
                            <div className="flex flex-col items-center gap-4 group w-32 pb-px"> {/* pb-px aligns to border */}
                                <div className="w-full bg-zinc-800/50 border border-white/10 h-[80px] rounded-t-lg relative transition-all group-hover:bg-zinc-800">
                                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs font-mono text-zinc-500 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                                        NO BASELINE
                                    </div>
                                </div>
                                <div className="text-xs font-mono text-zinc-600 uppercase tracking-widest">Guessing</div>
                            </div>

                            {/* BAR 2: KNOWING */}
                            <div className="flex flex-col items-center gap-4 group w-40 pb-px relative">
                                <div className="absolute -inset-10 bg-blue-500/10 blur-3xl rounded-full opacity-50" />

                                <div className="w-full bg-gradient-to-t from-blue-600 via-blue-500 to-cyan-400 h-[450px] rounded-t-lg relative shadow-[0_0_50px_rgba(59,130,246,0.4)] border-t border-white/50">
                                    {/* Inner Shine */}
                                    <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_40%,rgba(255,255,255,0.2)_50%,transparent_60%)] opacity-30 bg-[length:200%_200%] animate-pulse" />

                                    {/* Label */}
                                    <div className="absolute top-6 inset-x-0 text-center">
                                        <div className="text-3xl font-black text-white drop-shadow-lg">10x</div>
                                        <div className="text-[10px] font-mono text-blue-100 uppercase tracking-widest">ROI Multiplier</div>
                                    </div>
                                </div>
                                <div className="text-sm font-bold font-mono text-blue-400 uppercase tracking-widest mt-2 flex items-center gap-2">
                                    Knowing <CheckCircle2 className="w-4 h-4" />
                                </div>
                            </div>
                        </div>

                        <p className="text-zinc-500 mt-16 text-xl max-w-2xl mx-auto">
                            When you know your numbers, you don't ask for a price. <br />
                            <span className="text-white">You set the market.</span>
                        </p>
                    </div>
                </section>

                {/* --- FOOTER CTA --- */}
                <section className="h-[60vh] flex flex-col items-center justify-center p-6 bg-[#020202]">
                    <Button onClick={onNext} className="group relative bg-white text-black hover:bg-emerald-400 px-16 py-8 rounded-full text-2xl font-black shadow-[0_0_50px_rgba(255,255,255,0.1)] transition-all hover:scale-105 hover:shadow-[0_0_80px_rgba(16,185,129,0.4)]">
                        <span className="relative z-10">UNLOCK THE DATA</span>
                    </Button>
                    <div className="mt-8 text-xs font-mono text-zinc-700 uppercase tracking-[0.5em]">Winrvte Intelligence Layer</div>
                </section>

                <div className="h-20" />
            </div >
        </div >
    );
}
