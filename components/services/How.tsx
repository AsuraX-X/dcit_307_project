"use client";
import { motion } from "motion/react";
import Link from "next/link";

const processes = [
  {
    title: "Consultation",
    desc: "We discuss your vision, occasion, and style preferences.",
  },
  {
    title: "Measurement",
    desc: "Precise measurements are taken to ensure a perfect fit.",
  },
  {
    title: "Design & Approval",
    desc: "I create a design sketch for your review and approval.",
  },
  {
    title: "Fitting",
    desc: "A fitting session to fine-tune the garment on you.",
  },
  {
    title: "Delivery",
    desc: "Your finished piece, ready to wear with confidence.",
  },
];

const How = () => {
  return (
    <div className="pb-36">
      <div className="text-center">
        <p className="uppercase tracking-widest mb-2 text-black/60 font-medium">
          How It Works
        </p>
        <h1 className="uppercase text-3xl sm:text-4xl">The Process</h1>
      </div>
      <div className="max-w-3xl px-8 mx-auto pt-7 sm:pt-14 space-y-8 ">
        {processes.map((process, i) => (
          <motion.div
            initial={{ x: "-15%", opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            key={i}
            className="flex items-center gap-6"
          >
            <div className="size-14 aspect-square place-content-center text-center  bg-primary text-white text-2xl">
              <h2>0{i + 1}</h2>
            </div>
            <div>
              <h2 className="text-xl">{process.title}</h2>
              <p className="text-black/60">{process.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="w-fit mx-auto mt-16">
        <Link
          href={`/contact?type=consultation&message=${encodeURIComponent("Hi, I'd like to book a consultation to discuss my tailoring needs. Please let me know your available times.")}`}
          className="btn bg-primary text-white hover:bg-primary-dark"
        >
          Book a Consultation
        </Link>
      </div>
    </div>
  );
};

export default How;
