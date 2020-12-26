import dayjs from 'dayjs';
import useConnexion from "../Hooks/useConnexion";
import useMaFiche from "../Hooks/useMaFicheJournaliere";
import RadioInput from "../Components/RadioInput";


function Fiche(props) {
	const [fiche, updateFiche, setFiche] = useMaFiche();
	const internetAvaible = useConnexion();


	//---------------------------------------------------------------------------
	//	FORM SUBMIT
	//---------------------------------------------------------------------------
	function formSubmit(event) {
		event.preventDefault();
	}



	//---------------------------------------------------------------------------
	//	CALCUL DE LA DUREE D'UN TRAJET
	//---------------------------------------------------------------------------
	function getDuree(depart, arrivee) {

		if(typeof depart !== 'string' || typeof arrivee !== 'string')
			return [0, 0];
		
		let sDepart = depart.split(':');
		let sArrivee = arrivee.split(':');
		
		if(sDepart.length < 2 || sArrivee.length < 2)
			return [0, 0];
		
		let dateDepart = new Date(0, 0, 0, sDepart[0], sDepart[1], 0, 0);
		let dateArrivee = new Date(0, 0, 0, sArrivee[0], sArrivee[1], 0, 0);

		let diff = ( dateArrivee.getTime() - dateDepart.getTime() ) / 1000 / 60;

		if(diff < 0) diff = 1440 + diff;

		let h = parseInt(diff / 60);
		let m = diff - (h*60);

		return [h, m];
	}

	function formatDuree(arr) {
		let h = arr[0];
		let m = arr[1];

		let hText = h === 0 ? '' : h > 1 ? h + ' heures' : h + ' heure';
		let mText = m === 0 ? '' : m > 1 ? m + ' minutes' : m + ' minute';
		let text = <>Le trajet à duré {h === 0 && m === 0 ? '... ?' : <span className="font-semibold"> {hText} {mText}</span>}</>;
		return text;
	}

	const arrayDureeMatin = getDuree(fiche.matin.heureDepart, fiche.matin.heureArrivee);
	const dureeMatin = formatDuree(arrayDureeMatin);
	const dureeMatinClass = arrayDureeMatin[0] > 4 ? 'text-red-600' : '';

	const arrayDureeSoir = getDuree(fiche.soir.heureDepart, fiche.soir.heureArrivee);
	const dureeSoir = formatDuree(arrayDureeSoir);
	const dureeSoirClass = arrayDureeSoir[0] > 4 ? 'text-red-600' : '';



	//---------------------------------------------------------------------------
	//	CALCUL DES CLASSES DU BOUTON DE SUBMIT
	//---------------------------------------------------------------------------
	let sectionClass = "my-2 rounded-md bg-gray-200 p-2";
	let submitBtnClass = "btn btn--lg " + (internetAvaible !== true ? 'btn--gray' : '');

	return (
		<div>
			<h2>Hey {fiche.prenom}, ici tu complète ta fiche journalière</h2>
			{console.log('Fiche render')}
			<form onSubmit={formSubmit}>

				<div className="my-4">
					<h4>Tu complète la fiche pour aujourd'hui ({new Date().toLocaleDateString()})</h4>
					<span className="text-gray-600">Pour compléter la fiche d'hier, <span className="underline cursor-pointer hover:text-yellow-600">clique ici</span></span>
				</div>


				<div className={sectionClass}>
					<RadioInput radioGroup="chef" name="chef" checked={fiche.chef} value={true} onChange={updateFiche}>Chef d'équipe</RadioInput>
					<RadioInput radioGroup="chef" name="chef" checked={fiche.chef} value={false} onChange={updateFiche}>Simple mortel</RadioInput>
				</div>


				<div className={sectionClass}>
					<RadioInput radioGroup="conducteur" name="conducteur" checked={fiche.conducteur} value={true} onChange={updateFiche}>Conducteur</RadioInput>
					<RadioInput radioGroup="conducteur" name="conducteur" checked={fiche.conducteur} value={false} onChange={updateFiche}>Passager</RadioInput>
					{fiche.conducteur &&
						<div>
							<div>La plaque du véhicule:</div>
							<input type="text" placeholder="1-ABC-123" name="voiturePlaque" value={fiche.voiturePlaque} onChange={updateFiche} />
						</div>
					}
				</div>


				<h4 className="mt-5">[NEW] Le matin, t'es allé où ?</h4>
				<div className={sectionClass}>
					<RadioInput radioGroup="matin.destinationStock" name="matin.destinationStock" checked={fiche.matin.destinationStock} value={true} onChange={updateFiche}>au Stock</RadioInput>
					<RadioInput radioGroup="matin.destinationStock" name="matin.destinationStock" checked={fiche.matin.destinationStock} value={false} onChange={updateFiche}>direct sur le chantier</RadioInput>
					<div>Départ de {fiche.matin.destinationStock ? "l'atelier" : "chez moi"} à <input type="time" placeholder="heure de départ" name="matin.heureDepart" value={fiche.matin.heureDepart} onChange={updateFiche} /></div>
					<div>Arrivé sur le chantier à <input type="time" placeholder="heure d'arrivée" name="matin.heureArrivee" value={fiche.matin.heureArrivee} onChange={updateFiche} /></div>
					{fiche.conducteur &&
						<div><input type="number" placeholder="Kilométrage le matin" name="matin.km" value={fiche.matin.km} onChange={updateFiche} /></div>
					}
					<div className={dureeMatinClass}>{dureeMatin}</div>
				</div>

				<h4 className="mt-5">Le matin, t'es allé où ?</h4>
				<div className={sectionClass}>
					<RadioInput radioGroup="matin.destinationStock" name="matin.destinationStock" checked={fiche.matin.destinationStock} value={true} onChange={updateFiche}>au Stock</RadioInput>
					<RadioInput radioGroup="matin.destinationStock" name="matin.destinationStock" checked={fiche.matin.destinationStock} value={false} onChange={updateFiche}>direct sur le chantier</RadioInput>
					<div>Départ de {fiche.matin.destinationStock ? "l'atelier" : "chez moi"} à <input type="time" placeholder="heure de départ" name="matin.heureDepart" value={fiche.matin.heureDepart} onChange={updateFiche} /></div>
					<div>Arrivé sur le chantier à <input type="time" placeholder="heure d'arrivée" name="matin.heureArrivee" value={fiche.matin.heureArrivee} onChange={updateFiche} /></div>
					{fiche.conducteur &&
						<div><input type="number" placeholder="Kilométrage le matin" name="matin.km" value={fiche.matin.km} onChange={updateFiche} /></div>
					}
					<div className={dureeMatinClass}>{dureeMatin}</div>
				</div>


				<h4 className="mt-5">Le soir, tu es retourné chez toi depuis...</h4>
				<div className={sectionClass}>
					<RadioInput radioGroup="soir.origineStock" name="soir.origineStock" checked={fiche.soir.origineStock} value={true} onChange={updateFiche}>le Stock</RadioInput>
					<RadioInput radioGroup="soir.origineStock" name="soir.origineStock" checked={fiche.soir.origineStock} value={false} onChange={updateFiche}>le chantier</RadioInput>
					<div>Départ du dernier chantier à <input type="time" placeholder="heure de départ" name="soir.heureDepart" value={fiche.soir.heureDepart} onChange={updateFiche} /></div>
					<div>Arrivé {fiche.soir.origineStock ? "à l'atelier" : "chez moi"} à <input type="time" placeholder="heure d'arrivée" name="soir.heureArrivee" value={fiche.soir.heureArrivee} onChange={updateFiche} /></div>
					{fiche.conducteur &&
						<div><input type="number" placeholder="Kilométrage le soir" name="soir.km" value={fiche.soir.km} onChange={updateFiche} /></div>
					}
					<div className={dureeSoirClass}>{dureeSoir}</div>
				</div>


				<h4 className="mt-5">Tu as fais tout cela avec ton véhicule privé ?</h4>
				<div className={sectionClass}>
					<RadioInput radioGroup="voiturePrive" name="voiturePrive" checked={fiche.voiturePrive} value={true} onChange={updateFiche}>Oui</RadioInput>
					<RadioInput radioGroup="voiturePrive" name="voiturePrive" checked={fiche.voiturePrive} value={false} onChange={updateFiche}>Non, j'ai véhicule de société</RadioInput>
				</div>


				<div>
					Chantier|Client|Activité|Descriptif|H début|H fin|H total
				</div>

				<div className="mt-10">
					T'as un truc a dire ?
					<input type="text" name="comment" value={fiche.comment} onChange={updateFiche} />
				</div>

				{/* <div>
					<button type="button" className="bg-yellow-400 m-4" onClick={() => setFiche(fiche => { return { ...fiche, chef: false, conducteur: false } })}>Mutate fiche to false</button>
					<button type="button" className="bg-green-400 m-4" onClick={() => setFiche(fiche => { return { ...fiche, chef: true, conducteur: true } })}>Mutate fiche to true</button>
				</div> */}


				<div>
					<button className={submitBtnClass}>{internetAvaible === true ? 'Envoyer' : 'Enregistrer le brouillon'}</button>
				</div>

				{
					internetAvaible !== true &&
					<div className="mt-5 p-4 bg-red-300 rounded-md">
						Oups, tu n'as pas de connexion internet...
						<br /><span className="font-bold">Enregistre en tant que brouillon</span> en attendant, reviens ici quand tu seras de nouveau connecté pour l'envoyer.
					</div>
				}
			</form>
		</div>
	)
}

export default Fiche;