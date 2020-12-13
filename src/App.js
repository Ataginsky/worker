import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from "./Pages/Home";
import About from "./Pages/About";

let name = "Worker";
let version = '0.1.0 - build ' + new Date().toUTCString();

function App() {

	return (
		<Router>
			<div>
				<h1>{name}</h1>
				<h5>Version: {version}</h5>
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
