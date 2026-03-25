"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const logos = [
    { name: "3M", src: "/assets/3M.png" },
    { name: "Kinara", src: "/assets/Kinara-logo.png" },
    { name: "MDT", src: "/assets/MDT-logo.png" },
    { name: "Futura Sinks", src: "/assets/futura-sinks-e1772611662606.png" },
    { name: "iAdda", src: "/assets/iadda.png" },
    { name: "Just Signs", src: "/assets/justsigns.png" },
    { name: "Nasiol", src: "/assets/nasiol-logo-650x415.webp" },
    { name: "p91", src: "/assets/p91-logo.png" },
    { name: "STEK", src: "/assets/stek-logo.png" },
];

export function LogoCarousel() {
    // Duplicate the array to create an infinite loop effect
    const repeatedLogos = [...logos, ...logos, ...logos];

    return (
        <div className="w-full overflow-hidden py-10 relative">
            <div className="absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-muted/30 to-transparent" />
            <div className="absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-muted/30 to-transparent" />

            <motion.div
                className="flex space-x-12 items-center"
                animate={{
                    x: ["0%", "-50%"],
                }}
                transition={{
                    ease: "linear",
                    duration: 35,
                    repeat: Infinity,
                }}
            >
                {repeatedLogos.map((logo, index) => (
                    <div key={`${logo.name}-${index}`} className="flex-shrink-0 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                        <div className="relative h-16 w-32 md:h-20 md:w-40">
                            <Image
                                src={logo.src}
                                alt={logo.name}
                                fill
                                className="object-contain"
                                sizes="(max-width: 768px) 128px, 160px"
                            />
                        </div>
                    </div>
                ))}
            </motion.div>
        </div>
    );
}
