import {NavLink} from "@components/navlink";
import {PropsWithChildren} from "react";
import Link from "next/link";
import Image from "next/image";

function HeaderLink({href, children}: PropsWithChildren<{ href: string }>) {
	return (
			<NavLink href={href} className="px-4 py-2 hover:bg-blue-300/15 rounded-xl transition-colors duration-500" activeClassName="text-ssk">
				{children}
			</NavLink>
	)
}

export function Header() {
	return (
			<header className="flex gap-8 justify-between items-center text-center py-6 px-16">
				<Link href="/" className="flex justify-center items-center relative min-h-12 aspect-video">
					<Image src="/logos/logo.svg" alt="Логотип" fill/>
				</Link>

				<div className="size-10 sm:hidden">
					<span className="icon-[iconamoon--menu-burger-horizontal-duotone] size-full dark:text-neutral-200/90"/>
				</div>

				<nav className="hidden sm:block">
					<ul className="flex justify-end gap-8 list-none font-medium">
						<li>
							<HeaderLink href="/">
								Этапы
							</HeaderLink>
						</li>
						<li>
							<HeaderLink href="/map">
								Карта
							</HeaderLink>
						</li>
						<li>
							<HeaderLink href="https://sskzvezda.ru/">
								Оф. сайт
							</HeaderLink>
						</li>
					</ul>
				</nav>
			</header>
	)
}