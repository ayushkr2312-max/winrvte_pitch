"use client";

import { motion, useScroll, useTransform, useSpring, useMotionValue, useMotionTemplate, AnimatePresence } from "framer-motion";
import { Users, Video, BrainCircuit, ArrowLeft, ChevronRight, AlertTriangle, Activity, Hourglass, Database, AlertOctagon, Zap, ShieldAlert, FileWarning } from "lucide-react";
import { useRef, useState, useEffect, useMemo } from "react";
import Lenis from "lenis";

interface Slide2Props {
    isActive: boolean;
    onBack: () => void;
    onNext: () => void;
}

export function Slide2Chaos({ isActive, onBack, onNext }: Slide2Props) {
    if (!isActive) return null;

    const [isExiting, setIsExiting] = useState(false);

    // THE DRAMATIC EXIT: System Failure -> Chaos
    const handleTransition = () => {
        setIsExiting(true);
        setTimeout(onNext, 1200); // Wait for the glitch to consume the screen
    };

    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        container: containerRef,
        offset: ["start start", "end end"]
    });

    // Smooth Scroll Setup
    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const lenis = new Lenis({
            wrapper: container,
            content: container.firstElementChild as HTMLElement,
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            orientation: 'vertical',
            gestureOrientation: 'vertical',
            smoothWheel: true,
        });

        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
        };
    }, [isActive]);

    // Parallax & transforms
    const headerOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);
    const headerScale = useTransform(scrollYProgress, [0, 0.1], [1, 0.9]);
    const bgNoiseOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.05, 0.1, 0.05]);

    return (
        <div
            ref={containerRef}
            className="absolute inset-0 z-20 overflow-y-auto overflow-x-hidden bg-[#050505] scrollbar-hide perspective-1000 selection:bg-blue-500/30 font-brand"
        >
            {/* Global Noise Overlay */}
            <motion.div
                style={{ opacity: bgNoiseOpacity }}
                className="fixed inset-0 bg-noise pointer-events-none z-0 mix-blend-overlay"
            />

            {/* Faint Blue/Dark Gradient at bottom */}
            <div className="fixed bottom-0 left-0 right-0 h-[50vh] bg-gradient-to-t from-blue-950/20 to-transparent pointer-events-none z-0" />

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, filter: isExiting ? "grayscale(100%) contrast(150%)" : "none", scale: isExiting ? 0.95 : 1 }}
                transition={{ duration: 0.8 }}
                className="relative min-h-full"
            >
                {/* --- THE CHAOS BEAM (SCROLL LINE) --- */}
                {/* z-0 ensures it stays behind the z-10 sections */}
                <div className="absolute top-0 left-0 w-full h-[580vh] pointer-events-none z-0 hidden md:block">
                    <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
                        <defs>
                            <linearGradient id="beamGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                {/* 
                                    Gradient Map matched to Sections:
                                    0%: Hero (Blue)
                                    15%: Roster (Blue)
                                    30%: Content (Red)
                                    45%: Strategic (Amber)
                                    60%: Valuation (Blue)
                                    75%: Firefighting (Red)
                                    90%: Entropy (Purple)
                                    100%: Purple
                                */}
                                <stop offset="0%" stopColor="#3B82F6" />   {/* Blue (Hero) */}
                                <stop offset="15%" stopColor="#3B82F6" />  {/* Blue (Roster) */}
                                <stop offset="30%" stopColor="#EF4444" />  {/* Red (Content) */}
                                <stop offset="45%" stopColor="#F59E0B" />  {/* Amber (Strategic) */}
                                <stop offset="60%" stopColor="#3B82F6" />  {/* Blue (Valuation) */}
                                <stop offset="75%" stopColor="#EF4444" />  {/* Red (Firefighting) */}
                                <stop offset="90%" stopColor="#A855F7" />  {/* Purple (Entropy) */}
                                <stop offset="100%" stopColor="#A855F7" /> {/* Purple (Entropy) */}
                            </linearGradient>
                            <filter id="glow">
                                <feGaussianBlur stdDeviation="0.5" result="coloredBlur" />
                                <feMerge>
                                    <feMergeNode in="coloredBlur" />
                                    <feMergeNode in="SourceGraphic" />
                                </feMerge>
                            </filter>
                        </defs>

                        {/* Background Guide Line */}
                        <path
                            d="M 50 0 L 50 15 L 80 15 L 80 28 L 20 28 L 20 41 L 80 41 L 80 55 L 20 55 L 20 69 L 80 69 L 80 83 L 20 83 L 20 92 L 38 92"
                            fill="none"
                            stroke="rgba(255,255,255,0.03)"
                            strokeWidth="0.2"
                        />

                        {/* The Active Beam */}
                        <motion.path
                            d="M 50 0 L 50 15 L 80 15 L 80 28 L 20 28 L 20 41 L 80 41 L 80 55 L 20 55 L 20 69 L 80 69 L 80 83 L 20 83 L 20 92 L 38 92"
                            fill="none"
                            stroke="url(#beamGradient)"
                            strokeWidth="0.4"
                            strokeLinecap="round"
                            style={{ pathLength: scrollYProgress }}
                            filter="url(#glow)"
                        />
                    </svg>
                </div>

                {/* Navigation: Return */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1 }}
                    className="fixed top-8 left-8 z-50 mix-blend-difference"
                >
                    <button
                        onClick={onBack}
                        className="text-white/50 hover:text-white flex items-center gap-3 uppercase tracking-[0.2em] text-[10px] font-mono transition-colors group"
                    >
                        <ArrowLeft className="w-3 h-3 group-hover:-translate-x-1 transition-transform" />
                        <span>System Exit</span>
                    </button>
                </motion.div>

                {/* --- SECTION 0: THE HOOK --- */}
                <section className="min-h-screen flex flex-col items-center justify-center relative px-6 py-20 z-10">
                    <motion.div
                        style={{ opacity: headerOpacity, scale: headerScale }}
                        className="text-center space-y-8 max-w-5xl relative"
                    >
                        {/* Status Label - Subtler Pulse */}
                        <div className="inline-flex items-center gap-2 px-3 py-1 border border-blue-500/30 bg-blue-900/10 rounded-full mb-4">
                            <Activity className="w-3 h-3 text-blue-500" />
                            <span className="text-[10px] font-mono text-blue-400 tracking-widest uppercase">System Diagnostics Initiated</span>
                        </div>

                        <h2 className="text-5xl md:text-8xl font-black text-white leading-[0.9] tracking-tighter">
                            THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500 decoration-blue-500/30 underline-offset-8">VIBES-BASED</span> <br />
                            <span className="text-red-500 animate-[pulse_1.5s_ease-in-out_infinite]">TRAP.</span>
                        </h2>

                        <p className="text-xl md:text-2xl text-zinc-400 font-light leading-relaxed max-w-3xl mx-auto">
                            You aren't losing because of bad luck.
                        </p>
                    </motion.div>

                    {/* Scroll Hint */}
                    <motion.div
                        style={{ opacity: headerOpacity }}
                        className="absolute bottom-12 flex flex-col items-center gap-3"
                    >
                        <span className="text-[10px] uppercase tracking-[0.3em] text-zinc-600">Scan Infrastructure</span>
                        <ChevronRight className="w-4 h-4 text-zinc-600 rotate-90" />
                    </motion.div>
                </section>

                {/* --- CHAOS SECTIONS --- */}

                {/* 1. ROSTER ROULETTE (BLUE) */}
                <ChaosSection
                    index="01"
                    title="ROSTER ROULETTE"
                    subtitle="Acquisition Failure"
                    description={<>Burning budget on <span className="text-white font-semibold">community hype</span>. Without granular data, you are essentially gambling on lineups.</>}
                    stat="-$250k / yr"
                    statLabel="Waste Avg"
                    icon={<Users className="w-8 h-8" />}
                    theme="blue"
                    align="left"
                    visual={<RosterVisual />}
                />

                {/* 2. THE CONTENT VOID (RED) */}
                <ChaosSection
                    index="02"
                    title="THE CONTENT VOID"
                    subtitle="Engagement Loss"
                    description={<>High production costs with <span className="text-white font-semibold">zero ROI</span>. Blindly chasing trends instead of building a narrative attached to winning.</>}
                    stat="0%"
                    statLabel="Conversion"
                    icon={<Video className="w-8 h-8" />}
                    theme="red"
                    align="right"
                    visual={<ContentVisual />}
                />

                {/* 3. STRATEGIC PARALYSIS (AMBER) */}
                <ChaosSection
                    index="03"
                    title="STRATEGIC PARALYSIS"
                    subtitle="Insight Latency"
                    description={<>Your staff is manually logging scripts while opponents analyze your weaknesses. You are paying strategists to do <span className="text-white font-semibold">data entry</span>.</>}
                    stat="48 hrs"
                    statLabel="Analysis Lag"
                    icon={<BrainCircuit className="w-8 h-8" />}
                    theme="amber"
                    align="left"
                    visual={<StrategicVisual />}
                />

                {/* 4. THE VALUATION BLACK BOX (BLUE) */}
                <ChaosSection
                    index="04"
                    title="VALUATION BLACK BOX"
                    subtitle="Leverage Zero"
                    description={<>Sponsors don't care about "vibes". If you can't <span className="text-white font-semibold">prove your growth</span> with hard data, you are invisible to serious capital.</>}
                    stat="INVISIBLE"
                    statLabel="Asset Class"
                    icon={<ShieldAlert className="w-8 h-8" />}
                    theme="blue"
                    align="right"
                    visual={<ValuationVisual />}
                />

                {/* 5. REACTIVE FIREFIGHTING (RED) */}
                <ChaosSection
                    index="05"
                    title="REACTIVE FIREFIGHTING"
                    subtitle="Panic Hiring"
                    description={<>A player leaves. Panic sets in. You sign the first available option, not the best fitting one.</>}
                    stat="CRITICAL"
                    statLabel="Stability"
                    icon={<Zap className="w-8 h-8" />}
                    theme="red"
                    align="left"
                    visual={<FirefightingVisual />}
                />

                {/* 6. OPERATIONAL ENTROPY (PURPLE) */}
                <ChaosSection
                    index="06"
                    title="OPERATIONAL ENTROPY"
                    subtitle="Data Fragmentation"
                    description={<>Institutional knowledge scattered across DMs and Google Sheets. When staff leaves, they take your <span className="text-white font-semibold">brain</span> with them.</>}
                    stat="LOST"
                    statLabel="IP Value"
                    icon={<Database className="w-8 h-8" />}
                    theme="purple"
                    align="right"
                    visual={<EntropyVisual />}
                />


                {/* --- FOOTER: TRANSITION TO ORDER --- */}
                <div className="min-h-[50vh] flex flex-col items-center justify-center relative z-10 pb-20">
                    <motion.button
                        onClick={handleTransition}
                        className="relative text-center mb-12 group cursor-pointer focus:outline-none bg-[#050505] border border-white/10 hover:border-blue-500/50 p-8 md:p-12 rounded-[2rem] shadow-2xl z-50 overflow-hidden transition-all duration-500"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ margin: "-20%" }}
                        whileHover={{ scale: 1.05, boxShadow: "0 0 80px rgba(59,130,246,0.15)" }}
                        whileTap={{ scale: 0.98 }}
                    >
                        {/* Interactive Shine */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <h3 className="text-3xl md:text-5xl text-white font-bold mb-4 group-hover:text-blue-400 transition-colors">
                            Enough Chaos.
                        </h3>
                        <div className="flex items-center justify-center gap-2 text-zinc-500 group-hover:text-white transition-colors">
                            <span className="text-xl">It's time to build a system.</span>
                            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </div>
                    </motion.button>
                </div>
            </motion.div>

            {/* --- TRANSITION OVERLAY: SYSTEM FAILURE --- */}
            <AnimatePresence>
                {isExiting && (
                    <motion.div
                        className="fixed inset-0 z-[100] pointer-events-none flex items-center justify-center bg-black"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        {/* Red Flash */}
                        <motion.div
                            className="absolute inset-0 bg-red-600 mix-blend-overlay"
                            animate={{ opacity: [0, 0.5, 0, 0.8, 1] }}
                            transition={{ duration: 0.8, times: [0, 0.2, 0.4, 0.6, 1] }}
                        />

                        {/* Glitch Noise Texture */}
                        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-50 mix-blend-difference" />

                        {/* Critical Error Text */}
                        <motion.div
                            className="relative z-10 text-center"
                            animate={{ scale: [1, 1.1, 1.5], filter: ["blur(0px)", "blur(10px)"] }}
                            transition={{ duration: 1 }}
                        >
                            <AlertTriangle className="w-24 h-24 text-red-500 mx-auto mb-4 animate-bounce" />
                            <h1 className="text-6xl md:text-9xl font-black text-red-500 tracking-tighter glitch-text">
                                SYSTEM FAILURE
                            </h1>
                            <p className="text-red-400 font-mono tracking-[1em] uppercase mt-4">
                                INITIALIZING REBOOT...
                            </p>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

// --- SUB-COMPONENTS ---

interface ChaosSectionProps {
    index: string;
    title: string;
    subtitle: string;
    description: React.ReactNode;
    stat: string;
    statLabel: string;
    icon: React.ReactNode;
    theme: 'blue' | 'red' | 'amber' | 'purple';
    align: 'left' | 'right';
    visual: React.ReactNode;
}

const ChaosSection = ({ index, title, subtitle, description, stat, statLabel, icon, theme, align, visual }: ChaosSectionProps) => {
    const isLeft = align === 'left';

    // Theme configs
    const themes = {
        blue: { border: "border-blue-500/30", text: "text-blue-400", bg: "bg-blue-900/10", shadow: "shadow-blue-900/20" },
        red: { border: "border-red-500/30", text: "text-red-400", bg: "bg-red-900/10", shadow: "shadow-red-900/20" },
        amber: { border: "border-amber-500/30", text: "text-amber-400", bg: "bg-amber-900/10", shadow: "shadow-amber-900/20" },
        purple: { border: "border-purple-500/30", text: "text-purple-400", bg: "bg-purple-900/10", shadow: "shadow-purple-900/20" },
    };
    const t = themes[theme];

    return (
        <motion.section
            className={`min-h-[70vh] flex flex-col ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'} items-center justify-center gap-8 md:gap-20 px-6 py-12 max-w-7xl mx-auto relative z-10`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 0.6 }}
        >
            {/* CONTENT CARD */}
            <div className={`flex-1 relative group w-full max-w-lg`}>
                {/* Tech Border Container */}
                <div className={`absolute -inset-0.5 bg-gradient-to-r from-transparent via-${theme}-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl blur-sm`} />

                <motion.div
                    className={`relative h-full bg-[#0a0a0a] border border-white/10 p-8 rounded-xl backdrop-blur-xl overflow-hidden`}
                    whileHover={{
                        borderColor: "rgba(239,68,68,0.6)",
                        boxShadow: "0 0 30px rgba(239,68,68,0.2)",
                        transition: { duration: 0.4 }
                    }}
                >
                    {/* Header */}
                    <div className="flex items-start justify-between mb-6">
                        <div className="space-y-1">

                            <h3 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tight">
                                {title}
                            </h3>
                        </div>
                        <div className={`p-2 rounded-lg ${t.bg} border ${t.border}`}>
                            <div className={`${t.text}`}>{icon}</div>
                        </div>
                    </div>

                    {/* Description */}
                    <p className="text-zinc-400 leading-relaxed mb-8 border-l-2 border-white/5 pl-4">
                        {description}
                    </p>

                    {/* Stat / Consequence Box */}
                    <div className={`flex items-center gap-4 bg-black/40 rounded-lg p-3 border border-white/5`}>
                        <div className={`text-2xl font-mono font-bold ${t.text}`}>
                            {stat}
                        </div>
                        <div className="h-8 w-px bg-white/10" />
                        <div className="text-xs text-zinc-500 uppercase tracking-wider">
                            {statLabel}
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* VISUAL / HOLOGRAPHIC ELEMENT - Ensure High Z to stay above beam if needed, but beam is z-0 so this is fine */}
            <div className="flex-1 w-full flex justify-center items-center relative z-10">
                <div className={`relative w-64 h-64 md:w-80 md:h-80 flex items-center justify-center rounded-full bg-gradient-to-br from-white/5 to-transparent border border-white/5 backdrop-blur-sm ${t.shadow} shadow-2xl transition-all duration-500 hover:scale-105 bg-[#050505]/80`}>
                    {/* Inner Grid */}
                    <div className="absolute inset-4 rounded-full border border-dashed border-white/10 animate-[spin_20s_linear_infinite]" />
                    <div className="absolute inset-12 rounded-full border border-dotted border-white/10 animate-[spin_15s_linear_infinite_reverse]" />

                    {/* The Visual Content */}
                    <div className="relative z-10 scale-125">
                        {visual}
                    </div>
                </div>
            </div>
        </motion.section >
    );
};


// --- VISUALS ---

const RosterVisual = () => (
    <div className="relative flex items-center justify-center">
        <Users className="w-20 h-20 text-blue-500 opacity-80" />
        <div className="absolute -top-6 -right-6 bg-red-500 text-white text-[10px] font-bold px-2 py-1 rounded shadow-lg transform rotate-12">OVERPAID</div>
        <AlertOctagon className="absolute -bottom-2 -left-2 w-8 h-8 text-amber-500 fill-black/50" />
    </div>
);

const ContentVisual = () => (
    <div className="relative flex items-center justify-center">
        <div className="relative">
            <Video className="w-20 h-20 text-red-500 opacity-80" />
            {/* Static Lines */}
            <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.8)_50%)] bg-[length:100%_4px] opacity-20 pointer-events-none" />
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center bg-black/80 border border-red-500/30 text-red-500 font-mono text-xs tracking-widest px-2 py-1 rotate-[-10deg]">
            NO SIGNAL
        </div>
    </div>
);

const StrategicVisual = () => (
    <div className="flex flex-col items-center justify-center gap-3">
        <div className="relative">
            <BrainCircuit className="w-20 h-20 text-amber-500 opacity-80" />
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-28 h-1 bg-amber-500 rotate-45 opacity-50" />
            </div>
        </div>
        <div className="bg-amber-900/50 border border-amber-500/20 text-amber-200 text-[10px] px-3 py-1.5 rounded font-mono shadow-lg backdrop-blur-md">
            Analysis_Lag: 48h
        </div>
    </div>
);

const ValuationVisual = () => (
    <div className="flex flex-col items-center justify-center gap-3">
        <div className="relative">
            <ShieldAlert className="w-20 h-20 text-blue-400 opacity-80" />
            <div className="absolute -right-4 top-0 flex flex-col gap-1">
                <div className="w-12 h-1 bg-zinc-700/50 rounded" />
                <div className="w-8 h-1 bg-zinc-700/50 rounded" />
                <div className="w-10 h-1 bg-zinc-700/50 rounded" />
            </div>
        </div>
        <div className="bg-zinc-900/80 border border-zinc-700/30 font-mono text-xs text-zinc-400 px-3 py-1.5 rounded shadow-lg backdrop-blur-md">
            UNDEFINED
        </div>
    </div>
);

const FirefightingVisual = () => (
    <div className="relative flex items-center justify-center">
        <Zap className="w-20 h-20 text-red-500 opacity-80" />
        <div className="absolute inset-0 animate-pulse bg-red-500/20 blur-xl rounded-full" />
    </div>
);

const EntropyVisual = () => (
    <div className="relative flex items-center justify-center">
        <Database className="w-20 h-20 text-purple-500 opacity-80" />
        {/* Particles flying off */}
        <div className="absolute top-0 right-0 w-3 h-3 bg-purple-500 rounded-sm animate-ping" />
        <div className="absolute bottom-2 left-0 w-2 h-2 bg-purple-500 rounded-sm animate-bounce" />
    </div>

);

function ChaosDebris() {
    // Generate static random seed data
    const shards = useMemo(() => [...Array(25)].map((_, i) => ({
        id: i,
        size: Math.random() * 60 + 20, // 20px - 80px
        left: Math.random() * 100,
        top: Math.random() * 100,
        duration: Math.random() * 15 + 10,
        delay: Math.random() * 5,
        xDir: (Math.random() - 0.5) * 300,
        yDir: (Math.random() - 0.5) * 300
    })), []);

    return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
            {shards.map((s) => (
                <motion.div
                    key={s.id}
                    className="absolute bg-white/5 border border-white/5 rounded-sm"
                    style={{
                        width: s.size,
                        height: s.size,
                        left: `${s.left}%`,
                        top: `${s.top}%`,
                    }}
                    animate={{
                        x: [0, s.xDir, 0],
                        y: [0, s.yDir, 0],
                        rotate: [0, 180, 360],
                        opacity: [0, 0.2, 0]
                    }}
                    transition={{
                        duration: s.duration,
                        repeat: Infinity,
                        ease: "linear",
                        delay: s.delay
                    }}
                />
            ))}
        </div>
    )
}
