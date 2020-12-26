import { Link } from "react-router-dom";

export default function MenuItem(props) {

	let className = "px-4 py-1 text-gray-500"
	className += " border-b-3 border-transparent hover:border-yellow-400";
	// let activeClass = props.active ? 'text-gray-700 rounded bg-yellow-200' : '';
	let activeClass = props.active ? 'text-gray-900  border-yellow-400' : '';
	
	return (
		<span className={className + ' ' + activeClass}><Link to={props.to}>{props.text}</Link></span>
	);
}