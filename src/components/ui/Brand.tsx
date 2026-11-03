import { site } from "../../data/site";
import { Sparkle } from "../decor/Doodles";

interface BrandProps {
    className?: string;
    onClick?: () => void;
}

export function Brand({ className = "", onClick }: BrandProps) {
    return (
        <a
            href="#home"
            onClick={onClick}
            aria-label={`${site.name} — kembali ke beranda`}
            className={`group inline-flex items-center gap-2.5 ${className}`}
        >
            <span className="relative grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-neon-blue via-neon-sky to-neon-cyan p-px shadow-[0_0_24px_-6px_rgba(96,165,250,0.75)]">
                <span className="grid h-full w-full place-items-center rounded-[11px] bg-ink font-display text-base font-extrabold tracking-tight text-white">
                    {site.firstName.charAt(0)}
                </span>
                <span className="absolute -right-0.5 -top-0.5 h-1.5 w-1.5 rounded-full bg-neon-lime shadow-[0_0_10px_rgba(205,249,78,0.9)]" />
            </span>
            <span className="font-display text-[17px] font-semibold tracking-tight text-white">
                {site.firstName.toLowerCase()}
                <span className="text-neon-blue">
                    {site.lastName.toLowerCase()}
                </span>
            </span>
            <Sparkle className="h-3 w-3 text-neon-lime transition-transform duration-300 group-hover:rotate-90" />
        </a>
    );
}
