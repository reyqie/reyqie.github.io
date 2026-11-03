import { ArrowUpRight, Clock, MapPin } from "lucide-react";
import { site, socials } from "../data/site";
import {
    DoodleArrow,
    ScribbleCircle,
    Sparkle,
    Squiggle,
    StarOutline,
} from "./decor/Doodles";
import { Parallax } from "./ui/Parallax";
import { Reveal } from "./ui/Reveal";

const profileLinks = socials.filter(
    (social) => social.label === "GitHub" || social.label === "LinkedIn",
);

const directLinks = socials.filter(
    (social) => social.label === "Email" || social.label === "WhatsApp",
);

export function Contact() {
    return (
        <section
            id="contact"
            aria-labelledby="contact-heading"
            className="section-pad relative overflow-hidden"
        >
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 -z-10"
            >
                <div className="absolute left-1/2 top-1/2 h-[520px] w-[840px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-neon-blue/[0.07] blur-[140px]" />
                <div className="absolute right-[5%] top-1/4 h-[300px] w-[300px] rounded-full bg-neon-cyan/[0.05] blur-[100px]" />
            </div>

            <div className="shell">
                <Reveal amount={0.08}>
                    <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-surface/60 sm:rounded-[2.5rem]">
                        <div
                            aria-hidden="true"
                            className="absolute inset-0 bg-grid mask-radial opacity-40"
                        />
                        <div
                            aria-hidden="true"
                            className="absolute -left-24 -top-24 h-80 w-80 rounded-full bg-neon-blue/10 blur-3xl"
                        />
                        <div
                            aria-hidden="true"
                            className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-neon-cyan/[0.08] blur-3xl"
                        />
                        <Parallax
                            decorative
                            distance={70}
                            className="absolute -right-10 top-16 hidden lg:block"
                        >
                            <ScribbleCircle className="h-40 w-64 text-neon-blue/10" />
                        </Parallax>
                        <Parallax
                            decorative
                            distance={-50}
                            className="absolute left-[46%] top-10 hidden lg:block"
                        >
                            <StarOutline className="h-7 w-7 rotate-12 text-neon-lime/30" />
                        </Parallax>

                        <div className="relative grid min-w-0 lg:grid-cols-[1.02fr_0.98fr]">
                            <div className="relative flex min-w-0 flex-col justify-between p-6 sm:p-10 lg:p-12 xl:p-14">
                                <div>
                                    <span className="eyebrow">
                                        <span className="text-neon-lime">
                                            05
                                        </span>
                                        <span
                                            aria-hidden="true"
                                            className="h-px w-5 bg-white/20"
                                        />
                                        kontak
                                    </span>

                                    <h2
                                        id="contact-heading"
                                        className="mt-5 break-words font-display text-[clamp(2.6rem,5.2vw,4.6rem)] font-bold leading-[0.9] tracking-[-0.045em]"
                                    >
                                        MARI{" "}
                                        <span className="name-gradient">
                                            BERKARYA
                                        </span>
                                        <br />
                                        BERSAMA!
                                        <Sparkle className="ml-2 inline-block h-6 w-6 -translate-y-2 text-neon-lime" />
                                    </h2>

                                    <p className="mt-6 max-w-md text-[0.98rem] leading-relaxed text-muted">
                                        Punya ide proyek? Mari wujudkan sesuatu
                                        yang istimewa bersama! Baik itu
                                        membangun produk baru, mendesain ulang,
                                        atau memecahkan tantangan web dan
                                        aplikasi mobile.
                                    </p>

                                    <div className="mt-7 grid gap-2.5 sm:grid-cols-2">
                                        {profileLinks.map((social) => {
                                            const Icon = social.icon;

                                            return (
                                                <a
                                                    key={social.label}
                                                    href={social.href}
                                                    target={
                                                        social.href.startsWith(
                                                            "http",
                                                        )
                                                            ? "_blank"
                                                            : undefined
                                                    }
                                                    rel={
                                                        social.href.startsWith(
                                                            "http",
                                                        )
                                                            ? "noreferrer"
                                                            : undefined
                                                    }
                                                    className="group flex items-center gap-3 rounded-2xl border border-white/[0.08] bg-white/[0.02] p-3.5 transition-all duration-300 hover:-translate-y-0.5 hover:border-neon-blue/30 hover:bg-neon-blue/[0.05]"
                                                >
                                                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl border border-white/10 bg-ink/70 text-white/70 transition-colors group-hover:text-neon-blue">
                                                        <Icon className="h-4 w-4" />
                                                    </span>
                                                    <span className="min-w-0">
                                                        <span className="block font-mono text-[9px] uppercase tracking-[0.16em] text-white/30">
                                                            {social.label}
                                                        </span>
                                                        <span className="mt-0.5 block break-all text-xs font-medium text-white/75">
                                                            {social.handle}
                                                        </span>
                                                    </span>
                                                    <ArrowUpRight className="ml-auto h-3.5 w-3.5 shrink-0 text-white/20 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white/60" />
                                                </a>
                                            );
                                        })}
                                    </div>
                                </div>

                                <div className="mt-8 flex items-center gap-3 text-white/40">
                                    <Sparkle className="h-4 w-4 shrink-0 text-neon-cyan" />
                                    <p className="font-hand text-xl">
                                        selalu aktif dan responsif di media
                                        sosial
                                    </p>
                                    <Squiggle className="hidden h-3 w-14 text-neon-lime/50 sm:block" />
                                </div>

                                <DoodleArrow className="pointer-events-none absolute bottom-8 right-6 hidden h-16 w-28 text-neon-blue/25 xl:block" />
                            </div>

                            <div className="relative min-w-0 border-t border-white/10 p-4 sm:p-8 lg:border-l lg:border-t-0 lg:p-9">
                                <div className="relative flex h-full flex-col justify-center overflow-hidden rounded-[1.5rem] border border-white/[0.08] bg-ink/55 p-5 backdrop-blur-md sm:p-6">
                                    <div
                                        aria-hidden="true"
                                        className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-neon-cyan/10 blur-2xl"
                                    />

                                    <span className="eyebrow relative">
                                        <span className="text-neon-lime">
                                            sosial media
                                        </span>
                                        <span
                                            aria-hidden="true"
                                            className="h-px w-5 bg-white/20"
                                        />
                                    </span>

                                    <h3 className="relative mt-5 font-display text-2xl font-semibold tracking-tight text-white">
                                        Hubungi Saya Langsung
                                    </h3>
                                    <p className="relative mt-2 max-w-sm text-sm leading-relaxed text-white/45">
                                        Bisa hubungi saya di media sosial dengan
                                        platform yang tersedia.
                                    </p>

                                    <div className="relative mt-6 space-y-2.5">
                                        {directLinks.map((social) => {
                                            const Icon = social.icon;

                                            return (
                                                <a
                                                    key={social.label}
                                                    href={social.href}
                                                    target={
                                                        social.href.startsWith(
                                                            "http",
                                                        )
                                                            ? "_blank"
                                                            : undefined
                                                    }
                                                    rel={
                                                        social.href.startsWith(
                                                            "http",
                                                        )
                                                            ? "noreferrer"
                                                            : undefined
                                                    }
                                                    className="group flex items-center gap-3 rounded-2xl border border-white/[0.08] bg-white/[0.02] p-3.5 transition-all duration-300 hover:-translate-y-0.5 hover:border-neon-lime/30 hover:bg-neon-lime/[0.04]"
                                                >
                                                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-white/10 bg-white/[0.03] text-neon-lime">
                                                        <Icon className="h-4 w-4" />
                                                    </span>
                                                    <span className="min-w-0">
                                                        <span className="block font-mono text-[9px] uppercase tracking-[0.16em] text-white/30">
                                                            {social.label}
                                                        </span>
                                                        <span className="mt-0.5 block break-all text-sm font-medium text-white/80">
                                                            {social.handle}
                                                        </span>
                                                    </span>
                                                    <span className="ml-auto grid h-8 w-8 shrink-0 place-items-center rounded-full border border-white/10 text-white/30 transition-all duration-300 group-hover:border-neon-lime/30 group-hover:text-neon-lime">
                                                        <ArrowUpRight className="h-3.5 w-3.5" />
                                                    </span>
                                                </a>
                                            );
                                        })}
                                    </div>

                                    <div className="relative mt-6 border-t border-white/[0.06] pt-4 text-[10px] text-white/30">
                                        <p className="flex items-center gap-1.5">
                                            <Clock className="h-3 w-3" />
                                            Biasanya membalas dalam 24 jam
                                        </p>
                                        <p className="mt-2 flex items-center gap-1.5">
                                            <MapPin className="h-3 w-3" />
                                            {site.location}
                                        </p>
                                    </div>

                                    <div className="relative mt-5 flex items-center gap-2">
                                        <span className="h-1.5 w-1.5 rounded-full bg-neon-lime" />
                                        <p className="text-[11px] text-neon-lime">
                                            Terbuka untuk freelance dan penuh
                                            waktu
                                        </p>
                                        <Sparkle className="h-3.5 w-3.5 text-neon-lime/70" />
                                    </div>

                                    <Squiggle className="relative mt-6 h-3 w-24 text-neon-lime/50" />
                                </div>
                            </div>
                        </div>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}
