import {H1, H2, H3, P} from "@components/text";
import {ComponentPropsWithoutRef, PropsWithChildren} from "react";
import {cn} from "@server/cn";
import Link, {LinkProps} from "next/link";
import {Metadata} from "next";

export const metadata: Metadata = {
	title: "Этапы"
}

const LinkOrNull = ({children, href}: PropsWithChildren<{ href?: LinkProps["href"] }>) => {
	if (!href) {
		return children
	}

	return <Link href={href}>{children}</Link>
}

type StringDirections = {
	left?: string
	right?: string
}
type BooleanDirections = {
	left?: boolean
	right?: boolean
}

const ArrowLink = (
		{
			className = "", left = false, right = false,
			...props
		}: LinkProps & ComponentPropsWithoutRef<"a"> & BooleanDirections) => (
		<Link
				{...props}
				className={cn(
						"size-12 text-black/90 dark:text-neutral-500/80 hover:text-ssk transition-colors duration-300",
						{"mr-auto": left},
						{"ml-auto": right},
						className
				)}
		/>
)
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
						? <ArrowLink href={`#${left}`} left>
								<span
										className="icon-[heroicons--arrow-left-circle-16-solid] size-full"
								/>
							</ArrowLink>
						: <div/>
				}
				{right
						? <ArrowLink href={`#${right}`} right>
								<span
										className="icon-[heroicons--arrow-right-circle-16-solid] size-full"
								/>
							</ArrowLink>
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

const Meaning = ({children}: PropsWithChildren) => (
		<P className="absolute right-12 top-10 hidden xs:block">
			{children}
		</P>
)

export default function Stages() {
	return (
			<>
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
				</Box>
				<Box id="bkp" left="approval" right="color">
					<Heading href="/bkp">
						БКП
					</Heading>
					<Meaning>
						Блок корпусных производств
					</Meaning>
					<Text>
						6 пролётов:<br/>
						5 горизонтальных + 1 вертикальный
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
					<Meaning>
						Цех сборки блоков
					</Meaning>
					<Text>
						Сборка и сварка секций
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
			</>
	);
}
