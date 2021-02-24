import React from 'react';


const iconRight =
	<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
		<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
	</svg>;

const iconDown = 
	<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
		<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
	</svg>;



export default React.memo(function Item(props) {
	
	const iconArrow = props.opened ? iconDown : iconRight;
	
	return (
		<div>
			<div className="flex flex-row justify-between items-center text-sm tracking-tight mt-5">
				<div>
					<div className="inline-block w-5 text-gray-350 mr-3 align-top">{props.icon}</div>
					{props.title}
				</div>
				<div className="w-4 text-gray-800">{iconArrow}</div>
			</div>
			{props.children}
		</div>
	);
})