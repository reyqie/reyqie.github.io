import { motion } from "framer-motion";
import {
    Award,
    FolderGit2,
    Home,
    Layers3,
    Mail,
    MessageCircle,
    UserRound,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { navItems } from "../data/site";
import { useScrollSpy } from "../hooks/useScrollSpy";
import { useScrolled } from "../hooks/useScrolled";
import { Brand } from "./ui/Brand";

const sectionIds = navItems.map((item) => item.href.replace("#", ""));

const mobileIcons: Record<string, LucideIcon> = {
    home: Home,
    about: UserRound,
    projects: FolderGit2,
    certificates: Award,
    skills: Layers3,
    contact: Mail,
};

export function Navbar() {
    const activeSection = useScrollSpy(sectionIds);
    const scrolled = useScrolled(24);

    return (
        <>
            <header className="fixed inset-x-0 top-0 z-50">
                <div className="shell">
                    <div
                        className={`relative z-50 mt-3 flex h-16 items-center justify-between gap-4 rounded-2xl border px-3 transition-all duration-300 sm:px-5 ${
                            scrolled
                                ? "anime-nav border-white/10 bg-ink/80 shadow-[0_18px_60px_-32px_rgba(0,0,0,0.95)] backdrop-blur-xl"
                                : "border-transparent bg-transparent"
                        }`}
                    >
                        <Brand />

                        <nav
                            aria-label="Navigasi utama"
                            className="hidden items-center gap-0.5 rounded-full border border-white/10 bg-white/[0.025] p-1.5 backdrop-blur-md lg:flex"
                        >
                            {navItems.map((item) => {
                                const id = item.href.replace("#", "");
                                const isActive = activeSection === id;

                                return (
                                    <a
                                        key={item.href}
                                        href={item.href}
                                        aria-current={
                                            isActive ? "page" : undefined
                                        }
                                        className={`relative rounded-full px-3.5 py-2 text-[13px] font-medium transition-colors duration-200 ${
                                            isActive
                                                ? "text-white"
                                                : "text-white/55 hover:text-white"
                                        }`}
                                    >
                                        {isActive ? (
                                            <motion.span
                                                layoutId="navbar-active-pill"
                                                className="absolute inset-0 rounded-full border border-white/10 bg-white/[0.08]"
                                                transition={{
                                                    type: "spring",
                                                    stiffness: 400,
                                                    damping: 32,
                                                }}
                                            />
                                        ) : null}
                                        <span className="relative z-10">
                                            {item.label}
                                        </span>
                                    </a>
                                );
                            })}
                        </nav>

                        <a
                            href="#contact"
                            className="btn btn-primary btn-sm shrink-0 px-2.5 text-[0.7rem] sm:px-4 sm:text-[0.8rem]"
                        >
                            Let's talk
                            <MessageCircle
                                className="h-[15px] w-[15px] sm:h-4 sm:w-4"
                                strokeWidth={2}
                            />
                        </a>
                    </div>
                </div>
            </header>

            <nav
                aria-label="Navigasi seluler"
                className="fixed inset-x-0 bottom-0 z-50 px-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] lg:hidden"
            >
                <div className="mx-auto flex w-full items-stretch justify-between gap-0.5 rounded-[1.65rem] border border-white/10 bg-[#0b0d13]/90 p-1.5 shadow-[0_24px_80px_-22px_rgba(0,0,0,0.95)] backdrop-blur-2xl">
                    {navItems.map((item) => {
                        const id = item.href.replace("#", "");
                        const isActive = activeSection === id;
                        const Icon = mobileIcons[id] ?? Home;

                        return (
                            <a
                                key={item.href}
                                href={item.href}
                                aria-current={isActive ? "page" : undefined}
                                className="relative flex min-w-0 flex-1 flex-col items-center justify-center gap-1 rounded-[1.15rem] px-1 py-2.5 text-[9px] font-medium transition-colors duration-200"
                            >
                                {isActive ? (
                                    <motion.span
                                        layoutId="mobile-nav-active-pill"
                                        className="absolute inset-0 rounded-[1.15rem] border border-white/10 bg-white/[0.07]"
                                        transition={{
                                            type: "spring",
                                            stiffness: 420,
                                            damping: 34,
                                        }}
                                    />
                                ) : null}
                                <Icon
                                    className={`relative z-10 h-[18px] w-[18px] transition-colors duration-200 ${
                                        isActive
                                            ? "text-neon-lime"
                                            : "text-white/40"
                                    }`}
                                    strokeWidth={isActive ? 2.2 : 1.8}
                                />
                                <span
                                    className={`relative z-10 truncate transition-colors duration-200 ${
                                        isActive
                                            ? "text-white"
                                            : "text-white/45"
                                    }`}
                                >
                                    {item.label}
                                </span>
                            </a>
                        );
                    })}
                </div>
            </nav>
        </>
    );
}
