import { Instagram, Mail, Phone } from "lucide-react";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="py-18 px-8 text-white bg-[#2a2522]">
      <div className="flex gap-8">
        <div className="flex-1">
          <h1 className="text-3xl mb-6">Name</h1>
          <p>
            Custom dresses tailored to perfection. Every stitch tells your
            story.
          </p>
        </div>
        <div className="flex-1">
          <h1 className="text-2xl mb-6">Quick Links</h1>
          <div className="space-y-6">
            <Link href={"/"}>
              <p className="hover:text-primary transition-colors">Home</p>
            </Link>
            <Link href={"/"}>
              <p className="hover:text-primary transition-colors">Styles</p>
            </Link>
            <Link href={"/"}>
              <p className="hover:text-primary transition-colors">Services</p>
            </Link>
            <Link href={"/"}>
              <p className="hover:text-primary transition-colors">About</p>
            </Link>
            <Link href={"/"}>
              <p className="hover:text-primary transition-colors">Contact</p>
            </Link>
          </div>
        </div>
        <div className="flex-1">
          <h1 className="text-2xl mb-6">Get in Touch</h1>
          <div className="space-y-3">
            <p className="flex items-center gap-2">
              <Phone size={16} />
              <a href="tel:+2330200000000">0200000000</a>
            </p>
            <p className="flex items-center gap-2">
              <Mail size={16} />
              <a href="mailto:hello@name.com">hello@name.com</a>
            </p>
            <p className="flex items-center gap-2">
              <Instagram size={16} />
              <a href="">@name</a>
            </p>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Footer;
