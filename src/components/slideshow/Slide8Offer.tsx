"use client";

import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle2, ShieldCheck, Mail, Calendar, ArrowRight, Lock } from "lucide-react";
import { Button } from "../ui/Button";

interface SlideProps {
    isActive: boolean;
    onBack: () => void;
}

export function Slide8Offer({ isActive, onBack }: SlideProps) {
    if (!isActive) return null;

    return (
        <motion.div
            className="absolute inset-0 bg-[#050505] z-20 overflow-hidden font-brand text-white selection:bg-emerald-500/30"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            {/* Background Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />

            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 relative z-10">

                {/* Header */}
                <motion.div
                    className="text-center space-y-6 mb-12"
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full backdrop-blur-md">
                        <Lock className="w-3 h-3 text-emerald-500" />
                        <span className="text-[10px] font-mono text-white/50 uppercase tracking-widest">Protocol: Secure</span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-white">
                        INITIATE <br /> <span className="text-emerald-500">PARTNERSHIP.</span>
                    </h1>
                    <p className="text-xl text-white/60 max-w-xl mx-auto font-light">
                        We are currently accepting 3 new partners for Q1. <br />
                        Scale your revenue with the same OS used by the top 1%.
                    </p>
                </motion.div>

                {/* Offer Card */}
                <motion.div
                    className="w-full max-w-md bg-[#111] border border-white/10 rounded-2xl p-8 shadow-[0_0_50px_rgba(16,185,129,0.1)] hover:shadow-[0_0_80px_rgba(16,185,129,0.2)] transition-shadow duration-500"
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                >
                    <div className="flex items-center gap-4 mb-8">
                        <div className="w-12 h-12 bg-emerald-500/20 rounded-full flex items-center justify-center">
                            <ShieldCheck className="w-6 h-6 text-emerald-500" />
                        </div>
                        <div>
                            <div className="text-white font-bold text-lg">Director Access</div>
                            <div className="text-xs text-gray-500 font-mono">FULL STACK DEPLOYMENT</div>
                        </div>
                    </div>

                    <ul className="space-y-4 mb-8">
                        {[
                            "Zero-Touch Content Systems",
                            "Commercial Deal Flow Management",
                            "Data-Backed Growth Intelligence",
                            "Dedicated Account Director"
                        ].map((item, i) => (
                            <li key={i} className="flex items-center gap-3 text-sm text-gray-300">
                                <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                                {item}
                            </li>
                        ))}
                    </ul>

                    <Button
                        onClick={() => window.open('https://calendly.com', '_blank')}
                        className="w-full bg-emerald-500 text-black hover:bg-emerald-400 font-bold py-4 rounded-lg flex items-center justify-center gap-2 transition-transform hover:scale-[1.02]"
                    >
                        <Calendar className="w-4 h-4" />
                        Schedule Briefing
                    </Button>

                    <div className="mt-4 text-center">
                        <span className="text-[10px] text-gray-600 font-mono uppercase">Limited Availability for Dec 2025</span>
                    </div>
                </motion.div>

                {/* Footer */}
                <motion.div
                    className="mt-12 flex items-center gap-8 opacity-40 text-xs font-mono text-gray-500"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.4 }}
                    transition={{ delay: 0.5 }}
                >
                    <span>WINRVTE SYSTEMS</span>
                    <span className="w-1 h-1 bg-white rounded-full" />
                    <span>LOS ANGELES, CA</span>
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
        </motion.div>
    );
}
