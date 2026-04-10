"use client";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import React, { useEffect } from "react";

interface ParallaxHeroImagesProps {
  images: string[];
}

export const ParallaxHeroImages = ({ images }: ParallaxHeroImagesProps) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const x = (clientX / innerWidth - 0.5) * 20;
      const y = (clientY / innerHeight - 0.5) * 20;
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {images.map((src, index) => {
        // Different speeds for each image
        const depth = (index + 1) * 0.5;
        const translateX = useTransform(springX, (val) => val * depth * 5);
        const translateY = useTransform(springY, (val) => val * depth * 5);

        // Random positions for the floating images
        const positions = [
          { top: "10%", left: "15%", size: "w-32 h-32 md:w-48 md:h-48", mobile: true },
          { top: "20%", right: "10%", size: "w-40 h-40 md:w-64 md:h-64", mobile: false },
          { bottom: "15%", left: "10%", size: "w-36 h-36 md:w-56 md:h-56", mobile: true },
          { bottom: "25%", right: "15%", size: "w-28 h-28 md:w-44 md:h-44", mobile: false },
          { top: "50%", left: "5%", size: "w-24 h-24 md:w-36 md:h-36", mobile: false },
          { top: "40%", right: "5%", size: "w-32 h-32 md:w-52 md:h-52", mobile: true },
        ];

        const pos = positions[index % positions.length];

        return (
          <motion.div
            key={index}
            style={{
              x: translateX,
              y: translateY,
              top: pos.top,
              left: pos.left,
              right: pos.right,
              bottom: pos.bottom,
            }}
            className={`absolute ${pos.size} ${!pos.mobile ? "hidden md:block" : "opacity-20 md:opacity-40"} rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10 transition-all duration-500`}
          >
            <img
              src={src}
              alt={`Parallax ${index}`}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        );
      })}
    </div>
  );
};
