import { ArrowUpRight } from "lucide-react";
import { projects } from "../data/projects";
import { DoodleArrow, Sparkle, StarOutline } from "./decor/Doodles";
import { ProjectCard } from "./ProjectCard";
import { Parallax } from "./ui/Parallax";
import { Reveal } from "./ui/Reveal";
import { SectionHeading } from "./ui/SectionHeading";

export function Projects() {
    return (
        <section
            id="projects"
            aria-labelledby="projects-heading"
            className="section-pad relative overflow-hidden"
        >
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 -z-10"
            >
                <div className="absolute -right-52 top-10 h-[520px] w-[520px] rounded-full bg-neon-cyan/[0.05] blur-[130px]" />
                <div className="absolute left-1/4 top-1/2 h-[400px] w-[400px] rounded-full bg-neon-blue/[0.05] blur-[120px]" />
                <Parallax
                    decorative
                    distance={-70}
                    className="absolute right-[12%] top-24"
                >
                    <StarOutline className="h-8 w-8 rotate-12 animate-float-slow text-neon-blue/25" />
                </Parallax>
                <Parallax
                    decorative
                    distance={55}
                    className="absolute left-[6%] top-1/3"
                >
                    <Sparkle className="h-4 w-4 animate-float text-neon-lime/25" />
                </Parallax>
            </div>

            <div className="shell">
                <SectionHeading
                    index="03"
                    eyebrow="project pilihan"
                    title={
                        <span id="projects-heading">
                            Project{" "}
                            <span className="name-gradient">Selesai</span>
                        </span>
                    }
                    description="Berbagai karya yang saya bangun dengan semangat dan kreativitas — mulai dari dashboard web, landing page sampai aplikasi mobile."
                    aside={
                        <div className="relative hidden flex-col items-end gap-2 pb-1 md:flex">
                            <p className="font-hand text-xl text-neon-cyan">
                                dibuat dengan rasa belajar &amp; kopi
                            </p>
                            <DoodleArrow className="h-12 w-24 -scale-x-100 text-neon-cyan/40" />
                            <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-white/25">
                                03 / pilihan
                            </span>
                        </div>
                    }
                />

                <div className="mt-12 grid gap-6 md:grid-cols-2 lg:mt-14 lg:gap-7">
                    {projects.map((project, index) => (
                        <Reveal
                            key={project.id}
                            delay={
                                (index % 2) * 0.1 + Math.floor(index / 2) * 0.05
                            }
                            amount={0.15}
                        >
                            <ProjectCard project={project} index={index} />
                        </Reveal>
                    ))}
                </div>

                <Reveal className="mt-10 flex justify-center" delay={0.1}>
                    <a
                        href="https://github.com/reyqie"
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn-ghost group"
                    >
                        Lihat Semua Proyek
                        <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </a>
                </Reveal>
            </div>
        </section>
    );
}
