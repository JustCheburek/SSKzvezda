import type {ComponentPropsWithoutRef, PropsWithChildren} from "react";
import {cn} from "@server/cn";
import {H3} from "@components/text";
import Image, {ImageProps} from "next/image";
import {Back} from "@components/back";
import Link, {LinkProps} from "next/link";

type Main = ComponentPropsWithoutRef<"main">

export function Main({children, className = "", ...props}: PropsWithChildren<Main>) {
	return (
			<main
					className={cn("container mx-auto px-2", className)}
					{...props}
			>
				{children}
			</main>
	)
}

type Container = ComponentPropsWithoutRef<"section">

export function Container({children, className = "", ...props}: PropsWithChildren<Container>) {
	return (
			<section
					className={cn("grid md:grid-cols-2 lg:grid-cols-3 gap-12 pt-6 pb-12", className)}
					{...props}
			>
				{children}
			</section>
	)
}

type Name = ComponentPropsWithoutRef<"div">

export function Name({children, className = "", ...props}: PropsWithChildren<Name>) {
	return (
			<div
					className={cn("grid grid-cols-10 items-center justify-center text-center my-4 px-4", className)}
					{...props}
			>
				<Back/>
				<div className="col-span-8">
					{children}
				</div>
			</div>
	)
}

type Box = ComponentPropsWithoutRef<"article">

export function Box({children, className = "", ...props}: PropsWithChildren<Box>) {
	return (
			<article
					className={cn(
							"relative flex flex-col gap-4 justify-center items-center border border-light-gray rounded-lg p-4 bg-neutral-100 dark:bg-gray",
							className
					)}
					{...props}
			>
				{children}
			</article>
	)
}

type Figure = {
	border?: boolean
	overflow?: boolean
} & ComponentPropsWithoutRef<"figure">

export function Figure({children, className = "", border = true, overflow=true, ...props}: Figure) {
	return (
			<figure
					className={cn(
							"relative flex flex-col gap-4 justify-center items-center rounded-lg min-h-80 size-full *:z-20 group",
							{"border border-light-gray bg-neutral-100 dark:bg-gray": border},
							{"overflow-clip": overflow},
							className
					)}
					{...props}
			>
				{children}
			</figure>
	)
}

type Heading = ComponentPropsWithoutRef<"h3">

export function Heading({children, className = "", ...props}: PropsWithChildren<Heading>) {
	return (
			<H3 className={cn("text-center", className)} {...props}>
				{children}
			</H3>
	)
}

export function Img({src, alt, fill = true, className = "", ...props}: ImageProps) {
	return (
			<Image
					src={src} alt={alt} fill={fill}
					className={cn("hover:scale-110 duration-500", className)}
					{...props}
			/>
	)
}

type Caption = {
	dir?: "rtl" | "ltr"
} & ComponentPropsWithoutRef<"figcaption">

export function Caption({children, dir = "rtl", className = "", ...props}: Caption) {
	return (
			<figcaption
					dir={dir}
					className={cn(
							"absolute start-0 bottom-0 bg-neutral-700/50 backdrop-blur-sm px-6 py-2 border-t border-light-gray",
							{"border-l rounded-tl-xl": dir === "rtl"},
							{"border-r rounded-tr-xl": dir === "ltr"},
							className
					)}
					{...props}
			>
				{children}
			</figcaption>
	)
}

export type StringDirections = {
	left?: string
	right?: string
}
export type BooleanDirections = {
	left?: boolean
	right?: boolean
}
export type ArrowLinkProps = LinkProps & ComponentPropsWithoutRef<"a"> & BooleanDirections
export const ArrowLink = (
		{
			className = "", left = false, right = false, ...props
		}: ArrowLinkProps) => (
		<Link
				className={cn(
						"size-12 text-black/90 dark:text-neutral-500/80 hover:text-unic transition-colors duration-300",
						className
				)}
				{...props}
		>
			<span
					className={cn(
							"size-full",
							{"icon-[heroicons--arrow-left-circle-16-solid]": left},
							{"icon-[heroicons--arrow-right-circle-16-solid]": right},
					)}
			/>
		</Link>
)