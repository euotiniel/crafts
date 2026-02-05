"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  FolderKanban,
  Code2,
  Palette,
  Megaphone,
  DollarSign,
} from "lucide-react";

const TAB_COLORS: Record<string, { text: string; glow: string; bg: string }> = {
  Project: {
    text: "text-amber-300",
    glow: "shadow-amber-300/40",
    bg: "bg-amber-300/10",
  },
  Engineering: {
    text: "text-green-300",
    glow: "shadow-green-300/40",
    bg: "bg-green-300/10",
  },
  Design: {
    text: "text-cyan-300",
    glow: "shadow-cyan-300/40",
    bg: "bg-cyan-300/10",
  },
  Marketing: {
    text: "text-pink-300",
    glow: "shadow-pink-300/40",
    bg: "bg-pink-300/10",
  },
  Sales: {
    text: "text-purple-300",
    glow: "shadow-purple-300/40",
    bg: "bg-purple-300/10",
  },
};

const TABS = [
  "Project",
  "Engineering",
  "Design",
  "Marketing",
  "Sales",
] as const;

const TAB_ICONS: Record<(typeof TABS)[number], React.ElementType> = {
  Project: FolderKanban,
  Engineering: Code2,
  Design: Palette,
  Marketing: Megaphone,
  Sales: DollarSign,
};

export default function SharedLayoutPage() {
  const [state, setState] = useState<(typeof TABS)[number]>("Project");

  const getTabContent = () => {
    switch (state) {
      case "Project":
        return <Circle className="bg-amber-300" />;
      case "Engineering":
        return <Circle className="top-8 -right-5 bg-green-300" />;
      case "Design":
        return <Circle className="size-32 bottom-8 -right-5 bg-cyan-300" />;
      case "Marketing":
        return <Circle className="bottom-8 -left-5 bg-pink-300" />;
      case "Sales":
        return <Circle className="top-8 -left-5 bg-purple-300" />;
      default:
        return null;
    }
  };

  const wrapperBg = TAB_COLORS[state].bg;

  return (
    <div className="flex items-center justify-center bg-black w-full h-screen">
      {/* Círculo central */}
      <div
        className={`relative size-64 rounded-full flex items-center justify-center ${wrapperBg}`}
      >
        {getTabContent()}
      </div>

      {/* Tabs liquid glass */}
      <div className="fixed bottom-12 flex gap-3 rounded-2xl p-2
        bg-white/5 backdrop-blur-xl border border-white/10 shadow-lg"
      >
        {TABS.map((tab) => {
          const isActive = tab === state;
          const Icon = TAB_ICONS[tab];
          const { text, glow } = TAB_COLORS[tab];

          return (
            <button
              key={tab}
              title={tab}
              onClick={() => setState(tab)}
              className={`
                relative flex items-center justify-center
                size-12 rounded-xl transition-all duration-300
                backdrop-blur-xl
                bg-white/10 border border-white/15
                hover:bg-white/15 hover:scale-105
                active:scale-95
                ${isActive ? `${text} shadow-md ${glow}` : "text-neutral-300"}
              `}
            >
              {/* highlight */}
              <span className="pointer-events-none absolute inset-0 rounded-xl
                bg-gradient-to-br from-white/30 via-transparent to-transparent opacity-40"
              />

              <Icon className="relative size-5" />
            </button>
          );
        })}
      </div>
    </div>
  );
}

function Circle({ className }: { className?: string }) {
  return (
    <motion.div
      layoutId="circle"
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className={`absolute size-16 rounded-full ${className}`}
    />
  );
}
