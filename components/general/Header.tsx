"use client";
import { motion } from "motion/react";
import Link from "next/link";
import React, { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className={`${isOpen ? "bg-background" : "bg-background/50"} px-4 h-18 flex items-center justify-between fixed top-0 left-0 right-0 backdrop-blur-xl z-10`}
    >
      <div>
        <h1 className="text-xl font-bold">Name</h1>
      </div>
      <div className="sm:flex hidden gap-6">
        <Link href={"/"}>
          <p className="uppercase tracking-widest hover:text-primary transition-colors">
            Home
          </p>
        </Link>
        <Link href={"/"}>
          <p className="uppercase tracking-widest hover:text-primary transition-colors">
            Styles
          </p>
        </Link>
        <Link href={"/"}>
          <p className="uppercase tracking-widest hover:text-primary transition-colors">
            Services
          </p>
        </Link>
        <Link href={"/"}>
          <p className="uppercase tracking-widest hover:text-primary transition-colors">
            About
          </p>
        </Link>
        <Link href={"/"}>
          <p className="uppercase tracking-widest hover:text-primary transition-colors">
            Contact
          </p>
        </Link>
      </div>
      <div className="sm:hidden block">
        <button onClick={() => setIsOpen(!isOpen)}>
          <div className="space-y-1">
            <motion.div
              animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? "300%" : 0 }}
              className="h-0.5 w-5 bg-primary"
            />
            <motion.div
              animate={{ opacity: isOpen ? 0 : 1 }}
              className="h-0.5 w-5 bg-primary"
            />
            <motion.div
              animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? "-300%" : 0 }}
              className="h-0.5 w-5 bg-primary"
            />
          </div>
        </button>
        <motion.div
          initial={{ height: 0 }}
          animate={{
            height: isOpen ? "auto" : 0,
          }}
          className="absolute overflow-hidden flex flex-col gap-2 left-0 top-18 w-full text-center bg-background"
        >
          <Link href={"/"}>
            <p className="uppercase tracking-widest hover:text-primary transition-colors">
              Home
            </p>
          </Link>
          <Link href={"/"}>
            <p className="uppercase tracking-widest hover:text-primary transition-colors">
              Styles
            </p>
          </Link>
          <Link href={"/"}>
            <p className="uppercase tracking-widest hover:text-primary transition-colors">
              Services
            </p>
          </Link>
          <Link href={"/"}>
            <p className="uppercase tracking-widest hover:text-primary transition-colors">
              About
            </p>
          </Link>
          <Link href={"/"}>
            <p className="uppercase pb-4 tracking-widest hover:text-primary transition-colors">
              Contact
            </p>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Header;
