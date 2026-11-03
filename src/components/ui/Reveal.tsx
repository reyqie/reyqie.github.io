import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type Direction = "up" | "down" | "left" | "right" | "none";

interface RevealProps {
    children: ReactNode;
    className?: string;
    delay?: number;
    duration?: number;
    distance?: number;
    direction?: Direction;
    once?: boolean;
    amount?: number;
}

export function Reveal({
    children,
    className,
    delay = 0,
    duration = 0.7,
    distance = 26,
    direction = "up",
    once = true,
    amount = 0.2,
}: RevealProps) {
    const prefersReducedMotion = useReducedMotion();

    const offset = {
        up: { x: 0, y: distance },
        down: { x: 0, y: -distance },
        left: { x: distance, y: 0 },
        right: { x: -distance, y: 0 },
        none: { x: 0, y: 0 },
    }[direction];

    return (
        <motion.div
            className={className}
            initial={prefersReducedMotion ? false : { opacity: 0, ...offset }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once, amount, margin: "0px 0px -60px 0px" }}
            transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
        >
            {children}
        </motion.div>
    );
}
