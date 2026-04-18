"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export default function Page() {
	const [active, setActive] = useState("small");
	const [show, setShow] = useState(1);

	const next = () => {
		setShow((prev) => (prev >= 4 ? 1 : prev + 1));
	};

	const changeState = () => {
		setActive((prev) => (prev === "small" ? "large" : "small"));
	};

	const reset = () => {
		setActive("small");
		setShow(1);
		return 0;
	};

	const getNewAnimation = () => {
		switch (show) {
			case 1:
				return (
					<div className="relative w-full h-[90px] flex justify-center">
						<div className="absolute w-[80%] h-[80px] p-1.5 bg-[#121212] rounded-md border border-[#333]/60 z-0" />
						<div className="absolute top-1.5  w-[90%] h-[80px] bg-[#151515] rounded-md border border-[#333]/60 z-10" />
						<div className="relative top-3  w-full h-[80px] bg-[#191919] rounded-md border border-[#333]/60 z-20 shadow" />
					</div>
				);
			case 2:
				return (
					<div className="relative w-full h-[90px] flex justify-center">
						<div className="absolute w-[80%] h-[80px] p-1.5 bg-[#121212] rounded-md border border-[#333]/60 z-0" />
						<div className="absolute -top-14  w-[90%] h-[80px] bg-[#151515] rounded-md border border-[#333]/60 z-10" />
						<div className="absolute top-3  w-full h-[80px] bg-[#191919] rounded-md border border-[#333]/60 z-20 shadow" />
					</div>
				);

			case 3:
				return (
					<div className="w-full flex items-center justify-center">
						<div className="w-full h-[150px] p-1.5 bg-[#151515] rounded-md border border-[#333]/60" />
					</div>
				);

			default:
				return reset();
		}
	};

	return (
		<div>
			<div
				className={`w-[245px] h-[500px] bg-[#0d0d0d] rounded-4xl border-3 border-[#333]/60 flex justify-end items-end shadow-lg ${
					active === "small" ? "p-2" : "p-0"
				}`}
			>
				{active === "small" && (
					<motion.div
						layoutId="card"
						layout
						transition={{ duration: 0.15 }}
						className="w-full h-[200px] bg-[#191919] rounded-3xl border border-[#333]/60 p-4"
						onClick={changeState}
					>
						<div className="w-full flex items-start justify-between">
							<div className="w-full">
								<div className="w-full max-w-[60px] h-2.5 bg-[#222] rounded-md my-2.5" />
								<div className="w-full max-w-[100px] h-2 bg-[#222] rounded-md my-2.5" />
							</div>
							<X size={14} className="text-neutral-500" />
						</div>

						<div className="my-3 flex flex-col gap-1.5">
							<div className="w-full h-[45px] shadow bg-[#191919] rounded-md border border-[#333]/60 mb-2" />
							<div className="w-full h-[45px] shadow bg-[#191919] rounded-md border border-[#333]/60 mb-2" />
						</div>
					</motion.div>
				)}

          {active === "large" && (
				<AnimatePresence>
					<motion.div
						layoutId="card"
						layout
						transition={{ duration: 0.15 }}
						className="w-full h-[380px] bg-[#191919] rounded-[28.5px] border border-[#333]/60 "
					>
						<div className="w-full h-full flex flex-col justify-between p-5">
							<div className="flex items-start justify-between">
								<div className="w-full">
									<div className="w-full max-w-[90px] h-2.5 bg-[#222] rounded-md mb-2.5" />
									<div className="w-full max-w-[120px] h-2 bg-[#222] rounded-md" />
								</div>

								<button
									type="button"
									className="border border-[#333]/80 p-1 bg-[#222] rounded-full"
									onClick={changeState}
								>
									<X size={15} className="text-neutral-300" />
								</button>
							</div>

							<div className="flex flex-col gap-3.5">
								{getNewAnimation()}

								<div
									className={`flex flex-col gap-1.5 ${show === 4 ? `justify-end` : ``}`}
								>
									{show === 2 && (
										<div className="flex gap-1 my-1">
											<div className="w-full max-w-[10px] h-2 bg-[#222] rounded-md" />
											<div className="w-full max-w-[80px] h-2 bg-[#222] rounded-md" />
										</div>
									)}

									{Array.from({ length: show === 2 ? 3 : 4 }).map((_, i) => (
										<div key={i} className="w-full h-2 bg-[#222] rounded-md" />
									))}
								</div>
								<div className="w-full flex items-center justify-center">
									<button
										className="w-full h-[35px] p-1.5 bg-[#191919] rounded-md border border-[#333]/60 shadow-xs"
										type="button"
										onClick={next}
									>
										{" "}
									</button>
								</div>
							</div>
						</div>
					</motion.div>
        </AnimatePresence>
				)}
			</div>
		</div>
	);
}
