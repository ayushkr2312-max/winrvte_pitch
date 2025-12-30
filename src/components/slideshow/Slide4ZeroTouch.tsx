"use client";

import { motion } from "framer-motion";
import { MessageSquare, FileSpreadsheet, ArrowRight, ArrowLeft, Bot, Zap } from "lucide-react";
import { Button } from "../ui/Button";

interface SlideProps {
    isActive: boolean;
    onNext: () => void;
    onBack: () => void;
}

export function Slide4ZeroTouch({ isActive, onNext, onBack }: SlideProps) {
    if (!isActive) return null;

    return (
        <motion.div
            className="absolute inset-0 flex flex-col items-center justify-center z-20 bg-obsidian text-white overflow-hidden"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
        >
            <div className="absolute top-8 left-8 z-30">
                <button onClick={onBack} className="text-text-secondary hover:text-white flex items-center gap-2 uppercase tracking-widest text-xs font-display transition-colors group">
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                    Back
                </button>
            </div>

            <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center h-full max-h-[80vh]">

                {/* Left Col: Text & Content */}
                <div className="space-y-8 order-2 md:order-1">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                        <h2 className="text-4xl md:text-5xl font-display font-bold leading-tight">
                            YOUR COACH SHOULD BE <span className="text-accent">COACHING.</span> <br />
                            <span className="text-danger">NOT TYPING.</span>
                        </h2>
                        <p className="mt-6 text-xl text-text-secondary">
                            Drag & Drop Scrim Results <ArrowRight className="inline mx-2 text-accent" /> Instant Analysis.
                            <br />
                            <span className="text-white font-bold">No humans involved.</span>
                        </p>
                    </motion.div>

                    <Button onClick={onNext} className="gap-2">
                        Next Feature <ArrowRight className="w-4 h-4" />
                    </Button>
                </div>

                {/* Right Col: Animation Window */}
                <div className="relative h-[400px] w-full bg-surface/50 rounded-xl border border-white/10 overflow-hidden flex items-center justify-center order-1 md:order-2">

                    {/* Background Elements */}
                    <div className="absolute inset-0 grid grid-cols-2 gap-px bg-white/5 p-4">
                        {/* Simulated Discord UI */}
                        <div className="bg-[#36393f] rounded-l-lg p-4 flex flex-col gap-3 opacity-80">
                            <div className="w-full h-4 bg-white/10 rounded" />
                            <div className="flex gap-2">
                                <div className="w-8 h-8 rounded-full bg-indigo-500/20" />
                                <div className="flex-1 space-y-2">
                                    <div className="w-20 h-3 bg-white/5 rounded" />
                                    <div className="w-full h-12 bg-black/20 rounded p-2 text-xs font-mono text-green-400">
                                        SCRIM_RESULT.png
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Simulated Sheets UI */}
                        <div className="bg-[#f8f9fa] rounded-r-lg p-4 flex flex-col gap-2 opacity-90 text-black">
                            <div className="w-full h-6 border-b border-gray-300 flex items-center px-2">
                                <div className="w-4 h-4 bg-green-600 rounded mr-2" />
                                <div className="w-20 h-2 bg-gray-300 rounded" />
                            </div>
                            <div className="grid grid-cols-3 gap-1 mt-2">
                                {[...Array(9)].map((_, i) => (
                                    <motion.div
                                        key={i}
                                        className="h-4 bg-gray-200 rounded"
                                        animate={{ backgroundColor: ["#e5e7eb", "#86efac", "#e5e7eb"] }}
                                        transition={{ duration: 0.5, delay: 2 + i * 0.1, repeat: Infinity, repeatDelay: 3 }}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Middle Filter Config */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <div className="w-24 h-24 bg-obsidian border border-accent rounded-xl flex flex-col items-center justify-center z-10 shadow-[0_0_30px_rgba(0,191,255,0.2)]">
                            <Bot className="w-8 h-8 text-accent mb-2" />
                            <span className="text-[10px] font-display text-white">WINRVTE LOGIC</span>
                        </div>
                    </div>

                    {/* Flying Object Animation */}
                    <motion.div
                        className="absolute z-20 top-1/2 left-10 -mt-6 p-3 bg-indigo-500 rounded-lg shadow-lg text-white"
                        animate={{
                            x: [0, 150, 300], // Moves across
                            y: [0, -20, 0],   // Arcs slightly
                            scale: [1, 0.5, 1], // Shrinks in filter
                            opacity: [1, 1, 0] // Disappears at integration
                        }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", repeatDelay: 1 }}
                    >
                        <MessageSquare className="w-6 h-6" />
                    </motion.div>

                    {/* Result Object Animation (Data appearing) */}
                    {/* Handled by the Sheet cells glowing in sync */}

                </div>

            </div>
        </motion.div>
    );
}
