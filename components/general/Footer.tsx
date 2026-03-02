import { Instagram, Mail, Phone } from "lucide-react";
import Link from "next/link";
import React from "react";

const links = [
  { label: "Home", href: "/" },
  { label: "Styles", href: "/styles" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const Footer = () => {
  return (
    <div className="py-10 px-8 space-y-8 text-white bg-[#2a2522]">
      <div className="flex flex-col sm:flex-row gap-10 sm:gap-8">
        <div className="flex-1">
          <h1 className="text-3xl mb-4">Name</h1>
          <p className="text-white/80 max-w-xs">
            Custom dresses tailored to perfection. Every stitch tells your
            story.
          </p>
        </div>
        <div className="flex-1">
          <h1 className="text-2xl mb-4">Quick Links</h1>
          <div className="flex tracking-widest flex-col">
            {links.map((link) => (
              <Link key={link.href} href={link.href}>
                <p className="hover:text-primary-light font-extralight hover:underline transition-colors">
                  {link.label}
                </p>
              </Link>
            ))}
          </div>
        </div>
        <div className="flex-1">
          <h1 className="text-2xl mb-4">Get in Touch</h1>
          <div className="space-y-3 font-extralight">
            <p className="flex items-center gap-2">
              <Phone size={16} strokeWidth={1} />
              <a
                className="hover:text-primary-light hover:underline transition-colors"
                href="tel:+2330200000000"
              >
                0200000000
              </a>
            </p>
            <p className="flex items-center gap-2">
              <Mail size={16} strokeWidth={1} />
              <a
                className="hover:text-primary-light hover:underline transition-colors"
                href="mailto:hello@name.com"
              >
                hello@name.com
              </a>
            </p>
            <p className="flex items-center gap-2">
              <Instagram size={16} strokeWidth={1} />
              <a
                className="hover:text-primary-light hover:underline transition-colors"
                href=""
              >
                @name
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="border-t border-white/50 place-content-center pt-8">
        <p className="text-center text-sm text-white/60">
          © 2026 Name. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
