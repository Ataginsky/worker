function run() {
	
	setInterval( () => {
		window.navigator.$$internetAvaible = window.navigator.onLine;
	}, 1000);

}

const Obj = {
	run: run
}


export default Obj;