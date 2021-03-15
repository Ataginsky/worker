import { useState, useEffect } from "react";


export default function useConnexion() {
	const [con, setCon] = useState(true);


	useEffect(() => {
		let connectionState = true;

		if(! window.g_software_app?.useConnexion?.count) {
			window.g_software_app = {
				useConnexion: {
					count: 0,
					timerId: undefined,
				}
			}

			window.g_software_app.useConnexion.count = 1;
		}
		else
			window.g_software_app.useConnexion.count++;
		

		const intervalId = setInterval(() => {

			if(connectionState !== window.navigator.onLine) {
				connectionState = window.navigator.onLine;
				setCon(window.navigator.onLine);
			}

			/* if (connectionState !== window.navigator.$$internetAvaible) {
				connectionState = window.navigator.$$internetAvaible;
				setCon(window.navigator.$$internetAvaible);
			} */

		}, 1000);

		return () => {
			clearInterval(intervalId);
			window.g_software_app.useConnexion.count--;
		}
	}, []);


	return con;
}