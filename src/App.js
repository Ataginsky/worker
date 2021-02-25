import React, { useEffect, useState } from 'react';

import {
  HashRouter as Router,
  Switch,
  Route,
	useRouteMatch,
	Redirect,
  // useParams
} from "react-router-dom";

import cx from "classnames";

// import MaFicheJournaliere from "./Pages/MaFicheJournaliere";
import MainSectionMenu from "./Components/MainSectionMenu";
import SidebarMenuItem from "./Components/SidebarMenuItem";
import { iconAllProjects, iconDone, iconInProcess, iconPinned } from './Components/Icones';


/* Theme colors:
 * orange ~= amber
 * customIndigo
 * red ~= rose
 * blueGray
 */


 

/*-----------------------------------------------------------------------------------------
 * APPLICATION ENTRY POIN 
 * ---------------------------------------------------------------------------------------*/
function App() {
	
	// const APP_VERSION = '0.1.0 - build ' + new Date().toUTCString();

	return (
		<Router>
			{console.log('App.js got rendered')}

			<div className="h-screen flex flex-row">
				
				<MainSectionMenu />

				{/*---------------------------------------------------------------------------------------
					* MENU 
				  *---------------------------------------------------------------------------------------*/}
				<div className={cx("containersStyle w-60 px-7 bg-white flex-shrink-0")}>
					
					{/* <div className="text-theme-700 mb-6">
						<div className="text-xs text-gray-400">A afficher sur mobile</div>
						<div className="inline-block w-6 mr-2 align-top">{iconMenu}</div>
						Menu principal
					</div> */}

					<div className={cx("firstHeaderElementStyle mb-8 justify-between")}>
						<h3>Projects</h3>
						<button className="rounded-full h-8 w-8 bg-theme-700 text-theme-50 text-xl leading-none outline-none">+</button>
					</div>
					<SidebarMenuItem title="All projects" icon={iconAllProjects()} />
					<SidebarMenuItem title="Pinned" icon={iconPinned()} />
					<SidebarMenuItem title="In process" icon={iconInProcess()} opened={true}>
						{/* <SubMenuItem /> */}
					</SidebarMenuItem>
					<SidebarMenuItem title="Done" icon={iconDone()} />
				</div>
				

				{/*---------------------------------------------------------------------------------------
					* CONTENT 
				  *---------------------------------------------------------------------------------------*/}
				<div className={cx("containersStyle px-7 flex-auto")}>
					<Switch>
						<Route path="/plannings" component={PagePlannings} />
						<Route path="/warehouses" component={PageWarehouses} />
						<Route path="/accounting" component={PageAccounting} />
						<Route path="/settings" component={PageSettings} />
						<Route path="/" exact component={RedirectToHome} />
						<Route path="*" component={NoMatch} />
					</Switch>
				</div>


			</div>
		</Router>
	);
}


function PagePlannings(props) {
	return (
		<>
			<div className={cx("firstHeaderElementStyle mb-8 justify-between")}>
				<input type="text" className="h-full bg-gray-100 p-2 px-4 text-sm rounded-full" placeholder="Search..." />
				<span>10 may - 13 may</span>
			</div>

			<h3>To do</h3>
		</>
	)
}

function PageWarehouses(props) {
	return (
		<>
			<div className={cx("firstHeaderElementStyle mb-8 justify-between")}>
				<input type="text" className="h-full bg-gray-100 p-2 px-4 text-sm rounded-full" placeholder="Search..." />
				<span>10 may - 13 may</span>
			</div>

			<h3>Entrepôts</h3>
		</>
	)
}

function PageAccounting(props) {
	return (
		<>
			<div className={cx("firstHeaderElementStyle mb-8 justify-between")}>
				<input type="text" className="h-full bg-gray-100 p-2 px-4 text-sm rounded-full" placeholder="Search..." />
				<span>10 may - 13 may</span>
			</div>

			<h3>Comptabilité</h3>
		</>
	)
}

function PageSettings(props) {
	return (
		<>
			<div className={cx("firstHeaderElementStyle mb-8 justify-between")}>
				<input type="text" className="h-full bg-gray-100 p-2 px-4 text-sm rounded-full" placeholder="Search..." />
				<span>10 may - 13 may</span>
			</div>

			<h3>Paramètres</h3>
		</>
	)
}

function RedirectToHome(props) {
	return (
		<Redirect to="/tasks" /> 
		// {loggedIn ? <Redirect to="/dashboard" /> : <PublicHomePage />}
	)
}

function NoMatch(props) {
	return (
		<>
			<div className={cx("firstHeaderElementStyle mb-8 justify-between")}>
				<input type="text" className="h-full bg-gray-100 p-2 px-4 text-sm rounded-full" placeholder="Search..." />
				<span>10 may - 13 may</span>
			</div>

			<h3>Oups 404! Cette page n'existe pas...</h3>
		</>
	)
}


export default App;