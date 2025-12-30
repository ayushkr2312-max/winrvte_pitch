"use client";

import { motion } from "framer-motion";
import { Radar, Target, ArrowRight, ArrowLeft } from "lucide-react";
import { useState } from "react";
import { Button } from "../ui/Button";

interface SlideProps {
    isActive: boolean;
    onNext: () => void;
    onBack: () => void;
}

export function Slide5Watchtower({ isActive, onNext, onBack }: SlideProps) {
    if (!isActive) return null;

    const players = [
        { id: 1, x: 20, y: 30, name: "Viper", winRate: "62%", status: "Free Agent" },
        { id: 2, x: 60, y: 20, name: "Kael", winRate: "58%", status: "Contract Expiring" },
        { id: 3, x: 40, y: 70, name: "Myst", winRate: "65%", status: "Benched" },
        { id: 4, x: 80, y: 60, name: "Jinx", winRate: "55%", status: "Rising Star" },
    ];

    return (
        <motion.div
            className="absolute inset-0 flex flex-col items-center justify-center z-20 bg-deep overflow-hidden"
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

            <motion.div className="text-center mb-10 z-10" initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
                <h2 className="text-4xl md:text-5xl font-display font-bold">
                    STOP SCOUTING WITH YOUR <span className="text-white/20 blur-[2px]">EYES CLOSED.</span>
                </h2>
                <p className="mt-4 text-accent uppercase tracking-widest font-bold">The Watchtower Engine</p>
            </motion.div>

            {/* Radar Visual */}
            <div className="relative w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-surface/30 rounded-full border border-white/5 flex items-center justify-center overflow-hidden">

                {/* Grid Lines */}
                <div className="absolute inset-0 border-[1px] border-white/5 rounded-full scale-75" />
                <div className="absolute inset-0 border-[1px] border-white/5 rounded-full scale-50" />
                <div className="absolute inset-0 border-[1px] border-white/5 rounded-full scale-25" />
                <div className="absolute w-full h-[1px] bg-white/5 top-1/2 left-0" />
                <div className="absolute h-full w-[1px] bg-white/5 left-1/2 top-0" />

                {/* Scanning Beam */}
                <motion.div
                    className="absolute inset-0 bg-[conic-gradient(from_0deg,transparent_0deg,transparent_270deg,rgba(0,191,255,0.2)_360deg)] rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                />

                {/* Player Dots */}
                {players.map((p) => (
                    <PlayerDot key={p.id} player={p} />
                ))}

            </div>

            <div className="absolute bottom-12 z-30">
                <Button onClick={onNext} variant="outline" className="gap-2">
                    See Content ROI <ArrowRight className="w-4 h-4" />
                </Button>
            </div>

        </motion.div>
    );
}

function PlayerDot({ player }: { player: any }) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="absolute w-4 h-4 rounded-full bg-accent cursor-pointer z-20 group"
            style={{ left: `${player.x}%`, top: `${player.y}%` }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="absolute inset-0 bg-accent rounded-full animate-ping opacity-75" />

            {/* Holographic Popup */}
            {isHovered && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.8, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: -10 }}
                    className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 bg-obsidian/90 border border-accent/30 backdrop-blur-md p-3 rounded-md shadow-[0_0_20px_rgba(0,191,255,0.2)]"
                >
                    <div className="flex justify-between items-center mb-1">
                        <span className="font-display font-bold text-white text-sm">{player.name}</span>
                        <span className="text-xs text-green-400 font-mono">{player.winRate} WR</span>
                    </div>
                    <div className="text-xs text-text-secondary uppercase tracking-wider">{player.status}</div>
                </motion.div>
            )}
        </div>
    )
}
