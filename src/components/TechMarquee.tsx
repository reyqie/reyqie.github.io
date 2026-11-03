import { Sparkle } from "./decor/Doodles";

const items = [
    "Web Developer",
    "Mobile Developer",
    "React JS",
    "Laravel",
    "Flutter",
    "UI / UX Design",
];

function Row() {
    return (
        <div className="flex shrink-0 items-center">
            {[...items, ...items].map((item, index) => (
                <div key={`${item}-${index}`} className="flex items-center">
                    <span className="px-6 font-mono text-[11px] uppercase tracking-[0.3em] text-white/45 sm:px-9 sm:text-xs">
                        {item}
                    </span>
                    <Sparkle
                        className={`h-3 w-3 ${index % 3 === 0 ? "text-neon-lime" : index % 3 === 1 ? "text-neon-blue" : "text-neon-cyan"}`}
                    />
                </div>
            ))}
        </div>
    );
}

export function TechMarquee() {
    return (
        <div
            aria-hidden="true"
            className="relative border-y border-white/[0.06] bg-white/[0.015] py-5"
        >
            <div className="mask-fade-x overflow-hidden">
                <div className="marquee-track">
                    <Row />
                    <Row />
                </div>
            </div>
        </div>
    );
}
