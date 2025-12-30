"use client";

import { motion } from "framer-motion";
import { Users, Video, BrainCircuit, ArrowRight, ArrowLeft } from "lucide-react"; // Icons
import { Button } from "../ui/Button";

interface Slide2Props {
    isActive: boolean;
    onBack: () => void;
    onNext: () => void;
}

export function Slide2Chaos({ isActive, onBack, onNext }: Slide2Props) {
    if (!isActive) return null;

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.15, delayChildren: 0.3 }
        }
    };

    const cardVariant = {
        hidden: { y: 50, opacity: 0, scale: 0.9 },
        show: { y: 0, opacity: 1, scale: 1, transition: { type: "spring" as const, damping: 20 } }
    };

    const clusters = [
        {
            id: "roster",
            title: "ROSTER ROULETTE",
            message: "Signing based on hype, not data.",
            result: "Budget wasted on lineups that disband in a month.",
            icon: Users,
            color: "from-blue-500/20 to-purple-500/20",
            borderColor: "group-hover:border-blue-400"
        },
        {
            id: "content",
            title: "THE CONTENT VOID",
            message: "Burning cash on editors without knowing why.",
            result: "Zero sponsor ROI.",
            icon: Video,
            color: "from-red-500/20 to-orange-500/20",
            borderColor: "group-hover:border-red-400"
        },
        {
            id: "coach",
            title: "COACH'S BURNOUT",
            message: "Staff logging data instead of coaching.",
            result: "They are doing data entry, not strategy.",
            icon: BrainCircuit,
            color: "from-emerald-500/20 to-teal-500/20",
            borderColor: "group-hover:border-emerald-400"
        },
    ];

    return (
        <motion.div
            className="absolute inset-0 flex flex-col items-center pt-24 pb-12 px-6 z-20"
            variants={container}
            initial="hidden"
            animate="show"
        >
            {/* Back Button */}
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1 }}
                className="absolute top-8 left-8 z-30"
            >
                <button
                    onClick={onBack}
                    className="text-text-secondary hover:text-white flex items-center gap-2 uppercase tracking-widest text-xs font-display transition-colors group"
                >
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                    Return
                </button>
            </motion.div>

            {/* Header */}
            <motion.div variants={cardVariant} className="text-center mb-16 space-y-4">
                <h2 className="text-3xl md:text-5xl font-display font-bold">
                    THE <span className="text-accent underline decoration-accent/30 underline-offset-8">"VIBES-BASED"</span> TRAP
                </h2>
                <p className="text-xl text-text-secondary">
                    You aren't losing because of bad luck. You are <span className="text-danger font-bold">flying blind.</span>
                </p>
            </motion.div>

            {/* Cluster Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl">
                {clusters.map((cluster) => {
                    const Icon = cluster.icon;
                    return (
                        <motion.div
                            key={cluster.id}
                            variants={cardVariant}
                            whileHover={{ scale: 1.02, y: -5 }}
                            className={`
                group relative p-8 rounded-lg border border-white/5 bg-gradient-to-br ${cluster.color} 
                backdrop-blur-md overflow-hidden transition-colors duration-300
                hover:border-opacity-100 border-opacity-0 ${cluster.borderColor}
              `}
                        >
                            {/* Hover Glow Background */}
                            <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="relative z-10 flex flex-col h-full items-center text-center">
                                <div className="p-4 bg-obsidian/50 rounded-full mb-6 border border-white/10 group-hover:border-white/30 transition-colors">
                                    <Icon className="w-8 h-8 text-white/80 group-hover:text-white" />
                                </div>

                                <h3 className="font-display font-bold text-lg mb-3 tracking-wider text-white">
                                    {cluster.title}
                                </h3>

                                <p className="text-text-secondary mb-6 group-hover:text-white transition-colors">
                                    {cluster.message}
                                </p>

                                <div className="mt-auto pt-6 border-t border-white/5 w-full">
                                    <span className="text-xs uppercase tracking-widest text-text-dim">Result:</span>
                                    <p className="text-sm font-bold text-white mt-1">
                                        {cluster.result}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    );
                })}
            </div>

            {/* Navigation Footer */}
            <motion.div
                variants={cardVariant}
                className="mt-auto pt-12"
            >
                <Button variant="outline" className="gap-3" onClick={onNext}>
                    View The Solution <ArrowRight className="w-4 h-4" />
                </Button>
            </motion.div>
        </motion.div>
    );
}
