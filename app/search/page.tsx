"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState, useRef } from "react";
import { useOnClickOutside } from "usehooks-ts";

export default function SearchComponent() {
  const [open, setOpen] = useState(false);

  const ref = useRef<HTMLDivElement>(null);
  useOnClickOutside(ref as React.RefObject<HTMLDivElement>, () => setOpen(false));

  return (
    <div className="absolute h-[350px] flex justify-center items-center w-full">
      <motion.button
        layoutId="wrapper"
        transition={{
          type: "spring",
          bounce: 0.2,
        }}
        onClick={() => {
          setOpen(true);
        }}
        key="button"
        className="relative flex h-[36px] items-center rounded-full border border-[#e9e9e7] bg-white px-3 font-medium outline-none transform-gpu will-change-transform"
      >
        <motion.span layoutId="title" className="block text-sm">
          Search
        </motion.span>
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            ref={ref}
            layoutId="wrapper"
            transition={{
              type: "spring",
              bounce: 0.3,
            }}
            className="absolute top-[14px] w-[364px] overflow-hidden rounded-full bg-[#f5f6f7] p-0.5 shadow-[0_0_0_1px_rgba(0,0,0,0.08),0_2px_2px_rgba(0,0,0,0.04)] outline-none transform-gpu will-change-transform"
          >
            <motion.span
              className="absolute text-sm text-[#63635d] left-4 top-[12px]"
              layoutId="title"

            >
              Search...
            </motion.span>

            <form
              key="form"
              className="rounded-full border border-[#e6e7e8] bg-white"
            >
              <input
                autoFocus
                disabled
                className="w-full h-[40px] rounded-xl px-3 text-sm outline-none"
              />
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
