import React from 'react';

import {
	HashRouter as Router,
	Switch,
	Route,
	Redirect,
	Link,
	useParams,
	useRouteMatch,
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
		path: '/plannings',
		menu: {
			title: 'Fiche journalière & planning',
			icon: iconCheckList,
		},
		sidebar: () => <SidebarPlannings />,
		page: () => <PagePlannings />,
		subroutes: [
			{
				path: '/teams',
				page: () => <PageTeams />
			},
			{
				path: '/forms/:id',
				sidebar: () => <SidebarWarehouses />,
				page: () => <PageFormsId />
			},
			{
				path: '/forms',
				page: () => <PageForms />
			},
		]
	},
	{
		path: '/warehouses',
		menu: {
			title: 'Stock',
			icon: iconSectionStock,
		},
		sidebar: () => <SidebarWarehouses />,
		page: () => <PageWarehouses />,
	},
	{
		path: '/accounting',
		menu: {
			title: 'Comptabilité',
			icon: iconCalculette,
		},
		sidebar: () => <SidebarAccounting />,
		page: () => <PageAccounting />,
	},
	{
		path: '/settings',
		menu: {
			title: 'Paramètres',
			icon: iconSectionSettings,
		},
		sidebar: () => <SidebarSettings />,
		page: () => <PageSettings />,
	},
	{
		path: '/',
		page: () => <RedirectToHome path='/plannings' />,
	},
	{
		path: '*',
		page: () => <NoMatch />,
	}
];


/*-----------------------------------------------------------------------------------------
 * APPLICATION ENTRY POIN 
 * ---------------------------------------------------------------------------------------*/
function App() {

	// const APP_VERSION = '0.1.0 - build ' + new Date().toUTCString();

	const showMenusSection = menuSections.filter(page => page.menu)
		.map(page => 
			<Route key={page.path} path={page.path} children={({ match }) => (
				<MenuLink match={match} page={page} />
			)} />
		);

	const showSidebar = menuSections.filter(page => page.sidebar)
		.map(page => {
			let sidebars = []

			if(page.subroutes)
				sidebars = page.subroutes.filter(subPage => subPage.sidebar).map(subPage => 
					<Route key={page.path+subPage.path} path={page.path+subPage.path} render={subPage.sidebar} />
				)
			
			sidebars.push(<Route key={page.path} path={page.path} render={page.sidebar} />);

			return sidebars;
		});

	const showPageContent = menuSections.map(page => {
		let routes = []

		if(page.subroutes)
			routes = page.subroutes.map( subPage => 
				<Route key={page.path+subPage.path} path={page.path+subPage.path} render={subPage.page} />
			)
		
		routes.push(<Route key={page.path} path={page.path} render={page.page} />);

		return routes;
	});


	return (
		<Router>
			{console.log('App.js got rendered')}

			<div className="h-screen flex flex-row">

				{/* MAIN MENUS SECTION */}
				<div className={cx("containersStyle w-20 bg-theme-700 flex-shrink-0 flex flex-col items-center")}>
					<div className={cx("firstHeaderElementStyle mb-7")}>
						<div className="m-0 p-2 py-1 rounded bg-white text-theme-700 text-center text-2xl font-black">W</div>
						{/* <div className="m-0 p-2 py-1 text-white text-center text-3xl font-black">T</div> */}
					</div>

					{showMenusSection}

				</div>


				{/* SIDEBAR */}
				<div className={cx("containersStyle w-60 px-7 bg-white flex-shrink-0")}>
					<Switch>{showSidebar}</Switch>
				</div>


				{/* PAGE CONTENT */}
				<div className={cx("containersStyle px-7 flex-auto")}>
					<Switch>{showPageContent}</Switch>
				</div>


			</div>
		</Router>
	);
}


function MenuLink({ match, page }) {
	return (
		<Link to={page.path}>
			<div title={page.menu.title}
				className={cx("hover:text-white mb-6 rounded-xl w-10 h-10 p-2 cursor-pointer", match ? "text-white bg-theme-600" : "text-theme-300")}>
				{page.menu.icon()}
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

function PageTeams(props) {
	return <div>Je suis teams</div>
}

function PageForms(props) {
	const { url } = useRouteMatch();

	return <div>
		Liste de toutes les fiches de l'utilisateur connecté:
		<ul>
			<li><Link to={`${url}/123456`}>Fiche une</Link></li>
			<li><Link to={`${url}/456789`}>Fiche deux</Link></li>
		</ul>
	</div>
}

function PageFormsId(props) {
	const { id } = useParams();

	return <div>
		Je suis la fiche avec l'id {id}
	</div>
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
		<Redirect to={props.path} />
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


/*---------------------------------------------------------------------------------------
* SIDEBAR
****V3****
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

****V2****
	Fiche journalière et planning (+ gestion planning pour le boss)
	Gestion équipes & utilisateurs
	Gestion entrepôt (stock)
	Gestion administrative et comptable

****V1****
	Fiche journalière et planning
	Gestion planning & équipes
	Gestion entrepôt (stock)
	Gestion administrative et comptable
*---------------------------------------------------------------------------------------*/


export default App;