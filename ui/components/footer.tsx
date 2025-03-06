import Link from "next/link";

export function Footer() {
	const YEAR = new Date().getFullYear()

	return (
			<footer className="container m-auto px-2 py-8 flex justify-between items-center">
				<Link href={new URL(process.env.NEXT_PUBLIC_SSKURL!).toString()} target="_blank">
					&#169; ССК Звезда 2024-{YEAR}
				</Link>
				<Link href={new URL(process.env.NEXT_PUBLIC_JUSTURL!).toString()} target="_blank">
					by JustCheburek
				</Link>
			</footer>
	)
}