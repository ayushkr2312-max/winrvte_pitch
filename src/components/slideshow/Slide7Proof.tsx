"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight, ArrowLeft } from "lucide-react";
import { Button } from "../ui/Button";

interface SlideProps {
    isActive: boolean;
    onNext: () => void;
    onBack: () => void;
}

export function Slide7Proof({ isActive, onNext, onBack }: SlideProps) {
    if (!isActive) return null;

    const receiptItems = [
        { label: "Full Esports Web Infrastructure", price: "CHECK" },
        { label: "Lifetime Design Updates", price: "CHECK" },
        { label: "Automated CMS", price: "CHECK" },
    ];

    return (
        <motion.div
            className="absolute inset-0 flex flex-col items-center justify-center z-20 bg-obsidian overflow-hidden"
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

            <div className="text-center mb-8 z-10">
                <h2 className="text-4xl md:text-6xl font-display font-bold">
                    HIGH TECH. <span className="text-accent">LOW DRAG.</span>
                </h2>
                <p className="mt-4 text-text-secondary font-body text-xl">The Godspeed Standard. Code replaces agencies.</p>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-12 max-w-6xl w-full px-6">

                {/* Monitor Frame (Left) */}
                <motion.div
                    className="flex-1 w-full aspect-video bg-black border-4 border-charcoal rounded-xl relative shadow-2xl overflow-hidden group"
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: "spring", delay: 0.2 }}
                >
                    {/* Screen Content - Placeholder for Godspeed */}
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black flex items-center justify-center overflow-hidden">
                        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.05)_25%,rgba(255,255,255,0.05)_50%,transparent_50%,transparent_75%,rgba(255,255,255,0.05)_75%,rgba(255,255,255,0.05)_100%)] bg-[size:20px_20px] opacity-20" />
                        <h3 className="text-5xl font-black italic tracking-tighter text-white opacity-20 group-hover:opacity-40 transition-opacity">GODSPEED</h3>

                        {/* Simulated UI Elements */}
                        <div className="absolute top-4 left-4 right-4 h-4 bg-white/10 rounded-full" />
                        <div className="absolute bottom-12 left-12 w-32 h-32 bg-accent/20 rounded-lg backdrop-blur-sm border border-accent/50" />
                        <div className="absolute top-1/2 right-12 w-48 h-2 bg-white/20 rounded" />
                        <div className="absolute top-1/2 mt-4 right-12 w-32 h-2 bg-white/10 rounded" />
                    </div>

                    {/* Monitor Glare */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none" />
                </motion.div>

                {/* Receipt (Right) */}
                <div className="w-full md:w-80 bg-white text-black font-mono p-6 shadow-[0_0_50px_rgba(255,255,255,0.1)] relative rotate-1">
                    <div className="absolute top-0 left-0 w-full h-2 bg-[repeating-linear-gradient(45deg,transparent,transparent_5px,black_5px,black_10px)] opacity-10" />

                    <div className="text-center border-b-2 border-black pb-4 mb-4">
                        <h4 className="font-bold text-xl">WINRVTE SYSTEMS</h4>
                        <p className="text-xs">Date: PRESENT DAY</p>
                    </div>

                    <div className="space-y-4 text-sm">
                        {receiptItems.map((item, i) => (
                            <motion.div
                                key={i}
                                className="flex justify-between items-center"
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.5 + i * 0.3 }}
                            >
                                <span>{item.label}</span>
                                <span className="font-bold">{item.price}</span>
                            </motion.div>
                        ))}
                    </div>

                    <div className="border-t-2 border-black mt-6 pt-4 flex justify-between items-center text-lg font-bold">
                        <span>TOTAL</span>
                        <motion.span
                            className="text-xl text-blue-600 animate-pulse"
                            initial={{ scale: 1.5, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 1.5, type: "spring" }}
                        >
                            $100.00
                        </motion.span>
                    </div>

                    <div className="mt-8 text-center text-xs opacity-60">
                        <p>THANK YOU FOR YOUR BUSINESS</p>
                        <div className="mt-2 text-[10px]">* Terms and conditions apply.</div>
                    </div>

                    {/* Torn paper effect bottom */}
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-white" style={{ clipPath: "polygon(0% 0%, 5% 100%, 10% 0%, 15% 100%, 20% 0%, 25% 100%, 30% 0%, 35% 100%, 40% 0%, 45% 100%, 50% 0%, 55% 100%, 60% 0%, 65% 100%, 70% 0%, 75% 100%, 80% 0%, 85% 100%, 90% 0%, 95% 100%, 100% 0%)" }} />
                </div>

            </div>

            <div className="mt-12">
                <Button onClick={onNext} className="gap-2">
                    See The Offer <ArrowRight className="w-4 h-4" />
                </Button>
            </div>

        </motion.div>
    );
}
