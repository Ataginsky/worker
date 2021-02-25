import { iconAllProjects, iconCalculette, iconCalendar, iconCheckList, iconDocumentText, iconDone, iconInProcess, iconPinned, iconSectionStock, iconUserGroup } from "../Components/Icones";
import SidebarMenuItem from "./SidebarMenuItem";

import cx from "classnames";
import { useRouteMatch } from "react-router-dom";


export const SidebarPlannings = (props) => {
	const { url } = useRouteMatch();

	return (<>
		{console.log('Render SidebarPlannings')}
		<div className={cx("firstHeaderElementStyle mb-8 justify-between")}>
			<h3>Fiche</h3>
			<button className="rounded-full h-8 w-8 bg-theme-700 text-theme-50 text-xl leading-none outline-none">+</button>
		</div>
		<SidebarMenuItem path={`${url}`} title="Planning" icon={iconCalendar()} />
		<SidebarMenuItem path={`${url}/teams`} title="Equipes" icon={iconUserGroup()} />
		<SidebarMenuItem path={`${url}/forms`} title="Fiches" icon={iconCheckList()} />
	</>
)}


export const SidebarWarehouses = (props) => {
	const { url } = useRouteMatch();

	return (<>
		<div className={cx("firstHeaderElementStyle mb-8 justify-between")}>
			<h3>Entrepôt</h3>
			<button className="rounded-full h-8 w-8 bg-theme-700 text-theme-50 text-xl leading-none outline-none">+</button>
		</div>
		<SidebarMenuItem path={`${url}/id_1`} title="Plennesses" icon={iconSectionStock()} />
		<SidebarMenuItem path={`${url}/id_2`} title="CAN" icon={iconSectionStock()} />
	</>
)}


export const SidebarAccounting = (props) => {
	const { url } = useRouteMatch();

	return (<>
		<div className={cx("firstHeaderElementStyle mb-8 justify-between")}>
			<h3>Client</h3>
			<button className="rounded-full h-8 w-8 bg-theme-700 text-theme-50 text-xl leading-none outline-none">+</button>
		</div>
		<SidebarMenuItem path={`${url}/clients`} title="Clients" icon={iconUserGroup()} />
		<SidebarMenuItem path={`${url}/quotes`} title="Devis" icon={iconCalculette()} />
		<SidebarMenuItem path={`${url}/performances`} title="Prestations" icon={iconCheckList()} />
		<SidebarMenuItem path={`${url}/invoices`} title="Factures" icon={iconDocumentText()} />
	</>
)}


export const SidebarSettings = (props) => {
	const { url } = useRouteMatch();

	return (<>
		<div className={cx("firstHeaderElementStyle mb-8 justify-between")}>
			<h3>Utilisateur</h3>
			<button className="rounded-full h-8 w-8 bg-theme-700 text-theme-50 text-xl leading-none outline-none">+</button>
		</div>
		<SidebarMenuItem path={`${url}/users/:id`} title="Profil" icon={iconInProcess()} />
		<SidebarMenuItem path={`${url}/users`} title="Utilisateurs" icon={iconUserGroup()} />
		<SidebarMenuItem path={`${url}/licences`} title="Licences" icon={iconDone()} />
		<SidebarMenuItem path={`${url}/invoices`} title="Facturation" icon={iconDocumentText()} />
	</>
)}

/* 
<div className="text-theme-700 mb-6">
	<div className="text-xs text-gray-400">A afficher sur mobile</div>
	<div className="inline-block w-6 mr-2 align-top">{iconMenu}</div>
	Menu principal
</div> */

/* 
<div className={cx("firstHeaderElementStyle mb-8 justify-between")}>
	<h3>Projects</h3>
	<button className="rounded-full h-8 w-8 bg-theme-700 text-theme-50 text-xl leading-none outline-none">+</button>
</div>
<SidebarMenuItem title="All projects" icon={iconAllProjects()} />
<SidebarMenuItem title="Pinned" icon={iconPinned()} />
<SidebarMenuItem title="In process" icon={iconInProcess()} opened={true}>
	<SubMenuItem />
</SidebarMenuItem>
<SidebarMenuItem title="Done" icon={iconDone()} /> 
*/
