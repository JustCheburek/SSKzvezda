"use client";
import {cn} from "@server/cn";
import {usePathname} from "next/navigation";
import {ArrowLink} from "@components/basic";
import {ComponentPropsWithoutRef} from "react";

type Back = ComponentPropsWithoutRef<"a">
export function Back({className = "", ...props}: Back) {
	const path = usePathname().slice(1)

	return (
			<ArrowLink
					href={`/#${path}`}
					className={cn("text-center my-4", className)}
					title="Назад"
					left
					{...props}
			/>
	)
}