import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, X } from "lucide-react";
import { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa6";
import type { Accent, Project } from "../types";

const accentText: Record<Accent, string> = {
    lime: "text-neon-lime",
    blue: "text-neon-blue",
    cyan: "text-neon-cyan",
    pink: "text-neon-pink",
};

const accentBorder: Record<Accent, string> = {
    lime: "group-hover:border-neon-lime/30",
    blue: "group-hover:border-neon-blue/35",
    cyan: "group-hover:border-neon-cyan/30",
    pink: "group-hover:border-neon-pink/30",
};

interface ProjectCardProps {
    project: Project;
    index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
    const [isPreviewOpen, setIsPreviewOpen] = useState(false);

    useEffect(() => {
        if (!isPreviewOpen) return;

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") setIsPreviewOpen(false);
        };

        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        window.addEventListener("keydown", handleKeyDown);

        return () => {
            document.body.style.overflow = previousOverflow;
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [isPreviewOpen]);

    return (
        <>
            <motion.article
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className={`group anime-panel relative flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-white/[0.08] bg-surface card-glow ${accentBorder[project.accent]}`}
            >
                <div className="relative p-3 sm:p-4">
                    <button
                        type="button"
                        onClick={() => setIsPreviewOpen(true)}
                        aria-label={`Perbesar pratinjau proyek ${project.title}`}
                        className="relative block w-full cursor-zoom-in overflow-hidden rounded-[1.15rem] border border-white/[0.08] bg-ink-soft focus:outline-none focus-visible:ring-2 focus-visible:ring-neon-cyan/60"
                    >
                        <img
                            src={project.image}
                            alt={`Pratinjau proyek ${project.title}`}
                            loading="lazy"
                            className="aspect-[16/10] w-full object-cover"
                        />

                        <div
                            aria-hidden="true"
                            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent opacity-50 transition-opacity duration-500 group-hover:opacity-20"
                        />

                        <div className="absolute inset-x-3 top-3 flex items-center justify-between gap-2">
                            <span className="rounded-full border border-white/10 bg-ink/60 px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.14em] text-white/65 backdrop-blur-md">
                                {project.category}
                            </span>
                            <span className="rounded-full border border-white/10 bg-ink/60 px-2.5 py-1 font-mono text-[9px] tracking-[0.14em] text-white/45 backdrop-blur-md">
                                {project.year}
                            </span>
                        </div>

                        <span
                            className={`absolute bottom-3 left-3 font-mono text-[10px] tracking-[0.2em] ${accentText[project.accent]} opacity-70`}
                        >
                            0{index + 1}
                        </span>
                    </button>
                </div>

                <div className="flex flex-1 flex-col px-5 pb-5 pt-1 sm:px-6 sm:pb-6">
                    <div className="flex items-start justify-between gap-3">
                        <h3 className="font-display text-xl font-semibold tracking-tight text-white sm:text-[1.35rem]">
                            {project.title}
                        </h3>
                        <span
                            aria-hidden="true"
                            className={`mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-full border border-white/10 bg-white/[0.03] transition-all duration-300 group-hover:border-white/20 group-hover:bg-white/[0.07] ${accentText[project.accent]}`}
                        >
                            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                        </span>
                    </div>

                    <p className="mt-3 text-sm leading-relaxed text-white/45">
                        {project.description}
                    </p>

                    <div className="mt-4 mb-3 flex flex-wrap gap-1.5">
                        {project.tech.map((tech) => {
                            const TechIcon = tech.icon;
                            return (
                                <span
                                    key={tech.name}
                                    className="inline-flex items-center gap-1.5 rounded-full border border-white/[0.08] bg-white/[0.025] px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.1em] text-white/45"
                                >
                                    <TechIcon
                                        className="h-3 w-3"
                                        style={{ color: tech.color }}
                                    />
                                    {tech.name}
                                </span>
                            );
                        })}
                    </div>

                    <div className="mt-auto flex flex-wrap items-center gap-2 border-t border-white/[0.06] pt-4">
                        <a
                            href={project.repoUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="btn btn-ghost btn-sm flex-1 sm:flex-none"
                        >
                            <FaGithub className="h-3.5 w-3.5" />
                            GitHub
                        </a>
                    </div>
                </div>
            </motion.article>

            <AnimatePresence>
                {isPreviewOpen ? (
                    <motion.div
                        key="preview"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        onClick={() => setIsPreviewOpen(false)}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-ink/90 p-4 backdrop-blur-md sm:p-8"
                        role="dialog"
                        aria-modal="true"
                        aria-label={`Pratinjau proyek ${project.title}`}
                    >
                        <button
                            type="button"
                            onClick={() => setIsPreviewOpen(false)}
                            aria-label="Tutup pratinjau"
                            className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full border border-white/15 bg-ink/70 text-white/70 transition-colors hover:border-white/30 hover:text-white sm:right-6 sm:top-6"
                        >
                            <X className="h-5 w-5" />
                        </button>

                        <motion.img
                            src={project.image}
                            alt={`Pratinjau proyek ${project.title}`}
                            initial={{ scale: 0.96, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.96, opacity: 0 }}
                            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                            onClick={(event) => event.stopPropagation()}
                            className="max-h-[85vh] w-auto max-w-full rounded-2xl border border-white/10 object-contain shadow-[0_30px_90px_-30px_rgba(0,0,0,0.9)]"
                        />
                    </motion.div>
                ) : null}
            </AnimatePresence>
        </>
    );
}
