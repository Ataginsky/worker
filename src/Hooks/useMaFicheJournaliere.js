import { useState, useEffect } from "react";

export default function useMaFicheJournaliere() {


	const [fiche, setFiche] = useState({
		prenom: 'John',
		chef: true,
		conducteur: false,
		comment: ''
	});


	//----------------------------------------------------------------------------
	// At hook mounting, set the fiche content from API 
	// => fallback to localStorage if no connection
	//----------------------------------------------------------------------------
	useEffect(() => {
		// console.log('useEffect dans hook ma fiche');

		const id = setTimeout(() => {
			// console.log('Data fetched from network');
			setFiche(fiche => {
				let changed = {
					prenom: 'Snow',
					chef: false,
					comment: 'Network send update comment'
				};
				return { ...fiche, ...changed };
			});
		}, 2000);


		return () => {
			clearTimeout(id);
		}
	}, []);


	
	//----------------------------------------------------------------------------
	// Updating one field of FICHE object 
	// => this is a callback of inputs:onChange method
	//----------------------------------------------------------------------------
	function updateFiche(event) {
		const target = event.target;
		let value = target.type === 'checkbox' ? !!target.checked : target.value;
		const name = target.name;

		//--- Converting string 'true' or 'false' to typeof Boolean
		if( target.type === 'checkbox' || target.type === 'radio' ) {
			if( value === 'true' ) value = true;
			else if( value === 'false' ) value = false;
		}
		// console.log(`updateFiche, set [${name}] to ${value} d'un type ${typeof value}`);

		setFiche((fiche) => {
			/* let newFiche = Object.assign({}, fiche);
			newFiche[name] = value;
			return newFiche; */

			let changed = {};
			changed[name] = value;
			return { ...fiche, ...changed };
		});
	}



	return [fiche, updateFiche, setFiche];
}