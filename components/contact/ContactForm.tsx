"use client";

import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useEffect, useRef, useState, useCallback } from "react";
import { useSearchParams } from "next/navigation";

const TYPES = [
  { value: "custom", option: "Custom Tailoring" },
  { value: "alteration", option: "Alterations" },
  { value: "consultation", option: "Consultation" },
  { value: "other", option: "Other" },
];

const PLACEHOLDER = { value: "", option: "Select a service" };

const inputClass =
  "w-full border border-border px-4 py-3 focus-visible:border-primary focus-visible:outline-0 bg-background transition-colors";

const labelClass = "uppercase text-muted tracking-[0.15rem] text-sm";

const ContactForm = () => {
  const searchParams = useSearchParams();
  const [type, setType] = useState(() => {
    const paramType = searchParams.get("type");
    return TYPES.find((t) => t.value === paramType) ?? PLACEHOLDER;
  });
  const [message, setMessage] = useState(
    () => searchParams.get("message") ?? "",
  );
  const [isOpen, setIsOpen] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const selectRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  // Track focusedIndex in a ref so key handlers always see the latest value
  const focusedIndexRef = useRef(-1);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (selectRef.current && !selectRef.current.contains(e.target as Node)) {
        setIsOpen(false);
        setFocusedIndex(-1);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Keep ref in sync with state so callbacks always read the latest index
  const updateFocusedIndex = useCallback((index: number) => {
    focusedIndexRef.current = index;
    setFocusedIndex(index);
  }, []);

  // Scroll focused item into view whenever focusedIndex changes
  useEffect(() => {
    if (focusedIndex < 0 || !listRef.current) return;
    const item = listRef.current.children[focusedIndex] as
      | HTMLElement
      | undefined;
    item?.scrollIntoView({ block: "nearest" });
  }, [focusedIndex]);

  const openDropdown = useCallback(
    (startIndex?: number) => {
      const selectedIndex = TYPES.findIndex((t) => t.value === type.value);
      const index = startIndex ?? (selectedIndex >= 0 ? selectedIndex : 0);
      updateFocusedIndex(index);
      setIsOpen(true);
      // Focus the list on the next frame so it exists in the DOM
      requestAnimationFrame(() => listRef.current?.focus());
    },
    [type.value, updateFocusedIndex],
  );

  const closeDropdown = useCallback(
    (returnFocus = true) => {
      setIsOpen(false);
      updateFocusedIndex(-1);
      if (returnFocus) triggerRef.current?.focus();
    },
    [updateFocusedIndex],
  );

  const handleSelect = useCallback(
    (t: typeof PLACEHOLDER) => {
      setType(t);
      closeDropdown();
    },
    [closeDropdown],
  );

  const handleTriggerKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      switch (e.key) {
        case "Enter":
        case " ":
        case "ArrowDown":
          e.preventDefault();
          openDropdown();
          break;
        case "ArrowUp":
          e.preventDefault();
          openDropdown(TYPES.length - 1);
          break;
        case "Escape":
          closeDropdown();
          break;
      }
    },
    [openDropdown, closeDropdown],
  );

  const handleListKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      // Read from ref so we always have the latest index without stale closures
      const current = focusedIndexRef.current;
      switch (e.key) {
        case "ArrowDown":
          e.preventDefault();
          updateFocusedIndex((current + 1) % TYPES.length);
          break;
        case "ArrowUp":
          e.preventDefault();
          updateFocusedIndex((current - 1 + TYPES.length) % TYPES.length);
          break;
        case "Enter":
        case " ":
          e.preventDefault();
          if (current >= 0) handleSelect(TYPES[current]);
          break;
        case "Escape":
          e.preventDefault();
          closeDropdown();
          break;
        case "Tab":
          closeDropdown(false);
          break;
        // Jump to item by first letter
        default:
          if (e.key.length === 1) {
            const match = TYPES.findIndex((t) =>
              t.option.toLowerCase().startsWith(e.key.toLowerCase()),
            );
            if (match >= 0) updateFocusedIndex(match);
          }
      }
    },
    [handleSelect, closeDropdown, updateFocusedIndex],
  );

  return (
    <div className="w-full py-4 h-full">
      <form className="space-y-6" action="">
        {/* Name */}
        <div>
          <label className={labelClass} htmlFor="name">
            Name
          </label>
          <input
            required
            type="text"
            name="name"
            id="name"
            className={inputClass}
          />
        </div>

        {/* Phone + Email */}
        <div className="grid gap-x-8 gap-y-6 sm:gap-y-0 sm:grid-cols-2">
          <div>
            <label className={labelClass} htmlFor="phone">
              Phone
            </label>
            <input
              required
              type="tel"
              name="phone"
              id="phone"
              className={inputClass}
            />
          </div>
          <div>
            <label className={labelClass} htmlFor="email">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className={inputClass}
            />
          </div>
        </div>

        {/* Custom Select */}
        <div>
          <label className={labelClass} htmlFor="type">
            Type of Request
          </label>
          <div className="relative" ref={selectRef}>
            {/* Trigger */}
            <button
              ref={triggerRef}
              type="button"
              id="type"
              aria-haspopup="listbox"
              aria-expanded={isOpen}
              aria-controls="type-listbox"
              aria-label={`Type of request: ${type.option}`}
              onClick={() => (isOpen ? closeDropdown() : openDropdown())}
              onKeyDown={handleTriggerKeyDown}
              className={`w-full flex items-center justify-between px-4 py-3 border bg-background transition-colors cursor-pointer focus-visible:outline-none focus-visible:border-primary ${
                isOpen
                  ? "border-primary border-b-background z-20 relative"
                  : "border-border"
              } ${type.value === "" ? "text-muted" : "text-foreground"}`}
            >
              <span>{type.option}</span>
              <motion.span
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
                className="text-muted"
              >
                <ChevronDown size={18} />
              </motion.span>
            </button>

            {/* Dropdown */}
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  key="dropdown"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="absolute w-full z-10 border border-primary border-t-0 bg-background overflow-hidden"
                >
                  <ul
                    ref={listRef}
                    id="type-listbox"
                    role="listbox"
                    aria-label="Type of request"
                    aria-activedescendant={
                      focusedIndex >= 0
                        ? `type-option-${TYPES[focusedIndex].value}`
                        : undefined
                    }
                    onKeyDown={handleListKeyDown}
                    tabIndex={-1}
                  >
                    {TYPES.map((t, i) => (
                      <li
                        key={t.value}
                        id={`type-option-${t.value}`}
                        role="option"
                        aria-selected={t.value === type.value}
                        onClick={() => handleSelect(t)}
                        onMouseEnter={() => setFocusedIndex(i)}
                        className={`px-4 py-3 cursor-pointer transition-colors ${
                          t.value === type.value
                            ? "bg-primary text-white"
                            : focusedIndex === i
                              ? "bg-secondary text-foreground"
                              : "text-foreground"
                        }`}
                      >
                        {t.option}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Message */}
        <div>
          <label className={labelClass} htmlFor="message">
            Message
          </label>
          <textarea
            required
            name="message"
            id="message"
            rows={5}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className={inputClass}
          />
        </div>

        <button
          type="submit"
          className="btn w-full bg-primary hover:bg-primary-dark"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
