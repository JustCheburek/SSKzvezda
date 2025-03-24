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
			<header className="flex gap-8 justify-between items-center text-center py-[clamp(0.5rem,2.5vh,1.5rem)] px-16">
				<Link href="/" className="grid xm:flex justify-center items-center gap-4 group">
					<div className="relative h-12 aspect-video mx-auto">
						<Image src="/logos/logo.svg" alt="Логотип" fill/>
					</div>
					<H3 className="group-hover:text-unic duration-500">
						Виртуальная экскурсия
					</H3>
				</Link>

				<nav className="flex">
					<ul className="flex justify-end gap-4 list-none font-medium *:xm:flex *:items-center *:justify-center">
						<li className="flex">
							<ThemeButton/>
						</li>

						<li className="hidden">
							<HeaderLink href="/" title="Этапы создания судна">
								Этапы
							</HeaderLink>
						</li>
						{/*<li>
							<HeaderLink href="/map" title="Карта цехов">
								Карта
							</HeaderLink>
						</li>*/}
						<li className="hidden">
							<HeaderLink
									href={new URL(process.env.NEXT_PUBLIC_SSKURL!).toString()} title="Официальный сайт"
									target="_blank"
							>
								ССК Звезда
							</HeaderLink>
						</li>
					</ul>
				</nav>
			</header>
	)
}