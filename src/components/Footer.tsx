import { useReducedMotion } from "framer-motion";
import { ArrowUp, ArrowUpRight, MapPin } from "lucide-react";
import { navItems, site, socials } from "../data/site";
import { Sparkle, Squiggle } from "./decor/Doodles";
import { Brand } from "./ui/Brand";

export function Footer() {
    const prefersReducedMotion = useReducedMotion();

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: prefersReducedMotion ? "auto" : "smooth",
        });
    };

    return (
        <footer className="relative overflow-hidden border-t border-white/[0.06] bg-ink-soft/80">
            <div
                aria-hidden="true"
                className="pointer-events-none absolute -left-40 top-0 h-72 w-72 rounded-full bg-neon-blue/[0.06] blur-[100px]"
            />
            <div
                aria-hidden="true"
                className="pointer-events-none absolute bottom-0 left-1/2 h-40 w-[700px] -translate-x-1/2 rounded-full bg-neon-cyan/[0.04] blur-[90px]"
            />

            <div className="shell relative pb-28 pt-12 sm:pb-28 sm:pt-14 lg:pb-14 lg:pt-14">
                <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.5fr_0.8fr_1fr]">
                    <div>
                        <Brand />
                        <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/40">
                            Web dan Mobile developer yang merancang antarmuka
                            modern dan aplikasi andal dengan memperhatikan
                            setiap detail.
                        </p>

                        <div className="mt-5 flex items-center gap-2">
                            {socials.map((social) => {
                                const Icon = social.icon;
                                const external = social.href.startsWith("http");

                                return (
                                    <a
                                        key={social.label}
                                        href={social.href}
                                        target={external ? "_blank" : undefined}
                                        rel={
                                            external ? "noreferrer" : undefined
                                        }
                                        aria-label={social.label}
                                        className="grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-white/[0.025] text-white/45 transition-all duration-300 hover:-translate-y-0.5 hover:border-neon-blue/40 hover:text-neon-blue"
                                    >
                                        <Icon className="h-4 w-4" />
                                    </a>
                                );
                            })}
                        </div>

                        <p className="mt-5 flex items-center gap-1.5 text-[11px] text-white/30">
                            <MapPin className="h-3 w-3" />
                            {site.location}
                            <span className="mx-1 h-1 w-1 rounded-full bg-white/20" />
                            <span className="inline-flex items-center gap-1.5">
                                <span className="h-1.5 w-1.5 rounded-full bg-neon-lime" />
                                {site.availability}
                            </span>
                        </p>
                    </div>

                    <nav aria-label="Navigasi footer">
                        <h3 className="font-mono text-[9px] uppercase tracking-[0.22em] text-white/30">
                            Jelajahi
                        </h3>
                        <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2.5">
                            {navItems.map((item) => (
                                <li key={item.href}>
                                    <a
                                        href={item.href}
                                        className="block break-words text-sm text-white/45 transition-colors hover:text-white"
                                    >
                                        {item.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    <div>
                        <h3 className="font-mono text-[9px] uppercase tracking-[0.22em] text-white/30">
                            Mulai kolaborasi
                        </h3>
                        <a
                            href={`mailto:${site.email}`}
                            className="mt-4 inline-flex items-center gap-1.5 font-display text-lg font-medium text-white transition-colors hover:text-neon-lime"
                        >
                            {site.email}
                            <ArrowUpRight className="h-4 w-4" />
                        </a>
                        <a
                            href="#contact"
                            className="btn btn-ghost btn-sm mt-4"
                        >
                            Let's collaborate
                            <ArrowUpRight className="h-3.5 w-3.5" />
                        </a>
                        <div className="mt-4 flex items-center gap-2">
                            <Sparkle className="h-3.5 w-3.5 text-neon-lime" />
                            <Squiggle className="h-2.5 w-20 text-white/15" />
                        </div>
                    </div>
                </div>

                <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/[0.06] pt-6 lg:flex-row">
                    <p className="text-center text-[11px] text-white/30 lg:text-left">
                        © {new Date().getFullYear()} {site.name}. All rights
                        reserved.
                    </p>

                    <p className="order-3 text-center font-hand text-lg text-white/35 lg:order-2">
                        <span className="footer-tagline-shimmer">
                            dibuat dengan React, TypeScript &amp; dan secangkir
                            kopi
                        </span>{" "}
                        <span aria-hidden="true">☕</span>
                    </p>

                    <button
                        type="button"
                        onClick={scrollToTop}
                        aria-label="Kembali ke atas"
                        className="group order-2 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.025] py-2 pl-3 pr-2 text-[11px] font-medium text-white/50 transition-all duration-300 hover:border-neon-lime/40 hover:text-neon-lime lg:order-3"
                    >
                        Kembali ke atas
                        <span className="grid h-7 w-7 place-items-center rounded-full bg-white/[0.05] transition-all duration-300 group-hover:-translate-y-0.5 group-hover:bg-neon-lime group-hover:text-ink">
                            <ArrowUp className="h-3.5 w-3.5" />
                        </span>
                    </button>
                </div>
            </div>
        </footer>
    );
}
