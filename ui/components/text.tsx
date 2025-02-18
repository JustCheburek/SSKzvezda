import {ComponentPropsWithoutRef, PropsWithChildren} from "react";
import {cn} from "@server/cn";

type TextProps = PropsWithChildren<{
	className?: string
}>

export const H1 = (
		{children, className, color = true}: TextProps & { color?: boolean }
) => (
		<h1 className={cn(
				"text-5xl xs:text-7xl md:text-8xl xl:text-9xl font-semibold",
				{"text-unic": color},
				className
		)}>
			{children}
		</h1>
);

export const H2 = (
		{children, className, color = false}: TextProps & { color?: boolean }
) => (
		<h2 className={cn(
				"text-3xl xs:text-4xl font-medium",
				{"dark:text-neutral-100": !color},
				{"text-unic": color},
				className
		)}>
			{children}
		</h2>
);

export const H3 = (
		{children, className}: TextProps
) => (
		<h3 className={cn(
				"text-xl dark:text-neutral-200/90 font-semibold",
				className
		)}>
			{children}
		</h3>
);

export const P = (
		{children, className, ...props}: PropsWithChildren<ComponentPropsWithoutRef<"p">>
) => (
		<p className={cn(
				"",
				className
		)} {...props}>
			{children}
		</p>
);

export const Small = (
		{children, className}: TextProps
) => (
		<small className={cn(
				"dark:text-neutral-400",
				className
		)}>
			{children}
		</small>
);

export const BlockQuote = (
		{children, className}: TextProps
) => (
		<blockquote className={cn(
				"text-sm mx-2 mt-2",
				className
		)}>
			{children}
		</blockquote>
)

export const Ul = (
		{children, className}: TextProps
) => (
		<ul className={cn(
				"grid gap-1.5 ml-8 list-disc marker:text-neutral-300/70",
				className
		)}>
			{children}
		</ul>
)