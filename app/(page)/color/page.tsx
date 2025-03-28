import {H2, Ul} from "@components/text";
import {Box, Container, Figure, Heading, Img, Main, Name} from "@components/basic";
import type {Metadata} from "next";

export const metadata: Metadata = {
	title: "Окраска",
	description: "Очистка и окраска судно"
}

export default function Color() {
	return (
			<Main>
				<Name>
					<H2>
						Окраска
					</H2>
				</Name>

				<Container>
					<Box>
						<Heading>
							Камера очистки
						</Heading>
						<p>
							Дробеструйная очистка поверхностей секций судов
						</p>
						<Ul>
							<li>
								23х27х10 метров
							</li>
							<li>
								до 400 т.
							</li>
						</Ul>
					</Box>

					<Figure>
						<Img src="/color/block.webp" alt="Секция"/>
					</Figure>

					<Box className="text-center">
						<Heading>
							3 камеры окраски и сушки
						</Heading>
						<p>
							Окраски и сушка поверхностей секций судов
						</p>
					</Box>

					<Box>
						<Heading>
							Основное сырьё
						</Heading>
						<Ul>
							<li>
								Стальная колотая дробь — абразивный материал для очистки поверхности
							</li>
							<li>
								Для грунтовки и окраски используется большой список красок ведущих мировых и отечественных
								производителей
							</li>
						</Ul>
					</Box>

					<Figure className="md:col-span-2">
						<Img src="/color/master2.webp" alt="Мастер"/>
					</Figure>
				</Container>
			</Main>
	)
}