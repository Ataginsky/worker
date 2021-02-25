import React from 'react';
import { Link } from 'react-router-dom';
import { iconDown, iconRight } from '../Components/Icones';

export default React.memo(function Item(props) {
	
	const iconArrow = props.opened ? iconDown() : iconRight();
	
	return (
		<div>
			<div className="flex flex-row justify-between items-center text-sm tracking-tight mt-5">
				<div>
					<div className="inline-block w-5 text-gray-350 mr-3 align-top">{props.icon}</div>
					<Link to={props.path}>
						<span className="hover:underline">{props.title}</span>
					</Link>
				</div>
				<div className="w-4 text-gray-800">{iconArrow}</div>
			</div>
			{props.children}
		</div>
	)
})