"use client";
import { motion } from "motion/react";
import Image from "next/image";
import { Style } from "@/sanity.types";

type Card = Pick<Style, "_id"> & {
  name: string;
  imageUrl: string;
};

export default function PortfolioCards({ cards }: { cards: Card[] }) {
  return (
    <div className="grid gap-8 lg:grid-cols-3 md:grid-cols-2">
      {cards.map((card) => (
        <motion.div
          key={card._id}
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
              {card.name}
            </motion.h3>
          </motion.div>

          {/* Image — scales on hover */}
          <motion.div
            variants={{ rest: { scale: 1 }, hover: { scale: 1.05 } }}
            transition={{ ease: "easeInOut", duration: 0.3 }}
          >
            <Image
              src={card.imageUrl}
              width={600}
              height={600}
              className="object-cover w-full h-full"
              alt={card.name}
            />
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
}
