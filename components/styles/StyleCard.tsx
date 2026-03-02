"use client";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import StyleDetails from "./StyleDetails";
import { useState } from "react";

const StyleCard = ({
  name,
  type,
  description,
  image,
}: {
  name: string;
  type: string;
  description: string;
  image: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <AnimatePresence>
        {isOpen ? (
          <StyleDetails
            action={() => {
              setIsOpen(false);
              document.body.style.overflow = "auto";
            }}
            {...{ name, type, description, image }}
          />
        ) : null}
      </AnimatePresence>
      <motion.div
        onClick={() => {
          document.body.style.overflow = "hidden";
          setIsOpen(true);
        }}
        layout="position"
      >
        <div className="overflow-hidden">
          <motion.div
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{ ease: "easeInOut", duration: 0.3 }}
          >
            <Image
              src={image}
              width={600}
              height={600}
              className="object-cover w-full h-full"
              alt={name}
            />
          </motion.div>
        </div>
        <h2 className="text-xl mt-4">{name}</h2>
        <p className="text-black/70 text-sm">{type}</p>
      </motion.div>
    </div>
  );
};

export default StyleCard;
