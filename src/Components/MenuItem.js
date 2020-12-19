import { Link } from "react-router-dom";

export default function MenuItem(props) {
	return (
		<span className="px-4"><Link to={props.to}>{props.text}</Link></span>
	);
}