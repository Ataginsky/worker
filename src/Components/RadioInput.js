export default function RadioInput(props) {
	/* let className = 'cursor-pointer inline-block m-1 px-3 py-2 bg-white border-gray-200 border-2';
	className += ' hover:border-yellow-500';
	className += props.checked === props.value ? ' bg-yellow-50 border-yellow-500' : '';
 */

	/* let className = 'cursor-pointer inline-block m-1 px-3 py-2 bg-white transition-shadow rounded';
	className += ' hover:border-yellow-500 hover:shadow-xl';
	className += props.checked === props.value ? ' bg-yellow-50 border-yellow-500 shadow-lg' : ' shadow-sm';
 */

	// let bgColor = 'hsl(43 77% 78% / 1)';
	let className = 'cursor-pointer inline-block m-1 px-3 py-2 rounded border text-sm';
	className += ' transition-all hover:bg-white hover:shadow';
	className += props.checked === props.value ? ' border-t-2 bg-indigo-50 text-indigo-800 border-indigo-400' : ' bg-gray-50 text-gray-700 border-gray-300';


	return (
		<label className={className}>
			<input 	className="mr-2 " type="radio" 
							radioGroup={props.radioGroup} 
							name={props.name} 
							checked={props.checked === props.value} 
							value={props.value} 
							onChange={props.onChange} 
		/>
			<span className="select-none">{props.children}</span>
		</label>
	)
}