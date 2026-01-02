"use client";

import { motion, useScroll, useTransform, useSpring, useMotionValue, MotionValue, AnimatePresence, useMotionValueEvent } from "framer-motion";
import { useRef, useMemo, useState, useEffect } from "react";
import { ArrowDown, Cpu, Shield, Zap, CircleDashed, ChevronRight } from "lucide-react";
import { Button } from "../ui/Button";

interface Slide3Props {
    isActive: boolean;
    onNext: () => void;
    onBack: () => void;
}

export function Slide3Blueprint({ isActive, onNext, onBack }: Slide3Props) {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        container: containerRef
    });

    // --- PHYSICS ENGINE (Smooth Scroll) ---
    // This makes the transition feel heavy and premium, reducing scroll jitter
    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 50,
        damping: 20,
        restDelta: 0.001
    });

    const [isDeploying, setIsDeploying] = useState(false);

    // THE DEPLOYMENT: Warp Speed -> Data Solutions
    const handleDeploy = () => {
        setIsDeploying(true);
        setTimeout(onNext, 1000);
    };

    // --- TRANSFORMATIONS ---

    // 1. Background Atmosphere
    // Red (Chaos) -> Deep Black (Void) -> Blue/Emerald (System)
    const bgColor = useTransform(smoothProgress, [0, 0.5, 1], ["#0f0505", "#050505", "#02040a"]);
    const radialOverlay = useTransform(smoothProgress, [0, 1], [
        "radial-gradient(circle at center, rgba(220,38,38,0.2) 0%, transparent 70%)",
        "radial-gradient(circle at center, rgba(16,185,129,0.1) 0%, transparent 70%)"
    ]);

    // 2. The Core Object (Central Geometry)
    const coreScale = useTransform(smoothProgress, [0, 1], [0.8, 1.2]);
    const coreRotate = useTransform(smoothProgress, [0, 1], [0, 180]);
    const coreColor = useTransform(smoothProgress, [0, 0.5, 1], ["#ef4444", "#ffffff", "#3b82f6"]);

    // 3. Text Opacity Swaps
    const chaosTextOpacity = useTransform(smoothProgress, [0, 0.3], [1, 0]);
    const chaosTextBlur = useTransform(smoothProgress, [0, 0.3], ["0px", "20px"]);
    const systemTextOpacity = useTransform(smoothProgress, [0.6, 1], [0, 1]);
    const systemTextScale = useTransform(smoothProgress, [0.6, 1], [0.8, 1]);

    // 4. Particle Field Control
    // We pass `smoothProgress` to particles so they can interpolate their own positions

    // State for engine rotation
    const [isEngineReady, setIsEngineReady] = useState(false);
    useMotionValueEvent(smoothProgress, "change", (latest) => {
        setIsEngineReady(latest > 0.9);
    });

    if (!isActive) return null;

    return (
        <motion.div
            ref={containerRef}
            className="fixed inset-0 z-20 h-screen w-screen overflow-y-auto font-brand"
            style={{ backgroundColor: bgColor }}
        >
            {/* STICKY STAGE */}
            <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col items-center justify-center perspective-[1000px]">

                {/* DYNAMIC BACKGROUND */}
                <motion.div
                    className="absolute inset-0 pointer-events-none transition-all duration-500"
                    style={{ background: radialOverlay }}
                />

                {/* --- 3D PARTICLE SWARM --- */}
                {/* Creates the "Moving Parts" feel. Particles            {/* PARTICLE SWARM WITH FORCE FIELD */}
                <ParticleSwarm progress={smoothProgress} isDeploying={isDeploying} isEngineReady={isEngineReady} />


                {/* --- THE SHAPESHIFTING CORE --- */}
                <motion.div
                    className="absolute inset-0 flex items-center justify-center pointer-events-none z-10"
                    animate={isDeploying ? { scale: 50, opacity: 0 } : { scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8, ease: "circIn" }}
                >
                    {/* Ring 1: The Container */}
                    <motion.div
                        className="w-full h-full flex items-center justify-center absolute inset-0"
                        animate={isEngineReady ? { rotate: [0, 360] } : { rotate: 0 }}
                        transition={isEngineReady ? { duration: 30, repeat: Infinity, ease: "linear" } : { duration: 0 }}
                    >
                        <motion.div
                            className="w-[400px] h-[400px] border-2 rounded-full border-dashed"
                            style={{
                                borderColor: coreColor,
                                rotate: coreRotate,
                                scale: coreScale,
                                opacity: 0.3
                            }}
                        />
                    </motion.div>
                    {/* Ring 2: The Spinner */}
                    <motion.div
                        className="w-full h-full flex items-center justify-center absolute inset-0"
                        animate={isEngineReady ? { rotate: [0, -360] } : { rotate: 0 }}
                        transition={isEngineReady ? { duration: 15, repeat: Infinity, ease: "linear" } : { duration: 0 }}
                    >
                        <motion.div
                            className="absolute w-[300px] h-[300px] border-t-2 border-b-2 rounded-full"
                            style={{
                                borderColor: coreColor,
                                rotate: useTransform(smoothProgress, v => -v * 360),
                                scale: coreScale
                            }}
                        />
                    </motion.div>
                    {/* Ring 3: Center Mass */}
                    <motion.div
                        className="absolute w-[100px] h-[100px] bg-current rounded-full blur-3xl opacity-50"
                        style={{
                            backgroundColor: coreColor,
                            scale: useTransform(smoothProgress, [0, 0.5, 1], [1.5, 0.5, 1.2]) // Pulse effect during transition
                        }}
                    />
                </motion.div>


                {/* --- CONTENT LAYER --- */}
                <div className="relative z-20 text-center mix-blend-screen">
                    <motion.div className="absolute inset-0 pointer-events-none" style={{ opacity: chaosTextOpacity }}>
                        <ChaosBackground />
                    </motion.div>

                    {/* STATE 1: CHAOS (Hero) */}
                    <motion.div
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full"
                        style={{ opacity: chaosTextOpacity, filter: `blur(${chaosTextBlur})` }}
                    >
                        <h1 className="text-8xl md:text-[10rem] font-black tracking-tighter text-red-500 leading-none">
                            MANUAL <br /> <span className="text-white opacity-50">CHAOS</span>
                        </h1>
                        <p className="mt-8 text-red-400 font-mono tracking-[0.5em] animate-pulse">
                            // ERROR: SCALING IMPOSSIBLE
                        </p>
                    </motion.div>

                    {/* STATE 2: SYSTEM (Revealed) */}
                    <motion.div
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full px-6"
                        style={{ opacity: systemTextOpacity, scale: systemTextScale }}
                        animate={isDeploying ? { scale: 1.5, opacity: 0, filter: "blur(20px)" } : {}}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="flex flex-col items-center justify-center min-h-screen py-20 pointer-events-none">
                            <div className="text-center">
                                <div className="inline-flex items-center gap-2 px-4 py-2 border border-emerald-500/30 bg-emerald-500/10 rounded-full text-emerald-400 font-mono text-xs tracking-widest uppercase mb-6">
                                    <CircleDashed className="w-4 h-4 animate-spin-slow" /> System Online
                                </div>

                                <h2 className="text-5xl md:text-8xl font-black text-white tracking-tighter mb-4 shadow-lg">
                                    THE WINRVTE <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">ENGINE</span>
                                </h2>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* SCHEMATIC CONNECTIONS - VISUAL LINK */}
                <ConnectionOverlay isDeploying={isDeploying} progress={smoothProgress} />

                {/* SYSTEM MODULES - LEFT SIDE STACK */}
                <motion.div
                    className="fixed top-1/2 left-6 md:left-12 -translate-y-1/2 z-50 flex flex-col gap-6 origin-left"
                    style={{ opacity: systemTextOpacity, pointerEvents: "auto" }}
                    animate={isDeploying ? { x: -100, opacity: 0 } : {}}
                    transition={{ duration: 0.3 }}
                >
                    <SystemCard icon={<Zap className="w-6 h-6" />} title="Automated Outreach" progress={smoothProgress} delay={0.65} />
                    <SystemCard icon={<Cpu className="w-6 h-6" />} title="Neural Analysis" progress={smoothProgress} delay={0.75} />
                    <SystemCard icon={<Shield className="w-6 h-6" />} title="Risk Mitigation" progress={smoothProgress} delay={0.85} />
                </motion.div>


                {/* SCROLL PROMPT */}
                <motion.div
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-30 pointer-events-none"
                    style={{ opacity: chaosTextOpacity }}
                >
                    <span className="text-xs font-mono text-white/40 uppercase tracking-widest">Initialise Repair</span>
                    <ArrowDown className="w-4 h-4 text-white/40 animate-bounce" />
                </motion.div>

                {/* NEXT BUTTON - REPOSITIONED TO CENTER RIGHT */}
                <motion.div
                    className="fixed top-1/2 right-6 md:right-12 -translate-y-1/2 z-50 origin-right"
                    style={{ opacity: systemTextOpacity, pointerEvents: "auto" }}
                    animate={isDeploying ? { x: 100, opacity: 0 } : {}}
                    transition={{ duration: 0.3 }}
                >
                    <Button onClick={handleDeploy} className="group bg-white text-black hover:bg-emerald-400 hover:text-white px-8 py-6 rounded-full text-xl font-bold tracking-widest transition-all shadow-[0_0_40px_rgba(255,255,255,0.2)] flex items-center gap-4 border-2 border-transparent hover:border-emerald-300">
                        <span>DEPLOY SYSTEM</span>
                        <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                    </Button>
                </motion.div>

                {/* --- OVERLAY: WARP FLASH --- */}
                <motion.div
                    className="fixed inset-0 pointer-events-none bg-white z-[100]"
                    initial={{ opacity: 0 }}
                    animate={isDeploying ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.8, ease: "easeIn" }}
                />

            </div>

            {/* SPACER FOR SCROLL LENGTH */}
            <div className="h-[300vh]" />
        </motion.div>
    );
}


// --- SUB-COMPONENTS ---

/* 
 * PARTICLE SWARM 
 * This is the "Moving Parts" engine.
 * Renders 50 particles that interpolate from Random(Chaos) to Grid(System).
 */
function ParticleSwarm({ progress, isDeploying, isEngineReady }: { progress: MotionValue<number>; isDeploying: boolean; isEngineReady: boolean }) {
    // Generate particle data once
    const particles = useMemo(() => {
        return [...Array(40)].map((_, i) => {
            // CHAOS STATE: Random dispersed
            const startX = (Math.random() - 0.5) * 1500;
            const startY = (Math.random() - 0.5) * 1500;
            const startRotate = Math.random() * 360;

            // SYSTEM STATE: Organized Rings/Grid
            const angle = (i / 40) * Math.PI * 2;
            const radius = 300;
            const endX = Math.cos(angle) * radius;
            const endY = Math.sin(angle) * radius; // Form a perfect circle

            return { startX, startY, startRotate, endX, endY };
        });
    }, []);

    return (
        <motion.div
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
            animate={isDeploying ? { scale: 5, opacity: 0, rotate: 180 } : { scale: 1, opacity: 1, rotate: 0 }}
            transition={{ duration: 0.8, ease: "circIn" }}
        >
            {/* Engine Rotation Wrapper */}
            <motion.div
                className="w-full h-full flex items-center justify-center"
                animate={isEngineReady ? { rotate: [0, -360] } : { rotate: 0 }}
                transition={isEngineReady ? { duration: 40, repeat: Infinity, ease: "linear" } : { duration: 0 }}
            >
                {particles.map((p, i) => (
                    <Particle key={i} data={p} progress={progress} index={i} />
                ))}
            </motion.div>
        </motion.div>
    );
}

function Particle({ data, progress, index }: { data: any, progress: MotionValue<number>, index: number }) {
    // Interpolate individual particle
    const x = useTransform(progress, [0, 1], [data.startX, data.endX]);
    const y = useTransform(progress, [0, 1], [data.startY, data.endY]);
    const rotate = useTransform(progress, [0, 1], [data.startRotate, 0]);
    const scale = useTransform(progress, [0, 0.5, 1], [1, 0.5, 1]); // Shrink mid-flight
    const opacity = useTransform(progress, [0, 0.2, 0.8, 1], [0.6, 0.2, 0.8, 1]);
    const color = useTransform(progress, [0, 1], ["#ef4444", "#34d399"]); // Red -> Emerald

    return (
        <motion.div
            className="absolute w-2 h-8 rounded-full"
            style={{
                x, y, rotate, scale, opacity, backgroundColor: color,
                boxShadow: useTransform(progress, p => p > 0.5 ? "0 0 10px rgba(52, 211, 153, 0.5)" : "0 0 10px rgba(239, 68, 68, 0.5)")
            }}
        />
    )
}

function SystemCard({ icon, title, progress, delay }: any) {
    // Cards slide in from left to center
    const x = useTransform(progress, [delay - 0.1, delay], [-50, 0]);
    const opacity = useTransform(progress, [delay - 0.1, delay], [0, 1]);

    return (
        <motion.div
            className="flex items-center gap-4 p-5 border border-white/20 bg-black/60 backdrop-blur-xl rounded-xl shadow-xl min-w-[280px] hover:border-emerald-500/50 transition-colors w-full"
            style={{ x, opacity }}
        >
            <div className="p-3 bg-emerald-500/10 rounded-lg text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.1)]">{icon}</div>
            <div className="font-bold text-lg text-white tracking-wide">{title}</div>
        </motion.div>
    )
}

// --- CONNECTION OVERLAY ---
function ConnectionOverlay({ isDeploying, progress }: { isDeploying: boolean; progress: MotionValue<number> }) {
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
    // Visible only when fully scrolled (0.85 -> 1.0)
    const opacity = useTransform(progress, [0.85, 1], [0, 1]);

    useEffect(() => {
        // Simple window check
        if (typeof window !== "undefined") {
            setDimensions({ width: window.innerWidth, height: window.innerHeight });
            const handleResize = () => setDimensions({ width: window.innerWidth, height: window.innerHeight });
            window.addEventListener('resize', handleResize);
            return () => window.removeEventListener('resize', handleResize);
        }
    }, []);

    if (dimensions.width === 0) return null;

    // Origins: Fixed Left 48px + Card Width ~280px + Padding ~32. 
    // Approx X = 360. On mobile this is hidden anyway by media query (md:flex on parent?).
    // We only show this on desktop (hidden md:block).
    const startX = 360;
    const centerY = dimensions.height / 2;
    const centerX = dimensions.width / 2;

    // Card Y offsets from center (gap-6 = 24px, card height ~80px? total stack height ~300px)
    // Approximate centers of cards relative to viewport center.
    const offsets = [-112, 0, 112];

    return (
        <motion.svg
            className="fixed inset-0 w-full h-full pointer-events-none z-0 hidden md:block"
            style={{ opacity }}
        >
            <defs>
                <linearGradient id="linkGradient" gradientUnits="userSpaceOnUse" x1={startX} y1={centerY} x2={centerX} y2={centerY}>
                    <stop offset="0%" stopColor="#10b981" stopOpacity="0" />
                    <stop offset="20%" stopColor="#10b981" stopOpacity="0.5" />
                    <stop offset="80%" stopColor="#34d399" stopOpacity="0.5" />
                    <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
                </linearGradient>
            </defs>
            {offsets.map((offset, i) => (
                <motion.path
                    key={i}
                    d={`M ${startX} ${centerY + offset} C ${startX + 100} ${centerY + offset}, ${centerX - 150} ${centerY}, ${centerX - 50} ${centerY}`}
                    fill="none"
                    stroke="url(#linkGradient)"
                    strokeWidth="1.5"
                    strokeDasharray="4 4"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={isDeploying ? { opacity: 0 } : { pathLength: 1, opacity: 0.6 }}
                    transition={{ duration: 1.5, delay: 1 + (i * 0.2), ease: "circOut" }}
                />
            ))}
        </motion.svg>
    )
}

function ChaosBackground() {
    // 1. Subtle Shards (Reverted)
    const debris = useMemo(() => [...Array(25)].map((_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        w: Math.random() * 3 + 1,
        h: Math.random() * 12 + 4,
        rot: Math.random() * 360,
        duration: Math.random() * 15 + 5,
    })), []);

    // 2. Fast Tracers (New Moving Parts)
    const tracers = useMemo(() => [...Array(5)].map((_, i) => ({
        id: i,
        y: Math.random() * 100,
        w: Math.random() * 200 + 100, // 100-300px long
        duration: Math.random() * 3 + 2, // Fast (2-5s)
        delay: Math.random() * 5
    })), []);

    return (
        <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none">
            {/* Shards */}
            {debris.map(d => (
                <motion.div
                    key={`shard-${d.id}`}
                    className="absolute bg-red-600/30 rounded-[1px] blur-[1px]"
                    style={{
                        left: `${d.x}%`,
                        top: `${d.y}%`,
                        width: d.w,
                        height: d.h,
                        rotate: d.rot
                    }}
                    animate={{
                        y: [0, (Math.random() - 0.5) * 150],
                        x: [0, (Math.random() - 0.5) * 50],
                        opacity: [0, 0.4, 0],
                        rotate: [d.rot, d.rot + (Math.random() > 0.5 ? 45 : -45)]
                    }}
                    transition={{
                        duration: d.duration,
                        repeat: Infinity,
                        ease: "linear",
                        delay: Math.random() * 5
                    }}
                />
            ))}

            {/* Tracers (Glitch Lines) */}
            {tracers.map(t => (
                <motion.div
                    key={`tracer-${t.id}`}
                    className="absolute h-[1px] bg-gradient-to-r from-transparent via-red-500/50 to-transparent"
                    style={{ top: `${t.y}%`, width: t.w, left: -t.w }} // Start off screen
                    animate={{
                        x: ["0vw", "120vw"], // Move across screen
                    }}
                    transition={{
                        duration: t.duration,
                        repeat: Infinity,
                        ease: "linear",
                        delay: t.delay
                    }}
                />
            ))}
        </div>
    )
}
