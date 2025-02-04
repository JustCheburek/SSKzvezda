import {H3} from "@components/text";
import {NavLink} from "@components/navlink";
import {PropsWithChildren} from "react";

function HeaderLink({href, children}: PropsWithChildren<{ href: string }>) {
	return (
			<NavLink href={href} className="px-4 py-2 hover:bg-blue-300/15 rounded-xl transition-colors duration-500" activeClassName="text-ssk">
				{children}
			</NavLink>
	)
}

export function Header() {
	return (
			<header className="flex gap-8 justify-between text-center py-6 px-16">
				<div className="flex justify-center items-center">
					<H3>
						Лого
					</H3>
				</div>

				<div className="size-10 md:hidden">
					<span className="icon-[iconamoon--menu-burger-horizontal-duotone] size-full dark:text-neutral-200/90"/>
				</div>

				<nav className="hidden md:block">
					<ul className="md:flex justify-end gap-8 list-none font-medium">
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
								Официальный сайт
							</HeaderLink>
						</li>
					</ul>
				</nav>
			</header>
	)
}