"use client";

import React from "react";
import { Clock10, RadioTower, Podcast } from "lucide-react";
import { FaStar, FaUnlockKeyhole } from "react-icons/fa6";
import { FaPause } from "react-icons/fa";
import { TbPlayerTrackNextFilled, TbFaceId } from "react-icons/tb";

import { AudioLinesIcon } from "@/components/audio-lines";

export default function DynamicIsland() {

  const [state1, setState1] = React.useState(true);
  const [state2, setState2] = React.useState(true);

  const setState = (state: string) => {
    if (state === "state1") {
      setState1((prev) => !prev);
    } else if (state === "state2") {
      setState2((prev) => !prev);
    }
  };

  return (
    <div className="h-screen w-full flex justify-center items-center bg-white">
      <div className="flex flex-col items-center gap-5">
         <div>
          <div className="bg-black h-[30px] w-[100px] rounded-full"> </div>
        </div>

        <div className="bg-black h-[35px] w-[170px] rounded-full flex items-center justify-between py-2 px-3">
          <FaUnlockKeyhole className="text-white" size={16} />
          <TbFaceId className="text-green-500 rounded-2xl" size={23} />
        </div>

        <div className="bg-black w-[300px] rounded-[40px] flex flex-col px-5 pt-6 pb-3.5 gap-4">
          <div className="flex items-center gap-4">
            <RadioTower className="text-green-500" size={38} />
            <div className="text-white">
              <h2 className="text-sm font-medium">
                Cellular Data is Turned Off
              </h2>
              <p className="text-sm text-neutral-300">
                Turn on cellular data or use Wi-Fi to access data.
              </p>
            </div>
          </div>
          <div className="w-full flex items-center gap-2">
            <button className="w-full rounded-full bg-neutral-500 text-white font-semibold py-1 cursor-pointer">
              OK
            </button>
            <button className="w-full rounded-full bg-blue-500/30 text-blue-400 font-semibold py-1 cursor-pointer">
              Settings
            </button>
          </div>
        </div>

        <div className="flex items-center justify-center gap-2">
          <div className="bg-black h-[35px] w-[170px] rounded-full flex items-center justify-between p-2">
            <div className="bg-gradient-to-r from-blue-400 via-red-500 to-pink-500 h-[20px] w-[20px] rounded-md " />
            <AudioLinesIcon className="text-white" size={20} />
          </div>
          <div className="bg-black h-[31px] w-[31px] rounded-full flex items-center justify-center">
            <Clock10 className="text-yellow-500" size={20} />
          </div>
        </div>

        <div className="bg-black w-[300px] rounded-[40px] flex flex-col px-5 pt-6 pb-3.5 gap-4">
          <div className="flex items-center gap-4">
            <div className="bg-gradient-to-r from-blue-400 via-red-500 to-pink-500 h-[55px] min-w-[55px] rounded-xl " />
            <div className="text-white flex items-start justify-between w-full">
              <div>
                <h2 className="text-md font-medium">I miss you</h2>
                <p className="text-sm text-neutral-300">CrisTheRap</p>
              </div>
              <AudioLinesIcon className="text-white" size={20} />
            </div>
          </div>
          <div className="w-full flex items-center text-neutral-400 gap-1.5">
            <span className="text-xs">0:11</span>
            <div className="w-full bg-neutral-600/70 h-[5.5px] rounded-full">
              <div className="w-[45%] bg-white h-[5.5px] rounded-full rounded-r-none"></div>
            </div>{" "}
            <span className="text-xs">-4:13</span>
          </div>
          <div className="w-full flex items-center justify-between gap-2">
            <FaStar className="text-neutral-400" size={20} />
            <div className="flex gap-5">
              <TbPlayerTrackNextFilled
                className="text-white rotate-180"
                size={23}
              />
              <button className="">
                <FaPause className="text-white" size={25} />
              </button>
              <TbPlayerTrackNextFilled className="text-white" size={23} />
            </div>
            <Podcast className="text-neutral-400" size={20} />
          </div>

        
        </div>
        <div>
          <button onClick={() => setState("state1")} className="bg-black text-white px-4 py-2 rounded-full">
            Close
          </button>
        </div>
      </div>
       
    </div>
  );
}
