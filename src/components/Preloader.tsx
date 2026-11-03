import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { useLockBodyScroll } from "../hooks/useLockBodyScroll";
import { Sparkle, Squiggle, StarOutline } from "./decor/Doodles";

interface PreloaderProps {
    onComplete: () => void;
}

const letters = [
    { char: "R", className: "text-white" },
    { char: "E", className: "text-white" },
    { char: "Y", className: "name-gradient" },
    { char: "H", className: "text-white" },
    { char: "A", className: "text-neon-blue" },
    { char: "N", className: "text-neon-lime" },
];

export function Preloader({ onComplete }: PreloaderProps) {
    const [progress, setProgress] = useState(0);
    const finishedRef = useRef(false);
    const prefersReducedMotion = useReducedMotion();

    useLockBodyScroll(true);

    const complete = useCallback(() => {
        if (finishedRef.current) return;
        finishedRef.current = true;
        onComplete();
    }, [onComplete]);

    useEffect(() => {
        let frame = 0;
        let holdTimer = 0;
        const duration = prefersReducedMotion ? 380 : 1750;
        const start = performance.now();

        const tick = (now: number) => {
            const elapsed = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - elapsed, 3);
            setProgress(Math.round(eased * 100));

            if (elapsed < 1) {
                frame = requestAnimationFrame(tick);
            } else {
                holdTimer = window.setTimeout(
                    complete,
                    prefersReducedMotion ? 40 : 260,
                );
            }
        };

        frame = requestAnimationFrame(tick);

        return () => {
            cancelAnimationFrame(frame);
            window.clearTimeout(holdTimer);
        };
    }, [complete, prefersReducedMotion]);

    useEffect(() => {
        const onKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape" || event.key === "Enter") complete();
        };

        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, [complete]);

    return (
        <motion.div
            className="fixed inset-0 z-[100] flex flex-col overflow-hidden bg-ink"
            role="status"
            aria-live="polite"
            aria-busy="true"
            aria-label="Memuat portofolio Reyhan Haqiqi"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={prefersReducedMotion ? { opacity: 0 } : { y: "-100%" }}
            transition={
                prefersReducedMotion
                    ? { duration: 0.18 }
                    : { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
            }
        >
            <div
                aria-hidden="true"
                className="absolute inset-0 bg-grid mask-radial opacity-50"
            />
            <div
                aria-hidden="true"
                className="absolute left-1/2 top-1/2 h-[540px] w-[540px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-neon-blue/[0.11] blur-[100px]"
            />
            <div
                aria-hidden="true"
                className="absolute -right-24 top-1/4 h-72 w-72 rounded-full bg-neon-cyan/[0.08] blur-[90px]"
            />

            <div className="relative flex items-center justify-between p-5 sm:p-8">
                <div className="flex items-center gap-2.5">
                    <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-neon-blue via-neon-sky to-neon-cyan p-px">
                        <span className="grid h-full w-full place-items-center rounded-[7px] bg-ink font-display text-sm font-extrabold">
                            R
                        </span>
                    </span>
                    <div>
                        <p className="font-display text-sm font-semibold leading-none tracking-tight">
                            reyhan<span className="text-neon-blue">haqiqi</span>
                        </p>
                        <p className="mt-1 font-mono text-[8px] uppercase tracking-[0.22em] text-white/25">
                            web &amp; mobile developer
                        </p>
                    </div>
                </div>

                <p className="hidden font-mono text-[9px] uppercase tracking-[0.24em] text-white/25 sm:block">
                    portofolio / 2026
                </p>
            </div>

            <div className="relative flex flex-1 flex-col items-center justify-center px-6">
                <div className="relative grid h-44 w-44 place-items-center sm:h-52 sm:w-52">
                    <motion.span
                        aria-hidden="true"
                        className="absolute inset-0 rounded-full border border-dashed border-neon-blue/30"
                        animate={
                            prefersReducedMotion ? undefined : { rotate: 360 }
                        }
                        transition={{
                            duration: 18,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                    />
                    <span
                        aria-hidden="true"
                        className="absolute inset-6 rounded-full border border-white/[0.06]"
                    />
                    <span
                        aria-hidden="true"
                        className="absolute inset-12 rounded-full bg-neon-blue/[0.06] blur-xl"
                    />

                    <motion.div
                        initial={
                            prefersReducedMotion
                                ? false
                                : { scale: 0.8, opacity: 0 }
                        }
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                        className="relative grid h-20 w-20 place-items-center rounded-[1.4rem] bg-gradient-to-br from-neon-lime via-neon-cyan to-neon-blue p-px shadow-[0_0_60px_-12px_rgba(96,165,250,0.75)] sm:h-24 sm:w-24"
                    >
                        <span className="grid h-full w-full place-items-center rounded-[1.35rem] bg-ink font-display text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
                            R
                        </span>
                        <Sparkle className="absolute -right-2 -top-2 h-5 w-5 text-neon-lime" />
                    </motion.div>

                    <Sparkle className="absolute -left-3 top-6 h-4 w-4 text-neon-cyan/80" />
                    <StarOutline className="absolute -right-4 bottom-8 h-6 w-6 rotate-12 text-neon-blue/60" />
                </div>

                <div
                    className="mt-6 flex items-end overflow-hidden pb-1"
                    aria-hidden="true"
                >
                    {letters.map((letter, index) => (
                        <motion.span
                            key={`${letter.char}-${index}`}
                            className={`inline-block font-display text-[clamp(2.7rem,8vw,4.5rem)] font-extrabold leading-none tracking-[-0.07em] ${letter.className}`}
                            initial={
                                prefersReducedMotion
                                    ? false
                                    : { y: "110%", opacity: 0 }
                            }
                            animate={{ y: 0, opacity: 1 }}
                            transition={{
                                duration: 0.7,
                                delay: 0.18 + index * 0.06,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                        >
                            {letter.char}
                        </motion.span>
                    ))}
                </div>

                <motion.p
                    initial={
                        prefersReducedMotion ? false : { opacity: 0, y: 8 }
                    }
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    className="mt-2 font-mono text-[9px] uppercase tracking-[0.32em] text-white/35"
                >
                    Web &amp; Mobile Developer
                </motion.p>

                <div className="mt-9 w-[min(300px,78vw)]">
                    <div className="flex items-center justify-between font-mono text-[9px] uppercase tracking-[0.2em] text-white/30">
                        <span className="inline-flex items-center gap-1.5">
                            Loading
                            <span className="inline-flex gap-0.5">
                                <span className="animate-blink">.</span>
                                <span className="animate-blink [animation-delay:150ms]">
                                    .
                                </span>
                                <span className="animate-blink [animation-delay:300ms]">
                                    .
                                </span>
                            </span>
                        </span>
                        <span className="tabular-nums text-neon-lime">
                            {String(progress).padStart(3, "0")}%
                        </span>
                    </div>

                    <div className="mt-2 h-[3px] overflow-hidden rounded-full bg-white/[0.08]">
                        <div
                            className="h-full rounded-full bg-gradient-to-r from-neon-lime via-neon-cyan to-neon-blue"
                            style={{ width: `${progress}%` }}
                        />
                    </div>
                </div>
            </div>

            <div className="relative flex items-end justify-between gap-4 p-5 sm:p-8">
                <div>
                    <p className="font-hand text-xl text-white/40">
                        Talk less, code more
                    </p>
                    <Squiggle className="mt-1 h-2.5 w-20 text-neon-lime/40" />
                </div>

                <button
                    type="button"
                    onClick={complete}
                    className="group inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-2 text-[10px] font-medium text-white/40 transition-colors hover:border-white/25 hover:text-white"
                >
                    Lewati intro
                    <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
                </button>
            </div>

            <div
                aria-hidden="true"
                className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-neon-lime via-neon-cyan to-neon-blue"
                style={{ width: `${progress}%` }}
            />
            <p className="sr-only">{progress}% loaded</p>
        </motion.div>
    );
}
