export default function RoundButton(props) {
	return (
		<span className="cursor-pointer select-none group font-normal" onClick={props.onClick}>
			<div className="inline-block bg-yellow-300 rounded-full w-10 h-10 text-center align-middle mr-2 text-2xl leading-none transition-all group-hover:shadow-md group-hover:bg-white">
				<span className="relative top-2">{props.signe}</span>
			</div>
			<span className="text-sm transition-colors text-gray-500 group-hover:text-gray-900">{props.text}</span>
		</span>
	);
}