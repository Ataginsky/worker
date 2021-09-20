import getDuree from "./../Helpers/DureeCalculator";


//---------------------------------------------------------------------------
//	FORMAT DE LA DUREE D'UN TRAJET
//---------------------------------------------------------------------------
function formatDuree(arr) {
	let h = arr[0];
	let m = arr[1];

	let hText = h === 0 ? '' : h > 1 ? h + ' heures' : h + ' heure';
	let mText = m === 0 ? '' : m > 1 ? m + ' minutes' : m + ' minute';
	let text = <>Le trajet à duré {h === 0 && m === 0 ? '... ?' : <span className="font-semibold"> {hText} {mText}</span>}</>;
	return text;
}


//---------------------------------------------------------------------------
//	LE COMPOSANT
//---------------------------------------------------------------------------
export default function TrajetDescriptro(props) {

	const arrayDuree = getDuree(props.trajet.heureDepart, props.trajet.heureArrivee);
	const duree = formatDuree(arrayDuree);
	const dureeClass = arrayDuree[0] > 4 ? 'text-red-600' : 'text-blue-600';
	const dureeIconClass = arrayDuree[0] > 4 ? 'text-red-400' : 'text-blue-400';


	return (
		<div className="section md:w-3/6 md:inline-block">
			<div className="mb-2 text-sm text-gray-700 font-semibold">{props.title}</div>
			{props.select}

			<div className="mt-2 text-sm text-gray-500">
				<div className="w-4 h-5 inline-block align-middle mr-3 text-gray-400">
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" /></svg>
					{/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path strokeWidth={1} fillRule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clipRule="evenodd" /></svg> */}
				</div>
				{props.start}
			</div>

			<div className="text-sm text-gray-500">
				<div className="w-4 h-5 inline-block align-middle mr-3 text-gray-400">
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" /></svg>
					{/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path strokeWidth={1} fillRule="evenodd" d="M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4A1 1 0 0116 13H6a1 1 0 00-1 1v3a1 1 0 11-2 0V6z" clipRule="evenodd" /></svg> */}
					{/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path strokeWidth={1} fillRule="evenodd" d="M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.707 3.293a1 1 0 010 1.414L9.414 9H17a1 1 0 110 2H9.414l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z" clipRule="evenodd" /></svg> */}
				</div>
				{props.stop}
			</div>

			<div className={`text-sm ${dureeClass}`}>
				<div className={`w-4 h-5 inline-block align-middle mr-3 ${dureeIconClass}`}>
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
				</div>
				{duree}
			</div>
		</div>
	);
}