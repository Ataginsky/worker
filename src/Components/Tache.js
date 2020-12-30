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
		if(tache.client_name !== tache.chantier_name) {
			let separator = '';
			if(name !== '') separator += ' - ';
			
			name = <>{tache.client_name}{separator}<span className="font-medium">{tache.chantier_name}</span></>;
		}
	}

	//	Les numéro de tel du client
	//---------------------------------------------------------------------------
	const fix = isVoid(tache.client_tel) === false ? <>Fix du client: <a href={`tel:${tache.client_tel}`} className="text-yellow-600 cursor-pointer hover:text-yellow-500 hover:underline">{tache.client_tel}</a></> : '';
	const gsm = isVoid(tache.client_gsm) === false ? <>GSM du client: <a href={`tel:${tache.client_gsm}`} className="text-yellow-600 cursor-pointer hover:text-yellow-500 hover:underline">{tache.client_gsm}</a></> : '';
	const clientTelClass = fix !== '' || gsm !== '' ? 'mt-3 text-xs text-gray-500 font-light' : 'hidden';



	//	La durée de la tâche
	//---------------------------------------------------------------------------
	const arrayDuree = getDuree(tache.start_at, tache.stop_at);
	const duree = formatDuree(arrayDuree);
	const dureeClass = arrayDuree[0] > 8 ? 'text-red-500' : 'text-gray-500';


	//	Les commentaires
	//---------------------------------------------------------------------------
	let comments = typeof tache.comment === 'string' ? tache.comment.split('\n') : [];
	if(comments.length === 1 && comments[0] === '') comments = [];
	const commentsClass = comments.length > 0 ? 'mt-3 text-sm text-gray-600' : 'hidden';
	

	//	Rendu
	//---------------------------------------------------------------------------
	const iconClass = "inline-block w-4 h-4 mr-3 align-bottom text-gray-400";

	return (
		// inline-block w-full md:max-w-md
		<div className="section border-l-3  transition-all hover:bg-gray-50 hover:border-yellow-300">
			
			{/* pb-3 border-b-3 border-dotted border-gray-200 */}
			<div className="flex flex-row justify-between">
				<div>
					<div className="text-sm text-gray-400 font-light">{name}</div>
					<div className="text-sm text-gray-700 font-semibold">{tache.description}</div>
					<div className="text-xs text-gray-500 mt-1 font-light">
						<div className={iconClass}>
							{/* Location <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg> */}
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
							{/* Map <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" /></svg>					 */}
						</div>
						{tache.chantier_adr}
					</div>
				</div>

				{/* <div className="p-2 rounded-tr-md text-blue-50 text-xs text-right bg-blue-500"> */}
				<div className="text-gray-500 text-xs text-right font-light">
					<div>Début:<input className="inputClass ml-2 pl-2 w-20 text-sm font-normal" type="time" data-array="taches" data-index={props.index} name="taches.start_at" value={tache.start_at} onChange={props.onChangeCallback} /></div>
					<div>Fin: <input className="inputClass ml-2 pl-2 w-20 text-sm font-normal" type="time" data-index={props.index} name="taches.stop_at" value={tache.stop_at} onChange={props.onChangeCallback} /></div>
					<div className={dureeClass}>Durée: <span className="font-normal text-gray-600">{duree}</span></div>
				</div>
			</div>

			<div className={commentsClass}>
				<div className="inline-block w-4 h-4 mr-3 align-top relative" style={{ top: '2px' }}>
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 6h16M4 12h16m-7 6h7" /></svg>
				</div>
				<div className="inline-block">
					{comments.map( comment => {
						return <p>{comment}</p>
					})}
				</div>
			</div>
			
			<div className={clientTelClass}>
				{fix !== '' && 
					<div>
						<div className={iconClass}>
							<svg viewBox="0 0 74 74"><path opacity="0.40" d="m26.22 60.78h-2.9a1 1 0 1 1 0-2h2.9a1 1 0 0 1 0 2z"/><path opacity="0.40" d="m62.2 60.78h-19.01a1 1 0 0 1 0-2h19.01a1 1 0 0 0 1-1v-11.21a1.006 1.006 0 0 0 -.379-.783l-10.127-8.127a1 1 0 0 1 -.374-.78v-8.74h-30.64v8.74a1 1 0 0 1 -.374.78l-10.13 8.13a1 1 0 0 0 -.376.78v11.21a1 1 0 0 0 1 1h4.52a1 1 0 0 1 0 2h-4.52a3 3 0 0 1 -3-3v-11.21a3 3 0 0 1 1.121-2.338l9.759-7.832v-9.26a1 1 0 0 1 1-1h32.64a1 1 0 0 1 1 1v9.26l9.756 7.83a3 3 0 0 1 1.124 2.34v11.21a3 3 0 0 1 -3 3z"/><path opacity="0.40" d="m36.19 60.78h-2.97a1 1 0 0 1 0-2h2.97a1 1 0 0 1 0 2z"/><path opacity="0.40" d="m68.28 36.517h-12.24a3.724 3.724 0 0 1 -3.72-3.72v-4.657h-30.64v4.66a3.724 3.724 0 0 1 -3.72 3.72h-12.24a3.724 3.724 0 0 1 -3.72-3.72v-5.34c0-8.785 11.775-13.24 35-13.24s35 4.455 35 13.24v5.34a3.724 3.724 0 0 1 -3.72 3.717zm-47.6-10.377h32.64a1 1 0 0 1 1 1v5.66a1.722 1.722 0 0 0 1.72 1.72h12.24a1.722 1.722 0 0 0 1.72-1.72v-5.34c0-7.353-11.411-11.24-33-11.24s-33 3.887-33 11.24v5.34a1.722 1.722 0 0 0 1.72 1.72h12.24a1.722 1.722 0 0 0 1.72-1.72v-5.66a1 1 0 0 1 1-1z"/><path opacity="0.40" d="m37 55a9.625 9.625 0 1 1 9.625-9.625 9.636 9.636 0 0 1 -9.625 9.625zm0-17.25a7.625 7.625 0 1 0 7.625 7.625 7.634 7.634 0 0 0 -7.625-7.625z"/></svg>
							{/* <svg viewBox="0 0 74 74"><path d="m26.22 60.78h-2.9a1 1 0 1 1 0-2h2.9a1 1 0 0 1 0 2z"/><path d="m62.2 60.78h-19.01a1 1 0 0 1 0-2h19.01a1 1 0 0 0 1-1v-11.21a1.006 1.006 0 0 0 -.379-.783l-10.127-8.127a1 1 0 0 1 -.374-.78v-8.74h-30.64v8.74a1 1 0 0 1 -.374.78l-10.13 8.13a1 1 0 0 0 -.376.78v11.21a1 1 0 0 0 1 1h4.52a1 1 0 0 1 0 2h-4.52a3 3 0 0 1 -3-3v-11.21a3 3 0 0 1 1.121-2.338l9.759-7.832v-9.26a1 1 0 0 1 1-1h32.64a1 1 0 0 1 1 1v9.26l9.756 7.83a3 3 0 0 1 1.124 2.34v11.21a3 3 0 0 1 -3 3z"/><path d="m36.19 60.78h-2.97a1 1 0 0 1 0-2h2.97a1 1 0 0 1 0 2z"/><path d="m68.28 36.517h-12.24a3.724 3.724 0 0 1 -3.72-3.72v-4.657h-30.64v4.66a3.724 3.724 0 0 1 -3.72 3.72h-12.24a3.724 3.724 0 0 1 -3.72-3.72v-5.34c0-8.785 11.775-13.24 35-13.24s35 4.455 35 13.24v5.34a3.724 3.724 0 0 1 -3.72 3.717zm-47.6-10.377h32.64a1 1 0 0 1 1 1v5.66a1.722 1.722 0 0 0 1.72 1.72h12.24a1.722 1.722 0 0 0 1.72-1.72v-5.34c0-7.353-11.411-11.24-33-11.24s-33 3.887-33 11.24v5.34a1.722 1.722 0 0 0 1.72 1.72h12.24a1.722 1.722 0 0 0 1.72-1.72v-5.66a1 1 0 0 1 1-1z"/><path d="m37 55a9.625 9.625 0 1 1 9.625-9.625 9.636 9.636 0 0 1 -9.625 9.625zm0-17.25a7.625 7.625 0 1 0 7.625 7.625 7.634 7.634 0 0 0 -7.625-7.625z"/></svg> */}
						</div>
						{fix}
					</div>
				}

				{gsm !== '' && 
					<div>
						<div className={iconClass}>
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
						</div>
						{gsm}
					</div>
				}
			</div>
			
			<div className="mt-3 text-xs text-gray-500 flex flex-row justify-between font-light">
				<div>
					<div className={iconClass}>{activityIcon}</div>
					Activité {tache.activite_code} - {tache.activite_name}
				</div>

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


const activityIcon = <>
	<svg viewBox="0 0 511.978 511.978">
		<path opacity="0.40" stroke-width="0" id="svg_2" d="m283.929,153.071c-2.929,-2.929 -7.678,-2.93 -10.606,-0.001l-8.242,8.241c-2.93,2.929 -2.93,7.678 -0.001,10.606c1.465,1.465 3.384,2.197 5.304,2.197c1.919,0 3.839,-0.732 5.303,-2.196l8.242,-8.241c2.929,-2.929 2.929,-7.678 0,-10.606z"/>
		<path opacity="0.40" stroke-width="0" id="svg_3" d="m290.835,194.567c1.919,0 3.839,-0.732 5.304,-2.197l8.241,-8.242c2.929,-2.929 2.929,-7.678 -0.001,-10.606c-2.928,-2.928 -7.677,-2.929 -10.606,0.001l-8.241,8.242c-2.929,2.929 -2.929,7.678 0.001,10.606c1.463,1.463 3.383,2.196 5.302,2.196z"/>
		<path opacity="0.40" stroke-width="0" id="svg_4" d="m314.225,193.974l-8.241,8.242c-2.929,2.929 -2.929,7.678 0.001,10.606c1.464,1.464 3.384,2.196 5.303,2.196s3.839,-0.732 5.304,-2.197l8.241,-8.242c2.929,-2.929 2.929,-7.678 -0.001,-10.606c-2.928,-2.928 -7.677,-2.929 -10.607,0.001z"/>
		<path opacity="0.40" stroke-width="0" id="svg_5" d="m326.435,233.275c1.465,1.464 3.385,2.196 5.304,2.196s3.839,-0.732 5.304,-2.196l8.242,-8.242c2.929,-2.93 2.929,-7.678 0,-10.607c-2.93,-2.928 -7.678,-2.928 -10.607,0l-8.242,8.242c-2.93,2.929 -2.93,7.677 -0.001,10.607z"/>
		<path opacity="0.40" stroke-width="0" id="svg_6" d="m61.89,425.858l-13.838,13.837c-2.93,2.929 -2.93,7.678 -0.001,10.606c2.928,2.928 7.677,2.931 10.606,0.001l13.838,-13.837c2.93,-2.929 2.93,-7.678 0.001,-10.606s-7.677,-2.93 -10.606,-0.001z"/>
		<path opacity="0.40" stroke-width="0" id="svg_11" d="m322.554,280.089c44.431,9.216 90.304,-4.315 122.577,-36.588c37.988,-37.986 48.732,-93.366 31.268,-141.294c-0.878,-2.407 -2.923,-4.2 -5.425,-4.754c-2.502,-0.553 -5.113,0.208 -6.926,2.019l-61.606,61.607l-51.396,-13.771l-13.772,-51.396l7.386,-7.385c2.929,-2.93 2.929,-7.678 0,-10.607c-2.929,-2.927 -7.677,-2.929 -10.607,0l-10.447,10.447c-1.895,1.896 -2.634,4.657 -1.94,7.245l16.014,59.761c0.693,2.588 2.715,4.609 5.303,5.303l59.761,16.013c2.588,0.692 5.35,-0.045 7.245,-1.94l55.869,-55.87c10.241,40.488 -1.453,84.139 -31.331,114.016c-28.575,28.576 -69.293,40.73 -108.924,32.508c-21.826,-4.527 -44.445,2.914 -59.032,19.42l-159.29,180.214c-0.023,0.025 -0.046,0.052 -0.068,0.078c-4.959,5.769 -10.955,10.296 -17.821,13.454c-3.764,1.73 -5.411,6.185 -3.68,9.947c1.733,3.768 6.188,5.409 9.947,3.68c8.823,-4.058 16.526,-9.866 22.895,-17.264l159.256,-180.176c11.031,-12.483 28.174,-18.107 44.744,-14.667z"/>
		<path opacity="0.40" stroke-width="0" id="svg_12" d="m63.143,483.185c-12.371,-1.004 -24.021,-6.393 -32.801,-15.174c-21.48,-21.478 -20.41,-56.832 2.898,-76.867c0.026,-0.022 0.053,-0.045 0.078,-0.068l180.214,-159.29c16.505,-14.588 23.946,-37.208 19.42,-59.033c-8.221,-39.629 3.931,-80.348 32.507,-108.923c29.877,-29.878 73.525,-41.574 114.016,-31.331l-24.219,24.218c-2.929,2.93 -2.929,7.678 0,10.607c2.93,2.928 7.678,2.928 10.607,0l33.018,-33.018c1.812,-1.812 2.573,-4.424 2.019,-6.926s-2.347,-4.547 -4.754,-5.425c-47.933,-17.465 -103.307,-6.718 -141.294,31.267c-32.16,32.161 -45.838,77.983 -36.587,122.576c3.436,16.569 -2.184,33.716 -14.666,44.749l-180.178,159.258c-29.688,25.56 -31.413,71.085 -3.686,98.812c11.294,11.295 26.279,18.227 42.194,19.519c4.118,0.332 7.746,-2.73 8.082,-6.869c0.336,-4.129 -2.739,-7.747 -6.868,-8.082z"/>
	</svg>
</>;