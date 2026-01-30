"use client";
import { motion } from "framer-motion";
import { useState } from "react";

const TAB_COLORS: Record<string, { text: string; bg: string }> = {
  Project: { text: "text-amber-300", bg: "bg-amber-300/10" },
  Engineering: { text: "text-green-300", bg: "bg-green-300/10" },
  Design: { text: "text-cyan-300", bg: "bg-cyan-300/10" },
  Marketing: { text: "text-pink-300", bg: "bg-pink-300/10" },
  Sales: { text: "text-purple-300", bg: "bg-purple-300/10" },
};

export default function SharedLayoutPage() {
  const [state, setState] = useState("Project");

  const getTabContent = () => {
    switch (state) {
      case "Project":
        return <Circle className="size-16 bg-amber-300" />;
      case "Engineering":
        return <Circle className="size-16 top-8 -right-5 bg-green-300" />;
      case "Design":
        return <Circle className="size-32 bottom-8 -right-5 bg-cyan-300" />;
      case "Marketing":
        return <Circle className="size-16 bottom-8 -left-5 bg-pink-300" />;
      case "Sales":
        return <Circle className="size-16 top-8 -left-5 bg-purple-300" />;
      default:
        return null;
    }
  };

  const wrapperBg = TAB_COLORS[state]?.bg ?? "";

  return (
    <div className="flex items-center justify-center bg-black w-full h-screen">
      <div
        className={`relative size-64 rounded-full flex items-center justify-center ${wrapperBg}`}
      >
        {getTabContent()}
      </div>

      <div className="flex items-center fixed bottom-15 gap-2">
        {["Project", "Engineering", "Design", "Marketing", "Sales"].map(
          (tabs) => {
            const isActive = tabs === state;
            const activeText = TAB_COLORS[tabs]?.text ?? "text-white";
            return (
              <button
                key={tabs}
                className={`p-3 cursor-pointer text-md font-medium transition-colors ${isActive ? activeText : "text-neutral-200"}`}
                onClick={() => setState(tabs)}
              >
                {tabs}
              </button>
            );
          },
        )}
      </div>
    </div>
  );
}

function Circle({ className }: { className?: string }) {
  return (
    <motion.div
      className={`absolute size-16 rounded-full ${className}`}
      layoutId="circle"
      transition={{ duration: 0.5, ease: "easeInOut" }}
    />
  );
}
