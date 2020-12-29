export default function getDuree(depart, arrivee) {
	if (typeof depart !== 'string' || typeof arrivee !== 'string')
		return [0, 0];

	let sDepart = depart.split(':');
	let sArrivee = arrivee.split(':');

	if (sDepart.length < 2 || sArrivee.length < 2)
		return [0, 0];

	let dateDepart = new Date(0, 0, 0, sDepart[0], sDepart[1], 0, 0);
	let dateArrivee = new Date(0, 0, 0, sArrivee[0], sArrivee[1], 0, 0);

	let diff = (dateArrivee.getTime() - dateDepart.getTime()) / 1000 / 60;

	if (diff < 0) diff = 1440 + diff;

	let h = parseInt(diff / 60);
	let m = diff - (h * 60);

	return [h, m];
}