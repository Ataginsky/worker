import { useState, useEffect } from "react";


export default function useConnexion() {
	const [con, setCon] = useState(true);


	useEffect(() => {
		let connectionState = true;

		const intervalId = setInterval(() => {

			if(connectionState !== window.navigator.onLine) {
				connectionState = window.navigator.onLine;
				setCon(window.navigator.onLine);
			}

		}, 1000);

		return () => {
			clearInterval(intervalId);
		}
	}, []);


	return con;
}