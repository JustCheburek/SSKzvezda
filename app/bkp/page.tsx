import type {Metadata} from "next";
import {BlockQuote, H2, H3, P, Ul} from "@components/text";
import {Box, Container, Heading, Img, Main, Name} from "@components/basic";

export const metadata: Metadata = {
	title: "БКП",
	description: "Блок корпусных производств: создание секций и блоков судна"
}

export default function BKP() {
	return (
			<Main>
				<Name>
					<H2 color>
						БКП
					</H2>
					<P>
						блок корпусных производств
					</P>
				</Name>

				<Container>
					<Box img>
						<Img src="/block.jpg" alt="Секция судна"/>
					</Box>

					<Box>
						<Heading>
							Изготовление секций и блоков судна
						</Heading>
						<Ul>
							<li>
								<P>
									до 23×13×12 метров
								</P>
							</li>
							<li>
								<P>
									до 300 тонн
								</P>
							</li>
						</Ul>
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

					<div className="relative grid grid-cols-7 gap-2 *:border-light-gray min-h-40">
						<P className="absolute left-[3%] top-[50%] translate-y-[-50%] [writing-mode:vertical-lr] rotate-180">
							Вертикальный
						</P>
						<div className="rounded-tl-lg rounded-bl-lg border-l border-t border-b bg-neutral-100 dark:bg-gray"/>
						<div className="relative grid col-span-6 gap-2 *:border-light-gray">
							<H3 className="absolute top-[30%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
								Пролёты
							</H3>
							<P className="w-max absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]">
								5 горизонтальных
							</P>
							<div className="rounded-tr-lg border-t bg-neutral-100 dark:bg-gray border-r"/>
							<div className="bg-neutral-100 dark:bg-gray border-r"/>
							<div className="bg-neutral-100 dark:bg-gray border-r"/>
							<div className="bg-neutral-100 dark:bg-gray border-r"/>
							<div className="rounded-br-lg border-b bg-neutral-100 dark:bg-gray border-r"/>
						</div>
					</div>

					<Box img>
						<Img src="/bkp/building.jpg" alt="Цех"/>
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

					<Box img className="lg:col-span-2">
						<Img src="/bkp/people_welding.jpg" alt="Сварка под руководством человека"/>
					</Box>

					<Box>
						<Heading>
							Установлены
						</Heading>
						<Ul>
							<li>
								<P>
									Линии термической резки металла
								</P>
							</li>
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

					<Box className="text-center">
						<Heading>
							Высокоточная роботизированная система
						</Heading>
						<P>
							Резка металла с точностью позиционирования до 0,5 мм.
						</P>
					</Box>

					<Box img className="lg:col-span-2">
						<Img src="/bkp/auto_welding.jpg" alt="Сварка"/>
					</Box>

					<Box img className="lg:col-span-2">
						<Img src="/people/group.jpg" alt="Группа работников"/>
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
				</Container>
			</Main>
	)
}