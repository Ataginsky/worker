export default function RadioItem(props) {
	let className = "cursor-pointer inline-block m-1 px-3 py-2 bg-white border-gray-200 border-2";
	className += " hover:border-gray-300 hover:bg-gray-100";
	className += props.checked === props.value ? ' bg-yellow-50 border-yellow-500' : '';
	
	return (
		<label className={className}>
			<input className="mr-2" type="radio" radioGroup={props.radioGroup} name={props.name} checked={props.checked === props.value} value={props.value} onChange={props.onChange}/>
			{props.children}
		</label>
	)
}