import {NavLink, type NavLinkProps} from "@components/navlink";
import {PropsWithChildren} from "react";
import Link from "next/link";
import Image from "next/image";
import {H3} from "@components/text";
import {ThemeButton} from "@components/theme";

function HeaderLink({href, children, className = "", ...props}: PropsWithChildren<NavLinkProps>) {
	return (
			<NavLink
					href={href}
					className="px-4 py-2 hover:bg-blue-300/15 rounded-xl transition-colors duration-500"
					activeClassName="text-unic"
					{...props}
			>
				{children}
			</NavLink>
	)
}

export function Header() {
	return (
			<header className="flex gap-8 justify-between items-center text-center py-6 px-16">
			<Link href="/" className="grid sm:flex justify-center items-center gap-4">
					<div className="relative h-12 aspect-video">
						<Image src="/logos/logo.svg" alt="Логотип" fill/>
					</div>
					<H3>
						Виртуальная экскурсия
					</H3>
				</Link>

				<nav className="hidden xm:flex">
					<ul className="flex justify-end gap-4 list-none font-medium *:flex *:items-center *:justify-center">
						<li>
							<ThemeButton/>
						</li>

						<li>
							<HeaderLink href="/" title="Этапы создания судна">
								Этапы
							</HeaderLink>
						</li>
						{/*<li>
							<HeaderLink href="/map" title="Карта цехов">
								Карта
							</HeaderLink>
						</li>*/}
						<li>
							<HeaderLink href={new URL(process.env.NEXT_PUBLIC_SSKURL!).toString()} title="Официальный сайт"
							            target="_blank">
								ССК Звезда
							</HeaderLink>
						</li>
					</ul>
				</nav>
			</header>
	)
}