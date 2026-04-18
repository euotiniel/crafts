"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export default function Page() {
	const [active, setActive] = React.useState("small");
	const [show, setShow] = React.useState(1);

	const next = () => {
		setShow((prev) => (prev >= 3 ? 1 : prev + 1));
	};

	const changeState = () => {
		setActive((prev) => (prev === "small" ? "large" : "small"));
	};

	return (
		<div>
			<motion.div
				layout
				className={`w-61.25 h-125 bg-[#0d0d0d] rounded-4xl border-3 border-[#333]/60 flex justify-end items-end shadow-lg ${
					active === "small" ? "p-2" : "p-0"
				}`}
			>
				<AnimatePresence mode="wait">
					{active === "small" && (
						<motion.div
							key="small"
							layoutId="card"
							transition={{ duration: 0.12 }}
							className="w-full h-50 bg-[#191919] rounded-3xl border border-[#333]/60 p-4"
						>
							<div className="w-full flex items-start justify-between">
								<div className="w-full">
									<div className="w-full max-w-15 h-2.5 bg-[#222] rounded-md my-2.5" />
									<div className="w-full max-w-25 h-2 bg-[#222] rounded-md my-2.5" />
								</div>
								{/* <button
									title="close"
									type="button"
									className="border border-[#333]/80 p-0.5 bg-[#222] rounded-full"
								>
									<X size={15} className="text-neutral-300" />
								</button> */}
							</div>

							<div className="my-3 flex flex-col gap-1" onClick={changeState}>
								<div className="w-full h-12 shadow bg-[#191919] rounded-md border border-[#333]/60 mb-2" />
								<div className="w-full h-12 shadow bg-[#191919] rounded-md border border-[#333]/60 mb-2" />
							</div>
						</motion.div>
					)}

					{active === "large" && (
						<motion.div
							key="large"
							layoutId="card"
							transition={{ duration: 0.12 }}
							className="w-full h-100 bg-[#191919] rounded-[28.5px] border border-[#333]/60"
						>
							<div className="w-full h-full flex flex-col justify-between p-5">
								<div className="flex items-start justify-between">
									<div className="w-full">
										<div className="w-full max-w-22.5 h-2.5 bg-[#222] rounded-md mb-2.5" />
										<div className="w-full max-w-30 h-2 bg-[#222] rounded-md" />
									</div>

									<button
										title="close"
										type="button"
										className="border border-[#333]/80 p-1 bg-[#222] rounded-full"
										onClick={changeState}
									>
										<X size={15} className="text-neutral-300" />
									</button>
								</div>

								<div className="flex flex-col gap-3.5">
									<motion.div
										initial={{ opacity: 0 }}
										animate={{ opacity: 1 }}
										transition={{ delay: 0.01 }}
										className="relative w-full h-22.5 flex justify-center"
									>
										<div
											className={`absolute w-[80%] h-20 p-1.5 bg-[#121212] rounded-md border border-[#333]/60 z-0 ${show === 3 && "hidden"}`}
										/>
										<motion.div
											animate={{ y: show === 2 ? -60 : 0 }}
											transition={{ duration: 0.12 }}
											className="absolute w-[90%] h-20 top-1.5 bg-[#151515] rounded-md border border-[#333]/60 z-10"
										/>
										{show === 3 ? (
											<motion.div
												transition={{ duration: 0.12 }}
												layoutId="card-description"
												className="relative w-full bg-[#191919] rounded-md border border-[#333]/60 z-20 shadow h-37.5 -top-14.5"
											/>
										) : (
											<motion.div
												transition={{ duration: 0.12 }}
												layoutId="card-description"
												className="relative w-full bg-[#191919] rounded-md border border-[#333]/60 z-20 shadow h-20 top-3"
											/>
										)}
									</motion.div>

									<div className={`flex flex-col gap-1.5 ${show === 4 ? "justify-end" : ""}`}>
										{show === 2 && (
											<div className="flex gap-1">
												<div className="w-full max-w-2.5 h-2 bg-[#222] rounded-md" />
												<div className="w-full max-w-20 h-2 bg-[#222] rounded-md" />
											</div>
										)}

										{Array.from({ length: show === 2 ? 3 : 4 }).map((_, i) => (
											<div
												key={`${show === 2 ? "three" : "four"}-${i}`}
												className="w-full h-2 bg-[#222] rounded-md"
											/>
										))}
									</div>

									<div className="w-full flex items-center justify-center">
										<button
											className="w-full h-8.75 p-1.5 bg-[#191919] rounded-md border border-[#333]/60 shadow-xs"
											type="button"
											onClick={next}
										>
											{" "}
										</button>
									</div>
								</div>
							</div>
						</motion.div>
					)}
				</AnimatePresence>
			</motion.div>
		</div>
	);
}