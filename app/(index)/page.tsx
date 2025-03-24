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
					<p className="absolute bottom-[clamp(5rem,12vh,10rem)] right-[clamp(5rem,7.5vw,50%)] font-mono text-left text-neutral-600 dark:text-neutral-400">
						Танкер-Газовоз<br/>
						СПГ класса ARC 7<br/>
						300×48.8 метров
					</p>
				</Section>
				<Section id="project" left="order" right="approval">
					<H1>
						Проект
					</H1>
					<Figure className="absolute bottom-[clamp(5rem,10vh,10rem)] right-[clamp(5rem,7.5vw,50%)] w-32 h-32 min-h-0 text-neutral-600 dark:text-neutral-400 hover:text-unic duration-500"
					        border={false} overflow={false}>
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
							<path
									d="M4 10.4V4a1 1 0 0 1 1-1h5V1h4v2h5a1 1 0 0 1 1 1v6.4l1.086.326a1 1 0 0 1 .683 1.2l-1.517 6.068a5 5 0 0 1-1.902-.273l1.25-5.351L12 10l-7.6 2.37l1.25 5.351a5 5 0 0 1-1.902.273l-1.516-6.068a1 1 0 0 1 .682-1.2zm2-.6L12 8l6 1.8V5H6zM4 20a5.98 5.98 0 0 0 4-1.528A5.98 5.98 0 0 0 12 20a5.98 5.98 0 0 0 4-1.528A5.98 5.98 0 0 0 20 20h2v2h-2a7.96 7.96 0 0 1-4-1.07A7.96 7.96 0 0 1 12 22a7.96 7.96 0 0 1-4-1.07A7.96 7.96 0 0 1 4 22H2v-2z"/>
						</svg>
					</Figure>
				</Section>
				<Section id="approval" left="project" right="bkp">
					<H1>
						Согласование
					</H1>
					<Text bg={false}>
						Всё должно быть по ГОСТу
					</Text>
					<Figure className="absolute bottom-[clamp(5rem,10vh,10rem)] right-[clamp(5rem,7.5vw,50%)] w-36 h-36 min-h-0"
					        border={false} overflow={false}>
						<Img src="/handshake.svg" alt="Чертёж" className="text-white"/>
					</Figure>
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
