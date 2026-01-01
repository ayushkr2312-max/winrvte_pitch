"use client";

import { motion, useMotionValue, useTransform, useSpring, animate } from "framer-motion";
import { Globe, Zap, Activity, Cpu, ChevronRight, ChevronLeft } from "lucide-react";
import { useState, useEffect, useRef } from "react";

interface Slide3Props {
    isActive: boolean;
    onNext: () => void;
    onBack: () => void;
}

export function Slide3Blueprint({ isActive, onNext, onBack }: Slide3Props) {
    const containerRef = useRef<HTMLDivElement>(null);
    const [isHovering, setIsHovering] = useState(false);

    // --- MOUSE 3D PERSPECTIVE ---
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        // Calculate distance from center normalized to -1 to 1
        const x = (e.clientX - centerX) / (rect.width / 2);
        const y = (e.clientY - centerY) / (rect.height / 2);

        mouseX.set(x);
        mouseY.set(y);
    };

    // Smooth physics-based movement for the tilt
    const springConfig = { damping: 20, stiffness: 100 };
    const rotateX = useSpring(useTransform(mouseY, [-1, 1], [5, -5]), springConfig); // Inverted Y for natural tilt
    const rotateY = useSpring(useTransform(mouseX, [-1, 1], [-5, 5]), springConfig);

    // --- CORE PULSE ---
    // A continuous heartbeat for the reactor
    const time = useMotionValue(0);

    useEffect(() => {
        if (!isActive) return;
        const controls = animate(time, 100, {
            duration: 100,
            ease: "linear",
            repeat: Infinity
        });
        return () => controls.stop();
    }, [isActive]);


    if (!isActive) return null;

    return (
        <motion.div
            ref={containerRef}
            className="absolute inset-0 flex flex-col items-center justify-center z-20 bg-[#000] overflow-hidden font-brand perspective-[1000px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => {
                setIsHovering(false);
                mouseX.set(0);
                mouseY.set(0);
            }}
        >
            {/* AMBIENT BACKGROUND */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-black to-black pointer-events-none" />
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 pointer-events-none mix-blend-overlay" />

            {/* GRID FLOOR (Pseudo-3D) */}
            <motion.div
                className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.1)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_100%)] pointer-events-none"
                style={{ rotateX: 60, scale: 2, y: 300, opacity: 0.3 }}
            />


            {/* --- MAIN 3D CONTAINER --- */}
            <motion.div
                className="relative w-full max-w-7xl h-full flex flex-col items-center justify-center transform-style-3d"
                style={{ rotateX, rotateY }}
            >

                {/* --- CENTER: THE OMNI-CORE --- */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none z-0">
                    <OmniReactor />
                </div>


                {/* --- MODULES (Floating around the core) --- */}
                <div className="relative z-10 w-full h-full max-h-[800px] flex items-center justify-center">

                    {/* TOP MODULE: GROWTH (The Engine) */}
                    <div className="absolute top-[2%] md:top-[5%]">
                        <HoloCard
                            title="THE ENGINE"
                            subtitle="GROWTH"
                            icon={<Zap className="w-8 h-8 text-emerald-400" />}
                            color="emerald"
                            position="top"
                            stats={["VIRAL VELOCITY", "ROI VERIFICATION"]}
                        />
                    </div>

                    {/* LEFT MODULE: INTERNAL (The Structure) */}
                    <div className="absolute bottom-[20%] left-[2%] md:left-[4%]">
                        <HoloCard
                            title="THE STRUCTURE"
                            subtitle="OPERATIONS"
                            icon={<Cpu className="w-8 h-8 text-blue-400" />}
                            color="blue"
                            position="left"
                            stats={["ZERO TOUCH OPS", "AUTO-LOGGING"]}
                        />
                    </div>

                    {/* RIGHT MODULE: EXTERNAL (The Eyes) */}
                    <div className="absolute bottom-[20%] right-[2%] md:right-[4%]">
                        <HoloCard
                            title="THE SIGHT"
                            subtitle="INTEL"
                            icon={<Globe className="w-8 h-8 text-amber-400" />}
                            color="amber"
                            position="right"
                            stats={["MARKET ORACLE", "TALENT SCOUT"]}
                        />
                    </div>

                </div>

                {/* --- CONNECTING BEAMS (SVG Overlay) --- */}
                {/* We render these absolutely to connect center to the card positions loosely */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible">
                    <defs>
                        <filter id="beam-glow">
                            <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                            <feMerge><feMergeNode in="coloredBlur" /><feMergeNode in="SourceGraphic" /></feMerge>
                        </filter>
                    </defs>

                    {/* Beam to TOP (Growth) */}
                    <EnergyBeam startX="50%" startY="50%" endX="50%" endY="15%" color="#10B981" />

                    {/* Beam to LEFT (Internal) */}
                    <EnergyBeam startX="50%" startY="50%" endX="15%" endY="75%" color="#3B82F6" />

                    {/* Beam to RIGHT (External) */}
                    <EnergyBeam startX="50%" startY="50%" endX="85%" endY="75%" color="#F59E0B" />

                </svg>

                {/* HERO TEXT OVERLAY */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none z-20 mix-blend-color-dodge">
                    <h1 className="text-4xl md:text-5xl font-black tracking-[0.2em] opacity-40 blur-[1px] animate-pulse">
                        <span className="text-blue-400">WIN</span>
                        <span className="text-white">RVTE</span>
                    </h1>
                </div>

            </motion.div>


            {/* NAV UI */}
            <NavigationUI onBack={onBack} onNext={onNext} />

        </motion.div>
    );
}

// --- SUB-COMPONENTS ---

function OmniReactor() {
    return (
        <div className="relative w-full h-full flex items-center justify-center">
            {/* Core Glow */}
            <div className="absolute w-20 h-20 bg-white rounded-full blur-[50px] animate-pulse" />
            <div className="absolute w-40 h-40 bg-blue-500/30 rounded-full blur-[80px] animate-pulse" />

            {/* RING 1: Fast Spinner */}
            <motion.div
                className="absolute w-[30%] h-[30%] border border-blue-400/60 rounded-full border-t-transparent border-l-transparent"
                animate={{ rotate: 360 }}
                transition={{ duration: 3, ease: "linear", repeat: Infinity }}
            />

            {/* RING 2: Counter Spinner Layered */}
            <motion.div
                className="absolute w-[50%] h-[50%] border-2 border-dashed border-cyan-500/30 rounded-full"
                animate={{ rotate: -360 }}
                transition={{ duration: 10, ease: "linear", repeat: Infinity }}
            />

            {/* RING 3: The Big Technoring */}
            <motion.div
                className="absolute w-[80%] h-[80%] rounded-full border border-white/10 flex items-center justify-center"
                animate={{ rotate: 360, scale: [1, 1.02, 1] }}
                transition={{
                    rotate: { duration: 30, ease: "linear", repeat: Infinity },
                    scale: { duration: 2, ease: "easeInOut", repeat: Infinity }
                }}
            >
                <div className="absolute top-0 w-2 h-2 bg-white/50 rounded-full box-shadow-glow" />
                <div className="absolute bottom-0 w-2 h-2 bg-white/50 rounded-full box-shadow-glow" />
                <div className="absolute left-0 w-2 h-2 bg-white/50 rounded-full box-shadow-glow" />
                <div className="absolute right-0 w-2 h-2 bg-white/50 rounded-full box-shadow-glow" />
            </motion.div>

            {/* Streak Particles Erupting */}
            <div className="absolute inset-0">
                {[...Array(4)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute top-1/2 left-1/2 w-8 h-[1px] bg-gradient-to-r from-transparent via-blue-400 to-transparent"
                        style={{
                            rotate: Math.random() * 360
                        }}
                        animate={{
                            x: [0, (Math.random() - 0.5) * 600],
                            y: [0, (Math.random() - 0.5) * 600],
                            opacity: [0, 1, 0],
                            scaleX: [0.5, 2]
                        }}
                        transition={{
                            duration: 4, // Slower
                            ease: "easeInOut", // Smoother
                            repeat: Infinity,
                            delay: Math.random() * 3
                        }}
                    />
                ))}
            </div>
        </div>
    )
}

interface HoloCardProps {
    title: string;
    subtitle: string;
    icon: React.ReactNode;
    color: 'blue' | 'emerald' | 'amber';
    position: string;
    stats: string[];
}

function HoloCard({ title, subtitle, icon, color, position, stats }: HoloCardProps) {
    const colors: Record<string, string> = {
        blue: "border-blue-500/50 shadow-blue-500/20 bg-blue-900/10",
        emerald: "border-emerald-500/50 shadow-emerald-500/20 bg-emerald-900/10",
        amber: "border-amber-500/50 shadow-amber-500/20 bg-amber-900/10"
    };

    const textColors: Record<string, string> = {
        blue: "text-blue-400",
        emerald: "text-emerald-400",
        amber: "text-amber-400"
    };

    return (
        <motion.div
            className={`
                relative w-72 md:w-96 p-8 rounded-xl border backdrop-blur-md 
                ${colors[color]} 
                hover:scale-105 hover:bg-opacity-20 transition-all duration-300 cursor-pointer
                flex flex-col gap-6 group
            `}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", duration: 0.8 }}
        >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-lg bg-white/5 ${textColors[color]} group-hover:text-white transition-colors`}>
                        {icon}
                    </div>
                    <div>
                        <div className={`text-xs font-mono tracking-widest ${textColors[color]}`}>{subtitle}</div>
                        <div className="text-2xl font-bold text-white tracking-tight">{title}</div>
                    </div>
                </div>
                <Activity className="w-5 h-5 text-white/20" />
            </div>

            {/* Stats / Description */}
            <div className="space-y-3">
                {stats.map((stat: string, i: number) => (
                    <div key={i} className="flex items-center justify-between text-sm text-zinc-300 font-mono bg-black/40 p-3 rounded">
                        <span>{stat}</span>
                        <div className={`w-2 h-2 rounded-full bg-${color}-500 animate-pulse`} />
                    </div>
                ))}
            </div>

            {/* Decor */}
            <div className={`absolute -bottom-1 -right-1 w-3 h-3 bg-${color}-500/50 blur-sm`} />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-[1px] bg-white/50" />
        </motion.div>
    )
}

function EnergyBeam({ startX, startY, endX, endY, color }: any) {
    return (
        <g>
            <motion.line
                x1={startX} y1={startY} x2={endX} y2={endY}
                stroke={color}
                strokeWidth="2"
                strokeOpacity="0.2"
                strokeDasharray="4 4"
            >
                <animate attributeName="stroke-dashoffset" from="100" to="0" dur="1s" repeatCount="indefinite" />
            </motion.line>

            {/* The Beam Head Particle */}
            <motion.circle
                r="3"
                fill="white"
                filter="url(#beam-glow)"
                initial={{ cx: startX, cy: startY }}
                animate={{ cx: endX, cy: endY }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            />

            {/* Secondary Particle (Lagging) */}
            <motion.circle
                r="1.5"
                fill={color}
                initial={{ cx: startX, cy: startY }}
                animate={{ cx: endX, cy: endY }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "linear", delay: 0.2 }}
            />
        </g>
    )
}

function NavigationUI({ onBack, onNext }: any) {
    return (
        <>
            <motion.div className="fixed left-8 top-1/2 -translate-y-1/2 z-50">
                <button onClick={onBack} className="p-4 rounded-full border border-white/10 bg-black/40 hover:bg-white/10 transition-colors group backdrop-blur-md">
                    <ChevronLeft className="w-6 h-6 text-white/50 group-hover:text-white" />
                </button>
            </motion.div>

            <motion.div className="fixed right-8 top-1/2 -translate-y-1/2 z-50">
                <button onClick={onNext} className="p-4 rounded-full border border-white/10 bg-black/40 hover:bg-white/10 transition-colors group backdrop-blur-md">
                    <ChevronRight className="w-6 h-6 text-white/50 group-hover:text-white" />
                </button>
            </motion.div>
        </>
    )
}
