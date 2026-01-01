"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Slide1Hook } from "./Slide1Hook";
import { Slide2Chaos } from "./Slide2Chaos";
import { Slide3Blueprint } from "./Slide3Blueprint";
import { Slide4ZeroTouch } from "./Slide4ZeroTouch";
import { Slide5Growth } from "./Slide5Growth";
import { Slide6External } from "./Slide6External";
import { Slide6ContentROI } from "./Slide6ContentROI";
import { Slide7Proof } from "./Slide7Proof";
import { Slide8Offer } from "./Slide8Offer";
import { SlideProjectPhoenix } from "./SlideProjectPhoenix";

export function SlideshowContainer() {
    const [currentSlide, setCurrentSlide] = useState(1);
    const [isExiting1, setIsExiting1] = useState(false);

    // Special transition from Hook (1) to Chaos (2)
    const handleInitialize = () => {
        setIsExiting1(true);
        setTimeout(() => {
            setCurrentSlide(2);
        }, 1500);
    };

    const goToSlide = (slideIndex: number) => {
        if (slideIndex === 1) {
            setIsExiting1(false);
        }
        setCurrentSlide(slideIndex);
    };

    const handleNext = () => {
        setCurrentSlide((prev) => prev + 1);
    };

    const handleBack = () => {
        // If going back to Slide 1 from Slide 2
        if (currentSlide === 2) {
            setIsExiting1(false);
            setCurrentSlide(1);
        } else {
            setCurrentSlide((prev) => prev - 1);
        }
    };

    return (
        <div className="relative w-screen h-screen overflow-hidden bg-obsidian text-white">
            {/* Background Layer - Nebula / Noise */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-charcoal via-obsidian to-obsidian opacity-80" />
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} />

            {/* Main Content Area */}
            <AnimatePresence mode="wait">

                {currentSlide === 1 && (
                    <Slide1Hook
                        key="slide1"
                        isExiting={isExiting1}
                        onInitialize={handleInitialize}
                    />
                )}

                {currentSlide === 2 && (
                    <Slide2Chaos
                        key="slide2"
                        isActive={true}
                        onBack={handleBack}
                        onNext={handleNext}
                    />
                )}

                {currentSlide === 3 && (
                    <Slide3Blueprint key="slide3" isActive={true} onNext={handleNext} onBack={handleBack} />
                )}

                {currentSlide === 4 && (
                    <Slide4ZeroTouch key="slide4" isActive={true} onNext={handleNext} onBack={handleBack} />
                )}

                {currentSlide === 5 && (
                    <Slide5Growth key="slide5" isActive={true} onNext={handleNext} onBack={handleBack} />
                )}

                {currentSlide === 6 && (
                    <Slide6External key="slide6" isActive={true} onNext={handleNext} onBack={handleBack} />
                )}

                {currentSlide === 7 && (
                    <Slide6ContentROI key="slide7" isActive={true} onNext={handleNext} onBack={handleBack} />
                )}

                {currentSlide === 8 && (
                    <Slide7Proof key="slide8" isActive={true} onNext={handleNext} onBack={handleBack} />
                )}

                {currentSlide === 9 && (
                    <SlideProjectPhoenix key="slide9" isActive={true} onNext={handleNext} onBack={handleBack} />
                )}

                {currentSlide === 10 && (
                    <Slide8Offer key="slide10" isActive={true} onBack={handleBack} />
                )}

            </AnimatePresence>

            {/* Flash Overlay for Slide 1 -> 2 Transition */}
            <motion.div
                className="absolute inset-0 bg-accent z-50 pointer-events-none"
                initial={{ opacity: 0 }}
                animate={isExiting1 ? { opacity: [0, 1, 0], transition: { duration: 0.8, delay: 1.2, times: [0, 0.5, 1] } } : { opacity: 0 }}
            />

            {/* Global "Buzz" Navigation Arrows - Low Opacity */}
            <div className="absolute inset-0 z-[60] pointer-events-none">
                {/* Page Number Marker */}
                <div className="fixed top-8 right-8 font-mono text-[10px] text-white/20 tracking-[0.2em] pointer-events-none mix-blend-difference">
                    {String(currentSlide).padStart(2, '0')} / 10
                </div>

                {/* Back Arrow (Bottom Left) */}
                {currentSlide > 1 && (
                    <button
                        onClick={handleBack}
                        className="fixed bottom-4 left-4 text-white/10 hover:text-white/50 transition-colors pointer-events-auto p-4"
                        title="Quick Back"
                    >
                        <ArrowLeft className="w-6 h-6" />
                    </button>
                )}

                {/* Next Arrow (Bottom Right) */}
                {currentSlide < 10 && (
                    <button
                        onClick={handleNext}
                        className="fixed bottom-4 right-4 text-white/10 hover:text-white/50 transition-colors pointer-events-auto p-4"
                        title="Quick Next"
                    >
                        <ArrowRight className="w-6 h-6" />
                    </button>
                )}
            </div>
        </div >
    );
}
