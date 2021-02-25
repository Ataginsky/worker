import React, { useEffect, useRef, useState } from 'react';
import { NavLink, useRouteMatch } from 'react-router-dom';
import cx from "classnames";
import { iconCalculette, iconCheckList, iconSectionSettings, iconSectionStock, iconUserGroup } from './Icones';

const sections = [ 
	{icon: iconCheckList, title: 'Fiche journalière & planning', goTo: '/plannings'}, 
	// {icon: iconUserGroup, title: 'Gestion planning & équipes', goTo: '/groups'}, 
	{icon: iconSectionStock, title: 'Stock', goTo: '/warehouses'}, 
	{icon: iconCalculette, title: 'Comptabilité', goTo: '/accounting'}, 
	{icon: iconSectionSettings, title: 'Paramètres', goTo: '/settings'}
];

export default function MainMenuComponent(props) {

	const sectionItems = sections.map( (item, index) => 
		<Item 
			key={index} 
			icon={item.icon} 
			title={item.title} 
			goTo={item.goTo} 
		/> 
	)


	/*---------------------------------------------------------------------------------------
	 * SIDEBAR
	 	V3
			Tâches
				- Fiche journalière
				- Planning (+ gestion planning pour le boss)
				- Equipes

			Entrepôts
				
			Comptabilité
				- Clients
				- Devis
				- Factures

			Paramètres
				- Facturation
				- Utilisateurs
				- Licences
			
			V2
				Fiche journalière et planning (+ gestion planning pour le boss)
				Gestion équipes & utilisateurs
				Gestion entrepôt (stock)
				Gestion administrative et comptable
			
			V1
				Fiche journalière et planning
				Gestion planning & équipes
				Gestion entrepôt (stock)
				Gestion administrative et comptable
	 *---------------------------------------------------------------------------------------*/
	return (
		<div className={cx("containersStyle w-20 bg-theme-700 flex-shrink-0 flex flex-col items-center")}>
			<div className={cx("firstHeaderElementStyle mb-7")}>
				<div className="m-0 p-2 py-1 rounded bg-white text-theme-700 text-center text-2xl font-black">W</div>
				{/* <div className="m-0 p-2 py-1 text-white text-center text-3xl font-black">T</div> */}
			</div>
			
			{sectionItems}

		</div>
	)
}


function Item(props) {
	return (
		<NavLink to={props.goTo} strict component={NavItem} activeClassName="text-white bg-theme-600" title={props.title}>
			{props.icon()}
		</NavLink>
	);
}

const NavItem = React.forwardRef((props, ref) => {
	const nonActiveClass = props.className ? '' : 'text-theme-300';

	return (
		<a ref={ref} href={props.href} title={props.title} 
			 className={cx("hover:text-white mb-6 rounded-xl w-10 h-10 p-2 cursor-pointer", props.className, nonActiveClass)}>
			{props.children}
		</a>
	)
})