"use client";

import { useState, lazy, Suspense } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Slide1Hook } from "./Slide1Hook";

// Lazy Load Heavy Slides
const Slide2Chaos = lazy(() => import("./Slide2Chaos").then(m => ({ default: m.Slide2Chaos })));
const Slide3Blueprint = lazy(() => import("./Slide3Blueprint").then(m => ({ default: m.Slide3Blueprint })));
const Slide4ZeroTouch = lazy(() => import("./Slide4ZeroTouch").then(m => ({ default: m.Slide4ZeroTouch })));
const Slide5Growth = lazy(() => import("./Slide5Growth").then(m => ({ default: m.Slide5Growth })));
const Slide6External = lazy(() => import("./Slide6External").then(m => ({ default: m.Slide6External })));
const Slide6ContentROI = lazy(() => import("./Slide6ContentROI").then(m => ({ default: m.Slide6ContentROI })));
const Slide7Proof = lazy(() => import("./Slide7Proof").then(m => ({ default: m.Slide7Proof })));
const Slide8Offer = lazy(() => import("./Slide8Offer").then(m => ({ default: m.Slide8Offer })));
const SlideProjectPhoenix = lazy(() => import("./SlideProjectPhoenix").then(m => ({ default: m.SlideProjectPhoenix })));

const CHAPTER_TITLES: Record<number, string> = {
    1: "THE HOOK",
    2: "THE CHAOS",
    3: "THE SYSTEMS",
    4: "ZERO TOUCH",
    5: "VIRAL ENGINE",
    6: "OPPORTUNITY",
    7: "ROI PROOF",
    8: "PROJECT PHOENIX",
    9: "DEPLOY"
};

const slideVariants = {
    enter: (direction: number) => ({
        x: direction > 0 ? "100%" : "-100%",
        opacity: 0,
        scale: 0.95,
        filter: "blur(10px)"
    }),
    center: {
        x: 0,
        opacity: 1,
        scale: 1,
        filter: "blur(0px)",
        transition: {
            x: { type: "tween", ease: "easeInOut", duration: 0.6 },
            opacity: { duration: 0.5 },
            scale: { duration: 0.5 }
        } as any
    },
    exit: (direction: number) => ({
        x: direction < 0 ? "100%" : "-100%",
        opacity: 0,
        scale: 1.05,
        filter: "blur(10px)",
        transition: {
            x: { type: "tween", ease: "easeInOut", duration: 0.6 },
            opacity: { duration: 0.5 },
            scale: { duration: 0.5 }
        } as any
    })
};

export function SlideshowContainer() {
    const [currentSlide, setCurrentSlide] = useState(1);
    const [direction, setDirection] = useState(0);
    const [isExiting1, setIsExiting1] = useState(false);

    const handleInitialize = () => {
        setIsExiting1(true);
        setTimeout(() => {
            setDirection(1);
            setCurrentSlide(2);
        }, 1500);
    };

    const handleNext = () => {
        setDirection(1);
        setCurrentSlide((prev) => prev + 1);
    };

    const handleBack = () => {
        if (currentSlide === 2) {
            setIsExiting1(false);
            setDirection(-1);
            setCurrentSlide(1);
        } else {
            setDirection(-1);
            setCurrentSlide((prev) => prev - 1);
        }
    };

    return (
        <div className="relative w-screen h-screen overflow-hidden bg-obsidian text-white font-brand">
            {/* Background Layer - Nebula / Noise */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-charcoal via-obsidian to-obsidian opacity-80" />
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} />

            {/* Main Content Area */}
            <AnimatePresence mode="popLayout" custom={direction}>
                <motion.div
                    key={currentSlide}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    className="absolute inset-0 w-full h-full"
                >
                    <Suspense fallback={<LoadingFallback />}>
                        {currentSlide === 1 && (
                            <Slide1Hook
                                onInitialize={handleInitialize}
                                isExiting={isExiting1}
                            />
                        )}
                        {currentSlide === 2 && (
                            <Slide2Chaos
                                isActive={currentSlide === 2}
                                onBack={handleBack}
                                onNext={handleNext}
                            />
                        )}
                        {currentSlide === 3 && (
                            <Slide3Blueprint
                                isActive={currentSlide === 3}
                                onBack={handleBack}
                                onNext={handleNext}
                            />
                        )}
                        {currentSlide === 4 && (
                            <Slide4ZeroTouch
                                isActive={currentSlide === 4}
                                onBack={handleBack}
                                onNext={handleNext}
                            />
                        )}
                        {currentSlide === 5 && (
                            <Slide5Growth
                                isActive={currentSlide === 5}
                                onBack={handleBack}
                                onNext={handleNext}
                            />
                        )}
                        {currentSlide === 6 && (
                            <Slide6External
                                isActive={currentSlide === 6}
                                onBack={handleBack}
                                onNext={handleNext}
                            />
                        )}
                        {currentSlide === 7 && (
                            <Slide6ContentROI
                                isActive={currentSlide === 7}
                                onBack={handleBack}
                                onNext={handleNext}
                            />
                        )}
                        {currentSlide === 8 && (
                            <SlideProjectPhoenix
                                isActive={currentSlide === 8}
                                onBack={handleBack}
                                onNext={handleNext}
                            />
                        )}
                        {currentSlide === 9 && (
                            <Slide8Offer
                                isActive={currentSlide === 9}
                                onBack={handleBack}
                            />
                        )}
                    </Suspense>
                </motion.div>
            </AnimatePresence>

            {/* Flash Overlay for Slide 1 -> 2 Transition */}
            <motion.div
                className="absolute inset-0 bg-accent z-50 pointer-events-none"
                initial={{ opacity: 0 }}
                animate={isExiting1 ? { opacity: [0, 1, 0], transition: { duration: 0.8, delay: 1.2, times: [0, 0.5, 1] } } : { opacity: 0 }}
            />

            {/* TACTICAL HUD - Chapter Status */}
            <div className="fixed top-8 right-8 z-[60] flex flex-col items-end pointer-events-none mix-blend-difference">
                <div className="flex items-center gap-3">
                    <span className="font-mono text-[10px] text-white/40 tracking-[0.2em]">CHAPTER</span>
                    <span className="font-black text-xl text-white tracking-widest">{String(currentSlide).padStart(2, '0')}</span>
                </div>
                <div className="flex items-center gap-2 mt-1">
                    <div className="h-[1px] w-8 bg-white/20" />
                    <span className={`font-mono text-xs tracking-[0.3em] uppercase ${currentSlide === 2 ? "text-red-500" : "text-emerald-400"}`}>
                        {CHAPTER_TITLES[currentSlide] || "UNKNOWN"}
                    </span>
                </div>
            </div>

            {/* Global Navigation Arrows */}
            <div className="fixed bottom-8 right-8 z-[60] flex gap-2 pointer-events-none">
                {/* Back Arrow */}
                {currentSlide > 1 && (
                    <button
                        onClick={handleBack}
                        className="pointer-events-auto p-4 bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 rounded-full transition-all group backdrop-blur-sm"
                        title="Quick Back"
                    >
                        <ArrowLeft className="w-5 h-5 text-white/30 group-hover:text-white transition-colors" />
                    </button>
                )}

                {/* Next Arrow */}
                {currentSlide < Object.keys(CHAPTER_TITLES).length && (
                    <button
                        onClick={handleNext}
                        className="pointer-events-auto p-4 bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 rounded-full transition-all group backdrop-blur-sm"
                        title="Quick Next"
                    >
                        <ArrowRight className="w-5 h-5 text-white/30 group-hover:text-white transition-colors" />
                    </button>
                )}
            </div>

            {/* GLOBAL PREMIUM OVERLAY - THE CINEMATIC LENS */}
            <div className="fixed inset-0 z-[100] pointer-events-none select-none">
                {/* 1. Ultra-Fine Film Grain */}
                <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay"
                    style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
                />
            </div>
        </div>
    );
}

function LoadingFallback() {
    return (
        <div className="flex items-center justify-center w-full h-full bg-black text-emerald-500 font-mono tracking-widest text-sm uppercase">
            <div className="flex flex-col items-center gap-4">
                <div className="w-8 h-8 border-2 border-emerald-500/30 border-t-emerald-500 rounded-full animate-spin" />
                <span className="animate-pulse">System Initializing...</span>
            </div>
        </div>
    );
}
