"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Copy, Check, Mail, MessageSquare } from "lucide-react";
import { useState } from "react";

interface SlideProps {
    isActive: boolean;
    onBack: () => void;
}

export function Slide8Offer({ isActive, onBack }: SlideProps) {
    const [copiedEmail, setCopiedEmail] = useState(false);
    const [copiedDiscord, setCopiedDiscord] = useState(false);

    const copyToClipboard = (text: string, type: 'email' | 'discord') => {
        navigator.clipboard.writeText(text);
        if (type === 'email') {
            setCopiedEmail(true);
            setTimeout(() => setCopiedEmail(false), 2000);
        } else {
            setCopiedDiscord(true);
            setTimeout(() => setCopiedDiscord(false), 2000);
        }
    };

    if (!isActive) return null;

    return (
        <motion.div
            className="absolute inset-0 bg-black z-20 overflow-hidden font-brand text-white selection:bg-emerald-500/30"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            {/* AMBIENT BACKGROUND - Subtle Breath */}
            <motion.div
                className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.05)_0%,transparent_60%)]"
                animate={{ opacity: [0.5, 0.8, 0.5] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 pointer-events-none mix-blend-overlay" />

            <div className="absolute inset-0 flex flex-col items-center justify-center relative z-10 p-6">

                {/* --- HEADLINE --- */}
                <motion.div
                    className="text-center mb-16 space-y-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full mb-4 mx-auto">
                        <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                        <span className="text-[10px] font-mono text-white/50 tracking-widest uppercase">
                            System Ready
                        </span>
                    </div>

                    <h1 className="text-5xl md:text-8xl font-black tracking-tighter text-white">
                        READY TO <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-b from-emerald-400 to-emerald-600">DEPLOY?</span>
                    </h1>

                    <p className="text-xl text-white/50 font-light">
                        The infrastructure is built. Make the call.
                    </p>
                </motion.div>


                {/* --- CARDS (SIDE BY SIDE) --- */}
                <div className="flex flex-col md:flex-row gap-6 w-full max-w-4xl justify-center">

                    {/* CARD 1: EMAIL */}
                    <motion.div
                        className="flex-1 bg-white/5 border border-white/10 hover:border-emerald-500/50 hover:bg-white/10 p-8 rounded-2xl cursor-pointer group transition-all duration-300 flex flex-col items-center justify-center text-center gap-4 relative overflow-hidden"
                        onClick={() => copyToClipboard('elendilm2m@gmail.com', 'email')}
                        initial="idle"
                        whileHover="hover"
                        animate={{ opacity: 1, x: 0 }}
                        variants={{
                            idle: { opacity: 0, x: -20 },
                            hover: { scale: 1.02 }
                        }}
                        transition={{ delay: 0.4 }}
                    >
                        {/* Glossy Sheen */}
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12"
                            variants={{
                                idle: { x: "-100%" },
                                hover: { x: "200%", transition: { duration: 0.6, ease: "easeInOut" } }
                            }}
                        />

                        <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-emerald-500/20 transition-colors relative z-10">
                            <Mail className="w-8 h-8 text-white group-hover:text-emerald-400 transition-colors" />
                        </div>
                        <div className="relative z-10">
                            <div className="text-xs font-mono text-white/30 uppercase tracking-widest mb-2">Email Uplink</div>
                            <div className="text-xl md:text-2xl font-bold text-white group-hover:text-emerald-400 transition-colors break-all">
                                elendilm2m@gmail.com
                            </div>
                        </div>
                        <div className="absolute top-4 right-4 text-white/10 group-hover:text-emerald-400 transition-colors z-10">
                            {copiedEmail ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
                        </div>
                    </motion.div>

                    {/* CARD 2: DISCORD */}
                    <motion.div
                        className="flex-1 bg-white/5 border border-white/10 hover:border-[#5865F2]/50 hover:bg-white/10 p-8 rounded-2xl cursor-pointer group transition-all duration-300 flex flex-col items-center justify-center text-center gap-4 relative overflow-hidden"
                        onClick={() => copyToClipboard('.elendil.', 'discord')}
                        initial="idle"
                        whileHover="hover"
                        animate={{ opacity: 1, x: 0 }}
                        variants={{
                            idle: { opacity: 0, x: 20 },
                            hover: { scale: 1.02 }
                        }}
                        transition={{ delay: 0.5 }}
                    >
                        {/* Glossy Sheen */}
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12"
                            variants={{
                                idle: { x: "-100%" },
                                hover: { x: "200%", transition: { duration: 0.6, ease: "easeInOut" } }
                            }}
                        />

                        <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#5865F2]/20 transition-colors relative z-10">
                            <MessageSquare className="w-8 h-8 text-white group-hover:text-[#5865F2] transition-colors" />
                        </div>
                        <div className="relative z-10">
                            <div className="text-xs font-mono text-white/30 uppercase tracking-widest mb-2">Discord Comms</div>
                            <div className="text-xl md:text-2xl font-bold text-white group-hover:text-[#5865F2] transition-colors">
                                .elendil.
                            </div>
                        </div>
                        <div className="absolute top-4 right-4 text-white/10 group-hover:text-[#5865F2] transition-colors z-10">
                            {copiedDiscord ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
                        </div>
                    </motion.div>

                </div>


                {/* Back Navigation */}
                <motion.button
                    onClick={onBack}
                    className="fixed left-6 top-8 z-50 flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full backdrop-blur-md transition-all group"
                >
                    <ArrowLeft className="w-4 h-4 text-white/50 group-hover:text-white" />
                    <span className="text-xs font-mono text-white/50 group-hover:text-white uppercase">Go Back</span>
                </motion.button>

            </div>
        </motion.div>
    );
}
