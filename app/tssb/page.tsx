import {H2, Ul} from "@components/text";
import {Box, Container, Heading, Main, Name} from "@components/basic";
import type {Metadata} from "next";

export const metadata: Metadata = {
	title: "ЦСБ",
	description: "Цех сборки блоков: соединение секций судно"
}

export default function TSSB() {
	return (
			<Main>
				<Name>
					<H2 color>
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

					<Box>
						<p className="text-center">
							Сборка и сварка секций и блоков из узлов и деталей
						</p>
					</Box>
				</Container>
			</Main>
	)
}