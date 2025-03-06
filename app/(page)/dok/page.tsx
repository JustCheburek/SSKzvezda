import {BlockQuote, H2, Ul} from "@components/text";
import {Box, Container, Figure, Heading, Img, Main, Name} from "@components/basic";
import type {Metadata} from "next";

export const metadata: Metadata = {
	title: "Сухой док",
	description: "Одно из крупнейших в мире гидротехнических сооружений"
}

export default function Dok() {
	return (
			<Main>
				<Name>
					<H2>
						Сухой док
					</H2>
					<p>
						одно из крупнейших в мире гидротехнических сооружений
					</p>
				</Name>

				<Container>
					<Figure className="lg:col-span-2 lg:row-span-2">
						<Img src="/dok/sudno.jpg" alt="Док с кораблём внутри"/>
					</Figure>
					<Box>
						<Heading>
							Сухой док
						</Heading>
						<Ul>
							<li>
								485×114×14 метров
							</li>
						</Ul>
						<BlockQuote>
							Строительство большинства типов судов практически без ограничения тоннажа и спускового веса корпусов
						</BlockQuote>
					</Box>
					<Box>
						<Heading>
							Технологический затвор
						</Heading>
						<p>
							Позволяет разделить площадь объекта на отдельные независимые отсеки для строительства сразу нескольких судов
						</p>
					</Box>
					<Box>
						<Heading>
							4 башенных крана
						</Heading>
						<Ul>
							<li>
								до 60 тонн
							</li>
						</Ul>
					</Box>
					<Box>
						<Heading>
							Козловой кран «Голиаф»
						</Heading>
						<Ul>
							<li>
								до 1200 тонн
							</li>
						</Ul>
					</Box>
					<Figure>
						<Img src="/dok/clear.jpg" alt="Пустой док"/>
					</Figure>
					<Box>
						<Heading>
							Батопорт
						</Heading>
						<p>
							Водонепроницаемый затвор
						</p>
						<Ul>
							<li>
								114×12 метров
							</li>
							<li>
								отделяет камеру дока от акватории
							</li>
							<li>
								из высокопрочной стали
							</li>
							<li>
								имеет сплошную водонепроницаемую обшивку
							</li>
						</Ul>
					</Box>
					<Figure className="lg:col-span-2 lg:row-span-3">
						<Img src="/dok/water_in.jpg" alt="Док с водой внутри"/>
					</Figure>
					<Box>
						<Heading>
							Управление батопортом
						</Heading>
						<p>
							Центральный пульт и местные посты
						</p>
					</Box>
					<Box>
						<Heading>
							Состав батопорта
						</Heading>
						<Ul>
							<li>
								Входные ворота
							</li>
							<li>
								Балластные системы
							</li>
							<li>
								Системы осушения
							</li>
							<li>
								Вентиляция
							</li>
							<li>
								Клапаны заполнения сухого дока
							</li>
							<li>
								Система местного пожаротушения и пожарная сигнализация
							</li>
						</Ul>
					</Box>
				</Container>
			</Main>
	)
}