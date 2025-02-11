"use client";

import {usePathname} from "next/navigation";
import Link, {LinkProps} from "next/link";
import {ComponentPropsWithoutRef, PropsWithChildren} from "react";
import {cn} from "@server/cn";

export type NavLinkProps = {
	activeClassName?: string
	exact?: boolean
} & LinkProps & ComponentPropsWithoutRef<"a">

export function NavLink(
		{
			href, children, activeClassName = "", className = "", exact = false, ...props
		}: PropsWithChildren<NavLinkProps>
) {
	const pathname = usePathname()
	if (href === "/") {
		exact = true
	}
	const isActive = exact ? pathname === href : pathname.startsWith(href)

	return (
			<Link
					href={href}
					className={cn(
							"text-xl",
							className,
							{[activeClassName]: isActive}
					)}
					{...props}
			>
				{children}
			</Link>
	)
}