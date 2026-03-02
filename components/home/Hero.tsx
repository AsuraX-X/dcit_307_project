"use client";

import { motion, type Variants } from "motion/react";
import Link from "next/link";

const Hero = () => {
  const parent: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, when: "beforeChildren" },
    },
  };

  const child: Variants = {
    hidden: { opacity: 0, y: "100%" },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "tween" as const, ease: "linear" as const },
    },
  };

  return (
    <div className="h-screen w-full bg-[url(/hero.png)] bg-cover bg-center  ">
      <motion.div
        variants={parent}
        initial="hidden"
        animate="visible"
        className="h-full w-full place-content-center bg-dark/35"
      >
        <div className="text-white flex px-3 flex-col items-center justify-center text-center">
          <motion.p
            variants={child}
            className="sm:text-xl text-sm tracking-widest uppercase"
          >
            Bespoke Outfits
          </motion.p>
          <motion.h1
            variants={child}
            className="md:text-7xl sm:text-5xl text-4xl"
          >
            Tailored to <span className=" italic">Perfection</span>
          </motion.h1>
          <motion.p
            variants={child}
            className="sm:text-xl px-3 text-sm max-w-xl mt-3 tracking-wide"
          >
            Every stitch tells your story. Bespoke designs for the woman who
            knows her worth.
          </motion.p>
        </div>
        <motion.div variants={child} className="space-x-4 mx-auto w-fit mt-8">
          <Link href={"/styles"}>
            <button className="btn bg-primary hover:bg-primary-dark border border-primary">
              View Styles
            </button>
          </Link>
          <Link href={"/contact"}>
            <button className="btn border border-secondary hover:bg-secondary hover:text-black">
              Contact Me
            </button>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
