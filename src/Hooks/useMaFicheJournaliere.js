import { useState, useEffect } from "react";
import { LSKEY_NEWFORM } from "../localstoragekeys";

export default function useMaFicheJournaliere() {


	const [fiche, setFiche] = useState({
		// Ce champ détermine quelle version du schéma (MCD/MRD) des fiches est utilisé
		version: 1, 
		date: 0,
		prenom: 'John',
		chef: true,
		conducteur: false,
		voiturePlaque: '',
		voiturePrive: false,
		matin: {
			destinationStock: true,
			heureDepart: '',
			heureArrivee: '',
			duree: 0,
			km: 0
		},
		soir: {
			origine: true,
			heureDepart: '',
			heureArrivee: '',
			duree: 0,
			km: 0
		},
		taches: [
			{
				uuid: '',
				client_name: '',
				client_tel: '',
				client_gsm: '',
				
				chantier_name: '',
				chantier_adr: '',

				activite_name: '',
				activite_code: 0,

				description: '',
				start_at: 0,
				stop_at: 0,
				duree: 0,

				comment: '',

				label: {
					uuid: '1',
					color: 'gray',
					text: 'A faire'
				}
			}
		],
		heuresTotal: 0,
		heuresTotalProductives: 0,
		comment: '',
		validee: false,
	});


	//----------------------------------------------------------------------------
	// At hook mounting, set the fiche content from API 
	// => fallback to localStorage if no connection
	//----------------------------------------------------------------------------
	useEffect(() => {
		// console.log('useEffect dans hook ma fiche');

		const id = setTimeout(() => {
			// console.log('Data fetched from network');
			const ficheCache = localStorage.getItem(LSKEY_NEWFORM);

			if(ficheCache !== null) {
				setFiche(JSON.parse(ficheCache));
			}
			else
				setFiche(fiche => {
					let changed = {
						chef: false,
						taches: [
							{
								uuid: '1',
								client_name: 'Kremers',
								client_gsm: '0485877665',
								
								chantier_name: 'Lot 78',
								chantier_adr: 'rue Pré aux Oies 28, 4480 Visé',
				
								activite_name: 'Chauffage',
								activite_code: 103,
				
								description: 'Entretiens techniques speciales',
								start_at: '07:00',
								stop_at: '10:00',
								duree: 0,

								comment: '',

								label: {
									uuid: '1',
									color: 'green',
									text: 'Terminée'
								}
							},
							{
								uuid: '2',
								client_name: 'IMG',
								client_tel: '0871234456',
								client_gsm: '0485877665',
								
								chantier_name: 'Visé Pléiades - Lot 78',
								chantier_adr: 'rue Pré aux Oies 4, 4480 Visé',
				
								activite_name: 'Ventilation',
								activite_code: 106,
				
								description: 'Remplacement des filtres',
								start_at: '10:10',
								stop_at: '12:30',
								duree: 0,

								comment: `Il faut aussi purger l'eau\nLes filtres sont déjà chez le client`,
                //worker_comment: '',
                
								label: {
									uuid: '2',
									color: 'red',
									text: 'Non prestée'
								}
							},
							{
								uuid: '3',
								client_name: 'IMG',
								
								chantier_name: 'Visé Pléiades - Lot 106',
								chantier_adr: 'rue Pré aux Oies 7, 4480 Visé',
				
								activite_name: 'Ventilation',
								activite_code: 106,
				
								description: 'Remplacement des filtres',
								start_at: '13:30',
								stop_at: '17:00',
								duree: 0,

								comment: `Il faut aussi purger l'eau\nLes filtres sont déjà chez le client`,

								label: {
									uuid: '3',
									color: 'orange',
									text: 'A terminer'
								}
							},
							{
								uuid: '4',
								client_name: 'IMG',
								
								chantier_name: 'Visé Pléiades - Lot 107',
								chantier_adr: 'rue Pré aux Oies 8, 4480 Visé',
				
								activite_name: 'Ventilation',
								activite_code: 106,
				
								description: 'Remplacement des filtres',
								start_at: '17:30',
								stop_at: '18:00',
								duree: 0,

								label: {
									uuid: '4',
									color: 'gray',
									text: 'A faire'
								}
							}
						],
					};
					return { ...fiche, ...changed };
				});
		}, 0);


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
		const itemIndex = target.dataset.index;

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

			//-----------------------------------------------------------
			// Recursive function for setting deep property on object
			// This function does not mutate source object
			//-----------------------------------------------------------
			function setDeepProp(indexPosition, arrayOfKeys, valueToSet, srcObject, mutatedObject, itemIndex) {
				const property = arrayOfKeys[indexPosition];
				
				//--- End with no action, because of developper error of not properly setted property attribute
				if(typeof property !== 'string' || !(property.length > 0))
					return;

				if(srcObject[property] === undefined)
					srcObject[property] = {};

				mutatedObject[property] = srcObject[property];

				indexPosition++;

				if(indexPosition === arrayOfKeys.length) {
					mutatedObject[property] = valueToSet;
				}
				else if(Array.isArray(srcObject[property])) {
					if(typeof itemIndex === 'string') {
						let indexes = itemIndex.split(' ');
						let indexInArray = parseInt(indexes[0]);
						
						itemIndex = '';
						indexes.forEach( (i, p) => {
							if(p !== 0)
								itemIndex += i + ' ';
						});

						setDeepProp(indexPosition, arrayOfKeys, valueToSet, srcObject[property][indexInArray], mutatedObject[property][indexInArray], indexInArray);
					}
				}
				else if(indexPosition < arrayOfKeys.length)
					setDeepProp(indexPosition, arrayOfKeys, valueToSet, srcObject[property], mutatedObject[property], itemIndex);
			}

			//-----------------------------------------------------------
			// This is a wrapper for recursive function setDeepProp
			//-----------------------------------------------------------
			function setProp(object, property, value, itemIndex) {
				let propNames = property.split('.');
				let changed = {};
				setDeepProp(0, propNames, value, object, changed, itemIndex);
				return { ...object, ...changed };
			}

			
			const changed = setProp(fiche, name, value, itemIndex);
			const newFiche = { ...fiche, ...changed };
			
			localStorage.setItem(LSKEY_NEWFORM, JSON.stringify(newFiche));
			
			return newFiche;
		});

	}



	return [fiche, updateFiche, setFiche];
}