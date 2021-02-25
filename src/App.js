import React from 'react';

import {
	HashRouter as Router,
	Switch,
	Route,
	Redirect,
	Link,
} from "react-router-dom";

import cx from "classnames";

// import MaFicheJournaliere from "./Pages/MaFicheJournaliere";
import { iconCalculette, iconCheckList, iconSectionSettings, iconSectionStock } from './Components/Icones';
import { SidebarAccounting, SidebarPlannings, SidebarSettings, SidebarWarehouses } from './Sidebars';


/* Theme colors:
 * orange ~= amber
 * customIndigo
 * red ~= rose
 * blueGray
 */


const menuSections = [
	{ 
		title: 'Fiche journalière & planning', 
		icon: iconCheckList, 
		goTo: '/plannings',
		sidebar: () => <SidebarPlannings />,
		page: () => <PagePlannings />,
	},
	{
		title: 'Stock', 
		icon: iconSectionStock, 
		goTo: '/warehouses',
		sidebar: () => <SidebarWarehouses	/>,
		page: () => <PageWarehouses />,
	},
	{ 
		title: 'Comptabilité', 
		icon: iconCalculette, 
		goTo: '/accounting',
		sidebar: () => <SidebarAccounting />,
		page: () => <PageAccounting />,
	},
	{ 
		title: 'Paramètres', 
		icon: iconSectionSettings, 
		goTo: '/settings',
		sidebar: () => <SidebarSettings />,
		page: () => <PageSettings />,
	}
];


/*-----------------------------------------------------------------------------------------
 * APPLICATION ENTRY POIN 
 * ---------------------------------------------------------------------------------------*/
function App() {

	// const APP_VERSION = '0.1.0 - build ' + new Date().toUTCString();

	return (
		<Router>
			{console.log('App.js got rendered')}

			<div className="h-screen flex flex-row">

				{/*---------------------------------------------------------------------------------------
					* MENU
				  *---------------------------------------------------------------------------------------*/}
				<div className={cx("containersStyle w-20 bg-theme-700 flex-shrink-0 flex flex-col items-center")}>
					<div className={cx("firstHeaderElementStyle mb-7")}>
						<div className="m-0 p-2 py-1 rounded bg-white text-theme-700 text-center text-2xl font-black">W</div>
						{/* <div className="m-0 p-2 py-1 text-white text-center text-3xl font-black">T</div> */}
					</div>
					
					{menuSections.map( page => 
						<Route key={page.goTo} path={page.goTo} children={ ({ match }) => (
							<MenuLink match={match} page={page} />
						)} />
					)}

				</div>


				{/*---------------------------------------------------------------------------------------
					* SIDEBAR
				  *---------------------------------------------------------------------------------------*/}
				<div className={cx("containersStyle w-60 px-7 bg-white flex-shrink-0")}>
					<Switch>
						{menuSections.map( page => 
							<Route key={page.goTo} path={page.goTo} render={page.sidebar} />
						)}
					</Switch>
				</div>


				{/*---------------------------------------------------------------------------------------
					* CONTENT
				  *---------------------------------------------------------------------------------------*/}
				<div className={cx("containersStyle px-7 flex-auto")}>
					<Switch>
						{menuSections.map( page => 
							<Route key={page.goTo} path={page.goTo} render={page.page} />
						)}
						
						<Route path="/" exact component={RedirectToHome} />
						<Route path="*" component={NoMatch} />
					</Switch>
				</div>


			</div>
		</Router>
	);
}


function MenuLink({ match, page }) {
	return (
		<Link to={page.goTo}>
			<div title={page.title} 
				className={cx("hover:text-white mb-6 rounded-xl w-10 h-10 p-2 cursor-pointer", match ? "text-white bg-theme-600" : "text-theme-300")}>
				{page.icon()}
			</div>
		</Link>
	)
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