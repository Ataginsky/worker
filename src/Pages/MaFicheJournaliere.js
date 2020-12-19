import useMaFiche from "../Hooks/useMaFicheJournaliere";
import RadioItem from "./../Components/RadioItem";


function Fiche (props) {
	const [fiche, setFiche, setFicheHook] = useMaFiche();


	function formSubmit(event) {
		event.preventDefault();
	} 


	return (
		<div>
			<h2>Hey {fiche.prenom}, ici tu complète ta fiche journalière</h2>
			{console.log('Fiche render')}
			<form onSubmit={formSubmit}>
				<RadioItem radioGroup="chef" name="chef" checked={fiche.chef} value='true' onChange={setFiche}>Chef d'équipe</RadioItem>
				<RadioItem radioGroup="chef" name="chef" checked={fiche.chef} value='false' onChange={setFiche}>Simple mortel</RadioItem>
				
				<br />

				<RadioItem radioGroup="conducteur" name="conducteur" checked={fiche.conducteur} value='true' onChange={setFiche}>Conducteur</RadioItem>
				<RadioItem radioGroup="conducteur" name="conducteur" checked={fiche.conducteur} value='false' onChange={setFiche}>Passager</RadioItem>

				<br />

				Un commentaire:
				<input type="text" name="comment" value={fiche.comment} onChange={setFiche}/>
			
				<button type="button" className="bg-yellow-400 m-4" onClick={() => setFicheHook( fiche => { return {...fiche, chef: 'false', conducteur: 'false' } })}>Mutate fiche to false</button>
				<button type="button" className="bg-green-400 m-4" onClick={() => setFicheHook( fiche => { return {...fiche, chef: 'true', conducteur: 'true' } })}>Mutate fiche to true</button>

				<br/>


				{/* <button>{props.internetAvaible === true ? 'Envoyer' : 'Enregistrer le brouillon'}</button> */}

				{/* {
					props.internetAvaible !== true && 
					<div className="bg-red-300 p-4">
						Oups, tu n'as pas de connexion internet...
						<br/><span className="font-bold">Enregistre en tant que brouillon</span> en attendant, reviens ici quand tu seras de nouveau connecté pour l'envoyer.
					</div>
				} */}
			</form>
		</div>
	)
}

export default Fiche;