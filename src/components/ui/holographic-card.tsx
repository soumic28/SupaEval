"use client";

import React, { useRef, useState } from "react";
import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";

interface HolographicCardProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    className?: string;
}

export const HolographicCard = ({ children, className, ...props }: HolographicCardProps) => {
    const ref = useRef<HTMLDivElement>(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseX = useSpring(x, { stiffness: 300, damping: 30 });
    const mouseY = useSpring(y, { stiffness: 300, damping: 30 });

    const [hovered, setHovered] = useState(false);

    function onMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
        const { left, top, width, height } = currentTarget.getBoundingClientRect();
        x.set(clientX - left);
        y.set(clientY - top);

        // Calculate rotation based on mouse position
        const rotateX = ((clientY - top) / height - 0.5) * 20; // Max 10 degrees
        const rotateY = ((clientX - left) / width - 0.5) * -20; // Max 10 degrees

        if (ref.current) {
            ref.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
        }
    }

    function onMouseLeave() {
        setHovered(false);
        if (ref.current) {
            ref.current.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
        }
    }

    function onMouseEnter() {
        setHovered(true);
    }

    return (
        <div
            className={cn(
                "relative overflow-hidden rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-200 ease-out",
                className
            )}
            onMouseMove={onMouseMove}
            onMouseLeave={onMouseLeave}
            onMouseEnter={onMouseEnter}
            ref={ref}
            style={{
                transformStyle: "preserve-3d",
            }}
            {...props}
        >
            {/* Holographic Gradient Overlay */}
            <motion.div
                className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100"
                style={{
                    opacity: hovered ? 1 : 0,
                    background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(255, 255, 255, 0.1),
              transparent 80%
            )
          `,
                }}
            />

            {/* Iridescent Sheen */}
            <motion.div
                className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 mix-blend-overlay transition-opacity duration-500"
                style={{ opacity: hovered ? 0.3 : 0 }}
            />

            <div className="relative z-10 h-full">
                {children}
            </div>
        </div>
    );
};
