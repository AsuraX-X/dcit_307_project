"use client";
import { motion } from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

const links = [
  { label: "Home", href: "/" },
  { label: "Styles", href: "/styles" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div
      className={`${isOpen ? "bg-background" : "bg-background/50"} px-4 h-18 flex items-center justify-between fixed top-0 left-0 right-0 backdrop-blur-xl z-10`}
    >
      <div>
        <Link href={"/"}>
          <h1 className="text-xl font-bold">Name</h1>
        </Link>{" "}
      </div>
      <div className="sm:flex hidden gap-6">
        {links.map(({ label, href }) => (
          <Link key={href} href={href}>
            <p
              className={`uppercase tracking-widest transition-colors hover:text-primary-light ${
                pathname === href ? "text-primary font-bold" : ""
              }`}
            >
              {label}
            </p>
          </Link>
        ))}
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
          animate={{ height: isOpen ? "auto" : 0 }}
          className="absolute overflow-hidden flex flex-col gap-2 left-0 top-18 w-full text-center bg-background"
        >
          {links.map(({ label, href }, i) => (
            <Link key={href} href={href}>
              <p
                className={`uppercase tracking-widest transition-colors hover:text-primary-light ${
                  i === links.length - 1 ? "pb-4" : ""
                } ${pathname === href ? "text-primary font-medium" : ""}`}
              >
                {label}
              </p>
            </Link>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Header;
