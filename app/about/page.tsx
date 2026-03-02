"use client";
import { motion, Variants } from "motion/react";
import Image from "next/image";
import Link from "next/link";

const parent: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.04, when: "beforeChildren" },
  },
};

const child: Variants = {
  hidden: { opacity: 0, x: "15%" },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "tween" as const,
      ease: "linear" as const,
      duration: 0.5 as const,
    },
  },
};

const page = () => {
  return (
    <div>
      <div className="h-screen gap-16 px-16 my-36 items-center overflow-hidden flex">
        <motion.div
          initial={{ opacity: 0, x: "-15%" }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="flex-1"
        >
          <Image
            src={"/about.png"}
            unoptimized
            alt="Owners Image"
            width={0}
            height={0}
            className="w-full h-full object-cover"
          />
        </motion.div>
        <motion.div
          variants={parent}
          initial="hidden"
          animate="visible"
          className="flex-1 space-y-6"
        >
          <div className="text-black/60 space-y-6">
            <motion.p
              variants={child}
              className="uppercase tracking-[0.15rem] text-xl"
            >
              About
            </motion.p>
            <motion.h1 variants={child} className="text-4xl text-black">
              Meet Name
            </motion.h1>
            <motion.p variants={child}>
              With over 12 years of experience in custom fashion design and
              tailoring, Grace has built a reputation for creating garments that
              celebrate the beauty and individuality of every woman who wears
              them.
            </motion.p>
            <motion.p variants={child}>
              Trained in both traditional African dressmaking and contemporary
              fashion design, she brings a unique blend of cultural heritage and
              modern sophistication to every piece she creates.
            </motion.p>
            <motion.p variants={child}>
              Her philosophy is simple: clothing should make you feel powerful,
              beautiful, and authentically yourself. From the first consultation
              to the final stitch, she works closely with each client to ensure
              every garment tells their unique story.
            </motion.p>
            <motion.p variants={child}>
              Based in Lagos, Nigeria, Grace has dressed brides, executives,
              celebrities, and everyday women who simply want to look and feel
              their best. Her work has been featured at fashion shows and in
              local publications.
            </motion.p>
          </div>
          <motion.div
            variants={child}
            className="text-center py-6 px-15 justify-between flex"
          >
            <div>
              <h2 className="text-3xl text-primary">6+</h2>
              <p className="text-sm">Years Experience</p>
            </div>
            <div>
              <h2 className="text-3xl text-primary">100+</h2>
              <p className="text-sm">Happy Clients</p>
            </div>
            <div>
              <h2 className="text-3xl text-primary">1000+</h2>
              <p className="text-sm">Garments Made</p>
            </div>
          </motion.div>
          <motion.div variants={child}>
            <Link
              href={"/contact"}
              className="btn tracking-[0.15rem] bg-primary text-white border-[#ffffff] hover:bg-primary-dark"
            >
              Work with me
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default page;
