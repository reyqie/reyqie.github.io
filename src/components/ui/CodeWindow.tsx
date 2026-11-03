import { useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const codeParts = [
    { text: "const", className: "text-neon-pink" },
    { text: " developer ", className: "text-neon-cyan" },
    { text: "= ", className: "text-white/60" },
    { text: "{\n", className: "text-white/60" },
    { text: "  nama", className: "text-neon-blue" },
    { text: ": ", className: "text-white/60" },
    { text: '"Reyhan Haqiqi Alif Fourniawan"', className: "text-neon-lime" },
    { text: ",\n", className: "text-white/60" },
    { text: "  kelahiran", className: "text-neon-blue" },
    { text: ": ", className: "text-white/60" },
    { text: '"Magetan, 03 April 2002"', className: "text-neon-lime" },
    { text: ",\n", className: "text-white/60" },
    { text: "  agama", className: "text-neon-blue" },
    { text: ": ", className: "text-white/60" },
    { text: '"Islam"', className: "text-neon-lime" },
    { text: ",\n", className: "text-white/60" },
    { text: "  kewarganegaraan", className: "text-neon-blue" },
    { text: ": ", className: "text-white/60" },
    { text: '"Indonesia"', className: "text-neon-lime" },
    { text: ",\n", className: "text-white/60" },
    { text: "  alamat", className: "text-neon-blue" },
    { text: ": ", className: "text-white/60" },
    { text: '"Krian, Sidoarjo"', className: "text-neon-lime" },
    { text: ",\n", className: "text-white/60" },
    { text: "}", className: "text-white/60" },
];

const fullCode = codeParts.map((part) => part.text).join("");
const typingSpeed = 28;

export function CodeWindow() {
    const [typedCount, setTypedCount] = useState(0);
    const codeRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(codeRef, { once: true, amount: 0.4 });
    const prefersReducedMotion = useReducedMotion();

    useEffect(() => {
        if (!isInView) return;

        if (prefersReducedMotion) {
            setTypedCount(fullCode.length);
            return;
        }

        if (typedCount >= fullCode.length) return;

        const timeout = window.setTimeout(() => {
            setTypedCount((count) => count + 1);
        }, typingSpeed);

        return () => window.clearTimeout(timeout);
    }, [isInView, prefersReducedMotion, typedCount]);

    let consumed = 0;

    return (
        <div
            ref={codeRef}
            className="anime-panel min-w-0 overflow-hidden rounded-2xl border border-white/10 bg-[#0b0e14]/90 shadow-[0_20px_60px_-32px_rgba(0,0,0,0.9)]"
        >
            <div className="flex items-center justify-between border-b border-white/[0.07] bg-white/[0.025] px-3 py-2.5 sm:px-4 sm:py-3">
                <div className="flex items-center gap-2" aria-hidden="true">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#ff6b6b]/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#ffd166]/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-neon-lime/80" />
                </div>
                <span className="font-mono text-[9px] tracking-wide text-white/40 sm:text-[10px]">
                    my-profile.ts
                </span>
                <span className="font-mono text-[8px] uppercase tracking-[0.1em] text-neon-cyan/70 sm:text-[9px] sm:tracking-[0.14em]">
                    TypeScript
                </span>
            </div>

            <div className="flex gap-3 overflow-x-auto px-3 py-3 sm:gap-4 sm:px-5 sm:py-5">
                <span
                    aria-hidden="true"
                    className="select-none font-mono text-[10px] leading-5 text-white/20 sm:text-xs sm:leading-6"
                >
                    01
                    <br />
                    02
                    <br />
                    03
                    <br />
                    04
                    <br />
                    05
                    <br />
                    06
                    <br />
                    07
                </span>
                <pre
                    role="img"
                    aria-label="Contoh kode TypeScript: data pengembang dengan nama Reyhan Haqiqi, kelahiran Magetan, agama Islam, kewarganegaraan Indonesia, dan alamat Krian, Sidoarjo."
                    className="min-w-0 font-mono text-[11px] leading-5 sm:text-[13px] sm:leading-6"
                >
                    <code aria-hidden="true">
                        {codeParts.map((part, index) => {
                            const start = consumed;
                            consumed += part.text.length;
                            const visibleLength = Math.max(
                                0,
                                Math.min(part.text.length, typedCount - start),
                            );
                            const showCaret =
                                typedCount >= start && typedCount < consumed;

                            return (
                                <span key={index} className={part.className}>
                                    {part.text.slice(0, visibleLength)}
                                    {showCaret ? (
                                        <span className="ml-px inline-block h-[1em] w-[2px] translate-y-0.5 animate-blink bg-neon-lime" />
                                    ) : null}
                                </span>
                            );
                        })}
                        {typedCount >= fullCode.length ? (
                            <span className="ml-px inline-block h-[1em] w-[2px] translate-y-0.5 animate-blink bg-neon-lime" />
                        ) : null}
                    </code>
                </pre>
            </div>
        </div>
    );
}
