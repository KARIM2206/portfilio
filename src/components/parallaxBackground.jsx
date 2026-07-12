"use client";
import { motion, useScroll, useSpring, useTransform } from "motion/react";
import Image from "next/image";

const ParallaxBackground = () => {
  const { scrollYProgress } = useScroll();
  const x = useSpring(scrollYProgress, { damping: 50 });
  const mountain3Y = useTransform(x, [0, 0.5], ["0%", "70%"]);
  const planetsX = useTransform(x, [0, 0.5], ["0%", "-20%"]);
  const mountain2Y = useTransform(x, [0, 0.5], ["0%", "30%"]);
  const mountain1Y = useTransform(x, [0, 0.5], ["0%", "0%"]);

  return (
    <section className="absolute inset-0 bg-black/40">
      <div className="relative h-[100dvh] overflow-y-hidden">
        {/* Background Sky */}
        <div className="absolute inset-0 w-full h-[100dvh] -z-50">
          <Image src="/assets/sky.jpg" alt="sky background" fill className="object-cover object-bottom" priority />
        </div>
        {/* Mountain Layer 3 */}
        <motion.div className="absolute inset-0 -z-40" style={{ y: mountain3Y }}>
          <Image src="/assets/mountain-3.png" alt="mountain background" fill className="object-cover object-bottom" priority />
        </motion.div>
        {/* Planets */}
        <motion.div className="absolute inset-0 -z-30" style={{ x: planetsX }}>
          <Image src="/assets/planets.png" alt="planets" fill className="object-cover object-bottom" priority />
        </motion.div>
        {/* Mountain Layer 2 */}
        <motion.div className="absolute inset-0 -z-20" style={{ y: mountain2Y }}>
          <Image src="/assets/mountain-2.png" alt="mountain midground" fill className="object-cover object-bottom" priority />
        </motion.div>
        {/* Mountaine Layer 1 */}
        <motion.div className="absolute inset-0 -z-10" style={{ y: mountain1Y }}>
          <Image src="/assets/mountain-1.png" alt="mountain foreground" fill className="object-cover object-bottom" priority />
        </motion.div>
      </div>
    </section>
  );
};

export default ParallaxBackground;
