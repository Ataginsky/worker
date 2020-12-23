import useConnexion from "../Hooks/useConnexion";
import useMaFiche from "../Hooks/useMaFicheJournaliere";
import RadioInput from "../Components/RadioInput";


function Fiche (props) {
	const [fiche, updateFiche, setFiche] = useMaFiche();
	const internetAvaible = useConnexion();


	function formSubmit(event) {
		event.preventDefault();
	} 


	return (
		<div>
			<h2>Hey {fiche.prenom}, ici tu complète ta fiche journalière</h2>
			{console.log('Fiche render')}
			<form onSubmit={formSubmit}>
				<RadioInput radioGroup="chef" name="chef" checked={fiche.chef} value={true} onChange={updateFiche}>Chef d'équipe</RadioInput>
				<RadioInput radioGroup="chef" name="chef" checked={fiche.chef} value={false} onChange={updateFiche}>Simple mortel</RadioInput>
				
				<br />

				<RadioInput radioGroup="conducteur" name="conducteur" checked={fiche.conducteur} value={true} onChange={updateFiche}>Conducteur</RadioInput>
				<RadioInput radioGroup="conducteur" name="conducteur" checked={fiche.conducteur} value={false} onChange={updateFiche}>Passager</RadioInput>

				<br />

				Un commentaire:
				<input type="text" name="comment" value={fiche.comment} onChange={updateFiche}/>
			
				<button type="button" className="bg-yellow-400 m-4" onClick={() => setFiche( fiche => { return {...fiche, chef: false, conducteur: false } })}>Mutate fiche to false</button>
				<button type="button" className="bg-green-400 m-4" onClick={() => setFiche( fiche => { return {...fiche, chef: true, conducteur: true } })}>Mutate fiche to true</button>

				<br/>


				<button>{internetAvaible === true ? 'Envoyer' : 'Enregistrer le brouillon'}</button>

				{
					internetAvaible !== true && 
					<div className="bg-red-300 p-4">
						Oups, tu n'as pas de connexion internet...
						<br/><span className="font-bold">Enregistre en tant que brouillon</span> en attendant, reviens ici quand tu seras de nouveau connecté pour l'envoyer.
					</div>
				}
			</form>
		</div>
	)
}

export default Fiche;