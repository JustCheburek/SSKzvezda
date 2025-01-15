import {H1, H3, P} from "@components/text";
import {ComponentPropsWithoutRef, PropsWithChildren} from "react";
import {cn} from "@server/cn";
import Link, {LinkProps} from "next/link";

const Box = ({children, className, ...props}: ComponentPropsWithoutRef<"div">) => (
		<article className={cn(
				"flex justify-center items-center text-center min-h-fit h-svh max-h-[60rem] snap-center",
				className
		)} {...props}>
			<div className="grid gap-4 max-w-[80%]">
				{children}
			</div>
		</article>
)

const Heading = ({children, href}: PropsWithChildren<{ href?: LinkProps["href"] }>) => (
		<div className="w-fit m-auto">
			<LinkOrNull href={href}>
				{children}
			</LinkOrNull>
		</div>
)

const LinkOrNull = ({children, href}: PropsWithChildren<{ href?: LinkProps["href"] }>) => {
		if (!href) {
			return children
		}

		return <Link href={href}>{children}</Link>
}

const Text = ({children, href}: PropsWithChildren<{ href?: LinkProps["href"] }>) => (
		<div className="flex gap-2 justify-center items-center">
			{children}
			{href &&
					<Link href={href} className="size-[1.3em] text-neutral-300/90 hover:text-ssk transition-colors duration-300">
						<span
								className="icon-[heroicons--arrow-long-right] size-full"
						/>
					</Link>
			}
		</div>
)

export default function Stages() {
	return (
			<>
				<Box>
					<H1>
						Заказчик
					</H1>
				</Box>
				<Box>
					<Heading href="/bkp">
						<H1>
							БКП
						</H1>
						<P>
							Блок корпусных производств
						</P>
					</Heading>
					<Text href="/bkp">
						<H3>
							6 пролётов, 5 горизонтальных и 1 вертикальный{" "}
						</H3>
					</Text>
				</Box>
				<Box>
					<Heading>
						<H1>
							Окраска
						</H1>
					</Heading>
					<Text>
						<P>

						</P>
					</Text>
				</Box>
				<Box>
					<H1>
						ЦСБ
					</H1>
					<H3>
						Цех сборки блоков
					</H3>
				</Box>
				<Box>
					<H1>
						Стапель
					</H1>
				</Box>
				<Box>
					<H1>
						Сухой док
					</H1>
					<H3>
						Самый большой в Евразии
					</H3>
				</Box>
				<Box>
					<H1>
						В добрый путь
					</H1>
					<H3>
						Церемония спуска на воду
					</H3>
				</Box>
			</>
	);
}
