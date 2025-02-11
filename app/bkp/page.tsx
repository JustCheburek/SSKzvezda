import {BlockQuote, H2, H3, P, Ul} from "@components/text";
import {ComponentPropsWithoutRef, PropsWithChildren} from "react";
import {cn} from "@server/cn";
import Image from "next/image";

function Box({children, className = "", ...props}: PropsWithChildren<ComponentPropsWithoutRef<"div">>) {
	return (
			<div
					className={cn(
							"relative flex flex-col justify-center items-center gap-2 border border-light-gray rounded-lg p-4 bg-gray",
							className
					)}
					{...props}
			>
				{children}
			</div>
	)
}

export default function BKP() {
	return (
			<main className="container mx-auto">
				<div className="grid grid-cols-3 gap-12">
					<div className="relative grid grid-cols-7 gap-2 *:border-light-gray">
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
						<H3>
							Секции и блоки
						</H3>
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
						<H3>
							Мостовые краны
						</H3>
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

					<Box className="grid p-8 py-16">
						<div>
							<H3>
								Производственная мощность
							</H3>
							<P>
								по переработке стального проката
							</P>
						</div>
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

					<Box className="overflow-clip col-span-2">
						<Image src="/bkp/welding.png" alt="Сварка" fill className="hover:scale-110 duration-500"/>
					</Box>
				</div>

				<br/>
				<P>
					Высокоточная роботизированная система, позволяющая совершать
					операции резки металла с точностью позиционирования до 0,5 мм.
				</P>
				<br/>
				<P>
					Установлены:
				</P>
				<ul className="ml-8 list-disc marker:text-neutral-300/70">
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
				</ul>
				<br/>
				<P>
					Специальная сварочная лаборатория, которая предназначена для подготовки высококвалифицированных
					специалистов, для проведения испытаний инновационного сварочного оборудования и технологий.
				</P>
			</main>
	)
}