"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import StyleCard from "./StyleCard";
import { ALL_STYLES_QUERY_RESULT } from "@/sanity.types";
import { motion, AnimatePresence } from "motion/react";

type StyleItem = ALL_STYLES_QUERY_RESULT[number] & { imageUrl: string };

const LABELS: Record<string, string> = {
  casual: "Casual",
  formal: "Formal",
  evening: "Evening",
  bridal: "Bridal",
  traditional: "Traditional",
  other: "Other",
};

export default function StylesClient({
  styles,
  failed,
}: {
  styles: StyleItem[];
  failed: boolean;
}) {
  const router = useRouter();
  const [active, setActive] = useState<string>("all");

  if (failed) {
    return (
      <div className="flex flex-col items-center justify-center py-36 gap-6 text-center">
        <p className="text-muted tracking-widest uppercase text-sm">
          Could not load styles. Please try again.
        </p>
        <button
          onClick={() => router.refresh()}
          className="btn border border-primary text-primary hover:bg-primary hover:text-white"
        >
          Try Again
        </button>
      </div>
    );
  }

  const types = [
    "all",
    ...Array.from(
      new Set(styles.map((s) => s.styleType ?? "").filter(Boolean)),
    ),
  ];

  const filtered =
    active === "all"
      ? styles
      : styles.filter((s) => (s.styleType ?? "") === active);

  return (
    <div className="px-8 pt-16 pb-36">
      {/* Filter buttons */}
      <div className="gap-4 w-fit pb-16 flex flex-wrap items-center mx-auto">
        {types.map((type) => (
          <button
            key={type}
            onClick={() => setActive(type ?? "")}
            className={`btn text-sm px-6 tracking-widest py-2 border transition-colors ${
              active === type
                ? "bg-primary text-white border-primary"
                : "text-black/60 border-black/40 hover:text-primary hover:border-primary"
            }`}
          >
            {type === "all" ? "All" : (LABELS[type ?? ""] ?? type)}
          </button>
        ))}
      </div>

      {/* Grid */}
      <motion.div
        layout
        className="gap-8 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 grid"
      >
        <AnimatePresence mode="popLayout">
          {filtered.map((s) => (
            <motion.div
              key={s._id}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{
                duration: 0.3,
                ease: "easeInOut",
              }}
            >
              <StyleCard
                name={s.name ?? ""}
                description={s.description ?? ""}
                type={LABELS[s.styleType ?? ""] ?? s.styleType ?? ""}
                image={s.imageUrl}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {filtered.length === 0 && (
        <p className="text-center text-muted tracking-widest uppercase text-sm py-16">
          No styles found
        </p>
      )}

      <div className="mt-16">
        <p className="text-sm text-center text-black/60 italic">
          * All designs shown are for inspiration. Each piece is custom-made to
          your measurements and preferences.
        </p>
      </div>
    </div>
  );
}
