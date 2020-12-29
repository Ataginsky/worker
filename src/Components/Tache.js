import getDuree from "./../Helpers/DureeCalculator";


//---------------------------------------------------------------------------
//	Fonctions helpers
//---------------------------------------------------------------------------

//	Formatage de la durée d'une tâche
function formatDuree(arr) {
	let h = arr[0];
	let m = arr[1];

	let hText = h === 0 ? '' : h + 'h';
	let mText = m === 0 ? '' : m + 'm';
	return h === 0 && m === 0 ? '... ?' : hText + mText;
}


function isVoid(prop) {
	if(typeof prop === 'string' && prop.length > 0)
		return false;
	return true;
}



//---------------------------------------------------------------------------
//	Le composant
//---------------------------------------------------------------------------
export default function Tache(props) {
	const tache = props.tache || {};
	

	//	Le nom du client et du chantier
	//---------------------------------------------------------------------------
	let name = isVoid(tache.client_name) === false ? tache.client_name : '';
	if(isVoid(tache.chantier_name) === false) {
		if(name !== '') name += ' - ';
		name += tache.chantier_name;
	}

	//	Les numéro de tel du client
	//---------------------------------------------------------------------------
	const fix = isVoid(tache.client_tel) === false ? <p>Numéro fix du client: <a href={`tel:${tache.client_tel}`} className="text-yellow-600 cursor-pointer hover:text-yellow-500 hover:underline">{tache.client_tel}</a></p> : '';
	const gsm = isVoid(tache.client_gsm) === false ? <p>GSM du client: <a href={`tel:${tache.client_gsm}`} className="text-yellow-600 cursor-pointer hover:text-yellow-500 hover:underline">{tache.client_gsm}</a></p> : '';
	const clientTelClass = fix !== '' || gsm !== '' ? 'text-xs text-gray-600' : 'hidden';



	//	La durée de la tâche
	//---------------------------------------------------------------------------
	const arrayDuree = getDuree(tache.start_at, tache.stop_at);
	const duree = formatDuree(arrayDuree);
	const dureeClass = arrayDuree[0] > 8 ? 'text-red-600' : 'text-gray-800';


	//	Les commentaires
	//---------------------------------------------------------------------------
	const comments = typeof tache.comment === 'string' ? tache.comment.split('\n') : [];
	const commentsClass = comments.length > 0 ? 'my-2 text-sm' : 'hidden';
	

	//	Rendu
	//---------------------------------------------------------------------------
	return (
		// inline-block w-full md:max-w-md
		<div className="section border-l-3  transition-all hover:bg-white hover:border-yellow-300">
			<div className="flex flex-row justify-between">
				
				<div>
					<div className="text-sm">{name}</div>
					<h5>{tache.description}</h5>
					<div className="text-xs text-gray-500">{tache.chantier_adr}</div>
				</div>

				<div className="text-gray-500 text-xs text-right">
					<div>Début:<input className="inputClass ml-2 pl-2 text-sm font-semibold" type="time" data-array="taches" data-index={props.index} name="taches.start_at" value={tache.start_at} onChange={props.onChangeCallback} /></div>
					<div>Fin: <input className="inputClass ml-2 pl-2 text-sm font-semibold" type="time" data-index={props.index} name="taches.stop_at" value={tache.stop_at} onChange={props.onChangeCallback} /></div>
					<div className={dureeClass}>Durée: <span className="font-semibold">{duree}</span></div>
				</div>
			</div>

			<div className={commentsClass}>
				{comments.map( comment => {
					return <p>{comment}</p>
				})}
			</div>
			
			<div className={clientTelClass}>
				{fix}
				{gsm}
			</div>
			
			<div className="mt-2 text-xs text-gray-500 flex flex-row justify-between">
				<div>Activité {tache.activite_code} - {tache.activite_name}</div>
				<div>
					<div className="relative flex flex-row" style={{ top: '-1rem', left: '.5rem', marginBottom: '-1rem' }}>
						{/* <div className="w-8 p-2 cursor-pointer rounded-full text-gray-500"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" /></svg></div> */}
						<div className="w-8 p-2 cursor-pointer rounded-full text-yellow-500 hover:text-orange-500 hover:bg-gray-50"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg></div>
					</div>
				</div>
			</div>
		</div>
	);
}