export default function RoundButton(props) {
	return (
		<span className="cursor-pointer select-none group" onClick={props.onClick}>
			<div className="inline-block bg-yellow-300 rounded-full w-10 h-10 text-center align-middle mr-2 font-semibold text-2xl leading-normal transition-all group-hover:shadow-md group-hover:bg-white">{props.signe}</div>
			<span className="text-sm font-semibold transition-colors text-gray-500 group-hover:text-gray-900">{props.text}</span>
		</span>
	);
}