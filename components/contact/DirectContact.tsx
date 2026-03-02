"use client";

import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import React from "react";
import { motion } from "motion/react";

const DirectContact = () => {
  return (
    <motion.div
      className="space-y-12"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeInOut", delay: 0.1 }}
    >
      <div>
        <h1 className="text-2xl mb-6">Direct Contact</h1>
        <ul className="text-black/70 space-y-4">
          <li className="flex items-center gap-2">
            <MessageCircle className="text-primary" strokeWidth={1.5} />
            <a
              className="hover:text-primary-light hover:underline transition-colors"
              target="_blank"
              href="https://wa.me/2330200000000"
            >
              WhatsApp
            </a>
          </li>
          <li className="flex items-center gap-2">
            <Phone className="text-primary" strokeWidth={1.5} />
            <a
              className="hover:text-primary-light hover:underline transition-colors"
              href="tel:+2330200000000"
            >
              0200000000
            </a>{" "}
          </li>
          <li className="flex items-center gap-2">
            <Mail className="text-primary" strokeWidth={1.5} />
            <a
              className="hover:text-primary-light hover:underline transition-colors"
              href="mailto:hello@name.com"
            >
              hello@name.com
            </a>{" "}
          </li>
          <li className="flex items-center gap-2">
            <MapPin className="text-primary" strokeWidth={1.5} />
            <p>Spintex, Accra</p>
          </li>
        </ul>
      </div>
      <div className="bg-secondary/30 border border-black/10 p-8">
        <h1 className="text-xl mb-4">Working Hours</h1>
        <ul className="font-extralight space-y-2">
          <li>Monday - Friday: 9am - 6pm</li>
          <li>Saturday: 10am - 4pm</li>
          <li>Sunday: Closed</li>
        </ul>
      </div>
    </motion.div>
  );
};

export default DirectContact;
