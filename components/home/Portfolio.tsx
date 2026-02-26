"use client";
import { motion } from "motion/react";
import Image from "next/image";

const cards = [
  {
    src: "https://media.istockphoto.com/id/171575147/photo/vintage-fashion.jpg?s=612x612&w=0&k=20&c=9hAIkvjYz40ziblgF8Qaz8jTfeX8lYgnb3_4HQweC14=",
    label: "Dress Example",
  },
  {
    src: "https://media.istockphoto.com/id/150500074/photo/vintage-fashion.jpg?s=612x612&w=0&k=20&c=Qpn07YhPlMR5KC2-kc_Rso2bsXl_k78f6mdi3TzS0EA=",
    label: "Dress Example",
  },
  {
    src: "https://media.istockphoto.com/id/151935181/photo/vintage-fashion.jpg?s=612x612&w=0&k=20&c=mfhfGSblkAxi-Fcst08FU_bHdjiwbTmFaugKX7UrJhs=",
    label: "Dress Example",
  },
];

const Portfolio = () => {
  return (
    <div className="bg-secondary px-12 uppercase tracking-widest text-center py-36">
      <p className="uppercase tracking-widest mb-2 text-black/60 font-medium">
        Portfolio
      </p>
      <h1 className="text-4xl mb-12">Featured Styles</h1>
      <div className="grid gap-8 lg:grid-cols-3 md:grid-cols-2">
        {cards.map((card, i) => (
          <motion.div
            key={i}
            className="h-full w-full relative overflow-hidden bg-white"
            initial="rest"
            animate="rest"
            whileHover="hover"
          >
            {/* Overlay + label — only animates on hover */}
            <motion.div
              variants={{ rest: { opacity: 0 }, hover: { opacity: 1 } }}
              className="absolute pointer-events-none z-1 inset-0 bg-dark/30 overflow-hidden"
            >
              <motion.h3
                variants={{ rest: { y: "100%" }, hover: { y: 0 } }}
                transition={{ ease: "linear", duration: 0.3 }}
                className="absolute bottom-4 left-4 text-white"
              >
                {card.label}
              </motion.h3>
            </motion.div>

            {/* Image — scales on hover */}
            <motion.div
              variants={{ rest: { scale: 1 }, hover: { scale: 1.05 } }}
              transition={{ ease: "easeInOut", duration: 0.3 }}
            >
              <Image
                src={card.src}
                width={0}
                height={0}
                unoptimized
                className="object-cover w-full h-full"
                alt="dress"
              />
            </motion.div>
          </motion.div>
        ))}
      </div>
      <button className="btn border-primary text-primary border mt-16 hover:bg-primary hover:text-white">
        View all styles
      </button>
    </div>
  );
};

export default Portfolio;
