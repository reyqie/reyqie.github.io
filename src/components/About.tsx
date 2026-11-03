import { AnimatePresence, motion, useInView } from "framer-motion";
import { ArrowUpRight, Minus, Plus } from "lucide-react";
import { useRef, useState } from "react";
import { site, stats, quickFacts } from "../data/site";
import { useCountUp } from "../hooks/useCountUp";
import portraitPlaceholder from "../assets/images/portrait-placeholder.png";
import type { Stat } from "../types";
import {
    DoodleArrow,
    ScribbleCircle,
    Sparkle,
    Squiggle,
    StarOutline,
} from "./decor/Doodles";
import { Parallax } from "./ui/Parallax";
import { Reveal } from "./ui/Reveal";
import { SectionHeading } from "./ui/SectionHeading";
import { CodeWindow } from "./ui/CodeWindow";
import { FloatingRocket } from "./ui/FloatingRocket";

function StatItem({
    stat,
    active,
    index,
}: {
    stat: Stat;
    active: boolean;
    index: number;
}) {
    const value = useCountUp(stat.value, active, 1300 + index * 150);

    return (
        <div className="group rounded-2xl border border-white/[0.07] bg-white/[0.02] p-3.5 transition-colors hover:border-white/15 hover:bg-white/[0.035] sm:p-4">
            <p className="font-display text-2xl font-bold tracking-tight text-white sm:text-3xl">
                {value}
                <span className="text-neon-lime">{stat.suffix}</span>
            </p>
            <p className="mt-1 text-[10px] font-medium leading-snug text-white/55 sm:text-[11px]">
                {stat.label}
            </p>
            <p className="mt-0.5 hidden text-[10px] text-white/25 sm:block">
                {stat.hint}
            </p>
        </div>
    );
}

export function About() {
    const [expanded, setExpanded] = useState(false);
    const statsRef = useRef<HTMLDivElement>(null);
    const statsInView = useInView(statsRef, { once: true, amount: 0.4 });

    return (
        <section
            id="about"
            aria-labelledby="about-heading"
            className="section-pad relative overflow-hidden"
        >
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 -z-10"
            >
                <div className="absolute -left-40 top-1/4 h-[420px] w-[420px] rounded-full bg-neon-blue/[0.06] blur-[110px]" />
                <Parallax
                    decorative
                    distance={80}
                    className="absolute -left-24 top-24 hidden lg:block"
                >
                    <ScribbleCircle className="h-52 w-80 animate-float-slow text-neon-blue/[0.08]" />
                </Parallax>
                <Parallax
                    decorative
                    distance={-55}
                    className="absolute right-[8%] top-32"
                >
                    <Sparkle className="h-5 w-5 animate-float text-neon-cyan/30" />
                </Parallax>
            </div>
            <FloatingRocket
                className="right-[9%] top-[19%] h-7 w-7 sm:right-[13%] sm:top-[18%] sm:h-9 sm:w-9"
                delay={1.2}
            />

            <div className="shell">
                <SectionHeading
                    index="01"
                    eyebrow="who am i?"
                    title={
                        <span id="about-heading">
                            TENTANG <span className="name-gradient">SAYA</span>
                        </span>
                    }
                    aside={
                        <div className="relative hidden pb-2 sm:block">
                            <p className="font-hand text-2xl text-neon-cyan">
                                sosok di balik kode
                            </p>
                            <DoodleArrow className="ml-auto -mt-1 h-14 w-28 -scale-x-100 text-neon-cyan/45" />
                        </div>
                    }
                />

                <div className="mt-14 grid items-center gap-12 lg:mt-16 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16">
                    <Reveal direction="right" className="relative">
                        <Parallax
                            distance={-24}
                            className="relative mx-auto w-full max-w-[340px] sm:max-w-[460px]"
                        >
                            <div className="portrait-stage portrait-stage--about anime-portrait-stage">
                                <div className="portrait-orbit portrait-orbit--outer" />
                                <div className="portrait-orbit portrait-orbit--inner" />
                                <div className="portrait-stage-label portrait-stage-label--about">
                                    <span className="h-1.5 w-1.5 rounded-full bg-neon-cyan" />
                                    Sidoarjo, Indonesia
                                </div>
                                <img
                                    src={portraitPlaceholder}
                                    alt="Potret Reyhan Haqiqi"
                                    width="800"
                                    height="800"
                                    loading="lazy"
                                    decoding="async"
                                    className="portrait-stage-image mx-auto h-auto w-full drop-shadow-[0_30px_70px_rgba(0,0,0,0.4)] transition-transform duration-500 hover:scale-[1.015]"
                                />
                                <div className="portrait-about-card">
                                    <div className="portrait-about-card-main">
                                        <span className="portrait-about-icon">
                                            <Sparkle className="h-4 w-4" />
                                        </span>
                                        <span className="min-w-0 flex-1">
                                            <span className="portrait-about-kicker">
                                                My Profile
                                            </span>
                                            <span className="portrait-about-role">
                                                {site.role}
                                            </span>
                                        </span>
                                        <span className="portrait-about-years">
                                            {stats[0].value}
                                            {stats[0].suffix}&nbsp;Tahun
                                        </span>
                                    </div>
                                    <div className="portrait-about-status">
                                        <span className="portrait-about-status-dot" />
                                        {site.availability}
                                    </div>
                                </div>
                                <StarOutline className="absolute left-[8%] top-[35%] h-6 w-6 rotate-12 text-white/35" />
                                <Sparkle className="absolute right-[8%] top-[48%] h-4 w-4 text-neon-blue/85" />
                            </div>
                        </Parallax>
                    </Reveal>

                    <div>
                        <Reveal>
                            <p className="text-base leading-relaxed text-white/70 sm:text-lg">
                                {site.description}
                            </p>

                            <blockquote className="mt-6 border-l-2 border-neon-lime/50 pl-4 font-hand text-xl leading-snug text-white/50">
                                Desain yang baik terasa alami dan moderen. Kode
                                yang baik mudah dirawat.
                            </blockquote>
                        </Reveal>

                        <Reveal delay={0.08} className="mt-7">
                            <CodeWindow />
                        </Reveal>

                        <div
                            ref={statsRef}
                            className="mt-8 grid grid-cols-3 gap-2 sm:gap-3"
                        >
                            {stats.map((stat, index) => (
                                <Reveal
                                    key={stat.label}
                                    delay={index * 0.08}
                                    amount={0.4}
                                >
                                    <StatItem
                                        stat={stat}
                                        active={statsInView}
                                        index={index}
                                    />
                                </Reveal>
                            ))}
                        </div>

                        <Reveal delay={0.12}>
                            <div className="mt-7 flex flex-wrap items-center gap-3">
                                <button
                                    type="button"
                                    onClick={() =>
                                        setExpanded((value) => !value)
                                    }
                                    aria-expanded={expanded}
                                    aria-controls="about-more"
                                    className="btn btn-ghost"
                                >
                                    {expanded ? (
                                        <Minus className="h-4 w-4" />
                                    ) : (
                                        <Plus className="h-4 w-4" />
                                    )}
                                    {expanded
                                        ? "Tampilkan Lebih Sedikit"
                                        : "Kenali Saya Lebih Jauh"}
                                </button>
                                <a
                                    href="#contact"
                                    className="group inline-flex items-center gap-1.5 text-sm font-medium text-white/50 transition-colors hover:text-white"
                                >
                                    Mari berkarya bersama
                                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                                </a>
                            </div>

                            <AnimatePresence initial={false}>
                                {expanded ? (
                                    <motion.div
                                        id="about-more"
                                        key="about-more"
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{
                                            duration: 0.35,
                                            ease: [0.22, 1, 0.36, 1],
                                        }}
                                        className="overflow-hidden"
                                    >
                                        <div className="mt-6 grid gap-2.5 sm:grid-cols-2">
                                            {quickFacts.map((fact) => (
                                                <div
                                                    key={fact.label}
                                                    className="rounded-2xl border border-white/[0.07] bg-white/[0.02] p-4"
                                                >
                                                    <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-neon-cyan">
                                                        {fact.label}
                                                    </p>
                                                    <p className="mt-1.5 text-xs leading-relaxed text-white/55">
                                                        {fact.value}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>

                                        <div className="mt-5 flex items-center gap-2">
                                            <Squiggle className="h-3 w-16 text-neon-lime/60" />
                                            <p className="font-hand text-lg text-white/40">
                                                terus ingin belajar dan
                                                berkarya.
                                            </p>
                                        </div>
                                    </motion.div>
                                ) : null}
                            </AnimatePresence>
                        </Reveal>
                    </div>
                </div>
            </div>
        </section>
    );
}
