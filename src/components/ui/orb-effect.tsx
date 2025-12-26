"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface OrbEffectProps {
    className?: string;
}

export const OrbEffect = ({ className }: OrbEffectProps) => {
    return (
        <div className={cn("absolute inset-0 overflow-hidden pointer-events-none", className)}>
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3],
                    rotate: [0, 90, 180, 270, 360],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                }}
                className="absolute -top-[20%] -left-[10%] w-[600px] h-[600px] rounded-full bg-indigo-600/20 blur-[100px] mix-blend-screen"
            />

            <motion.div
                animate={{
                    scale: [1.2, 1, 1.2],
                    opacity: [0.3, 0.5, 0.3],
                    rotate: [360, 270, 180, 90, 0],
                }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "linear",
                }}
                className="absolute top-[20%] -right-[10%] w-[500px] h-[500px] rounded-full bg-violet-600/20 blur-[100px] mix-blend-screen"
            />

            <motion.div
                animate={{
                    scale: [1, 1.3, 1],
                    x: [0, 100, 0],
                    y: [0, -50, 0],
                }}
                transition={{
                    duration: 30,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="absolute bottom-[10%] left-[20%] w-[400px] h-[400px] rounded-full bg-blue-600/10 blur-[80px] mix-blend-screen"
            />
        </div>
    );
};
