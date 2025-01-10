import type {Metadata} from "next";
import "./globals.css";
import {PropsWithChildren} from "react";
import {Open_Sans} from "next/font/google";
import {Main} from "@components/basic";

const OpenSans = Open_Sans({subsets: ["latin"], preload: true, style: "normal"});

export const metadata: Metadata = {
	title: "Виртуальная экскурсия по ССК Звезде",
	description: "Этапы создания судно",
	metadataBase: new URL(process.env.NEXT_PUBLIC_URL!),
	alternates: {
		canonical: './',
	},
	authors: {
		name: "JustCheburek",
		url: "https://t.me/JustCheburek"
	},
	openGraph: {
		siteName: "ССК Звезда",
		locale: "ru_RU",
		countryName: "Russia",
		url: "./",
		type: "website"
	},
};

export default function RootLayout(
		{
			children,
		}: PropsWithChildren) {
	return (
			<html lang="en">
			<body className={`${OpenSans.className} text-balance bg-neutral-100 dark:bg-neutral-950 accent-ssk caret-ssk selection:bg-ssk/10 selection:text-ssk`}>
			<Main>
				{children}
			</Main>
			</body>
			</html>
	);
}
