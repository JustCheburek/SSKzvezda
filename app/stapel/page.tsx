import {BlockQuote, H2, P, Ul} from "@components/text";
import {Box, Container, Heading, Main, Name} from "@components/basic";
import type {Metadata} from "next";

export const metadata: Metadata = {
	title: "Стапель",
	description: "Крупнейшее спусковое сооружение в России"
}

export default function Stapel() {
	return (
			<Main>
				<Name>
					<H2 color>
						Стапель
					</H2>
					<P>
						крупнейшее спусковое сооружение в России
					</P>
				</Name>

				<Container>
					<Box>
						<Heading>
							Голиаф
						</Heading>
						<div>
							<Ul>
								<li>
									<P>
										до 1200 тонн
									</P>
								</li>
							</Ul>
							<BlockQuote>
								«Активно используется в производственной деятельности»
							</BlockQuote>
						</div>
					</Box>
					<Box>
						<Heading>
							Козловые краны
						</Heading>
						<Ul>
							<li>
								<P>
									до 1100 тонн
								</P>
							</li>
						</Ul>
					</Box>
				</Container>
			</Main>
	)
}