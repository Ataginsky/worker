import React, { useEffect, useState } from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


import GlobalContext from './GlobalContext';
import InternetWatcher from './Components/InternetWatcher';
// import useConnexion from './Hooks/useConnexion';
import FicheOuvrier from "./Pages/MaFicheJournaliere";
import MenuItem from "./Components/MenuItem";


function App() {
	
	var APP_NAME = "Worker";
	let APP_VERSION = '0.1.0 - build ' + new Date().toUTCString();

	
	const [gloablContext, setGloablContext] = useState({
		internetAvaible: true,

		setConnexionStatus: (status) => {
			setGloablContext(value => {
				// value.internetAvaible = status;
				// return value;
				return {...value, internetAvaible: status}
			})
		}
	});


	useEffect( () => {
		console.log('App context', gloablContext)
	}, [gloablContext]);



	return (
		<Router>
			<div className="container mx-auto px-4">
				
				<InternetWatcher />
				
				<div className="shadow-md p-4 mb-4 select-none">
					<span className="my-4 cursor-default select-none">
						<span className="header-title px-2 bg-yellow-400 underline">{APP_NAME}</span>
					</span>

					<MenuItem to="/" text="Ma fiche journalière"/>
					<MenuItem to="/planning" text="Mon planning"/>
				</div>

				<Switch>
					<Route path="/" component={FicheOuvrier} />
				</Switch>
				
				<div className="text-xs text-gray-500">Version: {APP_VERSION}</div>
			</div>
		</Router>
	);

}

export default App;
