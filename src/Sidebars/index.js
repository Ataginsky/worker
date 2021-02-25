import { iconAllProjects } from "../Components/Icones";
import SidebarMenuItem from "./SidebarMenuItem";

import cx from "classnames";


export const SidebarPlannings = (props) => (
	<>
		<div className={cx("firstHeaderElementStyle mb-8 justify-between")}>
			<h3>Fiche</h3>
			<button className="rounded-full h-8 w-8 bg-theme-700 text-theme-50 text-xl leading-none outline-none">+</button>
		</div>
		<SidebarMenuItem title="Fiche" icon={iconAllProjects()} />
	</>
)


export const SidebarWarehouses = (props) => (
	<>
		<div className={cx("firstHeaderElementStyle mb-8 justify-between")}>
			<h3>Nouvel entrepot</h3>
			<button className="rounded-full h-8 w-8 bg-theme-700 text-theme-50 text-xl leading-none outline-none">+</button>
		</div>
		<SidebarMenuItem title="Tout les entrepots" icon={iconAllProjects()} />
	</>
)


export const SidebarAccounting = (props) => (
	<>
		<div className={cx("firstHeaderElementStyle mb-8 justify-between")}>
			<h3>Client</h3>
			<button className="rounded-full h-8 w-8 bg-theme-700 text-theme-50 text-xl leading-none outline-none">+</button>
		</div>
		<SidebarMenuItem title="Factures" icon={iconAllProjects()} />
	</>
)


export const SidebarSettings = (props) => (
	<>
		<div className={cx("firstHeaderElementStyle mb-8 justify-between")}>
			<h3>Utilisateur</h3>
			<button className="rounded-full h-8 w-8 bg-theme-700 text-theme-50 text-xl leading-none outline-none">+</button>
		</div>
		<SidebarMenuItem title="Profil" icon={iconAllProjects()} />
	</>
)

{/* <div className="text-theme-700 mb-6">
	<div className="text-xs text-gray-400">A afficher sur mobile</div>
	<div className="inline-block w-6 mr-2 align-top">{iconMenu}</div>
	Menu principal
</div> */}

{/* 
<div className={cx("firstHeaderElementStyle mb-8 justify-between")}>
	<h3>Projects</h3>
	<button className="rounded-full h-8 w-8 bg-theme-700 text-theme-50 text-xl leading-none outline-none">+</button>
</div>
<SidebarMenuItem title="All projects" icon={iconAllProjects()} />
<SidebarMenuItem title="Pinned" icon={iconPinned()} />
<SidebarMenuItem title="In process" icon={iconInProcess()} opened={true}>
	<SubMenuItem />
</SidebarMenuItem>
<SidebarMenuItem title="Done" icon={iconDone()} /> */}
