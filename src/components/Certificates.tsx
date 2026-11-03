import { Award, BadgeCheck, ExternalLink } from "lucide-react";
import { certificates } from "../data/certificates";
import type { Accent } from "../types";
import { Sparkle, StarOutline } from "./decor/Doodles";
import { Parallax } from "./ui/Parallax";
import { Reveal } from "./ui/Reveal";
import { SectionHeading } from "./ui/SectionHeading";

const accentStyles: Record<
    Accent,
    { text: string; border: string; glow: string }
> = {
    lime: {
        text: "text-neon-lime",
        border: "group-hover:border-neon-lime/30",
        glow: "bg-neon-lime/[0.06]",
    },
    blue: {
        text: "text-neon-blue",
        border: "group-hover:border-neon-blue/35",
        glow: "bg-neon-blue/[0.06]",
    },
    cyan: {
        text: "text-neon-cyan",
        border: "group-hover:border-neon-cyan/30",
        glow: "bg-neon-cyan/[0.06]",
    },
    pink: {
        text: "text-neon-pink",
        border: "group-hover:border-neon-pink/30",
        glow: "bg-neon-pink/[0.06]",
    },
};

export function Certificates() {
    return (
        <section
            id="certificates"
            aria-labelledby="certificates-heading"
            className="section-pad relative overflow-hidden"
        >
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 -z-10"
            >
                <div className="absolute -left-40 top-20 h-[420px] w-[420px] rounded-full bg-neon-lime/[0.05] blur-[130px]" />
                <div className="absolute right-0 top-1/2 h-[380px] w-[380px] rounded-full bg-neon-cyan/[0.05] blur-[120px]" />
                <Parallax
                    decorative
                    distance={-60}
                    className="absolute left-[10%] top-24"
                >
                    <StarOutline className="h-8 w-8 -rotate-12 animate-float-slow text-neon-cyan/25" />
                </Parallax>
                <Parallax
                    decorative
                    distance={50}
                    className="absolute right-[8%] top-2/3"
                >
                    <Sparkle className="h-4 w-4 animate-float text-neon-lime/25" />
                </Parallax>
            </div>

            <div className="shell">
                <SectionHeading
                    index="04"
                    eyebrow="sertifikat"
                    title={
                        <span id="certificates-heading">
                            Sertifikat &amp;{" "}
                            <span className="name-gradient">Pencapaian</span>
                        </span>
                    }
                    description="Kumpulan sertifikat dan pencapaian dari kursus serta program yang saya selesaikan untuk mempertajam kemampuan di web, mobile, cloud, dan jaringan."
                    aside={
                        <div className="relative hidden flex-col items-end gap-2 pb-1 md:flex">
                            <p className="font-hand text-xl text-neon-cyan">
                                terus belajar, terus bertumbuh
                            </p>
                            <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-white/25">
                                {String(certificates.length).padStart(2, "0")}{" "}
                                sertifikat
                            </span>
                        </div>
                    }
                />

                <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:mt-14 lg:gap-5 xl:grid-cols-3">
                    {certificates.map((certificate, index) => {
                        const accent = accentStyles[certificate.accent];

                        return (
                            <Reveal
                                key={certificate.id}
                                delay={(index % 3) * 0.08}
                                amount={0.15}
                            >
                                <article
                                    className={`group anime-panel relative flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-white/[0.08] bg-surface p-5 transition-colors duration-300 ${accent.border}`}
                                >
                                    <div
                                        aria-hidden="true"
                                        className={`pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full blur-[50px] ${accent.glow}`}
                                    />

                                    <div className="relative flex items-start justify-between gap-3">
                                        <span
                                            className={`grid h-11 w-11 shrink-0 place-items-center rounded-2xl border border-white/10 bg-white/[0.03] ${accent.text}`}
                                        >
                                            <Award className="h-5 w-5" />
                                        </span>
                                        <span className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.12em] text-white/50">
                                            {certificate.category}
                                        </span>
                                    </div>

                                    <h3 className="relative mt-4 font-display text-lg font-semibold leading-snug tracking-tight text-white">
                                        {certificate.title}
                                    </h3>

                                    <p className="relative mt-1 inline-flex items-center gap-1.5 text-[11px] text-white/40">
                                        <BadgeCheck
                                            className={`h-3.5 w-3.5 ${accent.text}`}
                                        />
                                        {certificate.issuer}
                                    </p>

                                    <p className="relative mt-3 text-[13px] leading-relaxed text-white/45">
                                        {certificate.description}
                                    </p>

                                    <div className="relative mt-auto pt-5">
                                        <a
                                            href={certificate.fileUrl}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="btn btn-ghost btn-sm w-full justify-center"
                                        >
                                            Lihat Sertifikat
                                            <ExternalLink className="h-3.5 w-3.5" />
                                        </a>
                                    </div>
                                </article>
                            </Reveal>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
