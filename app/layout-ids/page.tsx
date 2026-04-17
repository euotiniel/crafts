"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export default function Page() {
  const [active, setActive] = useState("small");

  const changeState = () => {
    setActive((prev) => (prev === "small" ? "large" : "small"));
  };

  return (
    <div className="">
      <div
        className={`w-[245px] h-[500px] bg-[#0d0d0d] rounded-4xl border-3 border-[#333]/60 flex justify-end items-end ${
          active === "small" ? "p-3" : "p-0"
        }`}
      >
        {active === "small" && (
          <motion.div
            layoutId="card"
            layout
            transition={{ duration: 0.15 }}
            className="w-full h-[200px] bg-[#191919] rounded-2xl border border-[#333]/60 p-4"
            onClick={changeState}
          >
            <div className="w-full flex items-center justify-between">
              <h4 className="text-sm font-medium text-neutral-300">
                Small Card
              </h4>
              <div>
                <X size={14} className="text-neutral-300" />
              </div>
            </div>
          </motion.div>
        )}

        {active === "large" && (
          <motion.div
            layoutId="card"
            layout
            transition={{ duration: 0.15 }}
            className="w-full h-[450px] bg-[#191919] rounded-[28.5px] shadow-2xl border border-[#333]/60"
            onClick={changeState}
          >
            <div className="flex flex-col gap-10 p-5">
              <div className="flex items-center justify-center">
                    <div className="w-[100px] h-[50px] p-2.5 bg-[#121212] rounded-md border border-[#333]/60">
                <div className="w-[100px] h-[50px] bg-[#191919] rounded-md border border-[#333]/60"></div>
              </div>
              </div>
              <div className="flex flex-col gap-1.5">
                {Array.from({ length: 7 }).map((_, i) => (
                  <div key={i} className="w-full h-2 bg-[#222] rounded-md" />
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}

//         <div className="w-full h-[50px] bg-[#191919] rounded-2xl border border-[#333]/60"></div>
