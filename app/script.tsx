"use client";

import {useEffect} from "react";

export default function Metrika() {
	useEffect(() => {
		window.addEventListener('load', metrica, {once: true})
		return () => window.removeEventListener('load', metrica)
	})

	function metrica() {
		setTimeout(() => {
			(function (m, e, t, r, i, k, a) {
				// @ts-ignore
				m[i] = m[i] || function () {
					// @ts-ignore
					(m[i].a = m[i].a || []).push(arguments)
				};
				// @ts-ignore
				m[i].l = 1 * new Date();
				for (let j = 0; j < document.scripts.length; j++) {
					if (document.scripts[j].src === r) {
						return;
					}
				}
				// @ts-ignore
				// noinspection CommaExpressionJS
				k = e.createElement(t), a = e.getElementsByTagName(t)[0], k.async = 1, k.src = r, a.parentNode.insertBefore(k, a)
			})
			(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

			// @ts-ignore
			ym(100208850, "init", {
				clickmap: true,
				trackLinks: true,
				accurateTrackBounce: true,
				webvisor: true
			});
		}, 1000)
	}

	return <></>
}