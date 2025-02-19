import type {Metadata} from "next";
import "./globals.css";
import {PropsWithChildren} from "react";
import {Open_Sans} from "next/font/google";
import {Header} from "@components/header";
import {cn} from "@server/cn";

const OpenSans = Open_Sans({subsets: ["latin"], preload: true, style: "normal"});

export const metadata: Metadata = {
	title: {
		template: "%s • Виртуальная экскурсия • ССК Звезда",
		default: "Виртуальная экскурсия • ССК Звезда"
	},
	description: "Этапы создания судна и карта цехов завода",
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
			<html lang="ru">
			<body className={cn(
					OpenSans.className,
					"text-balance bg-white/95 dark:text-neutral-300 dark:bg-neutral-900/95 dark accent-ssk caret-ssk selection:bg-blue-300/10 selection:text-blue-200/80 break-words"
			)}>
			<Header/>
			{children}
			</body>
			</html>
	);
}
