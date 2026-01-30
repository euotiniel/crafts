"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState, useRef } from "react";

export default function SearchComponent() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const handleToggle = () => {
    setOpen(!open);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAdd = () => {
    setOpen(false);
  };

  const handleClickOutside = (e: React.MouseEvent) => {
    if (ref.current && !ref.current.contains(e.target as Node)) {
      setOpen(false);
    }
  };

  return (
    <div className="absolute h-[350px] flex justify-center items-center w-full" onClick={handleClickOutside}>
      <AnimatePresence mode="wait">
        {!open ? (
          <motion.button
            key="compact"
            layoutId="search-wrapper"
            onClick={handleToggle}
            className="relative flex h-[36px] w-auto items-center rounded-full border border-[#e9e9e7] bg-white px-3 font-medium outline-none shadow-xs transform-gpu will-change-transform"
            transition={{
              type: "tween",
              ease: [0.25, 0.46, 0.45, 0.94],
              duration: 0.25,
            }}
          >
            <motion.span
              layoutId="search-label"
              className="block text-sm text-neutral-700"
              transition={{
              type: "tween",
              ease: [0.25, 0.46, 0.45, 0.94],
              duration: 0.35,
            }}
            >
              Add new user
            </motion.span>
          </motion.button>
        ) : (
          <motion.div
            key="expanded"
            ref={ref}
            layoutId="search-wrapper"
            onClick={(e) => e.stopPropagation()}
            className="relative flex flex-col gap-3 w-[320px] p-3 rounded-2xl bg-white border border-[#e9e9e7] shadow-sm outline-none transform-gpu will-change-transform"
            transition={{
              type: "tween",
              ease: [0.25, 0.46, 0.45, 0.94],
              duration: 0.25
            }}
          >
            <div className="flex items-center justify-between">
              <motion.span
                layoutId="search-label"
                className="text-sm font-medium text-neutral-900"
                transition={{
                  type: "tween",
                  ease: [0.25, 0.46, 0.45, 0.94],
                  duration: 0.25
                }}
              >
                Add new user
              </motion.span>

              <button
                onClick={handleClose}
                className="flex items-center justify-center w-6 h-6 rounded-full hover:bg-gray-100 transition-colors"
              >
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="text-gray-500">
                  <path d="M9 3L3 9M3 3L9 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </button>
            </div>

            <motion.div
            >

              <input
                autoFocus
                className="w-full h-[32px] rounded-lg px-3 text-sm outline-none bg-white border border-[#e6e7e8]"
                placeholder="Username"
              />
            </motion.div>

            <button
              onClick={handleAdd}
              className="w-full h-[32px] bg-gradient-to-b to-blue-400 from-blue-500 border-2 border-blue-400 text-white text-sm font-medium rounded-lg cursor-pointer"
            >
              Add user
            </button>

          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}