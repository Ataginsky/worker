import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from "./Pages/Home";
import About from "./Pages/About";

function App() {
	
	var APP_NAME = "Worker";
	let APP_VERSION = '0.1.0 - build ' + new Date().toUTCString();

	return (
		<Router>
			<div>
				<h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">{APP_NAME}</h1>
				<h5 className="mt-1 text-lg text-gray-500">Version: {APP_VERSION}</h5>
				<ul>
					<li><Link to="/">Home</Link></li>
					<li><Link to="/about">About</Link></li>
				</ul>
			</div>

			<Switch>
				<Route path="/about" component={About} />
				<Route path="/" component={Home} />
			</Switch>
		</Router>
	);

}

export default App;
