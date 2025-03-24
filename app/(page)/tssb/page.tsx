import {H2, Ul} from "@components/text";
import {Box, Container, Figure, Heading, Img, Main, Name} from "@components/basic";
import type {Metadata} from "next";

export const metadata: Metadata = {
	title: "ЦСБ",
	description: "Цех сборки блоков: соединение секций судно"
}

export default function TSSB() {
	return (
			<Main>
				<Name>
					<H2>
						ЦСБ
					</H2>
					<p>
						цех сборки блоков
					</p>
				</Name>

				<Container>
					<Box>
						<Heading>
							Секции
						</Heading>
						<Ul>
							<li>
								116x174 метров
							</li>
							<li>
								до 2300 тонн
							</li>
						</Ul>
					</Box>

					<Figure className="lg:col-span-2 md:row-span-2 lg:min-h-96">
						<Img src="/tssb/tssb.webp" alt="ЦСБ"/>
					</Figure>

					<Box>
						<p className="text-center">
							Сборка и сварка секций и блоков из узлов и деталей
						</p>
					</Box>
				</Container>
			</Main>
	)
}