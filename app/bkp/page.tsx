import {H3, P} from "@components/text";
import {ComponentPropsWithoutRef, PropsWithChildren} from "react";
import {cn} from "@server/cn";

function Box({children, className = "", ...props}: PropsWithChildren<ComponentPropsWithoutRef<"div">>) {
	return (
			<div
					className="border border-light-gray rounded-lg p-4 bg-gray"
			>
				<div
						className={cn("m-auto w-fit", className)}
						{...props}
				>
					{children}
				</div>
			</div>
	)
}

export default function BKP() {
	return (
			<main className="container mx-auto">
				<div className="grid grid-cols-3 gap-12">
					<Box className="text-center">
						<H3>
							6 пролётов
						</H3>
						<div className="grid grid-cols-2 justify-center items-center text-black/90 dark:text-neutral-500">
							<div>
								<span
										className="icon-[heroicons--arrow-down-left-20-solid] size-8"
								/>
							</div>
							<div>
								<span
										className="icon-[heroicons--arrow-down-right-20-solid] size-8"
								/>
							</div>
						</div>
						<div className="grid grid-cols-2 gap-6">
							<div className="flex gap-3 items-center justify-center">
								<H3>
									5
								</H3>
								<P>
									горизонтальных
								</P>
							</div>
							<div className="flex gap-3 items-center justify-center">
								<H3>
									1
								</H3>
								<P>
									вертикальный
								</P>
							</div>
						</div>
					</Box>

					<div className="grid grid-cols-7 gap-2 *:border-light-gray">
						<div className="rounded-tl-lg rounded-bl-lg border-l border-t border-b bg-gray">
							<P className="[writing-mode:vertical-lr] rotate-180 m-auto p-2">
								Вертикальный
							</P>
						</div>
						<div className="relative grid col-span-6 gap-2 *:border-light-gray">
							<H3 className="absolute left-[50%] top-6 translate-x-[-50%]">
								Пролёты
							</H3>
							<P className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]">
								Горизонтальные
							</P>
							<div className="rounded-tr-lg border-t bg-gray border-r"/>
							<div className="bg-gray border-r"/>
							<div className="bg-gray border-r"/>
							<div className="bg-gray border-r"/>
							<div className="rounded-br-lg border-b bg-gray border-r"/>
						</div>
					</div>


					<Box>
						<H3 className="mb-2">
							Секции и блоки
						</H3>
						<ul className="ml-8 list-disc marker:text-neutral-300/70">
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
						</ul>
					</Box>
				</div>
				<br/>
				<P>
					Мостовые краны в блоке корпусных производств грузоподъемностью до 120 тонн работают один за другим
				</P>
				<br/>
				<P>
					Производственная мощность блока по переработке стального проката:
				</P>
				<ul className="ml-8 list-disc marker:text-neutral-300/70">
					<li>
						<P>
							обрабатываемый металл — до 90 тысяч тонн / год
						</P>
					</li>
					<li>
						<P>
							сборка судов — до 145 тысяч тонн / год
						</P>
					</li>
				</ul>
				<br/>
				<P>
					В составе производственной линии работает высокоточная роботизированная система, позволяющая совершать
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
					Действует специальная сварочная лаборатория, которая предназначена для подготовки высококвалифицированных
					специалистов, для проведения испытаний инновационного сварочного оборудования и технологий.
				</P>
			</main>
	)
}