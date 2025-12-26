"use client";

import React, { useRef, useState } from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface MagneticButtonProps extends HTMLMotionProps<"button"> {
    children: React.ReactNode;
    className?: string;
    variant?: "primary" | "secondary";
}

export const MagneticButton = ({
    children,
    className,
    variant = "primary",
    ...props
}: MagneticButtonProps) => {
    const ref = useRef<HTMLButtonElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
        const { clientX, clientY } = e;
        const { left, top, width, height } = ref.current!.getBoundingClientRect();
        const x = clientX - (left + width / 2);
        const y = clientY - (top + height / 2);
        setPosition({ x, y });
    };

    const handleMouseLeave = () => {
        setPosition({ x: 0, y: 0 });
    };

    return (
        <motion.button
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            animate={{ x: position.x * 0.5, y: position.y * 0.5 }}
            transition={{ type: "spring", stiffness: 100, damping: 20, mass: 0.5 }}
            className={cn(
                "relative overflow-hidden rounded-full px-8 py-3 text-sm font-medium transition-all duration-300 group",
                className
            )}
            {...props}
        >
            {/* Magic Border Gradient - Single Clockwise Path */}
            <span className="absolute inset-[-100%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,#a5b4fc_10%,transparent_20%)]" />

            {/* Button Background (Mask) */}
            <span className={cn(
                "absolute inset-[1px] rounded-full transition-colors duration-300",
                variant === "primary"
                    ? "bg-indigo-600 group-hover:bg-indigo-700"
                    : "bg-black/90 group-hover:bg-black/80 backdrop-blur-md"
            )} />

            {/* Content */}
            <span className="relative z-10 flex items-center justify-center gap-2 text-white">
                {children}
            </span>
        </motion.button>
    );
};
