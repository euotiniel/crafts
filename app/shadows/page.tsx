"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  ShoppingBag,
  ShoppingCart,
  Megaphone,
  FileText,
  PenTool,
  UserRound  
} from "lucide-react";

const bar = "bg-[#222] rounded-md";
const tile = "bg-[#191919] rounded-md border border-[#333]/60";

const tabs = [
  { label: "Marketing", icon: Megaphone },
  { label: "Product", icon: ShoppingCart },
  { label: "Design", icon: PenTool },
  { label: "Text", icon: FileText },
  { label: "Profile", icon: UserRound   },
];

export default function Page() {
  const [state, setState] = useState("Marketing");

  const getTabContent = () => {
    switch (state) {
      case "Marketing":
        return (
          <Card className="bottom-4 bg-neutral-200 w-[118px] h-[80px] rounded-md" />
        );
      case "Product":
        return (
          <Card className="top-[230px] -right-[294px] bg-neutral-200 w-[130px] h-[100px] rounded-md" />
        );
      case "Design":
        return (
          <Card className="top-[15px] right-[114px] bg-neutral-200 w-5 h-5 rounded-md" />
        );
      case "Text":
        return (
          <Card className="top-[195px] right-[16px] bg-neutral-200 w-[118px] h-3 rounded-md" />
        );
        
     case "Profile":
        return (
          <Card className="top-[12px] -right-[444px] bg-neutral-200 h-5 w-5 rounded-md" />
        );
      default:
        return null;
    }
  };

  return (
    <div>
      <div className="p-10">
        <div className="relative w-[650px] h-[440px] border border-[#333]/60 rounded-2xl p-5">
          <div className="w-full h-full border border-[#333]/60 rounded-xl flex overflow-hidden">
            <aside className="relative w-[160px] h-full border-r border-[#333]/60 flex flex-col justify-between p-4 bg-[#121212]">
              <div className="flex flex-col gap-4">
                <div className={`w-5 h-5 ${bar}`} />

                <div className="flex flex-col gap-3">
                  {Array.from({ length: 7 }).map((_, i) => (
                    <div key={i} className={`w-full h-3 ${bar}`} />
                  ))}
                </div>
              </div>

              {getTabContent()}
            </aside>

            <section className="w-[490px] h-full flex flex-col">
              <header className="h-[44px] border-b border-[#333]/60 py-2.5 px-3 flex items-center justify-end bg-[#121212]">
                <div className="flex items-center gap-2">
                  <div className={`w-[80px] h-[15px] ${bar}`} />
                  <div className={`w-5 h-5 ${bar}`} />
                </div>
              </header>

              <main className="p-5 flex flex-col gap-4">
                <div className="grid grid-cols-3 gap-4 mt-2">
                  {Array.from({ length: 6 }).map((_, i) => (
                    <div key={i} className="w-[130px]">
                      <div className={`w-[130px] h-[100px] ${tile} mb-2`} />
                      <div className="flex flex-col gap-2">
                        <div className={`w-[70px] h-[14px] ${bar}`} />
                        <div className={`w-[100px] h-[12px] ${bar}`} />
                      </div>
                    </div>
                  ))}
                </div>
              </main>
            </section>
          </div>
        </div>
      </div>

      <div className="w-full flex items-center justify-center gap-2">
        {tabs.map(({ label, icon: Icon }) => {
          const active = state === label;

          return (
            <button
              key={label}
              type="button"
              onClick={() => setState(label)}
              className={[
                "relative flex gap-2 items-center px-3 py-1.5 rounded-2xl text-sm font-medium transition-all cursor-pointer",
                "border",
                active
                  ? "bg-[#191919] text-white border-[#444]/30"
                  : "bg-transparent text-neutral-400 border-transparent hover:text-white hover:bg-[#151515]",
              ].join(" ")}
            >
              <Icon size={16} />
              {label}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function Card({ className }: { className?: string }) {
  return (
    <motion.div
      className={`absolute bg-neutral-200 ${className}`}
      layoutId="card"
      transition={{ duration: 0.3, ease: "easeInOut" }}
    />
  );
}
