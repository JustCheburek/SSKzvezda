import {BlockQuote, H2, Ul} from "@components/text";
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
					<p>
						крупнейшее спусковое сооружение в России
					</p>
				</Name>

				<Container>
					<Box>
						<Heading>
							Голиаф
						</Heading>
						<div>
							<Ul>
								<li>
									<p>
										до 1200 тонн
									</p>
								</li>
							</Ul>
							<BlockQuote>
								«Активно используется в производственной деятельности»
							</BlockQuote>
						</div>
					</Box>
					<Box img className="lg:col-span-2 lg:row-span-2">
						<Img src="/stapel/1.jpg" alt="Стапель"/>
					</Box>
					<Box img>
						<Img src="/stapel/2.jpg" alt="Стапель"/>
					</Box>
					<Box img>
						<Img src="/stapel/3.jpg" alt="Стапель"/>
					</Box>
					<Box img>
						<Img src="/stapel/10.jpg" alt="Стапель"/>
					</Box>
					<Box>
						<Heading>
							Козловые краны
						</Heading>
						<Ul>
							<li>
								120x189 метров
							</li>
							<li>
								до 1100 тонн
							</li>
						</Ul>
					</Box>
				</Container>
			</Main>
	)
}