"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Users, Video, BrainCircuit, ArrowLeft, ChevronRight, AlertTriangle, Activity, Hourglass, Database, Layers } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import Lenis from "lenis";

interface Slide2Props {
    isActive: boolean;
    onBack: () => void;
    onNext: () => void;
}

export function Slide2Chaos({ isActive, onBack, onNext }: Slide2Props) {
    if (!isActive) return null;

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

    const headerOpacity = useTransform(scrollYProgress, [0, 0.05], [1, 0]);
    const headerScale = useTransform(scrollYProgress, [0, 0.05], [1, 0.9]);

    // Parallax elements
    const parallaxY1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
    const parallaxY2 = useTransform(scrollYProgress, [0, 1], [0, -200]);

    return (
        <div
            ref={containerRef}
            className="absolute inset-0 z-20 overflow-y-auto overflow-x-hidden bg-obsidian scrollbar-hide perspective-1000"
        >
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="relative min-h-full"
            >
                {/* THE CHAOS THREAD - SVG PATH */}
                {/* 6 Sections + Header + Footer -> Needs ~600vh+ */}
                <div className="absolute top-0 left-0 w-full h-[650vh] pointer-events-none z-0 hidden md:block">
                    <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
                        <defs>
                            <linearGradient id="threadGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                {/* Gradient stops for 6 sections */}
                                <stop offset="0%" stopColor="#3B82F6" /> {/* Blue (Roster) */}
                                <stop offset="15%" stopColor="#3B82F6" />
                                <stop offset="25%" stopColor="#EF4444" /> {/* Red (Content) */}
                                <stop offset="40%" stopColor="#10B981" /> {/* Emerald (Strategic) */}
                                <stop offset="55%" stopColor="#3B82F6" /> {/* Blue (Valuation) */}
                                <stop offset="70%" stopColor="#EF4444" /> {/* Red (Firefighting) */}
                                <stop offset="85%" stopColor="#A855F7" /> {/* Purple (Entropy) */}
                                <stop offset="100%" stopColor="#A855F7" />
                            </linearGradient>
                        </defs>

                        {/* Background Faint Path 
                            Logic: Rectilinear Path with SHIFTED Gap Crossing.
                            Adjusted to account for taller logical sections.
                            - Gap 1-2: Y=28
                            - Gap 2-3: Y=41
                            - Gap 3-4: Y=55 (Shifted down to avoid Sec 3 text)
                            - Gap 4-5: Y=69 (Shifted down to avoid Sec 4 text)
                            - Gap 5-6: Y=83 (Shifted down to avoid Sec 5 text)
                        */}
                        <path
                            d="M 50 0 L 50 15 L 80 15 L 80 28 L 20 28 L 20 41 L 80 41 L 80 55 L 20 55 L 20 69 L 80 69 L 80 83 L 20 83 L 20 92 L 50 92 L 50 100"
                            fill="none"
                            stroke="rgba(255,255,255,0.05)"
                            strokeWidth="0.2"
                        />

                        {/* Active Drawing Path */}
                        <motion.path
                            d="M 50 0 L 50 15 L 80 15 L 80 28 L 20 28 L 20 41 L 80 41 L 80 55 L 20 55 L 20 69 L 80 69 L 80 83 L 20 83 L 20 92 L 50 92 L 50 100"
                            fill="none"
                            stroke="url(#threadGradient)"
                            strokeWidth="0.3"
                            style={{ pathLength: scrollYProgress }}
                            filter="drop-shadow(0 0 2px rgba(255,255,255,0.5))"
                        />
                    </svg>
                </div>

                {/* Back Button - Fixed Position */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1 }}
                    className="fixed top-8 left-8 z-50 mix-blend-difference"
                >
                    <button
                        onClick={onBack}
                        className="text-white/70 hover:text-white flex items-center gap-2 uppercase tracking-widest text-xs font-display transition-colors group"
                    >
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                        Return
                    </button>
                </motion.div>

                {/* SECTION 0: THE HOOK */}
                <section className="min-h-screen flex flex-col items-center justify-center relative px-6 py-20">
                    <motion.div
                        style={{ opacity: headerOpacity, scale: headerScale }}
                        className="text-center space-y-6 max-w-4xl z-10 sticky top-1/3"
                    >
                        <h2 className="text-4xl md:text-7xl font-display font-bold leading-tight">
                            THE <span className="text-accent underline decoration-accent/30 underline-offset-8">"VIBES-BASED"</span> TRAP
                        </h2>
                        <p className="text-xl md:text-3xl text-text-secondary leading-relaxed">
                            You aren't losing because of bad luck.<br />
                            You are <span className="text-danger font-bold neon-text">flying blind.</span>
                        </p>
                    </motion.div>

                    {/* Scroll Hint */}
                    <motion.div
                        style={{ opacity: headerOpacity }}
                        className="absolute bottom-12 flex flex-col items-center gap-2"
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    >
                        <span className="text-xs uppercase tracking-widest text-accent/50">Scroll to Analyze</span>
                        <div className="w-[1px] h-12 bg-gradient-to-b from-accent/0 via-accent/50 to-accent/0" />
                    </motion.div>
                </section>

                {/* 1. ROSTER ROULETTE (Blue, Left) - Original */}
                <ChaosSection
                    title="ROSTER ROULETTE"
                    description={<>Esports organizations are burning millions on player acquisitions based on <span className="text-white font-bold">community hype</span> and <span className="text-white font-bold">past glory</span>. Without granular performance data, you're essentially gambling on lineups.</>}
                    consequence="Budget wasted on star players who don't fit the system, leading to rosters that disband in a month."
                    icon={<RosterIcon />}
                    theme="blue"
                    align="left"
                />

                {/* 2. THE CONTENT VOID (Red, Right) - Original */}
                <ChaosSection
                    title="THE CONTENT VOID"
                    description={<>Content teams are <span className="text-white font-bold">burning cash</span> on high-production edits without knowing what actually converts. Blindly chasing trends instead of building a sustainable narrative attached to winning.</>}
                    consequence="Zero sponsor ROI. Interactions specific to matches are lost, and fandom monetization remains non-existent."
                    icon={<ContentIcon />}
                    theme="red"
                    align="right"
                />

                {/* 3. STRATEGIC PARALYSIS (Emerald, Left) - Revamped Coach */}
                <ChaosSection
                    title="STRATEGIC PARALYSIS"
                    description={<>While your staff is manually logging scrim codes and fixing spreadsheet formulas, your competition is analyzing your weaknesses. You are paying your strategist to do <span className="text-white font-bold">data entry</span>. That isn't coaching; it’s administration.</>}
                    consequence="Slow adaptation. You lose matches you should have won because your insights were days behind the meta."
                    icon={<StrategicIcon />}
                    theme="emerald"
                    align="left"
                />

                {/* 4. THE VALUATION BLACK BOX (Blue, Right) - New */}
                <ChaosSection
                    title="THE VALUATION BLACK BOX"
                    description={<>You have followers, but you don't have leverage. Sponsors don't care about "vibes"; they care about demographics, retention rates, and conversion. If you can't <span className="text-white font-bold">prove your growth</span> with hard data, you are invisible to serious brands.</>}
                    consequence="Missed revenue. You stay dependent on prize pools and owner pockets because you cannot visualize your asset value to investors."
                    icon={<ValuationIcon />}
                    theme="blue"
                    align="right"
                />

                {/* 5. REACTIVE FIREFIGHTING (Red, Left) - New */}
                <ChaosSection
                    title="REACTIVE FIREFIGHTING"
                    description={<>A player leaves. A designer ghosts you. Panic sets in. You scramble to Twitter DMs and sign the first available option. Without a pre-vetted <span className="text-white font-bold">"Shadow Roster"</span> or talent database, you are forced to make impulsive, desperate decisions.</>}
                    consequence="Bad culture fits and wasted salaries. You hire who is available, not who is best, resetting your team's progress every few months."
                    icon={<FirefightingIcon />}
                    theme="red"
                    align="left"
                />

                {/* 6. OPERATIONAL ENTROPY (Purple, Right) - New */}
                <ChaosSection
                    title="OPERATIONAL ENTROPY"
                    description={<>Your organization's brain is scattered across Discord logs, DM groups, and forgotten Google Docs. Valuable scrim history, player behavioral notes, and brand assets are <span className="text-white font-bold">lost in the chat scroll</span>. You don't own your data; your platforms do.</>}
                    consequence="Amnesia. When a manager leaves, they take all your institutional knowledge with them, forcing you to start from zero."
                    icon={<EntropyIcon />}
                    theme="purple"
                    align="right"
                />

                {/* Navigation Footer */}
                <div className="min-h-[50vh] flex flex-col items-center justify-center relative">
                    <motion.button
                        onClick={onNext}
                        className="p-8 group relative focus:outline-none flex flex-col items-center gap-4"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ margin: "-100px" }}
                    >
                        <div className="absolute inset-0 bg-accent/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        <div className="relative">
                            <ChevronRight className="w-16 h-16 text-accent drop-shadow-[0_0_15px_rgba(0,191,255,0.8)]" />
                            <motion.div
                                className="absolute inset-0 border-2 border-accent rounded-full opacity-0 group-hover:opacity-100"
                                animate={{ scale: [1, 1.5], opacity: [0, 1, 0] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                            />
                        </div>

                        <span className="text-sm font-display tracking-[0.2em] text-accent/80 uppercase group-hover:text-accent transition-colors">
                            Enter The Blueprint
                        </span>
                    </motion.button>
                </div>
            </motion.div>
        </div>
    );
}

// --- Sub-components ---

interface ChaosSectionProps {
    title: string;
    description: React.ReactNode;
    consequence: string;
    icon: React.ReactNode;
    theme: 'blue' | 'red' | 'emerald' | 'purple';
    align: 'left' | 'right';
}

const ChaosSection = ({ title, description, consequence, icon, theme, align }: ChaosSectionProps) => {
    const isLeft = align === 'left';
    const colorMap = {
        blue: { bg: 'bg-blue-500/5', border: 'border-blue-500/20', icon: 'text-blue-400' },
        red: { bg: 'bg-red-500/5', border: 'border-red-500/20', icon: 'text-red-400' },
        emerald: { bg: 'bg-emerald-500/5', border: 'border-emerald-500/20', icon: 'text-emerald-400' },
        purple: { bg: 'bg-purple-500/5', border: 'border-purple-500/20', icon: 'text-purple-400' },
    };
    const colors = colorMap[theme];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" as const }
        }
    };

    return (
        <motion.section
            className={`min-h-[80vh] flex flex-col ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'} items-center justify-center gap-12 px-6 py-24 max-w-7xl mx-auto border-t border-white/5 relative z-10`}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-20%" }}
            variants={containerVariants}
        >
            <div className="flex-1 space-y-8 z-10">
                <motion.div variants={itemVariants} className="flex items-center gap-4">
                    <div className={`p-4 ${colors.bg} rounded-full border ${colors.border} backdrop-blur-sm`}>
                        {theme === 'blue' && <Activity className={`w-6 h-6 ${colors.icon}`} />}
                        {theme === 'red' && <Hourglass className={`w-6 h-6 ${colors.icon}`} />}
                        {theme === 'emerald' && <BrainCircuit className={`w-6 h-6 ${colors.icon}`} />}
                        {theme === 'purple' && <Database className={`w-6 h-6 ${colors.icon}`} />}
                    </div>
                    <h3 className="text-3xl md:text-5xl font-display font-bold text-white tracking-wide">{title}</h3>
                </motion.div>

                <motion.p variants={itemVariants} className="text-lg md:text-xl text-text-secondary leading-relaxed">
                    {description}
                </motion.p>

                <motion.div variants={itemVariants} className={`pl-6 border-l-2 ${colors.border.replace('/20', '/50')} space-y-2`}>
                    <h4 className={`text-sm uppercase tracking-widest font-bold ${colors.icon}`}>The Consequence</h4>
                    <p className="text-white/80 font-light">
                        {consequence}
                    </p>
                </motion.div>
            </div>

            <motion.div variants={itemVariants} className="flex-1 w-full flex justify-center z-10">
                <div className={`relative w-full max-w-md aspect-square rounded-2xl bg-obsidian bg-gradient-to-br from-white/5 to-transparent border border-white/10 flex items-center justify-center overflow-hidden group perspective-500 transition-all duration-500 hover:border-opacity-50 shadow-2xl ${colors.border}`}>
                    <div className={`absolute inset-0 bg-[radial-gradient(circle_at_center,${theme === 'blue' ? '#3b82f6' : theme === 'red' ? '#ef4444' : theme === 'emerald' ? '#10b981' : '#a855f7'}_0%,transparent_70%)] opacity-0 group-hover:opacity-20 transition-opacity duration-700`} />
                    {icon}
                </div>
            </motion.div>
        </motion.section>
    );
};

// --- Animated Icons ---

const RosterIcon = () => { // Original Re-Added
    const [index, setIndex] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => setIndex(prev => (prev + 1) % 3), 1500);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative w-40 h-40 flex items-center justify-center">
            <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, scale: 1.2, filter: "blur(10px)" }}
                transition={{ duration: 0.4 }}
                className="absolute"
            >
                {index === 0 && <Users className="w-32 h-32 text-blue-500/80" />}
                {index === 1 && <Users className="w-32 h-32 text-purple-500/80" />}
                {index === 2 && <AlertTriangle className="w-32 h-32 text-blue-300/80" />}
            </motion.div>
            <div className="absolute inset-x-0 bottom-0 text-center text-xs uppercase tracking-widest text-blue-400/50 mt-4">
                Syncing Roster...
            </div>
        </div>
    );
};

const ContentIcon = () => { // Original Re-Added
    return (
        <div className="relative w-40 h-40 flex items-center justify-center overflow-hidden">
            <motion.div
                animate={{
                    x: [0, -2, 2, -1, 1, 0],
                    opacity: [1, 0.8, 1, 0.9, 1],
                }}
                transition={{
                    duration: 0.2,
                    repeat: Infinity,
                    repeatDelay: Math.random() * 3
                }}
            >
                <Video className="w-32 h-32 text-red-500/80" />
            </motion.div>
            {/* Scanlines */}
            <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.5)_50%)] bg-[length:100%_4px] pointer-events-none opacity-30" />
            <motion.div
                className="absolute inset-0 bg-white/10"
                animate={{ opacity: [0, 0.1, 0] }}
                transition={{ duration: 0.1, repeat: Infinity, repeatDelay: 2 }}
            />
            <div className="absolute inset-x-0 top-0 text-center text-xs uppercase tracking-widest text-red-400/50">
                NO SIGNAL
            </div>
        </div>
    );
};

const StrategicIcon = () => { // Emerald
    return (
        <div className="relative w-40 h-40 flex items-center justify-center">
            <motion.div
                animate={{
                    scale: [1, 1.1, 1],
                    filter: ["drop-shadow(0 0 0px rgba(16,185,129,0))", "drop-shadow(0 0 20px rgba(16,185,129,0.5))", "drop-shadow(0 0 0px rgba(16,185,129,0))"]
                }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
                <BrainCircuit className="w-32 h-32 text-emerald-500/80" />
            </motion.div>
            {/* Floating Binary */}
            {[...Array(3)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute text-emerald-400/30 text-xs font-mono"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: -60, opacity: [0, 1, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.7, ease: "linear" }}
                    style={{ left: `${30 + i * 20}%` }}
                >
                    {Math.random() > 0.5 ? '01' : '10'}
                </motion.div>
            ))}
            <div className="absolute inset-x-0 bottom-0 text-center text-xs uppercase tracking-widest text-emerald-400/50 mt-4">
                Manual Override
            </div>
        </div>
    );
};

const ValuationIcon = () => { // Blue
    return (
        <div className="relative w-40 h-40 flex items-center justify-center">
            {/* Flatlining Graph */}
            <svg className="w-32 h-32 text-blue-500/80" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
                <motion.path
                    d="M 10 90 L 30 50 L 50 30 L 70 70 L 90 70"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                />
                {/* Fading end line to represent mystery/fog */}
                <motion.path
                    d="M 90 70 L 120 70"
                    strokeOpacity="0.2"
                />
            </svg>
            <div className="absolute inset-x-0 bottom-0 text-center text-xs uppercase tracking-widest text-blue-400/50 mt-4">
                Data Missing
            </div>
        </div>
    );
};

const FirefightingIcon = () => { // Red
    return (
        <div className="relative w-40 h-40 flex items-center justify-center">
            <motion.div
                animate={{ rotate: [0, 180, 180, 360], opacity: [0.8, 1, 0.8] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
                <Hourglass className="w-32 h-32 text-red-500/80" />
            </motion.div>
            {/* Panic Pulse */}
            <motion.div
                className="absolute inset-0 bg-red-500/20 rounded-full blur-xl"
                animate={{ scale: [0.8, 1.2, 0.8], opacity: [0, 0.5, 0] }}
                transition={{ duration: 1, repeat: Infinity }}
            />
            <div className="absolute inset-x-0 bottom-0 text-center text-xs uppercase tracking-widest text-red-400/50 mt-4">
                Time Critical
            </div>
        </div>
    );
};

const EntropyIcon = () => { // Purple
    // Fractured pieces
    return (
        <div className="relative w-40 h-40 flex items-center justify-center">
            <motion.div
                className="relative"
            >
                <Database className="w-32 h-32 text-purple-500/80" />
                {/* Floating pieces drifting away */}
                {[...Array(4)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute top-0 right-0 bg-purple-500/80 w-4 h-4 rounded-sm"
                        initial={{ x: 0, y: 0, opacity: 1 }}
                        animate={{
                            x: Math.random() * 60 + 20,
                            y: Math.random() * -60 - 20,
                            opacity: 0,
                            rotate: Math.random() * 360
                        }}
                        transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
                    />
                ))}
            </motion.div>
            <div className="absolute inset-x-0 bottom-0 text-center text-xs uppercase tracking-widest text-purple-400/50 mt-4">
                Connection Lost
            </div>
        </div>
    );
};
