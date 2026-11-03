import {
    motion,
    useReducedMotion,
    useScroll,
    useSpring,
    useTransform,
} from "framer-motion";
import { ArrowDownRight, Download, MapPin, Sparkles } from "lucide-react";
import { useRef } from "react";
import portraitPlaceholder from "../assets/images/portrait-placeholder.png";
import { site, techStack } from "../data/site";
import { Reveal } from "./ui/Reveal";
import { FloatingRocket } from "./ui/FloatingRocket";
import {
    Bolt,
    DoodleArrow,
    Sparkle,
    Squiggle,
    StarOutline,
} from "./decor/Doodles";

const stackColors = [
    "#E34F26",
    "#1572B6",
    "#F7DF1E",
    "#FF2D20",
    "#3178C6",
    "#61DAFB",
];
const scrollSpring = {
    stiffness: 220,
    damping: 36,
    mass: 0.25,
    restDelta: 0.001,
};

const nameLetters = [
    { char: "R", className: "text-white" },
    { char: "E", className: "text-white" },
    { char: "Y", className: "name-gradient" },
    { char: "H", className: "text-white" },
    { char: "A", className: "text-neon-blue" },
    { char: "N", className: "text-neon-lime" },
];

export function Hero() {
    const prefersReducedMotion = useReducedMotion();
    const heroRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ["start start", "end start"],
    });
    const artY = useSpring(
        useTransform(scrollYProgress, [0, 1], [0, 130]),
        scrollSpring,
    );
    const textY = useSpring(
        useTransform(scrollYProgress, [0, 1], [0, -42]),
        scrollSpring,
    );
    const glowY = useSpring(
        useTransform(scrollYProgress, [0, 1], [0, 170]),
        scrollSpring,
    );
    const glowReverseY = useSpring(
        useTransform(scrollYProgress, [0, 1], [0, -120]),
        scrollSpring,
    );
    const doodleY = useSpring(
        useTransform(scrollYProgress, [0, 1], [0, -80]),
        scrollSpring,
    );
    const cardY = useSpring(
        useTransform(scrollYProgress, [0, 1], [0, -54]),
        scrollSpring,
    );
    const artOpacity = useTransform(
        scrollYProgress,
        [0, 0.75, 1],
        [1, 1, 0.35],
    );

    return (
        <section
            ref={heroRef}
            id="home"
            aria-labelledby="hero-title"
            className="relative overflow-hidden pb-14 pt-24 sm:pb-20 sm:pt-32 lg:min-h-[100svh] lg:pt-36"
        >
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 -z-10"
            >
                <div className="absolute inset-0 bg-grid mask-radial opacity-60" />
                <div
                    aria-hidden="true"
                    className="anime-hero-burst absolute inset-0"
                />
                <motion.div
                    aria-hidden="true"
                    style={prefersReducedMotion ? undefined : { y: glowY }}
                    className="absolute left-1/2 top-0 h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-neon-blue/10 blur-[130px]"
                />
                <motion.div
                    aria-hidden="true"
                    style={
                        prefersReducedMotion ? undefined : { y: glowReverseY }
                    }
                    className="absolute -right-40 top-1/4 h-[520px] w-[520px] rounded-full bg-neon-cyan/[0.07] blur-[120px]"
                />
                <motion.div
                    aria-hidden="true"
                    style={prefersReducedMotion ? undefined : { y: glowY }}
                    className="absolute -left-32 bottom-0 h-[360px] w-[360px] rounded-full bg-neon-lime/[0.05] blur-[110px]"
                />
                <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink to-transparent" />
            </div>
            <FloatingRocket className="right-[9%] top-28 h-7 w-7 sm:right-[14%] sm:top-32 sm:h-9 sm:w-9" />

            <div className="shell">
                <div className="grid items-center gap-6 sm:gap-8 lg:grid-cols-[1.02fr_0.98fr] lg:gap-6">
                    <motion.div
                        style={prefersReducedMotion ? undefined : { y: textY }}
                        className="relative z-10 text-center lg:text-left"
                    >
                        <Reveal direction="up">
                            <p className="inline-flex items-center gap-2.5 font-hand text-2xl text-neon-cyan sm:text-3xl">
                                <Sparkle className="h-4 w-4 text-neon-lime" />
                                Halo, saya
                                <span
                                    aria-hidden="true"
                                    className="h-px w-10 bg-gradient-to-r from-neon-cyan/70 to-transparent"
                                />
                            </p>
                        </Reveal>

                        <motion.h1
                            id="hero-title"
                            aria-label={site.name}
                            className="mt-2 font-display text-[clamp(3.9rem,10.6vw,9.6rem)] font-extrabold leading-[0.78] tracking-[-0.075em]"
                        >
                            <span className="flex items-end justify-center lg:justify-start">
                                {nameLetters.map((letter, index) => (
                                    <motion.span
                                        key={`${letter.char}-${index}`}
                                        aria-hidden="true"
                                        className={`relative inline-block ${letter.className}`}
                                        initial={
                                            prefersReducedMotion
                                                ? false
                                                : {
                                                      opacity: 0,
                                                      y: 80,
                                                      rotate: 5,
                                                  }
                                        }
                                        animate={{
                                            opacity: 1,
                                            y: 0,
                                            rotate: 0,
                                        }}
                                        transition={{
                                            duration: 0.85,
                                            delay: 0.12 + index * 0.075,
                                            ease: [0.22, 1, 0.36, 1],
                                        }}
                                    >
                                        {letter.char}
                                    </motion.span>
                                ))}
                                <Sparkle className="mb-6 ml-2 h-5 w-5 shrink-0 text-neon-lime sm:mb-10 sm:h-7 sm:w-7 lg:ml-3" />
                            </span>
                            <motion.span
                                aria-hidden="true"
                                initial={
                                    prefersReducedMotion
                                        ? false
                                        : { opacity: 0, y: 26 }
                                }
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.8,
                                    delay: 0.62,
                                    ease: [0.22, 1, 0.36, 1],
                                }}
                                className="mt-1 block text-center text-[0.56em] leading-none tracking-[0.01em] text-stroke lg:text-left"
                            >
                                {site.lastName.toUpperCase()}
                            </motion.span>
                        </motion.h1>

                        <Reveal delay={0.15}>
                            <div className="mt-4 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 sm:mt-6 lg:justify-start">
                                <span
                                    aria-hidden="true"
                                    className="hidden h-px w-8 bg-neon-lime sm:block"
                                />
                                <p className="text-lg font-medium tracking-tight text-white sm:text-xl">
                                    {site.role}
                                    <span className="ml-1 inline-block w-[0.55em] animate-blink text-neon-lime">
                                        _
                                    </span>
                                </p>
                                <span className="text-sm text-white/35">
                                    / creative engineer
                                </span>
                            </div>

                            <p className="mx-auto mt-4 max-w-lg text-[0.98rem] leading-relaxed text-muted sm:mt-5 sm:text-base lg:mx-0">
                                {site.tagline}
                            </p>
                        </Reveal>

                        <Reveal delay={0.22}>
                            <div className="mt-4 flex flex-wrap items-center justify-center gap-2 sm:mt-6 lg:justify-start">
                                {techStack.map((tech, index) => (
                                    <span
                                        key={tech}
                                        className="inline-flex items-center gap-1.5 rounded-full border border-white/[0.09] bg-white/[0.03] px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-white/55 transition-colors hover:border-white/20 hover:text-white/80"
                                    >
                                        <span
                                            aria-hidden="true"
                                            className="h-1.5 w-1.5 rounded-full"
                                            style={{
                                                backgroundColor:
                                                    stackColors[index],
                                            }}
                                        />
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </Reveal>

                        <Reveal delay={0.3}>
                            <div className="mt-6 flex flex-col items-center gap-3 sm:mt-8 sm:flex-row sm:justify-center lg:justify-start">
                                <a
                                    href="#projects"
                                    className="btn btn-primary w-full sm:w-auto"
                                >
                                    Lihat Karya Saya
                                    <ArrowDownRight
                                        className="h-4 w-4"
                                        strokeWidth={2.4}
                                    />
                                </a>
                                <a
                                    href={site.resumeUrl}
                                    download
                                    className="btn btn-ghost w-full sm:w-auto"
                                >
                                    <Download className="h-4 w-4" />
                                    Download CV
                                </a>
                            </div>
                        </Reveal>

                        <Reveal delay={0.38}>
                            <div className="mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-3 sm:mt-8 lg:justify-start">
                                <span className="inline-flex items-center gap-2 rounded-full border border-neon-lime/20 bg-neon-lime/[0.06] px-3 py-1.5 text-[11px] font-medium text-neon-lime">
                                    <span className="relative flex h-2 w-2">
                                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-neon-lime opacity-60" />
                                        <span className="relative inline-flex h-2 w-2 rounded-full bg-neon-lime" />
                                    </span>
                                    {site.availability}
                                </span>
                                <span className="inline-flex items-center gap-1.5 text-[11px] text-white/35">
                                    <MapPin className="h-3.5 w-3.5" />
                                    {site.location}
                                </span>
                            </div>
                        </Reveal>
                    </motion.div>

                    <Reveal
                        direction="left"
                        delay={0.18}
                        className="relative -mt-8 sm:-mt-10 lg:-mt-16"
                    >
                        <motion.div
                            style={
                                prefersReducedMotion
                                    ? undefined
                                    : { y: artY, opacity: artOpacity }
                            }
                            className="relative mx-auto w-full max-w-[300px] sm:max-w-[420px] lg:max-w-[min(48vw,720px)]"
                        >
                            <motion.div
                                animate={
                                    prefersReducedMotion
                                        ? undefined
                                        : { y: [0, -13, 0] }
                                }
                                transition={{
                                    duration: 7,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                                className="portrait-stage portrait-stage--hero anime-portrait-stage relative z-10"
                            >
                                <div className="portrait-orbit portrait-orbit--outer" />
                                <div className="portrait-orbit portrait-orbit--inner" />
                                <div className="portrait-stage-label portrait-stage-label--hero">
                                    <MapPin className="h-3 w-3 text-neon-cyan" />
                                    Berbasis di Sidoarjo, Indonesia
                                </div>
                                <div className="portrait-tech-chip">
                                    <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-white/45">
                                        Teknologi utama
                                    </span>
                                    <span className="mt-1 block font-display text-sm font-semibold text-white">
                                        Laravel{" "}
                                        <span className="text-neon-cyan">
                                            /
                                        </span>{" "}
                                        Flutter
                                    </span>
                                </div>
                                <img
                                    src={portraitPlaceholder}
                                    alt="Potret Reyhan Haqiqi"
                                    width="800"
                                    height="800"
                                    className="portrait-stage-image mx-auto h-auto w-full drop-shadow-[0_30px_70px_rgba(0,0,0,0.45)]"
                                />
                            </motion.div>

                            <div
                                aria-hidden="true"
                                className="absolute left-0 top-[18%] hidden w-28 -rotate-6 sm:block"
                            >
                                <p className="font-hand text-lg leading-tight text-neon-cyan/90">
                                    web & mobile
                                    <br />
                                    dev
                                </p>
                                <DoodleArrow className="ml-4 mt-1 h-12 w-20 text-neon-cyan/70" />
                            </div>

                            <motion.div
                                aria-hidden="true"
                                style={
                                    prefersReducedMotion
                                        ? undefined
                                        : { y: doodleY }
                                }
                                className="pointer-events-none absolute inset-0"
                            >
                                <StarOutline className="absolute right-2 top-[18%] h-7 w-7 rotate-12 animate-float-slow text-neon-blue/70 sm:right-6" />
                                <Bolt className="absolute -right-1 top-1/3 h-6 w-6 -rotate-12 animate-float text-neon-lime/80 sm:h-8 sm:w-8" />
                                <Sparkle className="absolute left-2 top-[52%] h-4 w-4 animate-float-reverse text-neon-cyan/80" />
                                <Sparkle className="absolute bottom-[28%] right-4 h-5 w-5 animate-float text-neon-blue/70 [animation-delay:1.2s]" />
                            </motion.div>

                            <motion.div
                                style={
                                    prefersReducedMotion
                                        ? undefined
                                        : { y: cardY }
                                }
                                className="absolute -right-1 bottom-8 z-20 hidden rotate-3 rounded-2xl border border-white/10 bg-surface/85 px-3.5 py-2.5 shadow-[0_20px_50px_-24px_rgba(0,0,0,0.9)] backdrop-blur-md sm:block sm:right-2"
                            >
                                <p className="flex items-center gap-1.5 font-hand text-lg leading-none text-white/85">
                                    <Sparkles className="h-3.5 w-3.5 text-neon-lime" />
                                    kode rapi, kreatif
                                </p>
                                <Squiggle className="mt-1 h-2 w-24 text-neon-lime/60" />
                            </motion.div>
                        </motion.div>
                    </Reveal>
                </div>

                <div className="mt-16 hidden items-center justify-between border-t border-white/[0.06] pt-5 md:flex">
                    <p className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.28em] text-white/25">
                        <span className="h-1 w-1 rounded-full bg-neon-lime" />
                        scroll to explore
                    </p>
                    <p className="font-hand text-lg text-white/35">
                        Terus belajar, terus berkembang, terus berkarya
                        <Sparkle className="mr-1 h-4 w-4 text-neon-lime" />
                    </p>
                </div>
            </div>
        </section>
    );
}
