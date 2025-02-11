import {H2, P} from "@components/text";
import {Box, Container, Main, Name} from "@components/basic";
import type {Metadata} from "next";

export const metadata: Metadata = {
	title: "Сухой док",
	description: "Одно из крупнейших в мире гидротехнических сооружений"
}

export default function Dok() {
	return (
			<Main>
				<Name>
					<H2 color>
						Сухой док
					</H2>
					<P>
						одно из крупнейших в мире гидротехнических сооружений
					</P>
				</Name>

				<Container>
					<Box>
						<P>
							важнейшее гидротехническое сооружение судоверфи «Звезда».
						</P>
					</Box>
				</Container>
			</Main>
	)
}