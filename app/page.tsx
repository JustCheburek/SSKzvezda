import {H1, H3} from "@components/text";
import {PropsWithChildren} from "react";

const Box = ({children}: PropsWithChildren) => (
		<div className="flex flex-col gap-5 justify-center items-center min-h-[90svh]">
			{children}
		</div>
)

export default function Stages() {
	return (
			<div>
				<Box>
					<H1>
						Проект
					</H1>
				</Box>
				<Box>
					<H1>
						БКП
					</H1>
					<H3>
						Блок-корпусное производство
					</H3>
				</Box>
				<Box>
					<H1>
						ЦСБ
					</H1>
					<H3>
						Цех сборки блоков
					</H3>
				</Box>
				<Box>
					<H1>
						Открытая площадка
					</H1>
				</Box>
				<Box>
					<H1>
						Сухой док
					</H1>
					<H3>
						Самый большой в Евразии
					</H3>
				</Box>
				<Box>
					<H1>
						В добрый путь
					</H1>
					<H3>
						Церемония спуска на воду
					</H3>
				</Box>
			</div>
	);
}
