import {BlockQuote, H3, P, Ul} from "@components/text";
import {ComponentPropsWithoutRef, PropsWithChildren} from "react";
import {cn} from "@server/cn";
import Image from "next/image";
import type {Metadata} from "next";

export const metadata: Metadata = {
	title: "БКП",
	description: "Блок корпусных производств: создание секций и блоков судна"
}

type Box = {
	img?: boolean
} & ComponentPropsWithoutRef<"div">

function Box({children, className = "", img = false, ...props}: PropsWithChildren<Box>) {
	return (
			<div
					className={cn(
							"relative flex flex-col justify-center items-center gap-4 border border-light-gray rounded-lg p-4 bg-gray",
							{"overflow-clip min-h-64": img},
							className
					)}
					{...props}
			>
				{children}
			</div>
	)
}

type Heading = ComponentPropsWithoutRef<"h3">

function Heading({children, className = "", ...props}: PropsWithChildren<Heading>) {
	return (
			<H3 className={cn("text-center", className)} {...props}>
				{children}
			</H3>
	)
}

export default function BKP() {
	return (
			<main className="container mx-auto">
				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 pt-6 pb-12">
					<div className="relative grid grid-cols-7 gap-2 *:border-light-gray min-h-40">
						<P className="absolute left-1.5 top-[50%] translate-y-[-50%] [writing-mode:vertical-lr] rotate-180">
							Вертикальный
						</P>
						<div className="rounded-tl-lg rounded-bl-lg border-l border-t border-b bg-gray"/>
						<div className="relative grid col-span-6 gap-2 *:border-light-gray">
							<H3 className="absolute top-5 left-[50%] translate-x-[-50%]">
								Пролёты
							</H3>
							<P className="w-max absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]">
								5 горизонтальных
							</P>
							<div className="rounded-tr-lg border-t bg-gray border-r"/>
							<div className="bg-gray border-r"/>
							<div className="bg-gray border-r"/>
							<div className="bg-gray border-r"/>
							<div className="rounded-br-lg border-b bg-gray border-r"/>
						</div>
					</div>

					<Box>
						<Heading>
							Секции и блоки
						</Heading>
						<Ul>
							<li>
								<P>
									до 300 тонн
								</P>
							</li>
							<li>
								<P>
									до 23×13×12 метров
								</P>
							</li>
						</Ul>
					</Box>

					<Box>
						<Heading>
							Мостовые краны
						</Heading>
						<div>
							<Ul>
								<li>
									<P>
										до 120 тонн
									</P>
								</li>
							</Ul>
							<BlockQuote>
								«Работают один за другим»
							</BlockQuote>
						</div>
					</Box>

					<Box>
						<Heading>
							Установлены
						</Heading>
						<Ul>
							<li>
								<P>
									Машины резки и правки профилей
								</P>
							</li>
							<li>
								<P>
									Линии изготовления тавровых блоков, плоских секций, криволинейных и микропанеле
								</P>
							</li>
							<li>
								<P>
									Станки для снятия заусенцев и скругления кромок
								</P>
							</li>
						</Ul>
					</Box>

					<Box img>
						<Image src="/bkp/building.jpg" alt="Сварка" fill className="hover:scale-110 duration-500"/>
					</Box>

					<Box>
						<Heading>
							Производственная мощность
						</Heading>
						<Ul>
							<li>
								<P>
									обрабатываемый металл — до 90 тысяч тонн в год
								</P>
							</li>
							<li>
								<P>
									сборка судов — до 145 тысяч тонн в год
								</P>
							</li>
						</Ul>
					</Box>

					<Box>
						<Heading>
							Высокоточная роботизированная система
						</Heading>
						<P>
							Резка металла с точностью позиционирования до 0,5 мм.
						</P>
					</Box>

					<Box img className="lg:col-span-2">
						<Image src="/bkp/welding.png" alt="Сварка" fill className="hover:scale-110 duration-500"/>
					</Box>

					<Box img className="lg:col-span-2">
						<Image src="/people/group.jpg" alt="Сварка" fill className="hover:scale-110 duration-500"/>
					</Box>

					<Box>
						<Heading>
							Специальная сварочная лаборатория
						</Heading>
						<Ul>
							<li>
								<P>
									Подготовка высококвалифицированных
									специалистов
								</P>
							</li>
							<li>
								<P>
									Проведения испытаний инновационного сварочного оборудования и технологий
								</P>
							</li>
						</Ul>
					</Box>
				</div>
			</main>
	)
}