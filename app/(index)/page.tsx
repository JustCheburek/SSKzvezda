import {H1, H2, H3} from "@components/text";
import {ComponentPropsWithoutRef, PropsWithChildren} from "react";
import {cn} from "@server/cn";
import Link, {type LinkProps} from "next/link";
import type {Metadata} from "next";
import {ArrowLink, type StringDirections} from "@components/basic";

export const metadata: Metadata = {
	title: "Этапы"
}

const LinkOrNull = ({children, href}: PropsWithChildren<{ href?: LinkProps["href"] }>) => {
	if (!href) {
		return children
	}

	return <Link href={href}>{children}</Link>
}

const Box = (
		{
			children, className = "", left, right, ...props
		}: ComponentPropsWithoutRef<"div"> & StringDirections) => (
		<section className={cn(
				"relative flex flex-col justify-center items-center text-center min-w-[100dvw] max-w-[100dvw] snap-center",
				className
		)} {...props}>
			<div className="flex flex-col justify-center items-center gap-4 flex-1">
				{children}
			</div>

			<div className="w-full flex flex-0 mb-12 px-[5vw]">
				{left
						? <ArrowLink href={`#${left}`} left/>
						: <div/>
				}
				{right
						? <ArrowLink href={`#${right}`} right/>
						: <div/>
				}
			</div>
		</section>
)

const Heading = ({children, href}: PropsWithChildren<{ href?: LinkProps["href"] }>) => (
		<LinkOrNull href={href}>
			<H1 className="grid gap-2">
				{children}
			</H1>
		</LinkOrNull>
)

const Text = ({children}: PropsWithChildren) => (
		<H3 className="flex relative gap-2 justify-center items-center">
			{children}
		</H3>
)

const Year = ({children}: PropsWithChildren) => (
		<H2 className="absolute left-12 top-10">
			{children}
		</H2>
)

export default function Stages() {
	return (
			<main className="overflow-x-scroll overflow-y-clip flex w-auto snap-mandatory snap-x scroll-smooth">
				<Box id="order" right="project">
					<H1>
						Заказ
					</H1>
				</Box>
				<Box id="project" left="order" right="approval">
					<H1>
						Проект
					</H1>
				</Box>
				<Box id="approval" left="project" right="bkp">
					<H1>
						Согласование
					</H1>
					<Text>
						Всё должно быть по ГОСТу
					</Text>
				</Box>
				<Box id="bkp" left="approval" right="color">
					<Heading href="/bkp">
						БКП
					</Heading>
					<Text>
						Блок корпусных производств
					</Text>
					<Year>
						2019
					</Year>
				</Box>
				<Box id="color" left="bkp" right="tssb">
					<Heading href="/color">
						Окраска
					</Heading>
					<Text>
						Камера очистки<br/>
						и 3 камеры краски
					</Text>
					<Year>
						2019
					</Year>
				</Box>
				<Box id="tssb" left="color" right="stapel">
					<Heading href="/tssb">
						ЦСБ
					</Heading>
					<Text>
						Цех сборки блоков
					</Text>
					<Year>
						2019
					</Year>
				</Box>
				<Box id="stapel" left="tssb" right="dok">
					<Heading href="/stapel">
						Стапель
					</Heading>
					<Text>
						Крупнейшее спусковое сооружение
					</Text>
					<Year>
						2019
					</Year>
				</Box>
				<Box id="dok" left="stapel" right="water">
					<Heading href="/dok">
						Сухой док
					</Heading>
					<Text>
						Крупнейшее гидротехническое сооружение
					</Text>
					<Year>
						2021
					</Year>
				</Box>
				<Box id="water" left="dok">
					<Heading>
						В добрый путь
					</Heading>
					<Text>
						Церемония спуска на воду
					</Text>
				</Box>
			</main>
	);
}
