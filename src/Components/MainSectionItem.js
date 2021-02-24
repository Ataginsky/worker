import React from 'react';

export default React.memo(function Item(props) {
	let hover = " hover:text-white";
	let selected = props.selected ? " text-white bg-theme-600 " : " text-theme-300"; // text-twindigo-300
	let className = "mb-6 rounded-xl w-10 h-10 p-2 cursor-pointer" + selected + hover;

	/*
	    background-color: hsl(234 55% 55% / 1);
    border-radius: 50%;
    height: 2.3rem;
    width: 2.3rem;
		padding: 0.4rem;
		*/

	return (
		<div className={className} onClick={props.onClick} title={props.title}>
			{props.icon}
		</div>
	);
})