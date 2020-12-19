import { useState, useEffect } from "react";

export default function useMaFicheJournaliere() {

	const [fiche, setFiche] = useState({
		prenom: 'John',
		chef: 'true',
		conducteur: 'false',
		comment: ''
	});

	useEffect(() => {
		// console.log('useEffect dans hook ma fiche');

		const id = setTimeout(() => {
			// console.log('Data fetched from network');
			setFiche( fiche => {
				let changed = {
					prenom: 'Snow',
					chef: 'false',
					comment: 'Network send update comment'
				};
				return {...fiche, ...changed};
			});
		}, 2000);

		
		return () => {
			clearTimeout(id);
		}
	}, []);

	function updateFiche(event) {
		const target = event.target;
		const value = target.type === 'checkbox' ? !!target.checked : target.value;
		const name = target.name;
		
		// console.log(`updateFiche, set [${name}] to ${value} d'un type ${typeof value}`);
		
		setFiche( (fiche) => {
			/* let newFiche = Object.assign({}, fiche);
			newFiche[name] = value;
			return newFiche; */

			let changed = {};
			changed[name] = value;
			return {...fiche, ...changed};
		});
	}

	return [fiche, updateFiche, setFiche];
}