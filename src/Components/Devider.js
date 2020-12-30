export default function Devider(props) {
	return (
		<div className="my-4 w-full flex flex-row items-center">
			<div className="flex-auto border-b-2 border-dashed border-gray-300"></div>
			<div className="flex-shrink-0 px-4 uppercase font-semibold text-xs text-gray-300">{props.children}</div>
			<div className="flex-auto border-b-2 border-dashed border-gray-300"></div>
		</div>
	);
}