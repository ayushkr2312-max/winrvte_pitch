"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Check, X, Lock, ArrowRight, ArrowLeft, Mail } from "lucide-react";
import { useState } from "react";
import { Button } from "../ui/Button";

interface SlideProps {
    isActive: boolean;
    onBack: () => void;
}

export function Slide8Offer({ isActive, onBack }: SlideProps) {
    const [isLocked, setIsLocked] = useState(false);

    if (!isActive) return null;

    return (
        <motion.div
            className="absolute inset-0 flex flex-col items-center justify-center z-20 bg-obsidian overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            {!isLocked && (
                <div className="absolute top-8 left-8 z-30">
                    <button onClick={onBack} className="text-text-secondary hover:text-white flex items-center gap-2 uppercase tracking-widest text-xs font-display transition-colors group">
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                        Back
                    </button>
                </div>
            )}

            <AnimatePresence>
                {!isLocked ? (
                    <motion.div
                        className="container mx-auto px-4 flex flex-col items-center"
                        exit={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="text-center mb-12">
                            <h2 className="text-4xl md:text-6xl font-display font-bold uppercase">
                                You Can't Afford <span className="text-danger">Not</span> To Have This.
                            </h2>
                        </div>

                        {/* Comparison Table */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl mb-12">
                            {/* The Old Way */}
                            <motion.div
                                className="bg-surface/30 border border-white/5 rounded-2xl p-8 flex flex-col gap-6 opacity-60 hover:opacity-100 transition-opacity"
                                initial={{ x: -20, opacity: 0 }}
                                animate={{ x: 0, opacity: 0.6 }}
                                transition={{ delay: 0.2 }}
                            >
                                <h3 className="text-2xl font-bold font-display text-text-secondary">THE OLD WAY</h3>
                                <ul className="space-y-4 text-left font-mono text-sm text-text-dim">
                                    <li className="flex items-center gap-3">
                                        <X className="text-danger w-5 h-5" /> Hiring Analyst ($2k/mo)
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <X className="text-danger w-5 h-5" /> Bad Roster Buyouts ($5k+)
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <X className="text-danger w-5 h-5" /> Wasted Content Production ($$$)
                                    </li>
                                </ul>
                                <div className="mt-auto border-t border-white/5 pt-4">
                                    <p className="text-danger font-bold text-xl">= BURNING MONEY</p>
                                </div>
                            </motion.div>

                            {/* The Winrvte Way */}
                            <motion.div
                                className="bg-obsidian border-2 border-accent rounded-2xl p-8 flex flex-col gap-6 shadow-[0_0_40px_rgba(0,191,255,0.15)] relative overflow-hidden group"
                                initial={{ x: 20, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: 0.4 }}
                            >
                                <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                <h3 className="text-2xl font-bold font-display text-white">THE WINRVTE WAY</h3>
                                <ul className="space-y-4 text-left font-mono text-sm text-white relative z-10">
                                    <li className="flex items-center gap-3">
                                        <Check className="text-accent w-5 h-5" /> Automated Data Pipeline
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <Check className="text-accent w-5 h-5" /> Real-time Market Intel
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <Check className="text-accent w-5 h-5" /> Automated Sponsor Reports
                                    </li>
                                </ul>
                                <div className="mt-auto border-t border-white/20 pt-4 relative z-10">
                                    <p className="text-accent font-bold text-xl">= LESS THAN 1 SUB PLAYER</p>
                                </div>
                            </motion.div>
                        </div>

                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <button
                                onClick={() => setIsLocked(true)}
                                className="relative px-12 py-6 bg-accent text-obsidian font-black font-display text-xl md:text-2xl rounded-sm tracking-widest uppercase hover:bg-white transition-colors shadow-[0_0_30px_rgba(0,191,255,0.6)]"
                            >
                                Initialize Partnership
                                <div className="absolute inset-0 border border-white/50 rounded-sm animate-pulse" />
                            </button>
                        </motion.div>

                        <div className="mt-12 text-center opacity-40">
                            <p className="font-serif italic">Established by Elendil. 6 Years in the Trenches.</p>
                        </div>

                    </motion.div>
                ) : (
                    /* System Lock / Login Success State */
                    <motion.div
                        className="absolute inset-0 bg-accent flex flex-col items-center justify-center text-obsidian"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                    >
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ type: "spring", delay: 0.2 }}
                            className="flex flex-col items-center gap-6"
                        >
                            <div className="p-8 bg-obsidian rounded-full">
                                <Lock className="w-16 h-16 text-accent" />
                            </div>

                            <h2 className="text-4xl font-black font-display tracking-widest">SYSTEM LOCKED</h2>
                            <p className="font-mono text-lg font-bold">PARTNERSHIP PROTOCOL INITIATED.</p>

                            <div className="mt-8 p-6 bg-white/10 rounded-xl backdrop-blur-md border border-obsidian/10 text-center">
                                <p className="mb-2 font-bold">CONTACT DIRECT UPLINK:</p>
                                <div className="flex items-center gap-2 text-2xl font-black">
                                    <Mail className="w-6 h-6" />
                                    <a href="mailto:partners@winrvte.gg" className="underline decoration-obsidian/30 underline-offset-4 hover:decoration-obsidian transition-all">partners@winrvte.gg</a>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}
