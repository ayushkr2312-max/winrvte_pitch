import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { AlertTriangle, TrendingDown, TrendingUp, Activity, CheckCircle, Database, ArrowLeft } from "lucide-react";
import { Button } from "../ui/Button";

interface SlideProps {
    isActive: boolean;
    onBack: () => void;
    onNext: () => void;
}

export function SlideProjectPhoenix({ isActive, onBack, onNext }: SlideProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        container: containerRef,
        offset: ["start start", "end end"]
    });

    // --- Transformations ---
    // 0-0.25: Stage 1 (Critical)
    // 0.25-0.5: Stage 2 (Fix)
    // 0.5-0.75: Stage 3 (Growth)
    // 0.75-1.0: Stage 4 (CTA)

    const backgroundColor = useTransform(
        scrollYProgress,
        [0, 0.3, 0.6, 0.9],
        ["#2A0A0A", "#050505", "#0A1A2F", "#000000"] // Dark Red -> Obsidian -> Dark Blue -> Black
    );

    const graphPath = "M0 50 Q 50 50 100 80 T 200 120"; // Downward
    const graphPathFix = "M0 120 Q 50 120 100 120 T 200 120"; // Flat
    const graphPathUp = "M0 120 Q 50 120 100 50 T 200 10"; // Upward

    // Simplified stage detection for conditional rendering
    const [stage, setStage] = useState(0);
    useEffect(() => {
        return scrollYProgress.on("change", (v) => {
            if (v < 0.25) setStage(0);
            else if (v < 0.5) setStage(1);
            else if (v < 0.8) setStage(2);
            else setStage(3);
        });
    }, [scrollYProgress]);

    if (!isActive) return null;

    return (
        <motion.div
            ref={containerRef}
            className="absolute inset-0 z-20 overflow-y-scroll scrollbar-hide"
            style={{ backgroundColor }}
        >
            {/* Fixed Back Button (Left Edge) */}
            <div className="fixed left-8 top-1/2 -translate-y-1/2 z-50">
                <button
                    onClick={onBack}
                    className="group w-20 h-20 border border-red-500/50 rounded-full flex items-center justify-center hover:bg-red-500/10 transition-all hover:scale-110 active:scale-95 backdrop-blur-sm shadow-[0_0_30px_rgba(239,68,68,0.2)]"
                >
                    <ArrowLeft className="w-8 h-8 text-red-500 group-hover:text-red-400 transition-colors" />
                </button>
            </div>

            <div className="h-[400vh] relative">

                {/* --- STICKY DASHBOARD --- */}
                <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center p-4 md:p-10 pointer-events-none">

                    {/* Header Status */}
                    <div className="absolute top-10 left-0 w-full flex justify-between px-10">
                        <motion.div
                            className="text-sm font-mono tracking-widest uppercase border border-white/20 px-3 py-1 rounded bg-black/50 backdrop-blur"
                            animate={{
                                borderColor: stage === 0 ? "rgba(239,68,68,0.5)" : stage === 2 ? "rgba(59,130,246,0.5)" : "rgba(255,255,255,0.2)",
                                color: stage === 0 ? "#EF4444" : stage === 2 ? "#3B82F6" : "#FFFFFF"
                            }}
                        >
                            {stage === 0 ? "⚠️ STATUS: CRITICAL" : stage === 1 ? "⚙️ PROTOCOL: OPTIMIZING" : stage === 2 ? "🚀 STATUS: DOMINANCE" : "CASE STUDY: COMPLETE"}
                        </motion.div>
                        <div className="text-xs text-white/30 font-mono">PROJECT PHOENIX // CS-001</div>
                    </div>

                    {/* MAIN DASHBOARD UI */}
                    <div className="relative w-full max-w-4xl aspect-video bg-black/40 border border-white/10 rounded-xl overflow-hidden backdrop-blur-md shadow-2xl">

                        {/* Glitch Overlay (Stage 0) */}
                        {stage === 0 && (
                            <div className="absolute inset-0 z-20 pointer-events-none opacity-50 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] animate-pulse mix-blend-overlay" />
                        )}

                        {/* Top Bar */}
                        <div className="h-10 border-b border-white/10 flex items-center px-4 gap-4">
                            <div className="flex gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-500/20" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500/20" />
                                <div className="w-3 h-3 rounded-full bg-green-500/20" />
                            </div>
                            <div className="flex-1 text-center font-mono text-[10px] text-white/20">DASHBOARD // V.2.0.4</div>
                        </div>

                        {/* Content Grid */}
                        <div className="grid grid-cols-3 h-full p-4 gap-4">

                            {/* Col 1: Roster */}
                            <div className="col-span-1 border-r border-white/5 pr-4 flex flex-col gap-2">
                                <div className="text-xs text-white/40 font-display uppercase">Roster Synergy</div>
                                <motion.div
                                    className="text-4xl font-brand font-bold"
                                    animate={{ color: stage === 0 ? "#EF4444" : "#3B82F6" }}
                                >
                                    {stage === 0 ? "12%" : stage === 1 ? "68%" : "94%"}
                                </motion.div>
                                <div className="flex flex-col gap-2 mt-4">
                                    {/* Player 1 */}
                                    <div className="p-2 bg-white/5 rounded border border-white/5 flex justify-between items-center">
                                        <span className="text-xs text-white/70">{stage < 2 ? "PlayerA" : "ShadowX"}</span>
                                        {stage === 1 && <span className="text-[10px] text-yellow-500">SWAPPING</span>}
                                        {stage === 2 && <CheckCircle className="w-3 h-3 text-blue-500" />}
                                    </div>
                                    {/* Player 2 */}
                                    <div className="p-2 bg-white/5 rounded border border-white/5 flex justify-between items-center">
                                        <span className="text-xs text-white/70">{stage < 2 ? "PlayerB" : "Wraith"}</span>
                                        {stage === 1 && <span className="text-[10px] text-yellow-500">SWAPPING</span>}
                                        {stage === 2 && <CheckCircle className="w-3 h-3 text-blue-500" />}
                                    </div>
                                    {/* Player 3 */}
                                    <div className="p-2 bg-white/5 rounded border border-white/5 flex justify-between items-center">
                                        <span className="text-xs text-white/70">Core</span>
                                        <CheckCircle className="w-3 h-3 text-white/20" />
                                    </div>
                                </div>
                            </div>

                            {/* Col 2 & 3: Graph */}
                            <div className="col-span-2 flex flex-col relative">
                                <div className="absolute top-4 right-4 flex gap-2">
                                    {stage === 0 && <div className="px-2 py-1 bg-red-500/20 text-red-500 text-[10px] border border-red-500/30 rounded">BUDGET: EMPTY</div>}
                                    {stage === 2 && <div className="px-2 py-1 bg-blue-500/20 text-blue-500 text-[10px] border border-blue-500/30 rounded shiny-badge">SPONSOR ACQUIRED</div>}
                                </div>

                                <div className="text-xs text-white/40 font-display uppercase mb-4">Performance Velocity</div>

                                <div className="flex-1 w-full bg-white/5 rounded relative overflow-hidden flex items-end">
                                    {/* The Graph */}
                                    <svg className="w-full h-full p-4 overflow-visible" viewBox="0 0 200 130" preserveAspectRatio="none">
                                        <defs>
                                            <linearGradient id="gradRed" x1="0" y1="0" x2="0" y2="1">
                                                <stop offset="0%" stopColor="rgba(239, 68, 68, 0.5)" />
                                                <stop offset="100%" stopColor="rgba(239, 68, 68, 0)" />
                                            </linearGradient>
                                            <linearGradient id="gradBlue" x1="0" y1="0" x2="0" y2="1">
                                                <stop offset="0%" stopColor="rgba(59, 130, 246, 0.5)" />
                                                <stop offset="100%" stopColor="rgba(59, 130, 246, 0)" />
                                            </linearGradient>
                                        </defs>

                                        {stage === 0 && (
                                            <motion.path
                                                d="M0 40 L40 60 L80 110 L120 100 L160 120 L200 125"
                                                fill="url(#gradRed)"
                                                stroke="#EF4444"
                                                strokeWidth="2"
                                                initial={{ pathLength: 0 }}
                                                animate={{ pathLength: 1 }}
                                            />
                                        )}
                                        {stage === 1 && (
                                            <motion.path
                                                d="M0 125 L40 120 L80 122 L120 121 L160 120 L200 120"
                                                fill="transparent"
                                                stroke="#FFFFFF"
                                                strokeWidth="2"
                                                strokeDasharray="5 5"
                                            />
                                        )}
                                        {stage === 2 && (
                                            <motion.path
                                                d="M0 120 L40 110 L80 80 L120 40 L160 20 L200 5"
                                                fill="url(#gradBlue)"
                                                stroke="#3B82F6"
                                                strokeWidth="3"
                                                initial={{ pathLength: 0 }}
                                                animate={{ pathLength: 1 }}
                                                transition={{ duration: 1.5 }}
                                            />
                                        )}
                                    </svg>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                {/* --- SCROLL NARRATIVE SECTIONS --- */}

                {/* Section 1: STATUS CRITICAL */}
                <div className="absolute top-0 h-screen w-full flex items-center p-10 pointer-events-none">
                    <div className="w-full max-w-6xl mx-auto flex justify-start">
                        <motion.div
                            className="w-1/3 bg-black/80 border-l-4 border-red-500 p-8 backdrop-blur"
                            initial={{ x: -50, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                        >
                            <div className="text-red-500 font-mono text-sm mb-2">SUBJECT: X ESPORTS</div>
                            <h3 className="text-2xl font-bold text-white mb-4">Month 0: The Bleeding</h3>
                            <p className="text-text-secondary">
                                The team is bleeding cash. Signing players on hype, not data. content getting zero views.
                                The owner is ready to sell.
                            </p>
                            <div className="mt-4 flex items-center gap-2 text-red-500 font-bold text-sm">
                                <AlertTriangle className="w-4 h-4" /> TRENDING TO ZERO
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Section 2: INTEGRATION */}
                <div className="absolute top-[100vh] h-screen w-full flex items-center p-10 pointer-events-none">
                    <div className="w-full max-w-6xl mx-auto flex justify-end">
                        <motion.div
                            className="w-1/3 bg-black/80 border-r-4 border-white/50 p-8 backdrop-blur text-right"
                            initial={{ x: 50, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                        >
                            <div className="text-white font-mono text-sm mb-2">THE INTERVENTION</div>
                            <h3 className="text-2xl font-bold text-white mb-4">Month 1: The Fix</h3>
                            <p className="text-text-secondary">
                                We installed the infrastructure. Automations replaced manual entry.
                                Our 'Watchtower' identified two undervalued free agents to replace underperformers.
                            </p>
                            <div className="mt-4 flex items-center justify-end gap-2 text-white font-bold text-sm">
                                <Database className="w-4 h-4" /> SYSTEM ONLINE
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Section 3: GROWTH */}
                <div className="absolute top-[200vh] h-screen w-full flex items-center p-10 pointer-events-none">
                    <div className="w-full max-w-6xl mx-auto flex justify-start">
                        <motion.div
                            className="w-1/3 bg-black/80 border-l-4 border-blue-500 p-8 backdrop-blur"
                            initial={{ x: -50, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                        >
                            <div className="text-blue-500 font-mono text-sm mb-2">RESULTS</div>
                            <h3 className="text-2xl font-bold text-white mb-4">Month 3: Dominance</h3>
                            <p className="text-text-secondary">
                                Performance stabilized. Content is data-backed and viral.
                                X Esports is no longer surviving; they are conquering.
                            </p>
                            <div className="mt-4 flex items-center gap-2 text-blue-500 font-bold text-sm">
                                <TrendingUp className="w-4 h-4" /> EXPONENTIAL GROWTH
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Section 4: FINAL CTA */}
                <div className="absolute top-[300vh] h-screen w-full flex flex-col items-center justify-center p-10 bg-black/90 pointer-events-auto z-30 overflow-hidden">
                    {/* Confetti Explosion */}
                    <div className="absolute inset-0 pointer-events-none">
                        {[...Array(20)].map((_, i) => (
                            <motion.div
                                key={i}
                                className={`absolute left-1/2 top-1/2 w-2 h-2 rounded-full ${i % 2 === 0 ? 'bg-blue-500' : 'bg-white'}`}
                                initial={{ scale: 0, x: 0, y: 0 }}
                                whileInView={{
                                    scale: [0, 1, 0],
                                    x: (Math.random() - 0.5) * 800,
                                    y: (Math.random() - 0.5) * 800,
                                    rotate: Math.random() * 360
                                }}
                                transition={{ duration: 2, ease: "easeOut", delay: 0.2 }}
                            />
                        ))}
                    </div>

                    <motion.h2
                        className="text-6xl md:text-8xl font-brand font-black text-white mb-12 text-center relative z-10"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                    >
                        YOU ARE <span className="text-blue-500">NEXT.</span>
                    </motion.h2>

                    <div className="flex gap-4 relative z-10">
                        <Button
                            className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-6 text-lg tracking-widest"
                            onClick={onNext}
                        >
                            INITIATE YOUR TURNAROUND
                        </Button>

                        <Button
                            variant="outline"
                            className="border-white/20 hover:bg-white/10"
                            onClick={onBack}
                        >
                            REPLAY CASE STUDY
                        </Button>
                    </div>
                </div>


            </div>
        </motion.div>
    );
}
