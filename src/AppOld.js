import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

/* import dayjs from 'dayjs';
import dayjsfr from 'dayjs/locale/fr';
import dayjsRelativeTime from 'dayjs/plugin/relativeTime';
 */
import InternetConnectionChecker from './InternetConnectionChecker';
// import InternetWatcher from './Components/InternetWatcher';
import MaFicheJournaliere from "./Pages/MaFicheJournaliere";
import MenuItem from "./Components/MenuItemOld";

/* dayjs.locale('fr');
dayjs.extend(dayjsRelativeTime);
 */

InternetConnectionChecker.run();

function App() {
	
	let APP_VERSION = '0.1.0 - build ' + new Date().toUTCString();

	return (
		<Router>
			<div className="w-full md:container mx-auto bg-gray-50 shadow">
				
				{/* <InternetWatcher /> */}
				
				<div className="flex flex-col md:flex-row md:items-baseline justify-between shadow p-4 pb-1 md:p-4 mb-4 select-none bg-white">
					<div className="mb-4 md:mb-0 md:mr-2 cursor-default select-none
												  flex flex-row justify-between">
						<div>
							<span className="header-title px-2 bg-yellow-400 rounded">W</span>
							<span className="header-title px-2 ">Worker</span>
						</div>
						
						<div className="block md:hidden w-7 self-end">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path strokeWidth={5} fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" /></svg>
						</div>
					</div>
					
					<div>
						{/* Fiche journalière et planning (+ gestion planning pour le boss)
						Gestion équipes & utilisateurs
						Gestion entrepôt (stock)
						Gestion administrative et comptable */}
						<MenuItem to="/" text="Fiche journalière" active={true}/>
						<MenuItem to="/planning" text="Planning"/>
					</div>

					<div className="block md:hidden"></div>
					<div className="hidden md:block w-7 self-end">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path strokeWidth={5} fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" /></svg>
					</div>
				</div>

				<div className="px-4">
					<Switch>
						<Route path="/" component={MaFicheJournaliere} />
					</Switch>
				</div>

				<div className="text-xs p-4 text-gray-500">Version: {APP_VERSION}</div>
			</div>
		</Router>
	);
}

export default App;
