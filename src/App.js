import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


import InternetConnectionChecker from './InternetConnectionChecker';
// import InternetWatcher from './Components/InternetWatcher';
import MaFicheJournaliere from "./Pages/MaFicheJournaliere";
import MenuItem from "./Components/MenuItem";


InternetConnectionChecker.run();

function App() {
	
	var APP_NAME = "Worker";
	let APP_VERSION = '0.1.0 - build ' + new Date().toUTCString();

	return (
		<Router>
			<div className="container mx-auto px-4">
				
				{/* <InternetWatcher /> */}
				
				<div className="shadow-md p-4 mb-4 select-none">
					<span className="my-4 cursor-default select-none">
						<span className="header-title px-2 bg-yellow-400 underline">{APP_NAME}</span>
					</span>

					<MenuItem to="/" text="Ma fiche journalière"/>
					<MenuItem to="/planning" text="Mon planning"/>
				</div>

				<Switch>
					<Route path="/" component={MaFicheJournaliere} />
				</Switch>
				
				<div className="text-xs text-gray-500">Version: {APP_VERSION}</div>
			</div>
		</Router>
	);
}

export default App;
