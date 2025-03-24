import type {Metadata} from "next";
import {BlockQuote, H2, H3, Ul} from "@components/text";
import {Box, Caption, Container, Figure, Heading, Img, Main, Name} from "@components/basic";

export const metadata: Metadata = {
	title: "БКП",
	description: "Блок корпусных производств: создание секций и блоков судна"
}

export default function BKP() {
	return (
			<Main>
				<Name>
					<H2>
						БКП
					</H2>
					<p>
						блок корпусных производств
					</p>
				</Name>

				<Container>
					<Box>
						<Heading>
							Изготовление секций и блоков судна
						</Heading>
						<Ul>
							<li>
								до 23×13×12 метров
							</li>
							<li>
								до 300 тонн
							</li>
						</Ul>
					</Box>

					<Figure className="lg:col-span-2 lg:row-span-2 lg:min-h-96">
						<Img src="/bkp/building.webp" alt="Цех"/>
					</Figure>

					<Figure>
						<Img src="/block.webp" alt="Секция судна"/>
						<Caption dir="rtl">
							Секция
						</Caption>
					</Figure>

					<div className="relative grid grid-cols-7 gap-2 *:border-light-gray min-h-40">
						<p className="absolute left-[3%] top-[50%] translate-y-[-50%] [writing-mode:vertical-lr] rotate-180">
							Вертикальный
						</p>
						<div className="rounded-tl-lg rounded-bl-lg border-l border-t border-b bg-neutral-100 dark:bg-gray"/>
						<div className="relative grid col-span-6 gap-2 *:border-light-gray">
							<H3 className="absolute top-[29%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
								Пролёты
							</H3>
							<p className="w-max absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]">
								5 горизонтальных
							</p>
							<div className="rounded-tr-lg border-t bg-neutral-100 dark:bg-gray border-r"/>
							<div className="bg-neutral-100 dark:bg-gray border-r"/>
							<div className="bg-neutral-100 dark:bg-gray border-r"/>
							<div className="bg-neutral-100 dark:bg-gray border-r"/>
							<div className="rounded-br-lg border-b bg-neutral-100 dark:bg-gray border-r"/>
						</div>
					</div>

					<Box>
						<Heading>
							Мостовые краны
						</Heading>
						<div>
							<Ul>
								<li>
									до 120 тонн
								</li>
							</Ul>
							<BlockQuote>
								«Работают один за другим»
							</BlockQuote>
						</div>
					</Box>

					<Box>
						<Heading>
							Производственная мощность
						</Heading>
						<Ul>
							<li>
								обработка металла — до 90 тысяч тонн в год
							</li>
							<li>
								сборка судов — до 145 тысяч тонн в год
							</li>
						</Ul>
					</Box>

					<Figure className="lg:col-span-2">
						<Img src="/bkp/people_welding.webp" alt="Сварка под руководством человека"/>
					</Figure>

					<Box>
						<Heading>
							Установлены
						</Heading>
						<Ul>
							<li>
								Линии термической резки металла
							</li>
							<li>
								Машины резки и правки профилей
							</li>
							<li>
								Линии изготовления тавровых блоков, плоских секций, криволинейных и микропанеле
							</li>
							<li>
								Станки для снятия заусенцев и скругления кромок
							</li>
						</Ul>
					</Box>

					<Box className="text-center">
						<Heading>
							Высокоточная роботизированная система
						</Heading>
						<p>
							Резка металла с точностью позиционирования до 0,5 мм.
						</p>
					</Box>

					<Figure className="lg:col-span-2">
						<Img src="/bkp/auto_welding.webp" alt="Сварка"/>
					</Figure>

					<Figure className="lg:col-span-2">
						<Img src="/people/group.webp" alt="Группа работников"/>
					</Figure>

					<Box>
						<Heading>
							Специальная сварочная лаборатория
						</Heading>
						<Ul>
							<li>
								Подготовка высококвалифицированных специалистов
							</li>
							<li>
								Проведения испытаний инновационного сварочного оборудования и технологий
							</li>
						</Ul>
					</Box>
				</Container>
			</Main>
	)
}