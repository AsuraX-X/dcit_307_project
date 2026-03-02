"use client";
import { Heart, Ruler, Scissors, Star } from "lucide-react";
import { Variants } from "motion";
import { motion } from "motion/react";

const Offers = () => {
  const offers = [
    {
      icon: <Scissors size={30} />,
      title: "Custom Tailoring",
      desc: "From concept to creation, I design and sew garments that are uniquely yours. Whether it's a cocktail dress, office wear, or a special occasion outfit, every piece is made to your exact measurements.",
    },
    {
      icon: <Ruler size={30} />,
      title: "Alterations & Adjustments",
      desc: "Need a perfect fit? I offer professional alterations including hemming, resizing, and reshaping to ensure your garments fit like a dream.",
    },
    {
      icon: <Heart size={30} />,
      title: "Bridal & Event Wear",
      desc: "Your special day deserves a special dress. I create stunning bridal gowns, bridesmaid dresses, and outfits for naming ceremonies, graduations, and formal events.",
    },
    {
      icon: <Star size={30} />,
      title: "Consultations",
      desc: "Not sure what you want? Book a consultation and we'll explore fabrics, styles, and designs together to create something you'll love.",
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
    <motion.div
      variants={parent}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="py-36 flex overflow-hidden flex-col items-center justify-center"
    >
      <div className="text-center mb-8">
        <motion.p
          variants={child}
          className="uppercase tracking-widest mb-2 text-black/60 font-medium"
        >
          What I offer
        </motion.p>
        <motion.h1 variants={child} className="uppercase text-5xl">
          Services
        </motion.h1>
      </div>
      <div className="grid mt-12 grid-cols-1 sm:grid-cols-2 gap-12 px-10">
        {offers.map((o, i) => (
          <motion.div
            variants={child}
            key={i}
            className="flex max-w-125  bg-secondary/30 p-8 border-black/10 border flex-col"
          >
            <div className="text-primary mb-4">{o.icon} </div>
            <h2 className="text-xl mb-2">{o.title}</h2>
            <p className="text-black/60 text-sm">{o.desc}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Offers;
