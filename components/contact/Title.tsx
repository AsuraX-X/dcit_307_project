"use client";

import React from "react";
import { motion } from "motion/react";

const Title = () => {
  return (
    <motion.div
      className="mx-auto mt-36 text-center max-w-xl"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <p className="uppercase tracking-widest mb-2 text-black/60">
        Let&apos;s Talk
      </p>
      <h1 className="text-6xl mb-6">Get in Touch</h1>
      <p className="text-black/70">
        Ready to create something beautiful? Fill out the form below or reach
        out directly.
      </p>
    </motion.div>
  );
};

export default Title;
