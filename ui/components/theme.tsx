"use client";

import {motion as m} from "framer-motion"
import {useTheme} from "next-themes";
import {cn} from "@server/cn";

const raysVariants = {
	hidden: {
		strokeOpacity: 0,
		transition: {
			staggerChildren: 0.05,
			staggerDirection: -1,
		},
	},
	visible: {
		strokeOpacity: 1,
		transition: {
			staggerChildren: 0.05,
		},
	},
};

const rayVariant = {
	hidden: {
		pathLength: 0,
		opacity: 0,
		scale: 0
	},
	visible: {
		pathLength: 1,
		opacity: 1,
		scale: 1,
		transition: {
			duration: 0.6,
			ease: "easeOut",
			opacity: {duration: 0.3},
			pathLength: {duration: 0.5},
			scale: {duration: 0.4}
		}
	},
};

const shineVariant = {
	hidden: {
		opacity: 0,
		scale: 1.6,
		strokeDasharray: "20, 1000",
		strokeDashoffset: 0,
		filter: "blur(0px)",
	},
	visible: {
		opacity: [0, 1, 0],
		strokeDashoffset: [0, -50, -100],
		filter: ["blur(2px)", "blur(2px)", "blur(0px)"],
		transition: {
			duration: 0.75,
			delay: 0.5,
			ease: 'linear'
		},
	},
};

const sunPath =
		"M70 49.5C70 60.8218 60.8218 70 49.5 70C38.1782 70 29 60.8218 29 49.5C29 38.1782 38.1782 29 49.5 29C60 29 69.5 38 70 49.5Z";
const moonPath =
		"M70 49.5C70 60.8218 60.8218 70 49.5 70C38.1782 70 29 60.8218 29 49.5C29 38.1782 38.1782 29 49.5 29C39 45 49.5 59.5 70 49.5Z"

export function ThemeButton() {
	const {theme, setTheme} = useTheme();

	if (!theme) return

	const isDark = theme === "dark"
	const isLight = theme === "light"

	return (
			<button
					onClick={() => {
						isDark ? setTheme("light") : setTheme("dark")
					}}
			>
				<m.svg
						strokeWidth="3"
						strokeLinecap="round"
						width={50}
						height={50}
						viewBox="0 0 100 100"
						className={cn(
								'duration-1000',
								{"text-yellow-600": isLight},
								{"text-blue-400": isDark}
						)}
						stroke="currentColor"
						fill="currentColor"
				>
					{/* Солнце и луна */}
					<m.g
							initial={{ rotate: 0 }}
							animate={isDark ? { rotate: -360 } : { rotate: 0 }}
							transition={{ duration: 1, type: "spring" }}
							style={{transformBox: "fill-box"}}
					>
						<m.path
								transition={{duration: 1, type: "spring"}}
								initial={{fillOpacity: 0, strokeOpacity: 0}}
								animate={isDark
										? {
											d: moonPath,
											scale: 1.6,
											fillOpacity: 0.35,
											strokeOpacity: 1,
											translateX: "-30%",
											translateY: "-30%",
										}
										: {
											d: sunPath,
											fillOpacity: 0.35,
											strokeOpacity: 1,
											translateX: 0,
											translateY: 0,
										}
								}
						/>
					</m.g>

					{/* Лучи */}
					<m.g
							variants={raysVariants}
							initial='hidden'
							animate={isLight ? "visible" : "hidden"}
					>
						<m.path variants={rayVariant} d="M50 2V11"/>
						<m.path variants={rayVariant} d="M85 15L78 22"/>
						<m.path variants={rayVariant} d="M98 50H89"/>
						<m.path variants={rayVariant} d="M85 85L78 78"/>
						<m.path variants={rayVariant} d="M50 98V89"/>
						<m.path variants={rayVariant} d="M23 78L16 84"/>
						<m.path variants={rayVariant} d="M11 50H2"/>
						<m.path variants={rayVariant} d="M23 23L16 16"/>
					</m.g>

					{/* Подсветка луны */}
					<m.path
							variants={shineVariant}
							d={moonPath}
							className="text-blue-100 translate-x-[-25%] translate-y-[-25%]"
							initial="hidden"
							animate={isDark ? 'visible' : "hidden"}
							fill="none"
					/>
				</m.svg>
			</button>
	)
}