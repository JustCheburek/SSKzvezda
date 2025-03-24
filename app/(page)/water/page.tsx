import type {Metadata} from "next";
import {H2} from "@components/text";
import {Box, Caption, Container, Figure, Img, Main, Name} from "@components/basic";

export const metadata: Metadata = {
	title: "Спуск судна на воду",
	description: "Церемония спуска на воду"
}

export default function Water() {
	return (
			<Main>
				<Name>
					<H2>
						В добрый путь
					</H2>
					<p>
						церемония спуска на воду
					</p>
				</Name>

				<Container>
					<Figure className="lg:row-span-2 lg:min-h-96">
						<Img src="/water/naming.webp" alt="Название судна"/>
					</Figure>
					<Box className="text-center">
						Каждое судно имеет своё уникальное «имянаречение»
					</Box>
					<Figure className="lg:row-span-2 lg:min-h-96">
						<Img src="/water/front.webp" alt="Перед ледокола"/>
						<Caption dir="rtl">
							Ледокол
						</Caption>
					</Figure>
					<Box>
						Название кораблю присуждается в торжественной обстановке,
						а менять его считается дурной приметой
					</Box>
					<Figure className="lg:min-h-96">
						<Img src="/water/gas2.webp" alt="Газовоз"/>
						<Caption dir="rtl">
							Газовоз
						</Caption>
					</Figure>
					<Figure className="lg:col-span-2 min-h-96">
						<Img src="/water/from_dok.webp" alt="Газовоз"/>
						<Caption dir="ltr">
							Газовоз
						</Caption>
					</Figure>
					<Figure className="lg:col-span-2 min-h-96">
						<Img src="/water/led.webp" alt="Ледокол"/>
						<Caption dir="rtl">
							Ледокол
						</Caption>
					</Figure>
					<Figure className="min-h-96">
						<Img src="/water/afra3.webp" alt="Афрамакс"/>
						<Caption dir="ltr">
							Афрамакс
						</Caption>
					</Figure>
					<Figure className="min-h-96">
						<Img src="/water/gas1.webp" alt="Газовоз"/>
						<Caption dir="rtl">
							Газовоз
						</Caption>
					</Figure>
					<Figure className="lg:col-span-2 min-h-96">
						<Img src="/water/afra.webp" alt="Афрамакс"/>
						<Caption dir="ltr">
							Афрамакс
						</Caption>
					</Figure>
				</Container>
			</Main>
	)
}