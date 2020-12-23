import { useState, useEffect } from "react";


export default function useConnexion() {
	const [con, setCon] = useState(true);


	useEffect(() => {
		let connectionState = true;

		const intervalId = setInterval(() => {

			if (connectionState !== window.navigator.$$internetAvaible) {
				connectionState = window.navigator.$$internetAvaible;
				setCon(window.navigator.$$internetAvaible);
			}

		}, 1000);

		return () => {
			clearInterval(intervalId);
		}
	}, []);


	return con;
}