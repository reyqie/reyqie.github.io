import { motion, useReducedMotion } from "framer-motion";
import { Code2, Database, Server, Smartphone, Wrench } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { CSSProperties } from "react";
import { skillGroups } from "../data/skills";
import type { Accent } from "../types";
import { Sparkle, Squiggle, StarOutline } from "./decor/Doodles";
import { Parallax } from "./ui/Parallax";
import { Reveal } from "./ui/Reveal";
import { SectionHeading } from "./ui/SectionHeading";

const accentStyles: Record<
    Accent,
    { text: string; line: string; dot: string }
> = {
    lime: {
        text: "text-neon-lime",
        line: "from-neon-lime/60 via-neon-lime/10 to-transparent",
        dot: "bg-neon-lime",
    },
    blue: {
        text: "text-neon-blue",
        line: "from-neon-blue/60 via-neon-blue/10 to-transparent",
        dot: "bg-neon-blue",
    },
    cyan: {
        text: "text-neon-cyan",
        line: "from-neon-cyan/60 via-neon-cyan/10 to-transparent",
        dot: "bg-neon-cyan",
    },
    pink: {
        text: "text-neon-pink",
        line: "from-neon-pink/60 via-neon-pink/10 to-transparent",
        dot: "bg-neon-pink",
    },
};

const groupIcons: Record<string, LucideIcon> = {
    frontend: Code2,
    mobile: Smartphone,
    backend: Server,
    database: Database,
    tools: Wrench,
};

const totalSkills = skillGroups.reduce(
    (total, group) => total + group.skills.length,
    0,
);

export function Skills() {
    const prefersReducedMotion = useReducedMotion();

    return (
        <section
            id="skills"
            aria-labelledby="skills-heading"
            className="section-pad relative overflow-hidden"
        >
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 -z-10"
            >
                <div className="absolute -left-40 bottom-0 h-[460px] w-[460px] rounded-full bg-neon-lime/[0.04] blur-[120px]" />
                <div className="absolute right-0 top-0 h-[380px] w-[380px] rounded-full bg-neon-sky/[0.07] blur-[120px]" />
                <Parallax
                    decorative
                    distance={65}
                    className="absolute left-[8%] top-28"
                >
                    <StarOutline className="h-7 w-7 -rotate-12 animate-float-reverse text-neon-cyan/20" />
                </Parallax>
                <Parallax
                    decorative
                    distance={-60}
                    className="absolute right-[6%] top-1/2"
                >
                    <Sparkle className="h-5 w-5 animate-float-slow text-neon-pink/30" />
                </Parallax>
            </div>

            <div className="shell">
                <SectionHeading
                    index="02"
                    eyebrow="my skillset"
                    title={
                        <span id="skills-heading">
                            <span className="name-gradient">Skill</span> Tools
                        </span>
                    }
                    description="Teknologi yang saya gunakan setiap hari — mulai dari markup semantik dan komponen aksesibel hingga API, basis data, serta alat untuk merilis produk."
                    aside={
                        <div className="relative hidden flex-col items-end gap-2 pb-1 md:flex">
                            <p className="font-hand text-xl text-neon-cyan">
                                alat andalan setiap hari
                            </p>
                            <Squiggle className="h-3 w-20 text-neon-lime/50" />
                            <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-white/25">
                                {totalSkills} keahlian /{" "}
                                {String(skillGroups.length).padStart(2, "0")}{" "}
                                kategori
                            </span>
                        </div>
                    }
                />

                <div className="mt-12 flex flex-col gap-4 lg:mt-14">
                    {skillGroups.map((group, groupIndex) => {
                        const GroupIcon = groupIcons[group.id] ?? Code2;
                        const accent = accentStyles[group.accent];

                        return (
                            <Reveal
                                key={group.id}
                                delay={groupIndex * 0.05}
                                amount={0.12}
                            >
                                <div className="anime-panel relative rounded-3xl border border-white/[0.08] bg-surface/80 p-5 sm:p-6 lg:grid lg:grid-cols-[250px_1fr] lg:items-center lg:gap-7 lg:p-7">
                                    <div
                                        aria-hidden="true"
                                        className={`absolute inset-x-6 top-0 h-px bg-gradient-to-r ${accent.line}`}
                                    />

                                    <div className="flex items-start justify-between gap-4 lg:h-full lg:flex-col lg:justify-between lg:border-r lg:border-white/[0.06] lg:pr-7">
                                        <div>
                                            <div className="flex items-center gap-3">
                                                <span
                                                    className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-white/10 bg-white/[0.03] ${accent.text}`}
                                                >
                                                    <GroupIcon
                                                        className="h-[18px] w-[18px]"
                                                        strokeWidth={1.8}
                                                    />
                                                </span>
                                                <div>
                                                    <h3 className="font-display text-lg font-semibold tracking-tight text-white">
                                                        {group.title}
                                                    </h3>
                                                    <p className="mt-0.5 text-[11px] text-white/35">
                                                        {group.blurb}
                                                    </p>
                                                </div>
                                            </div>

                                            <p className="mt-4 hidden font-mono text-[9px] uppercase tracking-[0.2em] text-white/25 lg:block">
                                                {String(
                                                    group.skills.length,
                                                ).padStart(2, "0")}{" "}
                                                teknologi
                                            </p>
                                        </div>

                                        <div className="flex shrink-0 items-center gap-2 lg:mt-4">
                                            <span
                                                aria-hidden="true"
                                                className={`h-1.5 w-1.5 rounded-full ${accent.dot}`}
                                            />
                                            <span className="rounded-full border border-white/10 bg-white/[0.03] px-2 py-1 font-mono text-[9px] tracking-[0.14em] text-white/35">
                                                0{groupIndex + 1}
                                            </span>
                                        </div>
                                    </div>

                                    <motion.ul
                                        initial={
                                            prefersReducedMotion
                                                ? "show"
                                                : "hidden"
                                        }
                                        whileInView="show"
                                        viewport={{ once: true, amount: 0.2 }}
                                        variants={{
                                            hidden: {},
                                            show: {
                                                transition: {
                                                    staggerChildren: 0.035,
                                                },
                                            },
                                        }}
                                        className="mt-5 grid grid-cols-2 gap-2.5 sm:grid-cols-3 lg:mt-0 lg:grid-cols-4 xl:grid-cols-6"
                                    >
                                        {group.skills.map((skill) => {
                                            const Icon = skill.icon;

                                            return (
                                                <motion.li
                                                    key={skill.name}
                                                    variants={{
                                                        hidden: {
                                                            opacity: 0,
                                                            y: 10,
                                                        },
                                                        show: {
                                                            opacity: 1,
                                                            y: 0,
                                                        },
                                                    }}
                                                    transition={{
                                                        duration: 0.35,
                                                        ease: [
                                                            0.22, 1, 0.36, 1,
                                                        ],
                                                    }}
                                                >
                                                    <div
                                                        className="skill-tile group flex h-full items-center gap-2.5 rounded-xl border border-white/[0.07] bg-white/[0.02] px-3 py-2.5"
                                                        style={
                                                            {
                                                                "--brand":
                                                                    skill.color,
                                                            } as CSSProperties
                                                        }
                                                        title={`${skill.name} — ${skill.note}`}
                                                    >
                                                        <Icon
                                                            className="skill-icon h-[18px] w-[18px] shrink-0"
                                                            aria-hidden="true"
                                                        />
                                                        <span className="truncate text-[11.5px] font-medium text-white/70">
                                                            {skill.name}
                                                        </span>

                                                        <span
                                                            role="tooltip"
                                                            className="pointer-events-none absolute bottom-full left-1/2 z-20 mb-2 hidden w-max max-w-[190px] -translate-x-1/2 rounded-lg border border-white/10 bg-ink px-2.5 py-1.5 text-center text-[10px] leading-snug text-white/70 opacity-0 shadow-xl transition-opacity duration-200 group-hover:opacity-100 lg:block"
                                                        >
                                                            {skill.note}
                                                        </span>
                                                    </div>
                                                </motion.li>
                                            );
                                        })}
                                    </motion.ul>
                                </div>
                            </Reveal>
                        );
                    })}
                </div>

                <Reveal
                    className="mt-8 flex flex-wrap items-center justify-center gap-2.5 text-center"
                    delay={0.1}
                >
                    <Sparkle className="h-4 w-4 text-neon-lime" />
                    <p className="font-hand text-xl text-white/40">
                        terus belajar, terus berkarya — teknologi yang dikuasai
                        terus bertambah.
                    </p>
                </Reveal>
            </div>
        </section>
    );
}
