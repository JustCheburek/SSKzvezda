import type {ComponentPropsWithoutRef, PropsWithChildren} from "react";
import {cn} from "@server/cn";
import {H3} from "@components/text";
import Image, {ImageProps} from "next/image";

type Main = ComponentPropsWithoutRef<"main">

export function Main({children, className = "", ...props}: PropsWithChildren<Main>) {
	return (
			<main
					className={cn("container mx-auto", className)}
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
					className={cn("text-center my-4", children)}
					{...props}
			>
				{children}
			</div>
	)
}

type Box = {
	img?: boolean
} & ComponentPropsWithoutRef<"article">

export function Box({children, className = "", img = false, ...props}: PropsWithChildren<Box>) {
	return (
			<article
					className={cn(
							"relative flex flex-col justify-center items-center gap-4 border border-light-gray rounded-lg p-4 bg-neutral-100 dark:bg-gray",
							{"overflow-clip min-h-64": img},
							className
					)}
					{...props}
			>
				{children}
			</article>
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