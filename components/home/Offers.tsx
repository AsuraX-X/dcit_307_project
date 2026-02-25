"use client";
import { Heart, Ruler, Scissors, Star } from "lucide-react";
import { Variants } from "motion";
import { motion } from "motion/react";

const Offers = () => {
  const offers = [
    {
      icon: <Scissors size={30} />,
      title: "Custom Tailoring",
      desc: "Bespoke designs crafted to your exact measurements",
    },
    {
      icon: <Ruler size={30} />,
      title: "Alterations",
      desc: "Perfect fit adjustments for your existing garments",
    },
    {
      icon: <Heart size={30} />,
      title: "Bridal Wear",
      desc: "Dream wedding dresses and bridal party outfits",
    },
    {
      icon: <Star size={30} />,
      title: "Event Wear",
      desc: "Stunning outfits for every special occasion",
    },
  ];

  const parent: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, when: "beforeChildren" },
    },
  };

  const child: Variants = {
    hidden: { opacity: 0, y: "50%" },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "tween" as const,
        ease: "linear" as const,
        duration: 0.5 as const,
      },
    },
  };

  return (
    <div className="py-36 flex overflow-hidden flex-col items-center justify-center">
      <div>
        <p className="uppercase tracking-widest text-black/60 font-medium">
          What I offer
        </p>
        <h1 className="uppercase text-3xl">Services</h1>
      </div>
      <motion.div
        variants={parent}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid mt-12 lg:grid-cols-4 md:grid-cols-2 gap-12 px-10 text-center"
      >
        {offers.map((o, i) => (
          <motion.div
            variants={child}
            key={i}
            className="flex items-center justify-center flex-col"
          >
            <div className="text-primary mb-4">{o.icon} </div>
            <h2 className="text-xl mb-2">{o.title}</h2>
            <p className="text-black/60 text-sm max-w-3xs">{o.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Offers;
