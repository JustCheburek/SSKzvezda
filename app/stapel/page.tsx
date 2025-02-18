import {BlockQuote, H2, P, Ul} from "@components/text";
import {Box, Container, Heading, Img, Main, Name} from "@components/basic";
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
					<Box img>
						<Img src="/stapel/1.jpg" alt="Стапель"/>
					</Box>
					<Box img>
						<Img src="/stapel/4.jpg" alt="Стапель"/>
					</Box>
					<Box img>
						<Img src="/stapel/3.jpg" alt="Стапель"/>
					</Box>
					<Box img>
						<Img src="/stapel/2.jpg" alt="Стапель"/>
					</Box>
					<Box>
						<Heading>
							Козловые краны
						</Heading>
						<Ul>
							<li>
								<P>
									120x189 метров
								</P>
							</li>
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