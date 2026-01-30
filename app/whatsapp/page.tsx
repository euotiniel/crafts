"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { useOnClickOutside } from "usehooks-ts";
import { cn } from "@/lib/utils";

type ChatProps = {
  color?: keyof typeof colorMap;
  name: string;
  time: string;
  message: string;
};

const colorMap = {
  sky: "bg-gradient-to-tr to-sky-300 from-sky-500",
  cyan: "bg-gradient-to-tr to-cyan-300 from-cyan-500",
  blue: "bg-gradient-to-tr to-blue-300 from-blue-500",
  indigo: "bg-gradient-to-tr to-indigo-300 from-indigo-500",
  violet: "bg-gradient-to-tr to-violet-300 from-violet-500",
  teal: "bg-gradient-to-tr to-teal-300 from-teal-500",
};
export default function SearchComponent() {
  const [open, setOpen] = useState(false);

  const ref = useRef<HTMLDivElement>(null);
  useOnClickOutside(ref as React.RefObject<HTMLDivElement>, () =>
    setOpen(false)
  );

  useEffect(() => {
    if (!open) return;
    const scrollY = window.scrollY;
    const { style } = document.body;
    const previous = {
      overflow: style.overflow,
      position: style.position,
      top: style.top,
      width: style.width,
    };
    style.overflow = "hidden";
    style.position = "fixed";
    style.top = `-${scrollY}px`;
    style.width = "100%";

    return () => {
      style.overflow = previous.overflow;
      style.position = previous.position;
      const top = style.top;
      style.top = previous.top;
      style.width = previous.width;
      const y = parseInt(top || "0", 10) * -1;
      window.scrollTo(0, isNaN(y) ? 0 : y);
    };
  }, [open]);

  const messages = [
    { id: 1, sender: "other", size: "h-8 w-32" },
    { id: 2, sender: "other", size: "h-8 w-48" },
    { id: 3, sender: "user", size: "h-8 w-40" },
    { id: 5, sender: "other", size: "h-16 w-56" },
  ];

  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="fixed inset-0 bg-black/30 z-40 overscroll-none"
          />
        )}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        {open && (
          <div className="fixed inset-0 z-[9999] flex items-center justify-center">
            <motion.div
              ref={ref}
              layoutId="wrapper"
              transition={{ duration: 0.3 }}
              className="rounded-lg w-[280px] h-[250px] overflow-hidden bg-[#f5f6f7] p-0.5 shadow-[0_0_0_1px_rgba(0,0,0,0.08),0_0.5px_0.5px_rgba(0,0,0,0.04)] outline-none transform-gpu will-change-transform"
            >
              <motion.span
                className="absolute left-1/2 -translate-x-1/2 font-medium text-md"
                layoutId="title"
              >
                Otoniel Emanuel{" "}
              </motion.span>

              <div className="max-w-md mx-auto bg-white mt-8 p-4 space-y-2 relative z-[9999]">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${
                      message.sender === "user" ? "justify-end" : "justify-start"
                    }`}
                  >
                    <div
                      className={` ${message.size} rounded-2xl ${
                        message.sender === "user" ? "bg-blue-300" : "bg-gray-300"
                      }`}
                    />
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <div className="relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center">
          <Chat
            color="blue"
            name="Lydia Bauch"
            time="09:10"
            message="Hello, friend. I'm sending this me..."
          />
          <Chat
            color="indigo"
            name="Sidney Lehner V."
            time="09:10"
            message="Hello, friend. I'm sending this me..."
          />
          <Chat
            color="cyan"
            name="James Dach"
            time="09:10"
            message="Hello, friend. I'm sending this me..."
          />
          <Chat
            color="sky"
            name="Susie Schroeder MD"
            time="09:10"
            message="Hello, friend. I'm sending this me..."
          />
          <motion.button
            layoutId="wrapper"
            onClick={() => {
              setOpen(true);
            }}
            key="button"
            className="relative flex w-[300px] h-[36px] items-center gap-2.5 border-b-[0.1px] px-3 py-8 border-neutral-700/10 bg-white outline-none transform-gpu will-change-transform"
          >
            <motion.div>
              <motion.div className="h-12 w-12 rounded-full bg-gradient-to-br to-neutral-200  from-neutral-400 shadow-[0_0_0_1px_rgba(0,0,0,0.08),0_1px_1px_rgba(0,0,0,0.04)]" />
            </motion.div>
            <div className="w-full flex flex-col items-start -gap-2">
              <div className="w-full flex items-center justify-between">
                <motion.span layoutId="title" className="font-medium text-md">
                  Otoniel Emanuel
                </motion.span>
                <span className="text-xs">09:10</span>
              </div>
              <span className="text-xs">
                Hello, friend. I'm sending this me...
              </span>
            </div>
          </motion.button>
          <Chat
            color="teal"
            name="Frances Conroy"
            time="09:10"
            message="Hello, friend. I'm sending this me..."
          />
        </div>
      </div>
    </>
  );
}

function Chat({ color = "blue", name, time, message }: ChatProps) {
  return (
    <div className="relative flex w-[300px] h-[36px] items-center gap-2.5 border-b px-3 py-8 border-neutral-700/10 bg-white outline-none">
      <div>
        <div
          className={cn(
            "h-12 w-12 rounded-full shadow-[0_0_0_1px_rgba(0,0,0,0.08),0_1px_1px_rgba(0,0,0,0.04)]",
            colorMap[color]
          )}
        />
      </div>
      <div className="w-full flex flex-col items-start -gap-2">
        <div className="w-full flex items-center justify-between">
          <span className="font-medium text-md">{name}</span>
          <span className="text-xs">{time}</span>
        </div>
        <span className="text-xs">{message}</span>
      </div>
    </div>
  );
}