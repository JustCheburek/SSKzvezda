import {H2, P, Ul} from "@components/text";
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
					<P>
						цех сборки блоков
					</P>
				</Name>

				<Container>
					<Box>
						<Heading>
							Секции
						</Heading>
						<Ul>
							<li>
								<P>
									116x174 метров
								</P>
							</li>
							<li>
								<P>
									до 2300 тонн
								</P>
							</li>
						</Ul>
					</Box>

					<Box>
						<P className="text-center">
							Сборка и сварка секций и блоков из узлов и деталей
						</P>
					</Box>
				</Container>
			</Main>
	)
}