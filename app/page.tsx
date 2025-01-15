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
		<LinkOrNull href={href}>
			<div className="grid gap-2">
				{children}
			</div>
		</LinkOrNull>
)

const LinkOrNull = ({children, href}: PropsWithChildren<{ href?: LinkProps["href"] }>) => {
	if (!href) {
		return children
	}

	return <Link href={href} className="w-fit m-auto">{children}</Link>
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
						Заказ
					</H1>
				</Box>
				<Box>
					<H1>
						Проект
					</H1>
				</Box>
				<Box>
					<H1>
						Проверка проекта
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
					<Heading href="/color">
						<H1>
							Окраска
						</H1>
					</Heading>
					<Text href="/color">
						<H3>
							1 камера очистки и 3 камеры краски
						</H3>
					</Text>
				</Box>
				<Box>
					<Heading href="/tssb">
						<H1>
							ЦСБ
						</H1>
						<P>
							Цех сборки блоков
						</P>
					</Heading>
					<Text href="/tssb">
						<H3>
							Сборка и сварка секций
						</H3>
					</Text>
				</Box>
				<Box>
					<Heading href="/stapel">
						<H1>
							Стапель
						</H1>
					</Heading>
					<Text href="/stapel">
						<H3>
							Крупнейшее спусковое сооружение
						</H3>
					</Text>
				</Box>
				<Box>
					<Heading href="/dok">
						<H1>
							Сухой док
						</H1>
					</Heading>
					<Text href="/dok">
						<H3>
							Крупнейшее гидротехническое сооружение
						</H3>
					</Text>
				</Box>
				<Box>
					<Heading>
						<H1>
							В добрый путь
						</H1>
					</Heading>
					<Text>
						<H3>
							Церемония спуска на воду
						</H3>
					</Text>
				</Box>
			</>
	);
}
