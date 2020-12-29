import useConnexion from "../Hooks/useConnexion";
import useMaFiche from "../Hooks/useMaFicheJournaliere";
import RadioInput from "../Components/RadioInput";
import CheckboxInput from "../Components/CheckboxInput";
import Devider from "../Components/Devider";
import TrajetDescriptor from "./../Components/TrajetDescriptor";
import Tache from "./../Components/Tache";
import RoundButton from "./../Components/RoundButton";
import CalculHeuresTaches from "./../Components/CalculHeuresTaches";


function Fiche(props) {
	const [fiche, updateFiche] = useMaFiche();
	const internetAvaible = useConnexion();


	//---------------------------------------------------------------------------
	//	FORM SUBMIT
	//---------------------------------------------------------------------------
	function formSubmit(event) {
		event.preventDefault();
	}



	//---------------------------------------------------------------------------
	//	CALCUL DU KILOMETRAGE
	//---------------------------------------------------------------------------
	function calculKm(f) {
		// if(f.matin.km)
		if( (f.soir.km - f.matin.km) < 0 )
			return false;
		return true;
	}

	const kmIsOk = calculKm(fiche);


	//---------------------------------------------------------------------------
	//	CALCUL DES CLASSES DU BOUTON DE SUBMIT
	//---------------------------------------------------------------------------
	let submitBtnClass = "w-full md:w-auto btn btn--lg " + (internetAvaible !== true ? 'btn--gray' : '');


	return (
		<div>
			<h2>Hey {fiche.prenom}, ici tu complète ta fiche journalière</h2>
			{console.log('Fiche render')}
			<form onSubmit={formSubmit}>

				<div className="my-4">
					<h4>Tu complète la fiche pour aujourd'hui ({new Date().toLocaleDateString()})</h4>
					<span className="text-gray-600">Pour compléter la fiche d'hier, <span className="underline cursor-pointer hover:text-yellow-600">clique ici</span></span>
				</div>


				<div className="section">
					<RadioInput radioGroup="chef" name="chef" checked={fiche.chef} value={true} onChange={updateFiche}>Chef d'équipe</RadioInput>
					<RadioInput radioGroup="chef" name="chef" checked={fiche.chef} value={false} onChange={updateFiche}>Simple mortel</RadioInput>
				</div>


				<Devider>VEHICULE</Devider>
				<div className="section">
					<h5>
						<span className="mr-4">Tu étais chauffeur ?</span>
						<CheckboxInput name="conducteur" checked={fiche.conducteur} value={true} onChange={updateFiche}>Oui</CheckboxInput>
					</h5>

					<div className="text-gray-600 text-sm">
						{fiche.conducteur 
							? <>
									<div>
										<div className="w-4 h-5 inline-block align-middle mr-2">
											<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path fill="#fff" d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" /></svg>
										</div>
										Oui, voici la plaque du véhicule:
										<input className="inputClass ml-2 px-2 font-semibold" type="text" placeholder="1-ABC-123" name="voiturePlaque" value={fiche.voiturePlaque} onChange={updateFiche} />
									</div>
									
									<div>
										<div className="w-4 h-5 inline-block align-middle mr-2">
											{/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg> */}
											<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" /></svg>
										</div>
										Kilométrage le matin:
										<input className="inputClass ml-2 px-2 font-semibold" type="number" placeholder="km" min="0" name="matin.km" value={fiche.matin.km} onChange={updateFiche} />
									</div>

									<div>
										<div className="w-4 h-5 inline-block align-middle mr-2">
											{/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg> */}
											<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" /></svg>
										</div>
										Kilométrage le soir:
										<input className="inputClass ml-2 px-2 font-semibold" type="number" placeholder="km" min="0" name="soir.km" value={fiche.soir.km} onChange={updateFiche} />
									</div>

									{kmIsOk === false && 
										<div className="text-red-600 font-semibold">
											<div className="w-4 h-5 inline-block align-middle mr-2">
												<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" /></svg>
											</div>
											Tu as roulé en marche arrière ? Ton kilométrage est négatif...
										</div>
									}
								</>
							: `Non, j'étais passager`
						}
					</div>
				</div>


				<Devider>TRAJET DOMICILE / TRAVAIL</Devider>

				<TrajetDescriptor 
					title="Le matin, t'es allé où ?" 
					trajet={fiche.matin}

					select={<>
						<RadioInput radioGroup="matin.destinationStock" name="matin.destinationStock" checked={fiche.matin.destinationStock} value={true} onChange={updateFiche}>à l'atelier</RadioInput>
						<RadioInput radioGroup="matin.destinationStock" name="matin.destinationStock" checked={fiche.matin.destinationStock} value={false} onChange={updateFiche}>direct sur le chantier</RadioInput>
					</>}

					start={<>
						Départ de {fiche.matin.destinationStock ? "l'atelier" : "chez moi"} à 
						<input className="inputClass ml-2 pl-2 font-semibold" type="time" placeholder="heure de départ" name="matin.heureDepart" value={fiche.matin.heureDepart} onChange={updateFiche} />
					</>}
					
					stop={<>
						Arrivé sur le chantier à 
						<input className="inputClass ml-2 pl-2 font-semibold" type="time" placeholder="heure d'arrivée" name="matin.heureArrivee" value={fiche.matin.heureArrivee} onChange={updateFiche} />
					</>}
				/>

				<TrajetDescriptor 
					title="Le soir, tu es retourné chez toi depuis..." 
					trajet={fiche.soir}

					select={<>
						<RadioInput radioGroup="soir.origine" name="soir.origine" checked={fiche.soir.origine} value={true} onChange={updateFiche}>l'atelier</RadioInput>
						<RadioInput radioGroup="soir.origine" name="soir.origine" checked={fiche.soir.origine} value={false} onChange={updateFiche}>le chantier</RadioInput>
					</>}

					start={<>
						Départ du dernier chantier à 
						<input className="inputClass ml-2 pl-2 font-semibold" type="time" placeholder="heure de départ" name="soir.heureDepart" value={fiche.soir.heureDepart} onChange={updateFiche} />
					</>}
					
					stop={<>
						Arrivé {fiche.soir.origine ? "à l'atelier" : "chez moi"} à 
						<input className="inputClass ml-2 pl-2 font-semibold" type="time" placeholder="heure d'arrivée" name="soir.heureArrivee" value={fiche.soir.heureArrivee} onChange={updateFiche} />
					</>}
				/>


				<div className="section">
					<h5 className="mb-2">Tu as fais tout cela avec ton véhicule privé ?</h5>
					<RadioInput radioGroup="voiturePrive" name="voiturePrive" checked={fiche.voiturePrive} value={true} onChange={updateFiche}>Oui</RadioInput>
					<RadioInput radioGroup="voiturePrive" name="voiturePrive" checked={fiche.voiturePrive} value={false} onChange={updateFiche}>Non, véhicule de société</RadioInput>
				</div>


				<Devider>PRESTATIONS</Devider>
				<div>
					{fiche.taches.map( (tache, index) => {
						return <Tache tache={tache} index={index} onChangeCallback={updateFiche}/>
					})}

					<div className="my-4">
						<RoundButton signe="+" text="Ajouter une tâche" onClick={(event) => console.log(event)} />
					</div>

					<CalculHeuresTaches taches={fiche.taches} />
				</div>
					
				{/* Chantier|Client|Activité|Descriptif|H début|H fin|H total */}

				<Devider>COMMENTAIRE</Devider>
				<div className="section">
					<h5>Si tu as un commentaire à faire</h5>
					<textarea className="inputClass w-full mt-2 p-2" placeholder="écris le ici..." name="comment" value={fiche.comment} onChange={updateFiche}></textarea>
				</div>


				<div className="my-4">
					<button className={submitBtnClass}>{internetAvaible === true ? 'Envoyer' : 'Enregistrer le brouillon'}</button>
				</div>

				{
					internetAvaible !== true &&
					<div className="mt-4 p-4 bg-red-300 rounded-md">
						Oups, tu n'as pas de connexion internet...
						<br /><span className="font-bold">Enregistre en tant que brouillon</span> en attendant, reviens ici quand tu seras de nouveau connecté pour l'envoyer.
					</div>
				}
			</form>
		</div>
	)
}

export default Fiche;