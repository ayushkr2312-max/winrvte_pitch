"use client";

import { motion } from "framer-motion";
import { TrendingUp, DollarSign, ArrowRight, ArrowLeft } from "lucide-react";
import { Button } from "../ui/Button";

interface SlideProps {
    isActive: boolean;
    onNext: () => void;
    onBack: () => void;
}

export function Slide6ContentROI({ isActive, onNext, onBack }: SlideProps) {
    if (!isActive) return null;

    return (
        <motion.div
            className="absolute inset-0 flex flex-col items-center justify-center z-20 bg-charcoal text-white overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <div className="absolute top-8 left-8 z-30">
                <button onClick={onBack} className="text-text-secondary hover:text-white flex items-center gap-2 uppercase tracking-widest text-xs font-display transition-colors group">
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                    Back
                </button>
            </div>

            <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                {/* Left: Text */}
                <motion.div
                    className="space-y-6"
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                >
                    <div className="flex items-center gap-3 text-accent mb-2">
                        <DollarSign className="w-6 h-6" />
                        <span className="font-mono text-sm tracking-widest">REVENUE OPTIMIZATION</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-display font-bold leading-tight">
                        PROVE YOUR WORTH TO <span className="text-white border-b-4 border-accent">SPONSORS.</span>
                    </h2>
                    <p className="text-xl text-text-secondary">
                        Sponsors don't buy <span className="line-through decoration-danger decoration-2 text-text-dim">passion</span>.
                        They buy <span className="text-white font-bold">numbers</span>.
                        <br />
                        We give you the leverage to close deals.
                    </p>

                    <Button onClick={onNext} className="mt-4">
                        See The Proof <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                </motion.div>

                {/* Right: Graph Visual */}
                <div className="relative h-[400px] bg-surface/50 rounded-xl border border-white/5 p-6 flex items-end">

                    {/* Axes */}
                    <div className="absolute left-6 bottom-6 top-6 w-[1px] bg-white/10" />
                    <div className="absolute left-6 bottom-6 right-6 h-[1px] bg-white/10" />

                    {/* Jagged Line (The Old Way) */}
                    <svg className="absolute inset-0 w-full h-full p-6 overflow-visible">
                        <motion.path
                            d="M 0 300 L 50 280 L 100 320 L 150 250 L 200 290 L 250 200 L 300 240 L 350 220"
                            fill="none"
                            stroke="#ef4444" // Red
                            strokeWidth="2"
                            strokeOpacity="0.5"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 2, ease: "linear" }}
                        />
                        {/* Label for Red Line */}
                        <motion.text x="360" y="220" fill="#ef4444" className="text-xs font-mono" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }}>VIBES</motion.text>

                        {/* Smooth Curve (Winrvte Way) */}
                        <motion.path
                            d="M 0 300 Q 150 280 250 100 T 500 20"
                            fill="none"
                            stroke="#00BFFF" // Accent Blue
                            strokeWidth="4"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 2, delay: 0.5, ease: "easeOut" }}
                        />
                        {/* Glow effect for blue line */}
                        <motion.path
                            d="M 0 300 Q 150 280 250 100 T 500 20"
                            fill="none"
                            stroke="#00BFFF"
                            strokeWidth="10"
                            strokeOpacity="0.2"
                            className="blur-md"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 2, delay: 0.5, ease: "easeOut" }}
                        />

                        <motion.text x="450" y="40" fill="#00BFFF" className="text-sm font-bold font-display" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.5 }}>WINRVTE GROWTH</motion.text>
                    </svg>

                </div>
            </div>
        </motion.div>
    );
}
