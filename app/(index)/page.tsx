import {H1, H2, H3} from "@components/text";
import {cn} from "@server/cn";
import Link, {LinkProps} from "next/link";
import {ArrowLink, Figure, Img, type StringDirections} from "@components/basic";
import type {ComponentPropsWithoutRef, PropsWithChildren} from "react";
import type {Metadata} from "next";
import type {ImageProps} from "next/image";

export const metadata: Metadata = {
	title: "Этапы"
}

const Section = (
		{
			children, className = "", left, right, id, ...props
		}: ComponentPropsWithoutRef<"a"> & StringDirections) => (
		<section
				className={cn(
						"relative flex flex-col justify-center items-center text-center min-w-dscreen max-w-dscreen snap-center",
						className
				)}
				id={id}
				{...props}
		>

			<div className="flex flex-col justify-center items-center gap-4 flex-1 w-full h-full">
				{children}
			</div>

			<div className="w-full flex flex-0 justify-between mb-[clamp(1rem,2.5vh,4rem)] px-[5vw]">
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

type LinkBox = LinkProps & ComponentPropsWithoutRef<"a">
const LinkBox = ({children, href, className = "", ...props}: LinkBox) => (
		<Link
				href={href}
				className={cn("w-[75%] h-[80%]", className)}
				{...props}
		>
			{children}
		</Link>
)

const Heading = ({children}: PropsWithChildren) => (
		<H1>
			{children}
		</H1>
)

const Text = ({children, bg = true}: PropsWithChildren<{ bg?: boolean }>) => (
		<H3 className={cn(
				"flex relative gap-2 justify-center items-center",
				{"text-neutral-200/90": bg}
		)}>
			{children}
		</H3>
)

const Year = ({children}: PropsWithChildren) => (
		<H2 className="absolute left-10 top-10 text-neutral-100">
			{children}
		</H2>
)

const BgImg = ({src, alt, className = "", ...props}: ImageProps) => (
		<Img
				src={src} alt={alt}
				className={cn("filter brightness-50 blur-[1px] group-hover:scale-105 duration-500 z-10", className)}
				{...props}
		/>
)

export default function Stages() {
	return (
			<main className="overflow-x-scroll overflow-y-clip flex w-auto snap-mandatory snap-x scroll-smooth">
				<Section id="order" right="project">
					<H1>
						Заказ
					</H1>
				</Section>
				<Section id="project" left="order" right="approval">
					<H1>
						Проект
					</H1>
				</Section>
				<Section id="approval" left="project" right="bkp">
					<H1>
						Согласование
					</H1>
					<Text bg={false}>
						Всё должно быть по ГОСТу
					</Text>
				</Section>
				<Section id="bkp" left="approval" right="color">
					<LinkBox href="/bkp">
						<Figure>
							<BgImg src="/bkp/building.jpg" alt="БКП"/>
							<Heading>
								БКП
							</Heading>
							<Text>
								Блок корпусных производств
							</Text>
							<Year>
								2019
							</Year>
						</Figure>
					</LinkBox>
				</Section>
				<Section id="color" left="bkp" right="tssb">
					<LinkBox href="/color">
						<Figure>
							<BgImg src="/color/master.png" alt="Мастер"/>
							<Heading>
								Окраска
							</Heading>
							<Text>
								Камера очистки<br/>
								и 3 камеры краски
							</Text>
							<Year>
								2019
							</Year>
						</Figure>
					</LinkBox>
				</Section>
				<Section id="tssb" left="color" right="stapel">
					<LinkBox href="/tssb">
						<Figure>
							<BgImg src="/tssb/tssb.jpeg" alt="ЦСБ"/>
							<Heading>
								ЦСБ
							</Heading>
							<Text>
								Цех сборки блоков
							</Text>
							<Year>
								2019
							</Year>
						</Figure>
					</LinkBox>
				</Section>
				<Section id="stapel" left="tssb" right="dok">
					<LinkBox href="/stapel">
						<Figure>
							<BgImg src="/stapel/2K5A1325.jpg" alt="Стапель"/>
							<Heading>
								Стапель
							</Heading>
							<Text>
								Крупнейшее спусковое сооружение
							</Text>
							<Year>
								2019
							</Year>
						</Figure>
					</LinkBox>
				</Section>
				<Section id="dok" left="stapel" right="water">
					<LinkBox href="/dok">
						<Figure>
							<BgImg src="/dok/water_in.jpg" alt="Сухой док с водой внутри"/>
							<Heading>
								Сухой док
							</Heading>
							<Text>
								Крупнейшее гидротехническое сооружение
							</Text>
							<Year>
								2021
							</Year>
						</Figure>
					</LinkBox>
				</Section>
				<Section id="water" left="dok">
					<LinkBox href="/water">
						<Figure>
							<BgImg src="/water/afra.jpg" alt="Афрамакс"/>
							<Heading>
								В добрый путь
							</Heading>
							<Text>
								Церемония спуска на воду
							</Text>
						</Figure>
					</LinkBox>
				</Section>
			</main>
	);
}
