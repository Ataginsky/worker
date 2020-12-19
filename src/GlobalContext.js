import React from "react";

const GlobalState = {
	internetAvaible: true,
	setConnexionStatus: () => {}
};

const GlobalContext = React.createContext(GlobalState);

export default GlobalContext;