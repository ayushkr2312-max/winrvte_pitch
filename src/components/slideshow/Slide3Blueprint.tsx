"use client";

import { motion } from "framer-motion";
import { Network, Globe, TrendingUp, ArrowRight, ArrowLeft } from "lucide-react";
import { Button } from "../ui/Button";

interface SlideProps {
    isActive: boolean;
    onNext: () => void;
    onBack: () => void;
}

export function Slide3Blueprint({ isActive, onNext, onBack }: SlideProps) {
    if (!isActive) return null;

    const nodes = [
        { id: "internal", label: "INTERNAL", icon: Network, cx: 30, cy: 30 },
        { id: "external", label: "EXTERNAL", icon: Globe, cx: 70, cy: 30 },
        { id: "growth", label: "GROWTH", icon: TrendingUp, cx: 50, cy: 75 },
    ];

    return (
        <motion.div
            className="absolute inset-0 flex flex-col items-center justify-center z-20 bg-grid-pattern overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            {/* Navigation */}
            <div className="absolute top-8 left-8 z-30">
                <button onClick={onBack} className="text-text-secondary hover:text-white flex items-center gap-2 uppercase tracking-widest text-xs font-display transition-colors group">
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                    Back
                </button>
            </div>

            {/* Background Grid Animation */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

            <motion.div className="text-center mb-12 relative z-10" initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }}>
                <h2 className="text-4xl md:text-6xl font-display font-bold tracking-wider text-white">
                    WE TURN <span className="text-dim">CHAOS</span> INTO <span className="text-accent neon-text">SYSTEMS.</span>
                </h2>
            </motion.div>

            {/* The Core System Visual */}
            <div className="relative w-full max-w-2xl aspect-square md:aspect-video flex items-center justify-center">
                {/* Connecting Lines */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none text-accent/30 stroke-current" strokeWidth="2">
                    {nodes.map((node, i) => (
                        <motion.line
                            key={i}
                            x1="50%" y1="50%"
                            x2={`${node.cx}%`} y2={`${node.cy}%`}
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 1.5, ease: "easeInOut", delay: 0.5 + i * 0.2 }}
                        />
                    ))}
                </svg>

                {/* Central Core */}
                <motion.div
                    className="absolute w-24 h-24 bg-obsidian border-2 border-accent rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(0,191,255,0.3)] z-20"
                    animate={{ boxShadow: ["0 0 20px rgba(0,191,255,0.2)", "0 0 50px rgba(0,191,255,0.6)", "0 0 20px rgba(0,191,255,0.2)"] }}
                    transition={{ duration: 3, repeat: Infinity }}
                >
                    <div className="w-16 h-16 rounded-full bg-accent/10 border border-accent/50 animate-pulse" />
                </motion.div>

                {/* Nodes */}
                {nodes.map((node, i) => {
                    const Icon = node.icon;
                    return (
                        <motion.div
                            key={node.id}
                            className="absolute z-20 flex flex-col items-center gap-3 cursor-pointer group"
                            style={{ left: `${node.cx}%`, top: `${node.cy}%`, x: "-50%", y: "-50%" }}
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ type: "spring", delay: 1 + i * 0.2 }}
                            whileHover={{ scale: 1.1 }}
                        >
                            <div className="w-16 h-16 bg-surface border border-white/10 rounded-xl flex items-center justify-center group-hover:border-accent group-hover:bg-accent/10 transition-colors shadow-lg">
                                <Icon className="w-8 h-8 text-white/70 group-hover:text-accent transition-colors" />
                            </div>
                            <span className="font-body font-bold tracking-widest text-sm text-text-secondary group-hover:text-white transition-colors bg-obsidian/80 px-2 py-1 rounded">
                                {node.label}
                            </span>

                            {/* Hover Data Stream Effect */}
                            <div className="absolute inset-0 rounded-xl bg-accent/20 opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-all duration-700 -z-10" />
                        </motion.div>
                    )
                })}
            </div>

            {/* Navigation Footer */}
            <motion.div
                className="absolute bottom-12 z-30"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2 }}
            >
                <Button variant="outline" className="gap-3" onClick={onNext}>
                    Explore Features <ArrowRight className="w-4 h-4" />
                </Button>
            </motion.div>
        </motion.div>
    );
}
