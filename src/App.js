import { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import cx from "classnames";
// import MaFicheJournaliere from "./Pages/MaFicheJournaliere";
import MainSectionItem from "./Components/MainSectionItem";
import SidebarMenuItem from "./Components/SidebarMenuItem";

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
	
	let APP_VERSION = '0.1.0 - build ' + new Date().toUTCString();


	let containersStyle = "py-8 overflow-x-auto";
	let firstHeaderStyle = "h-11 flex flex-row items-center";

	
	//--- SIDEBAR SECTIONS
	let sidebarAppSections = [ 
		{icon: iconCheckList, title: 'Fiche journalière & planning'}, 
		{icon: iconUserGroup, title: 'Gestion planning & équipes'}, 
		{icon: iconSectionStock, title: 'Gestion du stock'}, 
		{icon: iconCalculette, title: 'Gestion administrative & compta'}, 
		{icon: iconSectionSettings, title: 'Paramètres'}
	];
	let [selectedAppSection, setSelectedAppSection] = useState(0);


	return (
		<Router>
			{console.log('App.js got rendered')}

			<div className="h-screen flex flex-row">
				
				{/*---------------------------------------------------------------------------------------
					* SIDEBAR 
						Fiche journalière et planning (+ gestion planning pour le boss)
						Gestion équipes & utilisateurs
						Gestion entrepôt (stock)
						Gestion administrative et comptable

						Fiche journalière et planning
						Gestion planning & équipes
						Gestion entrepôt (stock)
						Gestion administrative et comptable
				  *---------------------------------------------------------------------------------------*/}
				<div className={cx(containersStyle, "w-20 bg-theme-700 flex-shrink-0 flex flex-col items-center")}>
					<div className={cx(firstHeaderStyle, "mb-7")}>
						<div className="m-0 p-2 py-1 rounded bg-white text-theme-700 text-center text-2xl font-black">W</div>
						{/* <div className="m-0 p-2 py-1 text-white text-center text-3xl font-black">T</div> */}
					</div>
					
					{ sidebarAppSections.map( (item, index) => 
						<MainSectionItem key={index} icon={item.icon} title={item.title} selected={index === selectedAppSection} onClick={() => setSelectedAppSection(index) }/> 
					)}
					
				</div>


				{/*---------------------------------------------------------------------------------------
					* MENU 
				  *---------------------------------------------------------------------------------------*/}
				<div className={cx(containersStyle, "w-60 px-7 bg-white flex-shrink-0")}>
					
					{/* <div className="text-theme-700 mb-6">
						<div className="text-xs text-gray-400">A afficher sur mobile</div>
						<div className="inline-block w-6 mr-2 align-top">{iconMenu}</div>
						Menu principal
					</div> */}

					<div className={cx(firstHeaderStyle, "mb-8 justify-between")}>
						<h3>Projects</h3>
						<button className="rounded-full h-8 w-8 bg-theme-700 text-theme-50 text-xl leading-none outline-none">+</button>
					</div>
					<SidebarMenuItem title="All projects" icon={iconAllProjects} />
					<SidebarMenuItem title="Pinned" icon={iconPinned} />
					<SidebarMenuItem title="In process" icon={iconInProcess} opened={true}>
						{/* <SubMenuItem /> */}
					</SidebarMenuItem>
					<SidebarMenuItem title="Done" icon={iconDone} />
				</div>
				

				{/*---------------------------------------------------------------------------------------
					* CONTENT 
				  *---------------------------------------------------------------------------------------*/}
				<div className={cx(containersStyle, "px-7 flex-auto")}>
					<div className={cx(firstHeaderStyle, "mb-8 justify-between")}>
						<input type="text" className="h-full bg-gray-100 p-2 px-4 text-sm rounded-full" placeholder="Search..." />
						<span>10 may - 13 may</span>
					</div>

					<div>To do</div>
				</div>


			</div>
		</Router>
	);
}


/*-----------------------------------------------------------------------------------------
 * ICONS
 * ---------------------------------------------------------------------------------------*/

const iconAllProjects = 
	<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
		<path strokeLinecap="round" strokeLinejoin="round" strokeWidth=".1rem" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
	</svg>

const iconPinned = 
	<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  	<path strokeLinecap="round" strokeLinejoin="round" strokeWidth=".1rem" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
	</svg>;

const iconInProcess = 
	<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
		<path strokeLinecap="round" strokeLinejoin="round" strokeWidth=".1rem" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
		<path strokeLinecap="round" strokeLinejoin="round" strokeWidth=".1rem" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
	</svg>;

const iconDone = 
	<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
		<path strokeLinecap="round" strokeLinejoin="round" strokeWidth=".1rem" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
	</svg>;


const iconSectionHome = 
	<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
		<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
	</svg>;

const iconSectionFolder = 
	<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
		<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
	</svg>;

const iconSectionTime = 
	<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
	<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
	</svg>;

const iconSectionBook = 
	<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
	<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
	</svg>;

const iconSectionStock = 
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
</svg>

const iconSectionSettings = 
	<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
	<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
	<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
	</svg>;

const iconCalculette = 
	<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
		<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
	</svg>

const iconUserGroup = 
	<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
		<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
	</svg>

const iconCheckList = 
	<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
		<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
	</svg>

const iconDocumentText = 
	<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
		<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
	</svg>

const iconCalendar = 
	<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
		<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
	</svg>

const iconMenu = 
	<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
		<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
	</svg>

export default App;