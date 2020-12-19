import useConnexion from '../Hooks/useConnexion';

export default function InternetWatcher() {
	
	const internetAvaible = useConnexion();

	return (
		<h3>Connecté à Internet {internetAvaible === true ? 'oui' : 'non'}</h3>
	)
}